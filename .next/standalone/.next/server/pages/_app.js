(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6960:
/***/ ((module) => {

// Exports
module.exports = {
	"SideBar": "SideBar_SideBar__BJLem",
	"SideBarIcon": "SideBar_SideBarIcon__VRKBi",
	"SideBarTooltip": "SideBar_SideBarTooltip__Cy_vZ"
};


/***/ }),

/***/ 102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./components/SideBar/SideBar.module.css
var SideBar_module = __webpack_require__(6960);
var SideBar_module_default = /*#__PURE__*/__webpack_require__.n(SideBar_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/SideBar/index.tsx



const SideBar = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (SideBar_module_default()).SideBar
    });
};
const SideBarIcon = ({ icon , text ="tooltip" , link ="/"  })=>/*#__PURE__*/ _jsx(Link, {
        href: link,
        children: /*#__PURE__*/ _jsxs("div", {
            className: styles.SideBarIcon + " group",
            children: [
                icon,
                /*#__PURE__*/ _jsxs("span", {
                    className: styles.SideBarTooltip + " group-hover:scale-100",
                    children: [
                        " ",
                        text,
                        " "
                    ]
                })
            ]
        })
    })
;
/* harmony default export */ const components_SideBar = (SideBar);

;// CONCATENATED MODULE: ./components/Layout/index.tsx



const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "grid grid-rows-[4rem_auto] md:grid-cols-[4rem_auto] h-screen w-screen",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Jessica Party!"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Product price tracking, stock, and alerts for Microcenter stores"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_SideBar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "h-screen bg-google-gray text-white overflow-auto overscroll-y-auto",
                children: children
            })
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);

;// CONCATENATED MODULE: external "next/script"
const script_namespaceObject = require("next/script");
var script_default = /*#__PURE__*/__webpack_require__.n(script_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.tsx




function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "google-analytics-2",
                strategy: "lazyOnload",
                children: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EB807V33H1', {
              page_path: window.location.pathname,
              });
          `
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "google-analytics-1",
                strategy: "lazyOnload",
                src: `https://www.googletagmanager.com/gtag/js?id=G-EB807V33H1`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Layout, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
}
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 4241:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/routing-items.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [397,676,664], () => (__webpack_exec__(102)));
module.exports = __webpack_exports__;

})();