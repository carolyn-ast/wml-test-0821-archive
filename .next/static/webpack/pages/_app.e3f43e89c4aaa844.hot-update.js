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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Dropdown */ \"./node_modules/react-bootstrap/esm/Dropdown.js\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/StateContext */ \"./context/StateContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst SearchLandlord = ()=>{\n    _s();\n    const { landlordByUser , setFilteredLandlordByDesc  } = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_2__.useStateContext)();\n    const [searchBarKeyCode, setSearchBarKeyCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"13\");\n    const onkeydownSearchDesc = (e)=>{\n        //setTextInput(e.target.value)\n        setFilteredLandlordByDesc(\"\");\n        var code = e.keyCode || e.which || e.charCode;\n        if (code == searchBarKeyCode) {\n            const searchByDesc = landlordByUser.filter((lan)=>lan.listing_describe.includes(e.target.value));\n            setFilteredLandlordByDesc(searchByDesc);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"search-bar-container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            className: \"d-inline mx-2\",\n            autoClose: \"outside\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Toggle, {\n                    id: \"dropdown-autoclose-outside\",\n                    children: \"Search Landlord\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\SearchLandlord.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Menu, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n                        href: \"#\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsSearch, {\n                                color: \"white\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\SearchLandlord.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                //value={textInput}\n                                className: \"search-input-bar\",\n                                name: \"search-bar-id\",\n                                placeholder: \"search by description\",\n                                // onChange={handleChangeSearchById}\n                                onKeyDown: onkeydownSearchDesc\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\SearchLandlord.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\SearchLandlord.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\SearchLandlord.jsx\",\n                    lineNumber: 30,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\SearchLandlord.jsx\",\n            lineNumber: 25,\n            columnNumber: 1\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\SearchLandlord.jsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, undefined);\n};\n_s(SearchLandlord, \"r/yUTWNECcU5SlZ0vDL/lH3hQSA=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_2__.useStateContext\n    ];\n});\n_c = SearchLandlord;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchLandlord);\nvar _c;\n$RefreshReg$(_c, \"SearchLandlord\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlYXJjaExhbmRsb3JkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXdDO0FBQ0U7QUFDTTtBQUNVO0FBRTFELE1BQU1LLGlCQUFpQixJQUFNOztJQUN6QixNQUFNLEVBQUVDLGVBQWMsRUFBRUMsMEJBQXlCLEVBQUUsR0FBR0gsc0VBQWVBO0lBRXRFLE1BQU0sQ0FBQ0ksa0JBQWtCQyxvQkFBb0IsR0FBRVIsK0NBQVFBLENBQUM7SUFFdkQsTUFBTVMsc0JBQXNCLENBQUNDLElBQU07UUFDL0IsOEJBQThCO1FBQzlCSiwwQkFBMEI7UUFDMUIsSUFBSUssT0FBT0QsRUFBRUUsT0FBTyxJQUFJRixFQUFFRyxLQUFLLElBQUlILEVBQUVJLFFBQVE7UUFDN0MsSUFBSUgsUUFBUUosa0JBQW1CO1lBQzNCLE1BQU1RLGVBQWVWLGVBQWVXLE1BQU0sQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxnQkFBZ0IsQ0FBQ0MsUUFBUSxDQUFDVCxFQUFFVSxNQUFNLENBQUNDLEtBQUs7WUFFaEdmLDBCQUEwQlM7UUFDOUIsQ0FBQztJQUNMO0lBRUEscUJBQ0ksOERBQUNPO1FBQUlDLFdBQVU7a0JBRXZCLDRFQUFDckIsZ0VBQVFBO1lBQUNxQixXQUFVO1lBQWdCQyxXQUFVOzs4QkFDdEMsOERBQUN0Qix1RUFBZTtvQkFBQ3dCLElBQUc7OEJBQTZCOzs7Ozs7OEJBSW5ELDhEQUFDeEIscUVBQWE7OEJBQ0EsNEVBQUNBLHFFQUFhO3dCQUFDMkIsTUFBSzs7MENBQ3BCLDhEQUFDNUIsb0RBQVFBO2dDQUFDNkIsT0FBTTs7Ozs7OzBDQUN4Qiw4REFBQ0M7Z0NBQ0dDLE1BQUs7Z0NBQ0wsbUJBQW1CO2dDQUNuQlQsV0FBVTtnQ0FDVlUsTUFBSztnQ0FDTEMsYUFBWTtnQ0FDYixvQ0FBb0M7Z0NBQ25DQyxXQUFXMUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVekI7R0E1Q0lMOztRQUNvREQsa0VBQWVBOzs7S0FEbkVDO0FBOENKLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2VhcmNoTGFuZGxvcmQuanN4PzRmMjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCc1NlYXJjaCB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Ryb3Bkb3duJztcclxuaW1wb3J0IHsgdXNlU3RhdGVDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9TdGF0ZUNvbnRleHQnO1xyXG5cclxuY29uc3QgU2VhcmNoTGFuZGxvcmQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGxhbmRsb3JkQnlVc2VyLCBzZXRGaWx0ZXJlZExhbmRsb3JkQnlEZXNjIH0gPSB1c2VTdGF0ZUNvbnRleHQoKVxyXG4gICAgXHJcbiAgIGNvbnN0IFtzZWFyY2hCYXJLZXlDb2RlLCBzZXRTZWFyY2hCYXJLZXlDb2RlXT0gdXNlU3RhdGUoJzEzJylcclxuICAgIFxyXG4gICAgY29uc3Qgb25rZXlkb3duU2VhcmNoRGVzYyA9IChlKSA9PiB7XHJcbiAgICAgICAgLy9zZXRUZXh0SW5wdXQoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgc2V0RmlsdGVyZWRMYW5kbG9yZEJ5RGVzYygnJylcclxuICAgICAgICB2YXIgY29kZSA9IGUua2V5Q29kZSB8fCBlLndoaWNoIHx8IGUuY2hhckNvZGU7XHJcbiAgICAgICAgaWYgKGNvZGUgPT0gc2VhcmNoQmFyS2V5Q29kZSApIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VhcmNoQnlEZXNjID0gbGFuZGxvcmRCeVVzZXIuZmlsdGVyKChsYW4pID0+IGxhbi5saXN0aW5nX2Rlc2NyaWJlLmluY2x1ZGVzKGUudGFyZ2V0LnZhbHVlKSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNldEZpbHRlcmVkTGFuZGxvcmRCeURlc2Moc2VhcmNoQnlEZXNjKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXItY29udGFpbmVyXCI+XHJcblxyXG48RHJvcGRvd24gY2xhc3NOYW1lPVwiZC1pbmxpbmUgbXgtMlwiIGF1dG9DbG9zZT1cIm91dHNpZGVcIj5cclxuICAgICAgICA8RHJvcGRvd24uVG9nZ2xlIGlkPVwiZHJvcGRvd24tYXV0b2Nsb3NlLW91dHNpZGVcIj5cclxuICAgICAgICBTZWFyY2ggTGFuZGxvcmRcclxuICAgICAgPC9Ecm9wZG93bi5Ub2dnbGU+XHJcblxyXG4gICAgICA8RHJvcGRvd24uTWVudSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnNTZWFyY2ggY29sb3I9XCJ3aGl0ZVwiLz5cclxuICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgIC8vdmFsdWU9e3RleHRJbnB1dH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1pbnB1dC1iYXJcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInNlYXJjaC1iYXItaWRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJzZWFyY2ggYnkgZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAvLyBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlU2VhcmNoQnlJZH1cclxuICAgICAgICAgICAgICAgIG9uS2V5RG93bj17b25rZXlkb3duU2VhcmNoRGVzY31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICBcclxuICAgICAgPC9Ecm9wZG93bi5NZW51PlxyXG4gICAgPC9Ecm9wZG93bj5cclxuXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH07XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgU2VhcmNoTGFuZGxvcmQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJCc1NlYXJjaCIsIkRyb3Bkb3duIiwidXNlU3RhdGVDb250ZXh0IiwiU2VhcmNoTGFuZGxvcmQiLCJsYW5kbG9yZEJ5VXNlciIsInNldEZpbHRlcmVkTGFuZGxvcmRCeURlc2MiLCJzZWFyY2hCYXJLZXlDb2RlIiwic2V0U2VhcmNoQmFyS2V5Q29kZSIsIm9ua2V5ZG93blNlYXJjaERlc2MiLCJlIiwiY29kZSIsImtleUNvZGUiLCJ3aGljaCIsImNoYXJDb2RlIiwic2VhcmNoQnlEZXNjIiwiZmlsdGVyIiwibGFuIiwibGlzdGluZ19kZXNjcmliZSIsImluY2x1ZGVzIiwidGFyZ2V0IiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJhdXRvQ2xvc2UiLCJUb2dnbGUiLCJpZCIsIk1lbnUiLCJJdGVtIiwiaHJlZiIsImNvbG9yIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInBsYWNlaG9sZGVyIiwib25LZXlEb3duIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SearchLandlord.jsx\n"));

/***/ })

});