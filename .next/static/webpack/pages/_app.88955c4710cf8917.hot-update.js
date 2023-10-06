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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var _CustomerPreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomerPreview */ \"./components/Customer/CustomerPreview.jsx\");\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Card */ \"./node_modules/react-bootstrap/esm/Card.js\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/StateContext */ \"./context/StateContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst CustomerSection = (param)=>{\n    let { section , customerList , scrollToCustomerDetail  } = param;\n    _s();\n    const { dayDifference , prioritizing_cutsomer , customers  } = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateContext)();\n    const [filteredCustomers, setFilteredCustomers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(customerList);\n    const handleSelect = (e)=>{\n        const value = e.target.value;\n        if (value === \"all\") {\n            setFilteredCustomers(customerList);\n        } else if (value === \"need_check\") {\n            const tempList = customerList.filter((customer)=>{\n                const date1 = new Date();\n                const date2 = new Date(customer.Submission_Date);\n                const differenceInDays = dayDifference(date2, date1);\n                if (0 < differenceInDays && differenceInDays <= 2) {\n                    return customer;\n                }\n            });\n            setFilteredCustomers(tempList);\n        } else if (value === \"follow_up\") {\n            //order by price from high to low and then based on urgency: most urgent to least.\n            const tempList_follow_up_sorted = prioritizing_cutsomer(customerList).sort((a, b)=>parseFloat(b.Budget_price) - parseFloat(a.Budget_price));\n            const tempList_follow_up = tempList_follow_up_sorted.filter((customer)=>{\n                // see all the internally matched customers who were taking actions one day before from the internal matched section showing under this category. \n                const date = dayDifference(new Date(customer.LastUpdateTime), new Date());\n                if (0 < date && date <= 1) {\n                    return customer;\n                }\n            });\n            setFilteredCustomers(tempList_follow_up);\n        } else if (value === \"see_house\") {\n            //ordering results by the nearest rate date to later\n            customerList.sort(function(a, b) {\n                return new Date(b.rent_date) - new Date(a.rent_date);\n            });\n            const tempList_see_house = customerList.filter((customer)=>{\n                if (customer.rent_status === \"看房客户\") {\n                    return customer;\n                }\n            });\n            setFilteredCustomers(tempList_see_house);\n        } else if (value === \"short_rent\") {\n            //order by price from high to low and then based on urgency: most urgent to least.\n            const tempList_short_rent_sorted = prioritizing_cutsomer(customers).sort((a, b)=>parseFloat(b.Budget_price) - parseFloat(a.Budget_price));\n            const tempList_short_rent = tempList_short_rent_sorted.filter((customer)=>{\n                if (customer.rent_status !== \"YES\" && customer.rent_status !== \"DELETED\" && customer.rent_duration !== \"长租1年\") {\n                    return customer;\n                }\n            });\n            //only show renters who's \n            setFilteredCustomers(tempList_short_rent);\n        } else if (value === \"pending\") {\n            //order by price from high to low and then based on urgency: most urgent to least.\n            const tempList_pending_sorted = prioritizing_cutsomer(customers).sort((a, b)=>parseFloat(b.Budget_price) - parseFloat(a.Budget_price));\n            if (customers.length > 0) {\n                const tempList_pending = tempList_pending_sorted.filter((customer)=>{\n                    if (customer.rent_status === \"PENDING\") {\n                        return customer;\n                    }\n                });\n                setFilteredCustomers(tempList_pending);\n            }\n        }\n    };\n    // <option value=\"need_confirm\">内部匹配待确认</option>\n    // <option value=\"external\">外部房源开发租客</option>\n    // <option value=\"on_appointment\">约看房</option>\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Body, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Title, {\n                    className: \"title-with-object\",\n                    children: [\n                        \"\".concat(section, \" (\").concat(filteredCustomers.length, \")\"),\n                        section === \"Renting In Progress\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Select, {\n                            className: \"dropdown-select\",\n                            size: \"sm\",\n                            onChange: handleSelect,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"all\",\n                                    children: \"All\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"need_check\",\n                                    children: \"需要录入和核对房源需求的租客\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"follow_up\",\n                                    children: \" Follow-ups\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"see_house\",\n                                    children: \"看房客户\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"short_rent\",\n                                    children: \"Short-term rental\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"pending\",\n                                    children: \"Pending\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                            lineNumber: 89,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                    lineNumber: 86,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"section-container\",\n                    children: filteredCustomers.map((customer)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CustomerPreview__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            customer: customer,\n                            scrollToCustomerDetail: scrollToCustomerDetail\n                        }, customer.UserId, false, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                            lineNumber: 103,\n                            columnNumber: 29\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                    lineNumber: 100,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n            lineNumber: 85,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n        lineNumber: 84,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CustomerSection, \"BkA8YEMXZTZ09A2vgdKwFW6VUew=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateContext\n    ];\n});\n_c = CustomerSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomerSection);\nvar _c;\n$RefreshReg$(_c, \"CustomerSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1c3RvbWVyL0N1c3RvbWVyU2VjdGlvbi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUQ7QUFDakI7QUFFUTtBQUNSO0FBQ3FCO0FBRzdELE1BQU1RLGtCQUFrQixTQUF1RDtRQUF0RCxFQUFFQyxRQUFPLEVBQUVDLGFBQVksRUFBRUMsdUJBQXNCLEVBQUU7O0lBQ3RFLE1BQU0sRUFBRUMsY0FBYSxFQUFFQyxzQkFBcUIsRUFBRUMsVUFBUyxFQUFFLEdBQUdQLHNFQUFlQTtJQUMzRSxNQUFNLENBQUNRLG1CQUFtQkMscUJBQXFCLEdBQUdkLCtDQUFRQSxDQUFDUTtJQUUzRCxNQUFNTyxlQUFlLENBQUNDLElBQU07UUFDeEIsTUFBTUMsUUFBUUQsRUFBRUUsTUFBTSxDQUFDRCxLQUFLO1FBQzVCLElBQUlBLFVBQVUsT0FBTztZQUNqQkgscUJBQXFCTjtRQUN6QixPQUFPLElBQUlTLFVBQVUsY0FBYztZQUMvQixNQUFNRSxXQUFXWCxhQUFhWSxNQUFNLENBQUMsQ0FBQ0MsV0FBYTtnQkFDL0MsTUFBTUMsUUFBUSxJQUFJQztnQkFDbEIsTUFBTUMsUUFBUSxJQUFJRCxLQUFLRixTQUFTSSxlQUFlO2dCQUUvQyxNQUFNQyxtQkFBbUJoQixjQUFjYyxPQUFPRjtnQkFDOUMsSUFBSSxJQUFJSSxvQkFBb0JBLG9CQUFvQixHQUFHO29CQUMvQyxPQUFPTDtnQkFDWCxDQUFDO1lBQ0w7WUFDQVAscUJBQXFCSztRQUN6QixPQUFPLElBQUlGLFVBQVUsYUFBYTtZQUM5QixrRkFBa0Y7WUFFbEYsTUFBTVUsNEJBQTRCaEIsc0JBQXNCSCxjQUFjb0IsSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU1DLFdBQVdELEVBQUVFLFlBQVksSUFBSUQsV0FBV0YsRUFBRUcsWUFBWTtZQUMzSSxNQUFNQyxxQkFBcUJOLDBCQUEwQlAsTUFBTSxDQUFDLENBQUNDLFdBQWE7Z0JBQ3RFLGtKQUFrSjtnQkFDbEosTUFBTWEsT0FBT3hCLGNBQWMsSUFBSWEs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azovL19OX0UvLi9jb21wb25lbnRzL0N1c3RvbWVyL0N1c3RvbWVyU2VjdGlvbi5qc3g/NmNlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWZ9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcblxuaW1wb3J0IEN1c3RvbWVyUHJldmlldyBmcm9tICcuL0N1c3RvbWVyUHJldmlldyc7XG5pbXBvcnQgQ2FyZCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ2FyZCc7XG5pbXBvcnQgeyB1c2VTdGF0ZUNvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0L1N0YXRlQ29udGV4dCc7XG5cblxuY29uc3QgQ3VzdG9tZXJTZWN0aW9uID0gKHsgc2VjdGlvbiwgY3VzdG9tZXJMaXN0LCBzY3JvbGxUb0N1c3RvbWVyRGV0YWlsIH0pID0+IHtcbiAgICBjb25zdCB7IGRheURpZmZlcmVuY2UsIHByaW9yaXRpemluZ19jdXRzb21lciwgY3VzdG9tZXJzIH0gPSB1c2VTdGF0ZUNvbnRleHQoKVxuICAgIGNvbnN0IFtmaWx0ZXJlZEN1c3RvbWVycywgc2V0RmlsdGVyZWRDdXN0b21lcnNdID0gdXNlU3RhdGUoY3VzdG9tZXJMaXN0KVxuXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICBpZiAodmFsdWUgPT09IFwiYWxsXCIpIHtcbiAgICAgICAgICAgIHNldEZpbHRlcmVkQ3VzdG9tZXJzKGN1c3RvbWVyTGlzdClcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJuZWVkX2NoZWNrXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXBMaXN0ID0gY3VzdG9tZXJMaXN0LmZpbHRlcigoY3VzdG9tZXIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlMSA9IG5ldyBEYXRlKClcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlMiA9IG5ldyBEYXRlKGN1c3RvbWVyLlN1Ym1pc3Npb25fRGF0ZSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBkaWZmZXJlbmNlSW5EYXlzID0gZGF5RGlmZmVyZW5jZShkYXRlMiwgZGF0ZTEpXG4gICAgICAgICAgICAgICAgaWYgKDAgPCBkaWZmZXJlbmNlSW5EYXlzICYmIGRpZmZlcmVuY2VJbkRheXMgPD0gMikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VzdG9tZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgc2V0RmlsdGVyZWRDdXN0b21lcnModGVtcExpc3QpXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwiZm9sbG93X3VwXCIpIHtcbiAgICAgICAgICAgIC8vb3JkZXIgYnkgcHJpY2UgZnJvbSBoaWdoIHRvIGxvdyBhbmQgdGhlbiBiYXNlZCBvbiB1cmdlbmN5OiBtb3N0IHVyZ2VudCB0byBsZWFzdC5cblxuICAgICAgICAgICAgY29uc3QgdGVtcExpc3RfZm9sbG93X3VwX3NvcnRlZCA9IHByaW9yaXRpemluZ19jdXRzb21lcihjdXN0b21lckxpc3QpLnNvcnQoKGEsIGIpID0+IHBhcnNlRmxvYXQoYi5CdWRnZXRfcHJpY2UpIC0gcGFyc2VGbG9hdChhLkJ1ZGdldF9wcmljZSkpXG4gICAgICAgICAgICBjb25zdCB0ZW1wTGlzdF9mb2xsb3dfdXAgPSB0ZW1wTGlzdF9mb2xsb3dfdXBfc29ydGVkLmZpbHRlcigoY3VzdG9tZXIpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBzZWUgYWxsIHRoZSBpbnRlcm5hbGx5IG1hdGNoZWQgY3VzdG9tZXJzIHdobyB3ZXJlIHRha2luZyBhY3Rpb25zIG9uZSBkYXkgYmVmb3JlIGZyb20gdGhlIGludGVybmFsIG1hdGNoZWQgc2VjdGlvbiBzaG93aW5nIHVuZGVyIHRoaXMgY2F0ZWdvcnkuIFxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBkYXlEaWZmZXJlbmNlKG5ldyBEYXRlKGN1c3RvbWVyLkxhc3RVcGRhdGVUaW1lKSwgbmV3IERhdGUoKSlcbiAgICAgICAgICAgICAgICBpZiAoMCA8IGRhdGUgJiYgZGF0ZSA8PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXN0b21lclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBzZXRGaWx0ZXJlZEN1c3RvbWVycyh0ZW1wTGlzdF9mb2xsb3dfdXApXG5cbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJzZWVfaG91c2VcIikge1xuICAgICAgICAgICAgLy9vcmRlcmluZyByZXN1bHRzIGJ5IHRoZSBuZWFyZXN0IHJhdGUgZGF0ZSB0byBsYXRlclxuICAgICAgICAgICAgY3VzdG9tZXJMaXN0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYi5yZW50X2RhdGUpIC0gbmV3IERhdGUoYS5yZW50X2RhdGUpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc3QgdGVtcExpc3Rfc2VlX2hvdXNlID0gY3VzdG9tZXJMaXN0LmZpbHRlcigoY3VzdG9tZXIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY3VzdG9tZXIucmVudF9zdGF0dXMgPT09ICfnnIvmiL/lrqLmiLcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXN0b21lclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBzZXRGaWx0ZXJlZEN1c3RvbWVycyh0ZW1wTGlzdF9zZWVfaG91c2UpXG5cbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJzaG9ydF9yZW50XCIpIHtcbiAgICAgICAgICAgIC8vb3JkZXIgYnkgcHJpY2UgZnJvbSBoaWdoIHRvIGxvdyBhbmQgdGhlbiBiYXNlZCBvbiB1cmdlbmN5OiBtb3N0IHVyZ2VudCB0byBsZWFzdC5cbiAgICAgICAgICAgIGNvbnN0IHRlbXBMaXN0X3Nob3J0X3JlbnRfc29ydGVkID0gcHJpb3JpdGl6aW5nX2N1dHNvbWVyKGN1c3RvbWVycykuc29ydCgoYSwgYikgPT4gcGFyc2VGbG9hdChiLkJ1ZGdldF9wcmljZSkgLSBwYXJzZUZsb2F0KGEuQnVkZ2V0X3ByaWNlKSlcbiAgICAgICAgICAgIGNvbnN0IHRlbXBMaXN0X3Nob3J0X3JlbnQgPSB0ZW1wTGlzdF9zaG9ydF9yZW50X3NvcnRlZC5maWx0ZXIoKGN1c3RvbWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGN1c3RvbWVyLnJlbnRfc3RhdHVzICE9PSdZRVMnICYmIGN1c3RvbWVyLnJlbnRfc3RhdHVzICE9PSdERUxFVEVEJyAmJiBjdXN0b21lci5yZW50X2R1cmF0aW9uICE9PSAn6ZW/56efMeW5tCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1c3RvbWVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vb25seSBzaG93IHJlbnRlcnMgd2hvJ3MgXG4gICAgICAgICAgICBzZXRGaWx0ZXJlZEN1c3RvbWVycyh0ZW1wTGlzdF9zaG9ydF9yZW50KVxuXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwicGVuZGluZ1wiKSB7XG4gICAgICAgICAgICAvL29yZGVyIGJ5IHByaWNlIGZyb20gaGlnaCB0byBsb3cgYW5kIHRoZW4gYmFzZWQgb24gdXJnZW5jeTogbW9zdCB1cmdlbnQgdG8gbGVhc3QuXG4gICAgICAgICAgICBjb25zdCB0ZW1wTGlzdF9wZW5kaW5nX3NvcnRlZCA9IHByaW9yaXRpemluZ19jdXRzb21lcihjdXN0b21lcnMpLnNvcnQoKGEsIGIpID0+IHBhcnNlRmxvYXQoYi5CdWRnZXRfcHJpY2UpIC0gcGFyc2VGbG9hdChhLkJ1ZGdldF9wcmljZSkpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChjdXN0b21lcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBMaXN0X3BlbmRpbmcgPSB0ZW1wTGlzdF9wZW5kaW5nX3NvcnRlZC5maWx0ZXIoKGN1c3RvbWVyKSA9PiB7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1c3RvbWVyLnJlbnRfc3RhdHVzID09PSAnUEVORElORycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXN0b21lclxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBzZXRGaWx0ZXJlZEN1c3RvbWVycyh0ZW1wTGlzdF9wZW5kaW5nKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gPG9wdGlvbiB2YWx1ZT1cIm5lZWRfY29uZmlybVwiPuWGhemDqOWMuemFjeW+heehruiupDwvb3B0aW9uPlxuICAgIC8vIDxvcHRpb24gdmFsdWU9XCJleHRlcm5hbFwiPuWklumDqOaIv+a6kOW8gOWPkeenn+Wuojwvb3B0aW9uPlxuICAgIC8vIDxvcHRpb24gdmFsdWU9XCJvbl9hcHBvaW50bWVudFwiPue6pueci+aIvzwvb3B0aW9uPlxuICAgIHJldHVybiAoXG4gICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZSBjbGFzc05hbWU9J3RpdGxlLXdpdGgtb2JqZWN0Jz5cbiAgICAgICAgICAgICAgICAgICAge2Ake3NlY3Rpb259ICgke2ZpbHRlcmVkQ3VzdG9tZXJzLmxlbmd0aH0pYH1cbiAgICAgICAgICAgICAgICAgICAge3NlY3Rpb24gPT09ICdSZW50aW5nIEluIFByb2dyZXNzJyAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLlNlbGVjdCBjbGFzc05hbWU9XCJkcm9wZG93bi1zZWxlY3RcIiBzaXplPVwic21cIiBvbkNoYW5nZT17aGFuZGxlU2VsZWN0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWxsXCI+QWxsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5lZWRfY2hlY2tcIj7pnIDopoHlvZXlhaXlkozmoLjlr7nmiL/mupDpnIDmsYLnmoTnp5/lrqI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZm9sbG93X3VwXCI+IEZvbGxvdy11cHM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic2VlX2hvdXNlXCI+55yL5oi/5a6i5oi3PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNob3J0X3JlbnRcIj5TaG9ydC10ZXJtIHJlbnRhbDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwZW5kaW5nXCI+UGVuZGluZzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLlNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvQ2FyZC5UaXRsZT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VjdGlvbi1jb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkQ3VzdG9tZXJzLm1hcCgoY3VzdG9tZXIpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbWVyUHJldmlldyBrZXk9e2N1c3RvbWVyLlVzZXJJZH0gY3VzdG9tZXI9e2N1c3RvbWVyfSBzY3JvbGxUb0N1c3RvbWVyRGV0YWlsPXtzY3JvbGxUb0N1c3RvbWVyRGV0YWlsfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NhcmQuQm9keT5cbiAgICAgICAgPC9DYXJkPlxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbWVyU2VjdGlvbjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIkZvcm0iLCJDdXN0b21lclByZXZpZXciLCJDYXJkIiwidXNlU3RhdGVDb250ZXh0IiwiQ3VzdG9tZXJTZWN0aW9uIiwic2VjdGlvbiIsImN1c3RvbWVyTGlzdCIsInNjcm9sbFRvQ3VzdG9tZXJEZXRhaWwiLCJkYXlEaWZmZXJlbmNlIiwicHJpb3JpdGl6aW5nX2N1dHNvbWVyIiwiY3VzdG9tZXJzIiwiZmlsdGVyZWRDdXN0b21lcnMiLCJzZXRGaWx0ZXJlZEN1c3RvbWVycyIsImhhbmRsZVNlbGVjdCIsImUiLCJ2YWx1ZSIsInRhcmdldCIsInRlbXBMaXN0IiwiZmlsdGVyIiwiY3VzdG9tZXIiLCJkYXRlMSIsIkRhdGUiLCJkYXRlMiIsIlN1Ym1pc3Npb25fRGF0ZSIsImRpZmZlcmVuY2VJbkRheXMiLCJ0ZW1wTGlzdF9mb2xsb3dfdXBfc29ydGVkIiwic29ydCIsImEiLCJiIiwicGFyc2VGbG9hdCIsIkJ1ZGdldF9wcmljZSIsInRlbXBMaXN0X2ZvbGxvd191cCIsImRhdGUiLCJMYXN0VXBkYXRlVGltZSIsInJlbnRfZGF0ZSIsInRlbXBMaXN0X3NlZV9ob3VzZSIsInJlbnRfc3RhdHVzIiwidGVtcExpc3Rfc2hvcnRfcmVudF9zb3J0ZWQiLCJ0ZW1wTGlzdF9zaG9ydF9yZW50IiwicmVudF9kdXJhdGlvbiIsInRlbXBMaXN0X3BlbmRpbmdfc29ydGVkIiwibGVuZ3RoIiwidGVtcExpc3RfcGVuZGluZyIsIkJvZHkiLCJUaXRsZSIsImNsYXNzTmFtZSIsIlNlbGVjdCIsInNpemUiLCJvbkNoYW5nZSIsIm9wdGlvbiIsImRpdiIsIm1hcCIsIlVzZXJJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Customer/CustomerSection.jsx\n"));

/***/ })

});