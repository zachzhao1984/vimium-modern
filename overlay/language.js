(() => {
  let language = "en";
  let documentObserver = null;
  const shadowObservers = new WeakMap();
  const originals = new WeakMap();

  const labels = {
    en: { query: "Omnibar search", results: "Results", preview: "Preview" },
    "zh-CN": { query: "Omnibar 查询", results: "结果", preview: "预览" },
  };

  const translations = {
    en: {
      "书签": "Bookmarks", "标签页": "Tabs", "历史": "History", "域名": "Domains",
      "命令": "Commands", "搜索引擎": "Search engines", "打开": "Open",
      "新标签页": "New tab", "填入网址": "Fill URL", "关闭": "Close", "预览": "Preview",
      "Omnibar 查询": "Omnibar search", "结果": "Results", "未绑定": "Unbound",
      "⇥ 补全": "⇥ Complete", "已打开": "Open tab", "没有匹配的结果": "No matching results",
      "标题匹配": "Title match", "网址匹配": "URL match", "最近使用": "Recently used",
      "来源": "Source", "站点": "Site", "上次访问": "Last visited", "操作": "Action",
      "Enter 切换": "Enter to switch", "Enter 打开": "Enter to open",
      "命令模式": "Command mode", "书签模式": "Bookmark mode", "标签页模式": "Tab mode",
      "输入以搜索": "Type to search",
      "书签、标签页、历史记录和 Vimium 命令": "Bookmarks, tabs, history, and Vimium commands",
      "今天": "Today", "昨天": "Yesterday",
    },
    "zh-CN": {
      "Bookmarks": "书签", "Tabs": "标签页", "History": "历史", "Domains": "域名",
      "Commands": "命令", "Search engines": "搜索引擎", "Open": "打开",
      "New tab": "新标签页", "Fill URL": "填入网址", "Close": "关闭", "Preview": "预览",
      "Omnibar search": "Omnibar 查询", "Results": "结果", "Unbound": "未绑定",
      "⇥ Complete": "⇥ 补全", "Open tab": "已打开", "No matching results": "没有匹配的结果",
      "Title match": "标题匹配", "URL match": "网址匹配", "Recently used": "最近使用",
      "Source": "来源", "Site": "站点", "Last visited": "上次访问", "Action": "操作",
      "Enter to switch": "Enter 切换", "Enter to open": "Enter 打开",
      "Command mode": "命令模式", "Bookmark mode": "书签模式", "Tab mode": "标签页模式",
      "Type to search": "输入以搜索",
      "Bookmarks, tabs, history, and Vimium commands": "书签、标签页、历史记录和 Vimium 命令",
      "Today": "今天", "Yesterday": "昨天",
    },
  };

  const patterns = {
    en: [
      [/^没有匹配「(.+)」的结果$/, (match, query) => "No results for “" + query + "”"],
      [/^(.+) 天前$/, (match, count) => count + " days ago"],
      [/^(.+) 个月前$/, (match, count) => count + " months ago"],
      [/^(\d+) 项$/, (match, count) => count + " items"],
    ],
    "zh-CN": [
      [/^No results for “(.+)”$/, (match, query) => "没有匹配「" + query + "」的结果"],
      [/^(\d+) days ago$/, (match, count) => count + " 天前"],
      [/^(\d+) months ago$/, (match, count) => count + " 个月前"],
      [/^(\d+) items$/, (match, count) => count + " 项"],
    ],
  };

  function translate(value) {
    const trimmed = value.trim();
    let translated = translations[language][trimmed];
    if (!translated) {
      for (const entry of patterns[language]) {
        const match = trimmed.match(entry[0]);
        if (match) {
          translated = entry[1].apply(null, match);
          break;
        }
      }
    }
    return translated ? value.replace(trimmed, translated) : value;
  }

  function updateAttribute(node, name) {
    if (!node.hasAttribute(name)) return;
    let values = originals.get(node);
    if (!values) originals.set(node, values = {});
    const current = node.getAttribute(name);
    const previous = values[name];
    const original = previous && current === previous.rendered ? previous.original : current;
    const rendered = translate(original);
    values[name] = { original, rendered };
    if (current !== rendered) node.setAttribute(name, rendered);
  }

  function updateText(node) {
    if (node.parentElement?.closest("style, textarea, input, script")) return;
    let values = originals.get(node);
    if (!values) originals.set(node, values = {});
    const previous = values.text;
    const original = previous && node.data === previous.rendered ? previous.original : node.data;
    const rendered = translate(original);
    values.text = { original, rendered };
    if (node.data !== rendered) node.data = rendered;
  }

  function updateNode(node) {
    if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      node.childNodes.forEach(updateNode);
      return;
    }
    if (node.nodeType === Node.TEXT_NODE) return updateText(node);
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    if (["SCRIPT", "STYLE", "TEXTAREA"].includes(node.tagName)) return;
    for (const name of ["aria-label", "title", "placeholder"]) updateAttribute(node, name);
    node.childNodes.forEach(updateNode);
  }

  function updateAll() {
    const l = labels[language];
    for (const host of document.querySelectorAll("vimium-omnibar")) {
      const shadow = host.shadowRoot;
      if (!shadow) continue;
      if (!shadowObservers.has(shadow)) {
        const shadowObserver = new MutationObserver(() => updateAll());
        shadowObserver.observe(shadow, { childList: true, characterData: true, subtree: true });
        shadowObservers.set(shadow, shadowObserver);
      }
      updateNode(shadow);
      const panel = shadow.querySelector(".panel");
      const input = shadow.querySelector("input");
      const results = shadow.querySelector(".results");
      const preview = shadow.querySelector(".preview");
      if (panel) panel.setAttribute("aria-label", language === "en" ? "Vimium Omnibar" : "Vimium Omnibar 搜索");
      if (input) input.setAttribute("aria-label", l.query);
      if (results) results.setAttribute("aria-label", l.results);
      if (preview) preview.setAttribute("aria-label", l.preview);
      host.lang = language;
    }
  }

  function attach() {
    if (documentObserver) return;
    documentObserver = new MutationObserver(() => updateAll());
    documentObserver.observe(document.documentElement, {
      subtree: true,
      childList: true,
      characterData: true,
    });
    updateAll();
  }

  async function start() {
    const stored = await chrome.storage.sync.get({ uiLanguage: "en" }).catch(() => ({ uiLanguage: "en" }));
    language = stored.uiLanguage === "zh-CN" ? "zh-CN" : "en";
    attach();
  }

  chrome.storage.onChanged.addListener((changes, area) => {
    if (area !== "sync" || !changes.uiLanguage) return;
    language = changes.uiLanguage.newValue === "zh-CN" ? "zh-CN" : "en";
    updateAll();
  });

  start();
})();
