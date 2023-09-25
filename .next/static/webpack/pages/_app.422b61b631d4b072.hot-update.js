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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var _CustomerPreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomerPreview */ \"./components/Customer/CustomerPreview.jsx\");\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Card */ \"./node_modules/react-bootstrap/esm/Card.js\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/StateContext */ \"./context/StateContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst CustomerSection = (param)=>{\n    let { section , customerList , scrollToCustomerDetail  } = param;\n    _s();\n    const { dayDifference  } = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateContext)();\n    const [filteredCustomers, setFilteredCustomers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(customerList);\n    const handleSelect = (e)=>{\n        const value = e.target.value;\n        if (value === \"all\") {\n            setFilteredCustomers(customerList);\n        } else if (value === \"need_check\") {\n            const tempList = customerList.filter((customer)=>{\n                const date1 = new Date();\n                const date2 = new Date(customer.Submission_Date);\n                const differenceInDays = dayDifference(date1, date2);\n                if (0 < differenceInDays && differenceInDays <= 2) {\n                    return customer;\n                }\n            });\n            setFilteredCustomers(tempList);\n        } else if (value === \"follow_up\") {\n            const tempList_follow_up = customerList.filter((customer)=>{\n                // see all the internally matched customers who were taking actions one day before from the internal matched section showing under this category. \n                const date = dayDifference(new Date(customer.LastUpdateTime), new Date());\n                if (0 < date && date <= 1) {\n                    return customer;\n                }\n            });\n            //order by price from high to low and then based on urgency: most urgent to least.\n            console.log(tempList_follow_up);\n            tempList_follow_up.sort(function(a, b) {\n                return new Date(a.rent_date) - new Date(b.rent_date);\n            }).sort((a, b)=>parseFloat(b.Budget_price) - parseFloat(a.Budget_price));\n            console.log(tempList_follow_up);\n            setFilteredCustomers(tempList_follow_up);\n        } else if (value === \"see_house\") {\n            const tempList_see_house = customerList.filter((customer)=>{\n                if (customer.rent_status === \"看房客户\") {\n                    return customer;\n                }\n            });\n            //ordering results by the nearest rate date to later\n            tempList_see_house.sort(function(a, b) {\n                return new Date(b.rent_date) - new Date(a.rent_date);\n            });\n            setFilteredCustomers(tempList_see_house);\n        } else if (value === \"short_rent\") {\n            const tempList_short_rent = customerList.filter((customer)=>{\n                if (customer.rent_duration !== \"长租1年\") {\n                    return customer;\n                }\n            });\n            //Order by urgency: most urgent to less urgent\n            tempList_short_rent.sort(function(a, b) {\n                return new Date(a.rent_date) - new Date(b.rent_date);\n            }).sort((a, b)=>parseFloat(b.Budget_price) - parseFloat(a.Budget_price));\n            setFilteredCustomers(tempList_short_rent);\n        } else if (value === \"pending\") {\n            const tempList_pending = customerList.filter((customer)=>{\n                if (customer.rent_status === \"PENDING\") {\n                    return customer;\n                }\n            });\n            //order by price from high to low and then based on urgency: most urgent to least.\n            tempList_pending.sort(function(a, b) {\n                return new Date(a.rent_date) - new Date(b.rent_date);\n            }).sort((a, b)=>parseFloat(b.Budget_price) - parseFloat(a.Budget_price));\n            setFilteredCustomers(tempList_pending);\n        }\n    };\n    // <option value=\"need_confirm\">内部匹配待确认</option>\n    // <option value=\"external\">外部房源开发租客</option>\n    // <option value=\"on_appointment\">约看房</option>\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Body, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Title, {\n                    className: \"title-with-object\",\n                    children: [\n                        \"\".concat(section, \" (\").concat(filteredCustomers.length, \")\"),\n                        section === \"Current\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Select, {\n                            className: \"dropdown-select\",\n                            size: \"sm\",\n                            onChange: handleSelect,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"all\",\n                                    children: \"All\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"need_check\",\n                                    children: \"需要录入和核对房源需求的租客\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"follow_up\",\n                                    children: \"Yesterday Follow-up\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"see_house\",\n                                    children: \"看房客户\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"short_rent\",\n                                    children: \"Short-term rental\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"pending\",\n                                    children: \"Pending\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                            lineNumber: 93,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                    lineNumber: 90,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"section-container\",\n                    children: customerList.sort(function(a, b) {\n                        return new Date(a.rent_date) - new Date(b.rent_date);\n                    }).sort((a, b)=>parseFloat(b.Budget_price) - parseFloat(a.Budget_price)).filter((customer1)=>filteredCustomers.some((customer2)=>customer2.UserId === customer1.UserId)).map((customer)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CustomerPreview__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            customer: customer,\n                            scrollToCustomerDetail: scrollToCustomerDetail\n                        }, customer.UserId, false, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                            lineNumber: 111,\n                            columnNumber: 29\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                    lineNumber: 104,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n            lineNumber: 89,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n        lineNumber: 88,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CustomerSection, \"5cjl3PXbWS+RAa8IlJ2mt5HP4M4=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateContext\n    ];\n});\n_c = CustomerSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomerSection);\nvar _c;\n$RefreshReg$(_c, \"CustomerSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1c3RvbWVyL0N1c3RvbWVyU2VjdGlvbi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUQ7QUFDakI7QUFFUTtBQUNSO0FBQ3FCO0FBRzdELE1BQU1RLGtCQUFrQixTQUF1RDtRQUF0RCxFQUFFQyxRQUFPLEVBQUVDLGFBQVksRUFBRUMsdUJBQXNCLEVBQUU7O0lBQ3RFLE1BQU0sRUFBRUMsY0FBYSxFQUFFLEdBQUdMLHNFQUFlQTtJQUN6QyxNQUFNLENBQUNNLG1CQUFtQkMscUJBQXFCLEdBQUdaLCtDQUFRQSxDQUFDUTtJQUUzRCxNQUFNSyxlQUFlLENBQUNDLElBQU07UUFDeEIsTUFBTUMsUUFBUUQsRUFBRUUsTUFBTSxDQUFDRCxLQUFLO1FBQzVCLElBQUlBLFVBQVUsT0FBTztZQUNqQkgscUJBQXFCSjtRQUN6QixPQUFPLElBQUlPLFVBQVUsY0FBYztZQUMvQixNQUFNRSxXQUFXVCxhQUFhVSxNQUFNLENBQUMsQ0FBQ0MsV0FBYTtnQkFDL0MsTUFBTUMsUUFBUSxJQUFJQztnQkFDbEIsTUFBTUMsUUFBUSxJQUFJRCxLQUFLRixTQUFTSSxlQUFlO2dCQUUvQyxNQUFNQyxtQkFBbUJkLGNBQWNVLE9BQU9FO2dCQUM5QyxJQUFJLElBQUlFLG9CQUFvQkEsb0JBQW9CLEdBQUU7b0JBQzlDLE9BQU9MO2dCQUNYLENBQUM7WUFDTDtZQUNBUCxxQkFBcUJLO1FBQ3pCLE9BQU8sSUFBSUYsVUFBUyxhQUFjO1lBQzlCLE1BQU1VLHFCQUFxQmpCLGFBQWFVLE1BQU0sQ0FBQyxDQUFDQyxXQUFhO2dCQUN6RCxrSkFBa0o7Z0JBQ2xKLE1BQU1PLE9BQU9oQixjQUFjLElBQUlXLEtBQUtGLFNBQVNRLGNBQWMsR0FBRyxJQUFJTjtnQkFDbEUsSUFBSSxJQUFJSyxRQUFRQSxRQUFRLEdBQUc7b0JBQ3ZCLE9BQU9QO2dCQUNYLENBQUM7WUFDTDtZQUNDLGtGQUFrRjtZQUNsRlMsUUFBUUMsR0FBRyxDQUFFSjtZQUNkQSxtQkFBbUJLLElB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QUFDLFNBQVNDLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO3dCQUMzQixPQUFPLElBQUlYLEtBQUtVLEVBQUVFLFNBQVMsSUFBSSxJQUFJWixLQUFLVyxFQUFFQyxTQUFTO29CQUNyRCxHQUFHSCxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUUsV0FBV0YsRUFBRUcsWUFBWSxJQUFJRCxXQUFXSCxFQUFFSSxZQUFZLEdBQUdqQixNQUFNLENBQUNnQyxDQUFBQSxZQUNoRnZDLGtCQUFrQndDLElBQUksQ0FBQ0MsQ0FBQUEsWUFBYUEsVUFBVUMsTUFBTSxLQUFLSCxVQUFVRyxNQUFNLEdBQzNFQyxHQUFHLENBQUMsQ0FBQ25DLHlCQUNILDhEQUFDaEIsd0RBQWVBOzRCQUF1QmdCLFVBQVVBOzRCQUFVVix3QkFBd0JBOzJCQUE3RFUsU0FBU2tDLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9qRTtHQTdHTS9DOztRQUN3QkQsa0VBQWVBOzs7S0FEdkNDO0FBK0dOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ3VzdG9tZXIvQ3VzdG9tZXJTZWN0aW9uLmpzeD82Y2VkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xuXG5pbXBvcnQgQ3VzdG9tZXJQcmV2aWV3IGZyb20gJy4vQ3VzdG9tZXJQcmV2aWV3JztcbmltcG9ydCBDYXJkIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9DYXJkJztcbmltcG9ydCB7IHVzZVN0YXRlQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQvU3RhdGVDb250ZXh0JztcblxuXG5jb25zdCBDdXN0b21lclNlY3Rpb24gPSAoeyBzZWN0aW9uLCBjdXN0b21lckxpc3QsIHNjcm9sbFRvQ3VzdG9tZXJEZXRhaWwgfSkgPT4ge1xuICAgIGNvbnN0IHsgZGF5RGlmZmVyZW5jZSB9ID0gdXNlU3RhdGVDb250ZXh0KClcbiAgICBjb25zdCBbZmlsdGVyZWRDdXN0b21lcnMsIHNldEZpbHRlcmVkQ3VzdG9tZXJzXSA9IHVzZVN0YXRlKGN1c3RvbWVyTGlzdClcblxuICAgIGNvbnN0IGhhbmRsZVNlbGVjdCA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgaWYgKHZhbHVlID09PSBcImFsbFwiKSB7XG4gICAgICAgICAgICBzZXRGaWx0ZXJlZEN1c3RvbWVycyhjdXN0b21lckxpc3QpXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwibmVlZF9jaGVja1wiKSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wTGlzdCA9IGN1c3RvbWVyTGlzdC5maWx0ZXIoKGN1c3RvbWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZTEgPSBuZXcgRGF0ZSgpXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZTIgPSBuZXcgRGF0ZShjdXN0b21lci5TdWJtaXNzaW9uX0RhdGUpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgZGlmZmVyZW5jZUluRGF5cyA9IGRheURpZmZlcmVuY2UoZGF0ZTEsIGRhdGUyKVxuICAgICAgICAgICAgICAgIGlmICgwIDwgZGlmZmVyZW5jZUluRGF5cyAmJiBkaWZmZXJlbmNlSW5EYXlzIDw9IDIpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VzdG9tZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgc2V0RmlsdGVyZWRDdXN0b21lcnModGVtcExpc3QpXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09XCJmb2xsb3dfdXBcIiApIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXBMaXN0X2ZvbGxvd191cCA9IGN1c3RvbWVyTGlzdC5maWx0ZXIoKGN1c3RvbWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gc2VlIGFsbCB0aGUgaW50ZXJuYWxseSBtYXRjaGVkIGN1c3RvbWVycyB3aG8gd2VyZSB0YWtpbmcgYWN0aW9ucyBvbmUgZGF5IGJlZm9yZSBmcm9tIHRoZSBpbnRlcm5hbCBtYXRjaGVkIHNlY3Rpb24gc2hvd2luZyB1bmRlciB0aGlzIGNhdGVnb3J5LiBcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlID0gZGF5RGlmZmVyZW5jZShuZXcgRGF0ZShjdXN0b21lci5MYXN0VXBkYXRlVGltZSksIG5ldyBEYXRlKCkpXG4gICAgICAgICAgICAgICAgaWYgKDAgPCBkYXRlICYmIGRhdGUgPD0gMSApe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VzdG9tZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgIC8vb3JkZXIgYnkgcHJpY2UgZnJvbSBoaWdoIHRvIGxvdyBhbmQgdGhlbiBiYXNlZCBvbiB1cmdlbmN5OiBtb3N0IHVyZ2VudCB0byBsZWFzdC5cbiAgICAgICAgICAgICBjb25zb2xlLmxvZyggdGVtcExpc3RfZm9sbG93X3VwKVxuICAgICAgICAgICAgdGVtcExpc3RfZm9sbG93X3VwLnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYS5yZW50X2RhdGUpIC0gbmV3IERhdGUoYi5yZW50X2RhdGUpXG4gICAgICAgICAgICB9KS5zb3J0KChhLCBiKSA9PiBwYXJzZUZsb2F0KGIuQnVkZ2V0X3ByaWNlKSAtIHBhcnNlRmxvYXQoYS5CdWRnZXRfcHJpY2UpKVxuICAgICAgICAgICAgY29uc29sZS5sb2coIHRlbXBMaXN0X2ZvbGxvd191cClcbiAgICAgICAgICAgIHNldEZpbHRlcmVkQ3VzdG9tZXJzKHRlbXBMaXN0X2ZvbGxvd191cClcblxuICAgICAgICB9ZWxzZSBpZiAodmFsdWUgPT09XCJzZWVfaG91c2VcIiApIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXBMaXN0X3NlZV9ob3VzZSA9IGN1c3RvbWVyTGlzdC5maWx0ZXIoKGN1c3RvbWVyKSA9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmIChjdXN0b21lci5yZW50X3N0YXR1cz09PSfnnIvmiL/lrqLmiLcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXN0b21lclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvL29yZGVyaW5nIHJlc3VsdHMgYnkgdGhlIG5lYXJlc3QgcmF0ZSBkYXRlIHRvIGxhdGVyXG4gICAgICAgICAgICB0ZW1wTGlzdF9zZWVfaG91c2Uuc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShiLnJlbnRfZGF0ZSkgLSBuZXcgRGF0ZShhLnJlbnRfZGF0ZSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHNldEZpbHRlcmVkQ3VzdG9tZXJzKHRlbXBMaXN0X3NlZV9ob3VzZSlcblxuICAgICAgICB9ZWxzZSBpZiAodmFsdWUgPT09XCJzaG9ydF9yZW50XCIgKSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wTGlzdF9zaG9ydF9yZW50ID0gY3VzdG9tZXJMaXN0LmZpbHRlcigoY3VzdG9tZXIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY3VzdG9tZXIucmVudF9kdXJhdGlvbiE9PSfplb/np58x5bm0Jykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VzdG9tZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy9PcmRlciBieSB1cmdlbmN5OiBtb3N0IHVyZ2VudCB0byBsZXNzIHVyZ2VudFxuICAgICAgICAgICAgdGVtcExpc3Rfc2hvcnRfcmVudC5zb3J0KGZ1bmN0aW9uKGEsYil7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGEucmVudF9kYXRlKSAtIG5ldyBEYXRlKGIucmVudF9kYXRlKVxuICAgICAgICAgICAgICB9KS5zb3J0KChhLCBiKSA9PiBwYXJzZUZsb2F0KGIuQnVkZ2V0X3ByaWNlKSAtIHBhcnNlRmxvYXQoYS5CdWRnZXRfcHJpY2UpKTtcbiAgICAgICAgICAgIHNldEZpbHRlcmVkQ3VzdG9tZXJzKHRlbXBMaXN0X3Nob3J0X3JlbnQpXG5cbiAgICAgICAgfWVsc2UgaWYgKHZhbHVlID09PVwicGVuZGluZ1wiICkge1xuICAgICAgICAgICAgY29uc3QgdGVtcExpc3RfcGVuZGluZyA9IGN1c3RvbWVyTGlzdC5maWx0ZXIoKGN1c3RvbWVyKSA9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmIChjdXN0b21lci5yZW50X3N0YXR1cz09PSdQRU5ESU5HJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VzdG9tZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy9vcmRlciBieSBwcmljZSBmcm9tIGhpZ2ggdG8gbG93IGFuZCB0aGVuIGJhc2VkIG9uIHVyZ2VuY3k6IG1vc3QgdXJnZW50IHRvIGxlYXN0LlxuICAgICAgICAgICAgdGVtcExpc3RfcGVuZGluZy5zb3J0KGZ1bmN0aW9uKGEsYil7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGEucmVudF9kYXRlKSAtIG5ldyBEYXRlKGIucmVudF9kYXRlKVxuICAgICAgICAgICAgICB9KS5zb3J0KChhLCBiKSA9PiBwYXJzZUZsb2F0KGIuQnVkZ2V0X3ByaWNlKSAtIHBhcnNlRmxvYXQoYS5CdWRnZXRfcHJpY2UpKTtcbiAgICAgICAgICAgIHNldEZpbHRlcmVkQ3VzdG9tZXJzKHRlbXBMaXN0X3BlbmRpbmcpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyA8b3B0aW9uIHZhbHVlPVwibmVlZF9jb25maXJtXCI+5YaF6YOo5Yy56YWN5b6F56Gu6K6kPC9vcHRpb24+XG4gICAgLy8gPG9wdGlvbiB2YWx1ZT1cImV4dGVybmFsXCI+5aSW6YOo5oi/5rqQ5byA5Y+R56ef5a6iPC9vcHRpb24+XG4gICAgLy8gPG9wdGlvbiB2YWx1ZT1cIm9uX2FwcG9pbnRtZW50XCI+57qm55yL5oi/PC9vcHRpb24+XG4gICAgcmV0dXJuIChcbiAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICA8Q2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlIGNsYXNzTmFtZT0ndGl0bGUtd2l0aC1vYmplY3QnPlxuICAgICAgICAgICAgICAgICAgICB7YCR7c2VjdGlvbn0gKCR7ZmlsdGVyZWRDdXN0b21lcnMubGVuZ3RofSlgfVxuICAgICAgICAgICAgICAgICAgICB7c2VjdGlvbiA9PT0gJ0N1cnJlbnQnICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uU2VsZWN0IGNsYXNzTmFtZT1cImRyb3Bkb3duLXNlbGVjdFwiIHNpemU9XCJzbVwiIG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3R9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhbGxcIj5BbGw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibmVlZF9jaGVja1wiPumcgOimgeW9leWFpeWSjOaguOWvueaIv+a6kOmcgOaxgueahOenn+Wuojwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmb2xsb3dfdXBcIj5ZZXN0ZXJkYXkgRm9sbG93LXVwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNlZV9ob3VzZVwiPueci+aIv+WuouaItzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzaG9ydF9yZW50XCI+U2hvcnQtdGVybSByZW50YWw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicGVuZGluZ1wiPlBlbmRpbmc8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5TZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L0NhcmQuVGl0bGU+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb24tY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyTGlzdC5zb3J0KGZ1bmN0aW9uKGEsYil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGEucmVudF9kYXRlKSAtIG5ldyBEYXRlKGIucmVudF9kYXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5zb3J0KChhLCBiKSA9PiBwYXJzZUZsb2F0KGIuQnVkZ2V0X3ByaWNlKSAtIHBhcnNlRmxvYXQoYS5CdWRnZXRfcHJpY2UpKS5maWx0ZXIoY3VzdG9tZXIxID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRDdXN0b21lcnMuc29tZShjdXN0b21lcjIgPT4gY3VzdG9tZXIyLlVzZXJJZCA9PT0gY3VzdG9tZXIxLlVzZXJJZClcbiAgICAgICAgICAgICAgICAgICAgICAgICkubWFwKChjdXN0b21lcikgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tZXJQcmV2aWV3IGtleT17Y3VzdG9tZXIuVXNlcklkfSBjdXN0b21lcj17Y3VzdG9tZXJ9IHNjcm9sbFRvQ3VzdG9tZXJEZXRhaWw9e3Njcm9sbFRvQ3VzdG9tZXJEZXRhaWx9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICA8L0NhcmQ+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tZXJTZWN0aW9uOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiRm9ybSIsIkN1c3RvbWVyUHJldmlldyIsIkNhcmQiLCJ1c2VTdGF0ZUNvbnRleHQiLCJDdXN0b21lclNlY3Rpb24iLCJzZWN0aW9uIiwiY3VzdG9tZXJMaXN0Iiwic2Nyb2xsVG9DdXN0b21lckRldGFpbCIsImRheURpZmZlcmVuY2UiLCJmaWx0ZXJlZEN1c3RvbWVycyIsInNldEZpbHRlcmVkQ3VzdG9tZXJzIiwiaGFuZGxlU2VsZWN0IiwiZSIsInZhbHVlIiwidGFyZ2V0IiwidGVtcExpc3QiLCJmaWx0ZXIiLCJjdXN0b21lciIsImRhdGUxIiwiRGF0ZSIsImRhdGUyIiwiU3VibWlzc2lvbl9EYXRlIiwiZGlmZmVyZW5jZUluRGF5cyIsInRlbXBMaXN0X2ZvbGxvd191cCIsImRhdGUiLCJMYXN0VXBkYXRlVGltZSIsImNvbnNvbGUiLCJsb2ciLCJzb3J0IiwiYSIsImIiLCJyZW50X2RhdGUiLCJwYXJzZUZsb2F0IiwiQnVkZ2V0X3ByaWNlIiwidGVtcExpc3Rfc2VlX2hvdXNlIiwicmVudF9zdGF0dXMiLCJ0ZW1wTGlzdF9zaG9ydF9yZW50IiwicmVudF9kdXJhdGlvbiIsInRlbXBMaXN0X3BlbmRpbmciLCJCb2R5IiwiVGl0bGUiLCJjbGFzc05hbWUiLCJsZW5ndGgiLCJTZWxlY3QiLCJzaXplIiwib25DaGFuZ2UiLCJvcHRpb24iLCJkaXYiLCJjdXN0b21lcjEiLCJzb21lIiwiY3VzdG9tZXIyIiwiVXNlcklkIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Customer/CustomerSection.jsx\n"));

/***/ })

});