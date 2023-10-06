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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var _CustomerPreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomerPreview */ \"./components/Customer/CustomerPreview.jsx\");\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Card */ \"./node_modules/react-bootstrap/esm/Card.js\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/StateContext */ \"./context/StateContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst CustomerSection = (param)=>{\n    let { section , customerList , scrollToCustomerDetail  } = param;\n    _s();\n    const { dayDifference , prioritizing_cutsomer , customers  } = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateContext)();\n    const [filteredCustomers, setFilteredCustomers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(customerList);\n    const handleSelect = (e)=>{\n        const value = e.target.value;\n        if (value === \"all\") {\n            setFilteredCustomers(customerList);\n        } else if (value === \"need_check\") {\n            const tempList = customerList.filter((customer1)=>{\n                const date11 = new Date();\n                const date21 = new Date(customer1.Submission_Date);\n                const differenceInDays = dayDifference(date21, date11);\n                if (0 < differenceInDays && differenceInDays <= 2) {\n                    return customer1;\n                }\n            });\n            setFilteredCustomers(tempList);\n        } else if (value === \"follow_up\") {\n            //order by price from high to low and then based on urgency: most urgent to least.\n            const tempList_follow_up_sorted = prioritizing_cutsomer(customerList).sort((a, b)=>parseFloat(b.Budget_price) - parseFloat(a.Budget_price));\n            const tempList_follow_up = tempList_follow_up_sorted.filter((customer1)=>{\n                // see all the internally matched customers who were taking actions one day before from the internal matched section showing under this category. \n                const date = dayDifference(new Date(customer1.LastUpdateTime), new Date());\n                if (0 < date && date <= 1) {\n                    return customer1;\n                }\n            });\n            setFilteredCustomers(tempList_follow_up);\n        } else if (value === \"see_house\") {\n            //ordering results by the nearest rate date to later\n            customerList.sort(function(a, b) {\n                return new Date(b.rent_date) - new Date(a.rent_date);\n            });\n            const tempList_see_house = customerList.filter((customer1)=>{\n                if (customer1.rent_status === \"看房客户\") {\n                    return customer1;\n                }\n            });\n            setFilteredCustomers(tempList_see_house);\n        } else if (value === \"short_rent\") {\n            //order by price from high to low and then based on urgency: most urgent to least.\n            const tempList_short_rent_sorted = prioritizing_cutsomer(customers).sort((a, b)=>parseFloat(b.Budget_price) - parseFloat(a.Budget_price));\n            const tempList_short_rent = tempList_short_rent_sorted.filter((customer1)=>{\n                if (customer1.rent_status !== \"YES\" && customer1.rent_status !== \"DELETED\" && customer1.rent_duration !== \"长租1年\") {\n                    return customer1;\n                }\n            });\n            //only show renters who's rentdate is not passed\n            const tempList_short_rent_rentDate_notPassed = tempList_short_rent_sorted.filter((customer1)=>{\n                const today = new Date();\n                const rentDate = new Date(customer1.rent_date);\n            });\n            const differenceInDays = dayDifference(date2, date1);\n            if (0 < differenceInDays && differenceInDays <= 2) {\n                return customer;\n            }\n            setFilteredCustomers(tempList_short_rent);\n        } else if (value === \"pending\") {\n            //order by price from high to low and then based on urgency: most urgent to least.\n            const tempList_pending_sorted = prioritizing_cutsomer(customers).sort((a, b)=>parseFloat(b.Budget_price) - parseFloat(a.Budget_price));\n            if (customers.length > 0) {\n                const tempList_pending = tempList_pending_sorted.filter((customer1)=>{\n                    if (customer1.rent_status === \"PENDING\") {\n                        return customer1;\n                    }\n                });\n                setFilteredCustomers(tempList_pending);\n            }\n        }\n    };\n    // <option value=\"need_confirm\">内部匹配待确认</option>\n    // <option value=\"external\">外部房源开发租客</option>\n    // <option value=\"on_appointment\">约看房</option>\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Body, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Title, {\n                    className: \"title-with-object\",\n                    children: [\n                        \"\".concat(section, \" (\").concat(filteredCustomers.length, \")\"),\n                        section === \"Renting In Progress\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Select, {\n                            className: \"dropdown-select\",\n                            size: \"sm\",\n                            onChange: handleSelect,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"all\",\n                                    children: \"All\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"need_check\",\n                                    children: \"需要录入和核对房源需求的租客\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"follow_up\",\n                                    children: \" Follow-ups\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"see_house\",\n                                    children: \"看房客户\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"short_rent\",\n                                    children: \"Short-term rental\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"pending\",\n                                    children: \"Pending\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                            lineNumber: 97,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                    lineNumber: 94,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"section-container\",\n                    children: filteredCustomers.map((customer1)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CustomerPreview__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            customer: customer1,\n                            scrollToCustomerDetail: scrollToCustomerDetail\n                        }, customer1.UserId, false, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                            lineNumber: 111,\n                            columnNumber: 29\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                    lineNumber: 108,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n            lineNumber: 93,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n        lineNumber: 92,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CustomerSection, \"BkA8YEMXZTZ09A2vgdKwFW6VUew=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateContext\n    ];\n});\n_c = CustomerSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomerSection);\nvar _c;\n$RefreshReg$(_c, \"CustomerSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1c3RvbWVyL0N1c3RvbWVyU2VjdGlvbi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUQ7QUFDakI7QUFFUTtBQUNSO0FBQ3FCO0FBRzdELE1BQU1RLGtCQUFrQixTQUF1RDtRQUF0RCxFQUFFQyxRQUFPLEVBQUVDLGFBQVksRUFBRUMsdUJBQXNCLEVBQUU7O0lBQ3RFLE1BQU0sRUFBRUMsY0FBYSxFQUFFQyxzQkFBcUIsRUFBRUMsVUFBUyxFQUFFLEdBQUdQLHNFQUFlQTtJQUMzRSxNQUFNLENBQUNRLG1CQUFtQkMscUJBQXFCLEdBQUdkLCtDQUFRQSxDQUFDUTtJQUUzRCxNQUFNTyxlQUFlLENBQUNDLElBQU07UUFDeEIsTUFBTUMsUUFBUUQsRUFBRUUsTUFBTSxDQUFDRCxLQUFLO1FBQzVCLElBQUlBLFVBQVUsT0FBTztZQUNqQkgscUJBQXFCTjtRQUN6QixPQUFPLElBQUlTLFVBQVUsY0FBYztZQUMvQixNQUFNRSxXQUFXWCxhQUFhWSxNQUFNLENBQUMsQ0FBQ0MsWUFBYTtnQkFDL0MsTUFBTUMsU0FBUSxJQUFJQztnQkFDbEIsTUFBTUMsU0FBUSxJQUFJRCxLQUFLRixVQUFTSSxlQUFlO2dCQUUvQyxNQUFNQyxtQkFBbUJoQixjQUFjYyxRQUFPRjtnQkFDOUMsSUFBSSxJQUFJSSxvQkFBb0JBLG9CQUFvQixHQUFHO29CQUMvQyxPQUFPTDtnQkFDWCxDQUFDO1lBQ0w7WUFDQVAscUJBQXFCSztRQUN6QixPQUFPLElBQUlGLFVBQVUsYUFBYTtZQUM5QixrRkFBa0Y7WUFFbEYsTUFBTVUsNEJBQTRCaEIsc0JBQXNCSCxjQUFjb0IsSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU1DLFdBQVdELEVBQUVFLFlBQVksSUFBSUQsV0FBV0YsRUFBRUcsWUFBWTtZQUMzSSxNQUFNQyxxQkFBcUJOLDBCQUEwQlAsTUFBTSxDQUFDLENBQUNDLFlBQWE7Z0JBQ3RFLGtKQUFrSjtnQkFDbEosTUFBTWEsT0FBT3hCLGNBQWMsSUFBSWEs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QUFJTCxXQUFVOzhCQUVIckMsa0JBQWtCMkMsR0FBRyxDQUFDLENBQUNuQywwQkFDdkIsOERBQUNsQix3REFBZUE7NEJBQXVCa0IsVUFBVUE7NEJBQVVaLHdCQUF3QkE7MkJBQTdEWSxVQUFTb0MsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2pFO0dBN0dNbkQ7O1FBQzBERCxrRUFBZUE7OztLQUR6RUM7QUErR04sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXN0b21lci9DdXN0b21lclNlY3Rpb24uanN4PzZjZWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XG5cbmltcG9ydCBDdXN0b21lclByZXZpZXcgZnJvbSAnLi9DdXN0b21lclByZXZpZXcnO1xuaW1wb3J0IENhcmQgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NhcmQnO1xuaW1wb3J0IHsgdXNlU3RhdGVDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9TdGF0ZUNvbnRleHQnO1xuXG5cbmNvbnN0IEN1c3RvbWVyU2VjdGlvbiA9ICh7IHNlY3Rpb24sIGN1c3RvbWVyTGlzdCwgc2Nyb2xsVG9DdXN0b21lckRldGFpbCB9KSA9PiB7XG4gICAgY29uc3QgeyBkYXlEaWZmZXJlbmNlLCBwcmlvcml0aXppbmdfY3V0c29tZXIsIGN1c3RvbWVycyB9ID0gdXNlU3RhdGVDb250ZXh0KClcbiAgICBjb25zdCBbZmlsdGVyZWRDdXN0b21lcnMsIHNldEZpbHRlcmVkQ3VzdG9tZXJzXSA9IHVzZVN0YXRlKGN1c3RvbWVyTGlzdClcblxuICAgIGNvbnN0IGhhbmRsZVNlbGVjdCA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgaWYgKHZhbHVlID09PSBcImFsbFwiKSB7XG4gICAgICAgICAgICBzZXRGaWx0ZXJlZEN1c3RvbWVycyhjdXN0b21lckxpc3QpXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwibmVlZF9jaGVja1wiKSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wTGlzdCA9IGN1c3RvbWVyTGlzdC5maWx0ZXIoKGN1c3RvbWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZTEgPSBuZXcgRGF0ZSgpXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZTIgPSBuZXcgRGF0ZShjdXN0b21lci5TdWJtaXNzaW9uX0RhdGUpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgZGlmZmVyZW5jZUluRGF5cyA9IGRheURpZmZlcmVuY2UoZGF0ZTIsIGRhdGUxKVxuICAgICAgICAgICAgICAgIGlmICgwIDwgZGlmZmVyZW5jZUluRGF5cyAmJiBkaWZmZXJlbmNlSW5EYXlzIDw9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1c3RvbWVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHNldEZpbHRlcmVkQ3VzdG9tZXJzKHRlbXBMaXN0KVxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcImZvbGxvd191cFwiKSB7XG4gICAgICAgICAgICAvL29yZGVyIGJ5IHByaWNlIGZyb20gaGlnaCB0byBsb3cgYW5kIHRoZW4gYmFzZWQgb24gdXJnZW5jeTogbW9zdCB1cmdlbnQgdG8gbGVhc3QuXG5cbiAgICAgICAgICAgIGNvbnN0IHRlbXBMaXN0X2ZvbGxvd191cF9zb3J0ZWQgPSBwcmlvcml0aXppbmdfY3V0c29tZXIoY3VzdG9tZXJMaXN0KS5zb3J0KChhLCBiKSA9PiBwYXJzZUZsb2F0KGIuQnVkZ2V0X3ByaWNlKSAtIHBhcnNlRmxvYXQoYS5CdWRnZXRfcHJpY2UpKVxuICAgICAgICAgICAgY29uc3QgdGVtcExpc3RfZm9sbG93X3VwID0gdGVtcExpc3RfZm9sbG93X3VwX3NvcnRlZC5maWx0ZXIoKGN1c3RvbWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gc2VlIGFsbCB0aGUgaW50ZXJuYWxseSBtYXRjaGVkIGN1c3RvbWVycyB3aG8gd2VyZSB0YWtpbmcgYWN0aW9ucyBvbmUgZGF5IGJlZm9yZSBmcm9tIHRoZSBpbnRlcm5hbCBtYXRjaGVkIHNlY3Rpb24gc2hvd2luZyB1bmRlciB0aGlzIGNhdGVnb3J5LiBcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlID0gZGF5RGlmZmVyZW5jZShuZXcgRGF0ZShjdXN0b21lci5MYXN0VXBkYXRlVGltZSksIG5ldyBEYXRlKCkpXG4gICAgICAgICAgICAgICAgaWYgKDAgPCBkYXRlICYmIGRhdGUgPD0gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VzdG9tZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgc2V0RmlsdGVyZWRDdXN0b21lcnModGVtcExpc3RfZm9sbG93X3VwKVxuXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwic2VlX2hvdXNlXCIpIHtcbiAgICAgICAgICAgIC8vb3JkZXJpbmcgcmVzdWx0cyBieSB0aGUgbmVhcmVzdCByYXRlIGRhdGUgdG8gbGF0ZXJcbiAgICAgICAgICAgIGN1c3RvbWVyTGlzdC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGIucmVudF9kYXRlKSAtIG5ldyBEYXRlKGEucmVudF9kYXRlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnN0IHRlbXBMaXN0X3NlZV9ob3VzZSA9IGN1c3RvbWVyTGlzdC5maWx0ZXIoKGN1c3RvbWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGN1c3RvbWVyLnJlbnRfc3RhdHVzID09PSAn55yL5oi/5a6i5oi3Jykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VzdG9tZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgc2V0RmlsdGVyZWRDdXN0b21lcnModGVtcExpc3Rfc2VlX2hvdXNlKVxuXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwic2hvcnRfcmVudFwiKSB7XG4gICAgICAgICAgICAvL29yZGVyIGJ5IHByaWNlIGZyb20gaGlnaCB0byBsb3cgYW5kIHRoZW4gYmFzZWQgb24gdXJnZW5jeTogbW9zdCB1cmdlbnQgdG8gbGVhc3QuXG4gICAgICAgICAgICBjb25zdCB0ZW1wTGlzdF9zaG9ydF9yZW50X3NvcnRlZCA9IHByaW9yaXRpemluZ19jdXRzb21lcihjdXN0b21lcnMpLnNvcnQoKGEsIGIpID0+IHBhcnNlRmxvYXQoYi5CdWRnZXRfcHJpY2UpIC0gcGFyc2VGbG9hdChhLkJ1ZGdldF9wcmljZSkpXG4gICAgICAgICAgICBjb25zdCB0ZW1wTGlzdF9zaG9ydF9yZW50ID0gdGVtcExpc3Rfc2hvcnRfcmVudF9zb3J0ZWQuZmlsdGVyKChjdXN0b21lcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjdXN0b21lci5yZW50X3N0YXR1cyAhPT0nWUVTJyAmJiBjdXN0b21lci5yZW50X3N0YXR1cyAhPT0nREVMRVRFRCcgJiYgY3VzdG9tZXIucmVudF9kdXJhdGlvbiAhPT0gJ+mVv+ennzHlubQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXN0b21lclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvL29ubHkgc2hvdyByZW50ZXJzIHdobydzIHJlbnRkYXRlIGlzIG5vdCBwYXNzZWRcbiAgICAgICAgICAgIGNvbnN0IHRlbXBMaXN0X3Nob3J0X3JlbnRfcmVudERhdGVfbm90UGFzc2VkID0gdGVtcExpc3Rfc2hvcnRfcmVudF9zb3J0ZWQuZmlsdGVyKChjdXN0b21lcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlbnREYXRlID0gbmV3IERhdGUoY3VzdG9tZXIucmVudF9kYXRlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnN0IGRpZmZlcmVuY2VJbkRheXMgPSBkYXlEaWZmZXJlbmNlKGRhdGUyLCBkYXRlMSlcbiAgICAgICAgICAgIGlmICgwIDwgZGlmZmVyZW5jZUluRGF5cyAmJiBkaWZmZXJlbmNlSW5EYXlzIDw9IDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VzdG9tZXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldEZpbHRlcmVkQ3VzdG9tZXJzKHRlbXBMaXN0X3Nob3J0X3JlbnQpXG5cbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJwZW5kaW5nXCIpIHtcbiAgICAgICAgICAgIC8vb3JkZXIgYnkgcHJpY2UgZnJvbSBoaWdoIHRvIGxvdyBhbmQgdGhlbiBiYXNlZCBvbiB1cmdlbmN5OiBtb3N0IHVyZ2VudCB0byBsZWFzdC5cbiAgICAgICAgICAgIGNvbnN0IHRlbXBMaXN0X3BlbmRpbmdfc29ydGVkID0gcHJpb3JpdGl6aW5nX2N1dHNvbWVyKGN1c3RvbWVycykuc29ydCgoYSwgYikgPT4gcGFyc2VGbG9hdChiLkJ1ZGdldF9wcmljZSkgLSBwYXJzZUZsb2F0KGEuQnVkZ2V0X3ByaWNlKSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGN1c3RvbWVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcExpc3RfcGVuZGluZyA9IHRlbXBMaXN0X3BlbmRpbmdfc29ydGVkLmZpbHRlcigoY3VzdG9tZXIpID0+IHtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VzdG9tZXIucmVudF9zdGF0dXMgPT09ICdQRU5ESU5HJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1c3RvbWVyXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHNldEZpbHRlcmVkQ3VzdG9tZXJzKHRlbXBMaXN0X3BlbmRpbmcpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyA8b3B0aW9uIHZhbHVlPVwibmVlZF9jb25maXJtXCI+5YaF6YOo5Yy56YWN5b6F56Gu6K6kPC9vcHRpb24+XG4gICAgLy8gPG9wdGlvbiB2YWx1ZT1cImV4dGVybmFsXCI+5aSW6YOo5oi/5rqQ5byA5Y+R56ef5a6iPC9vcHRpb24+XG4gICAgLy8gPG9wdGlvbiB2YWx1ZT1cIm9uX2FwcG9pbnRtZW50XCI+57qm55yL5oi/PC9vcHRpb24+XG4gICAgcmV0dXJuIChcbiAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICA8Q2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlIGNsYXNzTmFtZT0ndGl0bGUtd2l0aC1vYmplY3QnPlxuICAgICAgICAgICAgICAgICAgICB7YCR7c2VjdGlvbn0gKCR7ZmlsdGVyZWRDdXN0b21lcnMubGVuZ3RofSlgfVxuICAgICAgICAgICAgICAgICAgICB7c2VjdGlvbiA9PT0gJ1JlbnRpbmcgSW4gUHJvZ3Jlc3MnICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uU2VsZWN0IGNsYXNzTmFtZT1cImRyb3Bkb3duLXNlbGVjdFwiIHNpemU9XCJzbVwiIG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3R9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhbGxcIj5BbGw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibmVlZF9jaGVja1wiPumcgOimgeW9leWFpeWSjOaguOWvueaIv+a6kOmcgOaxgueahOenn+Wuojwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmb2xsb3dfdXBcIj4gRm9sbG93LXVwczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzZWVfaG91c2VcIj7nnIvmiL/lrqLmiLc8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic2hvcnRfcmVudFwiPlNob3J0LXRlcm0gcmVudGFsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBlbmRpbmdcIj5QZW5kaW5nPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uU2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9DYXJkLlRpdGxlPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWN0aW9uLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRDdXN0b21lcnMubWFwKChjdXN0b21lcikgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tZXJQcmV2aWV3IGtleT17Y3VzdG9tZXIuVXNlcklkfSBjdXN0b21lcj17Y3VzdG9tZXJ9IHNjcm9sbFRvQ3VzdG9tZXJEZXRhaWw9e3Njcm9sbFRvQ3VzdG9tZXJEZXRhaWx9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICA8L0NhcmQ+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tZXJTZWN0aW9uOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiRm9ybSIsIkN1c3RvbWVyUHJldmlldyIsIkNhcmQiLCJ1c2VTdGF0ZUNvbnRleHQiLCJDdXN0b21lclNlY3Rpb24iLCJzZWN0aW9uIiwiY3VzdG9tZXJMaXN0Iiwic2Nyb2xsVG9DdXN0b21lckRldGFpbCIsImRheURpZmZlcmVuY2UiLCJwcmlvcml0aXppbmdfY3V0c29tZXIiLCJjdXN0b21lcnMiLCJmaWx0ZXJlZEN1c3RvbWVycyIsInNldEZpbHRlcmVkQ3VzdG9tZXJzIiwiaGFuZGxlU2VsZWN0IiwiZSIsInZhbHVlIiwidGFyZ2V0IiwidGVtcExpc3QiLCJmaWx0ZXIiLCJjdXN0b21lciIsImRhdGUxIiwiRGF0ZSIsImRhdGUyIiwiU3VibWlzc2lvbl9EYXRlIiwiZGlmZmVyZW5jZUluRGF5cyIsInRlbXBMaXN0X2ZvbGxvd191cF9zb3J0ZWQiLCJzb3J0IiwiYSIsImIiLCJwYXJzZUZsb2F0IiwiQnVkZ2V0X3ByaWNlIiwidGVtcExpc3RfZm9sbG93X3VwIiwiZGF0ZSIsIkxhc3RVcGRhdGVUaW1lIiwicmVudF9kYXRlIiwidGVtcExpc3Rfc2VlX2hvdXNlIiwicmVudF9zdGF0dXMiLCJ0ZW1wTGlzdF9zaG9ydF9yZW50X3NvcnRlZCIsInRlbXBMaXN0X3Nob3J0X3JlbnQiLCJyZW50X2R1cmF0aW9uIiwidGVtcExpc3Rfc2hvcnRfcmVudF9yZW50RGF0ZV9ub3RQYXNzZWQiLCJ0b2RheSIsInJlbnREYXRlIiwidGVtcExpc3RfcGVuZGluZ19zb3J0ZWQiLCJsZW5ndGgiLCJ0ZW1wTGlzdF9wZW5kaW5nIiwiQm9keSIsIlRpdGxlIiwiY2xhc3NOYW1lIiwiU2VsZWN0Iiwic2l6ZSIsIm9uQ2hhbmdlIiwib3B0aW9uIiwiZGl2IiwibWFwIiwiVXNlcklkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Customer/CustomerSection.jsx\n"));

/***/ })

});