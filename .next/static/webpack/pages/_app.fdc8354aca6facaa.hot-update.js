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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var _CustomerPreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomerPreview */ \"./components/Customer/CustomerPreview.jsx\");\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Card */ \"./node_modules/react-bootstrap/esm/Card.js\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/StateContext */ \"./context/StateContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst CustomerSection = (param)=>{\n    let { section , customerList , scrollToCustomerDetail  } = param;\n    _s();\n    const { dayDifference  } = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateContext)();\n    const [filteredCustomers, setFilteredCustomers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(customerList);\n    const handleSelect = (e)=>{\n        const value = e.target.value;\n        if (value === \"all\") {\n            setFilteredCustomers(customerList);\n        } else if (value === \"need_check\") {\n            const tempList = customerList.filter((customer)=>{\n                const date1 = new Date();\n                const date2 = new Date(customer.Submission_Date);\n                const differenceInDays = dayDifference(date1, date2);\n                if (0 < differenceInDays && differenceInDays <= 2) {\n                    return customer;\n                }\n            });\n            setFilteredCustomers(tempList);\n        } else if (value === \"follow_up\") {\n            const tempList_follow_up = customerList.filter((customer)=>{\n                // see all the internally matched customers who were taking actions one day before from the internal matched section showing under this category. \n                const date = dayDifference(new Date(customer.LastUpdateTime), new Date());\n                if (0 < date && date <= 1) {\n                    return customer;\n                }\n            });\n            //order by price from high to low and then based on urgency: most urgent to least.\n            console.log(tempList_follow_up);\n            tempList_follow_up.sort(function(a, b) {\n                return new Date(a.rent_date) - new Date(b.rent_date);\n            }).sort((a, b)=>parseFloat(b.Budget_price) - parseFloat(a.Budget_price));\n            setFilteredCustomers(tempList_follow_up);\n        } else if (value === \"see_house\") {\n            const tempList_see_house = customerList.filter((customer)=>{\n                if (customer.rent_status === \"看房客户\") {\n                    return customer;\n                }\n            });\n            //ordering results by the nearest rate date to later\n            tempList_see_house.sort(function(a, b) {\n                return new Date(b.rent_date) - new Date(a.rent_date);\n            });\n            setFilteredCustomers(tempList_see_house);\n        } else if (value === \"short_rent\") {\n            const tempList_short_rent = customerList.filter((customer)=>{\n                if (customer.rent_duration !== \"长租1年\") {\n                    return customer;\n                }\n            });\n            //Order by urgency: most urgent to less urgent\n            tempList_short_rent.sort(function(a, b) {\n                return new Date(a.rent_date) - new Date(b.rent_date);\n            }).sort((a, b)=>parseFloat(b.Budget_price) - parseFloat(a.Budget_price));\n            setFilteredCustomers(tempList_short_rent);\n        } else if (value === \"pending\") {\n            const tempList_pending = customerList.filter((customer)=>{\n                if (customer.rent_status === \"PENDING\") {\n                    return customer;\n                }\n            });\n            //order by price from high to low and then based on urgency: most urgent to least.\n            tempList_pending.sort(function(a, b) {\n                return new Date(a.rent_date) - new Date(b.rent_date);\n            }).sort((a, b)=>parseFloat(b.Budget_price) - parseFloat(a.Budget_price));\n            setFilteredCustomers(tempList_pending);\n        }\n    };\n    // <option value=\"need_confirm\">内部匹配待确认</option>\n    // <option value=\"external\">外部房源开发租客</option>\n    // <option value=\"on_appointment\">约看房</option>\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Body, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Title, {\n                    className: \"title-with-object\",\n                    children: [\n                        \"\".concat(section, \" (\").concat(filteredCustomers.length, \")\"),\n                        section === \"Current\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Select, {\n                            className: \"dropdown-select\",\n                            size: \"sm\",\n                            onChange: handleSelect,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"all\",\n                                    children: \"All\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"need_check\",\n                                    children: \"需要录入和核对房源需求的租客\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"follow_up\",\n                                    children: \"Yesterday Follow-up\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"see_house\",\n                                    children: \"看房客户\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"short_rent\",\n                                    children: \"Short-term rental\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"pending\",\n                                    children: \"Pending\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                            lineNumber: 90,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                    lineNumber: 87,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"section-container\",\n                    children: customerList.filter((customer1)=>filteredCustomers.some((customer2)=>customer2.UserId === customer1.UserId)).map((customer)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CustomerPreview__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            customer: customer,\n                            scrollToCustomerDetail: scrollToCustomerDetail\n                        }, customer.UserId, false, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                            lineNumber: 106,\n                            columnNumber: 29\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                    lineNumber: 101,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n            lineNumber: 86,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n        lineNumber: 85,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CustomerSection, \"5cjl3PXbWS+RAa8IlJ2mt5HP4M4=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateContext\n    ];\n});\n_c = CustomerSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomerSection);\nvar _c;\n$RefreshReg$(_c, \"CustomerSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1c3RvbWVyL0N1c3RvbWVyU2VjdGlvbi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUQ7QUFDakI7QUFFUTtBQUNSO0FBQ3FCO0FBRzdELE1BQU1RLGtCQUFrQixTQUF1RDtRQUF0RCxFQUFFQyxRQUFPLEVBQUVDLGFBQVksRUFBRUMsdUJBQXNCLEVBQUU7O0lBQ3RFLE1BQU0sRUFBRUMsY0FBYSxFQUFFLEdBQUdMLHNFQUFlQTtJQUN6QyxNQUFNLENBQUNNLG1CQUFtQkMscUJBQXFCLEdBQUdaLCtDQUFRQSxDQUFDUTtJQUUzRCxNQUFNSyxlQUFlLENBQUNDLElBQU07UUFDeEIsTUFBTUMsUUFBUUQsRUFBRUUsTUFBTSxDQUFDRCxLQUFLO1FBQzVCLElBQUlBLFVBQVUsT0FBTztZQUNqQkgscUJBQXFCSjtRQUN6QixPQUFPLElBQUlPLFVBQVUsY0FBYztZQUMvQixNQUFNRSxXQUFXVCxhQUFhVSxNQUFNLENBQUMsQ0FBQ0MsV0FBYTtnQkFDL0MsTUFBTUMsUUFBUSxJQUFJQztnQkFDbEIsTUFBTUMsUUFBUSxJQUFJRCxLQUFLRixTQUFTSSxlQUFlO2dCQUUvQyxNQUFNQyxtQkFBbUJkLGNBQWNVLE9BQU9FO2dCQUM5QyxJQUFJLElBQUlFLG9CQUFvQkEsb0JBQW9CLEdBQUU7b0JBQzlDLE9BQU9MO2dCQUNYLENBQUM7WUFDTDtZQUNBUCxxQkFBcUJLO1FBQ3pCLE9BQU8sSUFBSUYsVUFBUyxhQUFjO1lBQzlCLE1BQU1VLHFCQUFxQmpCLGFBQWFVLE1BQU0sQ0FBQyxDQUFDQyxXQUFhO2dCQUN6RCxrSkFBa0o7Z0JBQ2xKLE1BQU1PLE9BQU9oQixjQUFjLElBQUlXLEtBQUtGLFNBQVNRLGNBQWMsR0FBRyxJQUFJTjtnQkFDbEUsSUFBSSxJQUFJSyxRQUFRQSxRQUFRLEdBQUc7b0JBQ3ZCLE9BQU9QO2dCQUNYLENBQUM7WUFDTDtZQUNDLGtGQUFrRjtZQUNsRlMsUUFBUUMsR0FBRyxDQUFFSjtZQUNkQSxtQkFBbUJLLElB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QWtCd0MsSUFBSSxDQUFDQyxDQUFBQSxZQUFhQSxVQUFVQyxNQUFNLEtBQUtILFVBQVVHLE1BQU0sR0FDM0VDLEdBQUcsQ0FBQyxDQUFDbkMseUJBQ0gsOERBQUNoQix3REFBZUE7NEJBQXVCZ0IsVUFBVUE7NEJBQVVWLHdCQUF3QkE7MkJBQTdEVSxTQUFTa0MsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2pFO0dBeEdNL0M7O1FBQ3dCRCxrRUFBZUE7OztLQUR2Q0M7QUEwR04sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXN0b21lci9DdXN0b21lclNlY3Rpb24uanN4PzZjZWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XG5cbmltcG9ydCBDdXN0b21lclByZXZpZXcgZnJvbSAnLi9DdXN0b21lclByZXZpZXcnO1xuaW1wb3J0IENhcmQgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NhcmQnO1xuaW1wb3J0IHsgdXNlU3RhdGVDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9TdGF0ZUNvbnRleHQnO1xuXG5cbmNvbnN0IEN1c3RvbWVyU2VjdGlvbiA9ICh7IHNlY3Rpb24sIGN1c3RvbWVyTGlzdCwgc2Nyb2xsVG9DdXN0b21lckRldGFpbCB9KSA9PiB7XG4gICAgY29uc3QgeyBkYXlEaWZmZXJlbmNlIH0gPSB1c2VTdGF0ZUNvbnRleHQoKVxuICAgIGNvbnN0IFtmaWx0ZXJlZEN1c3RvbWVycywgc2V0RmlsdGVyZWRDdXN0b21lcnNdID0gdXNlU3RhdGUoY3VzdG9tZXJMaXN0KVxuXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICBpZiAodmFsdWUgPT09IFwiYWxsXCIpIHtcbiAgICAgICAgICAgIHNldEZpbHRlcmVkQ3VzdG9tZXJzKGN1c3RvbWVyTGlzdClcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJuZWVkX2NoZWNrXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXBMaXN0ID0gY3VzdG9tZXJMaXN0LmZpbHRlcigoY3VzdG9tZXIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlMSA9IG5ldyBEYXRlKClcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlMiA9IG5ldyBEYXRlKGN1c3RvbWVyLlN1Ym1pc3Npb25fRGF0ZSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBkaWZmZXJlbmNlSW5EYXlzID0gZGF5RGlmZmVyZW5jZShkYXRlMSwgZGF0ZTIpXG4gICAgICAgICAgICAgICAgaWYgKDAgPCBkaWZmZXJlbmNlSW5EYXlzICYmIGRpZmZlcmVuY2VJbkRheXMgPD0gMil7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXN0b21lclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBzZXRGaWx0ZXJlZEN1c3RvbWVycyh0ZW1wTGlzdClcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT1cImZvbGxvd191cFwiICkge1xuICAgICAgICAgICAgY29uc3QgdGVtcExpc3RfZm9sbG93X3VwID0gY3VzdG9tZXJMaXN0LmZpbHRlcigoY3VzdG9tZXIpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBzZWUgYWxsIHRoZSBpbnRlcm5hbGx5IG1hdGNoZWQgY3VzdG9tZXJzIHdobyB3ZXJlIHRha2luZyBhY3Rpb25zIG9uZSBkYXkgYmVmb3JlIGZyb20gdGhlIGludGVybmFsIG1hdGNoZWQgc2VjdGlvbiBzaG93aW5nIHVuZGVyIHRoaXMgY2F0ZWdvcnkuIFxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBkYXlEaWZmZXJlbmNlKG5ldyBEYXRlKGN1c3RvbWVyLkxhc3RVcGRhdGVUaW1lKSwgbmV3IERhdGUoKSlcbiAgICAgICAgICAgICAgICBpZiAoMCA8IGRhdGUgJiYgZGF0ZSA8PSAxICl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXN0b21lclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgLy9vcmRlciBieSBwcmljZSBmcm9tIGhpZ2ggdG8gbG93IGFuZCB0aGVuIGJhc2VkIG9uIHVyZ2VuY3k6IG1vc3QgdXJnZW50IHRvIGxlYXN0LlxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKCB0ZW1wTGlzdF9mb2xsb3dfdXApXG4gICAgICAgICAgICB0ZW1wTGlzdF9mb2xsb3dfdXAuc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShhLnJlbnRfZGF0ZSkgLSBuZXcgRGF0ZShiLnJlbnRfZGF0ZSlcbiAgICAgICAgICAgICAgfSkuc29ydCgoYSwgYikgPT4gcGFyc2VGbG9hdChiLkJ1ZGdldF9wcmljZSkgLSBwYXJzZUZsb2F0KGEuQnVkZ2V0X3ByaWNlKSlcbiAgICAgICAgICAgIHNldEZpbHRlcmVkQ3VzdG9tZXJzKHRlbXBMaXN0X2ZvbGxvd191cClcbiAgICAgICAgICAgIFxuICAgICAgICB9ZWxzZSBpZiAodmFsdWUgPT09XCJzZWVfaG91c2VcIiApIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXBMaXN0X3NlZV9ob3VzZSA9IGN1c3RvbWVyTGlzdC5maWx0ZXIoKGN1c3RvbWVyKSA9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmIChjdXN0b21lci5yZW50X3N0YXR1cz09PSfnnIvmiL/lrqLmiLcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXN0b21lclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvL29yZGVyaW5nIHJlc3VsdHMgYnkgdGhlIG5lYXJlc3QgcmF0ZSBkYXRlIHRvIGxhdGVyXG4gICAgICAgICAgICB0ZW1wTGlzdF9zZWVfaG91c2Uuc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShiLnJlbnRfZGF0ZSkgLSBuZXcgRGF0ZShhLnJlbnRfZGF0ZSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHNldEZpbHRlcmVkQ3VzdG9tZXJzKHRlbXBMaXN0X3NlZV9ob3VzZSlcbiAgICAgICAgfWVsc2UgaWYgKHZhbHVlID09PVwic2hvcnRfcmVudFwiICkge1xuICAgICAgICAgICAgY29uc3QgdGVtcExpc3Rfc2hvcnRfcmVudCA9IGN1c3RvbWVyTGlzdC5maWx0ZXIoKGN1c3RvbWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGN1c3RvbWVyLnJlbnRfZHVyYXRpb24hPT0n6ZW/56efMeW5tCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1c3RvbWVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vT3JkZXIgYnkgdXJnZW5jeTogbW9zdCB1cmdlbnQgdG8gbGVzcyB1cmdlbnRcbiAgICAgICAgICAgIHRlbXBMaXN0X3Nob3J0X3JlbnQuc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShhLnJlbnRfZGF0ZSkgLSBuZXcgRGF0ZShiLnJlbnRfZGF0ZSlcbiAgICAgICAgICAgICAgfSkuc29ydCgoYSwgYikgPT4gcGFyc2VGbG9hdChiLkJ1ZGdldF9wcmljZSkgLSBwYXJzZUZsb2F0KGEuQnVkZ2V0X3ByaWNlKSk7XG4gICAgICAgICAgICBzZXRGaWx0ZXJlZEN1c3RvbWVycyh0ZW1wTGlzdF9zaG9ydF9yZW50KVxuICAgICAgICB9ZWxzZSBpZiAodmFsdWUgPT09XCJwZW5kaW5nXCIgKSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wTGlzdF9wZW5kaW5nID0gY3VzdG9tZXJMaXN0LmZpbHRlcigoY3VzdG9tZXIpID0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKGN1c3RvbWVyLnJlbnRfc3RhdHVzPT09J1BFTkRJTkcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXN0b21lclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvL29yZGVyIGJ5IHByaWNlIGZyb20gaGlnaCB0byBsb3cgYW5kIHRoZW4gYmFzZWQgb24gdXJnZW5jeTogbW9zdCB1cmdlbnQgdG8gbGVhc3QuXG4gICAgICAgICAgICB0ZW1wTGlzdF9wZW5kaW5nLnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYS5yZW50X2RhdGUpIC0gbmV3IERhdGUoYi5yZW50X2RhdGUpXG4gICAgICAgICAgICAgIH0pLnNvcnQoKGEsIGIpID0+IHBhcnNlRmxvYXQoYi5CdWRnZXRfcHJpY2UpIC0gcGFyc2VGbG9hdChhLkJ1ZGdldF9wcmljZSkpO1xuICAgICAgICAgICAgc2V0RmlsdGVyZWRDdXN0b21lcnModGVtcExpc3RfcGVuZGluZylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIDxvcHRpb24gdmFsdWU9XCJuZWVkX2NvbmZpcm1cIj7lhoXpg6jljLnphY3lvoXnoa7orqQ8L29wdGlvbj5cbiAgICAvLyA8b3B0aW9uIHZhbHVlPVwiZXh0ZXJuYWxcIj7lpJbpg6jmiL/mupDlvIDlj5Hnp5/lrqI8L29wdGlvbj5cbiAgICAvLyA8b3B0aW9uIHZhbHVlPVwib25fYXBwb2ludG1lbnRcIj7nuqbnnIvmiL88L29wdGlvbj5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgIDxDYXJkLkJvZHk+XG4gICAgICAgICAgICAgICAgPENhcmQuVGl0bGUgY2xhc3NOYW1lPSd0aXRsZS13aXRoLW9iamVjdCc+XG4gICAgICAgICAgICAgICAgICAgIHtgJHtzZWN0aW9ufSAoJHtmaWx0ZXJlZEN1c3RvbWVycy5sZW5ndGh9KWB9XG4gICAgICAgICAgICAgICAgICAgIHtzZWN0aW9uID09PSAnQ3VycmVudCcgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5TZWxlY3QgY2xhc3NOYW1lPVwiZHJvcGRvd24tc2VsZWN0XCIgc2l6ZT1cInNtXCIgb25DaGFuZ2U9e2hhbmRsZVNlbGVjdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImFsbFwiPkFsbDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJuZWVkX2NoZWNrXCI+6ZyA6KaB5b2V5YWl5ZKM5qC45a+55oi/5rqQ6ZyA5rGC55qE56ef5a6iPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZvbGxvd191cFwiPlllc3RlcmRheSBGb2xsb3ctdXA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic2VlX2hvdXNlXCI+55yL5oi/5a6i5oi3PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNob3J0X3JlbnRcIj5TaG9ydC10ZXJtIHJlbnRhbDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwZW5kaW5nXCI+UGVuZGluZzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLlNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvQ2FyZC5UaXRsZT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VjdGlvbi1jb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJMaXN0LmZpbHRlcihjdXN0b21lcjEgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZEN1c3RvbWVycy5zb21lKGN1c3RvbWVyMiA9PiBjdXN0b21lcjIuVXNlcklkID09PSBjdXN0b21lcjEuVXNlcklkKVxuICAgICAgICAgICAgICAgICAgICAgICAgKS5tYXAoKGN1c3RvbWVyKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21lclByZXZpZXcga2V5PXtjdXN0b21lci5Vc2VySWR9IGN1c3RvbWVyPXtjdXN0b21lcn0gc2Nyb2xsVG9DdXN0b21lckRldGFpbD17c2Nyb2xsVG9DdXN0b21lckRldGFpbH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9DYXJkLkJvZHk+XG4gICAgICAgIDwvQ2FyZD5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21lclNlY3Rpb247Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJGb3JtIiwiQ3VzdG9tZXJQcmV2aWV3IiwiQ2FyZCIsInVzZVN0YXRlQ29udGV4dCIsIkN1c3RvbWVyU2VjdGlvbiIsInNlY3Rpb24iLCJjdXN0b21lckxpc3QiLCJzY3JvbGxUb0N1c3RvbWVyRGV0YWlsIiwiZGF5RGlmZmVyZW5jZSIsImZpbHRlcmVkQ3VzdG9tZXJzIiwic2V0RmlsdGVyZWRDdXN0b21lcnMiLCJoYW5kbGVTZWxlY3QiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJ0ZW1wTGlzdCIsImZpbHRlciIsImN1c3RvbWVyIiwiZGF0ZTEiLCJEYXRlIiwiZGF0ZTIiLCJTdWJtaXNzaW9uX0RhdGUiLCJkaWZmZXJlbmNlSW5EYXlzIiwidGVtcExpc3RfZm9sbG93X3VwIiwiZGF0ZSIsIkxhc3RVcGRhdGVUaW1lIiwiY29uc29sZSIsImxvZyIsInNvcnQiLCJhIiwiYiIsInJlbnRfZGF0ZSIsInBhcnNlRmxvYXQiLCJCdWRnZXRfcHJpY2UiLCJ0ZW1wTGlzdF9zZWVfaG91c2UiLCJyZW50X3N0YXR1cyIsInRlbXBMaXN0X3Nob3J0X3JlbnQiLCJyZW50X2R1cmF0aW9uIiwidGVtcExpc3RfcGVuZGluZyIsIkJvZHkiLCJUaXRsZSIsImNsYXNzTmFtZSIsImxlbmd0aCIsIlNlbGVjdCIsInNpemUiLCJvbkNoYW5nZSIsIm9wdGlvbiIsImRpdiIsImN1c3RvbWVyMSIsInNvbWUiLCJjdXN0b21lcjIiLCJVc2VySWQiLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Customer/CustomerSection.jsx\n"));

/***/ })

});