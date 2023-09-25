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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var _CustomerPreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomerPreview */ \"./components/Customer/CustomerPreview.jsx\");\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Card */ \"./node_modules/react-bootstrap/esm/Card.js\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/StateContext */ \"./context/StateContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst CustomerSection = (param)=>{\n    let { section , customerList , scrollToCustomerDetail  } = param;\n    _s();\n    const { dayDifference  } = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateContext)();\n    const [filteredCustomers, setFilteredCustomers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(customerList);\n    const prioritizing_cutsomer = (customers)=>{\n        //起租日没过的 优先级更高 离起租日越近 优先级更高\n        //起租日过了的 离起租日越近 优先级越高\n        //起租日没有过的优先级超过起租日已经过了的\n        customers.sort(function(a, b) {\n            return new Date(b.rent_date) - new Date(a.rent_date);\n        });\n        customers.filter((customer)=>{\n            const today = new Date();\n            const rent_day = new Date(customer.rent_date);\n            const rent_date_not_pass = dayDifference(today, rent_day);\n            if (0 < date && date <= 1) {\n                return customer;\n            }\n            const rent_date_pass = dayDifference(today, rent_day);\n            if (0 > rent_date_pass && Math.abs(rent_date_pass) <= 1) {\n                return customer;\n            }\n        });\n    };\n    const handleSelect = (e)=>{\n        const value = e.target.value;\n        if (value === \"all\") {\n            setFilteredCustomers(customerList);\n        } else if (value === \"need_check\") {\n            const tempList = customerList.filter((customer)=>{\n                const date1 = new Date();\n                const date2 = new Date(customer.Submission_Date);\n                const differenceInDays = dayDifference(date1, date2);\n                if (0 < differenceInDays && differenceInDays <= 2) {\n                    return customer;\n                }\n            });\n            setFilteredCustomers(tempList);\n        } else if (value === \"follow_up\") {\n            //order by price from high to low and then based on urgency: most urgent to least.\n            customerList.sort(function(a, b) {\n                return new Date(a.rent_date) - new Date(b.rent_date);\n            }).sort((a, b)=>parseFloat(b.Budget_price) - parseFloat(a.Budget_price));\n            const tempList_follow_up = customerList.filter((customer)=>{\n                // see all the internally matched customers who were taking actions one day before from the internal matched section showing under this category. \n                const date1 = dayDifference(new Date(customer.LastUpdateTime), new Date());\n                if (0 < date1 && date1 <= 1) {\n                    return customer;\n                }\n            });\n            setFilteredCustomers(tempList_follow_up);\n        } else if (value === \"see_house\") {\n            //ordering results by the nearest rate date to later\n            customerList.sort(function(a, b) {\n                return new Date(b.rent_date) - new Date(a.rent_date);\n            });\n            const tempList_see_house = customerList.filter((customer)=>{\n                if (customer.rent_status === \"看房客户\") {\n                    return customer;\n                }\n            });\n            setFilteredCustomers(tempList_see_house);\n        } else if (value === \"short_rent\") {\n            customerList.sort(function(a, b) {\n                return new Date(a.rent_date) - new Date(b.rent_date);\n            }).sort((a, b)=>parseFloat(b.Budget_price) - parseFloat(a.Budget_price));\n            const tempList_short_rent = customerList.filter((customer)=>{\n                if (customer.rent_duration !== \"长租1年\") {\n                    return customer;\n                }\n            });\n            setFilteredCustomers(tempList_short_rent);\n        } else if (value === \"pending\") {\n            //order by price from high to low and then based on urgency: most urgent to least.\n            customerList.sort(function(a, b) {\n                return new Date(a.rent_date) - new Date(b.rent_date);\n            }).sort((a, b)=>parseFloat(b.Budget_price) - parseFloat(a.Budget_price));\n            const tempList_pending = customerList.filter((customer)=>{\n                if (customer.rent_status === \"PENDING\") {\n                    return customer;\n                }\n            });\n            setFilteredCustomers(tempList_pending);\n        }\n    };\n    // <option value=\"need_confirm\">内部匹配待确认</option>\n    // <option value=\"external\">外部房源开发租客</option>\n    // <option value=\"on_appointment\">约看房</option>\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Body, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Title, {\n                    className: \"title-with-object\",\n                    children: [\n                        \"\".concat(section, \" (\").concat(filteredCustomers.length, \")\"),\n                        section === \"Current\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Select, {\n                            className: \"dropdown-select\",\n                            size: \"sm\",\n                            onChange: handleSelect,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"all\",\n                                    children: \"All\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 115,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"need_check\",\n                                    children: \"需要录入和核对房源需求的租客\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 116,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"follow_up\",\n                                    children: \"Yesterday Follow-up\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"see_house\",\n                                    children: \"看房客户\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"short_rent\",\n                                    children: \"Short-term rental\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 119,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"pending\",\n                                    children: \"Pending\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 120,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                            lineNumber: 114,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                    lineNumber: 111,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"section-container\",\n                    children: customerList.filter((customer1)=>filteredCustomers.some((customer2)=>customer2.UserId === customer1.UserId)).map((customer)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CustomerPreview__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            customer: customer,\n                            scrollToCustomerDetail: scrollToCustomerDetail\n                        }, customer.UserId, false, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                            lineNumber: 130,\n                            columnNumber: 29\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                    lineNumber: 125,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n            lineNumber: 110,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n        lineNumber: 109,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CustomerSection, \"5cjl3PXbWS+RAa8IlJ2mt5HP4M4=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateContext\n    ];\n});\n_c = CustomerSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomerSection);\nvar _c;\n$RefreshReg$(_c, \"CustomerSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1c3RvbWVyL0N1c3RvbWVyU2VjdGlvbi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUQ7QUFDakI7QUFFUTtBQUNSO0FBQ3FCO0FBRzdELE1BQU1RLGtCQUFrQixTQUF1RDtRQUF0RCxFQUFFQyxRQUFPLEVBQUVDLGFBQVksRUFBRUMsdUJBQXNCLEVBQUU7O0lBQ3RFLE1BQU0sRUFBRUMsY0FBYSxFQUFFLEdBQUdMLHNFQUFlQTtJQUN6QyxNQUFNLENBQUNNLG1CQUFtQkMscUJBQXFCLEdBQUdaLCtDQUFRQSxDQUFDUTtJQUUzRCxNQUFNSyx3QkFBd0IsQ0FBQ0MsWUFBYztRQUNyQywyQkFBMkI7UUFDM0IscUJBQXFCO1FBQ3JCLHNCQUFzQjtRQUUxQkEsVUFBVUMsSUFBSSxDQUFDLFNBQVNDLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO1lBQ3hCLE9BQU8sSUFBSUMsS0FBS0QsRUFBRUUsU0FBUyxJQUFJLElBQUlELEtBQUtGLEVBQUVHLFNBQVM7UUFDckQ7UUFDRkwsVUFBVU0sTUFBTSxDQUFDLENBQUNDLFdBQWE7WUFDM0IsTUFBTUMsUUFBUSxJQUFJSjtZQUNsQixNQUFNSyxXQUFXLElBQUlMLEtBQUtHLFNBQVNGLFNBQVM7WUFFNUMsTUFBTUsscUJBQXFCZCxjQUFjWSxPQUFNQztZQUMvQyxJQUFJLElBQUlFLFFBQVFBLFFBQVEsR0FBRztnQkFDdkIsT0FBT0o7WUFDWCxDQUFDO1lBQ0QsTUFBTUssaUJBQWlCaEIsY0FBY1ksT0FBTUM7WUFDM0MsSUFBSSxJQUFJRyxrQkFBa0JDLEtBQUtDLEdBQUcsQ0FBQ0YsbUJBQW1CLEdBQUc7Z0JBQ3JELE9BQU9MO1lBQ1gsQ0FBQztRQUNMO0lBQ0o7SUFFQSxNQUFNUSxlQUFlLENBQUNDLElBQU07UUFDeEIsTUFBTUMsUUFBUUQsRUFBRUUsTUFBTSxDQUFDRCxLQUFLO1FBQzVCLElBQUlBLFVBQVUsT0FBTztZQUNqQm5CLHFCQUFxQko7UUFDekIsT0FBTyxJQUFJdUIsVUFBVSxj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QUFVO29CQUFDNkMsV0FBVTs7d0JBQ2hCLEdBQWN0QyxPQUFaSixTQUFRLE1BQTZCLE9BQXpCSSxrQkFBa0J1QyxNQUFNLEVBQUM7d0JBQ3hDM0MsWUFBWSwyQkFDVCw4REFBQ0wsbUVBQVc7NEJBQUMrQyxXQUFVOzRCQUFrQkcsTUFBSzs0QkFBS0MsVUFBVXhCOzs4Q0FDekQsOERBQUN5QjtvQ0FBT3ZCLE9BQU07OENBQU07Ozs7Ozs4Q0FDcEIsOERBQUN1QjtvQ0FBT3ZCLE9BQU07OENBQWE7Ozs7Ozs4Q0FDM0IsOERBQUN1QjtvQ0FBT3ZCLE9BQU07OENBQVk7Ozs7Ozs4Q0FDMUIsOERBQUN1QjtvQ0FBT3ZCLE9BQU07OENBQVk7Ozs7Ozs4Q0FDMUIsOERBQUN1QjtvQ0FBT3ZCLE9BQU07OENBQWE7Ozs7Ozs4Q0FDM0IsOERBQUN1QjtvQ0FBT3ZCLE9BQU07OENBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFLcEMsOERBQUN3QjtvQkFBSU4sV0FBVTs4QkFFUHpDLGFBQWFZLE1BQU0sQ0FBQ29DLENBQUFBLFlBQ2hCN0Msa0JBQWtCOEMsSUFBSSxDQUFDQyxDQUFBQSxZQUFhQSxVQUFVQyxNQUFNLEtBQUtILFVBQVVHLE1BQU0sR0FDM0VDLEdBQUcsQ0FBQyxDQUFDdkMseUJBQ0gsOERBQUNsQix3REFBZUE7NEJBQXVCa0IsVUFBVUE7NEJBQVVaLHdCQUF3QkE7MkJBQTdEWSxTQUFTc0MsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2pFO0dBaElNckQ7O1FBQ3dCRCxrRUFBZUE7OztLQUR2Q0M7QUFrSU4sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXN0b21lci9DdXN0b21lclNlY3Rpb24uanN4PzZjZWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XG5cbmltcG9ydCBDdXN0b21lclByZXZpZXcgZnJvbSAnLi9DdXN0b21lclByZXZpZXcnO1xuaW1wb3J0IENhcmQgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NhcmQnO1xuaW1wb3J0IHsgdXNlU3RhdGVDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9TdGF0ZUNvbnRleHQnO1xuXG5cbmNvbnN0IEN1c3RvbWVyU2VjdGlvbiA9ICh7IHNlY3Rpb24sIGN1c3RvbWVyTGlzdCwgc2Nyb2xsVG9DdXN0b21lckRldGFpbCB9KSA9PiB7XG4gICAgY29uc3QgeyBkYXlEaWZmZXJlbmNlIH0gPSB1c2VTdGF0ZUNvbnRleHQoKVxuICAgIGNvbnN0IFtmaWx0ZXJlZEN1c3RvbWVycywgc2V0RmlsdGVyZWRDdXN0b21lcnNdID0gdXNlU3RhdGUoY3VzdG9tZXJMaXN0KVxuXG4gICAgY29uc3QgcHJpb3JpdGl6aW5nX2N1dHNvbWVyID0gKGN1c3RvbWVycykgPT4ge1xuICAgICAgICAgICAgLy/otbfnp5/ml6XmsqHov4fnmoQg5LyY5YWI57qn5pu06auYIOemu+i1t+enn+aXpei2iui/kSDkvJjlhYjnuqfmm7Tpq5hcbiAgICAgICAgICAgIC8v6LW356ef5pel6L+H5LqG55qEIOemu+i1t+enn+aXpei2iui/kSDkvJjlhYjnuqfotorpq5hcbiAgICAgICAgICAgIC8v6LW356ef5pel5rKh5pyJ6L+H55qE5LyY5YWI57qn6LaF6L+H6LW356ef5pel5bey57uP6L+H5LqG55qEXG4gICAgICAgIFxuICAgICAgICBjdXN0b21lcnMuc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGIucmVudF9kYXRlKSAtIG5ldyBEYXRlKGEucmVudF9kYXRlKVxuICAgICAgICAgIH0pXG4gICAgICAgIGN1c3RvbWVycy5maWx0ZXIoKGN1c3RvbWVyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcbiAgICAgICAgICAgIGNvbnN0IHJlbnRfZGF5ID0gbmV3IERhdGUoY3VzdG9tZXIucmVudF9kYXRlKVxuXG4gICAgICAgICAgICBjb25zdCByZW50X2RhdGVfbm90X3Bhc3MgPSBkYXlEaWZmZXJlbmNlKHRvZGF5LHJlbnRfZGF5KVxuICAgICAgICAgICAgaWYgKDAgPCBkYXRlICYmIGRhdGUgPD0gMSApe1xuICAgICAgICAgICAgICAgIHJldHVybiBjdXN0b21lclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVudF9kYXRlX3Bhc3MgPSBkYXlEaWZmZXJlbmNlKHRvZGF5LHJlbnRfZGF5KVxuICAgICAgICAgICAgaWYgKDAgPiByZW50X2RhdGVfcGFzcyAmJiBNYXRoLmFicyhyZW50X2RhdGVfcGFzcykgPD0gMSApe1xuICAgICAgICAgICAgICAgIHJldHVybiBjdXN0b21lclxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVNlbGVjdCA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgaWYgKHZhbHVlID09PSBcImFsbFwiKSB7XG4gICAgICAgICAgICBzZXRGaWx0ZXJlZEN1c3RvbWVycyhjdXN0b21lckxpc3QpXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwibmVlZF9jaGVja1wiKSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wTGlzdCA9IGN1c3RvbWVyTGlzdC5maWx0ZXIoKGN1c3RvbWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZTEgPSBuZXcgRGF0ZSgpXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZTIgPSBuZXcgRGF0ZShjdXN0b21lci5TdWJtaXNzaW9uX0RhdGUpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgZGlmZmVyZW5jZUluRGF5cyA9IGRheURpZmZlcmVuY2UoZGF0ZTEsIGRhdGUyKVxuICAgICAgICAgICAgICAgIGlmICgwIDwgZGlmZmVyZW5jZUluRGF5cyAmJiBkaWZmZXJlbmNlSW5EYXlzIDw9IDIpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VzdG9tZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgc2V0RmlsdGVyZWRDdXN0b21lcnModGVtcExpc3QpXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwiZm9sbG93X3VwXCIpIHtcbiAgICAgICAgICAgIC8vb3JkZXIgYnkgcHJpY2UgZnJvbSBoaWdoIHRvIGxvdyBhbmQgdGhlbiBiYXNlZCBvbiB1cmdlbmN5OiBtb3N0IHVyZ2VudCB0byBsZWFzdC5cbiAgICAgICAgICAgIGN1c3RvbWVyTGlzdC5zb3J0KGZ1bmN0aW9uKGEsYil7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGEucmVudF9kYXRlKSAtIG5ldyBEYXRlKGIucmVudF9kYXRlKVxuICAgICAgICAgICAgfSkuc29ydCgoYSwgYikgPT4gcGFyc2VGbG9hdChiLkJ1ZGdldF9wcmljZSkgLSBwYXJzZUZsb2F0KGEuQnVkZ2V0X3ByaWNlKSlcblxuICAgICAgICAgICAgY29uc3QgdGVtcExpc3RfZm9sbG93X3VwID0gY3VzdG9tZXJMaXN0LmZpbHRlcigoY3VzdG9tZXIpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBzZWUgYWxsIHRoZSBpbnRlcm5hbGx5IG1hdGNoZWQgY3VzdG9tZXJzIHdobyB3ZXJlIHRha2luZyBhY3Rpb25zIG9uZSBkYXkgYmVmb3JlIGZyb20gdGhlIGludGVybmFsIG1hdGNoZWQgc2VjdGlvbiBzaG93aW5nIHVuZGVyIHRoaXMgY2F0ZWdvcnkuIFxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBkYXlEaWZmZXJlbmNlKG5ldyBEYXRlKGN1c3RvbWVyLkxhc3RVcGRhdGVUaW1lKSwgbmV3IERhdGUoKSlcbiAgICAgICAgICAgICAgICBpZiAoMCA8IGRhdGUgJiYgZGF0ZSA8PSAxICl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXN0b21lclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBzZXRGaWx0ZXJlZEN1c3RvbWVycyh0ZW1wTGlzdF9mb2xsb3dfdXApXG5cbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJzZWVfaG91c2VcIikge1xuICAgICAgICAgICAgLy9vcmRlcmluZyByZXN1bHRzIGJ5IHRoZSBuZWFyZXN0IHJhdGUgZGF0ZSB0byBsYXRlclxuICAgICAgICAgICAgY3VzdG9tZXJMaXN0LnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYi5yZW50X2RhdGUpIC0gbmV3IERhdGUoYS5yZW50X2RhdGUpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zdCB0ZW1wTGlzdF9zZWVfaG91c2UgPSBjdXN0b21lckxpc3QuZmlsdGVyKChjdXN0b21lcikgPT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAoY3VzdG9tZXIucmVudF9zdGF0dXM9PT0n55yL5oi/5a6i5oi3Jykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VzdG9tZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgc2V0RmlsdGVyZWRDdXN0b21lcnModGVtcExpc3Rfc2VlX2hvdXNlKVxuXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwic2hvcnRfcmVudFwiKSB7XG4gICAgICAgICAgICBjdXN0b21lckxpc3Quc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShhLnJlbnRfZGF0ZSkgLSBuZXcgRGF0ZShiLnJlbnRfZGF0ZSlcbiAgICAgICAgICAgICAgfSkuc29ydCgoYSwgYikgPT4gcGFyc2VGbG9hdChiLkJ1ZGdldF9wcmljZSkgLSBwYXJzZUZsb2F0KGEuQnVkZ2V0X3ByaWNlKSk7XG4gICAgICAgICAgICBjb25zdCB0ZW1wTGlzdF9zaG9ydF9yZW50ID0gY3VzdG9tZXJMaXN0LmZpbHRlcigoY3VzdG9tZXIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY3VzdG9tZXIucmVudF9kdXJhdGlvbiE9PSfplb/np58x5bm0Jykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VzdG9tZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgc2V0RmlsdGVyZWRDdXN0b21lcnModGVtcExpc3Rfc2hvcnRfcmVudClcblxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcInBlbmRpbmdcIikge1xuICAgICAgICAgICAgIC8vb3JkZXIgYnkgcHJpY2UgZnJvbSBoaWdoIHRvIGxvdyBhbmQgdGhlbiBiYXNlZCBvbiB1cmdlbmN5OiBtb3N0IHVyZ2VudCB0byBsZWFzdC5cbiAgICAgICAgICAgICBjdXN0b21lckxpc3Quc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShhLnJlbnRfZGF0ZSkgLSBuZXcgRGF0ZShiLnJlbnRfZGF0ZSlcbiAgICAgICAgICAgICAgfSkuc29ydCgoYSwgYikgPT4gcGFyc2VGbG9hdChiLkJ1ZGdldF9wcmljZSkgLSBwYXJzZUZsb2F0KGEuQnVkZ2V0X3ByaWNlKSk7XG4gICAgICAgICAgICBjb25zdCB0ZW1wTGlzdF9wZW5kaW5nID0gY3VzdG9tZXJMaXN0LmZpbHRlcigoY3VzdG9tZXIpID0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKGN1c3RvbWVyLnJlbnRfc3RhdHVzPT09J1BFTkRJTkcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXN0b21lclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBzZXRGaWx0ZXJlZEN1c3RvbWVycyh0ZW1wTGlzdF9wZW5kaW5nKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gPG9wdGlvbiB2YWx1ZT1cIm5lZWRfY29uZmlybVwiPuWGhemDqOWMuemFjeW+heehruiupDwvb3B0aW9uPlxuICAgIC8vIDxvcHRpb24gdmFsdWU9XCJleHRlcm5hbFwiPuWklumDqOaIv+a6kOW8gOWPkeenn+Wuojwvb3B0aW9uPlxuICAgIC8vIDxvcHRpb24gdmFsdWU9XCJvbl9hcHBvaW50bWVudFwiPue6pueci+aIvzwvb3B0aW9uPlxuICAgIHJldHVybiAoXG4gICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZSBjbGFzc05hbWU9J3RpdGxlLXdpdGgtb2JqZWN0Jz5cbiAgICAgICAgICAgICAgICAgICAge2Ake3NlY3Rpb259ICgke2ZpbHRlcmVkQ3VzdG9tZXJzLmxlbmd0aH0pYH1cbiAgICAgICAgICAgICAgICAgICAge3NlY3Rpb24gPT09ICdDdXJyZW50JyAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLlNlbGVjdCBjbGFzc05hbWU9XCJkcm9wZG93bi1zZWxlY3RcIiBzaXplPVwic21cIiBvbkNoYW5nZT17aGFuZGxlU2VsZWN0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWxsXCI+QWxsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5lZWRfY2hlY2tcIj7pnIDopoHlvZXlhaXlkozmoLjlr7nmiL/mupDpnIDmsYLnmoTnp5/lrqI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZm9sbG93X3VwXCI+WWVzdGVyZGF5IEZvbGxvdy11cDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzZWVfaG91c2VcIj7nnIvmiL/lrqLmiLc8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic2hvcnRfcmVudFwiPlNob3J0LXRlcm0gcmVudGFsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBlbmRpbmdcIj5QZW5kaW5nPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uU2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9DYXJkLlRpdGxlPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWN0aW9uLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lckxpc3QuZmlsdGVyKGN1c3RvbWVyMSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkQ3VzdG9tZXJzLnNvbWUoY3VzdG9tZXIyID0+IGN1c3RvbWVyMi5Vc2VySWQgPT09IGN1c3RvbWVyMS5Vc2VySWQpXG4gICAgICAgICAgICAgICAgICAgICAgICApLm1hcCgoY3VzdG9tZXIpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbWVyUHJldmlldyBrZXk9e2N1c3RvbWVyLlVzZXJJZH0gY3VzdG9tZXI9e2N1c3RvbWVyfSBzY3JvbGxUb0N1c3RvbWVyRGV0YWlsPXtzY3JvbGxUb0N1c3RvbWVyRGV0YWlsfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NhcmQuQm9keT5cbiAgICAgICAgPC9DYXJkPlxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbWVyU2VjdGlvbjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIkZvcm0iLCJDdXN0b21lclByZXZpZXciLCJDYXJkIiwidXNlU3RhdGVDb250ZXh0IiwiQ3VzdG9tZXJTZWN0aW9uIiwic2VjdGlvbiIsImN1c3RvbWVyTGlzdCIsInNjcm9sbFRvQ3VzdG9tZXJEZXRhaWwiLCJkYXlEaWZmZXJlbmNlIiwiZmlsdGVyZWRDdXN0b21lcnMiLCJzZXRGaWx0ZXJlZEN1c3RvbWVycyIsInByaW9yaXRpemluZ19jdXRzb21lciIsImN1c3RvbWVycyIsInNvcnQiLCJhIiwiYiIsIkRhdGUiLCJyZW50X2RhdGUiLCJmaWx0ZXIiLCJjdXN0b21lciIsInRvZGF5IiwicmVudF9kYXkiLCJyZW50X2RhdGVfbm90X3Bhc3MiLCJkYXRlIiwicmVudF9kYXRlX3Bhc3MiLCJNYXRoIiwiYWJzIiwiaGFuZGxlU2VsZWN0IiwiZSIsInZhbHVlIiwidGFyZ2V0IiwidGVtcExpc3QiLCJkYXRlMSIsImRhdGUyIiwiU3VibWlzc2lvbl9EYXRlIiwiZGlmZmVyZW5jZUluRGF5cyIsInBhcnNlRmxvYXQiLCJCdWRnZXRfcHJpY2UiLCJ0ZW1wTGlzdF9mb2xsb3dfdXAiLCJMYXN0VXBkYXRlVGltZSIsInRlbXBMaXN0X3NlZV9ob3VzZSIsInJlbnRfc3RhdHVzIiwidGVtcExpc3Rfc2hvcnRfcmVudCIsInJlbnRfZHVyYXRpb24iLCJ0ZW1wTGlzdF9wZW5kaW5nIiwiQm9keSIsIlRpdGxlIiwiY2xhc3NOYW1lIiwibGVuZ3RoIiwiU2VsZWN0Iiwic2l6ZSIsIm9uQ2hhbmdlIiwib3B0aW9uIiwiZGl2IiwiY3VzdG9tZXIxIiwic29tZSIsImN1c3RvbWVyMiIsIlVzZXJJZCIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Customer/CustomerSection.jsx\n"));

/***/ })

});