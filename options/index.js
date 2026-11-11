(()=>{"use strict";let e;function t(e,t,n){let a=e?.[t];if(null==a)return n;if("string"!=typeof n&&"string"==typeof a)try{return JSON.parse(a)}catch{return n}if("number"==typeof n){let e=Number(a);return Number.isFinite(e)?e:n}return a}let n=globalThis.chrome,a=[{name:"scrollDown",desc:"向下滚动",group:"navigation"},{name:"scrollUp",desc:"向上滚动",group:"navigation"},{name:"scrollToTop",desc:"滚到页面顶部",group:"navigation",noRepeat:!0},{name:"scrollToBottom",desc:"滚到页面底部",group:"navigation",noRepeat:!0},{name:"scrollPageDown",desc:"向下滚动半屏",group:"navigation"},{name:"scrollPageUp",desc:"向上滚动半屏",group:"navigation"},{name:"scrollFullPageDown",desc:"向下滚动整屏",group:"navigation"},{name:"scrollFullPageUp",desc:"向上滚动整屏",group:"navigation"},{name:"scrollLeft",desc:"向左滚动",group:"navigation"},{name:"scrollRight",desc:"向右滚动",group:"navigation",advanced:!0},{name:"scrollToLeft",desc:"滚到最左边",group:"navigation",advanced:!0,noRepeat:!0},{name:"scrollToRight",desc:"滚到最右边",group:"navigation",advanced:!0,noRepeat:!0},{name:"reload",desc:"重新加载页面",group:"navigation",background:!0,options:{hard:"强制刷新，让浏览器绕过缓存。"},noRepeat:!0},{name:"copyCurrentUrl",desc:"复制当前网址",group:"navigation",noRepeat:!0},{name:"openCopiedUrlInCurrentTab",desc:"在当前标签页打开剪贴板里的网址",group:"navigation",noRepeat:!0},{name:"openCopiedUrlInNewTab",desc:"在新标签页打开剪贴板里的网址",group:"navigation",noRepeat:!0,options:{position:"标签页在标签栏里的位置：`start`、`before`、`after`、`end`，默认 `after`。"}},{name:"goUp",desc:"回到网址的上一级",group:"navigation",advanced:!0},{name:"goToRoot",desc:"回到网址的根目录",group:"navigation",advanced:!0,noRepeat:!0},{name:"enterInsertMode",desc:"进入插入模式",group:"navigation",noRepeat:!0},{name:"enterVisualMode",desc:"进入可视模式",group:"navigation",noRepeat:!0},{name:"enterVisualLineMode",desc:"进入按行的可视模式",group:"navigation",advanced:!0,noRepeat:!0},{name:"passNextKey",desc:"把下一个按键交给网页",options:{normal:"可选。按完之后回到普通模式，并忽略已经设好的放行键。"},group:"navigation",advanced:!0},{name:"focusInput",desc:"聚焦页面上第一个输入框",group:"navigation",noRepeat:!0},{name:"LinkHints.activateMode",desc:"在当前标签页打开链接",options:{action:"`hover`、`focus` 或 `copy-text`。选中链接时不点击，而是做指定的动作。"},group:"navigation",advanced:!0},{name:"LinkHints.activateModeToOpenInNewTab",desc:"在新标签页打开链接",group:"navigation"},{name:"LinkHints.activateModeToOpenInNewForegroundTab",desc:"在新标签页打开链接并切过去",group:"navigation"},{name:"LinkHints.activateModeWithQueue",desc:"在新标签页批量打开多个链接",group:"navigation",advanced:!0,noRepeat:!0},{name:"LinkHints.activateModeToDownloadLink",desc:"下载链接指向的文件",group:"navigation",advanced:!0},{name:"LinkHints.activateModeToOpenIncognito",desc:"在隐私窗口打开链接",group:"navigation",advanced:!0},{name:"LinkHints.activateModeToCopyLinkUrl",desc:"复制链接地址",group:"navigation",advanced:!0},{name:"goPrevious",desc:"打开「上一页」链接",group:"navigation",advanced:!0,noRepeat:!0},{name:"goNext",desc:"打开「下一页」链接",group:"navigation",advanced:!0,noRepeat:!0},{name:"nextFrame",desc:"选中页面的下一个框架",group:"navigation",background:!0},{name:"mainFrame",desc:"回到页面主框架",group:"navigation",topFrame:!0,noRepeat:!0},{name:"Marks.activateCreateMode",desc:"创建一个标记",details:"先按绑定的键，再按一个字母，这个字母就是标记的名字。小写字母是页面内的标记，大写字母是所有标签页通用的标记。",options:{swap:"互换全局标记和页面内标记。浏览器里全局标记通常更有用，打开后小写字母就代表全局标记。"},group:"navigation",advanced:!0,noRepeat:!0},{name:"Marks.activateGotoMode",desc:"跳到某个标记",options:{swap:"互换全局标记和页面内标记。浏览器里全局标记通常更有用，打开后小写字母就代表全局标记。"},group:"navigation",advanced:!0,noRepeat:!0},{name:"Vomnibar.activate",desc:"打开网址、书签或历史记录",options:{query:"打开时预先填好的内容。",keyword:"设置页「搜索引擎」里定义的前缀。填了就只用这个引擎搜索。"},group:"vomnibar",topFrame:!0,noRepeat:!0},{name:"Vomnibar.activateInNewTab",desc:"在新标签页打开网址、书签或历史记录",group:"vomnibar",options:{query:"打开时预先填好的内容。",keyword:"设置页「搜索引擎」里定义的前缀。填了就只用这个引擎搜索。"},topFrame:!0,noRepeat:!0},{name:"Vomnibar.activateBookmarks",desc:"打开书签",group:"vomnibar",options:{query:"打开时预先填好的内容。"},topFrame:!0,noRepeat:!0},{name:"Vomnibar.activateBookmarksInNewTab",desc:"在新标签页打开书签",group:"vomnibar",options:{query:"打开时预先填好的内容。"},topFrame:!0,noRepeat:!0},{name:"Vomnibar.activateTabSelection",desc:"搜索已打开的标签页",group:"vomnibar",topFrame:!0,noRepeat:!0},{name:"Vomnibar.activateEditUrl",desc:"编辑当前网址",group:"vomnibar",topFrame:!0,noRepeat:!0},{name:"Vomnibar.activateEditUrlInNewTab",desc:"编辑当前网址并在新标签页打开",group:"vomnibar",topFrame:!0,noRepeat:!0},{name:"Vomnibar.activateCommandSelection",desc:"执行一条 Vimium Modern 命令",group:"vomnibar",topFrame:!0,noRepeat:!0},{name:"enterFindMode",desc:"进入页内查找",group:"find",noRepeat:!0},{name:"performFind",desc:"跳到下一个匹配",group:"find"},{name:"performBackwardsFind",desc:"跳到上一个匹配",group:"find"},{name:"findSelected",desc:"查找选中的文字",group:"find",advanced:!0},{name:"findSelectedBackwards",desc:"向前查找选中的文字",group:"find",advanced:!0},{name:"goBack",desc:"后退",group:"history"},{name:"goForward",desc:"前进",group:"history"},{name:"createTab",desc:"新建标签页",options:{"(any url)":"不打开浏览器的新标签页，而是打开这个网址。例如 `map X createTab https://example.com`",window:"在新窗口里创建。",incognito:"在隐私窗口里创建。",position:"标签页在标签栏里的位置：`start`、`before`、`after`、`end`，默认 `after`。"},group:"tabs",background:!0,repeatLimit:20},{name:"previousTab",desc:"切到左边的标签页",group:"tabs",background:!0},{name:"nextTab",desc:"切到右边的标签页",group:"tabs",background:!0},{name:"visitPreviousTab",desc:"回到上次访问的标签页",group:"tabs",background:!0},{name:"firstTab",desc:"切到第一个标签页",group:"tabs",background:!0,noRepeat:!0},{name:"lastTab",desc:"切到最后一个标签页",group:"tabs",background:!0,noRepeat:!0},{name:"duplicateTab",desc:"复制当前标签页",group:"tabs",background:!0,repeatLimit:20},{name:"togglePinTab",desc:"固定或取消固定当前标签页",group:"tabs",background:!0,noRepeat:!0},{name:"toggleMuteTab",desc:"静音或取消静音当前标签页",options:{all:"静音所有标签页。",other:"静音除当前页以外的所有标签页。"},group:"tabs",background:!0,noRepeat:!0},{name:"removeTab",desc:"关闭当前标签页",group:"tabs",background:!0,repeatLimit:25},{name:"restoreTab",desc:"恢复刚关闭的标签页",group:"tabs",background:!0,repeatLimit:20},{name:"moveTabToNewWindow",desc:"把标签页移到新窗口",group:"tabs",advanced:!0,background:!0,noRepeat:!0},{name:"closeTabsOnLeft",desc:"关闭左边的所有标签页",group:"tabs",advanced:!0,background:!0},{name:"closeTabsOnRight",desc:"关闭右边的所有标签页",group:"tabs",advanced:!0,background:!0},{name:"closeOtherTabs",desc:"关闭其他标签页",group:"tabs",advanced:!0,background:!0,noRepeat:!0},{name:"moveTabLeft",desc:"标签页左移一位",group:"tabs",advanced:!0,background:!0},{name:"moveTabRight",desc:"标签页右移一位",group:"tabs",advanced:!0,background:!0},{name:"setZoom",desc:"设置缩放比例",group:"tabs",advanced:!0,background:!0,options:{level:"缩放比例，范围 [0.25, 5.0]，默认 1.0。"},noRepeat:!0},{name:"zoomIn",desc:"放大",group:"tabs",advanced:!0,background:!0},{name:"zoomOut",desc:"缩小",group:"tabs",advanced:!0,background:!0},{name:"zoomReset",desc:"恢复默认缩放",group:"tabs",advanced:!0,background:!0,noRepeat:!0},{name:"toggleViewSource",desc:"查看页面源码",group:"misc",advanced:!0,noRepeat:!0},{name:"showHelp",desc:"显示帮助面板",group:"misc",noRepeat:!0,topFrame:!0}],i={j:{command:"scrollDown",options:{}},k:{command:"scrollUp",options:{}},h:{command:"scrollLeft",options:{}},l:{command:"scrollRight",options:{}},gg:{command:"scrollToTop",options:{}},G:{command:"scrollToBottom",options:{}},zH:{command:"scrollToLeft",options:{}},zL:{command:"scrollToRight",options:{}},"<c-e>":{command:"scrollDown",options:{}},"<c-y>":{command:"scrollUp",options:{}},d:{command:"scrollPageDown",options:{}},u:{command:"scrollPageUp",options:{}},r:{command:"reload",options:{}},R:{command:"reload hard",options:{}},yy:{command:"copyCurrentUrl",options:{}},p:{command:"openCopiedUrlInCurrentTab",options:{}},P:{command:"openCopiedUrlInNewTab",options:{}},gi:{command:"focusInput",options:{}},"[[":{command:"goPrevious",options:{}},"]]":{command:"goNext",options:{}},gf:{command:"nextFrame",options:{}},gF:{command:"mainFrame",options:{}},gu:{command:"goUp",options:{}},gU:{command:"goToRoot",options:{}},i:{command:"enterInsertMode",options:{}},v:{command:"enterVisualMode",options:{}},V:{command:"enterVisualLineMode",options:{}},f:{command:"LinkHints.activateMode",options:{}},F:{command:"LinkHints.activateModeToOpenInNewTab",options:{}},"<a-f>":{command:"LinkHints.activateModeWithQueue",options:{}},yf:{command:"LinkHints.activateModeToCopyLinkUrl",options:{}},"/":{command:"enterFindMode",options:{}},n:{command:"performFind",options:{}},N:{command:"performBackwardsFind",options:{}},"*":{command:"findSelected",options:{}},"#":{command:"findSelectedBackwards",options:{}},o:{command:"Vomnibar.activate",options:{}},O:{command:"Vomnibar.activateInNewTab",options:{}},T:{command:"Vomnibar.activateTabSelection",options:{}},b:{command:"Vomnibar.activateBookmarks",options:{}},B:{command:"Vomnibar.activateBookmarksInNewTab",options:{}},":":{command:"Vomnibar.activateCommandSelection",options:{}},ge:{command:"Vomnibar.activateEditUrl",options:{}},gE:{command:"Vomnibar.activateEditUrlInNewTab",options:{}},H:{command:"goBack",options:{}},L:{command:"goForward",options:{}},K:{command:"nextTab",options:{}},J:{command:"previousTab",options:{}},gt:{command:"nextTab",options:{}},gT:{command:"previousTab",options:{}},"^":{command:"visitPreviousTab",options:{}},"<<":{command:"moveTabLeft",options:{}},">>":{command:"moveTabRight",options:{}},g0:{command:"firstTab",options:{}},g$:{command:"lastTab",options:{}},W:{command:"moveTabToNewWindow",options:{}},t:{command:"createTab",options:{}},yt:{command:"duplicateTab",options:{}},x:{command:"removeTab",options:{}},X:{command:"restoreTab",options:{}},"<a-p>":{command:"togglePinTab",options:{}},"<a-m>":{command:"toggleMuteTab",options:{}},zi:{command:"zoomIn",options:{}},zo:{command:"zoomOut",options:{}},z0:{command:"zoomReset",options:{}},m:{command:"Marks.activateCreateMode",options:{}},"`":{command:"Marks.activateGotoMode",options:{}},"?":{command:"showHelp",options:{}},gs:{command:"toggleViewSource",options:{}}},o={navigation:"页面导航",vomnibar:"Omnibar",find:"查找",history:"历史",tabs:"标签页",misc:"其他"},s=["navigation","vomnibar","find","history","tabs","misc"],r={scrollStepSize:60,smoothScroll:!0,linkHintCharacters:"sadfjklewcmpgh",linkHintNumbers:"0123456789",filterLinkHints:!1,hideHud:!1,hideUpdateNotifications:!1,newTabDestination:"vimiumNewTabPage",newTabCustomUrl:"",openVomnibarOnNewTabPage:!0,grabBackFocus:!1,regexFindMode:!1,waitForEnterForFilteredHints:!0,ignoreKeyboardLayout:!1,previousPatterns:"prev,previous,back,older,<,‹,←,«,≪,<<",nextPatterns:"next,more,newer,>,›,→,»,≫,>>",searchUrl:"https://www.google.com/search?q=",helpDialog_showAdvancedCommands:!1,userDefinedLinkHintCss:`div > .vimiumHintMarker {
/* linkhint boxes */
background: #1660c9;
border: none;
border-radius: 4px;
box-shadow: 0 1px 3px rgba(0, 0, 0, .35);
}

div > .vimiumHintMarker span {
/* linkhint text */
color: #fff;
font-family: "SF Mono", ui-monospace, Menlo, Consolas, monospace;
font-weight: 600;
font-size: 11px;
letter-spacing: .02em;
}

div > .vimiumHintMarker > .matchingCharacter {
/* 已经敲过的那几个字符 */
color: rgba(255, 255, 255, .5);
}`,exclusionRules:[{passKeys:"",pattern:"https?://mail.google.com/*"}],searchEngines:[{kw:"w",url:"https://www.wikipedia.org/w/index.php?title=Special:Search&search=%s",desc:"Wikipedia"}]},l={mappings:{},unmapped:new Set,rules:r.exclusionRules.map(e=>({...e})),engines:r.searchEngines.map(e=>({...e})),newTabDestination:r.newTabDestination,newTabCustomUrl:r.newTabCustomUrl,openVomnibarOnNewTabPage:r.openVomnibarOnNewTabPage,scrollStepSize:r.scrollStepSize,smoothScroll:r.smoothScroll,linkHintCharacters:r.linkHintCharacters,linkHintNumbers:r.linkHintNumbers,filterLinkHints:r.filterLinkHints,waitForEnterForFilteredHints:r.waitForEnterForFilteredHints,grabBackFocus:r.grabBackFocus,hideHud:r.hideHud,hideUpdateNotifications:r.hideUpdateNotifications,regexFindMode:r.regexFindMode,ignoreKeyboardLayout:r.ignoreKeyboardLayout,previousPatterns:r.previousPatterns,nextPatterns:r.nextPatterns,searchUrl:r.searchUrl,helpDialog_showAdvancedCommands:r.helpDialog_showAdvancedCommands,userDefinedLinkHintCss:r.userDefinedLinkHintCss,dirty:new Set,selectedCommand:null,keyMappingsText:""},d={nav:document.querySelector("#nav"),keymapList:document.querySelector("#keymapList"),keySearch:document.querySelector("#keySearch"),saveBtn:document.querySelector("#saveBtn"),revertBtn:document.querySelector("#revertBtn"),savebarText:document.querySelector("#savebarText"),sidebarStatus:document.querySelector("#sidebarStatus"),sidebarStatusText:document.querySelector("#sidebarStatusText"),pageTitle:document.querySelector("#pageTitle"),pageTitleText:document.querySelector("#pageTitleText"),pageDesc:document.querySelector("#pageDesc"),rulesBody:document.querySelector("#rulesBody"),rulesValidation:document.querySelector("#rulesValidation"),engineList:document.querySelector("#engineList"),enginesValidation:document.querySelector("#enginesValidation")};function c(e){return String(e).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function u(e){return a.find(t=>t.name===e)}let p={a:"Alt",c:"Ctrl",m:"Cmd",s:"Shift"},m={left:"←",right:"→",up:"↑",down:"↓",space:"Space",tab:"Tab",enter:"↵",escape:"Esc",backspace:"⌫",delete:"Del",home:"Home",end:"End",pageup:"PgUp",pagedown:"PgDn",insert:"Ins",capslock:"Caps"};function v(e){return/^[a-zA-Z]$/.test(e)?e===e.toUpperCase()?`Shift ${e}`:e.toUpperCase():e}function g(e){let t;if(!e)return"";if(1===e.length)return v(e);if(!e.includes("<"))return e;let n=e.match(/^<([^>]+)>(.*)$/);if(!n)return e;let[,a,i]=n,o=a.split("-"),s=o.pop(),r=o.map(e=>e.toLowerCase()).sort(),l=m[s.toLowerCase()];t=l||(/^f\d{1,2}$/i.test(s)?s.toUpperCase():1===s.length?v(s):s);let d=[...r.map(e=>p[e]||e.toUpperCase()),t].join(" ");return i?`${d} ${i}`:d}function b(e){let t=[];for(let[n,a]of Object.entries(l.mappings))a.command===e&&t.push(n);for(let[n,a]of Object.entries(i))a.command!==e||l.unmapped.has(n)||l.mappings[n]||t.includes(n)||t.push(n);return t}let h=["a","c","m","s"],k=/^(?:[a-z][a-z0-9]+)$/;function f(e){if(!e)return"键位不能为空";if(1===e.length)return null;let t=e.match(/^<(.+)>$/);if(!t)return`键位「${e}」无效：多字符按键要写成 <c-a> 这样的尖括号形式`;let n=t[1].split("-"),a=n.pop();if(a.length>1&&!k.test(a.toLowerCase()))return`键名「${a}」无效`;for(let t of n)if(!h.includes(t.toLowerCase()))return`${e} has an invalid modifier; valid modifiers are ${h.join(",")}`;return null}function w(e){if(!e)return"网址模式不能为空";let t="^"+e.replace(/\*/g,".*")+"$";try{return new RegExp(t),null}catch{return"网址模式不是有效的正则表达式"}}function y(){let e=[],t=new Set;for(let n of l.engines){if(!n.kw){e.push("前缀不能为空");continue}if(/\s/.test(n.kw)){e.push(`前缀「${n.kw}」不能包含空格`);continue}if(t.has(n.kw)){e.push(`前缀「${n.kw}」重复了`);continue}if(t.add(n.kw),!n.url){e.push(`前缀「${n.kw}」缺少网址`);continue}let a=/^[a-z][-+.a-z0-9]{2,}:\/\//.test(n.url),i=n.url.startsWith("javascript:");a||i||e.push(`This search engine doesn't have a valid URL: ${n.kw}: ${n.url}`)}return e}let T="(?:[a-z][a-z0-9]+)",$=`(?:(?:[a-zA-Z]-)+(?:.|${T}))`,L=RegExp(`^<(${T}|${$})>(.*)`,"i");function S(e){return e.replace(/\\\n/g,"").split("\n").map(e=>e.trim()).filter(e=>e.length>0&&!Array.from('#"').includes(e[0]))}function x(e){if(0===e.length)return[];if(0===e.search(L)){let e=RegExp.$1.split("-"),t=Math.max(e.length,1),n=e.slice(0,t-1),a=e[t-1];return 1!==a.length&&(a=a.toLowerCase()),["<"+(n=n.map(e=>e.toLowerCase()).sort()).concat([a]).join("-")+">",...x(RegExp.$2)]}return[e[0],...x(e.slice(1))]}function M(e){let t={},n={},i=[],o=S(e),s=Object.fromEntries(a.map(e=>[e.name,e])),r=e=>{if(!e?.match(new RegExp($.replace("NAMED",T))))return;let t=e.split("-")[0].slice(1);if(!h.includes(t))return`${e} has an invalid modifier; valid modifiers are ${h}`},l=e=>{try{return new URL(e),!0}catch{return!1}};for(let e of o){let a=e.split(/\s+/),o=a[0].toLowerCase();switch(o){case"map":{let n;if(a.length<3){i.push(`"map requires at least 2 arguments on line ${e}`);continue}let[,o,d]=a,c=function(e,t){t.global||(t=RegExp(t.source,t.flags+"g"));let n,a=0;for(;null!==(n=t.exec(e));){if(3==++a)return n.index;n.index===t.lastIndex&&t.lastIndex++}return -1}(e,/\s+/);n=-1===c?"":e.slice(c).trim();let u=s[d];if(!u){i.push(`"${d}" is not a valid command in the line: ${e}`);continue}let p=x(o),m=p.map(e=>r(e)).filter(Boolean);if(m.length>0){i.push(...m);continue}let v=function(e){let t={};for(;""!==e;){let n,a,i,o;if((n=e.match(/^([a-zA-Z]+)="([^"]+)"(\s+|$)/))||(n=e.match(/^([a-zA-Z]+)=(\S+)(\s+|$)/))?(a=n[0],i=n[1],o=n[2]):(n=e.match(/^([^\s"]+)(\s+|$)/))&&(a=n[0],i=n[1],o=!0),null==n){t[e]=!0;break}t[i]=o,e=e.slice(a.length)}return"count"in t&&(t.count=parseInt(t.count,10),isNaN(t.count)&&delete t.count),t}(n),g=Object.keys(u.options||{});u.noRepeat||g.push("count");let b=!1;for(let e of Object.keys(v))if(!g.includes(e))if(g.includes("(any url)")){if(l(v[e]))continue;b=!0,i.push(`Command ${d} does not support option ${e}. Is this meant to be a valid URL?`);break}else{b=!0,i.push(`Command ${d} does not support option ${e}`);break}if(b)break;t[o]={keySequence:p,command:d,options:v};break}case"unmap":if(2!==a.length){i.push(`Incorrect usage for unmap in the line: ${e}`);continue}delete t[a[1]],delete n[a[1]];break;case"unmapall":for(let e of Object.keys(t))delete t[e];for(let e of Object.keys(n))delete n[e];break;case"mapkey":{if(3!==a.length){i.push(`Incorrect usage for mapKey in the line: ${e}`);continue}let t=x(a[1]),o=x(a[2]);t.length===o.length&&1===o.length?n[t[0]]=o[0]:i.push(`mapKey only supports mapping keys which are single characters. Line: ${e}`);break}default:i.push(`"${o}" is not a valid config command in line: ${e}`)}}return{keyToRegistryEntry:t,keyToMappedKey:n,validationErrors:i}}let H=[{id:"sec-language",label:"语言",desc:"选择界面显示语言。",group:"常用"},{id:"sec-keys",label:"键位映射",desc:"Vimium Modern 的命令和按键在这里对应。点一行改键，或用「新建映射」加一条新的。标着「高级」的命令默认不在帮助里显示。",group:"常用"},{id:"sec-links",label:"链接提示",desc:"按 <kbd>f</kbd> 进入链接提示模式后，用这些字符标注页面上的链接。字符越多，提示越短。",group:"常用"},{id:"sec-exclusions",label:"排除规则",desc:"在匹配的网址上停用 Vimium Modern，或把某些按键交还给网页。网址是匹配整条 URL 的正则，<code>*</code> 匹配零个或多个字符。",group:"常用"},{id:"sec-engines",label:"搜索引擎",desc:"在 Omnibar 里用一个前缀调用。例如 <kbd>g</kbd> 就是 Google，输 <kbd>g</kbd> 加空格再加搜索词，Vimium Modern 会用这个引擎搜。<code>%s</code> 会被替换成搜索词；不写的话 Vimium Modern 会自己补到网址末尾。",group:"常用"},{id:"sec-newtab",label:"新标签页",desc:"「新建标签页」命令（默认 <kbd>t</kbd>）打开哪个页面。",group:"更多"},{id:"sec-behavior",label:"浏览行为",desc:"滚动、焦点和提示的细节。",group:"更多"},{id:"sec-advanced",label:"高级",desc:"不常用，但偶尔必要的选项。",group:"更多"},{id:"sec-backup",label:"备份与恢复",desc:"导出或导入你的设置。",group:"更多"}],C={"sec-language":["uiLanguage"],"sec-keys":["mappings","unmapped","keyMappings"],"sec-links":["linkHintCharacters","linkHintNumbers"],"sec-exclusions":["rules"],"sec-engines":["engines"],"sec-newtab":["newTabDestination","newTabCustomUrl","openVomnibarOnNewTabPage"],"sec-behavior":["scrollStepSize","smoothScroll","filterLinkHints","waitForEnterForFilteredHints","grabBackFocus","hideHud"],"sec-advanced":["searchUrl","regexFindMode","ignoreKeyboardLayout","helpDialog_showAdvancedCommands","hideUpdateNotifications","previousPatterns","nextPatterns","userDefinedLinkHintCss"],"sec-backup":[]},E="sec-keys";function R(){let e=[];for(let t of H){let n=e.find(e=>e.label===t.group);n||(n={label:t.group,items:[]},e.push(n)),n.items.push(t)}d.nav.innerHTML=e.map(e=>{let t=e.items.map(e=>{var t;let n=(C[e.id]||[]).some(e=>l.dirty.has(e));return`<button class="nav-item${n?" dirty":""}" data-section="${e.id}" aria-current="${E===e.id}">
        <span>${e.label}</span>
        ${n?'<span class="nav-dot" aria-label="有未保存的更改"></span>':`<span class="nav-count">${"sec-keys"===(t=e.id)?a.length:"sec-exclusions"===t?l.rules.length:"sec-engines"===t?l.engines.length:"sec-backup"===t?2:(C[t]||[]).length}</span>`}
      </button>`}).join("");return`<div class="nav-group-label">${e.label}</div>${t}`}).join(""),d.nav.querySelectorAll(".nav-item").forEach(e=>{e.addEventListener("click",()=>B(e.dataset.section))})}function B(e){for(let t of(E=e,H)){let n=document.getElementById(t.id);n&&(n.hidden=t.id!==e)}let t=H.find(t=>t.id===e);d.pageTitleText.textContent=t.label,d.pageDesc.innerHTML=t.desc,location.hash!=="#"+e&&history.replaceState(null,"","#"+e),R(),window.scrollTo({top:0,behavior:"instant"})}function U(e){return`<kbd class="key-block" title="${c(e)}">${c(g(e))}</kbd>`}function N(){let e=d.keySearch.value.trim().toLowerCase(),t=a.map((e,t)=>({command:e,index:t})).sort((e,t)=>s.indexOf(e.command.group)-s.indexOf(t.command.group)||e.index-t.index).map(e=>e.command).filter(t=>!!(!e||t.name.toLowerCase().includes(e)||t.desc.toLowerCase().includes(e)||globalThis.translateOptionsText(t.desc).toLowerCase().includes(e))||b(t.name).some(t=>t.toLowerCase().includes(e)||g(t).toLowerCase().includes(e)));if(!t.length){d.keymapList.innerHTML=`<div class="keymap-empty">没有匹配「${c(d.keySearch.value)}」的命令</div>`;return}let n="",r=null;for(let e of t){e.group!==r&&(n+=`<div class="keymap-group-head">${o[e.group]||e.group}</div>`,r=e.group);let t=b(e.name),a=Object.entries(l.mappings).some(t=>{let[,n]=t;return n.command===e.name}),s=[...l.unmapped].some(t=>i[t]?.command===e.name),d=a||s,u=l.selectedCommand===e.name,p=function(e){let t=[];for(let[,n]of Object.entries(l.mappings))if(n.command===e)for(let[e,a]of Object.entries(n.options||{}))t.push(!0===a?e:`${e}=${a}`);return t}(e.name);n+=`<div class="keymap-row${u?" sel":""}" role="option" aria-selected="${u}" data-cmd="${c(e.name)}">
      <div class="keymap-keys">${t.length?t.map(U).join('<span class="key-sep">,</span>'):'<span class="badge unbound">未绑定</span>'}</div>
      <div>
        <div class="cmd-desc">${c(e.desc)}</div>
        <div class="keymap-name">${c(e.name)}</div>
      </div>
      <div class="keymap-actions">
        ${p.length?`<span class="badge opt">${c(p.join(" "))}</span>`:""}
        ${d?'<span class="badge changed">已修改</span>':""}
        ${e.advanced?'<span class="badge adv">高级</span>':""}
      </div>
    </div>`}d.keymapList.innerHTML=n,d.keymapList.querySelectorAll(".keymap-row").forEach(e=>{e.addEventListener("click",()=>{l.selectedCommand=e.dataset.cmd,N(),j(e.dataset.cmd)})})}let q=null;function F(){q&&(q.remove(),q=null)}function j(e,t){F();let n=u(e),a=Object.entries(l.mappings).find(t=>{let[,n]=t;return n.command===e}),o=b(e),s=void 0!==t?t:a?a[0]:o[0]||"",r=!a&&o.length>0;(q=document.createElement("div")).className="scrim",q.innerHTML=`
    <div class="dialog" role="dialog" aria-modal="true" aria-labelledby="dlgTitle">
      <div class="dialog-head">
        <div class="dialog-title" id="dlgTitle">${c(n.desc)}</div>
        <div class="dialog-sub">${c(e)}</div>
      </div>
      <div class="dialog-body">
        <div class="field-label">按下的按键</div>
        <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
          <div class="key-capture" id="captureBtn" tabindex="0" role="button" aria-label="按下新的按键">${s?c(g(s)):"点这里，然后按键"}</div>
          ${r?'<span class="badge">默认值</span>':""}
        </div>
        <div class="field-hint" id="captureMsg">直接按组合键就行，比如 <kbd>Ctrl</kbd>+<kbd>K</kbd>。</div>
        ${n.options&&Object.keys(n.options).length?`
        <div style="margin-top:16px">
          <div class="field-label">选项</div>
          <div id="optsBox"></div>
        </div>`:""}
        ${n.details?`<div class="field-hint" style="margin-top:14px">${c(n.details)}</div>`:""}
      </div>
      <div class="dialog-foot">
        ${!r?'<button class="btn" id="unmapBtn">取消绑定</button>':""}
        <span class="spacer"></span>
        <button class="btn" id="cancelBtn">取消</button>
        <button class="btn primary" id="okBtn">应用</button>
      </div>
    </div>`,document.body.appendChild(q);let d=q.querySelector("#captureBtn"),p=q.querySelector("#captureMsg"),m=s,v=()=>document.removeEventListener("keydown",h,!0),h=e=>{if(e.preventDefault(),e.stopPropagation(),"Escape"===e.key){v(),d.classList.remove("capturing"),d.textContent=m?g(m):"点这里，然后按键",p.innerHTML="直接按组合键就行，比如 <kbd>Ctrl</kbd>+<kbd>K</kbd>。";return}let t=function(e){let t;if(["Control","Shift","Alt","Meta","AltGraph","OS"].includes(e.key))return null;let n={ArrowLeft:"left",ArrowRight:"right",ArrowUp:"up",ArrowDown:"down"," ":"space",Enter:"enter",Escape:"escape",Tab:"tab",Backspace:"backspace",Delete:"delete",Home:"home",End:"end",PageUp:"pageup",PageDown:"pagedown",Insert:"insert"};1===e.key.length?(t=e.key,e.shiftKey&&(t=t.toUpperCase())):t=n[e.key]?n[e.key]:e.key.toLowerCase();let a=[];e.altKey&&a.push("a"),e.ctrlKey&&a.push("c"),e.metaKey&&a.push("m"),e.shiftKey&&t.length>1&&a.push("s");let i=[...a,t].join("-");return i.length>1?`<${i}>`:i}(e);if(!t)return;v(),m=t,d.classList.remove("capturing"),d.textContent=g(t);let n=f(t);p.innerHTML=n?`<span style="color:var(--v-danger)">${c(n)}</span>`:`<span style="color:var(--v-ok)">写进设置文件就是 <code>${c(t)}</code></span>`},k=()=>{d.classList.add("capturing"),d.textContent="请按键…",p.textContent="按 Esc 取消",document.addEventListener("keydown",h,!0)};d.addEventListener("click",k),d.addEventListener("keydown",e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),k())});let w=q.querySelector("#optsBox");if(w){let e=a?a[1].options:{};w.innerHTML=Object.keys(n.options).map(t=>{let a=e[t]??"",i="(any url)"===t;return`<div class="opt-row">
        <div class="opt-name">${c(t)}${i?" — 可选，填网址":""}</div>
        <input class="input mono" style="width:100%" data-opt="${c(t)}" value="${c(String(a))}" placeholder="${i?"https://example.com":"值"}">
        <div class="opt-desc">${c(n.options[t])}</div>
      </div>`}).join("")}q.querySelector("#cancelBtn").addEventListener("click",()=>{F(),N()}),q.addEventListener("mousedown",e=>{e.target===q&&(F(),N())});let y=q.querySelector("#unmapBtn");y&&y.addEventListener("click",()=>{for(let[t,n]of Object.entries(l.mappings))n.command===e&&delete l.mappings[t];for(let t of b(e))i[t]?.command===e&&l.unmapped.add(t);l.dirty.add("mappings"),l.dirty.add("unmapped"),F(),N(),G()}),q.querySelector("#okBtn").addEventListener("click",()=>{var t;if(!m){p.innerHTML='<span style="color:var(--v-danger)">先按一个键</span>';return}let n=f(m);if(n){p.innerHTML=`<span style="color:var(--v-danger)">${c(n)}</span>`;return}let a=(t=m,l.mappings[t]?l.mappings[t].command:l.unmapped.has(t)?null:i[t]?.command??null);for(let[t,n]of(a&&a!==e&&(delete l.mappings[m],i[m]&&l.unmapped.add(m)),Object.entries(l.mappings)))n.command===e&&delete l.mappings[t];for(let t of b(e))i[t]?.command===e&&l.unmapped.add(t);let o={};w&&w.querySelectorAll("[data-opt]").forEach(e=>{let t=e.value.trim();t&&(o[e.dataset.opt]=t)}),l.mappings[m]={command:e,options:o},l.dirty.add("mappings"),F(),N(),G()}),d.focus()}function V(e,t,n){let a=`sw-${n}`;return`<div class="row">
    <div>
      <span class="row-label" id="${a}-lbl">${c(e)}</span>
      <div class="row-hint">${t}</div>
    </div>
    <div class="row-control">
      <button class="switch" id="${a}" role="switch" aria-checked="${l[n]}" aria-labelledby="${a}-lbl"></button>
    </div>
  </div>`}function O(){let e=document.getElementById("openVomnibarRow");e&&(e.hidden="vimiumNewTabPage"!==l.newTabDestination)}function D(){for(let[e,t,n]of[["linkHintCharacters","linkHintCharsMsg","提示字符"],["linkHintNumbers","linkHintNumsMsg","提示数字"]]){let a=document.getElementById(t),i=document.getElementById(e);if(!a||!i)continue;let o=l[e]||"",s=null;new Set(o).size!==o.length?s=`${n}不能包含重复字符`:o.length<=1&&(s=`${n}至少要两个`),s?(i.classList.add("invalid"),a.innerHTML=`<div class="validation error">
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="8" cy="8" r="6.2"/><path d="M8 4.8v3.6M8 10.9v.1" stroke-linecap="round"/></svg>
        <span>${c(s)}</span></div>`):(i.classList.remove("invalid"),a.innerHTML=`<div class="validation ok">
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M3.4 8.4 6.6 11.6 12.6 5.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span>${o.length} 个字符，可以用了</span></div>`)}}let P=["下载最新版","查看文档","GitHub 仓库","报告问题","订阅更新","隐私政策"];function z(){let e=document.getElementById("hintPreview");if(!e)return;let t=l.filterLinkHints,n=t?l.linkHintNumbers:l.linkHintCharacters,a=P.length,i=n.length>1?function(e,t){let n=t.toLowerCase(),a=[""],i=0;for(;a.length-i<e||1===a.length;){let e=a[i++];for(let t of n)a.push(t+e)}return(a=a.slice(i,i+e)).sort().map(e=>e.split("").reverse().join(""))}(a,n):[];e.innerHTML=P.slice(0,a).map((e,n)=>{let a=t?`<span class="hint-marker filtered">${c(i[n]||"?")}</span>`:`<span class="hint-marker">${c((i[n]||"?").toUpperCase())}</span>`,o=`<span>${c(e)}</span>`;return`<div class="hint-link">${a}${o}</div>`}).join("")}function A(){d.rulesBody.innerHTML=l.rules.map((e,t)=>`
    <tr data-idx="${t}">
      <td><input class="cell-input" data-field="pattern" value="${c(e.pattern)}" placeholder="URL 模式" aria-label="网址模式"></td>
      <td><input class="cell-input" data-field="passKeys" value="${c(e.passKeys)}" placeholder="留空 = 在此站停用 Vimium Modern" aria-label="交还给网页的按键"></td>
      <td><button class="icon-btn" data-remove="${t}" aria-label="删除这条规则">
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8"/></svg>
      </button></td>
    </tr>`).join(""),d.rulesBody.querySelectorAll("[data-field]").forEach(e=>{e.addEventListener("input",()=>{let t=Number(e.closest("tr").dataset.idx);l.rules[t][e.dataset.field]=e.value,l.dirty.add("rules"),I(),G()})}),d.rulesBody.querySelectorAll("[data-remove]").forEach(e=>{e.addEventListener("click",()=>{l.rules.splice(Number(e.dataset.remove),1),l.dirty.add("rules"),A(),I(),G()})})}function I(){let e=[];l.rules.forEach((t,n)=>{let a=w(t.pattern);a&&e.push(`第 ${n+1} 行：${a}`)}),d.rulesBody.querySelectorAll("tr").forEach((e,t)=>{let n=e.querySelector('[data-field="pattern"]');n&&n.classList.toggle("invalid",!!w(l.rules[t]?.pattern))}),e.length?d.rulesValidation.innerHTML=`<div class="validation error">
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="8" cy="8" r="6.2"/><path d="M8 4.8v3.6M8 10.9v.1" stroke-linecap="round"/></svg>
      <ul>${e.map(e=>`<li>${c(e)}</li>`).join("")}</ul></div>`:d.rulesValidation.innerHTML=""}function K(){let e,t,n;d.engineList.innerHTML=l.engines.map((e,t)=>`
    <div class="engine-row" data-idx="${t}">
      <div class="engine-kw">${c(e.kw||"?")}</div>
      <div>
        <div class="engine-name">${c(e.desc||e.kw)}</div>
        <div class="engine-url">${c(e.url)}</div>
      </div>
      <div class="engine-actions">
        <button class="icon-btn" data-edit-engine="${t}" aria-label="编辑 ${c(e.kw||"引擎")}">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M11.2 2.8 13.2 4.8 5.6 12.4 3 13l.6-2.6 7.6-7.6Z"/>
          </svg>
        </button>
        <button class="icon-btn" data-remove-engine="${t}" aria-label="删除 ${c(e.kw||"引擎")}">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8"/></svg>
        </button>
      </div>
    </div>`).join(""),d.engineList.querySelectorAll("[data-edit-engine]").forEach(e=>{e.addEventListener("click",()=>W(Number(e.dataset.editEngine)))}),d.engineList.querySelectorAll("[data-remove-engine]").forEach(e=>{e.addEventListener("click",()=>{l.engines.splice(Number(e.dataset.removeEngine),1),l.dirty.add("engines"),K(),G()})}),e=y(),t=function(){let e=[];for(let t of l.engines)!t.url||t.url.includes("%s")||t.url.includes("%S")||e.push(`前缀「${t.kw}」的网址里没有 %s，搜索词会被追加到末尾`);return e}(),n="",e.length&&(n+=`<div class="validation error" style="margin:10px 12px">
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="8" cy="8" r="6.2"/><path d="M8 4.8v3.6M8 10.9v.1" stroke-linecap="round"/></svg>
      <ul>${e.map(e=>`<li>${c(e)}</li>`).join("")}</ul></div>`),t.length&&(n+=`<div class="validation warn" style="margin:${e.length?"0 12px 10px":"10px 12px"}">
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M8 2.6 14.2 13H1.8L8 2.6Z"/><path d="M8 6.6v3M8 11.4v.1" stroke-linecap="round"/></svg>
      <ul>${t.map(e=>`<li>${c(e)}</li>`).join("")}</ul></div>`),d.enginesValidation.innerHTML=n}function W(e){F();let t=null==e,n=t?{kw:"",url:"",desc:""}:l.engines[e];(q=document.createElement("div")).className="scrim",q.innerHTML=`
    <div class="dialog" role="dialog" aria-modal="true" aria-labelledby="dlgTitle">
      <div class="dialog-head">
        <div class="dialog-title" id="dlgTitle">${t?"添加搜索引擎":"编辑搜索引擎"}</div>
      </div>
      <div class="dialog-body">
        <div class="opt-row">
          <div class="opt-name">前缀</div>
          <input class="input mono" id="engKw" style="width:100%" value="${c(n.kw)}" placeholder="g">
          <div class="opt-desc">在 Omnibar 里输入这个前缀再加空格，就用这个引擎搜索。</div>
        </div>
        <div class="opt-row">
          <div class="opt-name">网址</div>
          <input class="input mono" id="engUrl" style="width:100%" value="${c(n.url)}" placeholder="https://www.google.com/search?q=%s">
          <div class="opt-desc">%s 会被替换成搜索词。</div>
        </div>
        <div class="opt-row">
          <div class="opt-name">说明</div>
          <input class="input" id="engDesc" style="width:100%" value="${c(n.desc||"")}" placeholder="Google">
        </div>
        <div id="engErr"></div>
      </div>
      <div class="dialog-foot">
        <span class="spacer"></span>
        <button class="btn" id="cancelBtn">取消</button>
        <button class="btn primary" id="okBtn">应用</button>
      </div>
    </div>`,document.body.appendChild(q);let a=q.querySelector("#engKw"),i=q.querySelector("#engUrl"),o=q.querySelector("#engDesc"),s=q.querySelector("#engErr"),r=()=>{let e=[];return(a.value.trim()?/\s/.test(a.value.trim())&&e.push("前缀不能包含空格"):e.push("前缀不能为空"),i.value.trim()?/^[a-z][-+.a-z0-9]{2,}:\/\//.test(i.value.trim())||i.value.startsWith("javascript:")||e.push("网址必须以 http:// 或 https:// 开头"):e.push("网址不能为空"),e.length)?(s.innerHTML=`<div class="validation error">
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="8" cy="8" r="6.2"/><path d="M8 4.8v3.6M8 10.9v.1" stroke-linecap="round"/></svg>
        <ul>${e.map(e=>`<li>${c(e)}</li>`).join("")}</ul></div>`,!1):(i.value.includes("%s")||i.value.includes("%S")?s.innerHTML="":s.innerHTML=`<div class="validation warn">
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M8 2.6 14.2 13H1.8L8 2.6Z"/><path d="M8 6.6v3M8 11.4v.1" stroke-linecap="round"/></svg>
        <span>网址里没有 %s，搜索词会被追加到末尾。</span></div>`,!0)};[a,i].forEach(e=>e.addEventListener("input",r)),q.querySelector("#cancelBtn").addEventListener("click",F),q.addEventListener("mousedown",e=>{e.target===q&&F()}),q.querySelector("#okBtn").addEventListener("click",()=>{if(!r())return;let n={kw:a.value.trim(),url:i.value.trim(),desc:o.value.trim()};t?l.engines.push(n):l.engines[e]=n,l.dirty.add("engines"),F(),K(),G()}),a.focus()}function G(){let e=l.dirty.size;d.saveBtn.disabled=0===e,d.revertBtn.disabled=0===e,0===e?(d.savebarText.textContent="所有更改已保存",d.sidebarStatus.className="sidebar-status saved",d.sidebarStatusText.textContent="所有更改已保存"):(d.savebarText.innerHTML=`<span class="changed-count">${e} 处未保存的更改</span>`,d.sidebarStatus.className="sidebar-status dirty",d.sidebarStatusText.textContent=`${e} 处更改未保存`),R()}function Z(t){d.savebarText.textContent=t,clearTimeout(e),e=setTimeout(()=>G(),1800)}function J(t){d.savebarText.innerHTML=`<span class="err">${c(t)}</span>`,clearTimeout(e),e=setTimeout(()=>G(),3e3)}let _=["keyMappings","exclusionRules","searchEngines","newTabDestination","newTabCustomUrl","openVomnibarOnNewTabPage","scrollStepSize","smoothScroll","linkHintCharacters","linkHintNumbers","filterLinkHints","waitForEnterForFilteredHints","grabBackFocus","hideHud","hideUpdateNotifications","regexFindMode","ignoreKeyboardLayout","previousPatterns","nextPatterns","searchUrl","helpDialog_showAdvancedCommands","userDefinedLinkHintCss"],Q=["newTabDestination","newTabCustomUrl","openVomnibarOnNewTabPage","scrollStepSize","smoothScroll","linkHintCharacters","linkHintNumbers","filterLinkHints","waitForEnterForFilteredHints","grabBackFocus","hideHud","hideUpdateNotifications","regexFindMode","ignoreKeyboardLayout","previousPatterns","nextPatterns","searchUrl","helpDialog_showAdvancedCommands","userDefinedLinkHintCss"],X=["keyMappings","mappings","unmapped"];function Y(e){return e.filter(e=>e.kw&&e.url).map(e=>`${e.kw}: ${e.url}${e.desc?" "+e.desc:""}`).join("\n")}function ee(e){l.mappings=M(String(e||"")).keyToRegistryEntry,l.unmapped=function(e){let t=new Set;for(let n of S(String(e||""))){let e=n.split(/\s+/),a=e[0].toLowerCase();if("unmap"===a&&2===e.length)t.add(e[1]);else if("unmapall"===a)for(let e of Object.keys(i))t.add(e)}return t}(e)}function et(){let e=[];for(let t of[...l.unmapped].sort())e.push(`unmap ${t}`);for(let[t,n]of Object.entries(l.mappings)){let a=function(e){let t=[];for(let[n,a]of Object.entries(e||{}))!0===a?t.push(n):/^[^\s"]+$/.test(String(a))?t.push(`${n}=${a}`):t.push(`${n}="${a}"`);return t.join(" ")}(n.options);e.push(`map ${t} ${n.command}${a?" "+a:""}`)}return e.join("\n")}function en(e){l.keyMappingsText=t(e,"keyMappings",""),ee(l.keyMappingsText);let n=t(e,"exclusionRules",r.exclusionRules);for(let a of(l.rules=(Array.isArray(n)?n:r.exclusionRules).map(e=>({pattern:String(e?.pattern??""),passKeys:String(e?.passKeys??"")})),l.engines=function(e){let t=[];for(let n of S(String(e||""))){let e=n.split(/\s+/);if(e.length<2||!e[0].includes(":"))continue;let a=e[0].split(":")[0];if(!a)continue;let i=e[1],o=e.length>2?e.slice(2).join(" "):"";t.push({kw:a,url:i,desc:o})}return t}(t(e,"searchEngines",Y(r.searchEngines))),Q))l[a]=t(e,a,r[a]);l.dirty.clear()}function ea(){let e,t,n;R(),N();document.querySelector("#card-linkHints").innerHTML=`
    <div class="row">
      <div>
        <label class="row-label" for="linkHintCharacters">提示字符</label>
        <div class="row-hint">字母提示用的字符。至少两个，不能重复。</div>
      </div>
      <div class="row-control">
        <input class="input mono" id="linkHintCharacters" value="${c(l.linkHintCharacters)}" aria-describedby="linkHintCharsMsg">
        <button class="row-reset" data-reset="linkHintCharacters">重置</button>
      </div>
    </div>
    <div class="msg-slot" id="linkHintCharsMsg"></div>
    <div class="row">
      <div>
        <label class="row-label" for="linkHintNumbers">提示数字</label>
        <div class="row-hint">数字提示用的字符。至少两个，不能重复。</div>
      </div>
      <div class="row-control">
        <input class="input mono" id="linkHintNumbers" value="${c(l.linkHintNumbers)}" aria-describedby="linkHintNumsMsg">
        <button class="row-reset" data-reset="linkHintNumbers">重置</button>
      </div>
    </div>
    <div class="msg-slot" id="linkHintNumsMsg"></div>
    <div class="row">
      <div>
        <span class="row-label" id="sw-filterLinkHints-lbl">用链接文字筛选提示</span>
        <div class="row-hint">在链接提示模式下直接打字，按链接文字筛。打开后「提示数字」接管输入，字母提示则退回普通模式。</div>
      </div>
      <div class="row-control">
        <button class="switch" id="sw-filterLinkHints" role="switch" aria-checked="${l.filterLinkHints}" aria-labelledby="sw-filterLinkHints-lbl"></button>
      </div>
    </div>
    <div class="hint-preview">
      <div class="hint-preview-label">预览</div>
      <div class="hint-links" id="hintPreview"></div>
    </div>`,document.querySelector("#card-newTab").innerHTML=`
    <div class="row stack">
      <div>
        <div class="row-label">打开哪个页面</div>
        <div class="row-hint">Vimium Modern 的「新建标签页」命令用这个设置。</div>
      </div>
      <div class="row-control" style="width:100%">
        <div class="radio-set" id="newTabRadios">
          <label class="radio-item"><input type="radio" name="newTabDestination" value="vimiumNewTabPage"><span><span class="radio-text">Vimium Modern 空白新标签页</span><div class="radio-hint">一个干净的起始页。</div></span></label>
          <label class="radio-item"><input type="radio" name="newTabDestination" value="browserNewTabPage"><span><span class="radio-text">浏览器默认新标签页</span><div class="radio-hint">用 Chrome / Edge / Firefox 自带的页面。</div></span></label>
          <label class="radio-item"><input type="radio" name="newTabDestination" value="customUrl"><span><span class="radio-text">自定义网址</span><div class="radio-extra"><input class="input mono" id="newTabCustomUrl" style="width:100%" placeholder="https://example.com" value="${c(l.newTabCustomUrl)}"></div></span></label>
        </div>
      </div>
    </div>
    <div class="row" id="openVomnibarRow">
      <div>
        <span class="row-label" id="sw-openVomnibar-lbl">打开时自动唤起 Omnibar</span>
        <div class="row-hint">新标签页加载完就把焦点放进 Omnibar，直接就能搜。</div>
      </div>
      <div class="row-control">
        <button class="switch" id="sw-openVomnibar" role="switch" aria-checked="${l.openVomnibarOnNewTabPage}" aria-labelledby="sw-openVomnibar-lbl"></button>
      </div>
    </div>`,document.querySelector("#card-behavior").innerHTML=`
    <div class="row">
      <div>
        <label class="row-label" for="scrollStepSize">滚动步长</label>
        <div class="row-hint">基础滚动（<kbd>j</kbd> / <kbd>k</kbd>）一次移动多少像素。</div>
      </div>
      <div class="row-control">
        <input class="input mono" id="scrollStepSize" type="number" min="1" value="${l.scrollStepSize}">
        <span style="font-size:12px;color:var(--v-text-faint)">px</span>
      </div>
    </div>
    ${V("平滑滚动","滚动带缓动动画，而不是一格一格跳。","smoothScroll")}
    ${V("筛选提示时必须按 Enter","打字筛选链接提示后要按 Enter 才激活链接，避免误触发命令。","waitForEnterForFilteredHints")}
    ${V("不让网页抢走焦点","阻止页面加载时自动聚焦输入框（比如 Google、Bing 的搜索框）。","grabBackFocus")}
    ${V("隐藏 HUD","插入模式下不再显示 Heads Up Display。","hideHud")}`,document.querySelector("#card-advanced").innerHTML=`
    <div class="row">
      <div>
        <label class="row-label" for="searchUrl">默认搜索引擎</label>
        <div class="row-hint">在 Omnibar 里输入的不是网址、也没有命中引擎前缀时，用这个网址搜索。</div>
      </div>
      <div class="row-control"><input class="input mono" id="searchUrl" style="width:min(420px,38vw)" value="${c(l.searchUrl)}"></div>
    </div>
    ${V("把查找当作正则表达式","查找框里直接写正则。用 \\R 可以临时切回普通查找。","regexFindMode")}
    ${V("忽略键盘布局","强制按 en-US QWERTY 布局识别按键。非拉丁键盘上有用。","ignoreKeyboardLayout")}
    ${V("帮助面板显示高级命令","在帮助面板（<kbd>?</kbd>）里把标着「高级」的命令也列出来。","helpDialog_showAdvancedCommands")}
    ${V("隐藏更新通知","不再显示「Vimium Modern 已更新」的通知。","hideUpdateNotifications")}
    <div class="row">
      <div>
        <label class="row-label" for="previousPatterns">「上一页」匹配的模式</label>
        <div class="row-hint">逗号分隔。命令会找标着这些词的链接来点。</div>
      </div>
      <div class="row-control"><input class="input mono" id="previousPatterns" style="width:min(420px,38vw)" value="${c(l.previousPatterns)}"></div>
    </div>
    <div class="row">
      <div>
        <label class="row-label" for="nextPatterns">「下一页」匹配的模式</label>
        <div class="row-hint">逗号分隔。命令会找标着这些词的链接来点。</div>
      </div>
      <div class="row-control"><input class="input mono" id="nextPatterns" style="width:min(420px,38vw)" value="${c(l.nextPatterns)}"></div>
    </div>
    <div class="row stack">
      <div>
        <div style="display:flex;align-items:center;gap:2px">
          <label class="row-label" for="userDefinedLinkHintCss">链接提示样式</label>
          <button class="row-reset" data-reset="userDefinedLinkHintCss">重置</button>
        </div>
        <div class="row-hint">注入到每个页面的 CSS，用来改链接提示的气泡。整块替换，删空就没有自定义样式。</div>
      </div>
      <div class="row-control" style="width:100%">
        <textarea class="textarea mono" id="userDefinedLinkHintCss" rows="13" spellcheck="false" style="width:100%">${c(l.userDefinedLinkHintCss)}</textarea>
      </div>
    </div>`,document.querySelector("#card-backup").innerHTML=`
    <div class="row">
      <div>
        <div class="row-label">下载备份</div>
        <div class="row-hint">导出一个 JSON 文件，包含你所有的设置。</div>
      </div>
      <div class="row-control">
        <button class="btn" id="downloadBackup">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M8 2.6v7.2M5.2 7.4 8 10.2l2.8-2.8M3 12.6h10"/>
          </svg>
          下载
        </button>
      </div>
    </div>
    <div class="row">
      <div>
        <div class="row-label">恢复备份</div>
        <div class="row-hint">选择之前导出的 JSON 文件。当前未保存的更改会丢失。</div>
      </div>
      <div class="row-control">
        <button class="btn" id="uploadBackup">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M8 10.2V3M5.2 5.8 8 3l2.8 2.8M3 12.6h10"/>
          </svg>
          选择文件
        </button>
      </div>
    </div>`,document.querySelectorAll(".switch").forEach(e=>{e.addEventListener("click",()=>{let t="true"!==e.getAttribute("aria-checked");e.setAttribute("aria-checked",String(t));let n=e.id.replace(/^sw-/,"");l[n]=t,l.dirty.add(n),"filterLinkHints"===n&&z(),G()})}),document.querySelectorAll("[data-reset]").forEach(e=>{e.addEventListener("click",()=>{let t=e.dataset.reset;document.getElementById(t).value=r[t],l[t]=r[t],l.dirty.add(t),D(),G()})}),(e=(e,t)=>{let n=document.getElementById(e);n&&n.addEventListener("input",()=>{l[t]=n.value,l.dirty.add(t),("linkHintCharacters"===t||"linkHintNumbers"===t)&&D(),G()})})("linkHintCharacters","linkHintCharacters"),e("linkHintNumbers","linkHintNumbers"),e("scrollStepSize","scrollStepSize"),e("previousPatterns","previousPatterns"),e("nextPatterns","nextPatterns"),e("newTabCustomUrl","newTabCustomUrl"),e("searchUrl","searchUrl"),e("userDefinedLinkHintCss","userDefinedLinkHintCss"),document.querySelectorAll('input[name="newTabDestination"]').forEach(e=>{e.checked=e.value===l.newTabDestination,e.addEventListener("change",()=>{l.newTabDestination=e.value,l.dirty.add("newTabDestination"),O(),G()})}),O(),(t=document.getElementById("downloadBackup"))&&t.addEventListener("click",()=>void es()),(n=document.getElementById("uploadBackup"))&&n.addEventListener("click",()=>{let e;(e=document.createElement("input")).type="file",e.accept="application/json,.json",e.addEventListener("change",()=>{let t=e.files?.[0];t&&er(t)}),e.click()}),D(),O(),z(),A(),K(),B(E),G()}async function ei(){let e=[...function(){let e=[],t=new Set;for(let[n,a]of Object.entries(l.mappings)){let i=f(n);if(i){e.push(i);continue}if(t.has(n)){e.push(`键位「${n}」被重复映射`);continue}t.add(n);let o=u(a.command);if(!o){e.push(`「${a.command}」is not a valid command`);continue}let s=Object.keys(o.options||{});for(let t of(o.noRepeat||s.push("count"),Object.keys(a.options||{})))if(!s.includes(t)){if(s.includes("(any url)")){let n=!0;try{new URL(a.options[t])}catch{n=!1}if(n)continue;e.push(`Command ${a.command} does not support option ${t}. Is this meant to be a valid URL?`)}else e.push(`Command ${a.command} does not support option ${t}`);break}}return e}(),...y(),...function(){let e=[];for(let[t,n]of[["linkHintCharacters","提示字符"],["linkHintNumbers","提示数字"]]){let a=String(l[t]??"");new Set(a).size!==a.length?e.push(`${n}不能包含重复字符`):a.length<=1&&e.push(`${n}至少要两个`)}return e}()];el&&e.push(...M(ed.value).validationErrors);let t=Number(l.scrollStepSize);if((!Number.isFinite(t)||t<1)&&e.push("滚动步长必须是不小于 1 的数字"),/^[a-z][-+.a-z0-9]{1,}:\/\//i.test(String(l.searchUrl||""))||e.push("默认搜索引擎的网址必须是一个完整的 URL"),e.length)return void J(`无法保存：${e[0]}`);let a=l.dirty,i={};for(let e of(X.some(e=>a.has(e))&&(i.keyMappings=el?ed.value:et()),a.has("rules")&&(i.exclusionRules=l.rules.map(e=>({pattern:e.pattern,passKeys:e.passKeys}))),a.has("engines")&&(i.searchEngines=Y(l.engines)),Q))a.has(e)&&(i[e]=l[e]);a.has("scrollStepSize")&&(i.scrollStepSize=Math.round(t)),i.settingsVersion=n.runtime.getManifest().version,d.saveBtn.disabled=!0;try{await n.storage.sync.set(i)}catch(e){d.saveBtn.disabled=!1,J(`保存失败：${String(e?.message??e)}`);return}en(await n.storage.sync.get(null)),el&&(ed.value=l.keyMappingsText),ea(),Z("已保存")}async function eo(){en(await n.storage.sync.get(null)),el&&(ed.value=l.keyMappingsText),ea(),Z("已还原")}async function es(){let e=new Blob([JSON.stringify({...await n.storage.sync.get(null),settingsVersion:n.runtime.getManifest().version},null,2)],{type:"application/json"}),t=URL.createObjectURL(e),a=document.createElement("a");a.href=t,a.download="vimium-options.json",a.click(),setTimeout(()=>URL.revokeObjectURL(t),1e3),Z("已导出 vimium-options.json")}async function er(e){let t;try{t=JSON.parse(await e.text())}catch{J("这个文件不是合法的 JSON");return}if(!t||"object"!=typeof t||Array.isArray(t))return void J("备份文件的内容不是一个设置对象");let a=Object.keys(t).filter(e=>"settingsVersion"!==e);if(!a.some(e=>_.includes(e)))return void J("这个文件里没有 Vimium Modern 的设置项");try{await n.storage.sync.set({...t,settingsVersion:n.runtime.getManifest().version})}catch(e){J(`恢复失败：${String(e?.message??e)}`);return}en(await n.storage.sync.get(null)),el&&(ed.value=l.keyMappingsText),ea(),Z(`已恢复 ${a.length} 项设置`)}d.saveBtn.addEventListener("click",()=>void ei()),d.revertBtn.addEventListener("click",()=>void eo()),d.keySearch.addEventListener("input",N);let el=!1,ed=document.querySelector("#keyMappingsText"),ec=document.querySelector("#keyMappingsValidation");function eu(){let e=M(ed.value);return 0===e.validationErrors.length?(ec.innerHTML=`<div class="validation ok">
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M3.4 8.4 6.6 11.6 12.6 5.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <span>配置没问题，解析出 ${Object.keys(e.keyToRegistryEntry).length} 条映射</span></div>`,!0):(ec.innerHTML=`<div class="validation error">
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="8" cy="8" r="6.2"/><path d="M8 4.8v3.6M8 10.9v.1" stroke-linecap="round"/></svg>
    <ul>${e.validationErrors.map(e=>`<li>${c(e)}</li>`).join("")}</ul></div>`,!1)}ed.addEventListener("input",()=>{l.keyMappingsText=ed.value,l.dirty.add("keyMappings"),eu(),G()}),document.querySelector("#textModeBtn").addEventListener("click",()=>{var e;return el=e=!el,document.querySelector("#keymapVisual").hidden=e,document.querySelector("#keymapText").hidden=!e,document.querySelector("#textModeBtn").setAttribute("aria-pressed",String(e)),document.querySelector("#keySearch").disabled=e,void(document.querySelector("#addMapping").disabled=e,e?((l.dirty.has("mappings")||l.dirty.has("unmapped"))&&(l.keyMappingsText=et(),l.dirty.delete("mappings"),l.dirty.delete("unmapped"),l.dirty.add("keyMappings"),G()),ed.value=l.keyMappingsText,eu(),ed.focus()):l.dirty.has("keyMappings")&&(l.keyMappingsText=ed.value,ee(l.keyMappingsText),N()))}),document.querySelector("#addMapping").addEventListener("click",()=>{l.selectedCommand=null,N(),j("scrollDown","")}),document.querySelector("#addRule").addEventListener("click",()=>{l.rules.push({pattern:"",passKeys:""}),l.dirty.add("rules"),A(),I(),G();let e=d.rulesBody.querySelectorAll("tr");e[e.length-1]?.querySelector("input")?.focus()}),document.querySelector("#addEngine").addEventListener("click",()=>W(null));let ep="vimium-options-theme",em={value:localStorage.getItem(ep)||"auto"},ev=window.matchMedia("(prefers-color-scheme: dark)");function eg(){let e="auto"===em.value?ev.matches?"dark":"light":em.value;document.documentElement.dataset.theme=e,document.querySelectorAll(".seg button").forEach(e=>{e.setAttribute("aria-pressed",String(e.dataset.theme===em.value))})}function eb(){let e=location.hash.replace(/^#/,"");return H.some(t=>t.id===e)?e:"sec-keys"}document.querySelectorAll(".seg button").forEach(e=>{e.addEventListener("click",()=>{em.value=e.dataset.theme,localStorage.setItem(ep,em.value),eg()})}),ev.addEventListener("change",eg),eg(),async function(){let e=eb();en(await n.storage.sync.get(null)),ea(),B(e),window.addEventListener("hashchange",()=>B(eb()))}()})();
