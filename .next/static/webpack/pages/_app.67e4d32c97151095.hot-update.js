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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var _CustomerPreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomerPreview */ \"./components/Customer/CustomerPreview.jsx\");\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Card */ \"./node_modules/react-bootstrap/esm/Card.js\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/StateContext */ \"./context/StateContext.js\");\n/* harmony import */ var _lib_timezone_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/timezone_utils */ \"./lib/timezone_utils.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst CustomerSection = (param)=>{\n    let { section , customerList , scrollToCustomerDetail  } = param;\n    _s();\n    const { dayDifference  } = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateContext)();\n    const [filteredCustomers, setFilteredCustomers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(customerList);\n    const handleSelect = (e)=>{\n        const value = e.target.value;\n        if (value === \"all\") {\n            setFilteredCustomers(customerList);\n        } else if (value === \"need_check\") {\n            const tempList = customerList.filter((customer)=>{\n                const date1 = new Date();\n                const date2 = new Date(customer.Submission_Date);\n                const differenceInDays = dayDifference(date1, date2);\n                if (0 < differenceInDays && differenceInDays <= 2) {\n                    return customer;\n                }\n            });\n            setFilteredCustomers(tempList);\n        } else if (value === \"follow_up\") {\n            const tempList_follow_up = customerList.filter((customer)=>{\n                // const OneDay = new Date().getTime() + (1 * 24 * 60 * 60 * 1000)\n                const date = dayDifference(new Date(), new Date(customer.LastUpdateTime));\n                if (datedate <= 1) {\n                    return customer;\n                }\n            });\n            setFilteredCustomers(tempList_follow_up);\n        } else if (value === \"see_house\") {\n            const tempList_see_house = customerList.filter((customer)=>{\n                if (customer.rent_status === \"看房客户\") {\n                    return customer;\n                }\n            });\n            //ordering results by the nearest rate date to later\n            tempList_see_house.sort(function(a, b) {\n                return new Date(b.rent_date) - new Date(a.rent_date);\n            });\n            setFilteredCustomers(tempList_see_house);\n        } else if (value === \"short_rent\") {\n            const tempList_short_rent = customerList.filter((customer)=>{\n                if (customer.rent_duration !== \"长租1年\") {\n                    return customer;\n                }\n            });\n            tempList_short_rent.sort(function(a, b) {\n                return new Date(a.rent_date) - new Date(b.rent_date);\n            });\n            setFilteredCustomers(tempList_short_rent);\n        } else if (value === \"pending\") {\n            const tempList_pending = customerList.filter((customer)=>{\n                if (customer.rent_status === \"PENDING\") {\n                    return customer;\n                }\n            });\n            //order by price from high to low and then based on urgency: most urgent to least.\n            tempList_pending.sort((a, b)=>parseFloat(b.Budget_price) - parseFloat(a.Budget_price));\n            setFilteredCustomers(tempList_pending);\n        }\n    };\n    // <option value=\"need_confirm\">内部匹配待确认</option>\n    // <option value=\"external\">外部房源开发租客</option>\n    // <option value=\"on_appointment\">约看房</option>\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Body, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Title, {\n                    className: \"title-with-object\",\n                    children: [\n                        \"\".concat(section, \" (\").concat(filteredCustomers.length, \")\"),\n                        section === \"Current\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Select, {\n                            className: \"dropdown-select\",\n                            size: \"sm\",\n                            onChange: handleSelect,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"all\",\n                                    children: \"All\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"need_check\",\n                                    children: \"需要录入和核对房源需求的租客\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"follow_up\",\n                                    children: \"Yesterday Follow-up\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"see_house\",\n                                    children: \"看房客户\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"short_rent\",\n                                    children: \"Short-term rental\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"pending\",\n                                    children: \"Pending\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                            lineNumber: 81,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                    lineNumber: 78,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"section-container\",\n                    children: customerList.filter((customer1)=>filteredCustomers.some((customer2)=>customer2.UserId === customer1.UserId)).map((customer)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CustomerPreview__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            customer: customer,\n                            scrollToCustomerDetail: scrollToCustomerDetail\n                        }, customer.UserId, false, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                            lineNumber: 97,\n                            columnNumber: 29\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                    lineNumber: 92,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n            lineNumber: 77,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n        lineNumber: 76,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CustomerSection, \"5cjl3PXbWS+RAa8IlJ2mt5HP4M4=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateContext\n    ];\n});\n_c = CustomerSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomerSection);\nvar _c;\n$RefreshReg$(_c, \"CustomerSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1c3RvbWVyL0N1c3RvbWVyU2VjdGlvbi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ0U7QUFFUTtBQUNSO0FBQ3FCO0FBQ0E7QUFFN0QsTUFBTU8sa0JBQWtCLFNBQXVEO1FBQXRELEVBQUVDLFFBQU8sRUFBRUMsYUFBWSxFQUFFQyx1QkFBc0IsRUFBRTs7SUFDdEUsTUFBTSxFQUFFQyxjQUFhLEVBQUUsR0FBR04sc0VBQWVBO0lBRXpDLE1BQU0sQ0FBQ08sbUJBQW1CQyxxQkFBcUIsR0FBR1osK0NBQVFBLENBQUNRO0lBRTNELE1BQU1LLGVBQWUsQ0FBQ0MsSUFBTTtRQUN4QixNQUFNQyxRQUFRRCxFQUFFRSxNQUFNLENBQUNELEtBQUs7UUFDNUIsSUFBSUEsVUFBVSxPQUFPO1lBQ2pCSCxxQkFBcUJKO1FBQ3pCLE9BQU8sSUFBSU8sVUFBVSxjQUFjO1lBQy9CLE1BQU1FLFdBQVdULGFBQWFVLE1BQU0sQ0FBQyxDQUFDQyxXQUFhO2dCQUMvQyxNQUFNQyxRQUFRLElBQUlDO2dCQUNsQixNQUFNQyxRQUFRLElBQUlELEtBQUtGLFNBQVNJLGVBQWU7Z0JBRS9DLE1BQU1DLG1CQUFtQmQsY0FBY1UsT0FBT0U7Z0JBQzlDLElBQUksSUFBSUUsb0JBQW9CQSxvQkFBb0IsR0FBRTtvQkFDOUMsT0FBT0w7Z0JBQ1gsQ0FBQztZQUNMO1lBQ0FQLHFCQUFxQks7UUFDekIsT0FBTyxJQUFJRixVQUFTLGFBQWM7WUFDOUIsTUFBTVUscUJBQXFCakIsYUFBYVUsTUFBTSxDQUFDLENBQUNDLFdBQWE7Z0JBQ3pELGtFQUFrRTtnQkFDbEUsTUFBTU8sT0FBT2hCLGNBQWMsSUFBSVcsUUFBUSxJQUFJQSxLQUFLRixTQUFTUSxjQUFjO2dCQUN2RSxJQUFJQyxZQUFZLEdBQUc7b0JBQ2YsT0FBT1Q7Z0JBQ1gsQ0FBQztZQUNMO1lBQ0FQLHFCQUFxQmE7UUFFekIsT0FBTSxJQUFJVixVQUFTLGFBQWM7WUFDN0IsTUFBTWMscUJBQW9CckIsYUFBYVUsTUFBTSxDQUFDLENBQUNDLFdBQWE7Z0JBQ3hELElBQUlBLFNBQVNXLFdBQVcsS0FBRyxRQUFRO29CQUMvQixPQUFPWDtnQkFDWCxDQUFDO1lBQ0w7WUFDQSxvREFBb0Q7WUFDcERVLG1CQUFtQkUsSUFBSSxDQUFDLFNBQVNDLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO2dCQUNqQyxPQUFPLElBQUlaLEtBQUtZLEVBQUVDLFNBQVMsSUFBSSxJQUFJYixLQUFLVyxFQUFFRSxTQUFTO1lBQ3JEO1lBQ0Z0QixxQkFBcUJpQjtRQUN6QixPQUFNLElBQUlkLFVBQVMsY0FBZTtZQUM5QixNQUFNb0Isc0JBQXNCM0IsYUFBYVUsTUFBTSxDQUFDLENBQUNDLFdBQWE7Z0JBQzFELElBQUlBLFNBQVNpQixhQUFhLEtBQUcsUUFBUTtvQkFDakMsT0FBT2pCO2dCQUNYLENBQUM7WUFDTDtZQUNBZ0Isb0JBQW9CSixJQUFJLENBQUMsU0FBU0MsQ0FBQyxFQUFDQyxDQUFDLEVBQUM7Z0JBQ2xDLE9BQU8sSUFBSVosS0FBS1csRUFBRUUsU0FBUyxJQUFJLElBQUliLEtBQUtZLEVBQUVDLFNBQVM7WUFDckQ7WUFDRnRCLHFCQUFxQnVCO1FBQ3pCLE9BQU0sSUFBSXBCLFVBQVMsV0FBWTtZQUMzQixNQUFNc0IsbUJBQW1CN0IsYUFBYVUsTUFBTSxDQUFDLENBQUNDLFdBQWE7Z0JBQ3ZELElBQUlBLFNBQVNXLFdBQVcsS0FBRyxXQUFXO29CQUNsQyxPQUFPWDtnQkFDWCxDQUFDO1lBQ0w7WUFDQSxrRkFBa0Y7WUFDbEZrQixpQkFBaUJOLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFNSyxXQUFXTCxFQUFFTSxZQUFZLElBQUlELFdBQVdOLEVBQUVPLFlBQVk7WUFDdEYzQixxQkFBcUJ5QjtRQUN6QixDQUFDO0lBQ0w7SUFFQSxnREFBZ0Q7SUFDaEQsNkNBQTZDO0lBQzdDLDhDQUE4QztJQUM5QyxxQkFDSSw4REFBQ2xDLDREQUFJQTtrQkFDRCw0RUFBQ0EsaUVBQVM7OzhCQUNOLDhEQUFDQSxrRUFBVTtvQkFBQ3VDLFdBQVU7O3dCQUNoQixHQUFjL0IsT0FBWkosU0FBUSxNQUE2QixPQUF6Qkksa0JBQWtCZ0MsTUFBTSxFQUFDO3dCQUN4Q3BDLFlBQVksMkJBQ1QsOERBQUNOLG1FQUFXOzRCQUFDeUMsV0FBVTs0QkFBa0JHLE1BQUs7NEJBQUtDLFVBQVVqQzs7OENBQ3pELDhEQUFDa0M7b0NBQU9oQyxPQUFNOzhDQUFNOzs7Ozs7OENBQ3BCLDhEQUFDZ0M7b0NBQU9oQyxPQUFNOzhDQUFhOzs7Ozs7OENBQzNCLDhEQUFDZ0M7b0NBQU9oQyxPQUFNOzhDQUFZOzs7Ozs7OENBQzFCLDhEQUFDZ0M7b0NBQU9oQyxPQUFNOzhDQUFZOzs7Ozs7OENBQzFCLDhEQUFDZ0M7b0NBQU9oQyxPQUFNOzhDQUFhOzs7Ozs7OENBQzNCLDhEQUFDZ0M7b0NBQU9oQyxPQUFNOzhDQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBS3BDLDhEQUFDaUM7b0JBQUlOLFdBQVU7OEJBRVBsQyxhQUFhVSxNQUFNLENBQUMrQixDQUFBQSxZQUNoQnRDLGtCQUFrQnVDLElBQUksQ0FBQ0MsQ0FBQUEsWUFBYUEsVUFBVUMsTUFBTSxLQUFLSCxVQUFVRyxNQUFNLEdBQzNFQyxHQUFHLENBQUMsQ0FBQ2xDLHlCQUNILDhEQUFDakIsd0RBQWVBOzRCQUF1QmlCLFVBQVVBOzRCQUFVVix3QkFBd0JBOzJCQUE3RFUsU0FBU2lDLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9qRTtHQS9GTTlDOztRQUN3QkYsa0VBQWVBOzs7S0FEdkNFO0FBaUdOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ3VzdG9tZXIvQ3VzdG9tZXJTZWN0aW9uLmpzeD82Y2VkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XG5cbmltcG9ydCBDdXN0b21lclByZXZpZXcgZnJvbSAnLi9DdXN0b21lclByZXZpZXcnO1xuaW1wb3J0IENhcmQgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NhcmQnO1xuaW1wb3J0IHsgdXNlU3RhdGVDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9TdGF0ZUNvbnRleHQnO1xuaW1wb3J0IHsgdGltZXpvbmVGb3JtYXR0ZXIgfSBmcm9tICcuLi8uLi9saWIvdGltZXpvbmVfdXRpbHMnO1xuXG5jb25zdCBDdXN0b21lclNlY3Rpb24gPSAoeyBzZWN0aW9uLCBjdXN0b21lckxpc3QsIHNjcm9sbFRvQ3VzdG9tZXJEZXRhaWwgfSkgPT4ge1xuICAgIGNvbnN0IHsgZGF5RGlmZmVyZW5jZSB9ID0gdXNlU3RhdGVDb250ZXh0KClcblxuICAgIGNvbnN0IFtmaWx0ZXJlZEN1c3RvbWVycywgc2V0RmlsdGVyZWRDdXN0b21lcnNdID0gdXNlU3RhdGUoY3VzdG9tZXJMaXN0KVxuXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICBpZiAodmFsdWUgPT09IFwiYWxsXCIpIHtcbiAgICAgICAgICAgIHNldEZpbHRlcmVkQ3VzdG9tZXJzKGN1c3RvbWVyTGlzdClcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJuZWVkX2NoZWNrXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXBMaXN0ID0gY3VzdG9tZXJMaXN0LmZpbHRlcigoY3VzdG9tZXIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlMSA9IG5ldyBEYXRlKClcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlMiA9IG5ldyBEYXRlKGN1c3RvbWVyLlN1Ym1pc3Npb25fRGF0ZSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBkaWZmZXJlbmNlSW5EYXlzID0gZGF5RGlmZmVyZW5jZShkYXRlMSwgZGF0ZTIpXG4gICAgICAgICAgICAgICAgaWYgKDAgPCBkaWZmZXJlbmNlSW5EYXlzICYmIGRpZmZlcmVuY2VJbkRheXMgPD0gMil7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXN0b21lclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBzZXRGaWx0ZXJlZEN1c3RvbWVycyh0ZW1wTGlzdClcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT1cImZvbGxvd191cFwiICkge1xuICAgICAgICAgICAgY29uc3QgdGVtcExpc3RfZm9sbG93X3VwID0gY3VzdG9tZXJMaXN0LmZpbHRlcigoY3VzdG9tZXIpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBPbmVEYXkgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSArICgxICogMjQgKiA2MCAqIDYwICogMTAwMClcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlID0gZGF5RGlmZmVyZW5jZShuZXcgRGF0ZSgpLCBuZXcgRGF0ZShjdXN0b21lci5MYXN0VXBkYXRlVGltZSkpXG4gICAgICAgICAgICAgICAgaWYgKGRhdGVkYXRlIDw9IDEgKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1c3RvbWVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHNldEZpbHRlcmVkQ3VzdG9tZXJzKHRlbXBMaXN0X2ZvbGxvd191cClcblxuICAgICAgICB9ZWxzZSBpZiAodmFsdWUgPT09XCJzZWVfaG91c2VcIiApIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXBMaXN0X3NlZV9ob3VzZT0gY3VzdG9tZXJMaXN0LmZpbHRlcigoY3VzdG9tZXIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY3VzdG9tZXIucmVudF9zdGF0dXM9PT0n55yL5oi/5a6i5oi3Jykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VzdG9tZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy9vcmRlcmluZyByZXN1bHRzIGJ5IHRoZSBuZWFyZXN0IHJhdGUgZGF0ZSB0byBsYXRlclxuICAgICAgICAgICAgdGVtcExpc3Rfc2VlX2hvdXNlLnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYi5yZW50X2RhdGUpIC0gbmV3IERhdGUoYS5yZW50X2RhdGUpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBzZXRGaWx0ZXJlZEN1c3RvbWVycyh0ZW1wTGlzdF9zZWVfaG91c2UpXG4gICAgICAgIH1lbHNlIGlmICh2YWx1ZSA9PT1cInNob3J0X3JlbnRcIiApIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXBMaXN0X3Nob3J0X3JlbnQgPSBjdXN0b21lckxpc3QuZmlsdGVyKChjdXN0b21lcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjdXN0b21lci5yZW50X2R1cmF0aW9uIT09J+mVv+ennzHlubQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXN0b21lclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0ZW1wTGlzdF9zaG9ydF9yZW50LnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYS5yZW50X2RhdGUpIC0gbmV3IERhdGUoYi5yZW50X2RhdGUpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBzZXRGaWx0ZXJlZEN1c3RvbWVycyh0ZW1wTGlzdF9zaG9ydF9yZW50KVxuICAgICAgICB9ZWxzZSBpZiAodmFsdWUgPT09XCJwZW5kaW5nXCIgKSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wTGlzdF9wZW5kaW5nID0gY3VzdG9tZXJMaXN0LmZpbHRlcigoY3VzdG9tZXIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY3VzdG9tZXIucmVudF9zdGF0dXM9PT0nUEVORElORycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1c3RvbWVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vb3JkZXIgYnkgcHJpY2UgZnJvbSBoaWdoIHRvIGxvdyBhbmQgdGhlbiBiYXNlZCBvbiB1cmdlbmN5OiBtb3N0IHVyZ2VudCB0byBsZWFzdC5cbiAgICAgICAgICAgIHRlbXBMaXN0X3BlbmRpbmcuc29ydCgoYSwgYikgPT4gcGFyc2VGbG9hdChiLkJ1ZGdldF9wcmljZSkgLSBwYXJzZUZsb2F0KGEuQnVkZ2V0X3ByaWNlKSk7XG4gICAgICAgICAgICBzZXRGaWx0ZXJlZEN1c3RvbWVycyh0ZW1wTGlzdF9wZW5kaW5nKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gPG9wdGlvbiB2YWx1ZT1cIm5lZWRfY29uZmlybVwiPuWGhemDqOWMuemFjeW+heehruiupDwvb3B0aW9uPlxuICAgIC8vIDxvcHRpb24gdmFsdWU9XCJleHRlcm5hbFwiPuWklumDqOaIv+a6kOW8gOWPkeenn+Wuojwvb3B0aW9uPlxuICAgIC8vIDxvcHRpb24gdmFsdWU9XCJvbl9hcHBvaW50bWVudFwiPue6pueci+aIvzwvb3B0aW9uPlxuICAgIHJldHVybiAoXG4gICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZSBjbGFzc05hbWU9J3RpdGxlLXdpdGgtb2JqZWN0Jz5cbiAgICAgICAgICAgICAgICAgICAge2Ake3NlY3Rpb259ICgke2ZpbHRlcmVkQ3VzdG9tZXJzLmxlbmd0aH0pYH1cbiAgICAgICAgICAgICAgICAgICAge3NlY3Rpb24gPT09ICdDdXJyZW50JyAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLlNlbGVjdCBjbGFzc05hbWU9XCJkcm9wZG93bi1zZWxlY3RcIiBzaXplPVwic21cIiBvbkNoYW5nZT17aGFuZGxlU2VsZWN0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWxsXCI+QWxsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5lZWRfY2hlY2tcIj7pnIDopoHlvZXlhaXlkozmoLjlr7nmiL/mupDpnIDmsYLnmoTnp5/lrqI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZm9sbG93X3VwXCI+WWVzdGVyZGF5IEZvbGxvdy11cDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzZWVfaG91c2VcIj7nnIvmiL/lrqLmiLc8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic2hvcnRfcmVudFwiPlNob3J0LXRlcm0gcmVudGFsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBlbmRpbmdcIj5QZW5kaW5nPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uU2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9DYXJkLlRpdGxlPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWN0aW9uLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lckxpc3QuZmlsdGVyKGN1c3RvbWVyMSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkQ3VzdG9tZXJzLnNvbWUoY3VzdG9tZXIyID0+IGN1c3RvbWVyMi5Vc2VySWQgPT09IGN1c3RvbWVyMS5Vc2VySWQpXG4gICAgICAgICAgICAgICAgICAgICAgICApLm1hcCgoY3VzdG9tZXIpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbWVyUHJldmlldyBrZXk9e2N1c3RvbWVyLlVzZXJJZH0gY3VzdG9tZXI9e2N1c3RvbWVyfSBzY3JvbGxUb0N1c3RvbWVyRGV0YWlsPXtzY3JvbGxUb0N1c3RvbWVyRGV0YWlsfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NhcmQuQm9keT5cbiAgICAgICAgPC9DYXJkPlxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbWVyU2VjdGlvbjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkZvcm0iLCJDdXN0b21lclByZXZpZXciLCJDYXJkIiwidXNlU3RhdGVDb250ZXh0IiwidGltZXpvbmVGb3JtYXR0ZXIiLCJDdXN0b21lclNlY3Rpb24iLCJzZWN0aW9uIiwiY3VzdG9tZXJMaXN0Iiwic2Nyb2xsVG9DdXN0b21lckRldGFpbCIsImRheURpZmZlcmVuY2UiLCJmaWx0ZXJlZEN1c3RvbWVycyIsInNldEZpbHRlcmVkQ3VzdG9tZXJzIiwiaGFuZGxlU2VsZWN0IiwiZSIsInZhbHVlIiwidGFyZ2V0IiwidGVtcExpc3QiLCJmaWx0ZXIiLCJjdXN0b21lciIsImRhdGUxIiwiRGF0ZSIsImRhdGUyIiwiU3VibWlzc2lvbl9EYXRlIiwiZGlmZmVyZW5jZUluRGF5cyIsInRlbXBMaXN0X2ZvbGxvd191cCIsImRhdGUiLCJMYXN0VXBkYXRlVGltZSIsImRhdGVkYXRlIiwidGVtcExpc3Rfc2VlX2hvdXNlIiwicmVudF9zdGF0dXMiLCJzb3J0IiwiYSIsImIiLCJyZW50X2RhdGUiLCJ0ZW1wTGlzdF9zaG9ydF9yZW50IiwicmVudF9kdXJhdGlvbiIsInRlbXBMaXN0X3BlbmRpbmciLCJwYXJzZUZsb2F0IiwiQnVkZ2V0X3ByaWNlIiwiQm9keSIsIlRpdGxlIiwiY2xhc3NOYW1lIiwibGVuZ3RoIiwiU2VsZWN0Iiwic2l6ZSIsIm9uQ2hhbmdlIiwib3B0aW9uIiwiZGl2IiwiY3VzdG9tZXIxIiwic29tZSIsImN1c3RvbWVyMiIsIlVzZXJJZCIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Customer/CustomerSection.jsx\n"));

/***/ })

});