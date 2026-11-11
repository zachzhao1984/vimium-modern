const newTabDestinations={browserNewTabPage:"browserNewTabPage",vimiumNewTabPage:"vimiumNewTabPage",customUrl:"customUrl"},vimiumNewTabPageUrl="https://vimium.github.io/new-tab/",defaultOptions={scrollStepSize:60,smoothScroll:!0,keyMappings:"# Insert your preferred key mappings here.",linkHintCharacters:"sadfjklewcmpgh",linkHintNumbers:"0123456789",filterLinkHints:!1,hideHud:!1,hideUpdateNotifications:!1,userDefinedLinkHintCss:`\
div > .vimiumHintMarker {
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
}\
`,exclusionRules:[{passKeys:"",pattern:"https?://mail.google.com/*"}],previousPatterns:"prev,previous,back,older,<,‹,←,«,≪,<<",nextPatterns:"next,more,newer,>,›,→,»,≫,>>",searchUrl:"https://www.google.com/search?q=",searchEngines:`\
w: https://www.wikipedia.org/w/index.php?title=Special:Search&search=%s Wikipedia

# More examples.
#
# (Vimium supports search completion Wikipedia, as
# above, and for these.)
#
# g: https://www.google.com/search?q=%s Google
# l: https://www.google.com/search?q=%s&btnI I'm feeling lucky...
# y: https://www.youtube.com/results?search_query=%s Youtube
# gm: https://www.google.com/maps?q=%s Google maps
# b: https://www.bing.com/search?q=%s Bing
# d: https://duckduckgo.com/?q=%s DuckDuckGo
# az: https://www.amazon.com/s/?field-keywords=%s
# qw: https://www.qwant.com/?q=%s Qwant\
`,newTabDestination:newTabDestinations.vimiumNewTabPage,newTabCustomUrl:"",openVomnibarOnNewTabPage:!0,grabBackFocus:!1,regexFindMode:!1,waitForEnterForFilteredHints:!0,helpDialog_showAdvancedCommands:!1,ignoreKeyboardLayout:!1},Settings={_settings:null,_chromeStorageListenerInstalled:!1,defaultOptions,newTabDestinations,vimiumNewTabPageUrl:"https://vimium.github.io/new-tab/",async onLoaded(){this.isLoaded()||await this.load()},async chromeStorageOnChanged(e,t){"sync"==t&&(await this.load(),this.dispatchEvent("change"))},async load(){this._chromeStorageListenerInstalled||(this._chromeStorageListenerInstalled=!0,chrome.storage.onChanged.addListener((e,t)=>this.chromeStorageOnChanged(e,t)));let e=await chrome.storage.sync.get(null);(e=this.migrateSettingsIfNecessary(e)).settingsVersion=Utils.getCurrentVersion(),this._settings=Object.assign(globalThis.structuredClone(defaultOptions),e)},isLoaded(){return null!=this._settings},get(e){if(!this.isLoaded())throw Error(`Getting the setting ${e} before settings have been loaded.`);return globalThis.structuredClone(this._settings[e])},async set(e,t){if(!this.isLoaded())throw Error(`Writing the setting ${e} before settings have been loaded.`);this._settings[e]=t,await this.setSettings(this._settings)},getSettings(){return globalThis.structuredClone(this._settings)},migratePre2_0(e){if(null!=e.settingsVersion)return e;let t={};for(let[s,i]of Object.entries(e))"string"==typeof i?t[s]=JSON.parse(i):t[s]=i;return delete t.passNextKeyKeys,t},migratePre2_4(e){let t=e.settingsVersion;return t&&0>Utils.compareVersions(t,"2.4")&&(e.newTabUrl&&"about:newtab"!=e.newTabUrl?"pages/blank.html"==e.newTabUrl?e.newTabDestination=newTabDestinations.vimiumNewTabPage:e.newTabUrl&&(e.newTabDestination=newTabDestinations.customUrl,e.newTabCustomUrl=e.newTabUrl):e.newTabDestination=newTabDestinations.browserNewTabPage,delete e.newTabUrl),e},migratePre2_4_1(e){let t=e.settingsVersion;if(!(t&&Utils.compareVersions(t,"2.4")>=0&&0>Utils.compareVersions(t,"2.4.1")))return e;let s=e.newTabDestination;return s&&s!=newTabDestinations.vimiumNewTabPage||(e.newTabDestination=newTabDestinations.browserNewTabPage),e},migrateSettingsIfNecessary(e){return e=this.migratePre2_0(e),e=this.migratePre2_4(e),e=this.migratePre2_4_1(e)},async setSettings(e){(e=this.migrateSettingsIfNecessary(e)).settingsVersion=Utils.getCurrentVersion();let t=this.pruneOutDefaultValues(e),s=Object.keys(t),i=Object.keys(e).filter(e=>!s.includes(e));await chrome.storage.sync.remove(i),await chrome.storage.sync.set(t),await this.load()},pruneOutDefaultValues(e){let t=globalThis.structuredClone(e);for(let[s,i]of Object.entries(e))JSON.stringify(i)==JSON.stringify(defaultOptions[s])&&delete t[s];return t},async clear(){this._settings=null,await chrome.storage.sync.clear()}};Object.assign(Settings,EventDispatcher),globalThis.Settings=Settings;