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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var _CustomerPreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomerPreview */ \"./components/Customer/CustomerPreview.jsx\");\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Card */ \"./node_modules/react-bootstrap/esm/Card.js\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/StateContext */ \"./context/StateContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst CustomerSection = (param)=>{\n    let { section , customerList , scrollToCustomerDetail  } = param;\n    _s();\n    const { dayDifference  } = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateContext)();\n    const [filteredCustomers, setFilteredCustomers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(customerList);\n    const filteredCustomersUpdate = useRef();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, [\n        filteredCustomers\n    ]);\n    const handleSelect = (e)=>{\n        const value = e.target.value;\n        if (value === \"all\") {\n            setFilteredCustomers(customerList);\n        } else if (value === \"need_check\") {\n            const tempList = customerList.filter((customer)=>{\n                const date1 = new Date();\n                const date2 = new Date(customer.Submission_Date);\n                const differenceInDays = dayDifference(date1, date2);\n                if (0 < differenceInDays && differenceInDays <= 2) {\n                    return customer;\n                }\n            });\n            setFilteredCustomers(tempList);\n        } else if (value === \"follow_up\") {\n            const tempList_follow_up = customerList.filter((customer)=>{\n                // see all the internally matched customers who were taking actions one day before from the internal matched section showing under this category. \n                const date = dayDifference(new Date(customer.LastUpdateTime), new Date());\n                if (0 < date && date <= 1) {\n                    return customer;\n                }\n            });\n            //order by price from high to low and then based on urgency: most urgent to least.\n            console.log(tempList_follow_up);\n            tempList_follow_up.sort(function(a, b) {\n                return new Date(a.rent_date) - new Date(b.rent_date);\n            }).sort((a, b)=>parseFloat(b.Budget_price) - parseFloat(a.Budget_price));\n            console.log(tempList_follow_up);\n            setFilteredCustomers(tempList_follow_up);\n            console.log(filteredCustomers);\n        } else if (value === \"see_house\") {\n            const tempList_see_house = customerList.filter((customer)=>{\n                if (customer.rent_status === \"看房客户\") {\n                    return customer;\n                }\n            });\n            //ordering results by the nearest rate date to later\n            tempList_see_house.sort(function(a, b) {\n                return new Date(b.rent_date) - new Date(a.rent_date);\n            });\n            setFilteredCustomers(tempList_see_house);\n            filteredCustomersUpdatec.current;\n        } else if (value === \"short_rent\") {\n            const tempList_short_rent = customerList.filter((customer)=>{\n                if (customer.rent_duration !== \"长租1年\") {\n                    return customer;\n                }\n            });\n            //Order by urgency: most urgent to less urgent\n            tempList_short_rent.sort(function(a, b) {\n                return new Date(a.rent_date) - new Date(b.rent_date);\n            }).sort((a, b)=>parseFloat(b.Budget_price) - parseFloat(a.Budget_price));\n            setFilteredCustomers(tempList_short_rent);\n        } else if (value === \"pending\") {\n            const tempList_pending = customerList.filter((customer)=>{\n                if (customer.rent_status === \"PENDING\") {\n                    return customer;\n                }\n            });\n            //order by price from high to low and then based on urgency: most urgent to least.\n            tempList_pending.sort(function(a, b) {\n                return new Date(a.rent_date) - new Date(b.rent_date);\n            }).sort((a, b)=>parseFloat(b.Budget_price) - parseFloat(a.Budget_price));\n            setFilteredCustomers(tempList_pending);\n        }\n    };\n    // <option value=\"need_confirm\">内部匹配待确认</option>\n    // <option value=\"external\">外部房源开发租客</option>\n    // <option value=\"on_appointment\">约看房</option>\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Body, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Title, {\n                    className: \"title-with-object\",\n                    children: [\n                        \"\".concat(section, \" (\").concat(filteredCustomers.length, \")\"),\n                        section === \"Current\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Select, {\n                            className: \"dropdown-select\",\n                            size: \"sm\",\n                            onChange: handleSelect,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"all\",\n                                    children: \"All\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"need_check\",\n                                    children: \"需要录入和核对房源需求的租客\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"follow_up\",\n                                    children: \"Yesterday Follow-up\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"see_house\",\n                                    children: \"看房客户\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"short_rent\",\n                                    children: \"Short-term rental\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"pending\",\n                                    children: \"Pending\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                            lineNumber: 96,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                    lineNumber: 93,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"section-container\",\n                    children: customerList.filter((customer1)=>filteredCustomers.some((customer2)=>customer2.UserId === customer1.UserId)).map((customer)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CustomerPreview__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            customer: customer,\n                            scrollToCustomerDetail: scrollToCustomerDetail\n                        }, customer.UserId, false, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                            lineNumber: 112,\n                            columnNumber: 29\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n                    lineNumber: 107,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n            lineNumber: 92,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerSection.jsx\",\n        lineNumber: 91,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CustomerSection, \"33mpP42BC6d54dW/Gfb8EWFa0DY=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateContext\n    ];\n});\n_c = CustomerSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomerSection);\nvar _c;\n$RefreshReg$(_c, \"CustomerSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1c3RvbWVyL0N1c3RvbWVyU2VjdGlvbi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDVDtBQUVRO0FBQ1I7QUFDcUI7QUFHN0QsTUFBTU8sa0JBQWtCLFNBQXVEO1FBQXRELEVBQUVDLFFBQU8sRUFBRUMsYUFBWSxFQUFFQyx1QkFBc0IsRUFBRTs7SUFDdEUsTUFBTSxFQUFFQyxjQUFhLEVBQUUsR0FBR0wsc0VBQWVBO0lBQ3pDLE1BQU0sQ0FBQ00sbUJBQW1CQyxxQkFBcUIsR0FBR1gsK0NBQVFBLENBQUNPO0lBQzNELE1BQU1LLDBCQUF3QkM7SUFFOUJkLGdEQUFTQSxDQUFDLElBQU0sQ0FDaEIsR0FBRztRQUFDVztLQUFrQjtJQUV0QixNQUFNSSxlQUFlLENBQUNDLElBQU07UUFDeEIsTUFBTUMsUUFBUUQsRUFBRUUsTUFBTSxDQUFDRCxLQUFLO1FBQzVCLElBQUlBLFVBQVUsT0FBTztZQUNqQkwscUJBQXFCSjtRQUN6QixPQUFPLElBQUlTLFVBQVUsY0FBYztZQUMvQixNQUFNRSxXQUFXWCxhQUFhWSxNQUFNLENBQUMsQ0FBQ0MsV0FBYTtnQkFDL0MsTUFBTUMsUUFBUSxJQUFJQztnQkFDbEIsTUFBTUMsUUFBUSxJQUFJRCxLQUFLRixTQUFTSSxlQUFlO2dCQUUvQyxNQUFNQyxtQkFBbUJoQixjQUFjWSxPQUFPRTtnQkFDOUMsSUFBSSxJQUFJRSxvQkFBb0JBLG9CQUFvQixHQUFFO29CQUM5QyxPQUFPTDtnQkFDWCxDQUFDO1lBQ0w7WUFDQVQscUJBQXFCTztRQUN6QixPQUFPLElBQUlGLFVBQVMsYUFBYztZQUM5QixNQUFNVSxxQkFBcUJuQixhQUFhWSxNQUFNLENBQUMsQ0FBQ0MsV0FBYTtnQkFDekQsa0pBQWtKO2dCQUNsSixNQUFNTyxPQUFPbEIsY0FBYyxJQUFJYSxLQUFLRixTQUFTUSxjQUFjLEdBQUcsSUFBSU47Z0JBQ2xFLElBQUksSUFBSUssUUFBUUEsUUFBUSxHQUFHO29CQUN2QixPQUFPUDtn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TTs4Q0FBYTs7Ozs7OzhDQUMzQiw4REFBQ21DO29DQUFPbkMsT0FBTTs4Q0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUtwQyw4REFBQ29DO29CQUFJTixXQUFVOzhCQUVQdkMsYUFBYVksTUFBTSxDQUFDa0MsQ0FBQUEsWUFDaEIzQyxrQkFBa0I0QyxJQUFJLENBQUNDLENBQUFBLFlBQWFBLFVBQVVDLE1BQU0sS0FBS0gsVUFBVUcsTUFBTSxHQUMzRUMsR0FBRyxDQUFDLENBQUNyQyx5QkFDSCw4REFBQ2xCLHdEQUFlQTs0QkFBdUJrQixVQUFVQTs0QkFBVVosd0JBQXdCQTsyQkFBN0RZLFNBQVNvQyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPakU7R0E5R01uRDs7UUFDd0JELGtFQUFlQTs7O0tBRHZDQztBQWdITiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0N1c3RvbWVyL0N1c3RvbWVyU2VjdGlvbi5qc3g/NmNlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XG5cbmltcG9ydCBDdXN0b21lclByZXZpZXcgZnJvbSAnLi9DdXN0b21lclByZXZpZXcnO1xuaW1wb3J0IENhcmQgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NhcmQnO1xuaW1wb3J0IHsgdXNlU3RhdGVDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9TdGF0ZUNvbnRleHQnO1xuXG5cbmNvbnN0IEN1c3RvbWVyU2VjdGlvbiA9ICh7IHNlY3Rpb24sIGN1c3RvbWVyTGlzdCwgc2Nyb2xsVG9DdXN0b21lckRldGFpbCB9KSA9PiB7XG4gICAgY29uc3QgeyBkYXlEaWZmZXJlbmNlIH0gPSB1c2VTdGF0ZUNvbnRleHQoKVxuICAgIGNvbnN0IFtmaWx0ZXJlZEN1c3RvbWVycywgc2V0RmlsdGVyZWRDdXN0b21lcnNdID0gdXNlU3RhdGUoY3VzdG9tZXJMaXN0KVxuICAgIGNvbnN0IGZpbHRlcmVkQ3VzdG9tZXJzVXBkYXRlPXVzZVJlZigpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4geyAgICAgICBcbiAgICB9LCBbZmlsdGVyZWRDdXN0b21lcnNdKTtcblxuICAgIGNvbnN0IGhhbmRsZVNlbGVjdCA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgaWYgKHZhbHVlID09PSBcImFsbFwiKSB7XG4gICAgICAgICAgICBzZXRGaWx0ZXJlZEN1c3RvbWVycyhjdXN0b21lckxpc3QpXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwibmVlZF9jaGVja1wiKSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wTGlzdCA9IGN1c3RvbWVyTGlzdC5maWx0ZXIoKGN1c3RvbWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZTEgPSBuZXcgRGF0ZSgpXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZTIgPSBuZXcgRGF0ZShjdXN0b21lci5TdWJtaXNzaW9uX0RhdGUpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgZGlmZmVyZW5jZUluRGF5cyA9IGRheURpZmZlcmVuY2UoZGF0ZTEsIGRhdGUyKVxuICAgICAgICAgICAgICAgIGlmICgwIDwgZGlmZmVyZW5jZUluRGF5cyAmJiBkaWZmZXJlbmNlSW5EYXlzIDw9IDIpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VzdG9tZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgc2V0RmlsdGVyZWRDdXN0b21lcnModGVtcExpc3QpXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09XCJmb2xsb3dfdXBcIiApIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXBMaXN0X2ZvbGxvd191cCA9IGN1c3RvbWVyTGlzdC5maWx0ZXIoKGN1c3RvbWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gc2VlIGFsbCB0aGUgaW50ZXJuYWxseSBtYXRjaGVkIGN1c3RvbWVycyB3aG8gd2VyZSB0YWtpbmcgYWN0aW9ucyBvbmUgZGF5IGJlZm9yZSBmcm9tIHRoZSBpbnRlcm5hbCBtYXRjaGVkIHNlY3Rpb24gc2hvd2luZyB1bmRlciB0aGlzIGNhdGVnb3J5LiBcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlID0gZGF5RGlmZmVyZW5jZShuZXcgRGF0ZShjdXN0b21lci5MYXN0VXBkYXRlVGltZSksIG5ldyBEYXRlKCkpXG4gICAgICAgICAgICAgICAgaWYgKDAgPCBkYXRlICYmIGRhdGUgPD0gMSApe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VzdG9tZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgIC8vb3JkZXIgYnkgcHJpY2UgZnJvbSBoaWdoIHRvIGxvdyBhbmQgdGhlbiBiYXNlZCBvbiB1cmdlbmN5OiBtb3N0IHVyZ2VudCB0byBsZWFzdC5cbiAgICAgICAgICAgICBjb25zb2xlLmxvZyggdGVtcExpc3RfZm9sbG93X3VwKVxuICAgICAgICAgICAgdGVtcExpc3RfZm9sbG93X3VwLnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYS5yZW50X2RhdGUpIC0gbmV3IERhdGUoYi5yZW50X2RhdGUpXG4gICAgICAgICAgICAgIH0pLnNvcnQoKGEsIGIpID0+IHBhcnNlRmxvYXQoYi5CdWRnZXRfcHJpY2UpIC0gcGFyc2VGbG9hdChhLkJ1ZGdldF9wcmljZSkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coIHRlbXBMaXN0X2ZvbGxvd191cClcbiAgICAgICAgICAgIHNldEZpbHRlcmVkQ3VzdG9tZXJzKHRlbXBMaXN0X2ZvbGxvd191cClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbHRlcmVkQ3VzdG9tZXJzKVxuICAgICAgICB9ZWxzZSBpZiAodmFsdWUgPT09XCJzZWVfaG91c2VcIiApIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXBMaXN0X3NlZV9ob3VzZSA9IGN1c3RvbWVyTGlzdC5maWx0ZXIoKGN1c3RvbWVyKSA9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmIChjdXN0b21lci5yZW50X3N0YXR1cz09PSfnnIvmiL/lrqLmiLcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXN0b21lclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvL29yZGVyaW5nIHJlc3VsdHMgYnkgdGhlIG5lYXJlc3QgcmF0ZSBkYXRlIHRvIGxhdGVyXG4gICAgICAgICAgICB0ZW1wTGlzdF9zZWVfaG91c2Uuc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShiLnJlbnRfZGF0ZSkgLSBuZXcgRGF0ZShhLnJlbnRfZGF0ZSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHNldEZpbHRlcmVkQ3VzdG9tZXJzKHRlbXBMaXN0X3NlZV9ob3VzZSlcbiAgICAgICAgICAgIGZpbHRlcmVkQ3VzdG9tZXJzVXBkYXRlYy5jdXJyZW50XG4gICAgICAgIH1lbHNlIGlmICh2YWx1ZSA9PT1cInNob3J0X3JlbnRcIiApIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXBMaXN0X3Nob3J0X3JlbnQgPSBjdXN0b21lckxpc3QuZmlsdGVyKChjdXN0b21lcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjdXN0b21lci5yZW50X2R1cmF0aW9uIT09J+mVv+ennzHlubQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXN0b21lclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvL09yZGVyIGJ5IHVyZ2VuY3k6IG1vc3QgdXJnZW50IHRvIGxlc3MgdXJnZW50XG4gICAgICAgICAgICB0ZW1wTGlzdF9zaG9ydF9yZW50LnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYS5yZW50X2RhdGUpIC0gbmV3IERhdGUoYi5yZW50X2RhdGUpXG4gICAgICAgICAgICAgIH0pLnNvcnQoKGEsIGIpID0+IHBhcnNlRmxvYXQoYi5CdWRnZXRfcHJpY2UpIC0gcGFyc2VGbG9hdChhLkJ1ZGdldF9wcmljZSkpO1xuICAgICAgICAgICAgc2V0RmlsdGVyZWRDdXN0b21lcnModGVtcExpc3Rfc2hvcnRfcmVudClcbiAgICAgICAgfWVsc2UgaWYgKHZhbHVlID09PVwicGVuZGluZ1wiICkge1xuICAgICAgICAgICAgY29uc3QgdGVtcExpc3RfcGVuZGluZyA9IGN1c3RvbWVyTGlzdC5maWx0ZXIoKGN1c3RvbWVyKSA9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmIChjdXN0b21lci5yZW50X3N0YXR1cz09PSdQRU5ESU5HJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VzdG9tZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy9vcmRlciBieSBwcmljZSBmcm9tIGhpZ2ggdG8gbG93IGFuZCB0aGVuIGJhc2VkIG9uIHVyZ2VuY3k6IG1vc3QgdXJnZW50IHRvIGxlYXN0LlxuICAgICAgICAgICAgdGVtcExpc3RfcGVuZGluZy5zb3J0KGZ1bmN0aW9uKGEsYil7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGEucmVudF9kYXRlKSAtIG5ldyBEYXRlKGIucmVudF9kYXRlKVxuICAgICAgICAgICAgICB9KS5zb3J0KChhLCBiKSA9PiBwYXJzZUZsb2F0KGIuQnVkZ2V0X3ByaWNlKSAtIHBhcnNlRmxvYXQoYS5CdWRnZXRfcHJpY2UpKTtcbiAgICAgICAgICAgIHNldEZpbHRlcmVkQ3VzdG9tZXJzKHRlbXBMaXN0X3BlbmRpbmcpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyA8b3B0aW9uIHZhbHVlPVwibmVlZF9jb25maXJtXCI+5YaF6YOo5Yy56YWN5b6F56Gu6K6kPC9vcHRpb24+XG4gICAgLy8gPG9wdGlvbiB2YWx1ZT1cImV4dGVybmFsXCI+5aSW6YOo5oi/5rqQ5byA5Y+R56ef5a6iPC9vcHRpb24+XG4gICAgLy8gPG9wdGlvbiB2YWx1ZT1cIm9uX2FwcG9pbnRtZW50XCI+57qm55yL5oi/PC9vcHRpb24+XG4gICAgcmV0dXJuIChcbiAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICA8Q2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlIGNsYXNzTmFtZT0ndGl0bGUtd2l0aC1vYmplY3QnPlxuICAgICAgICAgICAgICAgICAgICB7YCR7c2VjdGlvbn0gKCR7ZmlsdGVyZWRDdXN0b21lcnMubGVuZ3RofSlgfVxuICAgICAgICAgICAgICAgICAgICB7c2VjdGlvbiA9PT0gJ0N1cnJlbnQnICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uU2VsZWN0IGNsYXNzTmFtZT1cImRyb3Bkb3duLXNlbGVjdFwiIHNpemU9XCJzbVwiIG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3R9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhbGxcIj5BbGw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibmVlZF9jaGVja1wiPumcgOimgeW9leWFpeWSjOaguOWvueaIv+a6kOmcgOaxgueahOenn+Wuojwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmb2xsb3dfdXBcIj5ZZXN0ZXJkYXkgRm9sbG93LXVwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNlZV9ob3VzZVwiPueci+aIv+WuouaItzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzaG9ydF9yZW50XCI+U2hvcnQtdGVybSByZW50YWw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicGVuZGluZ1wiPlBlbmRpbmc8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5TZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L0NhcmQuVGl0bGU+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb24tY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyTGlzdC5maWx0ZXIoY3VzdG9tZXIxID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRDdXN0b21lcnMuc29tZShjdXN0b21lcjIgPT4gY3VzdG9tZXIyLlVzZXJJZCA9PT0gY3VzdG9tZXIxLlVzZXJJZClcbiAgICAgICAgICAgICAgICAgICAgICAgICkubWFwKChjdXN0b21lcikgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tZXJQcmV2aWV3IGtleT17Y3VzdG9tZXIuVXNlcklkfSBjdXN0b21lcj17Y3VzdG9tZXJ9IHNjcm9sbFRvQ3VzdG9tZXJEZXRhaWw9e3Njcm9sbFRvQ3VzdG9tZXJEZXRhaWx9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICA8L0NhcmQ+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tZXJTZWN0aW9uOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRm9ybSIsIkN1c3RvbWVyUHJldmlldyIsIkNhcmQiLCJ1c2VTdGF0ZUNvbnRleHQiLCJDdXN0b21lclNlY3Rpb24iLCJzZWN0aW9uIiwiY3VzdG9tZXJMaXN0Iiwic2Nyb2xsVG9DdXN0b21lckRldGFpbCIsImRheURpZmZlcmVuY2UiLCJmaWx0ZXJlZEN1c3RvbWVycyIsInNldEZpbHRlcmVkQ3VzdG9tZXJzIiwiZmlsdGVyZWRDdXN0b21lcnNVcGRhdGUiLCJ1c2VSZWYiLCJoYW5kbGVTZWxlY3QiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJ0ZW1wTGlzdCIsImZpbHRlciIsImN1c3RvbWVyIiwiZGF0ZTEiLCJEYXRlIiwiZGF0ZTIiLCJTdWJtaXNzaW9uX0RhdGUiLCJkaWZmZXJlbmNlSW5EYXlzIiwidGVtcExpc3RfZm9sbG93X3VwIiwiZGF0ZSIsIkxhc3RVcGRhdGVUaW1lIiwiY29uc29sZSIsImxvZyIsInNvcnQiLCJhIiwiYiIsInJlbnRfZGF0ZSIsInBhcnNlRmxvYXQiLCJCdWRnZXRfcHJpY2UiLCJ0ZW1wTGlzdF9zZWVfaG91c2UiLCJyZW50X3N0YXR1cyIsImZpbHRlcmVkQ3VzdG9tZXJzVXBkYXRlYyIsImN1cnJlbnQiLCJ0ZW1wTGlzdF9zaG9ydF9yZW50IiwicmVudF9kdXJhdGlvbiIsInRlbXBMaXN0X3BlbmRpbmciLCJCb2R5IiwiVGl0bGUiLCJjbGFzc05hbWUiLCJsZW5ndGgiLCJTZWxlY3QiLCJzaXplIiwib25DaGFuZ2UiLCJvcHRpb24iLCJkaXYiLCJjdXN0b21lcjEiLCJzb21lIiwiY3VzdG9tZXIyIiwiVXNlcklkIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Customer/CustomerSection.jsx\n"));

/***/ })

});