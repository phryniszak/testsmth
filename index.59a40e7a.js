// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6fRhY":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d7fe96c059a40e7a";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lRBv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _stylesScss = require("../styles.scss");
var _config = require("./config");
// https://github.com/debug-js/debug#browser-support
// localStorage.debug = 'foo'
var _debug = require("debug");
var _debugDefault = parcelHelpers.interopDefault(_debug);
// start controller
var _controllerJs = require("./controller.js");
var _uiTopBarJs = require("./uiTopBar.js");
var _uiDrawerJs = require("./uiDrawer.js");
console.log("start");
const debug = new (0, _debugDefault.default)("index");
// globals
const _my_ = {};
globalThis._my_ = _my_;
// events
_my_.events = new EventTarget();
// helper for dispatching events
_my_.dispatchEvent = (eventName, detail)=>_my_.events.dispatchEvent(new CustomEvent(eventName, {
        detail: detail
    }));
_my_.controller = new (0, _controllerJs.Controller)();
_my_.uiTopBar = new (0, _uiTopBarJs.UiTopBar)();
_my_.uiDrawer = new (0, _uiDrawerJs.UiDrawer)(); //import * as classes from '@material/button/mdc-button.scss’;
 //document.body.className = classes.body;
 //@import  '~@material/button/mdc-button.scss’;
 // import {MDCRipple} from '@material/ripple';
 // const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));
 // import { MDCTopAppBar } from '@material/top-app-bar';
 // // Instantiation
 // const topAppBarElement = document.querySelector('.mdc-top-app-bar');
 // const topAppBar = new MDCTopAppBar(topAppBarElement);
 // const listEl = document.querySelector < HTMLElement > ('.mdc-drawer .mdc-deprecated-list');
 // const mainContentEl = document.querySelector < HTMLElement > ('.main-content');
 // listEl.addEventListener('click', (event) => {
 //     mainContentEl.querySelector < HTMLElement > ('input, button').focus();
 // });
 // document.body.addEventListener('MDCDrawer:closed', () => {
 //     mainContentEl.querySelector < HTMLElement > ('input, button').focus();
 // });
 // import { MDCDrawer } from "@material/drawer";
 // const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
 // import { MDCTopAppBar } from "@material/top-app-bar";
 // const topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));
 // topAppBar.setScrollTarget(document.getElementById('main-content'));
 // topAppBar.listen('MDCTopAppBar:nav', () => {
 //     drawer.open = !drawer.open;
 // });

},{"../styles.scss":"kMfPY","./config":"k5Hzs","debug":"l0oUb","./controller.js":"aenu9","./uiTopBar.js":"dWdd5","./uiDrawer.js":"31t3P","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kMfPY":[function() {},{}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CONFIG", ()=>CONFIG);
const CONFIG = {};
// messages drawer
CONFIG.MESSAGE_TOGGLE_DRAWER = "drawer_toggle";
CONFIG.MESSAGE_DRAWER_OPENED = "drawer_opened";
CONFIG.MESSAGE_DRAWER_CLOSED = "drawer_closed";
// messages
CONFIG.MESSAGE_INIT = "init";
CONFIG.MESSAGE_RESIZE = "resize";
// messages top bar
CONFIG.MESSAGE_BTN_OPEN_IMAGES = "open_images";
CONFIG.MESSAGE_BTN_LENS = "lens_view";
CONFIG.MESSAGE_BTN_ANALYZE = "analyze_view";
CONFIG.MESSAGE_BTN_SETTINGS = "settings_view";
// USB device
// CONFIG.VENDOR_ID = 0x2E8A;
// CONFIG.PRODUCT_ID = 0x0104;
// CONFIG.USB_FILERS = [
//     { vendorId: CONFIG.VENDOR_ID, productId: CONFIG.PRODUCT_ID }
// ];
//
CONFIG.LENS_SIZE = 2048;
CONFIG.LENS_FILES_SIZE = 8390144;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"l0oUb":[function(require,module,exports) {
/* eslint-env browser */ /**
 * This is the web browser implementation of `debug()`.
 */ var process = require("ca8bda62436c236f");
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (()=>{
    let warned = false;
    return ()=>{
        if (!warned) {
            warned = true;
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
    };
})();
/**
 * Colors.
 */ exports.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33"
];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */ // eslint-disable-next-line complexity
function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) return true;
    // Internet Explorer and Edge do not support colors.
    if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return false;
    // Is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
    typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
    if (!this.useColors) return;
    const c = "color: " + this.color;
    args.splice(1, 0, c, "color: inherit");
    // The final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    let index = 0;
    let lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, (match)=>{
        if (match === "%%") return;
        index++;
        if (match === "%c") // We only are interested in the *last* %c
        // (the user may have provided their own)
        lastC = index;
    });
    args.splice(lastC, 0, c);
}
/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */ exports.log = console.debug || console.log || (()=>{});
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    try {
        if (namespaces) exports.storage.setItem("debug", namespaces);
        else exports.storage.removeItem("debug");
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    let r;
    try {
        r = exports.storage.getItem("debug");
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
    // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    if (!r && typeof process !== "undefined" && "env" in process) r = undefined;
    return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */ function localstorage() {
    try {
        // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
        // The Browser also has localStorage in the global context.
        return localStorage;
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
module.exports = require("8cdcc40d98782b9a")(exports);
const { formatters  } = module.exports;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */ formatters.j = function(v) {
    try {
        return JSON.stringify(v);
    } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
    }
};

},{"ca8bda62436c236f":"d5jf4","8cdcc40d98782b9a":"6Yq2n"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"6Yq2n":[function(require,module,exports) {
/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */ function setup(env) {
    createDebug.debug = createDebug;
    createDebug.default = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = require("5ccb88b289d078d9");
    createDebug.destroy = destroy;
    Object.keys(env).forEach((key)=>{
        createDebug[key] = env[key];
    });
    /**
	* The currently active debug mode names, and names to skip.
	*/ createDebug.names = [];
    createDebug.skips = [];
    /**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/ createDebug.formatters = {};
    /**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/ function selectColor(namespace) {
        let hash = 0;
        for(let i = 0; i < namespace.length; i++){
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;
    /**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/ function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
            // Disabled?
            if (!debug.enabled) return;
            const self = debug;
            // Set `diff` timestamp
            const curr = Number(new Date());
            const ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);
            if (typeof args[0] !== "string") // Anything else let's inspect with %O
            args.unshift("%O");
            // Apply any `formatters` transformations
            let index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format)=>{
                // If we encounter an escaped % then don't increase the array index
                if (match === "%%") return "%";
                index++;
                const formatter = createDebug.formatters[format];
                if (typeof formatter === "function") {
                    const val = args[index];
                    match = formatter.call(self, val);
                    // Now we need to remove `args[index]` since it's inlined in the `format`
                    args.splice(index, 1);
                    index--;
                }
                return match;
            });
            // Apply env-specific formatting (colors, etc.)
            createDebug.formatArgs.call(self, args);
            const logFn = self.log || createDebug.log;
            logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.
        Object.defineProperty(debug, "enabled", {
            enumerable: true,
            configurable: false,
            get: ()=>{
                if (enableOverride !== null) return enableOverride;
                if (namespacesCache !== createDebug.namespaces) {
                    namespacesCache = createDebug.namespaces;
                    enabledCache = createDebug.enabled(namespace);
                }
                return enabledCache;
            },
            set: (v)=>{
                enableOverride = v;
            }
        });
        // Env-specific initialization logic for debug instances
        if (typeof createDebug.init === "function") createDebug.init(debug);
        return debug;
    }
    function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
    }
    /**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/ function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        let i;
        const split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
        const len = split.length;
        for(i = 0; i < len; i++){
            if (!split[i]) continue;
            namespaces = split[i].replace(/\*/g, ".*?");
            if (namespaces[0] === "-") createDebug.skips.push(new RegExp("^" + namespaces.slice(1) + "$"));
            else createDebug.names.push(new RegExp("^" + namespaces + "$"));
        }
    }
    /**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/ function disable() {
        const namespaces = [
            ...createDebug.names.map(toNamespace),
            ...createDebug.skips.map(toNamespace).map((namespace)=>"-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
    }
    /**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/ function enabled(name) {
        if (name[name.length - 1] === "*") return true;
        let i;
        let len;
        for(i = 0, len = createDebug.skips.length; i < len; i++){
            if (createDebug.skips[i].test(name)) return false;
        }
        for(i = 0, len = createDebug.names.length; i < len; i++){
            if (createDebug.names[i].test(name)) return true;
        }
        return false;
    }
    /**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/ function toNamespace(regexp) {
        return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
    }
    /**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/ function coerce(val) {
        if (val instanceof Error) return val.stack || val.message;
        return val;
    }
    /**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/ function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    createDebug.enable(createDebug.load());
    return createDebug;
}
module.exports = setup;

},{"5ccb88b289d078d9":"jauEe"}],"jauEe":[function(require,module,exports) {
/**
 * Helpers.
 */ var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */ module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === "string" && val.length > 0) return parse(val);
    else if (type === "number" && isFinite(val)) return options.long ? fmtLong(val) : fmtShort(val);
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */ function parse(str) {
    str = String(str);
    if (str.length > 100) return;
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) return;
    var n = parseFloat(match[1]);
    var type = (match[2] || "ms").toLowerCase();
    switch(type){
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
            return n * y;
        case "weeks":
        case "week":
        case "w":
            return n * w;
        case "days":
        case "day":
        case "d":
            return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
            return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
            return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
            return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
            return n;
        default:
            return undefined;
    }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) return Math.round(ms / d) + "d";
    if (msAbs >= h) return Math.round(ms / h) + "h";
    if (msAbs >= m) return Math.round(ms / m) + "m";
    if (msAbs >= s) return Math.round(ms / s) + "s";
    return ms + "ms";
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) return plural(ms, msAbs, d, "day");
    if (msAbs >= h) return plural(ms, msAbs, h, "hour");
    if (msAbs >= m) return plural(ms, msAbs, m, "minute");
    if (msAbs >= s) return plural(ms, msAbs, s, "second");
    return ms + " ms";
}
/**
 * Pluralization helper.
 */ function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Controller", ()=>Controller);
