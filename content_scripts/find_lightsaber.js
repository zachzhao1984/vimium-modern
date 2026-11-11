(() => {
  let host = null;
  let shadow = null;
  let cleanupTimer = null;
  let activeAnimations = [];

  const reducedMotion = globalThis.matchMedia?.("(prefers-reduced-motion: reduce)");

  function createHost() {
    host = document.createElement("div");
    host.style.cssText =
      "all:initial!important;position:fixed!important;inset:0!important;" +
      "display:none!important;z-index:2147483646!important;" +
      "pointer-events:none!important;contain:layout style!important;";
    host.setAttribute("aria-hidden", "true");
    shadow = host.attachShadow({ mode: "closed" });
    (document.fullscreenElement || document.documentElement).appendChild(host);
  }

  function stop() {
    clearTimeout(cleanupTimer);
    for (const animation of activeAnimations) animation.cancel();
    activeAnimations = [];
    if (host) {
      host.style.setProperty("display", "none", "important");
      shadow.innerHTML = "";
    }
  }

  function clampPoint(point, width, height) {
    return {
      x: Math.max(20, Math.min(width - 20, point.x)),
      y: Math.max(20, Math.min(height - 20, point.y)),
    };
  }

  function startPointFor(rect, width, height) {
    const point = centerOf(rect, width, height);
    if (!rect || (rect.width === 0 && rect.height === 0)) {
      return clampPoint(point, width, height);
    }
    const offscreen = rect.bottom < 0 || rect.top > height || rect.right < 0 || rect.left > width;
    if (!offscreen) return clampPoint(point, width, height);
    return {
      x: Math.max(-32, Math.min(width + 32, point.x)),
      y: Math.max(-32, Math.min(height + 32, point.y)),
    };
  }

  function centerOf(rect, width, height) {
    if (!rect || (rect.width === 0 && rect.height === 0)) {
      return { x: width / 2, y: height / 2 };
    }
    return {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };
  }

  function play(fromRect, toRect) {
    if (reducedMotion?.matches || document.visibilityState === "hidden") return;

    const width = globalThis.innerWidth;
    const height = globalThis.innerHeight;
    const from = startPointFor(fromRect, width, height);
    const to = clampPoint(centerOf(toRect, width, height), width, height);
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const distance = Math.hypot(dx, dy);
    if (distance < 4) return;

    stop();
    if (!host?.isConnected) createHost();
    host.style.setProperty("display", "block", "important");

    const nx = -dy / distance;
    const ny = dx / distance;
    const bend = Math.min(42, distance * 0.11);
    const control = {
      x: (from.x + to.x) / 2 + nx * bend,
      y: (from.y + to.y) / 2 + ny * bend,
    };
    const pathData = "M " + from.x + " " + from.y + " Q " + control.x + " " + control.y + " " + to.x + " " + to.y;
    const styles = [
      ":host { pointer-events: none; }",
      "svg { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; }",
      "path { fill: none; stroke-linecap: round; }",
      ".halo { stroke: #2fc88d; stroke-width: 8px; opacity: .34; filter: url(#filament-glow); }",
      ".edge { stroke: #064d37; stroke-width: 2.4px; opacity: .92; }",
      ".line { stroke: #dcffe9; stroke-width: .7px; }",
      ".bead {",
      "  position: absolute; width: 8px; height: 8px; margin: -4px; border-radius: 50%;",
      "  background: #074a35; border: 1px solid #8fffc6;",
      "  box-shadow: 0 0 4px rgba(8, 92, 62, .7), 0 0 12px #4fffb0, 0 0 22px rgba(62, 235, 151, .55);",
      "}",
    ].join("\n");
    shadow.innerHTML =
      "<style>" + styles + "</style>" +
      "<svg viewBox=\"0 0 " + width + " " + height + "\" aria-hidden=\"true\">" +
      "<defs><filter id=\"filament-glow\" x=\"-50%\" y=\"-50%\" width=\"200%\" height=\"200%\">" +
      "<feGaussianBlur stdDeviation=\"5\" /></filter></defs>" +
      "<path class=\"halo\" d=\"" + pathData + "\" />" +
      "<path class=\"edge\" d=\"" + pathData + "\" />" +
      "<path class=\"line\" d=\"" + pathData + "\" />" +
      "</svg>" +
      "<div class=\"bead\" style=\"left:" + to.x + "px;top:" + to.y + "px\"></div>";

    const path = shadow.querySelector(".line");
    const length = path.getTotalLength();
    for (const blade of shadow.querySelectorAll("path")) {
      blade.style.strokeDasharray = length + "px";
      blade.style.strokeDashoffset = length + "px";
      activeAnimations.push(
        blade.animate(
          [{ strokeDashoffset: length + "px" }, { strokeDashoffset: "0px" }],
          { duration: 95, easing: "cubic-bezier(.22,.78,.28,1)", fill: "forwards" },
        ),
      );
    }

    activeAnimations.push(
      shadow.querySelector(".bead").animate(
        [
          { opacity: 0 },
          { opacity: 1, offset: .25 },
          { opacity: 1, offset: .65 },
          { opacity: 0 },
        ],
        { duration: 250, delay: 60, easing: "ease-out", fill: "both" },
      ),
    );

    activeAnimations.push(
      host.animate(
        [
          { opacity: 0 },
          { opacity: 1, offset: .08 },
          { opacity: 1, offset: .62 },
          { opacity: 0 },
        ],
        { duration: 280, easing: "linear", fill: "forwards" },
      ),
    );
    cleanupTimer = setTimeout(stop, 330);
  }
  globalThis.LightsaberJump = { play };
})();
