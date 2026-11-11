(() => {
  const translations = {
    "正在读取…": "Loading…",
    "在本页停用 Vimium Modern": "Disable Vimium Modern on this page",
    "在本页重新启用 Vimium Modern": "Enable Vimium Modern on this page",
    "本页生效的规则": "Rules for this page",
    "改动后点「保存」": "Save your changes",
    "添加规则": "Add rule",
    "所有设置": "Options",
    "关闭": "Close",
    "保存": "Save",
    "这个页面不允许扩展运行": "The extension cannot run on this page",
    "已在本页停用": "Disabled on this page",
    "所有按键可用": "All keys are enabled",
    "本页还没有规则，所有按键都归 Vimium Modern。": "No rules for this page. All keys are available to Vimium Modern.",
    "URL 模式": "URL pattern",
    "网址模式": "URL pattern",
    "全部": "All",
    "交还给网页的按键，留空表示整站停用": "Keys passed to the page; leave empty to disable on this site",
    "删除这条规则": "Delete rule",
    "网址模式不能为空": "URL pattern cannot be empty",
    "不是有效的正则表达式": "Not a valid regular expression",
    "这条规则不会匹配当前页面，保存后也不会在这里生效": "This rule does not match the current page",
    "已在本页重新启用 Vimium Modern": "Vimium Modern enabled on this page",
    "已在本页停用 Vimium Modern": "Vimium Modern disabled on this page",
    "已保存": "Saved",
    "扩展页面": "Extension page",
    "当前页面": "Current page",
    "浏览器不允许扩展在设置页、扩展商店这类页面上运行。换一个普通网页再试。": "The browser does not allow extensions on settings pages or extension stores. Try a regular web page.",
    "Vimium Modern 没有拿到这个页面的权限，或者页面还没加载完。刷新一下试试。": "Vimium Modern lacks permission for this page, or the page is still loading. Try refreshing.",
    "这个页面用不了 Vimium Modern": "Vimium Modern cannot run on this page",
    "不可用": "Unavailable"
  };

  function translate(value) {
    const trimmed = value.trim();
    let translated = translations[trimmed];
    if (!translated && trimmed.startsWith("这些键交还给网页：")) {
      translated = "Keys passed to the page: " + trimmed.slice("这些键交还给网页：".length).replaceAll("、", ", ");
    }
    if (!translated && trimmed.startsWith("保存失败：")) {
      translated = "Could not save: " + trimmed.slice("保存失败：".length);
    }
    return translated ? value.replace(trimmed, translated) : value;
  }

  function translateNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      if (node.parentElement?.id !== "host") {
        const translated = translate(node.data);
        if (translated !== node.data) node.data = translated;
      }
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    for (const attribute of ["placeholder", "aria-label"]) {
      if (node.hasAttribute(attribute)) node.setAttribute(attribute, translate(node.getAttribute(attribute)));
    }
    node.childNodes.forEach(translateNode);
  }

  async function start() {
    const { uiLanguage } = await chrome.storage.sync.get({ uiLanguage: "en" }).catch(() => ({ uiLanguage: "en" }));
    document.documentElement.lang = uiLanguage === "zh-CN" ? "zh-CN" : "en";
    if (uiLanguage !== "zh-CN") {
      translateNode(document.body);
      new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.type === "characterData") translateNode(mutation.target);
          else mutation.addedNodes.forEach(translateNode);
        }
      }).observe(document.body, { childList: true, characterData: true, subtree: true });
    }
    const script = document.createElement("script");
    script.src = "/popup/index.js";
    document.body.appendChild(script);
    document.body.hidden = false;
  }

  start();
})();
