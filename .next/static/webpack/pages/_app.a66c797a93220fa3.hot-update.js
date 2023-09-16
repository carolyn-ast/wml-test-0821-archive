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

/***/ "./components/Customer/CustomerSection.jsx":
/*!*************************************************!*\
  !*** ./components/Customer/CustomerSection.jsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var _CustomerPreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomerPreview */ \"./components/Customer/CustomerPreview.jsx\");\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Card */ \"./node_modules/react-bootstrap/esm/Card.js\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/StateContext */ \"./context/StateContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst CustomerSection = (param)=>{\n    let { section , customerList , scrollToCustomerDetail  } = param;\n    _s();\n    const { dayDifference  } = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateContext)();\n    const [filteredCustomers, setFilteredCustomers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(customerList);\n    const handleSelect = (e)=>{\n        const value = e.target.value;\n        if (value === \"all\") {\n            setFilteredCustomers(customerList);\n        } else if (value === \"need_check\") {\n            const tempList = customerList.filter((customer)=>{\n                const date1 = new Date();\n                const date2 = new Date(customer.Submission_Date);\n                const differenceInDays = dayDifference(date1, date2);\n                if (0 < differenceInDays && differenceInDays <= 2) {\n                    return customer;\n                }\n            });\n            setFilteredCustomers(tempList);\n        } else if (value === \"follow_up\") {} else if (value === \"follow_up\") {} else if (value === \"follow_up\") {} else if (value === \"follow_up\") {}\n    };\n    // <option value=\"need_confirm\">内部匹配待确认</option>\n    // <option value=\"external\">外部房源开发租客</option>\n    // <option value=\"on_appointment\">约看房</option>\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Body, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Title, {\n                    className: \"title-with-object\",\n                    children: [\n                        \"\".concat(section, \" (\").concat(filteredCustomers.length, \")\"),\n                        section === \"Current\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Select, {\n                            className: \"dropdown-select\",\n                            size: \"sm\",\n                            onChange: handleSelect,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"all\",\n                                    children: \"All\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"need_check\",\n                                    children: \"需要录入和核对房源需求的租客\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"Yesterday\",\n                                    children: \"Yesterday Follow-up\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"see_house\",\n                                    children: \"看房客户\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"short_rent\",\n                                    children: \"Short-term rental\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"pending\",\n                                    children: \"Pending\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                    lineNumber: 45,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"section-container\",\n                    children: customerList.filter((customer1)=>filteredCustomers.some((customer2)=>customer2.UserId === customer1.UserId)).map((customer)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CustomerPreview__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            customer: customer,\n                            scrollToCustomerDetail: scrollToCustomerDetail\n                        }, customer.UserId, false, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                            lineNumber: 64,\n                            columnNumber: 29\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                    lineNumber: 59,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n            lineNumber: 44,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n        lineNumber: 43,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CustomerSection, \"5cjl3PXbWS+RAa8IlJ2mt5HP4M4=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateContext\n    ];\n});\n_c = CustomerSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomerSection);\nvar _c;\n$RefreshReg$(_c, \"CustomerSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1c3RvbWVyL0N1c3RvbWVyU2VjdGlvbi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBc0M7QUFDRTtBQUVRO0FBQ1I7QUFDcUI7QUFFN0QsTUFBTU0sa0JBQWtCLFNBQXVEO1FBQXRELEVBQUVDLFFBQU8sRUFBRUMsYUFBWSxFQUFFQyx1QkFBc0IsRUFBRTs7SUFDdEUsTUFBTSxFQUFFQyxjQUFhLEVBQUUsR0FBR0wsc0VBQWVBO0lBRXpDLE1BQU0sQ0FBQ00sbUJBQW1CQyxxQkFBcUIsR0FBR1gsK0NBQVFBLENBQUNPO0lBRTNELE1BQU1LLGVBQWUsQ0FBQ0MsSUFBTTtRQUN4QixNQUFNQyxRQUFRRCxFQUFFRSxNQUFNLENBQUNELEtBQUs7UUFDNUIsSUFBSUEsVUFBVSxPQUFPO1lBQ2pCSCxxQkFBcUJKO1FBQ3pCLE9BQU8sSUFBSU8sVUFBVSxjQUFjO1lBQy9CLE1BQU1FLFdBQVdULGFBQWFVLE1BQU0sQ0FBQyxDQUFDQyxXQUFhO2dCQUMvQyxNQUFNQyxRQUFRLElBQUlDO2dCQUNsQixNQUFNQyxRQUFRLElBQUlELEtBQUtGLFNBQVNJLGVBQWU7Z0JBRS9DLE1BQU1DLG1CQUFtQmQsY0FBY1UsT0FBT0U7Z0JBQzlDLElBQUksSUFBSUUsb0JBQW9CQSxvQkFBb0IsR0FBRTtvQkFDOUMsT0FBT0w7Z0JBQ1gsQ0FBQztZQUNMO1lBQ0FQLHFCQUFxQks7UUFDekIsT0FBTyxJQUFJRixVQUFTLGFBQWMsQ0FFbEMsT0FBTSxJQUFJQSxVQUFTLGFBQWMsQ0FFakMsT0FBTSxJQUFJQSxVQUFTLGFBQWMsQ0FFakMsT0FBTSxJQUFJQSxVQUFTLGFBQWMsQ0FFakMsQ0FBQztJQUNMO0lBRUEsZ0RBQWdEO0lBQ2hELDZDQUE2QztJQUM3Qyw4Q0FBOEM7SUFDOUMscUJBQ0ksOERBQUNYLDREQUFJQTtrQkFDRCw0RUFBQ0EsaUVBQVM7OzhCQUNOLDhEQUFDQSxrRUFBVTtvQkFBQ3VCLFdBQVU7O3dCQUNoQixHQUFjaEIsT0FBWkosU0FBUSxNQUE2QixPQUF6Qkksa0JBQWtCaUIsTUFBTSxFQUFDO3dCQUN4Q3JCLFlBQVksMkJBQ1QsOERBQUNMLG1FQUFXOzRCQUFDeUIsV0FBVTs0QkFBa0JHLE1BQUs7NEJBQUtDLFVBQVVsQjs7OENBQ3pELDhEQUFDbUI7b0NBQU9qQixPQUFNOzhDQUFNOzs7Ozs7OENBQ3BCLDhEQUFDaUI7b0NBQU9qQixPQUFNOzhDQUFhOzs7Ozs7OENBQzNCLDhEQUFDaUI7b0NBQU9qQixPQUFNOzhDQUFZOzs7Ozs7OENBQzFCLDhEQUFDaUI7b0NBQU9qQixPQUFNOzhDQUFZOzs7Ozs7OENBQzFCLDhEQUFDaUI7b0NBQU9qQixPQUFNOzhDQUFhOzs7Ozs7OENBQzNCLDhEQUFDaUI7b0NBQU9qQixPQUFNOzhDQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBS3BDLDhEQUFDa0I7b0JBQUlOLFdBQVU7OEJBRVBuQixhQUFhVSxNQUFNLENBQUNnQixDQUFBQSxZQUNoQnZCLGtCQUFrQndCLElBQUksQ0FBQ0MsQ0FBQUEsWUFBYUEsVUFBVUMsTUFBTSxLQUFLSCxVQUFVRyxNQUFNLEdBQzNFQyxHQUFHLENBQUMsQ0FBQ25CLHlCQUNILDhEQUFDaEIsd0RBQWVBOzRCQUF1QmdCLFVBQVVBOzRCQUFVVix3QkFBd0JBOzJCQUE3RFUsU0FBU2tCLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9qRTtHQS9ETS9COztRQUN3QkQsa0VBQWVBOzs7S0FEdkNDO0FBaUVOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ3VzdG9tZXIvQ3VzdG9tZXJTZWN0aW9uLmpzeD82Y2VkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XG5cbmltcG9ydCBDdXN0b21lclByZXZpZXcgZnJvbSAnLi9DdXN0b21lclByZXZpZXcnO1xuaW1wb3J0IENhcmQgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NhcmQnO1xuaW1wb3J0IHsgdXNlU3RhdGVDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9TdGF0ZUNvbnRleHQnO1xuXG5jb25zdCBDdXN0b21lclNlY3Rpb24gPSAoeyBzZWN0aW9uLCBjdXN0b21lckxpc3QsIHNjcm9sbFRvQ3VzdG9tZXJEZXRhaWwgfSkgPT4ge1xuICAgIGNvbnN0IHsgZGF5RGlmZmVyZW5jZSB9ID0gdXNlU3RhdGVDb250ZXh0KClcblxuICAgIGNvbnN0IFtmaWx0ZXJlZEN1c3RvbWVycywgc2V0RmlsdGVyZWRDdXN0b21lcnNdID0gdXNlU3RhdGUoY3VzdG9tZXJMaXN0KVxuXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICBpZiAodmFsdWUgPT09IFwiYWxsXCIpIHtcbiAgICAgICAgICAgIHNldEZpbHRlcmVkQ3VzdG9tZXJzKGN1c3RvbWVyTGlzdClcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJuZWVkX2NoZWNrXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXBMaXN0ID0gY3VzdG9tZXJMaXN0LmZpbHRlcigoY3VzdG9tZXIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlMSA9IG5ldyBEYXRlKClcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlMiA9IG5ldyBEYXRlKGN1c3RvbWVyLlN1Ym1pc3Npb25fRGF0ZSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBkaWZmZXJlbmNlSW5EYXlzID0gZGF5RGlmZmVyZW5jZShkYXRlMSwgZGF0ZTIpXG4gICAgICAgICAgICAgICAgaWYgKDAgPCBkaWZmZXJlbmNlSW5EYXlzICYmIGRpZmZlcmVuY2VJbkRheXMgPD0gMil7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXN0b21lclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBzZXRGaWx0ZXJlZEN1c3RvbWVycyh0ZW1wTGlzdClcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT1cImZvbGxvd191cFwiICkge1xuICAgICAgICAgICAgXG4gICAgICAgIH1lbHNlIGlmICh2YWx1ZSA9PT1cImZvbGxvd191cFwiICkge1xuICAgICAgICAgICAgXG4gICAgICAgIH1lbHNlIGlmICh2YWx1ZSA9PT1cImZvbGxvd191cFwiICkge1xuICAgICAgICAgICAgXG4gICAgICAgIH1lbHNlIGlmICh2YWx1ZSA9PT1cImZvbGxvd191cFwiICkge1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyA8b3B0aW9uIHZhbHVlPVwibmVlZF9jb25maXJtXCI+5YaF6YOo5Yy56YWN5b6F56Gu6K6kPC9vcHRpb24+XG4gICAgLy8gPG9wdGlvbiB2YWx1ZT1cImV4dGVybmFsXCI+5aSW6YOo5oi/5rqQ5byA5Y+R56ef5a6iPC9vcHRpb24+XG4gICAgLy8gPG9wdGlvbiB2YWx1ZT1cIm9uX2FwcG9pbnRtZW50XCI+57qm55yL5oi/PC9vcHRpb24+XG4gICAgcmV0dXJuIChcbiAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICA8Q2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlIGNsYXNzTmFtZT0ndGl0bGUtd2l0aC1vYmplY3QnPlxuICAgICAgICAgICAgICAgICAgICB7YCR7c2VjdGlvbn0gKCR7ZmlsdGVyZWRDdXN0b21lcnMubGVuZ3RofSlgfVxuICAgICAgICAgICAgICAgICAgICB7c2VjdGlvbiA9PT0gJ0N1cnJlbnQnICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uU2VsZWN0IGNsYXNzTmFtZT1cImRyb3Bkb3duLXNlbGVjdFwiIHNpemU9XCJzbVwiIG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3R9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhbGxcIj5BbGw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibmVlZF9jaGVja1wiPumcgOimgeW9leWFpeWSjOaguOWvueaIv+a6kOmcgOaxgueahOenn+Wuojwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJZZXN0ZXJkYXlcIj5ZZXN0ZXJkYXkgRm9sbG93LXVwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNlZV9ob3VzZVwiPueci+aIv+WuouaItzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzaG9ydF9yZW50XCI+U2hvcnQtdGVybSByZW50YWw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicGVuZGluZ1wiPlBlbmRpbmc8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5TZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L0NhcmQuVGl0bGU+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb24tY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyTGlzdC5maWx0ZXIoY3VzdG9tZXIxID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRDdXN0b21lcnMuc29tZShjdXN0b21lcjIgPT4gY3VzdG9tZXIyLlVzZXJJZCA9PT0gY3VzdG9tZXIxLlVzZXJJZClcbiAgICAgICAgICAgICAgICAgICAgICAgICkubWFwKChjdXN0b21lcikgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tZXJQcmV2aWV3IGtleT17Y3VzdG9tZXIuVXNlcklkfSBjdXN0b21lcj17Y3VzdG9tZXJ9IHNjcm9sbFRvQ3VzdG9tZXJEZXRhaWw9e3Njcm9sbFRvQ3VzdG9tZXJEZXRhaWx9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICA8L0NhcmQ+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tZXJTZWN0aW9uOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRm9ybSIsIkN1c3RvbWVyUHJldmlldyIsIkNhcmQiLCJ1c2VTdGF0ZUNvbnRleHQiLCJDdXN0b21lclNlY3Rpb24iLCJzZWN0aW9uIiwiY3VzdG9tZXJMaXN0Iiwic2Nyb2xsVG9DdXN0b21lckRldGFpbCIsImRheURpZmZlcmVuY2UiLCJmaWx0ZXJlZEN1c3RvbWVycyIsInNldEZpbHRlcmVkQ3VzdG9tZXJzIiwiaGFuZGxlU2VsZWN0IiwiZSIsInZhbHVlIiwidGFyZ2V0IiwidGVtcExpc3QiLCJmaWx0ZXIiLCJjdXN0b21lciIsImRhdGUxIiwiRGF0ZSIsImRhdGUyIiwiU3VibWlzc2lvbl9EYXRlIiwiZGlmZmVyZW5jZUluRGF5cyIsIkJvZHkiLCJUaXRsZSIsImNsYXNzTmFtZSIsImxlbmd0aCIsIlNlbGVjdCIsInNpemUiLCJvbkNoYW5nZSIsIm9wdGlvbiIsImRpdiIsImN1c3RvbWVyMSIsInNvbWUiLCJjdXN0b21lcjIiLCJVc2VySWQiLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Customer/CustomerSection.jsx\n"));

/***/ })

});