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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Dropdown */ \"./node_modules/react-bootstrap/esm/Dropdown.js\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/StateContext */ \"./context/StateContext.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_StaticContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/StaticContext */ \"./context/StaticContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst SearchLandlord = ()=>{\n    _s();\n    //const { data: session } = useSession()\n    const { users  } = (0,_context_StaticContext__WEBPACK_IMPORTED_MODULE_4__.useStaticContext)();\n    const current_user = users[\"chtecdev200@gmail.com\"];\n    //const current_user =users[session.user.email]\n    const { getLandlordsByUser , landlordByUser , setFilteredLandlordByDesc  } = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_2__.useStateContext)();\n    getLandlordsByUser();\n    const [searchBarKeyCode, setSearchBarKeyCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"13\");\n    const onkeydownSearchDesc = (e)=>{\n        //setTextInput(e.target.value)\n        setFilteredLandlordByDesc(\"\");\n        var code = e.keyCode || e.which || e.charCode;\n        if (code == searchBarKeyCode) {\n            const searchByDesc = landlordByUser.filter((lan)=>lan.listing_describe.includes(e.target.value));\n            setFilteredLandlordByDesc(searchByDesc);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"search-bar-container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            className: \"d-inline mx-2\",\n            autoClose: \"outside\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Toggle, {\n                    id: \"dropdown-autoclose-outside\",\n                    children: \"Search Landlord\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\SearchLandlord.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Menu, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n                        href: \"#\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_6__.BsSearch, {\n                                color: \"white\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\SearchLandlord.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                //value={textInput}\n                                className: \"search-input-bar\",\n                                name: \"search-bar-id\",\n                                placeholder: \"search by description\",\n                                // onChange={handleChangeSearchById}\n                                onKeyDown: onkeydownSearchDesc\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\SearchLandlord.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\SearchLandlord.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\SearchLandlord.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\SearchLandlord.jsx\",\n            lineNumber: 34,\n            columnNumber: 1\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\SearchLandlord.jsx\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, undefined);\n};\n_s(SearchLandlord, \"9YftUGIBHh3Ygsmrp7g+bF+iFFk=\", false, function() {\n    return [\n        _context_StaticContext__WEBPACK_IMPORTED_MODULE_4__.useStaticContext,\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_2__.useStateContext\n    ];\n});\n_c = SearchLandlord;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchLandlord);\nvar _c;\n$RefreshReg$(_c, \"SearchLandlord\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlYXJjaExhbmRsb3JkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0U7QUFDTTtBQUNVO0FBS2pDO0FBQ21DO0FBQzVELE1BQU1TLGlCQUFpQixJQUFNOztJQUN6Qix3Q0FBd0M7SUFDeEMsTUFBTSxFQUFDQyxNQUFLLEVBQUUsR0FBR0Ysd0VBQWdCQTtJQUNqQyxNQUFNRyxlQUFlRCxLQUFLLENBQUMsd0JBQXdCO0lBQ25ELCtDQUErQztJQUMvQyxNQUFNLEVBQUVFLG1CQUFrQixFQUFFQyxlQUFjLEVBQUVDLDBCQUF5QixFQUFFLEdBQUdWLHNFQUFlQTtJQUN6RlE7SUFDRCxNQUFNLENBQUNHLGtCQUFrQkMsb0JBQW9CLEdBQUVmLCtDQUFRQSxDQUFDO0lBRXZELE1BQU1nQixzQkFBc0IsQ0FBQ0MsSUFBTTtRQUMvQiw4QkFBOEI7UUFDOUJKLDBCQUEwQjtRQUMxQixJQUFJSyxPQUFPRCxFQUFFRSxPQUFPLElBQUlGLEVBQUVHLEtBQUssSUFBSUgsRUFBRUksUUFBUTtRQUM3QyxJQUFJSCxRQUFRSixrQkFBbUI7WUFDM0IsTUFBTVEsZUFBZVYsZUFBZVcsTUFBTSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLGdCQUFnQixDQUFDQyxRQUFRLENBQUNULEVBQUVVLE1BQU0sQ0FBQ0MsS0FBSztZQUVoR2YsMEJBQTBCUztRQUM5QixDQUFDO0lBQ0w7SUFFQSxxQkFDSSw4REFBQ087UUFBSUMsV0FBVTtrQkFFdkIsNEVBQUM1QixnRUFBUUE7WUFBQzRCLFdBQVU7WUFBZ0JDLFdBQVU7OzhCQUN0Qyw4REFBQzdCLHVFQUFlO29CQUFDK0IsSUFBRzs4QkFBNkI7Ozs7Ozs4QkFJbkQsOERBQUMvQixxRUFBYTs4QkFDQSw0RUFBQ0EscUVBQWE7d0JBQUNrQyxNQUFLOzswQ0FDcEIsOERBQUNuQyxvREFBUUE7Z0NBQUNvQyxPQUFNOzs7Ozs7MENBQ3hCLDhEQUFDQztnQ0FDR0MsTUFBSztnQ0FDTCxtQkFBbUI7Z0NBQ25CVCxXQUFVO2dDQUNWVSxNQUFLO2dDQUNMQyxhQUFZO2dDQUNiLG9DQUFvQztnQ0FDbkNDLFdBQVcxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVV6QjtHQWhESVI7O1FBRWVELG9FQUFnQkE7UUFHeUNKLGtFQUFlQTs7O0tBTHZGSztBQWtESiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NlYXJjaExhbmRsb3JkLmpzeD80ZjI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnNTZWFyY2ggfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Ecm9wZG93bic7XHJcbmltcG9ydCB7IHVzZVN0YXRlQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvU3RhdGVDb250ZXh0JztcclxuaW1wb3J0IHtcclxuICAgIHNpZ25JbixcclxuICAgIHVzZVNlc3Npb24sXHJcbiAgICBnZXRTZXNzaW9uXHJcbn0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU3RhdGljQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvU3RhdGljQ29udGV4dCc7XHJcbmNvbnN0IFNlYXJjaExhbmRsb3JkID0gKCkgPT4ge1xyXG4gICAgLy9jb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKVxyXG4gICAgY29uc3Qge3VzZXJzIH0gPSB1c2VTdGF0aWNDb250ZXh0KClcclxuICAgIGNvbnN0IGN1cnJlbnRfdXNlciA9IHVzZXJzW1wiY2h0ZWNkZXYyMDBAZ21haWwuY29tXCJdXHJcbiAgICAvL2NvbnN0IGN1cnJlbnRfdXNlciA9dXNlcnNbc2Vzc2lvbi51c2VyLmVtYWlsXVxyXG4gICAgY29uc3QgeyBnZXRMYW5kbG9yZHNCeVVzZXIsIGxhbmRsb3JkQnlVc2VyLCBzZXRGaWx0ZXJlZExhbmRsb3JkQnlEZXNjIH0gPSB1c2VTdGF0ZUNvbnRleHQoKVxyXG4gICAgZ2V0TGFuZGxvcmRzQnlVc2VyKClcclxuICAgY29uc3QgW3NlYXJjaEJhcktleUNvZGUsIHNldFNlYXJjaEJhcktleUNvZGVdPSB1c2VTdGF0ZSgnMTMnKVxyXG4gICAgXHJcbiAgICBjb25zdCBvbmtleWRvd25TZWFyY2hEZXNjID0gKGUpID0+IHtcclxuICAgICAgICAvL3NldFRleHRJbnB1dChlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICBzZXRGaWx0ZXJlZExhbmRsb3JkQnlEZXNjKCcnKVxyXG4gICAgICAgIHZhciBjb2RlID0gZS5rZXlDb2RlIHx8IGUud2hpY2ggfHwgZS5jaGFyQ29kZTtcclxuICAgICAgICBpZiAoY29kZSA9PSBzZWFyY2hCYXJLZXlDb2RlICkge1xyXG4gICAgICAgICAgICBjb25zdCBzZWFyY2hCeURlc2MgPSBsYW5kbG9yZEJ5VXNlci5maWx0ZXIoKGxhbikgPT4gbGFuLmxpc3RpbmdfZGVzY3JpYmUuaW5jbHVkZXMoZS50YXJnZXQudmFsdWUpKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0RmlsdGVyZWRMYW5kbG9yZEJ5RGVzYyhzZWFyY2hCeURlc2MpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWJhci1jb250YWluZXJcIj5cclxuXHJcbjxEcm9wZG93biBjbGFzc05hbWU9XCJkLWlubGluZSBteC0yXCIgYXV0b0Nsb3NlPVwib3V0c2lkZVwiPlxyXG4gICAgICAgIDxEcm9wZG93bi5Ub2dnbGUgaWQ9XCJkcm9wZG93bi1hdXRvY2xvc2Utb3V0c2lkZVwiPlxyXG4gICAgICAgIFNlYXJjaCBMYW5kbG9yZFxyXG4gICAgICA8L0Ryb3Bkb3duLlRvZ2dsZT5cclxuXHJcbiAgICAgIDxEcm9wZG93bi5NZW51ID5cclxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCc1NlYXJjaCBjb2xvcj1cIndoaXRlXCIvPlxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgLy92YWx1ZT17dGV4dElucHV0fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWlucHV0LWJhclwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwic2VhcmNoLWJhci1pZFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInNlYXJjaCBieSBkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VTZWFyY2hCeUlkfVxyXG4gICAgICAgICAgICAgICAgb25LZXlEb3duPXtvbmtleWRvd25TZWFyY2hEZXNjfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgIFxyXG4gICAgICA8L0Ryb3Bkb3duLk1lbnU+XHJcbiAgICA8L0Ryb3Bkb3duPlxyXG5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfTtcclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBTZWFyY2hMYW5kbG9yZDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJzU2VhcmNoIiwiRHJvcGRvd24iLCJ1c2VTdGF0ZUNvbnRleHQiLCJzaWduSW4iLCJ1c2VTZXNzaW9uIiwiZ2V0U2Vzc2lvbiIsInVzZVN0YXRpY0NvbnRleHQiLCJTZWFyY2hMYW5kbG9yZCIsInVzZXJzIiwiY3VycmVudF91c2VyIiwiZ2V0TGFuZGxvcmRzQnlVc2VyIiwibGFuZGxvcmRCeVVzZXIiLCJzZXRGaWx0ZXJlZExhbmRsb3JkQnlEZXNjIiwic2VhcmNoQmFyS2V5Q29kZSIsInNldFNlYXJjaEJhcktleUNvZGUiLCJvbmtleWRvd25TZWFyY2hEZXNjIiwiZSIsImNvZGUiLCJrZXlDb2RlIiwid2hpY2giLCJjaGFyQ29kZSIsInNlYXJjaEJ5RGVzYyIsImZpbHRlciIsImxhbiIsImxpc3RpbmdfZGVzY3JpYmUiLCJpbmNsdWRlcyIsInRhcmdldCIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwiYXV0b0Nsb3NlIiwiVG9nZ2xlIiwiaWQiLCJNZW51IiwiSXRlbSIsImhyZWYiLCJjb2xvciIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsIm9uS2V5RG93biJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SearchLandlord.jsx\n"));

/***/ })

});