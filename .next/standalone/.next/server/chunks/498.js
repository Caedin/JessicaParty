"use strict";
exports.id = 498;
exports.ids = [498];
exports.modules = {

/***/ 8498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const PlayerBoard = ({ players  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: players.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "grid place-items-center pt-5 px-3",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                className: "table-fixed bg-slate-700 rounded-xl w-full max-w-2xl",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    children: "Team"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    children: "Score"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                        children: players.map((s)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                className: "border-t",
                                children: [
                                    s.hasJokered ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "text-center border-r rounded-bl-xl bg-blue-900",
                                        children: s.name
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: " border-r text-center rounded-xl",
                                        children: s.name
                                    }),
                                    s.hasJokered ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "text-center rounded-br-xl bg-blue-900",
                                        children: s.score
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "text-center rounded-xl",
                                        children: s.score
                                    })
                                ]
                            }, s.name + s.score)
                        )
                    })
                ]
            })
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayerBoard);


/***/ })

};
;