var _configJs = require("./config.js");
var _debug = require("debug");
var _debugDefault = parcelHelpers.interopDefault(_debug);
const debug = new (0, _debugDefault.default)("controller");
class Controller {
    #handleBmp = [];
    #handleWebp = [];
    #handleJson = [];
    #directoryHandle;
    /**
     * 
     */ constructor(){
        debug("ctor");
        // controller state
        this.state = {
            state: null,
            oldState: null,
            lens: null
        };
        globalThis._my_.events.addEventListener((0, _configJs.CONFIG).MESSAGE_BTN_OPEN_IMAGES, ()=>this.loadImagesDialog());
    }
    /**
     * https://github.com/WICG/file-system-access/blob/main/SuggestedNameAndDir.md
     * @param {*} useFolder 
     */ loadImagesDialog = async ()=>{
        this.#directoryHandle = await window.showDirectoryPicker({
            startIn: "downloads"
        });
        await globalThis._my_.controller.processDirectory(this.#directoryHandle);
    };
    // INFO:
    // https://web.dev/file-system-access/
    // https://web.dev/read-files/
    processDirectory = async (handle, depth)=>{
        if (typeof depth == "number") depth++;
        else depth = 1;
        console.log("*** depth: ", depth);
        for await (const fileHandle of handle.values()){
            // let ext = fileHandle.name.split(".").pop();
            // console.log("ext: ", ext);
            if (fileHandle.kind === "file") {
                // get file to verify that we deal with proper image
                const file = await fileHandle.getFile();
                if (file.type && file.type === "image/bmp" && file.size === (0, _configJs.CONFIG).LENS_FILES_SIZE) {
                    // add only files not present
                    if (this.#handleBmp.findIndex((element)=>element.name == file.name) == -1) // we save only file handle
                    this.#handleBmp.push({
                        fileHandle: fileHandle,
                        name: file.name
                    });
                    else debug(`file bmp already present ${file.name}`);
                } else if (file.type && file.type === "image/webp") {
                    // add only files not present
                    if (this.#handleWebp.findIndex((element)=>element.name == file.name) == -1) // we save only file handle
                    this.#handleWebp.push({
                        fileHandle: fileHandle,
                        name: file.name
                    });
                    else debug(`file webp already present ${file.name}`);
                } else if (file.type && file.type === "application/json") {
                    // add only files not present
                    if (this.#handleJson.findIndex((element)=>element.name == file.name) == -1) // we save only file handle
                    this.#handleJson.push({
                        fileHandle: fileHandle,
                        name: file.name
                    });
                    else debug(`file json already present ${file.name}`);
                }
            } else if (fileHandle.kind === "directory") // I warned you - recursion
            await this.processDirectory(fileHandle, depth);
        }
        if (depth === 1) {
            debug(`loaded ${this.#handleBmp.length} bmp files`);
            debug(`loaded ${this.#handleWebp.length} webp files`);
            debug(`loaded ${this.#handleJson.length} json files`);
        }
    // // process only new lenses...
    // if (newLenses.length) {
    //     // update UI
    //     globalThis._my_.dispatchEvent(CONFIG.MESSAGE_LENS_ADDED, newLenses);
    // }
    // globalThis._my_.worker.postMessage({ cmd: CONFIG.WORKER_LENSES_ADDED, detail: this.#handleBmp });
    };
}

},{"./config.js":"k5Hzs","debug":"l0oUb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dWdd5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UiTopBar", ()=>UiTopBar);
var _topAppBar = require("@material/top-app-bar");
var _configJs = require("./config.js");
var _debug = require("debug");
var _debugDefault = parcelHelpers.interopDefault(_debug);
const debug = new (0, _debugDefault.default)("uiTopBar");
class UiTopBar {
    constructor(){
        debug("ctor");
        this.el = document.querySelector(".mdc-top-app-bar");
        this.topAppBar = (0, _topAppBar.MDCTopAppBar).attachTo(this.el);
        this.topAppBar.listen("MDCTopAppBar:nav", ()=>{
            globalThis._my_.dispatchEvent((0, _configJs.CONFIG).MESSAGE_TOGGLE_DRAWER);
        });
        this.elBtnOpenImages = document.getElementById("btnOpenImages");
        this.elBtnOpenImages.onclick = ()=>globalThis._my_.dispatchEvent((0, _configJs.CONFIG).MESSAGE_BTN_OPEN_IMAGES);
        this.elBtnLensView = document.getElementById("btnLensView");
        this.elBtnLensView.onclick = ()=>globalThis._my_.dispatchEvent((0, _configJs.CONFIG).MESSAGE_BTN_LENS);
        this.elBtnAnalyzeView = document.getElementById("btnAnalyzeView");
        this.elBtnAnalyzeView.onclick = ()=>globalThis._my_.dispatchEvent((0, _configJs.CONFIG).MESSAGE_BTN_ANALYZE);
        this.elBtnSettings = document.getElementById("btnSettings");
        this.elBtnSettings.onclick = ()=>globalThis._my_.dispatchEvent((0, _configJs.CONFIG).MESSAGE_BTN_SETTINGS);
    }
}

},{"@material/top-app-bar":"gjVJK","./config.js":"k5Hzs","debug":"l0oUb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gjVJK":[function(require,module,exports) {
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _adapter = require("./adapter");
parcelHelpers.exportAll(_adapter, exports);
var _component = require("./component");
parcelHelpers.exportAll(_component, exports);
var _constants = require("./constants");
parcelHelpers.exportAll(_constants, exports);
var _foundation = require("./foundation");
parcelHelpers.exportAll(_foundation, exports);
var _foundation1 = require("./fixed/foundation");
parcelHelpers.exportAll(_foundation1, exports);
var _foundation2 = require("./short/foundation");
parcelHelpers.exportAll(_foundation2, exports);
var _foundation3 = require("./standard/foundation");
parcelHelpers.exportAll(_foundation3, exports);

},{"./adapter":"3Ovfy","./component":"KwNqD","./constants":"52gAM","./foundation":"dHcUo","./fixed/foundation":"eeQCV","./short/foundation":"9lhAW","./standard/foundation":"6uP3L","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Ovfy":[function(require,module,exports) {
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"KwNqD":[function(require,module,exports) {
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MDCTopAppBar", ()=>MDCTopAppBar);
var _tslib = require("tslib");
var _component = require("@material/base/component");
var _component1 = require("@material/ripple/component");
var _constants = require("./constants");
var _foundation = require("./fixed/foundation");
var _foundation1 = require("./short/foundation");
var _foundation2 = require("./standard/foundation");
var MDCTopAppBar = /** @class */ function(_super) {
    (0, _tslib.__extends)(MDCTopAppBar, _super);
    function MDCTopAppBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTopAppBar.attachTo = function(root) {
        return new MDCTopAppBar(root);
    };
    MDCTopAppBar.prototype.initialize = function(rippleFactory) {
        if (rippleFactory === void 0) rippleFactory = function(el) {
            return (0, _component1.MDCRipple).attachTo(el);
        };
        this.navIcon = this.root.querySelector((0, _constants.strings).NAVIGATION_ICON_SELECTOR);
        // Get all icons in the toolbar and instantiate the ripples
        var icons = [].slice.call(this.root.querySelectorAll((0, _constants.strings).ACTION_ITEM_SELECTOR));
        if (this.navIcon) icons.push(this.navIcon);
        this.iconRipples = icons.map(function(icon) {
            var ripple = rippleFactory(icon);
            ripple.unbounded = true;
            return ripple;
        });
        this.scrollTarget = window;
    };
    MDCTopAppBar.prototype.initialSyncWithDOM = function() {
        this.handleNavigationClick = this.foundation.handleNavigationClick.bind(this.foundation);
        this.handleWindowResize = this.foundation.handleWindowResize.bind(this.foundation);
        this.handleTargetScroll = this.foundation.handleTargetScroll.bind(this.foundation);
        this.scrollTarget.addEventListener("scroll", this.handleTargetScroll);
        if (this.navIcon) this.navIcon.addEventListener("click", this.handleNavigationClick);
        var isFixed = this.root.classList.contains((0, _constants.cssClasses).FIXED_CLASS);
        var isShort = this.root.classList.contains((0, _constants.cssClasses).SHORT_CLASS);
        if (!isShort && !isFixed) window.addEventListener("resize", this.handleWindowResize);
    };
    MDCTopAppBar.prototype.destroy = function() {
        var e_1, _a;
        try {
            for(var _b = (0, _tslib.__values)(this.iconRipples), _c = _b.next(); !_c.done; _c = _b.next()){
                var iconRipple = _c.value;
                iconRipple.destroy();
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        this.scrollTarget.removeEventListener("scroll", this.handleTargetScroll);
        if (this.navIcon) this.navIcon.removeEventListener("click", this.handleNavigationClick);
        var isFixed = this.root.classList.contains((0, _constants.cssClasses).FIXED_CLASS);
        var isShort = this.root.classList.contains((0, _constants.cssClasses).SHORT_CLASS);
        if (!isShort && !isFixed) window.removeEventListener("resize", this.handleWindowResize);
        _super.prototype.destroy.call(this);
    };
    MDCTopAppBar.prototype.setScrollTarget = function(target) {
        // Remove scroll handler from the previous scroll target
        this.scrollTarget.removeEventListener("scroll", this.handleTargetScroll);
        this.scrollTarget = target;
        // Initialize scroll handler on the new scroll target
        this.handleTargetScroll = this.foundation.handleTargetScroll.bind(this.foundation);
        this.scrollTarget.addEventListener("scroll", this.handleTargetScroll);
    };
    MDCTopAppBar.prototype.getDefaultFoundation = function() {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            hasClass: function(className) {
                return _this.root.classList.contains(className);
            },
            addClass: function(className) {
                return _this.root.classList.add(className);
            },
            removeClass: function(className) {
                return _this.root.classList.remove(className);
            },
            setStyle: function(property, value) {
                return _this.root.style.setProperty(property, value);
            },
            getTopAppBarHeight: function() {
                return _this.root.clientHeight;
            },
            notifyNavigationIconClicked: function() {
                return _this.emit((0, _constants.strings).NAVIGATION_EVENT, {});
            },
            getViewportScrollY: function() {
                var win = _this.scrollTarget;
                var el = _this.scrollTarget;
                return win.pageYOffset !== undefined ? win.pageYOffset : el.scrollTop;
            },
            getTotalActionItems: function() {
                return _this.root.querySelectorAll((0, _constants.strings).ACTION_ITEM_SELECTOR).length;
            }
        };
        // tslint:enable:object-literal-sort-keys
        var foundation;
        if (this.root.classList.contains((0, _constants.cssClasses).SHORT_CLASS)) foundation = new (0, _foundation1.MDCShortTopAppBarFoundation)(adapter);
        else if (this.root.classList.contains((0, _constants.cssClasses).FIXED_CLASS)) foundation = new (0, _foundation.MDCFixedTopAppBarFoundation)(adapter);
        else foundation = new (0, _foundation2.MDCTopAppBarFoundation)(adapter);
        return foundation;
    };
    return MDCTopAppBar;
}((0, _component.MDCComponent));

},{"tslib":"lRdW5","@material/base/component":"jLptS","@material/ripple/component":"035sE","./constants":"52gAM","./fixed/foundation":"eeQCV","./short/foundation":"9lhAW","./standard/foundation":"6uP3L","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lRdW5":[function(require,module,exports) {
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", ()=>__extends);
parcelHelpers.export(exports, "__assign", ()=>__assign);
parcelHelpers.export(exports, "__rest", ()=>__rest);
parcelHelpers.export(exports, "__decorate", ()=>__decorate);
parcelHelpers.export(exports, "__param", ()=>__param);
parcelHelpers.export(exports, "__esDecorate", ()=>__esDecorate);
parcelHelpers.export(exports, "__runInitializers", ()=>__runInitializers);
parcelHelpers.export(exports, "__propKey", ()=>__propKey);
parcelHelpers.export(exports, "__setFunctionName", ()=>__setFunctionName);
parcelHelpers.export(exports, "__metadata", ()=>__metadata);
parcelHelpers.export(exports, "__awaiter", ()=>__awaiter);
parcelHelpers.export(exports, "__generator", ()=>__generator);
parcelHelpers.export(exports, "__createBinding", ()=>__createBinding);
parcelHelpers.export(exports, "__exportStar", ()=>__exportStar);
parcelHelpers.export(exports, "__values", ()=>__values);
parcelHelpers.export(exports, "__read", ()=>__read);
/** @deprecated */ parcelHelpers.export(exports, "__spread", ()=>__spread);
/** @deprecated */ parcelHelpers.export(exports, "__spreadArrays", ()=>__spreadArrays);
parcelHelpers.export(exports, "__spreadArray", ()=>__spreadArray);
parcelHelpers.export(exports, "__await", ()=>__await);
parcelHelpers.export(exports, "__asyncGenerator", ()=>__asyncGenerator);
parcelHelpers.export(exports, "__asyncDelegator", ()=>__asyncDelegator);
parcelHelpers.export(exports, "__asyncValues", ()=>__asyncValues);
parcelHelpers.export(exports, "__makeTemplateObject", ()=>__makeTemplateObject);
parcelHelpers.export(exports, "__importStar", ()=>__importStar);
parcelHelpers.export(exports, "__importDefault", ()=>__importDefault);
parcelHelpers.export(exports, "__classPrivateFieldGet", ()=>__classPrivateFieldGet);
parcelHelpers.export(exports, "__classPrivateFieldSet", ()=>__classPrivateFieldSet);
parcelHelpers.export(exports, "__classPrivateFieldIn", ()=>__classPrivateFieldIn);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.push(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.push(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++)value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    return useValue ? value : void 0;
}
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jLptS":[function(require,module,exports) {
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MDCComponent", ()=>MDCComponent);
var _tslib = require("tslib");
var _foundation = require("./foundation");
var MDCComponent = /** @class */ function() {
    function MDCComponent(root, foundation) {
        var args = [];
        for(var _i = 2; _i < arguments.length; _i++)args[_i - 2] = arguments[_i];
        this.root = root;
        this.initialize.apply(this, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(args)));
        // Note that we initialize foundation here and not within the constructor's
        // default param so that this.root is defined and can be used within the
        // foundation class.
        this.foundation = foundation === undefined ? this.getDefaultFoundation() : foundation;
        this.foundation.init();
        this.initialSyncWithDOM();
    }
    MDCComponent.attachTo = function(root) {
        // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
        // returns an instantiated component with its root set to that element. Also note that in the cases of
        // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
        // from getDefaultFoundation().
        return new MDCComponent(root, new (0, _foundation.MDCFoundation)({}));
    };
    /* istanbul ignore next: method param only exists for typing purposes; it does not need to be unit tested */ MDCComponent.prototype.initialize = function() {
        var _args = [];
        for(var _i = 0; _i < arguments.length; _i++)_args[_i] = arguments[_i];
    // Subclasses can override this to do any additional setup work that would be considered part of a
    // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
    // initialized. Any additional arguments besides root and foundation will be passed in here.
    };
    MDCComponent.prototype.getDefaultFoundation = function() {
        // Subclasses must override this method to return a properly configured foundation class for the
        // component.
        throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class");
    };
    MDCComponent.prototype.initialSyncWithDOM = function() {
    // Subclasses should override this method if they need to perform work to synchronize with a host DOM
    // object. An example of this would be a form control wrapper that needs to synchronize its internal state
    // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
    // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
    };
    MDCComponent.prototype.destroy = function() {
        // Subclasses may implement this method to release any resources / deregister any listeners they have
        // attached. An example of this might be deregistering a resize event from the window object.
        this.foundation.destroy();
    };
    MDCComponent.prototype.listen = function(evtType, handler, options) {
        this.root.addEventListener(evtType, handler, options);
    };
    MDCComponent.prototype.unlisten = function(evtType, handler, options) {
        this.root.removeEventListener(evtType, handler, options);
    };
    /**
     * Fires a cross-browser-compatible custom event from the component root of the given type, with the given data.
     */ MDCComponent.prototype.emit = function(evtType, evtData, shouldBubble) {
        if (shouldBubble === void 0) shouldBubble = false;
        var evt;
        if (typeof CustomEvent === "function") evt = new CustomEvent(evtType, {
            bubbles: shouldBubble,
            detail: evtData
        });
        else {
            evt = document.createEvent("CustomEvent");
            evt.initCustomEvent(evtType, shouldBubble, false, evtData);
        }
        this.root.dispatchEvent(evt);
    };
    return MDCComponent;
}();
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
exports.default = MDCComponent;

},{"tslib":"lRdW5","./foundation":"kC5Yw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kC5Yw":[function(require,module,exports) {
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MDCFoundation", ()=>MDCFoundation);
var MDCFoundation = /** @class */ function() {
    function MDCFoundation(adapter) {
        if (adapter === void 0) adapter = {};
        this.adapter = adapter;
    }
    Object.defineProperty(MDCFoundation, "cssClasses", {
        get: function() {
            // Classes extending MDCFoundation should implement this method to return an object which exports every
            // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
            return {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "strings", {
        get: function() {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
            return {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "numbers", {
        get: function() {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
            return {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "defaultAdapter", {
        get: function() {
            // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
            // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
            // validation.
            return {};
        },
        enumerable: false,
        configurable: true
    });
    MDCFoundation.prototype.init = function() {
    // Subclasses should override this method to perform initialization routines (registering events, etc.)
    };
    MDCFoundation.prototype.destroy = function() {
    // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    };
    return MDCFoundation;
}();
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
exports.default = MDCFoundation;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"035sE":[function(require,module,exports) {
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MDCRipple", ()=>MDCRipple);
var _tslib = require("tslib");
var _component = require("@material/base/component");
var _events = require("@material/dom/events");
var _ponyfill = require("@material/dom/ponyfill");
var _foundation = require("./foundation");
var _util = require("./util");
var MDCRipple = /** @class */ function(_super) {
    (0, _tslib.__extends)(MDCRipple, _super);
    function MDCRipple() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.disabled = false;
        return _this;
    }
    MDCRipple.attachTo = function(root, opts) {
        if (opts === void 0) opts = {
            isUnbounded: undefined
        };
        var ripple = new MDCRipple(root);
        // Only override unbounded behavior if option is explicitly specified
        if (opts.isUnbounded !== undefined) ripple.unbounded = opts.isUnbounded;
        return ripple;
    };
    MDCRipple.createAdapter = function(instance) {
        return {
            addClass: function(className) {
                return instance.root.classList.add(className);
            },
            browserSupportsCssVars: function() {
                return _util.supportsCssVariables(window);
            },
            computeBoundingRect: function() {
                return instance.root.getBoundingClientRect();
            },
            containsEventTarget: function(target) {
                return instance.root.contains(target);
            },
            deregisterDocumentInteractionHandler: function(evtType, handler) {
                return document.documentElement.removeEventListener(evtType, handler, (0, _events.applyPassive)());
            },
            deregisterInteractionHandler: function(evtType, handler) {
                return instance.root.removeEventListener(evtType, handler, (0, _events.applyPassive)());
            },
            deregisterResizeHandler: function(handler) {
                return window.removeEventListener("resize", handler);
            },
            getWindowPageOffset: function() {
                return {
                    x: window.pageXOffset,
                    y: window.pageYOffset
                };
            },
            isSurfaceActive: function() {
                return (0, _ponyfill.matches)(instance.root, ":active");
            },
            isSurfaceDisabled: function() {
                return Boolean(instance.disabled);
            },
            isUnbounded: function() {
                return Boolean(instance.unbounded);
            },
            registerDocumentInteractionHandler: function(evtType, handler) {
                return document.documentElement.addEventListener(evtType, handler, (0, _events.applyPassive)());
            },
            registerInteractionHandler: function(evtType, handler) {
                return instance.root.addEventListener(evtType, handler, (0, _events.applyPassive)());
            },
            registerResizeHandler: function(handler) {
                return window.addEventListener("resize", handler);
            },
            removeClass: function(className) {
                return instance.root.classList.remove(className);
            },
            updateCssVariable: function(varName, value) {
                return instance.root.style.setProperty(varName, value);
            }
        };
    };
    Object.defineProperty(MDCRipple.prototype, "unbounded", {
        get: function() {
            return Boolean(this.isUnbounded);
        },
        set: function(unbounded) {
            this.isUnbounded = Boolean(unbounded);
            this.setUnbounded();
        },
        enumerable: false,
        configurable: true
    });
    MDCRipple.prototype.activate = function() {
        this.foundation.activate();
    };
    MDCRipple.prototype.deactivate = function() {
        this.foundation.deactivate();
    };
    MDCRipple.prototype.layout = function() {
        this.foundation.layout();
    };
    MDCRipple.prototype.getDefaultFoundation = function() {
        return new (0, _foundation.MDCRippleFoundation)(MDCRipple.createAdapter(this));
    };
    MDCRipple.prototype.initialSyncWithDOM = function() {
        var root = this.root;
        this.isUnbounded = "mdcRippleIsUnbounded" in root.dataset;
    };
    /**
     * Closure Compiler throws an access control error when directly accessing a
     * protected or private property inside a getter/setter, like unbounded above.
     * By accessing the protected property inside a method, we solve that problem.
     * That's why this function exists.
     */ MDCRipple.prototype.setUnbounded = function() {
        this.foundation.setUnbounded(Boolean(this.isUnbounded));
    };
    return MDCRipple;
}((0, _component.MDCComponent));

},{"tslib":"lRdW5","@material/base/component":"jLptS","@material/dom/events":"87xmx","@material/dom/ponyfill":"8pLcv","./foundation":"7frpT","./util":"l3az5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"87xmx":[function(require,module,exports) {
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ /**
 * Determine whether the current browser supports passive event listeners, and
 * if so, use them.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyPassive", ()=>applyPassive);
function applyPassive(globalObj) {
    if (globalObj === void 0) globalObj = window;
    return supportsPassiveOption(globalObj) ? {
        passive: true
    } : false;
}
function supportsPassiveOption(globalObj) {
    if (globalObj === void 0) globalObj = window;
    // See
    // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    var passiveSupported = false;
    try {
        var options = {
            // This function will be called when the browser
            // attempts to access the passive property.
            get passive () {
                passiveSupported = true;
                return false;
            }
        };
        var handler = function() {};
        globalObj.document.addEventListener("test", handler, options);
        globalObj.document.removeEventListener("test", handler, options);
    } catch (err) {
        passiveSupported = false;
    }
    return passiveSupported;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8pLcv":[function(require,module,exports) {
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ /**
 * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
 * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "closest", ()=>closest);
parcelHelpers.export(exports, "matches", ()=>matches);
/**
 * Used to compute the estimated scroll width of elements. When an element is
 * hidden due to display: none; being applied to a parent element, the width is
 * returned as 0. However, the element will have a true width once no longer
 * inside a display: none context. This method computes an estimated width when
 * the element is hidden or returns the true width when the element is visble.
 * @param {Element} element the element whose width to estimate
 */ parcelHelpers.export(exports, "estimateScrollWidth", ()=>estimateScrollWidth);
function closest(element, selector) {
    if (element.closest) return element.closest(selector);
    var el = element;
    while(el){
        if (matches(el, selector)) return el;
        el = el.parentElement;
    }
    return null;
}
function matches(element, selector) {
    var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
    return nativeMatches.call(element, selector);
}
function estimateScrollWidth(element) {
    // Check the offsetParent. If the element inherits display: none from any
    // parent, the offsetParent property will be null (see
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent).
    // This check ensures we only clone the node when necessary.
    var htmlEl = element;
    if (htmlEl.offsetParent !== null) return htmlEl.scrollWidth;
    var clone = htmlEl.cloneNode(true);
    clone.style.setProperty("position", "absolute");
    clone.style.setProperty("transform", "translate(-9999px, -9999px)");
    document.documentElement.appendChild(clone);
    var scrollWidth = clone.scrollWidth;
    document.documentElement.removeChild(clone);
    return scrollWidth;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7frpT":[function(require,module,exports) {
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MDCRippleFoundation", ()=>MDCRippleFoundation);
var _tslib = require("tslib");
var _foundation = require("@material/base/foundation");
var _constants = require("./constants");
var _util = require("./util");
// Activation events registered on the root element of each instance for activation
var ACTIVATION_EVENT_TYPES = [
    "touchstart",
    "pointerdown",
    "mousedown",
    "keydown"
];
// Deactivation events registered on documentElement when a pointer-related down event occurs
var POINTER_DEACTIVATION_EVENT_TYPES = [
    "touchend",
    "pointerup",
    "mouseup",
    "contextmenu"
];
// simultaneous nested activations
var activatedTargets = [];
var MDCRippleFoundation = /** @class */ function(_super) {
    (0, _tslib.__extends)(MDCRippleFoundation, _super);
    function MDCRippleFoundation(adapter) {
        var _this = _super.call(this, (0, _tslib.__assign)((0, _tslib.__assign)({}, MDCRippleFoundation.defaultAdapter), adapter)) || this;
        _this.activationAnimationHasEnded = false;
        _this.activationTimer = 0;
        _this.fgDeactivationRemovalTimer = 0;
        _this.fgScale = "0";
        _this.frame = {
            width: 0,
            height: 0
        };
        _this.initialSize = 0;
        _this.layoutFrame = 0;
        _this.maxRadius = 0;
        _this.unboundedCoords = {
            left: 0,
            top: 0
        };
        _this.activationState = _this.defaultActivationState();
        _this.activationTimerCallback = function() {
            _this.activationAnimationHasEnded = true;
            _this.runDeactivationUXLogicIfReady();
        };
        _this.activateHandler = function(e) {
            _this.activateImpl(e);
        };
        _this.deactivateHandler = function() {
            _this.deactivateImpl();
        };
        _this.focusHandler = function() {
            _this.handleFocus();
        };
        _this.blurHandler = function() {
            _this.handleBlur();
        };
        _this.resizeHandler = function() {
            _this.layout();
        };
        return _this;
    }
    Object.defineProperty(MDCRippleFoundation, "cssClasses", {
        get: function() {
            return 0, _constants.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "strings", {
        get: function() {
            return 0, _constants.strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "numbers", {
        get: function() {
            return 0, _constants.numbers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
        get: function() {
            return {
                addClass: function() {
                    return undefined;
                },
                browserSupportsCssVars: function() {
                    return true;
                },
                computeBoundingRect: function() {
                    return {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        width: 0,
                        height: 0
                    };
                },
                containsEventTarget: function() {
                    return true;
                },
                deregisterDocumentInteractionHandler: function() {
                    return undefined;
                },
                deregisterInteractionHandler: function() {
                    return undefined;
                },
                deregisterResizeHandler: function() {
                    return undefined;
                },
                getWindowPageOffset: function() {
                    return {
                        x: 0,
                        y: 0
                    };
                },
                isSurfaceActive: function() {
                    return true;
                },
                isSurfaceDisabled: function() {
                    return true;
                },
                isUnbounded: function() {
                    return true;
                },
                registerDocumentInteractionHandler: function() {
                    return undefined;
                },
                registerInteractionHandler: function() {
                    return undefined;
                },
                registerResizeHandler: function() {
                    return undefined;
                },
                removeClass: function() {
                    return undefined;
                },
                updateCssVariable: function() {
                    return undefined;
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCRippleFoundation.prototype.init = function() {
        var _this = this;
        var supportsPressRipple = this.supportsPressRipple();
        this.registerRootHandlers(supportsPressRipple);
        if (supportsPressRipple) {
            var _a = MDCRippleFoundation.cssClasses, ROOT_1 = _a.ROOT, UNBOUNDED_1 = _a.UNBOUNDED;
            requestAnimationFrame(function() {
                _this.adapter.addClass(ROOT_1);
                if (_this.adapter.isUnbounded()) {
                    _this.adapter.addClass(UNBOUNDED_1);
                    // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
                    _this.layoutInternal();
                }
            });
        }
    };
    MDCRippleFoundation.prototype.destroy = function() {
        var _this = this;
        if (this.supportsPressRipple()) {
            if (this.activationTimer) {
                clearTimeout(this.activationTimer);
                this.activationTimer = 0;
                this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
            }
            if (this.fgDeactivationRemovalTimer) {
                clearTimeout(this.fgDeactivationRemovalTimer);
                this.fgDeactivationRemovalTimer = 0;
                this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
            }
            var _a = MDCRippleFoundation.cssClasses, ROOT_2 = _a.ROOT, UNBOUNDED_2 = _a.UNBOUNDED;
            requestAnimationFrame(function() {
                _this.adapter.removeClass(ROOT_2);
                _this.adapter.removeClass(UNBOUNDED_2);
                _this.removeCssVars();
            });
        }
        this.deregisterRootHandlers();
        this.deregisterDeactivationHandlers();
    };
    /**
     * @param evt Optional event containing position information.
     */ MDCRippleFoundation.prototype.activate = function(evt) {
        this.activateImpl(evt);
    };
    MDCRippleFoundation.prototype.deactivate = function() {
        this.deactivateImpl();
    };
    MDCRippleFoundation.prototype.layout = function() {
        var _this = this;
        if (this.layoutFrame) cancelAnimationFrame(this.layoutFrame);
        this.layoutFrame = requestAnimationFrame(function() {
            _this.layoutInternal();
            _this.layoutFrame = 0;
        });
    };
    MDCRippleFoundation.prototype.setUnbounded = function(unbounded) {
        var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;
        if (unbounded) this.adapter.addClass(UNBOUNDED);
        else this.adapter.removeClass(UNBOUNDED);
    };
    MDCRippleFoundation.prototype.handleFocus = function() {
        var _this = this;
        requestAnimationFrame(function() {
            return _this.adapter.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
        });
    };
    MDCRippleFoundation.prototype.handleBlur = function() {
        var _this = this;
        requestAnimationFrame(function() {
            return _this.adapter.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
        });
    };
    /**
     * We compute this property so that we are not querying information about the client
     * until the point in time where the foundation requests it. This prevents scenarios where
     * client-side feature-detection may happen too early, such as when components are rendered on the server
     * and then initialized at mount time on the client.
     */ MDCRippleFoundation.prototype.supportsPressRipple = function() {
        return this.adapter.browserSupportsCssVars();
    };
    MDCRippleFoundation.prototype.defaultActivationState = function() {
        return {
            activationEvent: undefined,
            hasDeactivationUXRun: false,
            isActivated: false,
            isProgrammatic: false,
            wasActivatedByPointer: false,
            wasElementMadeActive: false
        };
    };
    /**
     * supportsPressRipple Passed from init to save a redundant function call
     */ MDCRippleFoundation.prototype.registerRootHandlers = function(supportsPressRipple) {
        var e_1, _a;
        if (supportsPressRipple) {
            try {
                for(var ACTIVATION_EVENT_TYPES_1 = (0, _tslib.__values)(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next(); !ACTIVATION_EVENT_TYPES_1_1.done; ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next()){
                    var evtType = ACTIVATION_EVENT_TYPES_1_1.value;
                    this.adapter.registerInteractionHandler(evtType, this.activateHandler);
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (ACTIVATION_EVENT_TYPES_1_1 && !ACTIVATION_EVENT_TYPES_1_1.done && (_a = ACTIVATION_EVENT_TYPES_1.return)) _a.call(ACTIVATION_EVENT_TYPES_1);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
            if (this.adapter.isUnbounded()) this.adapter.registerResizeHandler(this.resizeHandler);
        }
        this.adapter.registerInteractionHandler("focus", this.focusHandler);
        this.adapter.registerInteractionHandler("blur", this.blurHandler);
    };
    MDCRippleFoundation.prototype.registerDeactivationHandlers = function(evt) {
        var e_2, _a;
        if (evt.type === "keydown") this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
        else try {
            for(var POINTER_DEACTIVATION_EVENT_TYPES_1 = (0, _tslib.__values)(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next(); !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done; POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next()){
                var evtType = POINTER_DEACTIVATION_EVENT_TYPES_1_1.value;
                this.adapter.registerDocumentInteractionHandler(evtType, this.deactivateHandler);
            }
        } catch (e_2_1) {
            e_2 = {
                error: e_2_1
            };
        } finally{
            try {
                if (POINTER_DEACTIVATION_EVENT_TYPES_1_1 && !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_1.return)) _a.call(POINTER_DEACTIVATION_EVENT_TYPES_1);
            } finally{
                if (e_2) throw e_2.error;
            }
        }
    };
    MDCRippleFoundation.prototype.deregisterRootHandlers = function() {
        var e_3, _a;
        try {
            for(var ACTIVATION_EVENT_TYPES_2 = (0, _tslib.__values)(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next(); !ACTIVATION_EVENT_TYPES_2_1.done; ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next()){
                var evtType = ACTIVATION_EVENT_TYPES_2_1.value;
                this.adapter.deregisterInteractionHandler(evtType, this.activateHandler);
            }
        } catch (e_3_1) {
            e_3 = {
                error: e_3_1
            };
        } finally{
            try {
                if (ACTIVATION_EVENT_TYPES_2_1 && !ACTIVATION_EVENT_TYPES_2_1.done && (_a = ACTIVATION_EVENT_TYPES_2.return)) _a.call(ACTIVATION_EVENT_TYPES_2);
            } finally{
                if (e_3) throw e_3.error;
            }
        }
        this.adapter.deregisterInteractionHandler("focus", this.focusHandler);
        this.adapter.deregisterInteractionHandler("blur", this.blurHandler);
        if (this.adapter.isUnbounded()) this.adapter.deregisterResizeHandler(this.resizeHandler);
    };
    MDCRippleFoundation.prototype.deregisterDeactivationHandlers = function() {
        var e_4, _a;
        this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
        try {
            for(var POINTER_DEACTIVATION_EVENT_TYPES_2 = (0, _tslib.__values)(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next(); !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done; POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next()){
                var evtType = POINTER_DEACTIVATION_EVENT_TYPES_2_1.value;
                this.adapter.deregisterDocumentInteractionHandler(evtType, this.deactivateHandler);
            }
        } catch (e_4_1) {
            e_4 = {
                error: e_4_1
            };
        } finally{
            try {
                if (POINTER_DEACTIVATION_EVENT_TYPES_2_1 && !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_2.return)) _a.call(POINTER_DEACTIVATION_EVENT_TYPES_2);
            } finally{
                if (e_4) throw e_4.error;
            }
        }
    };
    MDCRippleFoundation.prototype.removeCssVars = function() {
        var _this = this;
        var rippleStrings = MDCRippleFoundation.strings;
        var keys = Object.keys(rippleStrings);
        keys.forEach(function(key) {
            if (key.indexOf("VAR_") === 0) _this.adapter.updateCssVariable(rippleStrings[key], null);
        });
    };
    MDCRippleFoundation.prototype.activateImpl = function(evt) {
        var _this = this;
        if (this.adapter.isSurfaceDisabled()) return;
        var activationState = this.activationState;
        if (activationState.isActivated) return;
        // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
        var previousActivationEvent = this.previousActivationEvent;
        var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;
        if (isSameInteraction) return;
        activationState.isActivated = true;
        activationState.isProgrammatic = evt === undefined;
        activationState.activationEvent = evt;
        activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === "mousedown" || evt.type === "touchstart" || evt.type === "pointerdown");
        var hasActivatedChild = evt !== undefined && activatedTargets.length > 0 && activatedTargets.some(function(target) {
            return _this.adapter.containsEventTarget(target);
        });
        if (hasActivatedChild) {
            // Immediately reset activation state, while preserving logic that prevents touch follow-on events
            this.resetActivationState();
            return;
        }
        if (evt !== undefined) {
            activatedTargets.push(evt.target);
            this.registerDeactivationHandlers(evt);
        }
        activationState.wasElementMadeActive = this.checkElementMadeActive(evt);
        if (activationState.wasElementMadeActive) this.animateActivation();
        requestAnimationFrame(function() {
            // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
            activatedTargets = [];
            if (!activationState.wasElementMadeActive && evt !== undefined && (evt.key === " " || evt.keyCode === 32)) {
                // If space was pressed, try again within an rAF call to detect :active, because different UAs report
                // active states inconsistently when they're called within event handling code:
                // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
                // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
                // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
                // variable is set within a rAF callback for a submit button interaction (#2241).
                activationState.wasElementMadeActive = _this.checkElementMadeActive(evt);
                if (activationState.wasElementMadeActive) _this.animateActivation();
            }
            if (!activationState.wasElementMadeActive) // Reset activation state immediately if element was not made active.
            _this.activationState = _this.defaultActivationState();
        });
    };
    MDCRippleFoundation.prototype.checkElementMadeActive = function(evt) {
        return evt !== undefined && evt.type === "keydown" ? this.adapter.isSurfaceActive() : true;
    };
    MDCRippleFoundation.prototype.animateActivation = function() {
        var _this = this;
        var _a = MDCRippleFoundation.strings, VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
        var _b = MDCRippleFoundation.cssClasses, FG_DEACTIVATION = _b.FG_DEACTIVATION, FG_ACTIVATION = _b.FG_ACTIVATION;
        var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
        this.layoutInternal();
        var translateStart = "";
        var translateEnd = "";
        if (!this.adapter.isUnbounded()) {
            var _c = this.getFgTranslationCoordinates(), startPoint = _c.startPoint, endPoint = _c.endPoint;
            translateStart = startPoint.x + "px, " + startPoint.y + "px";
            translateEnd = endPoint.x + "px, " + endPoint.y + "px";
        }
        this.adapter.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
        this.adapter.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
        // Cancel any ongoing activation/deactivation animations
        clearTimeout(this.activationTimer);
        clearTimeout(this.fgDeactivationRemovalTimer);
        this.rmBoundedActivationClasses();
        this.adapter.removeClass(FG_DEACTIVATION);
        // Force layout in order to re-trigger the animation.
        this.adapter.computeBoundingRect();
        this.adapter.addClass(FG_ACTIVATION);
        this.activationTimer = setTimeout(function() {
            _this.activationTimerCallback();
        }, DEACTIVATION_TIMEOUT_MS);
    };
    MDCRippleFoundation.prototype.getFgTranslationCoordinates = function() {
        var _a = this.activationState, activationEvent = _a.activationEvent, wasActivatedByPointer = _a.wasActivatedByPointer;
        var startPoint;
        if (wasActivatedByPointer) startPoint = (0, _util.getNormalizedEventCoords)(activationEvent, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect());
        else startPoint = {
            x: this.frame.width / 2,
            y: this.frame.height / 2
        };
        // Center the element around the start point.
        startPoint = {
            x: startPoint.x - this.initialSize / 2,
            y: startPoint.y - this.initialSize / 2
        };
        var endPoint = {
            x: this.frame.width / 2 - this.initialSize / 2,
            y: this.frame.height / 2 - this.initialSize / 2
        };
        return {
            startPoint: startPoint,
            endPoint: endPoint
        };
    };
    MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady = function() {
        var _this = this;
        // This method is called both when a pointing device is released, and when the activation animation ends.
        // The deactivation animation should only run after both of those occur.
        var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
        var _a = this.activationState, hasDeactivationUXRun = _a.hasDeactivationUXRun, isActivated = _a.isActivated;
        var activationHasEnded = hasDeactivationUXRun || !isActivated;
        if (activationHasEnded && this.activationAnimationHasEnded) {
            this.rmBoundedActivationClasses();
            this.adapter.addClass(FG_DEACTIVATION);
            this.fgDeactivationRemovalTimer = setTimeout(function() {
                _this.adapter.removeClass(FG_DEACTIVATION);
            }, (0, _constants.numbers).FG_DEACTIVATION_MS);
        }
    };
    MDCRippleFoundation.prototype.rmBoundedActivationClasses = function() {
        var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
        this.adapter.removeClass(FG_ACTIVATION);
        this.activationAnimationHasEnded = false;
        this.adapter.computeBoundingRect();
    };
    MDCRippleFoundation.prototype.resetActivationState = function() {
        var _this = this;
        this.previousActivationEvent = this.activationState.activationEvent;
        this.activationState = this.defaultActivationState();
        // Touch devices may fire additional events for the same interaction within a short time.
        // Store the previous event until it's safe to assume that subsequent events are for new interactions.
        setTimeout(function() {
            return _this.previousActivationEvent = undefined;
        }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
    };
    MDCRippleFoundation.prototype.deactivateImpl = function() {
        var _this = this;
        var activationState = this.activationState;
        // This can happen in scenarios such as when you have a keyup event that blurs the element.
        if (!activationState.isActivated) return;
        var state = (0, _tslib.__assign)({}, activationState);
        if (activationState.isProgrammatic) {
            requestAnimationFrame(function() {
                _this.animateDeactivation(state);
            });
            this.resetActivationState();
        } else {
            this.deregisterDeactivationHandlers();
            requestAnimationFrame(function() {
                _this.activationState.hasDeactivationUXRun = true;
                _this.animateDeactivation(state);
                _this.resetActivationState();
            });
        }
    };
    MDCRippleFoundation.prototype.animateDeactivation = function(_a) {
        var wasActivatedByPointer = _a.wasActivatedByPointer, wasElementMadeActive = _a.wasElementMadeActive;
        if (wasActivatedByPointer || wasElementMadeActive) this.runDeactivationUXLogicIfReady();
    };
    MDCRippleFoundation.prototype.layoutInternal = function() {
        var _this = this;
        this.frame = this.adapter.computeBoundingRect();
        var maxDim = Math.max(this.frame.height, this.frame.width);
        // Surface diameter is treated differently for unbounded vs. bounded ripples.
        // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
        // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
        // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
        // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
        // `overflow: hidden`.
        var getBoundedRadius = function() {
            var hypotenuse = Math.sqrt(Math.pow(_this.frame.width, 2) + Math.pow(_this.frame.height, 2));
            return hypotenuse + MDCRippleFoundation.numbers.PADDING;
        };
        this.maxRadius = this.adapter.isUnbounded() ? maxDim : getBoundedRadius();
        // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
        var initialSize = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
        // Unbounded ripple size should always be even number to equally center align.
        if (this.adapter.isUnbounded() && initialSize % 2 !== 0) this.initialSize = initialSize - 1;
        else this.initialSize = initialSize;
        this.fgScale = "" + this.maxRadius / this.initialSize;
        this.updateLayoutCssVars();
    };
    MDCRippleFoundation.prototype.updateLayoutCssVars = function() {
        var _a = MDCRippleFoundation.strings, VAR_FG_SIZE = _a.VAR_FG_SIZE, VAR_LEFT = _a.VAR_LEFT, VAR_TOP = _a.VAR_TOP, VAR_FG_SCALE = _a.VAR_FG_SCALE;
        this.adapter.updateCssVariable(VAR_FG_SIZE, this.initialSize + "px");
        this.adapter.updateCssVariable(VAR_FG_SCALE, this.fgScale);
        if (this.adapter.isUnbounded()) {
            this.unboundedCoords = {
                left: Math.round(this.frame.width / 2 - this.initialSize / 2),
                top: Math.round(this.frame.height / 2 - this.initialSize / 2)
            };
            this.adapter.updateCssVariable(VAR_LEFT, this.unboundedCoords.left + "px");
            this.adapter.updateCssVariable(VAR_TOP, this.unboundedCoords.top + "px");
        }
    };
    return MDCRippleFoundation;
}((0, _foundation.MDCFoundation));
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
exports.default = MDCRippleFoundation;

},{"tslib":"lRdW5","@material/base/foundation":"kC5Yw","./constants":"lg1jP","./util":"l3az5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lg1jP":[function(require,module,exports) {
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cssClasses", ()=>cssClasses);
parcelHelpers.export(exports, "strings", ()=>strings);
parcelHelpers.export(exports, "numbers", ()=>numbers);
var cssClasses = {
    // Ripple is a special case where the "root" component is really a "mixin" of sorts,
    // given that it's an 'upgrade' to an existing component. That being said it is the root
    // CSS class that all other CSS classes derive from.
    BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
    FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
    FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
    ROOT: "mdc-ripple-upgraded",
    UNBOUNDED: "mdc-ripple-upgraded--unbounded"
};
var strings = {
    VAR_FG_SCALE: "--mdc-ripple-fg-scale",
    VAR_FG_SIZE: "--mdc-ripple-fg-size",
    VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
    VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
    VAR_LEFT: "--mdc-ripple-left",
    VAR_TOP: "--mdc-ripple-top"
};
var numbers = {
    DEACTIVATION_TIMEOUT_MS: 225,
    FG_DEACTIVATION_MS: 150,
    INITIAL_ORIGIN_SCALE: 0.6,
    PADDING: 10,
    TAP_DELAY_MS: 300
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l3az5":[function(require,module,exports) {
/**
 * Stores result from supportsCssVariables to avoid redundant processing to
 * detect CSS custom variable support.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "supportsCssVariables", ()=>supportsCssVariables);
parcelHelpers.export(exports, "getNormalizedEventCoords", ()=>getNormalizedEventCoords);
var supportsCssVariables_;
function supportsCssVariables(windowObj, forceRefresh) {
    if (forceRefresh === void 0) forceRefresh = false;
    var CSS = windowObj.CSS;
    var supportsCssVars = supportsCssVariables_;
    if (typeof supportsCssVariables_ === "boolean" && !forceRefresh) return supportsCssVariables_;
    var supportsFunctionPresent = CSS && typeof CSS.supports === "function";
    if (!supportsFunctionPresent) return false;
    var explicitlySupportsCssVars = CSS.supports("--css-vars", "yes");
    // See: https://bugs.webkit.org/show_bug.cgi?id=154669
    // See: README section on Safari
    var weAreFeatureDetectingSafari10plus = CSS.supports("(--css-vars: yes)") && CSS.supports("color", "#00000000");
    supportsCssVars = explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;
    if (!forceRefresh) supportsCssVariables_ = supportsCssVars;
    return supportsCssVars;
}
function getNormalizedEventCoords(evt, pageOffset, clientRect) {
    if (!evt) return {
        x: 0,
        y: 0
    };
    var x = pageOffset.x, y = pageOffset.y;
    var documentX = x + clientRect.left;
    var documentY = y + clientRect.top;
    var normalizedX;
    var normalizedY;
    // Determine touch point relative to the ripple container.
    if (evt.type === "touchstart") {
        var touchEvent = evt;
        normalizedX = touchEvent.changedTouches[0].pageX - documentX;
        normalizedY = touchEvent.changedTouches[0].pageY - documentY;
    } else {
        var mouseEvent = evt;
        normalizedX = mouseEvent.pageX - documentX;
        normalizedY = mouseEvent.pageY - documentY;
    }
    return {
        x: normalizedX,
        y: normalizedY
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"52gAM":[function(require,module,exports) {
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cssClasses", ()=>cssClasses);
parcelHelpers.export(exports, "numbers", ()=>numbers);
parcelHelpers.export(exports, "strings", ()=>strings);
var cssClasses = {
    FIXED_CLASS: "mdc-top-app-bar--fixed",
    FIXED_SCROLLED_CLASS: "mdc-top-app-bar--fixed-scrolled",
    SHORT_CLASS: "mdc-top-app-bar--short",
    SHORT_COLLAPSED_CLASS: "mdc-top-app-bar--short-collapsed",
    SHORT_HAS_ACTION_ITEM_CLASS: "mdc-top-app-bar--short-has-action-item"
};
var numbers = {
    DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100,
    MAX_TOP_APP_BAR_HEIGHT: 128
};
var strings = {
    ACTION_ITEM_SELECTOR: ".mdc-top-app-bar__action-item",
    NAVIGATION_EVENT: "MDCTopAppBar:nav",
    NAVIGATION_ICON_SELECTOR: ".mdc-top-app-bar__navigation-icon",
    ROOT_SELECTOR: ".mdc-top-app-bar",
    TITLE_SELECTOR: ".mdc-top-app-bar__title"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eeQCV":[function(require,module,exports) {
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MDCFixedTopAppBarFoundation", ()=>MDCFixedTopAppBarFoundation);
var _tslib = require("tslib");
var _constants = require("../constants");
var _foundation = require("../standard/foundation");
var MDCFixedTopAppBarFoundation = /** @class */ function(_super) {
    (0, _tslib.__extends)(MDCFixedTopAppBarFoundation, _super);
    function MDCFixedTopAppBarFoundation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * State variable for the previous scroll iteration top app bar state
         */ _this.wasScrolled = false;
        return _this;
    }
    /**
     * Scroll handler for applying/removing the modifier class on the fixed top app bar.
     */ MDCFixedTopAppBarFoundation.prototype.handleTargetScroll = function() {
        var currentScroll = this.adapter.getViewportScrollY();
        if (currentScroll <= 0) {
            if (this.wasScrolled) {
                this.adapter.removeClass((0, _constants.cssClasses).FIXED_SCROLLED_CLASS);
                this.wasScrolled = false;
            }
        } else if (!this.wasScrolled) {
            this.adapter.addClass((0, _constants.cssClasses).FIXED_SCROLLED_CLASS);
            this.wasScrolled = true;
        }
    };
    return MDCFixedTopAppBarFoundation;
}((0, _foundation.MDCTopAppBarFoundation));
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
exports.default = MDCFixedTopAppBarFoundation;

},{"tslib":"lRdW5","../constants":"52gAM","../standard/foundation":"6uP3L","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6uP3L":[function(require,module,exports) {
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MDCTopAppBarFoundation", ()=>MDCTopAppBarFoundation);
var _tslib = require("tslib");
var _constants = require("../constants");
var _foundation = require("../foundation");
var INITIAL_VALUE = 0;
var MDCTopAppBarFoundation = /** @class */ function(_super) {
    (0, _tslib.__extends)(MDCTopAppBarFoundation, _super);
    /* istanbul ignore next: optional argument is not a branch statement */ function MDCTopAppBarFoundation(adapter) {
        var _this = _super.call(this, adapter) || this;
        /**
         * Indicates if the top app bar was docked in the previous scroll handler iteration.
         */ _this.wasDocked = true;
        /**
         * Indicates if the top app bar is docked in the fully shown position.
         */ _this.isDockedShowing = true;
        /**
         * Variable for current scroll position of the top app bar
         */ _this.currentAppBarOffsetTop = 0;
        /**
         * Used to prevent the top app bar from being scrolled out of view during resize events
         */ _this.isCurrentlyBeingResized = false;
        /**
         * The timeout that's used to throttle the resize events
         */ _this.resizeThrottleId = INITIAL_VALUE;
        /**
         * The timeout that's used to debounce toggling the isCurrentlyBeingResized
         * variable after a resize
         */ _this.resizeDebounceId = INITIAL_VALUE;
        _this.lastScrollPosition = _this.adapter.getViewportScrollY();
        _this.topAppBarHeight = _this.adapter.getTopAppBarHeight();
        return _this;
    }
    MDCTopAppBarFoundation.prototype.destroy = function() {
        _super.prototype.destroy.call(this);
        this.adapter.setStyle("top", "");
    };
    /**
     * Scroll handler for the default scroll behavior of the top app bar.
     */ MDCTopAppBarFoundation.prototype.handleTargetScroll = function() {
        var currentScrollPosition = Math.max(this.adapter.getViewportScrollY(), 0);
        var diff = currentScrollPosition - this.lastScrollPosition;
        this.lastScrollPosition = currentScrollPosition;
        // If the window is being resized the lastScrollPosition needs to be updated
        // but the current scroll of the top app bar should stay in the same
        // position.
        if (!this.isCurrentlyBeingResized) {
            this.currentAppBarOffsetTop -= diff;
            if (this.currentAppBarOffsetTop > 0) this.currentAppBarOffsetTop = 0;
            else if (Math.abs(this.currentAppBarOffsetTop) > this.topAppBarHeight) this.currentAppBarOffsetTop = -this.topAppBarHeight;
            this.moveTopAppBar();
        }
    };
    /**
     * Top app bar resize handler that throttle/debounce functions that execute updates.
     */ MDCTopAppBarFoundation.prototype.handleWindowResize = function() {
        var _this = this;
        // Throttle resize events 10 p/s
        if (!this.resizeThrottleId) this.resizeThrottleId = setTimeout(function() {
            _this.resizeThrottleId = INITIAL_VALUE;
            _this.throttledResizeHandler();
        }, (0, _constants.numbers).DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
        this.isCurrentlyBeingResized = true;
        if (this.resizeDebounceId) clearTimeout(this.resizeDebounceId);
        this.resizeDebounceId = setTimeout(function() {
            _this.handleTargetScroll();
            _this.isCurrentlyBeingResized = false;
            _this.resizeDebounceId = INITIAL_VALUE;
        }, (0, _constants.numbers).DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
    };
    /**
     * Function to determine if the DOM needs to update.
     */ MDCTopAppBarFoundation.prototype.checkForUpdate = function() {
        var offscreenBoundaryTop = -this.topAppBarHeight;
        var hasAnyPixelsOffscreen = this.currentAppBarOffsetTop < 0;
        var hasAnyPixelsOnscreen = this.currentAppBarOffsetTop > offscreenBoundaryTop;
        var partiallyShowing = hasAnyPixelsOffscreen && hasAnyPixelsOnscreen;
        // If it's partially showing, it can't be docked.
        if (partiallyShowing) this.wasDocked = false;
        else {
            // Not previously docked and not partially showing, it's now docked.
            if (!this.wasDocked) {
                this.wasDocked = true;
                return true;
            } else if (this.isDockedShowing !== hasAnyPixelsOnscreen) {
                this.isDockedShowing = hasAnyPixelsOnscreen;
                return true;
            }
        }
        return partiallyShowing;
    };
    /**
     * Function to move the top app bar if needed.
     */ MDCTopAppBarFoundation.prototype.moveTopAppBar = function() {
        if (this.checkForUpdate()) {
            // Once the top app bar is fully hidden we use the max potential top app bar height as our offset
            // so the top app bar doesn't show if the window resizes and the new height > the old height.
            var offset = this.currentAppBarOffsetTop;
            if (Math.abs(offset) >= this.topAppBarHeight) offset = -(0, _constants.numbers).MAX_TOP_APP_BAR_HEIGHT;
            this.adapter.setStyle("top", offset + "px");
        }
    };
    /**
     * Throttled function that updates the top app bar scrolled values if the
     * top app bar height changes.
     */ MDCTopAppBarFoundation.prototype.throttledResizeHandler = function() {
        var currentHeight = this.adapter.getTopAppBarHeight();
        if (this.topAppBarHeight !== currentHeight) {
            this.wasDocked = false;
            // Since the top app bar has a different height depending on the screen width, this
            // will ensure that the top app bar remains in the correct location if
            // completely hidden and a resize makes the top app bar a different height.
            this.currentAppBarOffsetTop -= this.topAppBarHeight - currentHeight;
            this.topAppBarHeight = currentHeight;
        }
        this.handleTargetScroll();
    };
    return MDCTopAppBarFoundation;
}((0, _foundation.MDCTopAppBarBaseFoundation));
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
exports.default = MDCTopAppBarFoundation;

},{"tslib":"lRdW5","../constants":"52gAM","../foundation":"dHcUo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dHcUo":[function(require,module,exports) {
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MDCTopAppBarBaseFoundation", ()=>MDCTopAppBarBaseFoundation);
var _tslib = require("tslib");
var _foundation = require("@material/base/foundation");
var _constants = require("./constants");
var MDCTopAppBarBaseFoundation = /** @class */ function(_super) {
    (0, _tslib.__extends)(MDCTopAppBarBaseFoundation, _super);
    /* istanbul ignore next: optional argument is not a branch statement */ function MDCTopAppBarBaseFoundation(adapter) {
        return _super.call(this, (0, _tslib.__assign)((0, _tslib.__assign)({}, MDCTopAppBarBaseFoundation.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCTopAppBarBaseFoundation, "strings", {
        get: function() {
            return 0, _constants.strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTopAppBarBaseFoundation, "cssClasses", {
        get: function() {
            return 0, _constants.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTopAppBarBaseFoundation, "numbers", {
        get: function() {
            return 0, _constants.numbers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTopAppBarBaseFoundation, "defaultAdapter", {
        /**
         * See {@link MDCTopAppBarAdapter} for typing information on parameters and return types.
         */ get: function() {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function() {
                    return undefined;
                },
                removeClass: function() {
                    return undefined;
                },
                hasClass: function() {
                    return false;
                },
                setStyle: function() {
                    return undefined;
                },
                getTopAppBarHeight: function() {
                    return 0;
                },
                notifyNavigationIconClicked: function() {
                    return undefined;
                },
                getViewportScrollY: function() {
                    return 0;
                },
                getTotalActionItems: function() {
                    return 0;
                }
            };
        // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    /** Other variants of TopAppBar foundation overrides this method */ MDCTopAppBarBaseFoundation.prototype.handleTargetScroll = function() {}; // tslint:disable-line:no-empty
    /** Other variants of TopAppBar foundation overrides this method */ MDCTopAppBarBaseFoundation.prototype.handleWindowResize = function() {}; // tslint:disable-line:no-empty
    MDCTopAppBarBaseFoundation.prototype.handleNavigationClick = function() {
        this.adapter.notifyNavigationIconClicked();
    };
    return MDCTopAppBarBaseFoundation;
}((0, _foundation.MDCFoundation));
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
exports.default = MDCTopAppBarBaseFoundation;

},{"tslib":"lRdW5","@material/base/foundation":"kC5Yw","./constants":"52gAM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9lhAW":[function(require,module,exports) {
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MDCShortTopAppBarFoundation", ()=>MDCShortTopAppBarFoundation);
var _tslib = require("tslib");
var _constants = require("../constants");
var _foundation = require("../foundation");
var MDCShortTopAppBarFoundation = /** @class */ function(_super) {
    (0, _tslib.__extends)(MDCShortTopAppBarFoundation, _super);
    /* istanbul ignore next: optional argument is not a branch statement */ function MDCShortTopAppBarFoundation(adapter) {
        var _this = _super.call(this, adapter) || this;
        _this.collapsed = false;
        _this.isAlwaysCollapsed = false;
        return _this;
    }
    Object.defineProperty(MDCShortTopAppBarFoundation.prototype, "isCollapsed", {
        // Public visibility for backward compatibility.
        get: function() {
            return this.collapsed;
        },
        enumerable: false,
        configurable: true
    });
    MDCShortTopAppBarFoundation.prototype.init = function() {
        _super.prototype.init.call(this);
        if (this.adapter.getTotalActionItems() > 0) this.adapter.addClass((0, _constants.cssClasses).SHORT_HAS_ACTION_ITEM_CLASS);
        // If initialized with SHORT_COLLAPSED_CLASS, the bar should always be collapsed
        this.setAlwaysCollapsed(this.adapter.hasClass((0, _constants.cssClasses).SHORT_COLLAPSED_CLASS));
    };
    /**
     * Set if the short top app bar should always be collapsed.
     *
     * @param value When `true`, bar will always be collapsed. When `false`, bar may collapse or expand based on scroll.
     */ MDCShortTopAppBarFoundation.prototype.setAlwaysCollapsed = function(value) {
        this.isAlwaysCollapsed = !!value;
        if (this.isAlwaysCollapsed) this.collapse();
        else // let maybeCollapseBar determine if the bar should be collapsed
        this.maybeCollapseBar();
    };
    MDCShortTopAppBarFoundation.prototype.getAlwaysCollapsed = function() {
        return this.isAlwaysCollapsed;
    };
    /**
     * Scroll handler for applying/removing the collapsed modifier class on the short top app bar.
     */ MDCShortTopAppBarFoundation.prototype.handleTargetScroll = function() {
        this.maybeCollapseBar();
    };
    MDCShortTopAppBarFoundation.prototype.maybeCollapseBar = function() {
        if (this.isAlwaysCollapsed) return;
        var currentScroll = this.adapter.getViewportScrollY();
        if (currentScroll <= 0) {
            if (this.collapsed) this.uncollapse();
        } else if (!this.collapsed) this.collapse();
    };
    MDCShortTopAppBarFoundation.prototype.uncollapse = function() {
        this.adapter.removeClass((0, _constants.cssClasses).SHORT_COLLAPSED_CLASS);
        this.collapsed = false;
    };
    MDCShortTopAppBarFoundation.prototype.collapse = function() {
        this.adapter.addClass((0, _constants.cssClasses).SHORT_COLLAPSED_CLASS);
        this.collapsed = true;
    };
    return MDCShortTopAppBarFoundation;
}((0, _foundation.MDCTopAppBarBaseFoundation));
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
exports.default = MDCShortTopAppBarFoundation;

},{"tslib":"lRdW5","../constants":"52gAM","../foundation":"dHcUo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"31t3P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UiDrawer", ()=>UiDrawer);
var _drawer = require("@material/drawer");
// import { MDCRipple } from "@material/ripple";
var _configJs = require("./config.js");
var _debug = require("debug");
var _debugDefault = parcelHelpers.interopDefault(_debug);
const debug = new (0, _debugDefault.default)("uiDrawer");
class UiDrawer {
    constructor(){
        debug("ctor");
        // Instantiate MDC Drawer
        this.el = document.querySelector(".mdc-drawer");
        this.drawer = (0, _drawer.MDCDrawer).attachTo(this.el);
        this.drawer.list.singleSelection = true;
        // wait for mdc ^14.0.0 with MDCList:selectionChange ....
        // not very useful, triggers only to user interaction
        // this.drawer.list.listen("MDCList:selectionChange", (ev) =>
        //     console.log("MDCList:selectionChange", ev.detail));
        // this.drawer.list.listen("MDCList:action", () => this.selectionChanged());
        this.drawer.listen("MDCDrawer:closed", ()=>globalThis._my_.dispatchEvent((0, _configJs.CONFIG).MESSAGE_DRAWER_CLOSED));
        this.drawer.listen("MDCDrawer:opened", ()=>globalThis._my_.dispatchEvent((0, _configJs.CONFIG).MESSAGE_DRAWER_OPENED));
        // get list
        // this.el_list = this.el.querySelector(".mdc-deprecated-list");
        // listen for toggle drawer
        globalThis._my_.events.addEventListener((0, _configJs.CONFIG).MESSAGE_TOGGLE_DRAWER, ()=>{
            debug("toggle drawer");
            this.drawer.open = !this.drawer.open;
        });
    }
}

},{"@material/drawer":"fslB5","./config.js":"k5Hzs","debug":"l0oUb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fslB5":[function(require,module,exports) {
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "util", ()=>_util);
var _util = require("./util");
var _adapter = require("./adapter");
parcelHelpers.exportAll(_adapter, exports);
var _component = require("./component");
parcelHelpers.exportAll(_component, exports);
var _constants = require("./constants");
parcelHelpers.exportAll(_constants, exports);
var _foundation = require("./dismissible/foundation");
parcelHelpers.exportAll(_foundation, exports);
var _foundation1 = require("./modal/foundation");
parcelHelpers.exportAll(_foundation1, exports);

},{"./util":"dv6Ki","./adapter":"9XqeF","./component":"7kYkN","./constants":"eSuEA","./dismissible/foundation":"bL1su","./modal/foundation":"kPFK0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dv6Ki":[function(require,module,exports) {
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createFocusTrapInstance", ()=>createFocusTrapInstance);
function createFocusTrapInstance(surfaceEl, focusTrapFactory) {
    return focusTrapFactory(surfaceEl, {
        // Component handles focusing on active nav item.
        skipInitialFocus: true
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9XqeF":[function(require,module,exports) {
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7kYkN":[function(require,module,exports) {
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MDCDrawer", ()=>MDCDrawer);
var _tslib = require("tslib");
var _component = require("@material/base/component");
var _focusTrap = require("@material/dom/focus-trap");
var _component1 = require("@material/list/component");
var _foundation = require("./dismissible/foundation");
var _foundation1 = require("./modal/foundation");
var _util = require("./util");
var cssClasses = (0, _foundation.MDCDismissibleDrawerFoundation).cssClasses, strings = (0, _foundation.MDCDismissibleDrawerFoundation).strings;
/**
 * @events `MDCDrawer:closed {}` Emits when the navigation drawer has closed.
 * @events `MDCDrawer:opened {}` Emits when the navigation drawer has opened.
 */ var MDCDrawer = /** @class */ function(_super) {
    (0, _tslib.__extends)(MDCDrawer, _super);
    function MDCDrawer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCDrawer.attachTo = function(root) {
        return new MDCDrawer(root);
    };
    Object.defineProperty(MDCDrawer.prototype, "open", {
        /**
         * @return boolean Proxies to the foundation's `open`/`close` methods.
         * Also returns true if drawer is in the open position.
         */ get: function() {
            return this.foundation.isOpen();
        },
        /**
         * Toggles the drawer open and closed.
         */ set: function(isOpen) {
            if (isOpen) this.foundation.open();
            else this.foundation.close();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCDrawer.prototype, "list", {
        // initialSyncWithDOM()
        get: function() {
            return this.innerList;
        },
        enumerable: false,
        configurable: true
    });
    MDCDrawer.prototype.initialize = function(focusTrapFactory, listFactory) {
        if (focusTrapFactory === void 0) focusTrapFactory = function(el) {
            return new (0, _focusTrap.FocusTrap)(el);
        };
        if (listFactory === void 0) listFactory = function(el) {
            return new (0, _component1.MDCList)(el);
        };
        var listEl = this.root.querySelector(strings.LIST_SELECTOR);
        if (listEl) {
            this.innerList = listFactory(listEl);
            this.innerList.wrapFocus = true;
        }
        this.focusTrapFactory = focusTrapFactory;
    };
    MDCDrawer.prototype.initialSyncWithDOM = function() {
        var _this = this;
        var MODAL = cssClasses.MODAL;
        var SCRIM_SELECTOR = strings.SCRIM_SELECTOR;
        this.scrim = this.root.parentNode.querySelector(SCRIM_SELECTOR);
        if (this.scrim && this.root.classList.contains(MODAL)) {
            this.handleScrimClick = function() {
                return _this.foundation.handleScrimClick();
            };
            this.scrim.addEventListener("click", this.handleScrimClick);
            this.focusTrap = _util.createFocusTrapInstance(this.root, this.focusTrapFactory);
        }
        this.handleKeydown = function(evt) {
            _this.foundation.handleKeydown(evt);
        };
        this.handleTransitionEnd = function(evt) {
            _this.foundation.handleTransitionEnd(evt);
        };
        this.listen("keydown", this.handleKeydown);
        this.listen("transitionend", this.handleTransitionEnd);
    };
    MDCDrawer.prototype.destroy = function() {
        this.unlisten("keydown", this.handleKeydown);
        this.unlisten("transitionend", this.handleTransitionEnd);
        if (this.innerList) this.innerList.destroy();
        var MODAL = cssClasses.MODAL;
        if (this.scrim && this.handleScrimClick && this.root.classList.contains(MODAL)) {
            this.scrim.removeEventListener("click", this.handleScrimClick);
            // Ensure drawer is closed to hide scrim and release focus
            this.open = false;
        }
    };
    MDCDrawer.prototype.getDefaultFoundation = function() {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take
        // a Partial<MDCFooAdapter>. To ensure we don't accidentally omit any
        // methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function(className) {
                _this.root.classList.add(className);
            },
            removeClass: function(className) {
                _this.root.classList.remove(className);
            },
            hasClass: function(className) {
                return _this.root.classList.contains(className);
            },
            elementHasClass: function(element, className) {
                return element.classList.contains(className);
            },
            saveFocus: function() {
                _this.previousFocus = document.activeElement;
            },
            restoreFocus: function() {
                var previousFocus = _this.previousFocus;
                if (previousFocus && previousFocus.focus && _this.root.contains(document.activeElement)) previousFocus.focus();
            },
            focusActiveNavigationItem: function() {
                var activeNavItemEl = _this.root.querySelector(strings.LIST_ITEM_ACTIVATED_SELECTOR);
                if (activeNavItemEl) activeNavItemEl.focus();
            },
            notifyClose: function() {
                _this.emit(strings.CLOSE_EVENT, {}, true);
            },
            notifyOpen: function() {
                _this.emit(strings.OPEN_EVENT, {}, true);
            },
            trapFocus: function() {
                _this.focusTrap.trapFocus();
            },
            releaseFocus: function() {
                _this.focusTrap.releaseFocus();
            }
        };
        // tslint:enable:object-literal-sort-keys
        var DISMISSIBLE = cssClasses.DISMISSIBLE, MODAL = cssClasses.MODAL;
        if (this.root.classList.contains(DISMISSIBLE)) return new (0, _foundation.MDCDismissibleDrawerFoundation)(adapter);
        else if (this.root.classList.contains(MODAL)) return new (0, _foundation1.MDCModalDrawerFoundation)(adapter);
        else throw new Error("MDCDrawer: Failed to instantiate component. Supported variants are " + DISMISSIBLE + " and " + MODAL + ".");
    };
    return MDCDrawer;
}((0, _component.MDCComponent));

},{"tslib":"lRdW5","@material/base/component":"jLptS","@material/dom/focus-trap":"6ufPw","@material/list/component":"iRqEa","./dismissible/foundation":"bL1su","./modal/foundation":"kPFK0","./util":"dv6Ki","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6ufPw":[function(require,module,exports) {
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FocusTrap", ()=>FocusTrap);
var FOCUS_SENTINEL_CLASS = "mdc-dom-focus-sentinel";
/**
 * Utility to trap focus in a given root element, e.g. for modal components such
 * as dialogs. The root should have at least one focusable child element,
 * for setting initial focus when trapping focus.
 * Also tracks the previously focused element, and restores focus to that
 * element when releasing focus.
 */ var FocusTrap = /** @class */ function() {
    function FocusTrap(root, options) {
        if (options === void 0) options = {};
        this.root = root;
        this.options = options;
        // Previously focused element before trapping focus.
        this.elFocusedBeforeTrapFocus = null;
    }
    /**
     * Traps focus in `root`. Also focuses on either `initialFocusEl` if set;
     * otherwises sets initial focus to the first focusable child element.
     */ FocusTrap.prototype.trapFocus = function() {
        var focusableEls = this.getFocusableElements(this.root);
        if (focusableEls.length === 0) throw new Error("FocusTrap: Element must have at least one focusable child.");
        this.elFocusedBeforeTrapFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        this.wrapTabFocus(this.root);
        if (!this.options.skipInitialFocus) this.focusInitialElement(focusableEls, this.options.initialFocusEl);
    };
    /**
     * Releases focus from `root`. Also restores focus to the previously focused
     * element.
     */ FocusTrap.prototype.releaseFocus = function() {
        [].slice.call(this.root.querySelectorAll("." + FOCUS_SENTINEL_CLASS)).forEach(function(sentinelEl) {
            sentinelEl.parentElement.removeChild(sentinelEl);
        });
        if (!this.options.skipRestoreFocus && this.elFocusedBeforeTrapFocus) this.elFocusedBeforeTrapFocus.focus();
    };
    /**
     * Wraps tab focus within `el` by adding two hidden sentinel divs which are
     * used to mark the beginning and the end of the tabbable region. When
     * focused, these sentinel elements redirect focus to the first/last
     * children elements of the tabbable region, ensuring that focus is trapped
     * within that region.
     */ FocusTrap.prototype.wrapTabFocus = function(el) {
        var _this = this;
        var sentinelStart = this.createSentinel();
        var sentinelEnd = this.createSentinel();
        sentinelStart.addEventListener("focus", function() {
            var focusableEls = _this.getFocusableElements(el);
            if (focusableEls.length > 0) focusableEls[focusableEls.length - 1].focus();
        });
        sentinelEnd.addEventListener("focus", function() {
            var focusableEls = _this.getFocusableElements(el);
            if (focusableEls.length > 0) focusableEls[0].focus();
        });
        el.insertBefore(sentinelStart, el.children[0]);
        el.appendChild(sentinelEnd);
    };
    /**
     * Focuses on `initialFocusEl` if defined and a child of the root element.
     * Otherwise, focuses on the first focusable child element of the root.
     */ FocusTrap.prototype.focusInitialElement = function(focusableEls, initialFocusEl) {
        var focusIndex = 0;
        if (initialFocusEl) focusIndex = Math.max(focusableEls.indexOf(initialFocusEl), 0);
        focusableEls[focusIndex].focus();
    };
    FocusTrap.prototype.getFocusableElements = function(root) {
        var focusableEls = [].slice.call(root.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));
        return focusableEls.filter(function(el) {
            var isDisabledOrHidden = el.getAttribute("aria-disabled") === "true" || el.getAttribute("disabled") != null || el.getAttribute("hidden") != null || el.getAttribute("aria-hidden") === "true";
            var isTabbableAndVisible = el.tabIndex >= 0 && el.getBoundingClientRect().width > 0 && !el.classList.contains(FOCUS_SENTINEL_CLASS) && !isDisabledOrHidden;
            var isProgrammaticallyHidden = false;
            if (isTabbableAndVisible) {
                var style = getComputedStyle(el);
                isProgrammaticallyHidden = style.display === "none" || style.visibility === "hidden";
            }
            return isTabbableAndVisible && !isProgrammaticallyHidden;
        });
    };
    FocusTrap.prototype.createSentinel = function() {
        var sentinel = document.createElement("div");
        sentinel.setAttribute("tabindex", "0");
        // Don't announce in screen readers.
        sentinel.setAttribute("aria-hidden", "true");
        sentinel.classList.add(FOCUS_SENTINEL_CLASS);
        return sentinel;
    };
    return FocusTrap;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iRqEa":[function(require,module,exports) {
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MDCList", ()=>MDCList);
var _tslib = require("tslib");
var _component = require("@material/base/component");
var _ponyfill = require("@material/dom/ponyfill");
var _constants = require("./constants");
var _foundation = require("./foundation");
var MDCList = /** @class */ function(_super) {
    (0, _tslib.__extends)(MDCList, _super);
    function MDCList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MDCList.prototype, "vertical", {
        set: function(value) {
            this.foundation.setVerticalOrientation(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCList.prototype, "listElements", {
        get: function() {
            return Array.from(this.root.querySelectorAll("." + this.classNameMap[(0, _constants.cssClasses).LIST_ITEM_CLASS]));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCList.prototype, "wrapFocus", {
        set: function(value) {
            this.foundation.setWrapFocus(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCList.prototype, "typeaheadInProgress", {
        /**
         * @return Whether typeahead is currently matching a user-specified prefix.
         */ get: function() {
            return this.foundation.isTypeaheadInProgress();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCList.prototype, "hasTypeahead", {
        /**
         * Sets whether typeahead functionality is enabled on the list.
         * @param hasTypeahead Whether typeahead is enabled.
         */ set: function(hasTypeahead) {
            this.foundation.setHasTypeahead(hasTypeahead);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCList.prototype, "singleSelection", {
        set: function(isSingleSelectionList) {
            this.foundation.setSingleSelection(isSingleSelectionList);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCList.prototype, "disabledItemsFocusable", {
        set: function(areDisabledItemsFocusable) {
            this.foundation.setDisabledItemsFocusable(areDisabledItemsFocusable);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCList.prototype, "selectedIndex", {
        get: function() {
            return this.foundation.getSelectedIndex();
        },
        set: function(index) {
            this.foundation.setSelectedIndex(index);
        },
        enumerable: false,
        configurable: true
    });
    MDCList.attachTo = function(root) {
        return new MDCList(root);
    };
    MDCList.prototype.initialSyncWithDOM = function() {
        this.isEvolutionEnabled = (0, _constants.evolutionAttribute) in this.root.dataset;
        if (this.isEvolutionEnabled) this.classNameMap = (0, _constants.evolutionClassNameMap);
        else if ((0, _ponyfill.matches)(this.root, (0, _constants.strings).DEPRECATED_SELECTOR)) this.classNameMap = (0, _constants.deprecatedClassNameMap);
        else this.classNameMap = Object.values((0, _constants.cssClasses)).reduce(function(obj, className) {
            obj[className] = className;
            return obj;
        }, {});
        this.handleClick = this.handleClickEvent.bind(this);
        this.handleKeydown = this.handleKeydownEvent.bind(this);
        this.focusInEventListener = this.handleFocusInEvent.bind(this);
        this.focusOutEventListener = this.handleFocusOutEvent.bind(this);
        this.listen("keydown", this.handleKeydown);
        this.listen("click", this.handleClick);
        this.listen("focusin", this.focusInEventListener);
        this.listen("focusout", this.focusOutEventListener);
        this.layout();
        this.initializeListType();
        this.ensureFocusable();
    };
    MDCList.prototype.destroy = function() {
        this.unlisten("keydown", this.handleKeydown);
        this.unlisten("click", this.handleClick);
        this.unlisten("focusin", this.focusInEventListener);
        this.unlisten("focusout", this.focusOutEventListener);
    };
    MDCList.prototype.layout = function() {
        var direction = this.root.getAttribute((0, _constants.strings).ARIA_ORIENTATION);
        this.vertical = direction !== (0, _constants.strings).ARIA_ORIENTATION_HORIZONTAL;
        var itemSelector = "." + this.classNameMap[(0, _constants.cssClasses).LIST_ITEM_CLASS] + ":not([tabindex])";
        var childSelector = (0, _constants.strings).FOCUSABLE_CHILD_ELEMENTS;
        // List items need to have at least tabindex=-1 to be focusable.
        var itemEls = this.root.querySelectorAll(itemSelector);
        if (itemEls.length) Array.prototype.forEach.call(itemEls, function(el) {
            el.setAttribute("tabindex", "-1");
        });
        // Child button/a elements are not tabbable until the list item is focused.
        var focusableChildEls = this.root.querySelectorAll(childSelector);
        if (focusableChildEls.length) Array.prototype.forEach.call(focusableChildEls, function(el) {
            el.setAttribute("tabindex", "-1");
        });
        if (this.isEvolutionEnabled) this.foundation.setUseSelectedAttribute(true);
        this.foundation.layout();
    };
    /**
     * Extracts the primary text from a list item.
     * @param item The list item element.
     * @return The primary text in the element.
     */ MDCList.prototype.getPrimaryText = function(item) {
        var _a;
        var primaryText = item.querySelector("." + this.classNameMap[(0, _constants.cssClasses).LIST_ITEM_PRIMARY_TEXT_CLASS]);
        if (this.isEvolutionEnabled || primaryText) return (_a = primaryText === null || primaryText === void 0 ? void 0 : primaryText.textContent) !== null && _a !== void 0 ? _a : "";
        var singleLineText = item.querySelector("." + this.classNameMap[(0, _constants.cssClasses).LIST_ITEM_TEXT_CLASS]);
        return singleLineText && singleLineText.textContent || "";
    };
    /**
     * Initialize selectedIndex value based on pre-selected list items.
     */ MDCList.prototype.initializeListType = function() {
        var _this = this;
        this.isInteractive = (0, _ponyfill.matches)(this.root, (0, _constants.strings).ARIA_INTERACTIVE_ROLES_SELECTOR);
        if (this.isEvolutionEnabled && this.isInteractive) {
            var selection = Array.from(this.root.querySelectorAll((0, _constants.strings).SELECTED_ITEM_SELECTOR), function(listItem) {
                return _this.listElements.indexOf(listItem);
            });
            if ((0, _ponyfill.matches)(this.root, (0, _constants.strings).ARIA_MULTI_SELECTABLE_SELECTOR)) this.selectedIndex = selection;
            else if (selection.length > 0) this.selectedIndex = selection[0];
            return;
        }
        var checkboxListItems = this.root.querySelectorAll((0, _constants.strings).ARIA_ROLE_CHECKBOX_SELECTOR);
        var radioSelectedListItem = this.root.querySelector((0, _constants.strings).ARIA_CHECKED_RADIO_SELECTOR);
        if (checkboxListItems.length) {
            var preselectedItems = this.root.querySelectorAll((0, _constants.strings).ARIA_CHECKED_CHECKBOX_SELECTOR);
            this.selectedIndex = Array.from(preselectedItems, function(listItem) {
                return _this.listElements.indexOf(listItem);
            });
        } else if (radioSelectedListItem) this.selectedIndex = this.listElements.indexOf(radioSelectedListItem);
    };
    /**
     * Updates the list item at itemIndex to the desired isEnabled state.
     * @param itemIndex Index of the list item
     * @param isEnabled Sets the list item to enabled or disabled.
     */ MDCList.prototype.setEnabled = function(itemIndex, isEnabled) {
        this.foundation.setEnabled(itemIndex, isEnabled);
    };
    /**
     * Given the next desired character from the user, adds it to the typeahead
     * buffer. Then, attempts to find the next option matching the buffer. Wraps
     * around if at the end of options.
     *
     * @param nextChar The next character to add to the prefix buffer.
     * @param startingIndex The index from which to start matching. Defaults to
     *     the currently focused index.
     * @return The index of the matched item.
     */ MDCList.prototype.typeaheadMatchItem = function(nextChar, startingIndex) {
        return this.foundation.typeaheadMatchItem(nextChar, startingIndex, /** skipFocus */ true);
    };
    MDCList.prototype.getDefaultFoundation = function() {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take
        // a Partial<MDCFooAdapter>. To ensure we don't accidentally omit any
        // methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClassForElementIndex: function(index, className) {
                var element = _this.listElements[index];
                if (element) element.classList.add(_this.classNameMap[className]);
            },
            focusItemAtIndex: function(index) {
                var element = _this.listElements[index];
                if (element) element.focus();
            },
            getAttributeForElementIndex: function(index, attr) {
                return _this.listElements[index].getAttribute(attr);
            },
            getFocusedElementIndex: function() {
                return _this.listElements.indexOf(document.activeElement);
            },
            getListItemCount: function() {
                return _this.listElements.length;
            },
            getPrimaryTextAtIndex: function(index) {
                return _this.getPrimaryText(_this.listElements[index]);
            },
            hasCheckboxAtIndex: function(index) {
                var listItem = _this.listElements[index];
                return !!listItem.querySelector((0, _constants.strings).CHECKBOX_SELECTOR);
            },
            hasRadioAtIndex: function(index) {
                var listItem = _this.listElements[index];
                return !!listItem.querySelector((0, _constants.strings).RADIO_SELECTOR);
            },
            isCheckboxCheckedAtIndex: function(index) {
                var listItem = _this.listElements[index];
                var toggleEl = listItem.querySelector((0, _constants.strings).CHECKBOX_SELECTOR);
                return toggleEl.checked;
            },
            isFocusInsideList: function() {
                return _this.root !== document.activeElement && _this.root.contains(document.activeElement);
            },
            isRootFocused: function() {
                return document.activeElement === _this.root;
            },
            listItemAtIndexHasClass: function(index, className) {
                return _this.listElements[index].classList.contains(_this.classNameMap[className]);
            },
            notifyAction: function(index) {
                _this.emit((0, _constants.strings).ACTION_EVENT, {
                    index: index
                }, /** shouldBubble */ true);
            },
            notifySelectionChange: function(changedIndices) {
                _this.emit((0, _constants.strings).SELECTION_CHANGE_EVENT, {
                    changedIndices: changedIndices
                }, /** shouldBubble */ true);
            },
            removeClassForElementIndex: function(index, className) {
                var element = _this.listElements[index];
                if (element) element.classList.remove(_this.classNameMap[className]);
            },
            setAttributeForElementIndex: function(index, attr, value) {
                var element = _this.listElements[index];
                if (element) element.setAttribute(attr, value);
            },
            setCheckedCheckboxOrRadioAtIndex: function(index, isChecked) {
                var listItem = _this.listElements[index];
                var toggleEl = listItem.querySelector((0, _constants.strings).CHECKBOX_RADIO_SELECTOR);
                toggleEl.checked = isChecked;
                var event = document.createEvent("Event");
                event.initEvent("change", true, true);
                toggleEl.dispatchEvent(event);
            },
            setTabIndexForListItemChildren: function(listItemIndex, tabIndexValue) {
                var element = _this.listElements[listItemIndex];
                var selector = (0, _constants.strings).CHILD_ELEMENTS_TO_TOGGLE_TABINDEX;
                Array.prototype.forEach.call(element.querySelectorAll(selector), function(el) {
                    el.setAttribute("tabindex", tabIndexValue);
                });
            }
        };
        return new (0, _foundation.MDCListFoundation)(adapter);
    };
    /**
     * Ensures that at least one item is focusable if the list is interactive and
     * doesn't specify a suitable tabindex.
     */ MDCList.prototype.ensureFocusable = function() {
        if (this.isEvolutionEnabled && this.isInteractive) {
            if (!this.root.querySelector("." + this.classNameMap[(0, _constants.cssClasses).LIST_ITEM_CLASS] + '[tabindex="0"]')) {
                var index = this.initialFocusIndex();
                if (index !== -1) this.listElements[index].tabIndex = 0;
            }
        }
    };
    MDCList.prototype.initialFocusIndex = function() {
        if (this.selectedIndex instanceof Array && this.selectedIndex.length > 0) return this.selectedIndex[0];
        if (typeof this.selectedIndex === "number" && this.selectedIndex !== (0, _constants.numbers).UNSET_INDEX) return this.selectedIndex;
        var el = this.root.querySelector("." + this.classNameMap[(0, _constants.cssClasses).LIST_ITEM_CLASS] + ":not(." + this.classNameMap[(0, _constants.cssClasses).LIST_ITEM_DISABLED_CLASS] + ")");
        if (el === null) return -1;
        return this.getListItemIndex(el);
    };
    /**
     * Used to figure out which list item this event is targetting. Or returns -1
     * if there is no list item
     */ MDCList.prototype.getListItemIndex = function(el) {
        var nearestParent = (0, _ponyfill.closest)(el, "." + this.classNameMap[(0, _constants.cssClasses).LIST_ITEM_CLASS] + ", ." + this.classNameMap[(0, _constants.cssClasses).ROOT]);
        // Get the index of the element if it is a list item.
        if (nearestParent && (0, _ponyfill.matches)(nearestParent, "." + this.classNameMap[(0, _constants.cssClasses).LIST_ITEM_CLASS])) return this.listElements.indexOf(nearestParent);
        return -1;
    };
    /**
     * Used to figure out which element was clicked before sending the event to
     * the foundation.
     */ MDCList.prototype.handleFocusInEvent = function(evt) {
        var index = this.getListItemIndex(evt.target);
        this.foundation.handleFocusIn(index);
    };
    /**
     * Used to figure out which element was clicked before sending the event to
     * the foundation.
     */ MDCList.prototype.handleFocusOutEvent = function(evt) {
        var index = this.getListItemIndex(evt.target);
        this.foundation.handleFocusOut(index);
    };
    /**
     * Used to figure out which element was focused when keydown event occurred
     * before sending the event to the foundation.
     */ MDCList.prototype.handleKeydownEvent = function(evt) {
        var index = this.getListItemIndex(evt.target);
        var target = evt.target;
        this.foundation.handleKeydown(evt, target.classList.contains(this.classNameMap[(0, _constants.cssClasses).LIST_ITEM_CLASS]), index);
    };
    /**
     * Used to figure out which element was clicked before sending the event to
     * the foundation.
     */ MDCList.prototype.handleClickEvent = function(evt) {
        var index = this.getListItemIndex(evt.target);
        var target = evt.target;
        // Toggle the checkbox only if it's not the target of the event, or the
        // checkbox will have 2 change events.
        var toggleCheckbox = !(0, _ponyfill.matches)(target, (0, _constants.strings).CHECKBOX_RADIO_SELECTOR);
        this.foundation.handleClick(index, toggleCheckbox, evt);
    };
    return MDCList;
}((0, _component.MDCComponent));

},{"tslib":"lRdW5","@material/base/component":"jLptS","@material/dom/ponyfill":"8pLcv","./constants":"5wBVC","./foundation":"dFgru","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5wBVC":[function(require,module,exports) {
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "strings", ()=>strings);
parcelHelpers.export(exports, "cssClasses", ()=>cssClasses);
parcelHelpers.export(exports, "numbers", ()=>numbers);
parcelHelpers.export(exports, "deprecatedClassNameMap", ()=>deprecatedClassNameMap);
parcelHelpers.export(exports, "evolutionAttribute", ()=>evolutionAttribute);
parcelHelpers.export(exports, "evolutionClassNameMap", ()=>evolutionClassNameMap);
var _a, _b;
var cssClasses = {
    LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
    LIST_ITEM_CLASS: "mdc-list-item",
    LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
    LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
    LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
    LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
    ROOT: "mdc-list"
};
var evolutionClassNameMap = (_a = {}, _a["" + cssClasses.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", _a["" + cssClasses.LIST_ITEM_CLASS] = "mdc-list-item", _a["" + cssClasses.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", _a["" + cssClasses.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", _a["" + cssClasses.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", _a["" + cssClasses.ROOT] = "mdc-list", _a);
var deprecatedClassNameMap = (_b = {}, _b["" + cssClasses.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", _b["" + cssClasses.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", _b["" + cssClasses.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", _b["" + cssClasses.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", _b["" + cssClasses.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", _b["" + cssClasses.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", _b["" + cssClasses.ROOT] = "mdc-deprecated-list", _b);
var strings = {
    ACTION_EVENT: "MDCList:action",
    SELECTION_CHANGE_EVENT: "MDCList:selectionChange",
    ARIA_CHECKED: "aria-checked",
    ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
    ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
    ARIA_CURRENT: "aria-current",
    ARIA_DISABLED: "aria-disabled",
    ARIA_ORIENTATION: "aria-orientation",
    ARIA_ORIENTATION_HORIZONTAL: "horizontal",
    ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
    ARIA_SELECTED: "aria-selected",
    ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]',
    ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]',
    CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
    CHECKBOX_SELECTOR: 'input[type="checkbox"]',
    CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    ." + cssClasses.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " a,\n    ." + deprecatedClassNameMap[cssClasses.LIST_ITEM_CLASS] + " button:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses.LIST_ITEM_CLASS] + " a\n  ",
    DEPRECATED_SELECTOR: ".mdc-deprecated-list",
    FOCUSABLE_CHILD_ELEMENTS: "\n    ." + cssClasses.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " a,\n    ." + cssClasses.LIST_ITEM_CLASS + ' input[type="radio"]:not(:disabled),\n    .' + cssClasses.LIST_ITEM_CLASS + ' input[type="checkbox"]:not(:disabled),\n    .' + deprecatedClassNameMap[cssClasses.LIST_ITEM_CLASS] + " button:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses.LIST_ITEM_CLASS] + " a,\n    ." + deprecatedClassNameMap[cssClasses.LIST_ITEM_CLASS] + ' input[type="radio"]:not(:disabled),\n    .' + deprecatedClassNameMap[cssClasses.LIST_ITEM_CLASS] + ' input[type="checkbox"]:not(:disabled)\n  ',
    RADIO_SELECTOR: 'input[type="radio"]',
    SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
};
var numbers = {
    UNSET_INDEX: -1,
    TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
var evolutionAttribute = "evolution";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dFgru":[function(require,module,exports) {
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MDCListFoundation", ()=>MDCListFoundation);
var _tslib = require("tslib");
var _foundation = require("@material/base/foundation");
var _keyboard = require("@material/dom/keyboard");
var _constants = require("./constants");
var _events = require("./events");
var _typeahead = require("./typeahead");
function isNumberArray(selectedIndex) {
    return selectedIndex instanceof Array;
}
/** List of modifier keys to consider while handling keyboard events. */ var handledModifierKeys = [
    "Alt",
    "Control",
    "Meta",
    "Shift"
];
/** Checks if the event has the given modifier keys. */ function createModifierChecker(event) {
    var eventModifiers = new Set(event ? handledModifierKeys.filter(function(m) {
        return event.getModifierState(m);
    }) : []);
    return function(modifiers) {
        return modifiers.every(function(m) {
            return eventModifiers.has(m);
        }) && modifiers.length === eventModifiers.size;
    };
}
var MDCListFoundation = /** @class */ function(_super) {
    (0, _tslib.__extends)(MDCListFoundation, _super);
    function MDCListFoundation(adapter) {
        var _this = _super.call(this, (0, _tslib.__assign)((0, _tslib.__assign)({}, MDCListFoundation.defaultAdapter), adapter)) || this;
        _this.wrapFocus = false;
        _this.isVertical = true;
        _this.isSingleSelectionList = false;
        _this.areDisabledItemsFocusable = true;
        _this.selectedIndex = (0, _constants.numbers).UNSET_INDEX;
        _this.focusedItemIndex = (0, _constants.numbers).UNSET_INDEX;
        _this.useActivatedClass = false;
        _this.useSelectedAttr = false;
        _this.ariaCurrentAttrValue = null;
        _this.isCheckboxList = false;
        _this.isRadioList = false;
        _this.lastSelectedIndex = null;
        _this.hasTypeahead = false;
        // Transiently holds current typeahead prefix from user.
        _this.typeaheadState = _typeahead.initState();
        _this.sortedIndexByFirstChar = new Map();
        return _this;
    }
    Object.defineProperty(MDCListFoundation, "strings", {
        get: function() {
            return 0, _constants.strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCListFoundation, "cssClasses", {
        get: function() {
            return 0, _constants.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCListFoundation, "numbers", {
        get: function() {
            return 0, _constants.numbers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCListFoundation, "defaultAdapter", {
        get: function() {
            return {
                addClassForElementIndex: function() {
                    return undefined;
                },
                focusItemAtIndex: function() {
                    return undefined;
                },
                getAttributeForElementIndex: function() {
                    return null;
                },
                getFocusedElementIndex: function() {
                    return 0;
                },
                getListItemCount: function() {
                    return 0;
                },
                hasCheckboxAtIndex: function() {
                    return false;
                },
                hasRadioAtIndex: function() {
                    return false;
                },
                isCheckboxCheckedAtIndex: function() {
                    return false;
                },
                isFocusInsideList: function() {
                    return false;
                },
                isRootFocused: function() {
                    return false;
                },
                listItemAtIndexHasClass: function() {
                    return false;
                },
                notifyAction: function() {
                    return undefined;
                },
                notifySelectionChange: function() {},
                removeClassForElementIndex: function() {
                    return undefined;
                },
                setAttributeForElementIndex: function() {
                    return undefined;
                },
                setCheckedCheckboxOrRadioAtIndex: function() {
                    return undefined;
                },
                setTabIndexForListItemChildren: function() {
                    return undefined;
                },
                getPrimaryTextAtIndex: function() {
                    return "";
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCListFoundation.prototype.layout = function() {
        if (this.adapter.getListItemCount() === 0) return;
        // TODO(b/172274142): consider all items when determining the list's type.
        if (this.adapter.hasCheckboxAtIndex(0)) this.isCheckboxList = true;
        else if (this.adapter.hasRadioAtIndex(0)) this.isRadioList = true;
        else this.maybeInitializeSingleSelection();
        if (this.hasTypeahead) this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex();
    };
    /** Returns the index of the item that was last focused. */ MDCListFoundation.prototype.getFocusedItemIndex = function() {
        return this.focusedItemIndex;
    };
    /** Toggles focus wrapping with keyboard navigation. */ MDCListFoundation.prototype.setWrapFocus = function(value) {
        this.wrapFocus = value;
    };
    /**
     * Toggles orientation direction for keyboard navigation (true for vertical,
     * false for horizontal).
     */ MDCListFoundation.prototype.setVerticalOrientation = function(value) {
        this.isVertical = value;
    };
    /** Toggles single-selection behavior. */ MDCListFoundation.prototype.setSingleSelection = function(value) {
        this.isSingleSelectionList = value;
        if (value) {
            this.maybeInitializeSingleSelection();
            this.selectedIndex = this.getSelectedIndexFromDOM();
        }
    };
    MDCListFoundation.prototype.setDisabledItemsFocusable = function(value) {
        this.areDisabledItemsFocusable = value;
    };
    /**
     * Automatically determines whether the list is single selection list. If so,
     * initializes the internal state to match the selected item.
     */ MDCListFoundation.prototype.maybeInitializeSingleSelection = function() {
        var selectedItemIndex = this.getSelectedIndexFromDOM();
        if (selectedItemIndex === (0, _constants.numbers).UNSET_INDEX) return;
        var hasActivatedClass = this.adapter.listItemAtIndexHasClass(selectedItemIndex, (0, _constants.cssClasses).LIST_ITEM_ACTIVATED_CLASS);
        if (hasActivatedClass) this.setUseActivatedClass(true);
        this.isSingleSelectionList = true;
        this.selectedIndex = selectedItemIndex;
    };
    /** @return Index of the first selected item based on the DOM state. */ MDCListFoundation.prototype.getSelectedIndexFromDOM = function() {
        var selectedIndex = (0, _constants.numbers).UNSET_INDEX;
        var listItemsCount = this.adapter.getListItemCount();
        for(var i = 0; i < listItemsCount; i++){
            var hasSelectedClass = this.adapter.listItemAtIndexHasClass(i, (0, _constants.cssClasses).LIST_ITEM_SELECTED_CLASS);
            var hasActivatedClass = this.adapter.listItemAtIndexHasClass(i, (0, _constants.cssClasses).LIST_ITEM_ACTIVATED_CLASS);
            if (!(hasSelectedClass || hasActivatedClass)) continue;
            selectedIndex = i;
            break;
        }
        return selectedIndex;
    };
    /**
     * Sets whether typeahead is enabled on the list.
     * @param hasTypeahead Whether typeahead is enabled.
     */ MDCListFoundation.prototype.setHasTypeahead = function(hasTypeahead) {
        this.hasTypeahead = hasTypeahead;
        if (hasTypeahead) this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex();
    };
    /**
     * @return Whether typeahead is currently matching a user-specified prefix.
     */ MDCListFoundation.prototype.isTypeaheadInProgress = function() {
        return this.hasTypeahead && _typeahead.isTypingInProgress(this.typeaheadState);
    };
    /** Toggle use of the "activated" CSS class. */ MDCListFoundation.prototype.setUseActivatedClass = function(useActivated) {
        this.useActivatedClass = useActivated;
    };
    /**
     * Toggles use of the selected attribute (true for aria-selected, false for
     * aria-checked).
     */ MDCListFoundation.prototype.setUseSelectedAttribute = function(useSelected) {
        this.useSelectedAttr = useSelected;
    };
    MDCListFoundation.prototype.getSelectedIndex = function() {
        return this.selectedIndex;
    };
    MDCListFoundation.prototype.setSelectedIndex = function(index, options) {
        if (options === void 0) options = {};
        if (!this.isIndexValid(index)) return;
        if (this.isCheckboxList) this.setCheckboxAtIndex(index, options);
        else if (this.isRadioList) this.setRadioAtIndex(index, options);
        else this.setSingleSelectionAtIndex(index, options);
    };
    /**
     * Focus in handler for the list items.
     */ MDCListFoundation.prototype.handleFocusIn = function(listItemIndex) {
        if (listItemIndex >= 0) {
            this.focusedItemIndex = listItemIndex;
            this.adapter.setAttributeForElementIndex(listItemIndex, "tabindex", "0");
            this.adapter.setTabIndexForListItemChildren(listItemIndex, "0");
        }
    };
    /**
     * Focus out handler for the list items.
     */ MDCListFoundation.prototype.handleFocusOut = function(listItemIndex) {
        var _this = this;
        if (listItemIndex >= 0) {
            this.adapter.setAttributeForElementIndex(listItemIndex, "tabindex", "-1");
            this.adapter.setTabIndexForListItemChildren(listItemIndex, "-1");
        }
        /**
         * Between Focusout & Focusin some browsers do not have focus on any
         * element. Setting a delay to wait till the focus is moved to next element.
         */ setTimeout(function() {
            if (!_this.adapter.isFocusInsideList()) _this.setTabindexToFirstSelectedOrFocusedItem();
        }, 0);
    };
    MDCListFoundation.prototype.isIndexDisabled = function(index) {
        return this.adapter.listItemAtIndexHasClass(index, (0, _constants.cssClasses).LIST_ITEM_DISABLED_CLASS);
    };
    /**
     * Key handler for the list.
     */ MDCListFoundation.prototype.handleKeydown = function(event, isRootListItem, listItemIndex) {
        var _this = this;
        var _a;
        var isArrowLeft = (0, _keyboard.normalizeKey)(event) === "ArrowLeft";
        var isArrowUp = (0, _keyboard.normalizeKey)(event) === "ArrowUp";
        var isArrowRight = (0, _keyboard.normalizeKey)(event) === "ArrowRight";
        var isArrowDown = (0, _keyboard.normalizeKey)(event) === "ArrowDown";
        var isHome = (0, _keyboard.normalizeKey)(event) === "Home";
        var isEnd = (0, _keyboard.normalizeKey)(event) === "End";
        var isEnter = (0, _keyboard.normalizeKey)(event) === "Enter";
        var isSpace = (0, _keyboard.normalizeKey)(event) === "Spacebar";
        // The keys for forward and back differ based on list orientation.
        var isForward = this.isVertical && isArrowDown || !this.isVertical && isArrowRight;
        var isBack = this.isVertical && isArrowUp || !this.isVertical && isArrowLeft;
        // Have to check both upper and lower case, because having caps lock on
        // affects the value.
        var isLetterA = event.key === "A" || event.key === "a";
        var eventHasModifiers = createModifierChecker(event);
        if (this.adapter.isRootFocused()) {
            if ((isBack || isEnd) && eventHasModifiers([])) {
                event.preventDefault();
                this.focusLastElement();
            } else if ((isForward || isHome) && eventHasModifiers([])) {
                event.preventDefault();
                this.focusFirstElement();
            } else if (isBack && eventHasModifiers([
                "Shift"
            ]) && this.isCheckboxList) {
                event.preventDefault();
                var focusedIndex = this.focusLastElement();
                if (focusedIndex !== -1) this.setSelectedIndexOnAction(focusedIndex, false);
            } else if (isForward && eventHasModifiers([
                "Shift"
            ]) && this.isCheckboxList) {
                event.preventDefault();
                var focusedIndex = this.focusFirstElement();
                if (focusedIndex !== -1) this.setSelectedIndexOnAction(focusedIndex, false);
            }
            if (this.hasTypeahead) {
                var handleKeydownOpts = {
                    event: event,
                    focusItemAtIndex: function(index) {
                        _this.focusItemAtIndex(index);
                    },
                    focusedItemIndex: -1,
                    isTargetListItem: isRootListItem,
                    sortedIndexByFirstChar: this.sortedIndexByFirstChar,
                    isItemAtIndexDisabled: function(index) {
                        return _this.isIndexDisabled(index);
                    }
                };
                _typeahead.handleKeydown(handleKeydownOpts, this.typeaheadState);
            }
            return;
        }
        var currentIndex = this.adapter.getFocusedElementIndex();
        if (currentIndex === -1) {
            currentIndex = listItemIndex;
            if (currentIndex < 0) // If this event doesn't have a mdc-list-item ancestor from the
            // current list (not from a sublist), return early.
            return;
        }
        if (isForward && eventHasModifiers([])) {
            (0, _events.preventDefaultEvent)(event);
            this.focusNextElement(currentIndex);
        } else if (isBack && eventHasModifiers([])) {
            (0, _events.preventDefaultEvent)(event);
            this.focusPrevElement(currentIndex);
        } else if (isForward && eventHasModifiers([
            "Shift"
        ]) && this.isCheckboxList) {
            (0, _events.preventDefaultEvent)(event);
            var focusedIndex = this.focusNextElement(currentIndex);
            if (focusedIndex !== -1) this.setSelectedIndexOnAction(focusedIndex, false);
        } else if (isBack && eventHasModifiers([
            "Shift"
        ]) && this.isCheckboxList) {
            (0, _events.preventDefaultEvent)(event);
            var focusedIndex = this.focusPrevElement(currentIndex);
            if (focusedIndex !== -1) this.setSelectedIndexOnAction(focusedIndex, false);
        } else if (isHome && eventHasModifiers([])) {
            (0, _events.preventDefaultEvent)(event);
            this.focusFirstElement();
        } else if (isEnd && eventHasModifiers([])) {
            (0, _events.preventDefaultEvent)(event);
            this.focusLastElement();
        } else if (isHome && eventHasModifiers([
            "Control",
            "Shift"
        ]) && this.isCheckboxList) {
            (0, _events.preventDefaultEvent)(event);
            if (this.isIndexDisabled(currentIndex)) return;
            this.focusFirstElement();
            this.toggleCheckboxRange(0, currentIndex, currentIndex);
        } else if (isEnd && eventHasModifiers([
            "Control",
            "Shift"
        ]) && this.isCheckboxList) {
            (0, _events.preventDefaultEvent)(event);
            if (this.isIndexDisabled(currentIndex)) return;
            this.focusLastElement();
            this.toggleCheckboxRange(currentIndex, this.adapter.getListItemCount() - 1, currentIndex);
        } else if (isLetterA && eventHasModifiers([
            "Control"
        ]) && this.isCheckboxList) {
            event.preventDefault();
            this.checkboxListToggleAll(this.selectedIndex === (0, _constants.numbers).UNSET_INDEX ? [] : this.selectedIndex, true);
        } else if ((isEnter || isSpace) && eventHasModifiers([])) {
            if (isRootListItem) {
                // Return early if enter key is pressed on anchor element which triggers
                // synthetic MouseEvent event.
                var target = event.target;
                if (target && target.tagName === "A" && isEnter) return;
                (0, _events.preventDefaultEvent)(event);
                if (this.isIndexDisabled(currentIndex)) return;
                if (!this.isTypeaheadInProgress()) {
                    if (this.isSelectableList()) this.setSelectedIndexOnAction(currentIndex, false);
                    this.adapter.notifyAction(currentIndex);
                }
            }
        } else if ((isEnter || isSpace) && eventHasModifiers([
            "Shift"
        ]) && this.isCheckboxList) {
            // Return early if enter key is pressed on anchor element which triggers
            // synthetic MouseEvent event.
            var target = event.target;
            if (target && target.tagName === "A" && isEnter) return;
            (0, _events.preventDefaultEvent)(event);
            if (this.isIndexDisabled(currentIndex)) return;
            if (!this.isTypeaheadInProgress()) {
                this.toggleCheckboxRange((_a = this.lastSelectedIndex) !== null && _a !== void 0 ? _a : currentIndex, currentIndex, currentIndex);
                this.adapter.notifyAction(currentIndex);
            }
        }
        if (this.hasTypeahead) {
            var handleKeydownOpts = {
                event: event,
                focusItemAtIndex: function(index) {
                    _this.focusItemAtIndex(index);
                },
                focusedItemIndex: this.focusedItemIndex,
                isTargetListItem: isRootListItem,
                sortedIndexByFirstChar: this.sortedIndexByFirstChar,
                isItemAtIndexDisabled: function(index) {
                    return _this.isIndexDisabled(index);
                }
            };
            _typeahead.handleKeydown(handleKeydownOpts, this.typeaheadState);
        }
    };
    /**
     * Click handler for the list.
     *
     * @param index Index for the item that has been clicked.
     * @param isCheckboxAlreadyUpdatedInAdapter Whether the checkbox for
     *   the list item has already been updated in the adapter. This attribute
     *   should be set to `true` when e.g. the click event directly landed on
     *   the underlying native checkbox element which would cause the checked
     *   state to be already toggled within `adapter.isCheckboxCheckedAtIndex`.
     */ MDCListFoundation.prototype.handleClick = function(index, isCheckboxAlreadyUpdatedInAdapter, event) {
        var _a;
        var eventHasModifiers = createModifierChecker(event);
        if (index === (0, _constants.numbers).UNSET_INDEX) return;
        if (this.isIndexDisabled(index)) return;
        if (eventHasModifiers([])) {
            if (this.isSelectableList()) this.setSelectedIndexOnAction(index, isCheckboxAlreadyUpdatedInAdapter);
            this.adapter.notifyAction(index);
        } else if (this.isCheckboxList && eventHasModifiers([
            "Shift"
        ])) {
            this.toggleCheckboxRange((_a = this.lastSelectedIndex) !== null && _a !== void 0 ? _a : index, index, index);
            this.adapter.notifyAction(index);
        }
    };
    /**
     * Focuses the next element on the list.
     */ MDCListFoundation.prototype.focusNextElement = function(index) {
        var count = this.adapter.getListItemCount();
        var nextIndex = index;
        var firstChecked = null;
        do {
            nextIndex++;
            if (nextIndex >= count) {
                if (this.wrapFocus) nextIndex = 0;
                else // Return early because last item is already focused.
                return index;
            }
            if (nextIndex === firstChecked) return -1;
            firstChecked = firstChecked !== null && firstChecked !== void 0 ? firstChecked : nextIndex;
        }while (!this.areDisabledItemsFocusable && this.isIndexDisabled(nextIndex));
        this.focusItemAtIndex(nextIndex);
        return nextIndex;
    };
    /**
     * Focuses the previous element on the list.
     */ MDCListFoundation.prototype.focusPrevElement = function(index) {
        var count = this.adapter.getListItemCount();
        var prevIndex = index;
        var firstChecked = null;
        do {
            prevIndex--;
            if (prevIndex < 0) {
                if (this.wrapFocus) prevIndex = count - 1;
                else // Return early because first item is already focused.
                return index;
            }
            if (prevIndex === firstChecked) return -1;
            firstChecked = firstChecked !== null && firstChecked !== void 0 ? firstChecked : prevIndex;
        }while (!this.areDisabledItemsFocusable && this.isIndexDisabled(prevIndex));
        this.focusItemAtIndex(prevIndex);
        return prevIndex;
    };
    MDCListFoundation.prototype.focusFirstElement = function() {
        // Pass -1 to `focusNextElement`, since it will incremement to 0 and focus
        // the first element.
        return this.focusNextElement(-1);
    };
    MDCListFoundation.prototype.focusLastElement = function() {
        // Pass the length of the list to `focusNextElement` since it will decrement
        // to length - 1 and focus the last element.
        return this.focusPrevElement(this.adapter.getListItemCount());
    };
    MDCListFoundation.prototype.focusInitialElement = function() {
        var initialIndex = this.getFirstSelectedOrFocusedItemIndex();
        this.focusItemAtIndex(initialIndex);
        return initialIndex;
    };
    /**
     * @param itemIndex Index of the list item
     * @param isEnabled Sets the list item to enabled or disabled.
     */ MDCListFoundation.prototype.setEnabled = function(itemIndex, isEnabled) {
        if (!this.isIndexValid(itemIndex, false)) return;
        if (isEnabled) {
            this.adapter.removeClassForElementIndex(itemIndex, (0, _constants.cssClasses).LIST_ITEM_DISABLED_CLASS);
            this.adapter.setAttributeForElementIndex(itemIndex, (0, _constants.strings).ARIA_DISABLED, "false");
        } else {
            this.adapter.addClassForElementIndex(itemIndex, (0, _constants.cssClasses).LIST_ITEM_DISABLED_CLASS);
            this.adapter.setAttributeForElementIndex(itemIndex, (0, _constants.strings).ARIA_DISABLED, "true");
        }
    };
    MDCListFoundation.prototype.setSingleSelectionAtIndex = function(index, options) {
        if (options === void 0) options = {};
        if (this.selectedIndex === index && !options.forceUpdate) return;
        var selectedClassName = (0, _constants.cssClasses).LIST_ITEM_SELECTED_CLASS;
        if (this.useActivatedClass) selectedClassName = (0, _constants.cssClasses).LIST_ITEM_ACTIVATED_CLASS;
        if (this.selectedIndex !== (0, _constants.numbers).UNSET_INDEX) this.adapter.removeClassForElementIndex(this.selectedIndex, selectedClassName);
        this.setAriaForSingleSelectionAtIndex(index);
        this.setTabindexAtIndex(index);
        if (index !== (0, _constants.numbers).UNSET_INDEX) this.adapter.addClassForElementIndex(index, selectedClassName);
        this.selectedIndex = index;
        // If the selected value has changed through user interaction,
        // we want to notify the selection change to the adapter.
        if (options.isUserInteraction && !options.forceUpdate) this.adapter.notifySelectionChange([
            index
        ]);
    };
    /**
     * Sets aria attribute for single selection at given index.
     */ MDCListFoundation.prototype.setAriaForSingleSelectionAtIndex = function(index) {
        // Detect the presence of aria-current and get the value only during list
        // initialization when it is in unset state.
        if (this.selectedIndex === (0, _constants.numbers).UNSET_INDEX) this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(index, (0, _constants.strings).ARIA_CURRENT);
        var isAriaCurrent = this.ariaCurrentAttrValue !== null;
        var ariaAttribute = isAriaCurrent ? (0, _constants.strings).ARIA_CURRENT : (0, _constants.strings).ARIA_SELECTED;
        if (this.selectedIndex !== (0, _constants.numbers).UNSET_INDEX) this.adapter.setAttributeForElementIndex(this.selectedIndex, ariaAttribute, "false");
        if (index !== (0, _constants.numbers).UNSET_INDEX) {
            var ariaAttributeValue = isAriaCurrent ? this.ariaCurrentAttrValue : "true";
            this.adapter.setAttributeForElementIndex(index, ariaAttribute, ariaAttributeValue);
        }
    };
    /**
     * Returns the attribute to use for indicating selection status.
     */ MDCListFoundation.prototype.getSelectionAttribute = function() {
        return this.useSelectedAttr ? (0, _constants.strings).ARIA_SELECTED : (0, _constants.strings).ARIA_CHECKED;
    };
    /**
     * Toggles radio at give index. Radio doesn't change the checked state if it
     * is already checked.
     */ MDCListFoundation.prototype.setRadioAtIndex = function(index, options) {
        if (options === void 0) options = {};
        var selectionAttribute = this.getSelectionAttribute();
        this.adapter.setCheckedCheckboxOrRadioAtIndex(index, true);
        if (this.selectedIndex === index && !options.forceUpdate) return;
        if (this.selectedIndex !== (0, _constants.numbers).UNSET_INDEX) this.adapter.setAttributeForElementIndex(this.selectedIndex, selectionAttribute, "false");
        this.adapter.setAttributeForElementIndex(index, selectionAttribute, "true");
        this.selectedIndex = index;
        // If the selected value has changed through user interaction,
        // we want to notify the selection change to the adapter.
        if (options.isUserInteraction && !options.forceUpdate) this.adapter.notifySelectionChange([
            index
        ]);
    };
    MDCListFoundation.prototype.setCheckboxAtIndex = function(index, options) {
        if (options === void 0) options = {};
        var currentIndex = this.selectedIndex;
        // If this update is not triggered by a user interaction, we do not
        // need to know about the currently selected indices and can avoid
        // constructing the `Set` for performance reasons.
        var currentlySelected = options.isUserInteraction ? new Set(currentIndex === (0, _constants.numbers).UNSET_INDEX ? [] : currentIndex) : null;
        var selectionAttribute = this.getSelectionAttribute();
        var changedIndices = [];
        for(var i = 0; i < this.adapter.getListItemCount(); i++){
            var previousIsChecked = currentlySelected === null || currentlySelected === void 0 ? void 0 : currentlySelected.has(i);
            var newIsChecked = index.indexOf(i) >= 0;
            // If the selection has changed for this item, we keep track of it
            // so that we can notify the adapter.
            if (newIsChecked !== previousIsChecked) changedIndices.push(i);
            this.adapter.setCheckedCheckboxOrRadioAtIndex(i, newIsChecked);
            this.adapter.setAttributeForElementIndex(i, selectionAttribute, newIsChecked ? "true" : "false");
        }
        this.selectedIndex = index;
        // If the selected value has changed through user interaction,
        // we want to notify the selection change to the adapter.
        if (options.isUserInteraction && changedIndices.length) this.adapter.notifySelectionChange(changedIndices);
    };
    /**
     * Toggles the state of all checkboxes in the given range (inclusive) based on
     * the state of the checkbox at the `toggleIndex`. To determine whether to set
     * the given range to checked or unchecked, read the value of the checkbox at
     * the `toggleIndex` and negate it. Then apply that new checked state to all
     * checkboxes in the range.
     * @param fromIndex The start of the range of checkboxes to toggle
     * @param toIndex The end of the range of checkboxes to toggle
     * @param toggleIndex The index that will be used to determine the new state
     *     of the given checkbox range.
     */ MDCListFoundation.prototype.toggleCheckboxRange = function(fromIndex, toIndex, toggleIndex) {
        this.lastSelectedIndex = toggleIndex;
        var currentlySelected = new Set(this.selectedIndex === (0, _constants.numbers).UNSET_INDEX ? [] : this.selectedIndex);
        var newIsChecked = !(currentlySelected === null || currentlySelected === void 0 ? void 0 : currentlySelected.has(toggleIndex));
        var _a = (0, _tslib.__read)([
            fromIndex,
            toIndex
        ].sort(), 2), startIndex = _a[0], endIndex = _a[1];
        var selectionAttribute = this.getSelectionAttribute();
        var changedIndices = [];
        for(var i = startIndex; i <= endIndex; i++){
            if (this.isIndexDisabled(i)) continue;
            var previousIsChecked = currentlySelected.has(i);
            // If the selection has changed for this item, we keep track of it
            // so that we can notify the adapter.
            if (newIsChecked !== previousIsChecked) {
                changedIndices.push(i);
                this.adapter.setCheckedCheckboxOrRadioAtIndex(i, newIsChecked);
                this.adapter.setAttributeForElementIndex(i, selectionAttribute, "" + newIsChecked);
                if (newIsChecked) currentlySelected.add(i);
                else currentlySelected.delete(i);
            }
        }
        // If the selected value has changed, update and notify the selection change
        // to the adapter.
        if (changedIndices.length) {
            this.selectedIndex = (0, _tslib.__spreadArray)([], (0, _tslib.__read)(currentlySelected));
            this.adapter.notifySelectionChange(changedIndices);
        }
    };
    MDCListFoundation.prototype.setTabindexAtIndex = function(index) {
        if (this.focusedItemIndex === (0, _constants.numbers).UNSET_INDEX && index !== 0) // If some list item was selected set first list item's tabindex to -1.
        // Generally, tabindex is set to 0 on first list item of list that has no
        // preselected items.
        this.adapter.setAttributeForElementIndex(0, "tabindex", "-1");
        else if (this.focusedItemIndex >= 0 && this.focusedItemIndex !== index) this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1");
        // Set the previous selection's tabindex to -1. We need this because
        // in selection menus that are not visible, programmatically setting an
        // option will not change focus but will change where tabindex should be 0.
        if (!(this.selectedIndex instanceof Array) && this.selectedIndex !== index) this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1");
        if (index !== (0, _constants.numbers).UNSET_INDEX) this.adapter.setAttributeForElementIndex(index, "tabindex", "0");
    };
    /**
     * @return Return true if it is single selectin list, checkbox list or radio
     *     list.
     */ MDCListFoundation.prototype.isSelectableList = function() {
        return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    };
    MDCListFoundation.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
        var targetIndex = this.getFirstSelectedOrFocusedItemIndex();
        this.setTabindexAtIndex(targetIndex);
    };
    MDCListFoundation.prototype.getFirstSelectedOrFocusedItemIndex = function() {
        // Action lists retain focus on the most recently focused item.
        if (!this.isSelectableList()) return Math.max(this.focusedItemIndex, 0);
        // Single-selection lists focus the selected item.
        if (typeof this.selectedIndex === "number" && this.selectedIndex !== (0, _constants.numbers).UNSET_INDEX) return this.selectedIndex;
        // Multiple-selection lists focus the first selected item.
        if (isNumberArray(this.selectedIndex) && this.selectedIndex.length > 0) return this.selectedIndex.reduce(function(minIndex, currentIndex) {
            return Math.min(minIndex, currentIndex);
        });
        // Selection lists without a selection focus the first item.
        return 0;
    };
    MDCListFoundation.prototype.isIndexValid = function(index, validateListType) {
        var _this = this;
        if (validateListType === void 0) validateListType = true;
        if (index instanceof Array) {
            if (!this.isCheckboxList && validateListType) throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
            if (index.length === 0) return true;
            else return index.some(function(i) {
                return _this.isIndexInRange(i);
            });
        } else if (typeof index === "number") {
            if (this.isCheckboxList && validateListType) throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + index);
            return this.isIndexInRange(index) || this.isSingleSelectionList && index === (0, _constants.numbers).UNSET_INDEX;
        } else return false;
    };
    MDCListFoundation.prototype.isIndexInRange = function(index) {
        var listSize = this.adapter.getListItemCount();
        return index >= 0 && index < listSize;
    };
    /**
     * Sets selected index on user action, toggles checkboxes in checkbox lists
     * by default, unless `isCheckboxAlreadyUpdatedInAdapter` is set to `true`.
     *
     * In cases where `isCheckboxAlreadyUpdatedInAdapter` is set to `true`, the
     * UI is just updated to reflect the value returned by the adapter.
     *
     * When calling this, make sure user interaction does not toggle disabled
     * list items.
     */ MDCListFoundation.prototype.setSelectedIndexOnAction = function(index, isCheckboxAlreadyUpdatedInAdapter) {
        this.lastSelectedIndex = index;
        if (this.isCheckboxList) {
            this.toggleCheckboxAtIndex(index, isCheckboxAlreadyUpdatedInAdapter);
            this.adapter.notifySelectionChange([
                index
            ]);
        } else this.setSelectedIndex(index, {
            isUserInteraction: true
        });
    };
    MDCListFoundation.prototype.toggleCheckboxAtIndex = function(index, isCheckboxAlreadyUpdatedInAdapter) {
        var selectionAttribute = this.getSelectionAttribute();
        var adapterIsChecked = this.adapter.isCheckboxCheckedAtIndex(index);
        // By default the checked value from the adapter is toggled unless the
        // checked state in the adapter has already been updated beforehand.
        // This can be happen when the underlying native checkbox has already
        // been updated through the native click event.
        var newCheckedValue;
        if (isCheckboxAlreadyUpdatedInAdapter) newCheckedValue = adapterIsChecked;
        else {
            newCheckedValue = !adapterIsChecked;
            this.adapter.setCheckedCheckboxOrRadioAtIndex(index, newCheckedValue);
        }
        this.adapter.setAttributeForElementIndex(index, selectionAttribute, newCheckedValue ? "true" : "false");
        // If none of the checkbox items are selected and selectedIndex is not
        // initialized then provide a default value.
        var selectedIndexes = this.selectedIndex === (0, _constants.numbers).UNSET_INDEX ? [] : this.selectedIndex.slice();
        if (newCheckedValue) selectedIndexes.push(index);
        else selectedIndexes = selectedIndexes.filter(function(i) {
            return i !== index;
        });
        this.selectedIndex = selectedIndexes;
    };
    MDCListFoundation.prototype.focusItemAtIndex = function(index) {
        this.adapter.focusItemAtIndex(index);
        this.focusedItemIndex = index;
    };
    MDCListFoundation.prototype.checkboxListToggleAll = function(currentlySelectedIndexes, isUserInteraction) {
        var count = this.adapter.getListItemCount();
        // If all items are selected, deselect everything.
        if (currentlySelectedIndexes.length === count) this.setCheckboxAtIndex([], {
            isUserInteraction: isUserInteraction
        });
        else {
            // Otherwise select all enabled options.
            var allIndexes = [];
            for(var i = 0; i < count; i++)if (!this.isIndexDisabled(i) || currentlySelectedIndexes.indexOf(i) > -1) allIndexes.push(i);
            this.setCheckboxAtIndex(allIndexes, {
                isUserInteraction: isUserInteraction
            });
        }
    };
    /**
     * Given the next desired character from the user, adds it to the typeahead
     * buffer. Then, attempts to find the next option matching the buffer. Wraps
     * around if at the end of options.
     *
     * @param nextChar The next character to add to the prefix buffer.
     * @param startingIndex The index from which to start matching. Only relevant
     *     when starting a new match sequence. To start a new match sequence,
     *     clear the buffer using `clearTypeaheadBuffer`, or wait for the buffer
     *     to clear after a set interval defined in list foundation. Defaults to
     *     the currently focused index.
     * @return The index of the matched item, or -1 if no match.
     */ MDCListFoundation.prototype.typeaheadMatchItem = function(nextChar, startingIndex, skipFocus) {
        var _this = this;
        if (skipFocus === void 0) skipFocus = false;
        var opts = {
            focusItemAtIndex: function(index) {
                _this.focusItemAtIndex(index);
            },
            focusedItemIndex: startingIndex ? startingIndex : this.focusedItemIndex,
            nextChar: nextChar,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            skipFocus: skipFocus,
            isItemAtIndexDisabled: function(index) {
                return _this.isIndexDisabled(index);
            }
        };
        return _typeahead.matchItem(opts, this.typeaheadState);
    };
    /**
     * Initializes the MDCListTextAndIndex data structure by indexing the current
     * list items by primary text.
     *
     * @return The primary texts of all the list items sorted by first character.
     */ MDCListFoundation.prototype.typeaheadInitSortedIndex = function() {
        return _typeahead.initSortedIndex(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    };
    /**
     * Clears the typeahead buffer.
     */ MDCListFoundation.prototype.clearTypeaheadBuffer = function() {
        _typeahead.clearBuffer(this.typeaheadState);
    };
    return MDCListFoundation;
}((0, _foundation.MDCFoundation));
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
exports.default = MDCListFoundation;

},{"tslib":"lRdW5","@material/base/foundation":"kC5Yw","@material/dom/keyboard":"5gaWj","./constants":"5wBVC","./events":"dsWXg","./typeahead":"7rMsD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5gaWj":[function(require,module,exports) {
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ /**
 * KEY provides normalized string values for keys.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "KEY", ()=>KEY);
/**
 * normalizeKey returns the normalized string for a navigational action.
 */ parcelHelpers.export(exports, "normalizeKey", ()=>normalizeKey);
/**
 * isNavigationEvent returns whether the event is a navigation event
 */ parcelHelpers.export(exports, "isNavigationEvent", ()=>isNavigationEvent);
var KEY = {
    UNKNOWN: "Unknown",
    BACKSPACE: "Backspace",
    ENTER: "Enter",
    SPACEBAR: "Spacebar",
    PAGE_UP: "PageUp",
    PAGE_DOWN: "PageDown",
    END: "End",
    HOME: "Home",
    ARROW_LEFT: "ArrowLeft",
    ARROW_UP: "ArrowUp",
    ARROW_RIGHT: "ArrowRight",
    ARROW_DOWN: "ArrowDown",
    DELETE: "Delete",
    ESCAPE: "Escape",
    TAB: "Tab"
};
var normalizedKeys = new Set();
// IE11 has no support for new Map with iterable so we need to initialize this
// by hand.
normalizedKeys.add(KEY.BACKSPACE);
normalizedKeys.add(KEY.ENTER);
normalizedKeys.add(KEY.SPACEBAR);
normalizedKeys.add(KEY.PAGE_UP);
normalizedKeys.add(KEY.PAGE_DOWN);
normalizedKeys.add(KEY.END);
normalizedKeys.add(KEY.HOME);
normalizedKeys.add(KEY.ARROW_LEFT);
normalizedKeys.add(KEY.ARROW_UP);
normalizedKeys.add(KEY.ARROW_RIGHT);
normalizedKeys.add(KEY.ARROW_DOWN);
normalizedKeys.add(KEY.DELETE);
normalizedKeys.add(KEY.ESCAPE);
normalizedKeys.add(KEY.TAB);
var KEY_CODE = {
    BACKSPACE: 8,
    ENTER: 13,
    SPACEBAR: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    ARROW_LEFT: 37,
    ARROW_UP: 38,
    ARROW_RIGHT: 39,
    ARROW_DOWN: 40,
    DELETE: 46,
    ESCAPE: 27,
    TAB: 9
};
var mappedKeyCodes = new Map();
// IE11 has no support for new Map with iterable so we need to initialize this
// by hand.
mappedKeyCodes.set(KEY_CODE.BACKSPACE, KEY.BACKSPACE);
mappedKeyCodes.set(KEY_CODE.ENTER, KEY.ENTER);
mappedKeyCodes.set(KEY_CODE.SPACEBAR, KEY.SPACEBAR);
mappedKeyCodes.set(KEY_CODE.PAGE_UP, KEY.PAGE_UP);
mappedKeyCodes.set(KEY_CODE.PAGE_DOWN, KEY.PAGE_DOWN);
mappedKeyCodes.set(KEY_CODE.END, KEY.END);
mappedKeyCodes.set(KEY_CODE.HOME, KEY.HOME);
mappedKeyCodes.set(KEY_CODE.ARROW_LEFT, KEY.ARROW_LEFT);
mappedKeyCodes.set(KEY_CODE.ARROW_UP, KEY.ARROW_UP);
mappedKeyCodes.set(KEY_CODE.ARROW_RIGHT, KEY.ARROW_RIGHT);
mappedKeyCodes.set(KEY_CODE.ARROW_DOWN, KEY.ARROW_DOWN);
mappedKeyCodes.set(KEY_CODE.DELETE, KEY.DELETE);
mappedKeyCodes.set(KEY_CODE.ESCAPE, KEY.ESCAPE);
mappedKeyCodes.set(KEY_CODE.TAB, KEY.TAB);
var navigationKeys = new Set();
// IE11 has no support for new Set with iterable so we need to initialize this
// by hand.
navigationKeys.add(KEY.PAGE_UP);
navigationKeys.add(KEY.PAGE_DOWN);
navigationKeys.add(KEY.END);
navigationKeys.add(KEY.HOME);
navigationKeys.add(KEY.ARROW_LEFT);
navigationKeys.add(KEY.ARROW_UP);
navigationKeys.add(KEY.ARROW_RIGHT);
navigationKeys.add(KEY.ARROW_DOWN);
function normalizeKey(evt) {
    var key = evt.key;
    // If the event already has a normalized key, return it
    if (normalizedKeys.has(key)) return key;
    // tslint:disable-next-line:deprecation
    var mappedKey = mappedKeyCodes.get(evt.keyCode);
    if (mappedKey) return mappedKey;
    return KEY.UNKNOWN;
}
function isNavigationEvent(evt) {
    return navigationKeys.has(normalizeKey(evt));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dsWXg":[function(require,module,exports) {
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "preventDefaultEvent", ()=>preventDefaultEvent);
var ELEMENTS_KEY_ALLOWED_IN = [
    "input",
    "button",
    "textarea",
    "select"
];
var preventDefaultEvent = function(evt) {
    var target = evt.target;
    if (!target) return;
    var tagName = ("" + target.tagName).toLowerCase();
    if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) evt.preventDefault();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7rMsD":[function(require,module,exports) {
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Initializes a state object for typeahead. Use the same reference for calls to
 * typeahead functions.
 *
 * @return The current state of the typeahead process. Each state reference
 *     represents a typeahead instance as the reference is typically mutated
 *     in-place.
 */ parcelHelpers.export(exports, "initState", ()=>initState);
/**
 * Initializes typeahead state by indexing the current list items by primary
 * text into the sortedIndexByFirstChar data structure.
 *
 * @param listItemCount numer of items in the list
 * @param getPrimaryTextByItemIndex function that returns the primary text at a
 *     given index
 *
 * @return Map that maps the first character of the primary text to the full
 *     list text and it's index
 */ parcelHelpers.export(exports, "initSortedIndex", ()=>initSortedIndex);
/**
 * Given the next desired character from the user, it attempts to find the next
 * list option matching the buffer. Wraps around if at the end of options.
 *
 * @param opts Options and accessors
 *   - nextChar - the next character to match against items
 *   - sortedIndexByFirstChar - output of `initSortedIndex(...)`
 *   - focusedItemIndex - the index of the currently focused item
 *   - focusItemAtIndex - function that focuses a list item at given index
 *   - skipFocus - whether or not to focus the matched item
 *   - isItemAtIndexDisabled - function that determines whether an item at a
 *        given index is disabled
 * @param state The typeahead state instance. See `initState`.
 *
 * @return The index of the matched item, or -1 if no match.
 */ parcelHelpers.export(exports, "matchItem", ()=>matchItem);
/**
 * Whether or not the given typeahead instaance state is currently typing.
 *
 * @param state The typeahead state instance. See `initState`.
 */ parcelHelpers.export(exports, "isTypingInProgress", ()=>isTypingInProgress);
/**
 * Clears the typeahaed buffer so that it resets item matching to the first
 * character.
 *
 * @param state The typeahead state instance. See `initState`.
 */ parcelHelpers.export(exports, "clearBuffer", ()=>clearBuffer);
/**
 * Given a keydown event, it calculates whether or not to automatically focus a
 * list item depending on what was typed mimicing the typeahead functionality of
 * a standard <select> element that is open.
 *
 * @param opts Options and accessors
 *   - event - the KeyboardEvent to handle and parse
 *   - sortedIndexByFirstChar - output of `initSortedIndex(...)`
 *   - focusedItemIndex - the index of the currently focused item
 *   - focusItemAtIndex - function that focuses a list item at given index
 *   - isItemAtFocusedIndexDisabled - whether or not the currently focused item
 *      is disabled
 *   - isTargetListItem - whether or not the event target is a list item
 * @param state The typeahead state instance. See `initState`.
 *
 * @returns index of the item matched by the keydown. -1 if not matched.
 */ parcelHelpers.export(exports, "handleKeydown", ()=>handleKeydown);
var _keyboard = require("@material/dom/keyboard");
var _constants = require("./constants");
var _events = require("./events");
function initState() {
    var state = {
        bufferClearTimeout: 0,
        currentFirstChar: "",
        sortedIndexCursor: 0,
        typeaheadBuffer: ""
    };
    return state;
}
function initSortedIndex(listItemCount, getPrimaryTextByItemIndex) {
    var sortedIndexByFirstChar = new Map();
    // Aggregate item text to index mapping
    for(var i = 0; i < listItemCount; i++){
        var primaryText = getPrimaryTextByItemIndex(i).trim();
        if (!primaryText) continue;
        var firstChar = primaryText[0].toLowerCase();
        if (!sortedIndexByFirstChar.has(firstChar)) sortedIndexByFirstChar.set(firstChar, []);
        sortedIndexByFirstChar.get(firstChar).push({
            text: primaryText.toLowerCase(),
            index: i
        });
    }
    // Sort the mapping
    // TODO(b/157162694): Investigate replacing forEach with Map.values()
    sortedIndexByFirstChar.forEach(function(values) {
        values.sort(function(first, second) {
            return first.index - second.index;
        });
    });
    return sortedIndexByFirstChar;
}
function matchItem(opts, state) {
    var nextChar = opts.nextChar, focusItemAtIndex = opts.focusItemAtIndex, sortedIndexByFirstChar = opts.sortedIndexByFirstChar, focusedItemIndex = opts.focusedItemIndex, skipFocus = opts.skipFocus, isItemAtIndexDisabled = opts.isItemAtIndexDisabled;
    clearTimeout(state.bufferClearTimeout);
    state.bufferClearTimeout = setTimeout(function() {
        clearBuffer(state);
    }, (0, _constants.numbers).TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS);
    state.typeaheadBuffer = state.typeaheadBuffer + nextChar;
    var index;
    if (state.typeaheadBuffer.length === 1) index = matchFirstChar(sortedIndexByFirstChar, focusedItemIndex, isItemAtIndexDisabled, state);
    else index = matchAllChars(sortedIndexByFirstChar, isItemAtIndexDisabled, state);
    if (index !== -1 && !skipFocus) focusItemAtIndex(index);
    return index;
}
/**
 * Matches the user's single input character in the buffer to the
 * next option that begins with such character. Wraps around if at
 * end of options. Returns -1 if no match is found.
 */ function matchFirstChar(sortedIndexByFirstChar, focusedItemIndex, isItemAtIndexDisabled, state) {
    var firstChar = state.typeaheadBuffer[0];
    var itemsMatchingFirstChar = sortedIndexByFirstChar.get(firstChar);
    if (!itemsMatchingFirstChar) return -1;
    // Has the same firstChar been recently matched?
    // Also, did starting index remain the same between key presses?
    // If both hold true, simply increment index.
    if (firstChar === state.currentFirstChar && itemsMatchingFirstChar[state.sortedIndexCursor].index === focusedItemIndex) {
        state.sortedIndexCursor = (state.sortedIndexCursor + 1) % itemsMatchingFirstChar.length;
        var newIndex = itemsMatchingFirstChar[state.sortedIndexCursor].index;
        if (!isItemAtIndexDisabled(newIndex)) return newIndex;
    }
    // If we're here, it means one of the following happened:
    // - either firstChar or startingIndex has changed, invalidating the
    // cursor.
    // - The next item of typeahead is disabled, so we have to look further.
    state.currentFirstChar = firstChar;
    var newCursorPosition = -1;
    var cursorPosition;
    // Find the first non-disabled item as a fallback.
    for(cursorPosition = 0; cursorPosition < itemsMatchingFirstChar.length; cursorPosition++)if (!isItemAtIndexDisabled(itemsMatchingFirstChar[cursorPosition].index)) {
        newCursorPosition = cursorPosition;
        break;
    }
    // Advance cursor to first item matching the firstChar that is positioned
    // after starting item. Cursor is unchanged from fallback if there's no
    // such item.
    for(; cursorPosition < itemsMatchingFirstChar.length; cursorPosition++)if (itemsMatchingFirstChar[cursorPosition].index > focusedItemIndex && !isItemAtIndexDisabled(itemsMatchingFirstChar[cursorPosition].index)) {
        newCursorPosition = cursorPosition;
        break;
    }
    if (newCursorPosition !== -1) {
        state.sortedIndexCursor = newCursorPosition;
        return itemsMatchingFirstChar[state.sortedIndexCursor].index;
    }
    return -1;
}
/**
 * Attempts to find the next item that matches all of the typeahead buffer.
 * Wraps around if at end of options. Returns -1 if no match is found.
 */ function matchAllChars(sortedIndexByFirstChar, isItemAtIndexDisabled, state) {
    var firstChar = state.typeaheadBuffer[0];
    var itemsMatchingFirstChar = sortedIndexByFirstChar.get(firstChar);
    if (!itemsMatchingFirstChar) return -1;
    // Do nothing if text already matches
    var startingItem = itemsMatchingFirstChar[state.sortedIndexCursor];
    if (startingItem.text.lastIndexOf(state.typeaheadBuffer, 0) === 0 && !isItemAtIndexDisabled(startingItem.index)) return startingItem.index;
    // Find next item that matches completely; if no match, we'll eventually
    // loop around to same position
    var cursorPosition = (state.sortedIndexCursor + 1) % itemsMatchingFirstChar.length;
    var nextCursorPosition = -1;
    while(cursorPosition !== state.sortedIndexCursor){
        var currentItem = itemsMatchingFirstChar[cursorPosition];
        var matches = currentItem.text.lastIndexOf(state.typeaheadBuffer, 0) === 0;
        var isEnabled = !isItemAtIndexDisabled(currentItem.index);
        if (matches && isEnabled) {
            nextCursorPosition = cursorPosition;
            break;
        }
        cursorPosition = (cursorPosition + 1) % itemsMatchingFirstChar.length;
    }
    if (nextCursorPosition !== -1) {
        state.sortedIndexCursor = nextCursorPosition;
        return itemsMatchingFirstChar[state.sortedIndexCursor].index;
    }
    return -1;
}
function isTypingInProgress(state) {
    return state.typeaheadBuffer.length > 0;
}
function clearBuffer(state) {
    state.typeaheadBuffer = "";
}
function handleKeydown(opts, state) {
    var event = opts.event, isTargetListItem = opts.isTargetListItem, focusedItemIndex = opts.focusedItemIndex, focusItemAtIndex = opts.focusItemAtIndex, sortedIndexByFirstChar = opts.sortedIndexByFirstChar, isItemAtIndexDisabled = opts.isItemAtIndexDisabled;
    var isArrowLeft = (0, _keyboard.normalizeKey)(event) === "ArrowLeft";
    var isArrowUp = (0, _keyboard.normalizeKey)(event) === "ArrowUp";
    var isArrowRight = (0, _keyboard.normalizeKey)(event) === "ArrowRight";
    var isArrowDown = (0, _keyboard.normalizeKey)(event) === "ArrowDown";
    var isHome = (0, _keyboard.normalizeKey)(event) === "Home";
    var isEnd = (0, _keyboard.normalizeKey)(event) === "End";
    var isEnter = (0, _keyboard.normalizeKey)(event) === "Enter";
    var isSpace = (0, _keyboard.normalizeKey)(event) === "Spacebar";
    if (event.altKey || event.ctrlKey || event.metaKey || isArrowLeft || isArrowUp || isArrowRight || isArrowDown || isHome || isEnd || isEnter) return -1;
    var isCharacterKey = !isSpace && event.key.length === 1;
    if (isCharacterKey) {
        (0, _events.preventDefaultEvent)(event);
        var matchItemOpts = {
            focusItemAtIndex: focusItemAtIndex,
            focusedItemIndex: focusedItemIndex,
            nextChar: event.key.toLowerCase(),
            sortedIndexByFirstChar: sortedIndexByFirstChar,
            skipFocus: false,
            isItemAtIndexDisabled: isItemAtIndexDisabled
        };
        return matchItem(matchItemOpts, state);
    }
    if (!isSpace) return -1;
    if (isTargetListItem) (0, _events.preventDefaultEvent)(event);
    var typeaheadOnListItem = isTargetListItem && isTypingInProgress(state);
    if (typeaheadOnListItem) {
        var matchItemOpts = {
            focusItemAtIndex: focusItemAtIndex,
            focusedItemIndex: focusedItemIndex,
            nextChar: " ",
            sortedIndexByFirstChar: sortedIndexByFirstChar,
            skipFocus: false,
            isItemAtIndexDisabled: isItemAtIndexDisabled
        };
        // space participates in typeahead matching if in rapid typing mode
        return matchItem(matchItemOpts, state);
    }
    return -1;
}

},{"@material/dom/keyboard":"5gaWj","./constants":"5wBVC","./events":"dsWXg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bL1su":[function(require,module,exports) {
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MDCDismissibleDrawerFoundation", ()=>MDCDismissibleDrawerFoundation);
var _tslib = require("tslib");
var _foundation = require("@material/base/foundation");
var _constants = require("../constants");
var MDCDismissibleDrawerFoundation = /** @class */ function(_super) {
    (0, _tslib.__extends)(MDCDismissibleDrawerFoundation, _super);
    function MDCDismissibleDrawerFoundation(adapter) {
        var _this = _super.call(this, (0, _tslib.__assign)((0, _tslib.__assign)({}, MDCDismissibleDrawerFoundation.defaultAdapter), adapter)) || this;
        _this.animationFrame = 0;
        _this.animationTimer = 0;
        return _this;
    }
    Object.defineProperty(MDCDismissibleDrawerFoundation, "strings", {
        get: function() {
            return 0, _constants.strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCDismissibleDrawerFoundation, "cssClasses", {
        get: function() {
            return 0, _constants.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCDismissibleDrawerFoundation, "defaultAdapter", {
        get: function() {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function() {
                    return undefined;
                },
                removeClass: function() {
                    return undefined;
                },
                hasClass: function() {
                    return false;
                },
                elementHasClass: function() {
                    return false;
                },
                notifyClose: function() {
                    return undefined;
                },
                notifyOpen: function() {
                    return undefined;
                },
                saveFocus: function() {
                    return undefined;
                },
                restoreFocus: function() {
                    return undefined;
                },
                focusActiveNavigationItem: function() {
                    return undefined;
                },
                trapFocus: function() {
                    return undefined;
                },
                releaseFocus: function() {
                    return undefined;
                }
            };
        // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCDismissibleDrawerFoundation.prototype.destroy = function() {
        if (this.animationFrame) cancelAnimationFrame(this.animationFrame);
        if (this.animationTimer) clearTimeout(this.animationTimer);
    };
    /**
     * Opens the drawer from the closed state.
     */ MDCDismissibleDrawerFoundation.prototype.open = function() {
        var _this = this;
        if (this.isOpen() || this.isOpening() || this.isClosing()) return;
        this.adapter.addClass((0, _constants.cssClasses).OPEN);
        this.adapter.addClass((0, _constants.cssClasses).ANIMATE);
        // Wait a frame once display is no longer "none", to establish basis for animation
        this.runNextAnimationFrame(function() {
            _this.adapter.addClass((0, _constants.cssClasses).OPENING);
        });
        this.adapter.saveFocus();
    };
    /**
     * Closes the drawer from the open state.
     */ MDCDismissibleDrawerFoundation.prototype.close = function() {
        if (!this.isOpen() || this.isOpening() || this.isClosing()) return;
        this.adapter.addClass((0, _constants.cssClasses).CLOSING);
    };
    /**
     * Returns true if the drawer is in the open position.
     * @return true if drawer is in open state.
     */ MDCDismissibleDrawerFoundation.prototype.isOpen = function() {
        return this.adapter.hasClass((0, _constants.cssClasses).OPEN);
    };
    /**
     * Returns true if the drawer is animating open.
     * @return true if drawer is animating open.
     */ MDCDismissibleDrawerFoundation.prototype.isOpening = function() {
        return this.adapter.hasClass((0, _constants.cssClasses).OPENING) || this.adapter.hasClass((0, _constants.cssClasses).ANIMATE);
    };
    /**
     * Returns true if the drawer is animating closed.
     * @return true if drawer is animating closed.
     */ MDCDismissibleDrawerFoundation.prototype.isClosing = function() {
        return this.adapter.hasClass((0, _constants.cssClasses).CLOSING);
    };
    /**
     * Keydown handler to close drawer when key is escape.
     */ MDCDismissibleDrawerFoundation.prototype.handleKeydown = function(evt) {
        var keyCode = evt.keyCode, key = evt.key;
        var isEscape = key === "Escape" || keyCode === 27;
        if (isEscape) this.close();
    };
    /**
     * Handles the `transitionend` event when the drawer finishes opening/closing.
     */ MDCDismissibleDrawerFoundation.prototype.handleTransitionEnd = function(evt) {
        var OPENING = (0, _constants.cssClasses).OPENING, CLOSING = (0, _constants.cssClasses).CLOSING, OPEN = (0, _constants.cssClasses).OPEN, ANIMATE = (0, _constants.cssClasses).ANIMATE, ROOT = (0, _constants.cssClasses).ROOT;
        // In Edge, transitionend on ripple pseudo-elements yields a target without classList, so check for Element first.
        var isRootElement = this.isElement(evt.target) && this.adapter.elementHasClass(evt.target, ROOT);
        if (!isRootElement) return;
        if (this.isClosing()) {
            this.adapter.removeClass(OPEN);
            this.closed();
            this.adapter.restoreFocus();
            this.adapter.notifyClose();
        } else {
            this.adapter.focusActiveNavigationItem();
            this.opened();
            this.adapter.notifyOpen();
        }
        this.adapter.removeClass(ANIMATE);
        this.adapter.removeClass(OPENING);
        this.adapter.removeClass(CLOSING);
    };
    /**
     * Extension point for when drawer finishes open animation.
     */ MDCDismissibleDrawerFoundation.prototype.opened = function() {}; // tslint:disable-line:no-empty
    /**
     * Extension point for when drawer finishes close animation.
     */ MDCDismissibleDrawerFoundation.prototype.closed = function() {}; // tslint:disable-line:no-empty
    /**
     * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
     */ MDCDismissibleDrawerFoundation.prototype.runNextAnimationFrame = function(callback) {
        var _this = this;
        cancelAnimationFrame(this.animationFrame);
        this.animationFrame = requestAnimationFrame(function() {
            _this.animationFrame = 0;
            clearTimeout(_this.animationTimer);
            _this.animationTimer = setTimeout(callback, 0);
        });
    };
    MDCDismissibleDrawerFoundation.prototype.isElement = function(element) {
        // In Edge, transitionend on ripple pseudo-elements yields a target without classList.
        return Boolean(element.classList);
    };
    return MDCDismissibleDrawerFoundation;
}((0, _foundation.MDCFoundation));
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
exports.default = MDCDismissibleDrawerFoundation;

},{"tslib":"lRdW5","@material/base/foundation":"kC5Yw","../constants":"eSuEA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eSuEA":[function(require,module,exports) {
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cssClasses", ()=>cssClasses);
parcelHelpers.export(exports, "strings", ()=>strings);
var cssClasses = {
    ANIMATE: "mdc-drawer--animate",
    CLOSING: "mdc-drawer--closing",
    DISMISSIBLE: "mdc-drawer--dismissible",
    MODAL: "mdc-drawer--modal",
    OPEN: "mdc-drawer--open",
    OPENING: "mdc-drawer--opening",
    ROOT: "mdc-drawer"
};
var strings = {
    APP_CONTENT_SELECTOR: ".mdc-drawer-app-content",
    CLOSE_EVENT: "MDCDrawer:closed",
    OPEN_EVENT: "MDCDrawer:opened",
    SCRIM_SELECTOR: ".mdc-drawer-scrim",
    LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
    LIST_ITEM_ACTIVATED_SELECTOR: ".mdc-list-item--activated,.mdc-deprecated-list-item--activated"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kPFK0":[function(require,module,exports) {
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MDCModalDrawerFoundation", ()=>MDCModalDrawerFoundation);
var _tslib = require("tslib");
var _foundation = require("../dismissible/foundation");
/* istanbul ignore next: subclass is not a branch statement */ var MDCModalDrawerFoundation = /** @class */ function(_super) {
    (0, _tslib.__extends)(MDCModalDrawerFoundation, _super);
    function MDCModalDrawerFoundation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Handles click event on scrim.
     */ MDCModalDrawerFoundation.prototype.handleScrimClick = function() {
        this.close();
    };
    /**
     * Called when drawer finishes open animation.
     */ MDCModalDrawerFoundation.prototype.opened = function() {
        this.adapter.trapFocus();
    };
    /**
     * Called when drawer finishes close animation.
     */ MDCModalDrawerFoundation.prototype.closed = function() {
        this.adapter.releaseFocus();
    };
    return MDCModalDrawerFoundation;
}((0, _foundation.MDCDismissibleDrawerFoundation));
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
exports.default = MDCModalDrawerFoundation;

},{"tslib":"lRdW5","../dismissible/foundation":"bL1su","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["6fRhY","8lRBv"], "8lRBv", "parcelRequire6ffe")

//# sourceMappingURL=index.59a40e7a.js.map
