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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var _CustomerPreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomerPreview */ \"./components/Customer/CustomerPreview.jsx\");\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Card */ \"./node_modules/react-bootstrap/esm/Card.js\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/StateContext */ \"./context/StateContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst CustomerSection = (param)=>{\n    let { section , customerList , scrollToCustomerDetail  } = param;\n    _s();\n    const { dayDifference  } = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateContext)();\n    const [filteredCustomers, setFilteredCustomers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(customerList);\n    const handleSelect = (e)=>{\n        const value = e.target.value;\n        if (value === \"all\") {\n            setFilteredCustomers(customerList);\n        } else if (value === \"need_check\") {\n            const tempList = customerList.filter((customer)=>{\n                const date11 = new Date();\n                const date21 = new Date(customer.Submission_Date);\n                const differenceInDays = dayDifference(date11, date21);\n                if (0 < differenceInDays && differenceInDays <= 2) {\n                    return customer;\n                }\n            });\n            setFilteredCustomers(tempList);\n        } else if (value === \"follow_up\") {\n            const tempList_follow_up = customerList.filter((customer)=>{\n                const OneDay = new Date().getTime() + 1 * 24 * 60 * 60 * 1000;\n                const differenceInDays = dayDifference(date1, date2);\n                if (customer.LastUpdate < differenceInDays) {\n                    return customer;\n                }\n            });\n            setFilteredCustomers(tempList_follow_up);\n        } else if (value === \"see_house\") {\n            const tempList_see_house = customerList.filter((customer)=>{\n                if (customer.rent_status === \"看房客户\") {\n                    return customer;\n                }\n            });\n            //ordering results by the nearest rate date to later\n            tempList_see_house.sort(function(a, b) {\n                return new Date(b.rent_date) - new Date(a.rent_date);\n            });\n            setFilteredCustomers(tempList_see_house);\n        } else if (value === \"short_rent\") {\n            const tempList_short_rent = customerList.filter((customer)=>{\n                if (customer.rent_duration !== \"长租1年\") {\n                    return customer;\n                }\n            });\n            tempList_short_rent.sort(function(a, b) {\n                return new Date(a.rent_date) - new Date(b.rent_date);\n            });\n            setFilteredCustomers(tempList_short_rent);\n        } else if (value === \"pending\") {\n            const tempList_pending = customerList.filter((customer)=>{\n                if (customer.rent_status === \"PENDING\") {\n                    return customer;\n                }\n            });\n            //order by price from high to low and then based on urgency: most urgent to least.\n            tempList_pending.sort((a, b)=>parseFloat(b.Budget_price) - parseFloat(a.Budget_price));\n            setFilteredCustomers(tempList_pending);\n        }\n    };\n    // <option value=\"need_confirm\">内部匹配待确认</option>\n    // <option value=\"external\">外部房源开发租客</option>\n    // <option value=\"on_appointment\">约看房</option>\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Body, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Title, {\n                    className: \"title-with-object\",\n                    children: [\n                        \"\".concat(section, \" (\").concat(filteredCustomers.length, \")\"),\n                        section === \"Current\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Select, {\n                            className: \"dropdown-select\",\n                            size: \"sm\",\n                            onChange: handleSelect,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"all\",\n                                    children: \"All\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"need_check\",\n                                    children: \"需要录入和核对房源需求的租客\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"follow_up\",\n                                    children: \"Yesterday Follow-up\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"see_house\",\n                                    children: \"看房客户\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"short_rent\",\n                                    children: \"Short-term rental\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"pending\",\n                                    children: \"Pending\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                            lineNumber: 81,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                    lineNumber: 78,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"section-container\",\n                    children: customerList.filter((customer1)=>filteredCustomers.some((customer2)=>customer2.UserId === customer1.UserId)).map((customer)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CustomerPreview__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            customer: customer,\n                            scrollToCustomerDetail: scrollToCustomerDetail\n                        }, customer.UserId, false, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                            lineNumber: 97,\n                            columnNumber: 29\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                    lineNumber: 92,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n            lineNumber: 77,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n        lineNumber: 76,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CustomerSection, \"5cjl3PXbWS+RAa8IlJ2mt5HP4M4=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateContext\n    ];\n});\n_c = CustomerSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomerSection);\nvar _c;\n$RefreshReg$(_c, \"CustomerSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1c3RvbWVyL0N1c3RvbWVyU2VjdGlvbi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBc0M7QUFDRTtBQUVRO0FBQ1I7QUFDcUI7QUFFN0QsTUFBTU0sa0JBQWtCLFNBQXVEO1FBQXRELEVBQUVDLFFBQU8sRUFBRUMsYUFBWSxFQUFFQyx1QkFBc0IsRUFBRTs7SUFDdEUsTUFBTSxFQUFFQyxjQUFhLEVBQUUsR0FBR0wsc0VBQWVBO0lBRXpDLE1BQU0sQ0FBQ00sbUJBQW1CQyxxQkFBcUIsR0FBR1gsK0NBQVFBLENBQUNPO0lBRTNELE1BQU1LLGVBQWUsQ0FBQ0MsSUFBTTtRQUN4QixNQUFNQyxRQUFRRCxFQUFFRSxNQUFNLENBQUNELEtBQUs7UUFDNUIsSUFBSUEsVUFBVSxPQUFPO1lBQ2pCSCxxQkFBcUJKO1FBQ3pCLE9BQU8sSUFBSU8sVUFBVSxjQUFjO1lBQy9CLE1BQU1FLFdBQVdULGFBQWFVLE1BQU0sQ0FBQyxDQUFDQyxXQUFhO2dCQUMvQyxNQUFNQyxTQUFRLElBQUlDO2dCQUNsQixNQUFNQyxTQUFRLElBQUlELEtBQUtGLFNBQVNJLGVBQWU7Z0JBRS9DLE1BQU1DLG1CQUFtQmQsY0FBY1UsUUFBT0U7Z0JBQzlDLElBQUksSUFBSUUsb0JBQW9CQSxvQkFBb0IsR0FBRTtvQkFDOUMsT0FBT0w7Z0JBQ1gsQ0FBQztZQUNMO1lBQ0FQLHFCQUFxQks7UUFDekIsT0FBTyxJQUFJRixVQUFTLGFBQWM7WUFDOUIsTUFBTVUscUJBQXFCakIsYUFBYVUsTUFBTSxDQUFDLENBQUNDLFdBQWE7Z0JBQ3pELE1BQU1PLFNBQVMsSUFBSUwsT0FBT00sT0FBTyxLQUFNLElBQUksS0FBSyxLQUFLLEtBQUs7Z0JBRTFELE1BQU1ILG1CQUFtQmQsY0FBY1UsT0FBT0U7Z0JBQzlDLElBQUlILFNBQVNTLFVBQVUsR0FBR0osa0JBQWtCO29CQUN4QyxPQUFPTDtnQkFDWCxDQUFDO1lBQ0w7WUFDQVAscUJBQXFCYTtRQUV6QixPQUFNLElBQUlWLFVBQVMsYUFBYztZQUM3QixNQUFNYyxxQkFBb0JyQixhQUFhVSxNQUFNLENBQUMsQ0FBQ0MsV0FBYTtnQkFDeEQsSUFBSUEsU0FBU1csV0FBVyxLQUFHLFFBQVE7b0JBQy9CLE9BQU9YO2dCQUNYLENBQUM7WUFDTDtZQUNBLG9EQUFvRDtZQUNwRFUsbUJBQW1CRSxJQUFJLENBQUMsU0FBU0MsQ0FBQyxFQUFDQyxDQUFDLEVBQUM7Z0JBQ2pDLE9BQU8sSUFBSVosS0FBS1ksRUFBRUMsU0FBUyxJQUFJLElBQUliLEtBQUtXLEVBQUVFLFNBQVM7WUFDckQ7WUFDRnRCLHFCQUFxQmlCO1FBQ3pCLE9BQU0sSUFBSWQsVUFBUyxjQUFlO1lBQzlCLE1BQU1vQixzQkFBc0IzQixhQUFhVSxNQUFNLENBQUMsQ0FBQ0MsV0FBYTtnQkFDMUQsSUFBSUEsU0FBU2lCLGFBQWEsS0FBRyxRQUFRO29CQUNqQyxPQUFPakI7Z0JBQ1gsQ0FBQztZQUNMO1lBQ0FnQixvQkFBb0JKLElBQUksQ0FBQyxTQUFTQyxDQUFDLEVBQUNDLENBQUMsRUFBQztnQkFDbEMsT0FBTyxJQUFJWixLQUFLVyxFQUFFRSxTQUFTLElBQUksSUFBSWIsS0FBS1ksRUFBRUMsU0FBUztZQUNyRDtZQUNGdEIscUJBQXFCdUI7UUFDekIsT0FBTSxJQUFJcEIsVUFBUyxXQUFZO1lBQzNCLE1BQU1zQixtQkFBbUI3QixhQUFhVSxNQUFNLENBQUMsQ0FBQ0MsV0FBYTtnQkFDdkQsSUFBSUEsU0FBU1csV0FBVyxLQUFHLFdBQVc7b0JBQ2xDLE9BQU9YO2dCQUNYLENBQUM7WUFDTDtZQUNBLGtGQUFrRjtZQUNsRmtCLGlCQUFpQk4sSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU1LLFdBQVdMLEVBQUVNLFlBQVksSUFBSUQsV0FBV04sRUFBRU8sWUFBWTtZQUN0RjNCLHFCQUFxQnlCO1FBQ3pCLENBQUM7SUFDTDtJQUVBLGdEQUFnRDtJQUNoRCw2Q0FBNkM7SUFDN0MsOENBQThDO0lBQzlDLHFCQUNJLDhEQUFDakMsNERBQUlBO2tCQUNELDRFQUFDQSxpRUFBUzs7OEJBQ04sOERBQUNBLGtFQUFVO29CQUFDc0MsV0FBVTs7d0JBQ2hCLEdBQWMvQixPQUFaSixTQUFRLE1BQTZCLE9BQXpCSSxrQkFBa0JnQyxNQUFNLEVBQUM7d0JBQ3hDcEMsWUFBWSwyQkFDVCw4REFBQ0wsbUVBQVc7NEJBQUN3QyxXQUFVOzRCQUFrQkcsTUFBSzs0QkFBS0MsVUFBVWpDOzs4Q0FDekQsOERBQUNrQztvQ0FBT2hDLE9BQU07OENBQU07Ozs7Ozs4Q0FDcEIsOERBQUNnQztvQ0FBT2hDLE9BQU07OENBQWE7Ozs7Ozs4Q0FDM0IsOERBQUNnQztvQ0FBT2hDLE9BQU07OENBQVk7Ozs7Ozs4Q0FDMUIsOERBQUNnQztvQ0FBT2hDLE9BQU07OENBQVk7Ozs7Ozs4Q0FDMUIsOERBQUNnQztvQ0FBT2hDLE9BQU07OENBQWE7Ozs7Ozs4Q0FDM0IsOERBQUNnQztvQ0FBT2hDLE9BQU07OENBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFLcEMsOERBQUNpQztvQkFBSU4sV0FBVTs4QkFFUGxDLGFBQWFVLE1BQU0sQ0FBQytCLENBQUFBLFlBQ2hCdEMsa0JBQWtCdUMsSUFBSSxDQUFDQyxDQUFBQSxZQUFhQSxVQUFVQyxNQUFNLEtBQUtILFVBQVVHLE1BQU0sR0FDM0VDLEdBQUcsQ0FBQyxDQUFDbEMseUJBQ0gsOERBQUNoQix3REFBZUE7NEJBQXVCZ0IsVUFBVUE7NEJBQVVWLHdCQUF3QkE7MkJBQTdEVSxTQUFTaUMsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2pFO0dBaEdNOUM7O1FBQ3dCRCxrRUFBZUE7OztLQUR2Q0M7QUFrR04sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXN0b21lci9DdXN0b21lclNlY3Rpb24uanN4PzZjZWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcblxuaW1wb3J0IEN1c3RvbWVyUHJldmlldyBmcm9tICcuL0N1c3RvbWVyUHJldmlldyc7XG5pbXBvcnQgQ2FyZCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ2FyZCc7XG5pbXBvcnQgeyB1c2VTdGF0ZUNvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0L1N0YXRlQ29udGV4dCc7XG5cbmNvbnN0IEN1c3RvbWVyU2VjdGlvbiA9ICh7IHNlY3Rpb24sIGN1c3RvbWVyTGlzdCwgc2Nyb2xsVG9DdXN0b21lckRldGFpbCB9KSA9PiB7XG4gICAgY29uc3QgeyBkYXlEaWZmZXJlbmNlIH0gPSB1c2VTdGF0ZUNvbnRleHQoKVxuXG4gICAgY29uc3QgW2ZpbHRlcmVkQ3VzdG9tZXJzLCBzZXRGaWx0ZXJlZEN1c3RvbWVyc10gPSB1c2VTdGF0ZShjdXN0b21lckxpc3QpXG5cbiAgICBjb25zdCBoYW5kbGVTZWxlY3QgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gXCJhbGxcIikge1xuICAgICAgICAgICAgc2V0RmlsdGVyZWRDdXN0b21lcnMoY3VzdG9tZXJMaXN0KVxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcIm5lZWRfY2hlY2tcIikge1xuICAgICAgICAgICAgY29uc3QgdGVtcExpc3QgPSBjdXN0b21lckxpc3QuZmlsdGVyKChjdXN0b21lcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUxID0gbmV3IERhdGUoKVxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUyID0gbmV3IERhdGUoY3VzdG9tZXIuU3VibWlzc2lvbl9EYXRlKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGRpZmZlcmVuY2VJbkRheXMgPSBkYXlEaWZmZXJlbmNlKGRhdGUxLCBkYXRlMilcbiAgICAgICAgICAgICAgICBpZiAoMCA8IGRpZmZlcmVuY2VJbkRheXMgJiYgZGlmZmVyZW5jZUluRGF5cyA8PSAyKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1c3RvbWVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHNldEZpbHRlcmVkQ3VzdG9tZXJzKHRlbXBMaXN0KVxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PVwiZm9sbG93X3VwXCIgKSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wTGlzdF9mb2xsb3dfdXAgPSBjdXN0b21lckxpc3QuZmlsdGVyKChjdXN0b21lcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IE9uZURheSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgKDEgKiAyNCAqIDYwICogNjAgKiAxMDAwKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGRpZmZlcmVuY2VJbkRheXMgPSBkYXlEaWZmZXJlbmNlKGRhdGUxLCBkYXRlMilcbiAgICAgICAgICAgICAgICBpZiAoY3VzdG9tZXIuTGFzdFVwZGF0ZSA8IGRpZmZlcmVuY2VJbkRheXMgKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1c3RvbWVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHNldEZpbHRlcmVkQ3VzdG9tZXJzKHRlbXBMaXN0X2ZvbGxvd191cClcblxuICAgICAgICB9ZWxzZSBpZiAodmFsdWUgPT09XCJzZWVfaG91c2VcIiApIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXBMaXN0X3NlZV9ob3VzZT0gY3VzdG9tZXJMaXN0LmZpbHRlcigoY3VzdG9tZXIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY3VzdG9tZXIucmVudF9zdGF0dXM9PT0n55yL5oi/5a6i5oi3Jykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VzdG9tZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy9vcmRlcmluZyByZXN1bHRzIGJ5IHRoZSBuZWFyZXN0IHJhdGUgZGF0ZSB0byBsYXRlclxuICAgICAgICAgICAgdGVtcExpc3Rfc2VlX2hvdXNlLnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYi5yZW50X2RhdGUpIC0gbmV3IERhdGUoYS5yZW50X2RhdGUpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBzZXRGaWx0ZXJlZEN1c3RvbWVycyh0ZW1wTGlzdF9zZWVfaG91c2UpXG4gICAgICAgIH1lbHNlIGlmICh2YWx1ZSA9PT1cInNob3J0X3JlbnRcIiApIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXBMaXN0X3Nob3J0X3JlbnQgPSBjdXN0b21lckxpc3QuZmlsdGVyKChjdXN0b21lcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjdXN0b21lci5yZW50X2R1cmF0aW9uIT09J+mVv+ennzHlubQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXN0b21lclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0ZW1wTGlzdF9zaG9ydF9yZW50LnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYS5yZW50X2RhdGUpIC0gbmV3IERhdGUoYi5yZW50X2RhdGUpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBzZXRGaWx0ZXJlZEN1c3RvbWVycyh0ZW1wTGlzdF9zaG9ydF9yZW50KVxuICAgICAgICB9ZWxzZSBpZiAodmFsdWUgPT09XCJwZW5kaW5nXCIgKSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wTGlzdF9wZW5kaW5nID0gY3VzdG9tZXJMaXN0LmZpbHRlcigoY3VzdG9tZXIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY3VzdG9tZXIucmVudF9zdGF0dXM9PT0nUEVORElORycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1c3RvbWVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vb3JkZXIgYnkgcHJpY2UgZnJvbSBoaWdoIHRvIGxvdyBhbmQgdGhlbiBiYXNlZCBvbiB1cmdlbmN5OiBtb3N0IHVyZ2VudCB0byBsZWFzdC5cbiAgICAgICAgICAgIHRlbXBMaXN0X3BlbmRpbmcuc29ydCgoYSwgYikgPT4gcGFyc2VGbG9hdChiLkJ1ZGdldF9wcmljZSkgLSBwYXJzZUZsb2F0KGEuQnVkZ2V0X3ByaWNlKSk7XG4gICAgICAgICAgICBzZXRGaWx0ZXJlZEN1c3RvbWVycyh0ZW1wTGlzdF9wZW5kaW5nKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gPG9wdGlvbiB2YWx1ZT1cIm5lZWRfY29uZmlybVwiPuWGhemDqOWMuemFjeW+heehruiupDwvb3B0aW9uPlxuICAgIC8vIDxvcHRpb24gdmFsdWU9XCJleHRlcm5hbFwiPuWklumDqOaIv+a6kOW8gOWPkeenn+Wuojwvb3B0aW9uPlxuICAgIC8vIDxvcHRpb24gdmFsdWU9XCJvbl9hcHBvaW50bWVudFwiPue6pueci+aIvzwvb3B0aW9uPlxuICAgIHJldHVybiAoXG4gICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZSBjbGFzc05hbWU9J3RpdGxlLXdpdGgtb2JqZWN0Jz5cbiAgICAgICAgICAgICAgICAgICAge2Ake3NlY3Rpb259ICgke2ZpbHRlcmVkQ3VzdG9tZXJzLmxlbmd0aH0pYH1cbiAgICAgICAgICAgICAgICAgICAge3NlY3Rpb24gPT09ICdDdXJyZW50JyAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLlNlbGVjdCBjbGFzc05hbWU9XCJkcm9wZG93bi1zZWxlY3RcIiBzaXplPVwic21cIiBvbkNoYW5nZT17aGFuZGxlU2VsZWN0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWxsXCI+QWxsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5lZWRfY2hlY2tcIj7pnIDopoHlvZXlhaXlkozmoLjlr7nmiL/mupDpnIDmsYLnmoTnp5/lrqI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZm9sbG93X3VwXCI+WWVzdGVyZGF5IEZvbGxvdy11cDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzZWVfaG91c2VcIj7nnIvmiL/lrqLmiLc8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic2hvcnRfcmVudFwiPlNob3J0LXRlcm0gcmVudGFsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBlbmRpbmdcIj5QZW5kaW5nPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uU2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9DYXJkLlRpdGxlPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWN0aW9uLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lckxpc3QuZmlsdGVyKGN1c3RvbWVyMSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkQ3VzdG9tZXJzLnNvbWUoY3VzdG9tZXIyID0+IGN1c3RvbWVyMi5Vc2VySWQgPT09IGN1c3RvbWVyMS5Vc2VySWQpXG4gICAgICAgICAgICAgICAgICAgICAgICApLm1hcCgoY3VzdG9tZXIpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbWVyUHJldmlldyBrZXk9e2N1c3RvbWVyLlVzZXJJZH0gY3VzdG9tZXI9e2N1c3RvbWVyfSBzY3JvbGxUb0N1c3RvbWVyRGV0YWlsPXtzY3JvbGxUb0N1c3RvbWVyRGV0YWlsfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NhcmQuQm9keT5cbiAgICAgICAgPC9DYXJkPlxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbWVyU2VjdGlvbjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkZvcm0iLCJDdXN0b21lclByZXZpZXciLCJDYXJkIiwidXNlU3RhdGVDb250ZXh0IiwiQ3VzdG9tZXJTZWN0aW9uIiwic2VjdGlvbiIsImN1c3RvbWVyTGlzdCIsInNjcm9sbFRvQ3VzdG9tZXJEZXRhaWwiLCJkYXlEaWZmZXJlbmNlIiwiZmlsdGVyZWRDdXN0b21lcnMiLCJzZXRGaWx0ZXJlZEN1c3RvbWVycyIsImhhbmRsZVNlbGVjdCIsImUiLCJ2YWx1ZSIsInRhcmdldCIsInRlbXBMaXN0IiwiZmlsdGVyIiwiY3VzdG9tZXIiLCJkYXRlMSIsIkRhdGUiLCJkYXRlMiIsIlN1Ym1pc3Npb25fRGF0ZSIsImRpZmZlcmVuY2VJbkRheXMiLCJ0ZW1wTGlzdF9mb2xsb3dfdXAiLCJPbmVEYXkiLCJnZXRUaW1lIiwiTGFzdFVwZGF0ZSIsInRlbXBMaXN0X3NlZV9ob3VzZSIsInJlbnRfc3RhdHVzIiwic29ydCIsImEiLCJiIiwicmVudF9kYXRlIiwidGVtcExpc3Rfc2hvcnRfcmVudCIsInJlbnRfZHVyYXRpb24iLCJ0ZW1wTGlzdF9wZW5kaW5nIiwicGFyc2VGbG9hdCIsIkJ1ZGdldF9wcmljZSIsIkJvZHkiLCJUaXRsZSIsImNsYXNzTmFtZSIsImxlbmd0aCIsIlNlbGVjdCIsInNpemUiLCJvbkNoYW5nZSIsIm9wdGlvbiIsImRpdiIsImN1c3RvbWVyMSIsInNvbWUiLCJjdXN0b21lcjIiLCJVc2VySWQiLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Customer/CustomerSection.jsx\n"));

/***/ })

});