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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var _CustomerPreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomerPreview */ \"./components/Customer/CustomerPreview.jsx\");\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Card */ \"./node_modules/react-bootstrap/esm/Card.js\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/StateContext */ \"./context/StateContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst CustomerSection = (param)=>{\n    let { section , customerList , scrollToCustomerDetail  } = param;\n    _s();\n    const { dayDifference , prioritizing_cutsomer , customers  } = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateContext)();\n    const [filteredCustomers, setFilteredCustomers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(customerList);\n    const handleSelect = (e)=>{\n        const value = e.target.value;\n        if (value === \"all\") {\n            setFilteredCustomers(customerList);\n        } else if (value === \"need_check\") {\n            const tempList = customerList.filter((customer1)=>{\n                const date1 = new Date();\n                const date2 = new Date(customer1.Submission_Date);\n                const differenceInDays = dayDifference(date2, date1);\n                if (0 < differenceInDays && differenceInDays <= 2) {\n                    return customer1;\n                }\n            });\n            setFilteredCustomers(tempList);\n        } else if (value === \"follow_up\") {\n            //order by price from high to low and then based on urgency: most urgent to least.\n            const tempList_follow_up_sorted = prioritizing_cutsomer(customerList).sort((a, b)=>parseFloat(b.Budget_price) - parseFloat(a.Budget_price));\n            const tempList_follow_up = tempList_follow_up_sorted.filter((customer1)=>{\n                // see all the internally matched customers who were taking actions one day before from the internal matched section showing under this category. \n                const date = dayDifference(new Date(customer1.LastUpdateTime), new Date());\n                if (0 < date && date <= 1) {\n                    return customer1;\n                }\n            });\n            setFilteredCustomers(tempList_follow_up);\n        } else if (value === \"see_house\") {\n            //ordering results by the nearest rate date to later\n            customerList.sort(function(a, b) {\n                return new Date(b.rent_date) - new Date(a.rent_date);\n            });\n            const tempList_see_house = customerList.filter((customer1)=>{\n                if (customer1.rent_status === \"看房客户\") {\n                    return customer1;\n                }\n            });\n            setFilteredCustomers(tempList_see_house);\n        } else if (value === \"short_rent\") {\n            //order by price from high to low and then based on urgency: most urgent to least.\n            const tempList_short_rent_sorted = prioritizing_cutsomer(customers).sort((a, b)=>parseFloat(b.Budget_price) - parseFloat(a.Budget_price));\n            const tempList_short_rent = tempList_short_rent_sorted.filter((customer1)=>{\n                if (customer1.rent_status !== \"YES\" && customer1.rent_status !== \"DELETED\" && customer1.rent_duration !== \"长租1年\") {\n                    return customer1;\n                }\n            });\n            //only show renters who's rentdate is not passed\n            const date1 = new Date();\n            const date2 = new Date(customer.Submission_Date);\n            const differenceInDays = dayDifference(date2, date1);\n            if (0 < differenceInDays && differenceInDays <= 2) {\n                return customer;\n            }\n            setFilteredCustomers(tempList_short_rent);\n        } else if (value === \"pending\") {\n            //order by price from high to low and then based on urgency: most urgent to least.\n            const tempList_pending_sorted = prioritizing_cutsomer(customers).sort((a, b)=>parseFloat(b.Budget_price) - parseFloat(a.Budget_price));\n            if (customers.length > 0) {\n                const tempList_pending = tempList_pending_sorted.filter((customer1)=>{\n                    if (customer1.rent_status === \"PENDING\") {\n                        return customer1;\n                    }\n                });\n                setFilteredCustomers(tempList_pending);\n            }\n        }\n    };\n    // <option value=\"need_confirm\">内部匹配待确认</option>\n    // <option value=\"external\">外部房源开发租客</option>\n    // <option value=\"on_appointment\">约看房</option>\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Body, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Title, {\n                    className: \"title-with-object\",\n                    children: [\n                        \"\".concat(section, \" (\").concat(filteredCustomers.length, \")\"),\n                        section === \"Renting In Progress\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Select, {\n                            className: \"dropdown-select\",\n                            size: \"sm\",\n                            onChange: handleSelect,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"all\",\n                                    children: \"All\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"need_check\",\n                                    children: \"需要录入和核对房源需求的租客\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"follow_up\",\n                                    children: \" Follow-ups\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"see_house\",\n                                    children: \"看房客户\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"short_rent\",\n                                    children: \"Short-term rental\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"pending\",\n                                    children: \"Pending\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                            lineNumber: 96,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                    lineNumber: 93,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"section-container\",\n                    children: filteredCustomers.map((customer1)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CustomerPreview__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            customer: customer1,\n                            scrollToCustomerDetail: scrollToCustomerDetail\n                        }, customer1.UserId, false, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                            lineNumber: 110,\n                            columnNumber: 29\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                    lineNumber: 107,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n            lineNumber: 92,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n        lineNumber: 91,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CustomerSection, \"BkA8YEMXZTZ09A2vgdKwFW6VUew=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateContext\n    ];\n});\n_c = CustomerSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomerSection);\nvar _c;\n$RefreshReg$(_c, \"CustomerSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1c3RvbWVyL0N1c3RvbWVyU2VjdGlvbi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUQ7QUFDakI7QUFFUTtBQUNSO0FBQ3FCO0FBRzdELE1BQU1RLGtCQUFrQixTQUF1RDtRQUF0RCxFQUFFQyxRQUFPLEVBQUVDLGFBQVksRUFBRUMsdUJBQXNCLEVBQUU7O0lBQ3RFLE1BQU0sRUFBRUMsY0FBYSxFQUFFQyxzQkFBcUIsRUFBRUMsVUFBUyxFQUFFLEdBQUdQLHNFQUFlQTtJQUMzRSxNQUFNLENBQUNRLG1CQUFtQkMscUJBQXFCLEdBQUdkLCtDQUFRQSxDQUFDUTtJQUUzRCxNQUFNTyxlQUFlLENBQUNDLElBQU07UUFDeEIsTUFBTUMsUUFBUUQsRUFBRUUsTUFBTSxDQUFDRCxLQUFLO1FBQzVCLElBQUlBLFVBQVUsT0FBTztZQUNqQkgscUJBQXFCTjtRQUN6QixPQUFPLElBQUlTLFVBQVUsY0FBYztZQUMvQixNQUFNRSxXQUFXWCxhQUFhWSxNQUFNLENBQUMsQ0FBQ0MsWUFBYTtnQkFDL0MsTUFBTUMsUUFBUSxJQUFJQztnQkFDbEIsTUFBTUMsUUFBUSxJQUFJRCxLQUFLRixVQUFTSSxlQUFlO2dCQUUvQyxNQUFNQyxtQkFBbUJoQixjQUFjYyxPQUFPRjtnQkFDOUMsSUFBSSxJQUFJSSxvQkFBb0JBLG9CQUFvQixHQUFHO29CQUMvQyxPQUFPTDtnQkFDWCxDQUFDO1lBQ0w7WUFDQVAscUJBQXFCSztRQUN6QixPQUFPLElBQUlGLFVBQVUsYUFBYTtZQUM5QixrRkFBa0Y7WUFFbEYsTUFBTVUsNEJBQTRCaEIsc0JBQXNCSCxjQUFjb0IsSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU1DLFdBQVdELEVBQUVFLFlBQVksSUFBSUQsV0FBV0YsRUFBRUcsWUFBWTtZQUMzSSxNQUFNQyxxQkFBcUJOLDBCQUEwQlAsTUFBTSxDQUFDLENBQUNDLFlBQWE7Z0JBQ3RFLGtKQUFrSjtnQkFDbEosTUFBTWEsT0FBT3hCLGNBQWMsSUFBSWEsS0FBS0YsVUFBU2MsY0FBYyxHQUFHLElBQUlaO2dCQUNsRSxJQUFJLElBQUlXLFFBQVFBLFFBQVEsR0FBRztvQkFDdkIsT0FBT2I7Z0JBQ1gsQ0FBQztZQUNMO1lBQ0FQLHFCQUFxQm1CO1FBRXpCLE9BQU8sSUFBSWhCLFVBQVUsYUFBYTtZQUM5QixvREFBb0Q7WUFDcERULGFBQWFvQixJQUFJLENBQUMsU0FBVUMsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7Z0JBQzlCLE9BQU8sSUFBSVAsS0FBS08sRUFBRU0sU0FBUyxJQUFJLElBQUliLEtBQUtNLEVBQUVPLFNBQVM7WUFDdkQ7WUFDQSxNQUFNQyxxQkFBcUI3QixhQUFhWSxNQUFNLENBQUMsQ0FBQ0MsWUFBYTtnQkFDekQsSUFBSUEsVUFBU2lCLFdBQVcsS0FBSyxRQUFRO29CQUNqQyxPQUFPakI7Z0JBQ1gsQ0FBQztZQUNMO1lBQ0FQLHFCQUFxQnVCO1FBRXpCLE9BQU8sSUFBSXBCLFVBQVUsY0FBYztZQUMvQixrRkFBa0Y7WUFDbEYsTUFBTXNCLDZCQUE2QjVCLHNCQUFzQkMsV0FBV2dCLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFNQyxXQUFXRCxFQUFFRSxZQUFZLElBQUlELFdBQVdGLEVBQUVHLFlBQVk7WUFDekksTUFBTVEsc0JBQXNCRCwyQkFBMkJuQixNQUFNLENBQUMsQ0FBQ0MsWUFBYTtnQkFDeEUsSUFBSUEsVUFBU2lCLFdBQVcsS0FBSSxTQUFTakIsVUFBU2lCLFdBQVcsS0FBSSxhQUFhakIsVUFBU29CLGFBQWEsS0FBSyxRQUFRO29CQUN6RyxPQUFPcEI7Z0JBQ1gsQ0FBQztZQUNMO1lBQ0EsZ0RBQWdEO1lBQ2hELE1BQU1DLFFBQVEsSUFBSUM7WUFDbEIsTUFBTUMsUUFBUSxJQUFJRCxLQUFLRixTQUFTSSxlQUFlO1lBRS9DLE1BQU1DLG1CQUFtQmhCLGNBQWNjLE9BQU9GO1lBQzlDLElBQUksSUFBSUksb0JBQW9CQSxvQkFBb0IsR0FBRztnQkFDL0MsT0FBT0w7WUFDWCxDQUFDO1lBQ0RQLHFCQUFxQjBCO1FBRXpCLE9BQU8sSUFBSXZCLFVBQVUsV0FBVztZQUM1QixrRkFBa0Y7WUFDbEYsTUFBTXlCLDBCQUEwQi9CLHNCQUFzQkMsV0FBV2dCLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFNQyxXQUFXRCxFQUFFRSxZQUFZLElBQUlELFdBQVdGLEVBQUVHLFlBQVk7WUFFdEksSUFBSXBCLFVBQVUrQixNQUFNLEdBQUcsR0FBRztnQkFDdEIsTUFBTUMsbUJBQW1CRix3QkFBd0J0QixNQUFNLENBQUMsQ0FBQ0MsWUFBYTtvQkFFbEUsSUFBSUEsVUFBU2lCLFdBQVcsS0FBSyxXQUFXO3dCQUNwQyxPQUFPakI7b0JBQ1gsQ0FBQztnQkFDTDtnQkFDQVAscUJBQXFCOEI7WUFDekIsQ0FBQztRQUNMLENBQUM7SUFDTDtJQUVBLGdEQUFnRDtJQUNoRCw2Q0FBNkM7SUFDN0MsOENBQThDO0lBQzlDLHFCQUNJLDhEQUFDeEMsNERBQUlBO2tCQUNELDRFQUFDQSxpRUFBUzs7OEJBQ04sOERBQUNBLGtFQUFVO29CQUFDMkMsV0FBVTs7d0JBQ2hCLEdBQWNsQyxPQUFaTixTQUFRLE1BQTZCLE9BQXpCTSxrQkFBa0I4QixNQUFNLEVBQUM7d0JBQ3hDcEMsWUFBWSx1Q0FDVCw4REFBQ0wsbUVBQVc7NEJBQUM2QyxXQUFVOzRCQUFrQkUsTUFBSzs0QkFBS0MsVUFBVW5DOzs4Q0FDekQsOERBQUNvQztvQ0FBT2xDLE9BQU07OENBQU07Ozs7Ozs4Q0FDcEIsOERBQUNrQztvQ0FBT2xDLE9BQU07OENBQWE7Ozs7Ozs4Q0FDM0IsOERBQUNrQztvQ0FBT2xDLE9BQU07OENBQVk7Ozs7Ozs4Q0FDMUIsOERBQUNrQztvQ0FBT2xDLE9BQU07OENBQVk7Ozs7Ozs4Q0FDMUIsOERBQUNrQztvQ0FBT2xDLE9BQU07OENBQWE7Ozs7Ozs4Q0FDM0IsOERBQUNrQztvQ0FBT2xDLE9BQU07OENBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFLcEMsOERBQUNtQztvQkFBSUwsV0FBVTs4QkFFSGxDLGtCQUFrQndDLEdBQUcsQ0FBQyxDQUFDaEMsMEJBQ3ZCLDhEQUFDbEIsd0RBQWVBOzRCQUF1QmtCLFVBQVVBOzRCQUFVWix3QkFBd0JBOzJCQUE3RFksVUFBU2lDLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9qRTtHQTVHTWhEOztRQUMwREQsa0VBQWVBOzs7S0FEekVDO0FBOEdOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ3VzdG9tZXIvQ3VzdG9tZXJTZWN0aW9uLmpzeD82Y2VkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xuXG5pbXBvcnQgQ3VzdG9tZXJQcmV2aWV3IGZyb20gJy4vQ3VzdG9tZXJQcmV2aWV3JztcbmltcG9ydCBDYXJkIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9DYXJkJztcbmltcG9ydCB7IHVzZVN0YXRlQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQvU3RhdGVDb250ZXh0JztcblxuXG5jb25zdCBDdXN0b21lclNlY3Rpb24gPSAoeyBzZWN0aW9uLCBjdXN0b21lckxpc3QsIHNjcm9sbFRvQ3VzdG9tZXJEZXRhaWwgfSkgPT4ge1xuICAgIGNvbnN0IHsgZGF5RGlmZmVyZW5jZSwgcHJpb3JpdGl6aW5nX2N1dHNvbWVyLCBjdXN0b21lcnMgfSA9IHVzZVN0YXRlQ29udGV4dCgpXG4gICAgY29uc3QgW2ZpbHRlcmVkQ3VzdG9tZXJzLCBzZXRGaWx0ZXJlZEN1c3RvbWVyc10gPSB1c2VTdGF0ZShjdXN0b21lckxpc3QpXG5cbiAgICBjb25zdCBoYW5kbGVTZWxlY3QgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gXCJhbGxcIikge1xuICAgICAgICAgICAgc2V0RmlsdGVyZWRDdXN0b21lcnMoY3VzdG9tZXJMaXN0KVxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcIm5lZWRfY2hlY2tcIikge1xuICAgICAgICAgICAgY29uc3QgdGVtcExpc3QgPSBjdXN0b21lckxpc3QuZmlsdGVyKChjdXN0b21lcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUxID0gbmV3IERhdGUoKVxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUyID0gbmV3IERhdGUoY3VzdG9tZXIuU3VibWlzc2lvbl9EYXRlKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGRpZmZlcmVuY2VJbkRheXMgPSBkYXlEaWZmZXJlbmNlKGRhdGUyLCBkYXRlMSlcbiAgICAgICAgICAgICAgICBpZiAoMCA8IGRpZmZlcmVuY2VJbkRheXMgJiYgZGlmZmVyZW5jZUluRGF5cyA8PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXN0b21lclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBzZXRGaWx0ZXJlZEN1c3RvbWVycyh0ZW1wTGlzdClcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJmb2xsb3dfdXBcIikge1xuICAgICAgICAgICAgLy9vcmRlciBieSBwcmljZSBmcm9tIGhpZ2ggdG8gbG93IGFuZCB0aGVuIGJhc2VkIG9uIHVyZ2VuY3k6IG1vc3QgdXJnZW50IHRvIGxlYXN0LlxuXG4gICAgICAgICAgICBjb25zdCB0ZW1wTGlzdF9mb2xsb3dfdXBfc29ydGVkID0gcHJpb3JpdGl6aW5nX2N1dHNvbWVyKGN1c3RvbWVyTGlzdCkuc29ydCgoYSwgYikgPT4gcGFyc2VGbG9hdChiLkJ1ZGdldF9wcmljZSkgLSBwYXJzZUZsb2F0KGEuQnVkZ2V0X3ByaWNlKSlcbiAgICAgICAgICAgIGNvbnN0IHRlbXBMaXN0X2ZvbGxvd191cCA9IHRlbXBMaXN0X2ZvbGxvd191cF9zb3J0ZWQuZmlsdGVyKChjdXN0b21lcikgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHNlZSBhbGwgdGhlIGludGVybmFsbHkgbWF0Y2hlZCBjdXN0b21lcnMgd2hvIHdlcmUgdGFraW5nIGFjdGlvbnMgb25lIGRheSBiZWZvcmUgZnJvbSB0aGUgaW50ZXJuYWwgbWF0Y2hlZCBzZWN0aW9uIHNob3dpbmcgdW5kZXIgdGhpcyBjYXRlZ29yeS4gXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZSA9IGRheURpZmZlcmVuY2UobmV3IERhdGUoY3VzdG9tZXIuTGFzdFVwZGF0ZVRpbWUpLCBuZXcgRGF0ZSgpKVxuICAgICAgICAgICAgICAgIGlmICgwIDwgZGF0ZSAmJiBkYXRlIDw9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1c3RvbWVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHNldEZpbHRlcmVkQ3VzdG9tZXJzKHRlbXBMaXN0X2ZvbGxvd191cClcblxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcInNlZV9ob3VzZVwiKSB7XG4gICAgICAgICAgICAvL29yZGVyaW5nIHJlc3VsdHMgYnkgdGhlIG5lYXJlc3QgcmF0ZSBkYXRlIHRvIGxhdGVyXG4gICAgICAgICAgICBjdXN0b21lckxpc3Quc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShiLnJlbnRfZGF0ZSkgLSBuZXcgRGF0ZShhLnJlbnRfZGF0ZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zdCB0ZW1wTGlzdF9zZWVfaG91c2UgPSBjdXN0b21lckxpc3QuZmlsdGVyKChjdXN0b21lcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjdXN0b21lci5yZW50X3N0YXR1cyA9PT0gJ+eci+aIv+WuouaItycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1c3RvbWVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHNldEZpbHRlcmVkQ3VzdG9tZXJzKHRlbXBMaXN0X3NlZV9ob3VzZSlcblxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcInNob3J0X3JlbnRcIikge1xuICAgICAgICAgICAgLy9vcmRlciBieSBwcmljZSBmcm9tIGhpZ2ggdG8gbG93IGFuZCB0aGVuIGJhc2VkIG9uIHVyZ2VuY3k6IG1vc3QgdXJnZW50IHRvIGxlYXN0LlxuICAgICAgICAgICAgY29uc3QgdGVtcExpc3Rfc2hvcnRfcmVudF9zb3J0ZWQgPSBwcmlvcml0aXppbmdfY3V0c29tZXIoY3VzdG9tZXJzKS5zb3J0KChhLCBiKSA9PiBwYXJzZUZsb2F0KGIuQnVkZ2V0X3ByaWNlKSAtIHBhcnNlRmxvYXQoYS5CdWRnZXRfcHJpY2UpKVxuICAgICAgICAgICAgY29uc3QgdGVtcExpc3Rfc2hvcnRfcmVudCA9IHRlbXBMaXN0X3Nob3J0X3JlbnRfc29ydGVkLmZpbHRlcigoY3VzdG9tZXIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY3VzdG9tZXIucmVudF9zdGF0dXMgIT09J1lFUycgJiYgY3VzdG9tZXIucmVudF9zdGF0dXMgIT09J0RFTEVURUQnICYmIGN1c3RvbWVyLnJlbnRfZHVyYXRpb24gIT09ICfplb/np58x5bm0Jykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VzdG9tZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy9vbmx5IHNob3cgcmVudGVycyB3aG8ncyByZW50ZGF0ZSBpcyBub3QgcGFzc2VkXG4gICAgICAgICAgICBjb25zdCBkYXRlMSA9IG5ldyBEYXRlKClcbiAgICAgICAgICAgIGNvbnN0IGRhdGUyID0gbmV3IERhdGUoY3VzdG9tZXIuU3VibWlzc2lvbl9EYXRlKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBkaWZmZXJlbmNlSW5EYXlzID0gZGF5RGlmZmVyZW5jZShkYXRlMiwgZGF0ZTEpXG4gICAgICAgICAgICBpZiAoMCA8IGRpZmZlcmVuY2VJbkRheXMgJiYgZGlmZmVyZW5jZUluRGF5cyA8PSAyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1c3RvbWVyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRGaWx0ZXJlZEN1c3RvbWVycyh0ZW1wTGlzdF9zaG9ydF9yZW50KVxuXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwicGVuZGluZ1wiKSB7XG4gICAgICAgICAgICAvL29yZGVyIGJ5IHByaWNlIGZyb20gaGlnaCB0byBsb3cgYW5kIHRoZW4gYmFzZWQgb24gdXJnZW5jeTogbW9zdCB1cmdlbnQgdG8gbGVhc3QuXG4gICAgICAgICAgICBjb25zdCB0ZW1wTGlzdF9wZW5kaW5nX3NvcnRlZCA9IHByaW9yaXRpemluZ19jdXRzb21lcihjdXN0b21lcnMpLnNvcnQoKGEsIGIpID0+IHBhcnNlRmxvYXQoYi5CdWRnZXRfcHJpY2UpIC0gcGFyc2VGbG9hdChhLkJ1ZGdldF9wcmljZSkpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChjdXN0b21lcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBMaXN0X3BlbmRpbmcgPSB0ZW1wTGlzdF9wZW5kaW5nX3NvcnRlZC5maWx0ZXIoKGN1c3RvbWVyKSA9PiB7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1c3RvbWVyLnJlbnRfc3RhdHVzID09PSAnUEVORElORycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXN0b21lclxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBzZXRGaWx0ZXJlZEN1c3RvbWVycyh0ZW1wTGlzdF9wZW5kaW5nKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gPG9wdGlvbiB2YWx1ZT1cIm5lZWRfY29uZmlybVwiPuWGhemDqOWMuemFjeW+heehruiupDwvb3B0aW9uPlxuICAgIC8vIDxvcHRpb24gdmFsdWU9XCJleHRlcm5hbFwiPuWklumDqOaIv+a6kOW8gOWPkeenn+Wuojwvb3B0aW9uPlxuICAgIC8vIDxvcHRpb24gdmFsdWU9XCJvbl9hcHBvaW50bWVudFwiPue6pueci+aIvzwvb3B0aW9uPlxuICAgIHJldHVybiAoXG4gICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZSBjbGFzc05hbWU9J3RpdGxlLXdpdGgtb2JqZWN0Jz5cbiAgICAgICAgICAgICAgICAgICAge2Ake3NlY3Rpb259ICgke2ZpbHRlcmVkQ3VzdG9tZXJzLmxlbmd0aH0pYH1cbiAgICAgICAgICAgICAgICAgICAge3NlY3Rpb24gPT09ICdSZW50aW5nIEluIFByb2dyZXNzJyAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLlNlbGVjdCBjbGFzc05hbWU9XCJkcm9wZG93bi1zZWxlY3RcIiBzaXplPVwic21cIiBvbkNoYW5nZT17aGFuZGxlU2VsZWN0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWxsXCI+QWxsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5lZWRfY2hlY2tcIj7pnIDopoHlvZXlhaXlkozmoLjlr7nmiL/mupDpnIDmsYLnmoTnp5/lrqI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZm9sbG93X3VwXCI+IEZvbGxvdy11cHM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic2VlX2hvdXNlXCI+55yL5oi/5a6i5oi3PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNob3J0X3JlbnRcIj5TaG9ydC10ZXJtIHJlbnRhbDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwZW5kaW5nXCI+UGVuZGluZzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLlNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvQ2FyZC5UaXRsZT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VjdGlvbi1jb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkQ3VzdG9tZXJzLm1hcCgoY3VzdG9tZXIpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbWVyUHJldmlldyBrZXk9e2N1c3RvbWVyLlVzZXJJZH0gY3VzdG9tZXI9e2N1c3RvbWVyfSBzY3JvbGxUb0N1c3RvbWVyRGV0YWlsPXtzY3JvbGxUb0N1c3RvbWVyRGV0YWlsfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NhcmQuQm9keT5cbiAgICAgICAgPC9DYXJkPlxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbWVyU2VjdGlvbjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIkZvcm0iLCJDdXN0b21lclByZXZpZXciLCJDYXJkIiwidXNlU3RhdGVDb250ZXh0IiwiQ3VzdG9tZXJTZWN0aW9uIiwic2VjdGlvbiIsImN1c3RvbWVyTGlzdCIsInNjcm9sbFRvQ3VzdG9tZXJEZXRhaWwiLCJkYXlEaWZmZXJlbmNlIiwicHJpb3JpdGl6aW5nX2N1dHNvbWVyIiwiY3VzdG9tZXJzIiwiZmlsdGVyZWRDdXN0b21lcnMiLCJzZXRGaWx0ZXJlZEN1c3RvbWVycyIsImhhbmRsZVNlbGVjdCIsImUiLCJ2YWx1ZSIsInRhcmdldCIsInRlbXBMaXN0IiwiZmlsdGVyIiwiY3VzdG9tZXIiLCJkYXRlMSIsIkRhdGUiLCJkYXRlMiIsIlN1Ym1pc3Npb25fRGF0ZSIsImRpZmZlcmVuY2VJbkRheXMiLCJ0ZW1wTGlzdF9mb2xsb3dfdXBfc29ydGVkIiwic29ydCIsImEiLCJiIiwicGFyc2VGbG9hdCIsIkJ1ZGdldF9wcmljZSIsInRlbXBMaXN0X2ZvbGxvd191cCIsImRhdGUiLCJMYXN0VXBkYXRlVGltZSIsInJlbnRfZGF0ZSIsInRlbXBMaXN0X3NlZV9ob3VzZSIsInJlbnRfc3RhdHVzIiwidGVtcExpc3Rfc2hvcnRfcmVudF9zb3J0ZWQiLCJ0ZW1wTGlzdF9zaG9ydF9yZW50IiwicmVudF9kdXJhdGlvbiIsInRlbXBMaXN0X3BlbmRpbmdfc29ydGVkIiwibGVuZ3RoIiwidGVtcExpc3RfcGVuZGluZyIsIkJvZHkiLCJUaXRsZSIsImNsYXNzTmFtZSIsIlNlbGVjdCIsInNpemUiLCJvbkNoYW5nZSIsIm9wdGlvbiIsImRpdiIsIm1hcCIsIlVzZXJJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Customer/CustomerSection.jsx\n"));

/***/ })

});