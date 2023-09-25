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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var _CustomerPreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomerPreview */ \"./components/Customer/CustomerPreview.jsx\");\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Card */ \"./node_modules/react-bootstrap/esm/Card.js\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/StateContext */ \"./context/StateContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst CustomerSection = (param)=>{\n    let { section , customerList , scrollToCustomerDetail  } = param;\n    _s();\n    const { dayDifference , prioritizing_cutsomer  } = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateContext)();\n    const [filteredCustomers, setFilteredCustomers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(customerList);\n    const handleSelect = (e)=>{\n        const value = e.target.value;\n        if (value === \"all\") {\n            const all_customer = prioritizing_cutsomer(customerList.sort((a, b)=>parseFloat(b.Budget_price) - parseFloat(a.Budget_price)));\n            setFilteredCustomers(all_customer);\n        } else if (value === \"need_check\") {\n            const tempList = customerList.filter((customer)=>{\n                const date1 = new Date();\n                const date2 = new Date(customer.Submission_Date);\n                const differenceInDays = dayDifference(date1, date2);\n                if (0 < differenceInDays && differenceInDays <= 2) {\n                    return customer;\n                }\n            });\n            setFilteredCustomers(tempList);\n        } else if (value === \"follow_up\") {\n            //order by price from high to low and then based on urgency: most urgent to least.\n            customerList.sort(function(a, b) {\n                return new Date(a.rent_date) - new Date(b.rent_date);\n            }).sort((a, b)=>parseFloat(b.Budget_price) - parseFloat(a.Budget_price));\n            const tempList_follow_up = customerList.filter((customer)=>{\n                // see all the internally matched customers who were taking actions one day before from the internal matched section showing under this category. \n                const date = dayDifference(new Date(customer.LastUpdateTime), new Date());\n                if (0 < date && date <= 1) {\n                    return customer;\n                }\n            });\n            setFilteredCustomers(tempList_follow_up);\n        } else if (value === \"see_house\") {\n            //ordering results by the nearest rate date to later\n            customerList.sort(function(a, b) {\n                return new Date(b.rent_date) - new Date(a.rent_date);\n            });\n            const tempList_see_house = customerList.filter((customer)=>{\n                if (customer.rent_status === \"看房客户\") {\n                    return customer;\n                }\n            });\n            setFilteredCustomers(tempList_see_house);\n        } else if (value === \"short_rent\") {\n            customerList.sort(function(a, b) {\n                return new Date(a.rent_date) - new Date(b.rent_date);\n            }).sort((a, b)=>parseFloat(b.Budget_price) - parseFloat(a.Budget_price));\n            const tempList_short_rent = customerList.filter((customer)=>{\n                if (customer.rent_duration !== \"长租1年\") {\n                    return customer;\n                }\n            });\n            setFilteredCustomers(tempList_short_rent);\n        } else if (value === \"pending\") {\n            //order by price from high to low and then based on urgency: most urgent to least.\n            customerList.sort(function(a, b) {\n                return new Date(a.rent_date) - new Date(b.rent_date);\n            }).sort((a, b)=>parseFloat(b.Budget_price) - parseFloat(a.Budget_price));\n            const tempList_pending = customerList.filter((customer)=>{\n                if (customer.rent_status === \"PENDING\") {\n                    return customer;\n                }\n            });\n            setFilteredCustomers(tempList_pending);\n        }\n    };\n    // <option value=\"need_confirm\">内部匹配待确认</option>\n    // <option value=\"external\">外部房源开发租客</option>\n    // <option value=\"on_appointment\">约看房</option>\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Body, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Title, {\n                    className: \"title-with-object\",\n                    children: [\n                        \"\".concat(section, \" (\").concat(filteredCustomers.length, \")\"),\n                        section === \"Current\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Select, {\n                            className: \"dropdown-select\",\n                            size: \"sm\",\n                            onChange: handleSelect,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"all\",\n                                    children: \"All\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"need_check\",\n                                    children: \"需要录入和核对房源需求的租客\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"follow_up\",\n                                    children: \"Yesterday Follow-up\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"see_house\",\n                                    children: \"看房客户\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"short_rent\",\n                                    children: \"Short-term rental\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"pending\",\n                                    children: \"Pending\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                            lineNumber: 94,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                    lineNumber: 91,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"section-container\",\n                    children: customerList.filter((customer1)=>filteredCustomers.some((customer2)=>customer2.UserId === customer1.UserId)).map((customer)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CustomerPreview__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            customer: customer,\n                            scrollToCustomerDetail: scrollToCustomerDetail\n                        }, customer.UserId, false, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                            lineNumber: 110,\n                            columnNumber: 29\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                    lineNumber: 105,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n            lineNumber: 90,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n        lineNumber: 89,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CustomerSection, \"oBRAsdLV0YfEXrWV0YyB1UFx+nM=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateContext\n    ];\n});\n_c = CustomerSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomerSection);\nvar _c;\n$RefreshReg$(_c, \"CustomerSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1c3RvbWVyL0N1c3RvbWVyU2VjdGlvbi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUQ7QUFDakI7QUFFUTtBQUNSO0FBQ3FCO0FBRzdELE1BQU1RLGtCQUFrQixTQUF1RDtRQUF0RCxFQUFFQyxRQUFPLEVBQUVDLGFBQVksRUFBRUMsdUJBQXNCLEVBQUU7O0lBQ3RFLE1BQU0sRUFBRUMsY0FBYSxFQUFDQyxzQkFBcUIsRUFBRSxHQUFHTixzRUFBZUE7SUFDL0QsTUFBTSxDQUFDTyxtQkFBbUJDLHFCQUFxQixHQUFHYiwrQ0FBUUEsQ0FBQ1E7SUFHM0QsTUFBTU0sZUFBZSxDQUFDQyxJQUFNO1FBQ3hCLE1BQU1DLFFBQVFELEVBQUVFLE1BQU0sQ0FBQ0QsS0FBSztRQUM1QixJQUFJQSxVQUFVLE9BQU87WUFDakIsTUFBTUUsZUFBZVAsc0JBQXNCSCxhQUFhVyxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUMsV0FBV0QsRUFBRUUsWUFBWSxJQUFJRCxXQUFXRixFQUFFRyxZQUFZO1lBRTdIVixxQkFBcUJLO1FBQ3pCLE9BQU8sSUFBSUYsVUFBVSxjQUFjO1lBQy9CLE1BQU1RLFdBQVdoQixhQUFhaUIsTUFBTSxDQUFDLENBQUNDLFdBQWE7Z0JBQy9DLE1BQU1DLFFBQVEsSUFBSUM7Z0JBQ2xCLE1BQU1DLFFBQVEsSUFBSUQsS0FBS0YsU0FBU0ksZUFBZTtnQkFFL0MsTUFBTUMsbUJBQW1CckIsY0FBY2lCLE9BQU9FO2dCQUM5QyxJQUFJLElBQUlFLG9CQUFvQkEsb0JBQW9CLEdBQUU7b0JBQzlDLE9BQU9MO2dCQUNYLENBQUM7WUFDTDtZQUNBYixxQkFBcUJXO1FBQ3pCLE9BQU8sSUFBSVIsVUFBVSxhQUFhO1lBQzlCLGtGQUFrRjtZQUNsRlIsYUFBYVcsSUFBSSxDQUFDLFNBQVNDLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO2dCQUMzQixPQUFPLElBQUlPLEtBQUtSLEVBQUVZLFNBQVMsSUFBSSxJQUFJSixLQUFLUCxFQUFF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Qyw4REFBQ2lDO29CQUFJTixXQUFVOzhCQUVQbkMsYUFBYWlCLE1BQU0sQ0FBQ3lCLENBQUFBLFlBQ2hCdEMsa0JBQWtCdUMsSUFBSSxDQUFDQyxDQUFBQSxZQUFhQSxVQUFVQyxNQUFNLEtBQUtILFVBQVVHLE1BQU0sR0FDM0VDLEdBQUcsQ0FBQyxDQUFDNUIseUJBQ0gsOERBQUN2Qix3REFBZUE7NEJBQXVCdUIsVUFBVUE7NEJBQVVqQix3QkFBd0JBOzJCQUE3RGlCLFNBQVMyQixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPakU7R0E1R00vQzs7UUFDOENELGtFQUFlQTs7O0tBRDdEQztBQThHTiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0N1c3RvbWVyL0N1c3RvbWVyU2VjdGlvbi5qc3g/NmNlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWZ9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcblxuaW1wb3J0IEN1c3RvbWVyUHJldmlldyBmcm9tICcuL0N1c3RvbWVyUHJldmlldyc7XG5pbXBvcnQgQ2FyZCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ2FyZCc7XG5pbXBvcnQgeyB1c2VTdGF0ZUNvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0L1N0YXRlQ29udGV4dCc7XG5cblxuY29uc3QgQ3VzdG9tZXJTZWN0aW9uID0gKHsgc2VjdGlvbiwgY3VzdG9tZXJMaXN0LCBzY3JvbGxUb0N1c3RvbWVyRGV0YWlsIH0pID0+IHtcbiAgICBjb25zdCB7IGRheURpZmZlcmVuY2UscHJpb3JpdGl6aW5nX2N1dHNvbWVyIH0gPSB1c2VTdGF0ZUNvbnRleHQoKVxuICAgIGNvbnN0IFtmaWx0ZXJlZEN1c3RvbWVycywgc2V0RmlsdGVyZWRDdXN0b21lcnNdID0gdXNlU3RhdGUoY3VzdG9tZXJMaXN0KVxuXG5cbiAgICBjb25zdCBoYW5kbGVTZWxlY3QgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gXCJhbGxcIikge1xuICAgICAgICAgICAgY29uc3QgYWxsX2N1c3RvbWVyID0gcHJpb3JpdGl6aW5nX2N1dHNvbWVyKGN1c3RvbWVyTGlzdC5zb3J0KChhLCBiKSA9PiBwYXJzZUZsb2F0KGIuQnVkZ2V0X3ByaWNlKSAtIHBhcnNlRmxvYXQoYS5CdWRnZXRfcHJpY2UpKSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc2V0RmlsdGVyZWRDdXN0b21lcnMoYWxsX2N1c3RvbWVyKVxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcIm5lZWRfY2hlY2tcIikge1xuICAgICAgICAgICAgY29uc3QgdGVtcExpc3QgPSBjdXN0b21lckxpc3QuZmlsdGVyKChjdXN0b21lcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUxID0gbmV3IERhdGUoKVxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUyID0gbmV3IERhdGUoY3VzdG9tZXIuU3VibWlzc2lvbl9EYXRlKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGRpZmZlcmVuY2VJbkRheXMgPSBkYXlEaWZmZXJlbmNlKGRhdGUxLCBkYXRlMilcbiAgICAgICAgICAgICAgICBpZiAoMCA8IGRpZmZlcmVuY2VJbkRheXMgJiYgZGlmZmVyZW5jZUluRGF5cyA8PSAyKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1c3RvbWVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHNldEZpbHRlcmVkQ3VzdG9tZXJzKHRlbXBMaXN0KVxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcImZvbGxvd191cFwiKSB7XG4gICAgICAgICAgICAvL29yZGVyIGJ5IHByaWNlIGZyb20gaGlnaCB0byBsb3cgYW5kIHRoZW4gYmFzZWQgb24gdXJnZW5jeTogbW9zdCB1cmdlbnQgdG8gbGVhc3QuXG4gICAgICAgICAgICBjdXN0b21lckxpc3Quc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShhLnJlbnRfZGF0ZSkgLSBuZXcgRGF0ZShiLnJlbnRfZGF0ZSlcbiAgICAgICAgICAgIH0pLnNvcnQoKGEsIGIpID0+IHBhcnNlRmxvYXQoYi5CdWRnZXRfcHJpY2UpIC0gcGFyc2VGbG9hdChhLkJ1ZGdldF9wcmljZSkpXG5cbiAgICAgICAgICAgIGNvbnN0IHRlbXBMaXN0X2ZvbGxvd191cCA9IGN1c3RvbWVyTGlzdC5maWx0ZXIoKGN1c3RvbWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gc2VlIGFsbCB0aGUgaW50ZXJuYWxseSBtYXRjaGVkIGN1c3RvbWVycyB3aG8gd2VyZSB0YWtpbmcgYWN0aW9ucyBvbmUgZGF5IGJlZm9yZSBmcm9tIHRoZSBpbnRlcm5hbCBtYXRjaGVkIHNlY3Rpb24gc2hvd2luZyB1bmRlciB0aGlzIGNhdGVnb3J5LiBcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlID0gZGF5RGlmZmVyZW5jZShuZXcgRGF0ZShjdXN0b21lci5MYXN0VXBkYXRlVGltZSksIG5ldyBEYXRlKCkpXG4gICAgICAgICAgICAgICAgaWYgKDAgPCBkYXRlICYmIGRhdGUgPD0gMSApe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VzdG9tZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgc2V0RmlsdGVyZWRDdXN0b21lcnModGVtcExpc3RfZm9sbG93X3VwKVxuXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwic2VlX2hvdXNlXCIpIHtcbiAgICAgICAgICAgIC8vb3JkZXJpbmcgcmVzdWx0cyBieSB0aGUgbmVhcmVzdCByYXRlIGRhdGUgdG8gbGF0ZXJcbiAgICAgICAgICAgIGN1c3RvbWVyTGlzdC5zb3J0KGZ1bmN0aW9uKGEsYil7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGIucmVudF9kYXRlKSAtIG5ldyBEYXRlKGEucmVudF9kYXRlKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc3QgdGVtcExpc3Rfc2VlX2hvdXNlID0gY3VzdG9tZXJMaXN0LmZpbHRlcigoY3VzdG9tZXIpID0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKGN1c3RvbWVyLnJlbnRfc3RhdHVzPT09J+eci+aIv+WuouaItycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1c3RvbWVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHNldEZpbHRlcmVkQ3VzdG9tZXJzKHRlbXBMaXN0X3NlZV9ob3VzZSlcblxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcInNob3J0X3JlbnRcIikge1xuICAgICAgICAgICAgY3VzdG9tZXJMaXN0LnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYS5yZW50X2RhdGUpIC0gbmV3IERhdGUoYi5yZW50X2RhdGUpXG4gICAgICAgICAgICAgIH0pLnNvcnQoKGEsIGIpID0+IHBhcnNlRmxvYXQoYi5CdWRnZXRfcHJpY2UpIC0gcGFyc2VGbG9hdChhLkJ1ZGdldF9wcmljZSkpO1xuICAgICAgICAgICAgY29uc3QgdGVtcExpc3Rfc2hvcnRfcmVudCA9IGN1c3RvbWVyTGlzdC5maWx0ZXIoKGN1c3RvbWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGN1c3RvbWVyLnJlbnRfZHVyYXRpb24hPT0n6ZW/56efMeW5tCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1c3RvbWVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHNldEZpbHRlcmVkQ3VzdG9tZXJzKHRlbXBMaXN0X3Nob3J0X3JlbnQpXG5cbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJwZW5kaW5nXCIpIHtcbiAgICAgICAgICAgICAvL29yZGVyIGJ5IHByaWNlIGZyb20gaGlnaCB0byBsb3cgYW5kIHRoZW4gYmFzZWQgb24gdXJnZW5jeTogbW9zdCB1cmdlbnQgdG8gbGVhc3QuXG4gICAgICAgICAgICAgY3VzdG9tZXJMaXN0LnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYS5yZW50X2RhdGUpIC0gbmV3IERhdGUoYi5yZW50X2RhdGUpXG4gICAgICAgICAgICAgIH0pLnNvcnQoKGEsIGIpID0+IHBhcnNlRmxvYXQoYi5CdWRnZXRfcHJpY2UpIC0gcGFyc2VGbG9hdChhLkJ1ZGdldF9wcmljZSkpO1xuICAgICAgICAgICAgY29uc3QgdGVtcExpc3RfcGVuZGluZyA9IGN1c3RvbWVyTGlzdC5maWx0ZXIoKGN1c3RvbWVyKSA9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmIChjdXN0b21lci5yZW50X3N0YXR1cz09PSdQRU5ESU5HJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VzdG9tZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgc2V0RmlsdGVyZWRDdXN0b21lcnModGVtcExpc3RfcGVuZGluZylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIDxvcHRpb24gdmFsdWU9XCJuZWVkX2NvbmZpcm1cIj7lhoXpg6jljLnphY3lvoXnoa7orqQ8L29wdGlvbj5cbiAgICAvLyA8b3B0aW9uIHZhbHVlPVwiZXh0ZXJuYWxcIj7lpJbpg6jmiL/mupDlvIDlj5Hnp5/lrqI8L29wdGlvbj5cbiAgICAvLyA8b3B0aW9uIHZhbHVlPVwib25fYXBwb2ludG1lbnRcIj7nuqbnnIvmiL88L29wdGlvbj5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgIDxDYXJkLkJvZHk+XG4gICAgICAgICAgICAgICAgPENhcmQuVGl0bGUgY2xhc3NOYW1lPSd0aXRsZS13aXRoLW9iamVjdCc+XG4gICAgICAgICAgICAgICAgICAgIHtgJHtzZWN0aW9ufSAoJHtmaWx0ZXJlZEN1c3RvbWVycy5sZW5ndGh9KWB9XG4gICAgICAgICAgICAgICAgICAgIHtzZWN0aW9uID09PSAnQ3VycmVudCcgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5TZWxlY3QgY2xhc3NOYW1lPVwiZHJvcGRvd24tc2VsZWN0XCIgc2l6ZT1cInNtXCIgb25DaGFuZ2U9e2hhbmRsZVNlbGVjdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImFsbFwiPkFsbDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJuZWVkX2NoZWNrXCI+6ZyA6KaB5b2V5YWl5ZKM5qC45a+55oi/5rqQ6ZyA5rGC55qE56ef5a6iPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZvbGxvd191cFwiPlllc3RlcmRheSBGb2xsb3ctdXA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic2VlX2hvdXNlXCI+55yL5oi/5a6i5oi3PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNob3J0X3JlbnRcIj5TaG9ydC10ZXJtIHJlbnRhbDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwZW5kaW5nXCI+UGVuZGluZzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLlNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvQ2FyZC5UaXRsZT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VjdGlvbi1jb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJMaXN0LmZpbHRlcihjdXN0b21lcjEgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZEN1c3RvbWVycy5zb21lKGN1c3RvbWVyMiA9PiBjdXN0b21lcjIuVXNlcklkID09PSBjdXN0b21lcjEuVXNlcklkKVxuICAgICAgICAgICAgICAgICAgICAgICAgKS5tYXAoKGN1c3RvbWVyKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21lclByZXZpZXcga2V5PXtjdXN0b21lci5Vc2VySWR9IGN1c3RvbWVyPXtjdXN0b21lcn0gc2Nyb2xsVG9DdXN0b21lckRldGFpbD17c2Nyb2xsVG9DdXN0b21lckRldGFpbH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9DYXJkLkJvZHk+XG4gICAgICAgIDwvQ2FyZD5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21lclNlY3Rpb247Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJGb3JtIiwiQ3VzdG9tZXJQcmV2aWV3IiwiQ2FyZCIsInVzZVN0YXRlQ29udGV4dCIsIkN1c3RvbWVyU2VjdGlvbiIsInNlY3Rpb24iLCJjdXN0b21lckxpc3QiLCJzY3JvbGxUb0N1c3RvbWVyRGV0YWlsIiwiZGF5RGlmZmVyZW5jZSIsInByaW9yaXRpemluZ19jdXRzb21lciIsImZpbHRlcmVkQ3VzdG9tZXJzIiwic2V0RmlsdGVyZWRDdXN0b21lcnMiLCJoYW5kbGVTZWxlY3QiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJhbGxfY3VzdG9tZXIiLCJzb3J0IiwiYSIsImIiLCJwYXJzZUZsb2F0IiwiQnVkZ2V0X3ByaWNlIiwidGVtcExpc3QiLCJmaWx0ZXIiLCJjdXN0b21lciIsImRhdGUxIiwiRGF0ZSIsImRhdGUyIiwiU3VibWlzc2lvbl9EYXRlIiwiZGlmZmVyZW5jZUluRGF5cyIsInJlbnRfZGF0ZSIsInRlbXBMaXN0X2ZvbGxvd191cCIsImRhdGUiLCJMYXN0VXBkYXRlVGltZSIsInRlbXBMaXN0X3NlZV9ob3VzZSIsInJlbnRfc3RhdHVzIiwidGVtcExpc3Rfc2hvcnRfcmVudCIsInJlbnRfZHVyYXRpb24iLCJ0ZW1wTGlzdF9wZW5kaW5nIiwiQm9keSIsIlRpdGxlIiwiY2xhc3NOYW1lIiwibGVuZ3RoIiwiU2VsZWN0Iiwic2l6ZSIsIm9uQ2hhbmdlIiwib3B0aW9uIiwiZGl2IiwiY3VzdG9tZXIxIiwic29tZSIsImN1c3RvbWVyMiIsIlVzZXJJZCIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Customer/CustomerSection.jsx\n"));

/***/ })

});