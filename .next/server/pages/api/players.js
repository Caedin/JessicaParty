"use strict";
(() => {
var exports = {};
exports.id = 672;
exports.ids = [672];
exports.modules = {

/***/ 9018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ api_players)
});

;// CONCATENATED MODULE: ./services/players.js
const players = [
    {}
];
/* harmony default export */ const services_players = (players);

;// CONCATENATED MODULE: ./pages/api/players.ts

const playerEndpoint = (req, res)=>{
    res.status(200).json(services_players);
};
/* harmony default export */ const api_players = (playerEndpoint);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9018));
module.exports = __webpack_exports__;

})();