!function(){if("u">typeof WebSocket){var e=WebSocket;globalThis.WebSocket=function(t,i){if("string"==typeof t&&-1!==t.indexOf("rsbuild-hmr")){var r={close:function(){},send:function(){},addEventListener:function(){},removeEventListener:function(){}};return Object.defineProperty(r,"readyState",{get:function(){return 1}}),Object.defineProperty(r,"protocol",{value:i||""}),Object.defineProperty(r,"bufferedAmount",{value:0}),Object.defineProperty(r,"extensions",{value:""}),setTimeout(function(){r.onopen&&r.onopen()},0),r}return new e(t,i)},globalThis.WebSocket.prototype=e.prototype,Object.setPrototypeOf(globalThis.WebSocket,e)}}(),function(){var e="u">typeof globalThis?globalThis:"u">typeof self?self:"u">typeof window?window:this,t="u">typeof window?window:null;e&&void 0===e.rspackHotUpdatevimium_addfox&&(e.rspackHotUpdatevimium_addfox=function(){}),t&&t!==e&&void 0===t.rspackHotUpdatevimium_addfox&&(t.rspackHotUpdatevimium_addfox=function(){})}(),(()=>{"use strict";let e=`
/* ============================================================================
   1. 设计令牌
   ========================================================================== */
:host {
  all: initial;

  /* 品牌蓝：取自 Vimium 官方 icon.svg 的 #1972e7 / #1969d5 */
  --v-accent: #1660c9;          /* 正文用品牌蓝：对普通行 5.8:1，对选中行 4.9:1，均过 AA */
  --v-accent-hi: #1972e7;       /* 装饰用（图标、边框），可以更亮 */
  --v-accent-soft: rgba(25, 114, 231, .12);
  --v-accent-glow: rgba(25, 114, 231, .28);

  /* 面板底不透明度由「最坏背景」反推：.72 时三级文本叠在深色网页上只有 ~3:1，
     抬到 .84 后仍能看见背景透出，但任意底色上三级文本都还能过 AA。 */
  --v-surface: rgba(255, 255, 255, .90);
  --v-surface-raised: rgba(255, 255, 255, .96);
  --v-surface-sunken: rgba(0, 0, 0, .04);
  --v-hairline: rgba(0, 0, 0, .10);
  --v-hairline-strong: rgba(0, 0, 0, .16);

  --v-text: #1c1c1e;
  --v-text-dim: #5e5e66;
  /* 三级文本（分组头、分组计数）—— 原 #96969e 在面板底上只有 2.81:1。
     #6c6c76 在白/面板/侧栏三种底色上最差 4.56:1。 */
  --v-text-faint: #5f5f68;

  /* 选中行：底色用 tint，文字仍用 --v-text，
     品牌蓝只留给左边条和匹配高亮 —— 避免整行文字被染色导致对比度塌陷 */
  --v-sel-bg: rgba(25, 114, 231, .10);
  --v-sel-text: #1c1c1e;

  /* 来源类型色 */
  --t-bookmark: #f5a623;
  --t-history: #7d7d85;
  --t-tab: #34c759;
  --t-command: #af52de;
  --t-engine: #007aff;
  --t-domain: #5e5e66;

  --v-shadow-panel: 0 24px 64px rgba(0, 0, 0, .22), 0 2px 8px rgba(0, 0, 0, .10);
  --v-shadow-pop: 0 8px 24px rgba(0, 0, 0, .16);

  --r-panel: 12px;
  --r-field: 8px;
  --r-chip: 5px;
  --r-icon: 4px;

  --font: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", system-ui, sans-serif;
  --mono: "SF Mono", ui-monospace, "JetBrains Mono", Menlo, monospace;

  --ease-out: cubic-bezier(.2, .9, .3, 1);
  --ease-inout: cubic-bezier(.4, 0, .2, 1);
  --dur-open: 180ms;
  --dur-select: 90ms;
  --dur-hl: 120ms;

  /* 宿主本身铺满视口，但默认不吃指针事件；只有面板吃。 */
  position: fixed;
  inset: 0;
  z-index: 2147483647;
  display: block;
  padding: 0;
  margin: 0;
  border: 0;
  background: none;
  pointer-events: none;
  contain: layout style;
  font-family: var(--font);
  color-scheme: light;
}

/* 关闭态。:host { display: block } 是作者样式，会盖掉 UA 的 [hidden]{display:none}，
   所以必须自己写一条，否则「隐藏」的宿主依然占满视口（虽然不吃指针事件，但仍参与绘制）。 */
:host([hidden]) { display: none !important; }

/* 深色令牌 —— 唯一的深色来源。
   原型里「系统深色」和「手动深色」各写一份会漂移；这里由 JS 把
   prefers-color-scheme 解析成 light/dark 后写到 data-theme，CSS 只认这一个属性。 */
:host([data-theme="dark"]) {
  color-scheme: dark;
  --v-accent: #9ec5ff;          /* 深色下品牌蓝太暗，正文改用浅蓝：对普通行 9.8:1 */
  --v-accent-hi: #5a9cf5;
  --v-accent-soft: rgba(90, 156, 245, .16);
  --v-accent-glow: rgba(90, 156, 245, .34);
  /* 深色同样按最坏背景（浅色网页）反推：.66 叠在白底上会变成 #6a6a6c，
     面板看起来是灰的、三级文本掉到 2:1。.88 之后仍是玻璃，但底色可预测。 */
  --v-surface: rgba(24, 24, 27, .88);
  --v-surface-raised: rgba(52, 52, 58, .93);
  --v-surface-sunken: rgba(255, 255, 255, .05);
  --v-hairline: rgba(255, 255, 255, .11);
  --v-hairline-strong: rgba(255, 255, 255, .18);
  --v-text: #f2f2f7;
  /* 最坏情况是「深色面板 + 浅色网页 + 选中行」：行底会被抬到 #586855 附近，
     #a8a8b0 在它上面只有 4.14:1。抬到 #b8b8c2 后最差 4.9:1。 */
  --v-text-dim: #b8b8c2;
  /* 深色三级文本 —— 原 #72727a 在面板底上只有 2.84:1。
     #9e9ea8 在页脚/分组头/计数/面板/卡片/深面板六种底色上最差 4.82:1。 */
  --v-text-faint: #9e9ea8;
  --v-sel-bg: rgba(90, 156, 245, .16);
  --v-sel-text: #f2f2f7;
  --t-bookmark: #ffb340;
  --t-history: #98989f;
  --t-tab: #4cd964;
  --t-command: #c77dff;
  --t-engine: #4aa3ff;
  --t-domain: #a8a8b0;
  --v-shadow-panel: 0 24px 64px rgba(0, 0, 0, .58), 0 2px 8px rgba(0, 0, 0, .4);
  --v-shadow-pop: 0 8px 24px rgba(0, 0, 0, .5);
}

/* ============================================================================
   2. 基础
   ========================================================================== */
* { box-sizing: border-box; margin: 0; padding: 0; }

/* ============================================================================
   3. 场景容器
   ========================================================================== */
.stage {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: start center;
  padding-top: min(11vh, 104px);
  pointer-events: none;
}

/* ============================================================================
   4. 面板
   ========================================================================== */
.panel {
  pointer-events: auto;
  width: min(680px, 88vw);
  max-height: min(560px, 70vh);
  display: flex;
  flex-direction: column;
  background: var(--v-surface);
  backdrop-filter: blur(34px) saturate(180%);
  -webkit-backdrop-filter: blur(34px) saturate(180%);
  border: .5px solid var(--v-hairline-strong);
  border-radius: var(--r-panel);
  box-shadow: var(--v-shadow-panel);
  overflow: hidden;
  transform-origin: top center;
  animation: panelIn var(--dur-open) var(--ease-out) both;
  color: var(--v-text);
  font-family: var(--font);
  font-size: 13px;
  line-height: normal;
  text-align: left;
  letter-spacing: normal;
}

@keyframes panelIn {
  from { opacity: 0; transform: translateY(-8px) scale(.985); }
  to   { opacity: 1; transform: none; }
}

/* --- 输入区 --- */
.field {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 14px;
  height: 52px;
  flex: none;
  border-bottom: .5px solid var(--v-hairline);
  background: var(--v-surface-raised);
}

.field-icon {
  flex: none;
  width: 17px; height: 17px;
  color: var(--v-text-faint);
  transition: color var(--dur-hl) ease-out;
}
.panel.is-focused .field-icon { color: var(--v-accent); }

.field input {
  flex: 1 1 auto;
  min-width: 0;
  border: none;
  background: none;
  outline: none;
  font-family: var(--font);
  font-size: 19px;
  font-weight: 400;
  letter-spacing: -.01em;
  color: var(--v-text);
  caret-color: var(--v-accent);
}
.field input::placeholder { color: var(--v-text-faint); }

.mode-badge {
  flex: none;
  display: none;
  align-items: center;
  gap: 5px;
  height: 22px;
  padding: 0 8px;
  border-radius: var(--r-chip);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .02em;
  background: var(--v-accent-soft);
  color: var(--v-accent);
}
.mode-badge.on { display: flex; }
.mode-badge kbd {
  font-family: var(--mono);
  font-size: 11px;
  font-weight: 500;
}

/* --- 结果区 --- */
.results {
  flex: 1 1 auto;
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: 6px 0 10px;
  scrollbar-width: thin;
  scrollbar-color: var(--v-hairline-strong) transparent;
  /* 底部渐隐，暗示还有更多内容 */
  mask-image: linear-gradient(to bottom, #000 calc(100% - 22px), transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, #000 calc(100% - 22px), transparent 100%);
}
.results::-webkit-scrollbar { width: 8px; }
.results::-webkit-scrollbar-thumb {
  background: var(--v-hairline-strong);
  border-radius: 4px;
  border: 2px solid transparent;
  background-clip: content-box;
}

.group-head {
  display: flex;
  align-items: baseline;
  gap: 7px;
  padding: 12px 16px 5px;
  position: sticky;
  top: 0;
  z-index: 2;
  /* 粘性分组头需要不透明底色，否则下方内容会透出来 */
  background: var(--v-surface-raised);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
}
.group-head::after {
  content: "";
  position: absolute;
  left: 0; right: 0; top: 100%;
  height: 10px;
  background: linear-gradient(var(--v-surface-raised), transparent);
  pointer-events: none;
}
.group-head:first-child { padding-top: 7px; }
.group-title {
  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: .09em;
  text-transform: uppercase;
  color: var(--v-text-faint);
}
.group-count {
  font-family: var(--mono);
  font-size: 10.5px;
  color: var(--v-text-faint);
}

.item {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin: 0 8px;
  padding: 7px 10px 7px 11px;
  border-radius: 7px;
  cursor: default;
  transition: background var(--dur-select) var(--ease-inout);
}
/* 选中标记画在行内，不依赖溢出裁切 */
.item::before {
  content: "";
  position: absolute;
  left: 3px; top: 50%;
  width: 2.5px; height: 0;
  border-radius: 2px;
  background: var(--v-accent);
  transform: translateY(-50%);
  transition: height var(--dur-select) var(--ease-inout);
}
.item:hover { background: var(--v-surface-sunken); }
.item.sel { background: var(--v-sel-bg); }
.item.sel::before { height: calc(100% - 16px); }

.item-icon {
  flex: none;
  width: 22px; height: 22px;
  margin-top: 1px;
  border-radius: var(--r-icon);
  display: grid;
  place-items: center;
  font-size: 11px;
  font-weight: 600;
  color: #fff;
  letter-spacing: 0;
}
.item-icon.bookmark { background: var(--t-bookmark); }
.item-icon.history  { background: var(--t-history); }
.item-icon.tab      { background: var(--t-tab); }
.item-icon.domain   { background: var(--t-domain); }
.item-icon.command  { background: var(--t-command); }
.item-icon.engine   { background: var(--t-engine); }
.item-icon svg { width: 13px; height: 13px; display: block; }

.item-body {
  flex: 1 1 auto;
  min-width: 0;
}
.item-title {
  font-size: 13px;
  font-weight: 500;
  color: var(--v-text);
  line-height: 1.35;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/* 选中行：文字保持正文色，靠左边条 + 底色表达选中（不靠加粗）。 */
.item.sel .item-title { color: var(--v-sel-text); }
.item-title .hl {
  color: var(--v-accent);
  font-weight: 600;
  animation: hlIn var(--dur-hl) ease-out both;
}
@keyframes hlIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
.item-sub {
  margin-top: 1px;
  font-size: 11.5px;
  color: var(--v-text-dim);
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.item-sub .hl { color: var(--v-accent); font-weight: 600; }

.item-meta {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 4px;
}
/* 命令项的按键徽章靠右 */
.item > .item-meta {
  flex: none;
  margin-top: 0;
  align-self: center;
}

/* 按键徽章 */
.key {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  padding: 0 5px;
  border-radius: var(--r-chip);
  background: var(--v-surface-sunken);
  border: .5px solid var(--v-hairline);
  font-family: var(--mono);
  font-size: 11px;
  font-weight: 500;
  color: var(--v-text-dim);
  line-height: 1;
}
.item.sel .key {
  background: rgba(255, 255, 255, .62);
  border-color: transparent;
  color: var(--v-accent);
}
:host([data-theme="dark"]) .item.sel .key {
  background: rgba(255, 255, 255, .1);
}
.key.unbound {
  font-family: var(--font);
  font-size: 10.5px;
  color: var(--v-text-faint);
  background: none;
  border-style: dashed;
  border-color: var(--v-hairline-strong);
}

/* 历史新鲜度 */
.recency {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: var(--v-text-faint);
}
.recency .dot {
  width: 5px; height: 5px;
  border-radius: 50%;
  background: var(--t-tab);
}

/* 书签文件夹 */
.folder {
  font-size: 10.5px;
  color: var(--v-text-faint);
  padding: 0 4px;
  border-radius: 3px;
  background: var(--v-surface-sunken);
}

/* --- 空态 --- */
.empty {
  padding: 34px 20px 38px;
  text-align: center;
}
.empty-mark {
  width: 38px; height: 38px;
  margin: 0 auto 12px;
  border-radius: 10px;
  display: grid; place-items: center;
  background: var(--v-surface-sunken);
  color: var(--v-text-faint);
}
.empty-title {
  font-size: 13.5px;
  font-weight: 500;
  color: var(--v-text);
  margin-bottom: 4px;
}
.empty-hint {
  font-size: 12px;
  color: var(--v-text-dim);
  line-height: 1.5;
}
.empty-hint kbd {
  font-family: var(--mono);
  font-size: 11px;
  padding: 1px 5px;
  border-radius: 4px;
  background: var(--v-surface-sunken);
  border: .5px solid var(--v-hairline);
}

/* --- 页脚 --- */
.footer {
  flex: none;
  display: flex;
  align-items: center;
  gap: 14px;
  height: 34px;
  padding: 0 14px;
  border-top: .5px solid var(--v-hairline);
  background: var(--v-surface-raised);
  font-size: 11px;
  color: var(--v-text-faint);
  min-width: 0;
  overflow: hidden;
}
.footer .hint {
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
  flex: none;
}
.footer .hint kbd {
  font-family: var(--mono);
  font-size: 10.5px;
  padding: 1px 4px;
  border-radius: 3px;
  background: var(--v-surface-sunken);
  border: .5px solid var(--v-hairline);
  color: var(--v-text-dim);
}
.footer .spacer { margin-left: auto; }
.footer .count {
  font-family: var(--mono);
  font-size: 10.5px;
}

/* ============================================================================
   5. 预览窗格（宽屏）
   ========================================================================== */
.stage.has-preview .panel-shell {
  display: flex;
  align-items: stretch;
  gap: 10px;
  max-width: 100%;
}
.stage.has-preview .panel { width: min(660px, 92vw); }
.stage.has-preview .preview { max-height: min(560px, 70vh); }
.stage.has-preview .panel { align-self: stretch; }

.preview {
  display: none;
  flex: none;
  width: 300px;
  max-width: 300px;
  border: .5px solid var(--v-hairline-strong);
  border-radius: var(--r-panel);
  background: var(--v-surface);
  backdrop-filter: blur(34px) saturate(180%);
  -webkit-backdrop-filter: blur(34px) saturate(180%);
  box-shadow: var(--v-shadow-panel);
  padding: 14px;
  /* pointer-events 是可继承的，.stage 设了 none，这里必须显式打开，
     否则预览窗格里的滚动与选中都点不到。 */
  pointer-events: auto;
  flex-direction: column;
  gap: 11px;
  overflow-y: auto;
  animation: previewIn var(--dur-open) var(--ease-out) both;
}
.stage.has-preview .preview { display: flex; }

@keyframes previewIn {
  from { opacity: 0; transform: translateX(6px); }
  to   { opacity: 1; transform: none; }
}
.preview-shot {
  height: 158px;
  border-radius: 8px;
  border: .5px solid var(--v-hairline);
  background: var(--v-surface-sunken);
  display: grid;
  place-items: center;
  color: var(--v-text-faint);
  overflow: hidden;
  position: relative;
}
.preview-shot svg { width: 100%; height: 100%; }
.preview-title {
  font-size: 13.5px;
  font-weight: 600;
  line-height: 1.35;
  color: var(--v-text);
}
.preview-url {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--v-text-dim);
  word-break: break-all;
  line-height: 1.5;
}
.preview-rows { display: flex; flex-direction: column; gap: 7px; margin-top: 2px; }
.preview-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
  font-size: 11.5px;
}
.preview-row dt { color: var(--v-text-faint); flex: none; }
.preview-row dd {
  color: var(--v-text-dim);
  text-align: right;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 相关度条 */
.preview-score {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 9px 0 1px;
  border-top: .5px solid var(--v-hairline);
}
.score-bar {
  flex: 1 1 auto;
  height: 4px;
  border-radius: 2px;
  background: var(--v-surface-sunken);
  overflow: hidden;
}
.score-bar span {
  display: block;
  height: 100%;
  border-radius: 2px;
  background: var(--v-accent);
  opacity: .75;
  transition: width var(--dur-select) var(--ease-inout);
}
.score-label {
  flex: none;
  font-size: 11px;
  color: var(--v-text-faint);
}

/* ============================================================================
   6. 响应式 / 无障碍
   ========================================================================== */
@media (max-width: 900px) {
  .stage.has-preview .panel { width: min(680px, 92vw); }
  .preview { display: none; }
  .stage { padding-top: 6vh; }
}

@media (max-width: 560px) {
  .panel { width: calc(100vw - 24px); max-height: 78vh; }
  .field { height: 48px; padding: 0 12px; }
  .field input { font-size: 17px; }

  /* 页脚按优先级收缩：先去掉最次要的提示，而不是让它们被裁掉一半。
     「打开」是主路径，必须留着。 */
  .footer { gap: 10px; padding: 0 12px; }
  .footer .hint.p4 { display: none; }
  .footer .hint.p3 { display: none; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: .001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .001ms !important;
  }
}

/* 焦点可见性 */
:focus-visible {
  outline: 2px solid var(--v-accent);
  outline-offset: 2px;
  border-radius: 4px;
}

/* 仅供屏幕阅读器读取 */
.sr-only {
  position: absolute;
  width: 1px; height: 1px;
  padding: 0; margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
}
`,t=globalThis,i=e=>String(e).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),r={a:"Alt",c:"Ctrl",m:"Cmd",s:"Shift"},s={left:"←",right:"→",up:"↑",down:"↓",space:"Space",tab:"Tab",enter:"↵",escape:"Esc",backspace:"⌫",delete:"Del"};function n(e){return/^[a-zA-Z]$/.test(e)?e===e.toUpperCase()?`Shift ${e}`:e.toUpperCase():e}function a(e,t){let i=t.split(/\s+/).filter(Boolean).map(e=>e.toLowerCase());if(!i.length||!e)return[];let r=e.toLowerCase(),s=[];for(let e of i){let t=0;for(;;){let i=r.indexOf(e,t);if(-1===i)break;for(let t=0;t<e.length;t++)s.push(i+t);t=i+e.length}}return[...new Set(s)].sort((e,t)=>e-t)}function o(e,t){let r=a(e||"",t);if(!r.length)return i(e||"");let s="",n=0;for(let t=0;t<r.length;){let a=t;for(;a+1<r.length&&r[a+1]===r[a]+1;)a++;s+=i(e.slice(n,r[t])),s+=`<span class="hl">${i(e.slice(r[t],r[a]+1))}</span>`,n=r[a]+1,t=a+1}return s+i(e.slice(n))}let l={bookmark:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4.2 2.4h7.6v11.2L8 10.6l-3.8 3z"/></svg>',tab:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2.4" y="3.4" width="11.2" height="9.2" rx="1.6"/><path d="M4.6 1.8h8.8"/></svg>',history:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="8" cy="8" r="5.6"/><path d="M8 4.6V8l2.6 1.6"/></svg>',domain:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="8" cy="8" r="5.6"/><ellipse cx="8" cy="8" rx="2.6" ry="5.6"/><path d="M2.6 8h10.8"/></svg>',command:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 2.8 4.6 3.4v9.2L6 12.8"/><path d="M9.4 4.4h2.2M9.4 8h2.2M9.4 11.6h2.2"/></svg>',engine:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="7" cy="7" r="4.6"/><path d="M10.6 10.6 14 14"/></svg>'},d=["bookmark","tab","history","domain","command","engine"],c={bookmark:"书签",tab:"标签页",history:"历史",domain:"域名",command:"命令",engine:"搜索引擎"},h={omni:"",bookmarks:"书签",tabs:"标签页",commands:"命令"},p={bookmarks:"B",tabs:"T",commands:":"};class u{host;shadow;el;open_=!1;completer="omni";query="";keyword=null;prefixCount=1;forceNewTab=!1;initialSelection=-1;rows=[];groups=[];selected=0;activeEngine=null;engines={};previousInputValue=null;prefilled=!1;lastRequestId=null;onHiddenCallback=null;suppressId=null;showPreview=!0;constructor(){this.host=document.createElement("vimium-omnibar"),this.host.setAttribute("hidden",""),this.shadow=this.host.attachShadow({mode:"open"});let t=document.createElement("style");t.textContent=e,this.shadow.innerHTML=`
      <div class="stage" part="stage">
        <div class="panel-shell">
          <div class="panel" role="dialog" aria-modal="true" aria-label="Vimium Omnibar">
            <div class="field">
              <svg class="field-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <circle cx="9" cy="9" r="6.4" stroke="currentColor" stroke-width="1.6"/>
                <path d="M13.6 13.6 17.5 17.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
              </svg>
              <input type="text" autocomplete="off" spellcheck="false"
                     role="combobox" aria-expanded="true" aria-controls="results"
                     aria-autocomplete="list" aria-label="Omnibar 查询">
              <span class="mode-badge"></span>
            </div>
            <div class="results" role="listbox" aria-label="结果"></div>
            <div class="footer">
              <span class="hint p1"><kbd>Enter</kbd> 打开</span>
              <span class="hint p2"><kbd>Shift</kbd><kbd>Enter</kbd> 新标签页</span>
              <span class="hint p3"><kbd>Ctrl</kbd><kbd>Enter</kbd> 填入网址</span>
              <span class="hint p4"><kbd>Esc</kbd> 关闭</span>
              <span class="spacer"></span>
              <span class="count"></span>
            </div>
            <div class="sr-only" role="status" aria-live="polite" aria-atomic="true"></div>
          </div>
          <aside class="preview" aria-label="预览"></aside>
        </div>
      </div>`,this.shadow.prepend(t),this.el={stage:this.shadow.querySelector(".stage"),panel:this.shadow.querySelector(".panel"),input:this.shadow.querySelector("input"),results:this.shadow.querySelector(".results"),preview:this.shadow.querySelector(".preview"),badge:this.shadow.querySelector(".mode-badge"),count:this.shadow.querySelector(".count"),live:this.shadow.querySelector(".sr-only")},this.bind(),this.watchTheme()}bind(){let e=this.el.input;e.addEventListener("input",()=>{if(t.chrome.runtime.sendMessage({handler:"cancelCompletions",completerName:this.completerName()}),!this.activeEngine){let t=this.engineForQuery();if(t){this.activeEngine=t;let i=e.value.trim().split(/\s+/);e.value=i.slice(1).join(" ")}}null!=this.previousInputValue&&(this.previousInputValue=null,this.selected=-1),this.query=e.value,this.update()}),e.addEventListener("focus",()=>this.el.panel.classList.add("is-focused")),e.addEventListener("blur",()=>this.el.panel.classList.remove("is-focused")),e.addEventListener("keydown",e=>this.onKeyEvent(e)),e.addEventListener("keypress",e=>{"Enter"!==e.key||e.isComposing||this.onKeyEvent(e)}),this.el.results.addEventListener("mousemove",e=>{let t=e.target.closest?.(".item");if(!t)return;let i=Number(t.dataset.idx);i!==this.selected&&(this.selected=i,this.applySelectionToInput(),this.render())}),this.el.results.addEventListener("click",e=>{let t=e.target.closest?.(".item");if(!t)return;let i=Number(t.dataset.idx);i>=0&&(this.selected=i,this.activate())}),document.addEventListener("pointerdown",e=>{!this.open_||(e.composedPath?.()||[]).includes(this.host)||this.hide()},!0),window.addEventListener("focus",()=>{this.open_&&e.focus()},!0),window.addEventListener("resize",()=>{this.open_&&this.renderPreview()})}async show(e){await t.Settings.onLoaded(),this.completer=e.completer||"omni",this.forceNewTab=!!e.newTab,this.prefixCount=e.prefixCount??1,this.keyword=e.keyword??null,this.initialSelection=e.selectFirst?0:-1,this.engines=function(e){let t={};for(let i of String(e||"").split("\n").map(e=>e.replace(/[#].*$/,"").trim()).filter(e=>e.length>0)){let e=i.split(/[ \t]+/);if(e.length<2||!e[0].includes(":"))continue;let r=e[0].split(":")[0],s=e[1],n=e.length>2?e.slice(2).join(" "):`search (${r})`;/^\w[\w+.-]*:/.test(s)&&(t[r]={keyword:r,url:s,description:n})}return t}(t.Settings.get("searchEngines")),this.activeEngine=this.keyword?this.engines[this.keyword]??null:null,this.selected=this.initialSelection,this.previousInputValue=null,this.lastRequestId=null,this.prefilled=!!(e.query&&e.query.length),this.host.isConnected||document.documentElement.appendChild(this.host),this.host.removeAttribute("hidden"),this.el.input.value=e.query??"",this.query=this.el.input.value,null==this.suppressId&&(this.suppressId=t.handlerStack.push({_name:"vimium-omnibar",keydown:()=>t.handlerStack.passEventToPage,keypress:()=>t.handlerStack.passEventToPage,keyup:()=>t.handlerStack.passEventToPage,click:()=>t.handlerStack.passEventToPage,mousedown:()=>t.handlerStack.passEventToPage})),this.open_=!0,this.el.input.focus();let i=this.completerName();t.chrome.runtime.sendMessage({handler:"refreshCompletions",completerName:i}),this.update(),this.onHiddenCallback=null}hide(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(!this.open_)return;this.onHiddenCallback=e,this.open_=!1,this.el.input.blur(),this.host.setAttribute("hidden",""),null!=this.suppressId&&(t.handlerStack.remove(this.suppressId),this.suppressId=null),this.query="",this.rows=[],this.groups=[],this.el.results.innerHTML="",this.el.preview.innerHTML="",this.el.stage.classList.remove("has-preview");let i=this.onHiddenCallback;this.onHiddenCallback=null,i&&requestAnimationFrame(()=>i())}completerName(){return this.deriveMode()||this.completer}deriveMode(){let e=this.query.trim();return e.startsWith(":")?"commands":/^B(\s|$)/.test(e)?"bookmarks":/^T(\s|$)/.test(e)?"tabs":null}static stripPrefix(e){let t=e.trim();return t.startsWith(":")||/^B(\s|$)/.test(t)||/^T(\s|$)/.test(t)?t.slice(1).trim():t}stripPrefix(){return u.stripPrefix(this.query)}engineForQuery(){let e=this.el.input.value.trimStart().split(/\s+/);if(e.length<=1)return null;let t=e[0];return Object.prototype.hasOwnProperty.call(this.engines,t)?this.engines[t]:null}getInputValueAsQuery(){return(this.activeEngine?this.activeEngine.keyword+" ":"")+this.el.input.value}async update(){let e=String(Math.random()).slice(2)+Date.now();this.lastRequestId=e;let t=this.getInputValueAsQuery(),i=u.stripPrefix(t),r=i.split(/\s+/).filter(e=>e.length>0),s=this.completerName(),n=[];n=0===r.length?"omni"===s?await this.request("tabs",[],""):"commands"===s?await this.request("commands",[""],"",{maxResults:500}):await this.request(s,[],""):await this.request(s,r,i,"commands"===s?{maxResults:500}:{}),this.lastRequestId===e&&(this.renderRows(n),this.render(),this.el.input.focus())}async request(e,i,r){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};try{let n=await t.chrome.runtime.sendMessage({handler:"filterCompletions",completerName:e,queryTerms:i,query:r,...s});return Array.isArray(n)?n:[]}catch{return[]}}renderRows(e){let t=e.map(e=>{let t=function(e){if(e.isCustomSearch)return"engine";switch(e.description){case"bookmark":return"bookmark";case"tab":return"tab";case"history":default:return"history";case"domain":return"domain";case"command":return"command"}}(e),i=e.command?e.title||"":e.title||e.url||"",r=e.isCustomSearch?e.description||"":e.url?String(e.url||"").replace(/^https?:\/\//,"").replace(/^www\./,"").replace(/\/$/,""):"";return{item:e,source:t,title:i,sub:r}});this.rows=t,this.groups=d.map(e=>({source:e,rows:t.filter(t=>t.source===e)})).filter(e=>e.rows.length>0);let i="commands"===this.completerName()||e[0]?.autoSelect||!this.prefilled&&this.query.trim().length>0?0:this.initialSelection;this.selected=Math.min(t.length-1,Math.max(this.initialSelection,i))}render(){let e=this.stripPrefix(),t=this.rows,i=Math.min(this.selected,Math.max(0,t.length-1)),r=this.groups.map(r=>`<div class="group-head"><span class="group-title">${c[r.source]}</span><span class="group-count">${r.rows.length}</span></div>`+r.rows.map(r=>this.renderRow(r,t.indexOf(r),i,e)).join("")).join("");this.el.results.innerHTML=r||this.renderEmpty(e);let s=h[this.completerName()]||"";s?(this.el.badge.classList.add("on"),this.el.badge.innerHTML=`<kbd>${p[this.completerName()]}</kbd> ${s}`):(this.el.badge.classList.remove("on"),this.el.badge.innerHTML=""),t.length?this.el.input.setAttribute("aria-activedescendant",`opt-${i}`):this.el.input.removeAttribute("aria-activedescendant"),this.el.count.textContent=t.length?`${t.length} 项`:"",this.announce();let n=this.el.results.querySelector(".item.sel");n&&n.scrollIntoView({block:"nearest"}),this.renderPreview()}renderRow(e,t,a,d){let c=e.item,h=t===a,p=`<div class="item-icon ${e.source}">${l[e.source]||""}</div>`,u="",v="";if("command"===e.source){let t=(c.command?.keys||[]).slice(0,2).map(e=>`<span class="key">${i(function(e){let t;if(!e)return"";if(1===e.length)return n(e);if(!e.includes("<"))return e;let i=e.match(/^<([^>]+)>(.*)$/);if(!i)return e;let[,a,o]=i,l=a.split("-"),d=l.pop(),c=l.map(e=>e.toLowerCase()).sort(),h=s[d.toLowerCase()];t=h||(/^f\d{1,2}$/i.test(d)?d.toUpperCase():1===d.length?n(d):d);let p=[...c.map(e=>r[e]||e.toUpperCase()),t].join(" ");return o?`${p} ${o}`:p}(e))}</span>`).join("");u=`<div class="item-body"><div class="item-title">${o(e.title,d)}</div></div>
              <div class="item-meta">${t||'<span class="key unbound">未绑定</span>'}</div>`}else if("engine"===e.source){let t=this.activeEngine?.keyword||(c.insertText?c.insertText.trim().split(/\s+/)[0]:"");v=[t?`<span class="key">${i(t)}</span>`:"",c.insertText?'<span class="key unbound">⇥ 补全</span>':""].join(""),u=`<div class="item-body">
                <div class="item-title">${o(e.title,d)}</div>
                <div class="item-sub">${i(e.sub)}</div>
                ${v?`<div class="item-meta">${v}</div>`:""}
              </div>`}else{if("history"===e.source){let e=this.recencyOf(c);e&&(v=`<span class="recency"><span class="dot"></span>${e}</span>`)}"tab"===e.source&&(v='<span class="key">已打开</span>'),u=`<div class="item-body">
                <div class="item-title">${o(e.title,d)}</div>
                ${e.sub?`<div class="item-sub">${o(e.sub,d)}</div>`:""}
                ${v?`<div class="item-meta">${v}</div>`:""}
              </div>`}return`<div class="item${h?" sel":""}" role="option" aria-selected="${h}" data-idx="${t}" id="opt-${t}">${p}${u}</div>`}recencyOf(e){try{let t=e.relevancyData?JSON.parse(e.relevancyData):null,i=t?.lastVisitTime;if(!i)return"";let r=(Date.now()-i)/864e5;if(r<1)return"今天";if(r<2)return"昨天";if(r<30)return`${Math.round(r)} 天前`;return`${Math.round(r/30)} 个月前`}catch{return""}}renderEmpty(e){let t={commands:{title:"命令模式",hint:"输入命令名，例如 <kbd>close</kbd>、<kbd>tab</kbd>、<kbd>zoom</kbd>"},bookmarks:{title:"书签模式",hint:"输入书签名称或网址"},tabs:{title:"标签页模式",hint:"输入标签页标题或网址"}}[this.completerName()];return t&&!e?`<div class="empty">
        <div class="empty-mark"><svg viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8.5" cy="8.5" r="5.6"/><path d="M12.8 12.8 17 17"/></svg></div>
        <div class="empty-title">${t.title}</div>
        <div class="empty-hint">${t.hint}</div>
      </div>`:e?`<div class="empty">
        <div class="empty-mark"><svg viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8.5" cy="8.5" r="5.6"/><path d="M12.8 12.8 17 17"/></svg></div>
        <div class="empty-title">没有匹配「${i(e)}」的结果</div>
        <div class="empty-hint">按 <kbd>Enter</kbd> 用默认搜索引擎搜索，或按 <kbd>:</kbd> 只看命令</div>
      </div>`:`<div class="empty">
      <div class="empty-title">输入以搜索</div>
      <div class="empty-hint">书签、标签页、历史记录和 Vimium 命令</div>
    </div>`}announce(){let e=this.rows[this.selected];if(!e){this.el.live.textContent=this.query?"没有匹配的结果":"";return}this.el.live.textContent=`${c[e.source]}，${e.title||e.sub}，第 ${this.selected+1} 项，共 ${this.rows.length} 项`}renderPreview(){let e=this.rows[this.selected],t=e&&this.selected>=0&&"command"!==e.source&&"engine"!==e.source,r=!!(this.showPreview&&t&&window.innerWidth>=900);if(this.el.stage.classList.toggle("has-preview",r),!r){this.el.preview.innerHTML="";return}let s=e.item,n=(()=>{try{return new URL(s.url||"").hostname}catch{return"—"}})(),o=this.stripPrefix(),l=(e.title||"").length>78?e.title.slice(0,78)+"…":e.title,d=!!o&&a(e.title||"",o).length>0,h=!!o&&!!e.sub&&a(e.sub,o).length>0,p=o?d?"标题匹配":h?"网址匹配":"结果":"最近使用",u=o?d?100:h?62:42:42;this.el.preview.innerHTML=`
      <div class="preview-shot">${function(e){let t=0;for(let i=0;i<e.length;i++)t=(31*t+e.charCodeAt(i))%360;let i=window.matchMedia("(prefers-color-scheme: dark)").matches,r=i?`hsl(${t} 14% 17%)`:`hsl(${t} 30% 95%)`,s=i?`hsl(${t} 14% 22%)`:`hsl(${t} 26% 89%)`,n=i?`hsl(${t} 16% 27%)`:`hsl(${t} 28% 87%)`,a=i?`hsl(${t} 30% 40%)`:`hsl(${t} 40% 78%)`,o=i?`hsl(${t} 10% 34%)`:`hsl(${t} 22% 84%)`;return`<svg viewBox="0 0 256 158" preserveAspectRatio="none" aria-hidden="true">
    <rect width="256" height="158" fill="${r}"/>
    <rect x="0" y="0" width="256" height="20" fill="${s}"/>
    <circle cx="12" cy="10" r="3.2" fill="${a}"/>
    <circle cx="23" cy="10" r="3.2" fill="${o}"/>
    <rect x="34" y="6.5" width="86" height="7" rx="3.5" fill="${o}"/>
    <rect x="14" y="30" width="228" height="54" rx="6" fill="${n}"/>
    <rect x="26" y="42" width="72" height="8" rx="4" fill="${a}"/>
    <rect x="26" y="56" width="52" height="6" rx="3" fill="${o}"/>
    <rect x="14" y="94" width="150" height="7" rx="3.5" fill="${o}"/>
    <rect x="14" y="106" width="120" height="7" rx="3.5" fill="${o}"/>
    <rect x="14" y="118" width="136" height="7" rx="3.5" fill="${o}"/>
    <rect x="178" y="94" width="64" height="36" rx="5" fill="${n}"/>
  </svg>`}(s.url||e.title)}</div>
      <div>
        <div class="preview-title">${i(l)}</div>
        <div class="preview-url">${i(s.url||"")}</div>
      </div>
      <div class="preview-score">
        <div class="score-bar"><span style="width:${Math.max(6,u)}%"></span></div>
        <span class="score-label">${p}</span>
      </div>
      <div class="preview-rows">
        <div class="preview-row"><dt>来源</dt><dd>${c[e.source]}</dd></div>
        <div class="preview-row"><dt>站点</dt><dd>${i(n)}</dd></div>
        ${"history"===e.source&&this.recencyOf(s)?`<div class="preview-row"><dt>上次访问</dt><dd>${this.recencyOf(s)}</dd></div>`:""}
        ${"tab"===e.source?'<div class="preview-row"><dt>操作</dt><dd>Enter 切换</dd></div>':""}
        ${"bookmark"===e.source?'<div class="preview-row"><dt>操作</dt><dd>Enter 打开</dd></div>':""}
      </div>`}applySelectionToInput(){let e=this.rows[this.selected],t=e&&"engine"===e.source?e.item.insertText:void 0,i=this.el.input;null!=t?(null==this.previousInputValue&&(this.previousInputValue=i.value),i.value!==t&&(i.value=t,i.setSelectionRange(t.length,t.length))):null!=this.previousInputValue&&(i.value=this.previousInputValue,this.previousInputValue=null),this.query=i.value}move(e){if(!this.rows.length)return;let t=this.selected+e;t>=this.rows.length&&(t=0),t<0&&(t=this.rows.length-1),this.selected=t,this.applySelectionToInput(),this.render()}onKeyEvent(e){if("keypress"===e.type&&"Enter"!==e.key||"keydown"===e.type&&"Enter"===e.key)return;let t=e.key,i=!1;if("Escape"===t){if(i=!0,this.activeEngine){let e=this.activeEngine.keyword;this.el.input.value=e+" "+this.el.input.value.trimStart(),this.activeEngine=null,this.query=this.el.input.value}this.hide()}else if("ArrowDown"===t||e.ctrlKey&&("n"===t||"j"===t)||"Tab"===t&&!e.shiftKey)i=!0,this.move(1);else if("ArrowUp"===t||e.ctrlKey&&("p"===t||"k"===t)||"Tab"===e.key&&e.shiftKey)i=!0,this.move(-1);else if("Enter"===t&&e.ctrlKey){i=!0;let e=this.rows[this.selected];e&&"command"!==e.source&&e.item.url&&(null==this.previousInputValue&&(this.previousInputValue=this.el.input.value),this.el.input.value=e.item.url,this.el.input.scrollLeft=this.el.input.scrollWidth,this.query=this.el.input.value)}else if("Enter"===t)i=!0,this.activate(e);else if("Backspace"===t&&this.activeEngine&&0===this.el.input.selectionEnd){i=!0;let e=this.activeEngine.keyword;this.el.input.value=e+this.el.input.value.trimStart(),this.el.input.selectionStart=this.el.input.selectionEnd=e.length,this.activeEngine=null,this.query=this.el.input.value,this.update()}i&&(e.stopImmediatePropagation(),e.preventDefault())}async activate(e){let i=this.el.input.value.trim(),r=this.forceNewTab||!!(e&&(e.shiftKey||e.ctrlKey||e.altKey||e.metaKey));if(!this.rows.length||this.selected<0){if(!i)return;if(this.activeEngine){let e=t.UrlUtils.createSearchUrl(i,this.activeEngine.url);this.hide(()=>this.launchUrl(e,r));return}if("omni"!==this.completerName())return;let e=this.rows[0]?.item;if(e?.isPrimarySuggestion&&e.searchUrl){let s=t.UrlUtils.createSearchUrl(i,e.searchUrl);this.hide(()=>this.launchUrl(s,r));return}await t.UrlUtils.isUrl(i)?this.hide(()=>this.launchUrl(i,r)):this.hide(()=>t.chrome.runtime.sendMessage({handler:"launchSearchQuery",query:i,openInNewTab:r}));return}let s=this.rows[this.selected],n=s.item;if(n.isPrimarySuggestion&&n.searchUrl){let e=t.UrlUtils.createSearchUrl(i,n.searchUrl);this.hide(()=>this.launchUrl(e,r));return}n.command?this.hide(()=>t.chrome.runtime.sendMessage({handler:"runNormalModeCommand",command:n.command.registryEntry,count:this.prefixCount})):"tab"===s.source&&null!=n.tabId?this.hide(()=>t.chrome.runtime.sendMessage({handler:"selectSpecificTab",id:n.tabId})):n.url&&this.hide(()=>this.launchUrl(n.url,r))}launchUrl(e,i){i&&t.UrlUtils.hasJavascriptProtocol(e)&&(i=!1),t.chrome.runtime.sendMessage({handler:i?"openUrlInNewTab":"openUrlInCurrentTab",url:e})}watchTheme(){let e=window.matchMedia("(prefers-color-scheme: dark)"),t=()=>{this.host.dataset.theme=e.matches?"dark":"light",this.open_&&this.renderPreview()};t(),e.addEventListener("change",t)}}let v=globalThis;v.top===v.self&&function(){let e=v.Vomnibar;if(!e||!v.handlerStack||!v.Settings)return console.warn("[vimium-overlay] Vimium 内核未就绪，Omnibar 接管已跳过");let t=null;e.open=function(e){var i;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i=e,Array.from(document.documentElement.children).some(e=>{let t=e.shadowRoot;return!!t&&!!t.querySelector("iframe.vimium-help-dialog-frame.vimium-ui-component-visible")})&&v.NormalModeCommands?.showHelp?.(i??0),(t??=new u).show(r)},e.init=()=>{},Object.defineProperty(v,"vimiumOmnibarUI",{get:()=>t,configurable:!0}),window.addEventListener("pagehide",()=>t?.hide())}()})();