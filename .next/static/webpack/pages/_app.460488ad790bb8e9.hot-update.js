"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./lib/timezone_utils.js":
/*!*******************************!*\
  !*** ./lib/timezone_utils.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"timezoneFormatter\": function() { return /* binding */ timezoneFormatter; }\n/* harmony export */ });\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);\n\n// import tz from 'dayjs/plugin/timezone'\n// import utc from 'dayjs/plugin/utc'\nconst utc = __webpack_require__(/*! dayjs/plugin/utc */ \"./node_modules/dayjs/plugin/utc.js\");\nconst timezone = __webpack_require__(/*! dayjs/plugin/timezone */ \"./node_modules/dayjs/plugin/timezone.js\");\ndayjs__WEBPACK_IMPORTED_MODULE_0___default().extend(utc);\ndayjs__WEBPACK_IMPORTED_MODULE_0___default().extend(timezone);\nconst defaultTimezone = \"America/Vancouver\";\nfunction timezoneFormatter() {\n    const time = dayjs__WEBPACK_IMPORTED_MODULE_0___default().tz(defaultTimezone).format(\"YYYY-MM-DD HH:mm:ss\");\n    console.log(tin);\n    return new Date(time);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdGltZXpvbmVfdXRpbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlCO0FBQ3pCLHlDQUF5QztBQUN6QyxxQ0FBcUM7QUFDckMsTUFBTUMsTUFBTUMsbUJBQU9BLENBQUM7QUFDcEIsTUFBTUMsV0FBV0QsbUJBQU9BLENBQUM7QUFDekJGLG1EQUFZLENBQUNDO0FBQ2JELG1EQUFZLENBQUNHO0FBQ2IsTUFBTUUsa0JBQWtCO0FBRWpCLFNBQVNDLG9CQUFvQjtJQUNoQyxNQUFNQyxPQUFPUCwrQ0FBUSxDQUFDSyxpQkFBaUJJLE1BQU0sQ0FBQztJQUM5Q0MsUUFBUUMsR0FBRyxDQUFDQztJQUNaLE9BQU8sSUFBSUMsS0FBS047QUFDcEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvdGltZXpvbmVfdXRpbHMuanM/ZjBlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCJcclxuLy8gaW1wb3J0IHR6IGZyb20gJ2RheWpzL3BsdWdpbi90aW1lem9uZSdcclxuLy8gaW1wb3J0IHV0YyBmcm9tICdkYXlqcy9wbHVnaW4vdXRjJ1xyXG5jb25zdCB1dGMgPSByZXF1aXJlKCdkYXlqcy9wbHVnaW4vdXRjJyk7XHJcbmNvbnN0IHRpbWV6b25lID0gcmVxdWlyZSgnZGF5anMvcGx1Z2luL3RpbWV6b25lJyk7XHJcbmRheWpzLmV4dGVuZCh1dGMpO1xyXG5kYXlqcy5leHRlbmQodGltZXpvbmUpO1xyXG5jb25zdCBkZWZhdWx0VGltZXpvbmUgPSBcIkFtZXJpY2EvVmFuY291dmVyXCJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0aW1lem9uZUZvcm1hdHRlcigpIHtcclxuICAgIGNvbnN0IHRpbWUgPSBkYXlqcy50eihkZWZhdWx0VGltZXpvbmUpLmZvcm1hdCgnWVlZWS1NTS1ERCBISDptbTpzcycpXHJcbiAgICBjb25zb2xlLmxvZyh0aW4pXHJcbiAgICByZXR1cm4gbmV3IERhdGUodGltZSlcclxufSJdLCJuYW1lcyI6WyJkYXlqcyIsInV0YyIsInJlcXVpcmUiLCJ0aW1lem9uZSIsImV4dGVuZCIsImRlZmF1bHRUaW1lem9uZSIsInRpbWV6b25lRm9ybWF0dGVyIiwidGltZSIsInR6IiwiZm9ybWF0IiwiY29uc29sZSIsImxvZyIsInRpbiIsIkRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/timezone_utils.js\n"));

/***/ })

});