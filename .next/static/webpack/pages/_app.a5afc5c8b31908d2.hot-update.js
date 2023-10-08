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

/***/ "./components/Landlord/Landlords.jsx":
/*!*******************************************!*\
  !*** ./components/Landlord/Landlords.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .. */ \"./components/index.js\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/StateContext */ \"./context/StateContext.js\");\n/* harmony import */ var _context_StaticContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/StaticContext */ \"./context/StaticContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Landlords = ()=>{\n    _s();\n    const { currentCustomer , developers , filteredLandlordByDesc  } = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateContext)();\n    const { citys  } = (0,_context_StaticContext__WEBPACK_IMPORTED_MODULE_4__.useStaticContext)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: currentCustomer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"module-container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"title title-with-object\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Developed Landlords \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Landlord\\\\Landlords.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Landlord\\\\Landlords.jsx\",\n                    lineNumber: 14,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: filteredLandlordByDesc.length !== 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                children: \"filteredLandlordByDesc\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Landlord\\\\Landlords.jsx\",\n                                lineNumber: 23,\n                                columnNumber: 24\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomerSection, {\n                                section: \"Search Result\",\n                                customerList: filteredCustomersByID,\n                                scrollToCustomerDetail: scrollToCustomerDetail\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Landlord\\\\Landlords.jsx\",\n                                lineNumber: 24,\n                                columnNumber: 24\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Landlord\\\\Landlords.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 24\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Landlord\\\\Landlords.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 21\n                }, undefined),\n                citys.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_2__.LandlordSection, {\n                        city: item\n                    }, \"landlord-by-\".concat(item), false, {\n                        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Landlord\\\\Landlords.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 18\n                    }, undefined))\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Landlord\\\\Landlords.jsx\",\n            lineNumber: 13,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Landlord\\\\Landlords.jsx\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Landlords, \"AirdsLQTVWLtKJ99u6xfseLdhNs=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateContext,\n        _context_StaticContext__WEBPACK_IMPORTED_MODULE_4__.useStaticContext\n    ];\n});\n_c = Landlords;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Landlords);\nvar _c;\n$RefreshReg$(_c, \"Landlords\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xhbmRsb3JkL0xhbmRsb3Jkcy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwQjtBQUVXO0FBQ3dCO0FBQ0M7QUFFOUQsTUFBTUksWUFBWSxJQUFNOztJQUNwQixNQUFNLEVBQUVDLGdCQUFlLEVBQUVDLFdBQVUsRUFBRUMsdUJBQXNCLEVBQUMsR0FBR0wsc0VBQWVBO0lBQzlFLE1BQU0sRUFBRU0sTUFBSyxFQUFFLEdBQUdMLHdFQUFnQkE7SUFDbEMscUJBQ0ksOERBQUNNO2tCQUNJSixpQ0FDRCw4REFBQ0k7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNYLDRFQUFDQztrQ0FDSTs7Ozs7Ozs7Ozs7OEJBR0wsOERBQUNGOzhCQUVERix1QkFBdUJLLE1BQU0sS0FBSyxtQkFDL0IsOERBQUNIOzswQ0FDRCw4REFBQ0k7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0M7Z0NBQWdCQyxTQUFRO2dDQUFnQkMsY0FBY0M7Z0NBQXVCQyx3QkFBd0JBOzs7Ozs7Ozs7Ozs7Ozs7OztnQkFJM0dWLE1BQU1XLEdBQUcsQ0FBQyxDQUFDQyxxQkFDWiw4REFBQ25CLDhDQUFlQTt3QkFBNkJvQixNQUFNRDt1QkFBN0IsZUFBb0IsT0FBTEE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdEQ7R0E1Qk1oQjs7UUFDNkRGLGtFQUFlQTtRQUM1REMsb0VBQWdCQTs7O0tBRmhDQztBQThCTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xhbmRsb3JkL0xhbmRsb3Jkcy5qc3g/ZTczZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBMYW5kbG9yZFNlY3Rpb24gfSBmcm9tIFwiLi5cIjtcbmltcG9ydCB7IHVzZVN0YXRlQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L1N0YXRlQ29udGV4dFwiO1xuaW1wb3J0IHsgdXNlU3RhdGljQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L1N0YXRpY0NvbnRleHRcIlxuXG5jb25zdCBMYW5kbG9yZHMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjdXJyZW50Q3VzdG9tZXIsIGRldmVsb3BlcnMsIGZpbHRlcmVkTGFuZGxvcmRCeURlc2N9ID0gdXNlU3RhdGVDb250ZXh0KClcbiAgICBjb25zdCB7IGNpdHlzIH0gPSB1c2VTdGF0aWNDb250ZXh0KClcbiAgICByZXR1cm4gKCAgIFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2N1cnJlbnRDdXN0b21lciAmJlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2R1bGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSB0aXRsZS13aXRoLW9iamVjdFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XCJEZXZlbG9wZWQgTGFuZGxvcmRzIFwifSAgXG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICB7ZmlsdGVyZWRMYW5kbG9yZEJ5RGVzYy5sZW5ndGggIT09IDAgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXY+IFxuICAgICAgICAgICAgICAgICAgICAgICA8aDU+ZmlsdGVyZWRMYW5kbG9yZEJ5RGVzYzwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21lclNlY3Rpb24gc2VjdGlvbj1cIlNlYXJjaCBSZXN1bHRcIiBjdXN0b21lckxpc3Q9e2ZpbHRlcmVkQ3VzdG9tZXJzQnlJRH0gc2Nyb2xsVG9DdXN0b21lckRldGFpbD17c2Nyb2xsVG9DdXN0b21lckRldGFpbH0vPlxuICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7IGNpdHlzLm1hcCgoaXRlbSkgPT5cbiAgICAgICAgICAgICAgICAgPExhbmRsb3JkU2VjdGlvbiBrZXk9e2BsYW5kbG9yZC1ieS0ke2l0ZW19YH0gY2l0eT17aXRlbX0gLz4pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhbmRsb3JkczsiXSwibmFtZXMiOlsiUmVhY3QiLCJMYW5kbG9yZFNlY3Rpb24iLCJ1c2VTdGF0ZUNvbnRleHQiLCJ1c2VTdGF0aWNDb250ZXh0IiwiTGFuZGxvcmRzIiwiY3VycmVudEN1c3RvbWVyIiwiZGV2ZWxvcGVycyIsImZpbHRlcmVkTGFuZGxvcmRCeURlc2MiLCJjaXR5cyIsImRpdiIsImNsYXNzTmFtZSIsImg0IiwibGVuZ3RoIiwiaDUiLCJDdXN0b21lclNlY3Rpb24iLCJzZWN0aW9uIiwiY3VzdG9tZXJMaXN0IiwiZmlsdGVyZWRDdXN0b21lcnNCeUlEIiwic2Nyb2xsVG9DdXN0b21lckRldGFpbCIsIm1hcCIsIml0ZW0iLCJjaXR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Landlord/Landlords.jsx\n"));

/***/ })

});