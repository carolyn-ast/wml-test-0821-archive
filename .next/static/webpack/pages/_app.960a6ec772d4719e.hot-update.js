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

/***/ "./components/SearchLandlord.jsx":
/*!***************************************!*\
  !*** ./components/SearchLandlord.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Dropdown */ \"./node_modules/react-bootstrap/esm/Dropdown.js\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/StateContext */ \"./context/StateContext.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst SearchLandlord = ()=>{\n    _s();\n    //const { data: session } = useSession()\n    const { getLandlordsByUser , landlordByUser , setFilteredLandlordByDesc  } = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_2__.useStateContext)();\n    getLandlordsByUser();\n    const [searchBarKeyCode, setSearchBarKeyCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"13\");\n    const onkeydownSearchDesc = (e)=>{\n        //setTextInput(e.target.value)\n        setFilteredLandlordByDesc(\"\");\n        var code = e.keyCode || e.which || e.charCode;\n        if (code == searchBarKeyCode) {\n            const searchByDesc = landlordByUser.filter((lan)=>lan.listing_describe.includes(e.target.value));\n            setFilteredLandlordByDesc(searchByDesc);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"search-bar-container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            className: \"d-inline mx-2\",\n            autoClose: \"outside\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Toggle, {\n                    id: \"dropdown-autoclose-outside\",\n                    children: \"Search Landlord\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\SearchLandlord.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Menu, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Item, {\n                        href: \"#\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsSearch, {\n                                color: \"white\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\SearchLandlord.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                //value={textInput}\n                                className: \"search-input-bar\",\n                                name: \"search-bar-id\",\n                                placeholder: \"search by description\",\n                                // onChange={handleChangeSearchById}\n                                onKeyDown: onkeydownSearchDesc\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\SearchLandlord.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\SearchLandlord.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\SearchLandlord.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\SearchLandlord.jsx\",\n            lineNumber: 30,\n            columnNumber: 1\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\SearchLandlord.jsx\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, undefined);\n};\n_s(SearchLandlord, \"tZ7tuXer5K1N/lE2/v/srtNJHv0=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_2__.useStateContext\n    ];\n});\n_c = SearchLandlord;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchLandlord);\nvar _c;\n$RefreshReg$(_c, \"SearchLandlord\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlYXJjaExhbmRsb3JkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0M7QUFDRTtBQUNNO0FBQ1U7QUFLakM7QUFDekIsTUFBTVEsaUJBQWlCLElBQU07O0lBQ3pCLHdDQUF3QztJQUN4QyxNQUFNLEVBQUVDLG1CQUFrQixFQUFFQyxlQUFjLEVBQUVDLDBCQUF5QixFQUFFLEdBQUdQLHNFQUFlQTtJQUN6Rks7SUFDRCxNQUFNLENBQUNHLGtCQUFrQkMsb0JBQW9CLEdBQUVaLCtDQUFRQSxDQUFDO0lBRXZELE1BQU1hLHNCQUFzQixDQUFDQyxJQUFNO1FBQy9CLDhCQUE4QjtRQUM5QkosMEJBQTBCO1FBQzFCLElBQUlLLE9BQU9ELEVBQUVFLE9BQU8sSUFBSUYsRUFBRUcsS0FBSyxJQUFJSCxFQUFFSSxRQUFRO1FBQzdDLElBQUlILFFBQVFKLGtCQUFtQjtZQUMzQixNQUFNUSxlQUFlVixlQUFlVyxNQUFNLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsZ0JBQWdCLENBQUNDLFFBQVEsQ0FBQ1QsRUFBRVUsTUFBTSxDQUFDQyxLQUFLO1lBRWhHZiwwQkFBMEJTO1FBQzlCLENBQUM7SUFDTDtJQUVBLHFCQUNJLDhEQUFDTztRQUFJQyxXQUFVO2tCQUV2Qiw0RUFBQ3pCLGdFQUFRQTtZQUFDeUIsV0FBVTtZQUFnQkMsV0FBVTs7OEJBQ3RDLDhEQUFDMUIsdUVBQWU7b0JBQUM0QixJQUFHOzhCQUE2Qjs7Ozs7OzhCQUluRCw4REFBQzVCLHFFQUFhOzhCQUNBLDRFQUFDQSxxRUFBYTt3QkFBQytCLE1BQUs7OzBDQUNwQiw4REFBQ2hDLG9EQUFRQTtnQ0FBQ2lDLE9BQU07Ozs7OzswQ0FDeEIsOERBQUNDO2dDQUNHQyxNQUFLO2dDQUNMLG1CQUFtQjtnQ0FDbkJULFdBQVU7Z0NBQ1ZVLE1BQUs7Z0NBQ0xDLGFBQVk7Z0NBQ2Isb0NBQW9DO2dDQUNuQ0MsV0FBVzFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVXpCO0dBN0NJTjs7UUFFd0VKLGtFQUFlQTs7O0tBRnZGSTtBQStDSiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NlYXJjaExhbmRsb3JkLmpzeD80ZjI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnNTZWFyY2ggfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Ecm9wZG93bic7XHJcbmltcG9ydCB7IHVzZVN0YXRlQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvU3RhdGVDb250ZXh0JztcclxuaW1wb3J0IHtcclxuICAgIHNpZ25JbixcclxuICAgIHVzZVNlc3Npb24sXHJcbiAgICBnZXRTZXNzaW9uXHJcbn0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcclxuY29uc3QgU2VhcmNoTGFuZGxvcmQgPSAoKSA9PiB7XHJcbiAgICAvL2NvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpXHJcbiAgICBjb25zdCB7IGdldExhbmRsb3Jkc0J5VXNlciwgbGFuZGxvcmRCeVVzZXIsIHNldEZpbHRlcmVkTGFuZGxvcmRCeURlc2MgfSA9IHVzZVN0YXRlQ29udGV4dCgpXHJcbiAgICBnZXRMYW5kbG9yZHNCeVVzZXIoKVxyXG4gICBjb25zdCBbc2VhcmNoQmFyS2V5Q29kZSwgc2V0U2VhcmNoQmFyS2V5Q29kZV09IHVzZVN0YXRlKCcxMycpXHJcbiAgICBcclxuICAgIGNvbnN0IG9ua2V5ZG93blNlYXJjaERlc2MgPSAoZSkgPT4ge1xyXG4gICAgICAgIC8vc2V0VGV4dElucHV0KGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgIHNldEZpbHRlcmVkTGFuZGxvcmRCeURlc2MoJycpXHJcbiAgICAgICAgdmFyIGNvZGUgPSBlLmtleUNvZGUgfHwgZS53aGljaCB8fCBlLmNoYXJDb2RlO1xyXG4gICAgICAgIGlmIChjb2RlID09IHNlYXJjaEJhcktleUNvZGUgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlYXJjaEJ5RGVzYyA9IGxhbmRsb3JkQnlVc2VyLmZpbHRlcigobGFuKSA9PiBsYW4ubGlzdGluZ19kZXNjcmliZS5pbmNsdWRlcyhlLnRhcmdldC52YWx1ZSkpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXRGaWx0ZXJlZExhbmRsb3JkQnlEZXNjKHNlYXJjaEJ5RGVzYylcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYmFyLWNvbnRhaW5lclwiPlxyXG5cclxuPERyb3Bkb3duIGNsYXNzTmFtZT1cImQtaW5saW5lIG14LTJcIiBhdXRvQ2xvc2U9XCJvdXRzaWRlXCI+XHJcbiAgICAgICAgPERyb3Bkb3duLlRvZ2dsZSBpZD1cImRyb3Bkb3duLWF1dG9jbG9zZS1vdXRzaWRlXCI+XHJcbiAgICAgICAgU2VhcmNoIExhbmRsb3JkXHJcbiAgICAgIDwvRHJvcGRvd24uVG9nZ2xlPlxyXG5cclxuICAgICAgPERyb3Bkb3duLk1lbnUgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJzU2VhcmNoIGNvbG9yPVwid2hpdGVcIi8+XHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICAvL3ZhbHVlPXt0ZXh0SW5wdXR9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2gtaW5wdXQtYmFyXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJzZWFyY2gtYmFyLWlkXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwic2VhcmNoIGJ5IGRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgLy8gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVNlYXJjaEJ5SWR9XHJcbiAgICAgICAgICAgICAgICBvbktleURvd249e29ua2V5ZG93blNlYXJjaERlc2N9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgXHJcbiAgICAgIDwvRHJvcGRvd24uTWVudT5cclxuICAgIDwvRHJvcGRvd24+XHJcblxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9O1xyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IFNlYXJjaExhbmRsb3JkOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQnNTZWFyY2giLCJEcm9wZG93biIsInVzZVN0YXRlQ29udGV4dCIsInNpZ25JbiIsInVzZVNlc3Npb24iLCJnZXRTZXNzaW9uIiwiU2VhcmNoTGFuZGxvcmQiLCJnZXRMYW5kbG9yZHNCeVVzZXIiLCJsYW5kbG9yZEJ5VXNlciIsInNldEZpbHRlcmVkTGFuZGxvcmRCeURlc2MiLCJzZWFyY2hCYXJLZXlDb2RlIiwic2V0U2VhcmNoQmFyS2V5Q29kZSIsIm9ua2V5ZG93blNlYXJjaERlc2MiLCJlIiwiY29kZSIsImtleUNvZGUiLCJ3aGljaCIsImNoYXJDb2RlIiwic2VhcmNoQnlEZXNjIiwiZmlsdGVyIiwibGFuIiwibGlzdGluZ19kZXNjcmliZSIsImluY2x1ZGVzIiwidGFyZ2V0IiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJhdXRvQ2xvc2UiLCJUb2dnbGUiLCJpZCIsIk1lbnUiLCJJdGVtIiwiaHJlZiIsImNvbG9yIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInBsYWNlaG9sZGVyIiwib25LZXlEb3duIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SearchLandlord.jsx\n"));

/***/ })

});