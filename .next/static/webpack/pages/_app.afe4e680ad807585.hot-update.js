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

/***/ "./components/Customer/CustomerContainer.jsx":
/*!***************************************************!*\
  !*** ./components/Customer/CustomerContainer.jsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _DropDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DropDown */ \"./components/DropDown.jsx\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/StateContext */ \"./context/StateContext.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .. */ \"./components/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n //components/index.js\nconst CustomerContainer = (param)=>{\n    let { scrollToCustomerDetail  } = param;\n    _s();\n    const { filteredCustomersByID , filteredCustomersByEmail , filteredCustomersByWechat , customers , dayDifference  } = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateContext)();\n    const [isCollapsed, setIsCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [currentCustomers, setCurrentCustomers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [inSevenCustomers, setInSevenCustomers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [beyondSevenCustomers, setBeyondSevenCustomers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const sortCustomers = ()=>{\n        if (customers.length > 0) {\n            const list1 = customers.filter((customer)=>{\n                const date1 = new Date();\n                const date2 = new Date(customer.rent_date);\n                const differenceInDays = dayDifference(date1, date2);\n                if (0 < differenceInDays && differenceInDays <= 60) {\n                    return customer;\n                }\n            });\n            setCurrentCustomers(list1);\n            const list2 = customers.filter((customer)=>{\n                const date1 = new Date();\n                const date2 = new Date(customer.rent_date);\n                const differenceInDays = dayDifference(date1, date2);\n                if (67 >= differenceInDays && differenceInDays > 60) {\n                    return customer;\n                }\n            });\n            setInSevenCustomers(list2);\n            const list3 = customers.filter((customer)=>{\n                const date1 = new Date();\n                const date2 = new Date(customer.rent_date);\n                const differenceInDays = dayDifference(date1, date2);\n                if (differenceInDays > 67) {\n                    return customer;\n                }\n            });\n            setBeyondSevenCustomers(list3);\n        }\n    };\n    const toggle = ()=>{\n        setIsCollapsed(!isCollapsed);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        sortCustomers();\n    }, [\n        filteredCustomersByID,\n        filteredCustomersByEmail,\n        filteredCustomersByWechat,\n        customers\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"module-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                className: \"title\",\n                children: \"Customers\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DropDown__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                lineNumber: 65,\n                columnNumber: 49\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"customer-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: !isCollapsed && filteredCustomersByID.length !== 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    children: \"By ID\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_4__.CustomerSection, {\n                                    section: \"Search Result\",\n                                    customerList: filteredCustomersByID,\n                                    scrollToCustomerDetail: scrollToCustomerDetail\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                            lineNumber: 70,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: !isCollapsed && filteredCustomersByEmail.length !== 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    children: \"By Email\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 26\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_4__.CustomerSection, {\n                                    section: \"Search Result\",\n                                    customerList: filteredCustomersByEmail,\n                                    scrollToCustomerDetail: scrollToCustomerDetail\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                            lineNumber: 79,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: !isCollapsed && filteredCustomersByWechat.length !== 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    children: \"By Wechat\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_4__.CustomerSection, {\n                                    section: \"Search Result\",\n                                    customerList: filteredCustomersByWechat,\n                                    scrollToCustomerDetail: scrollToCustomerDetail\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                            lineNumber: 87,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"scroll-container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    children: \"Current customers\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 28\n                                }, undefined),\n                                currentCustomers.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_4__.CustomerSection, {\n                                    section: \"Current\",\n                                    customerList: currentCustomers,\n                                    scrollToCustomerDetail: scrollToCustomerDetail\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 29\n                                }, undefined),\n                                inSevenCustomers.lenght > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_4__.CustomerSection, {\n                                    section: \"New demanding customers in 7 days\",\n                                    customerList: inSevenCustomers,\n                                    scrollToCustomerDetail: scrollToCustomerDetail\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 29\n                                }, undefined),\n                                beyondSevenCustomers.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_4__.CustomerSection, {\n                                    section: \"New demanding customers beyond 7 days\",\n                                    customerList: beyondSevenCustomers,\n                                    scrollToCustomerDetail: scrollToCustomerDetail\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 26\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                            lineNumber: 95,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                        lineNumber: 93,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        variant: \"light\",\n                        className: \"collapse-button\",\n                        onClick: toggle,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_6__.BsThreeDots, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                            lineNumber: 110,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                        lineNumber: 109,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n        lineNumber: 64,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CustomerContainer, \"nUDFtykTxB8k59Cxw0GMx2WjIFg=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateContext\n    ];\n});\n_c = CustomerContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomerContainer);\nvar _c;\n$RefreshReg$(_c, \"CustomerContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1c3RvbWVyL0N1c3RvbWVyQ29udGFpbmVyLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDTjtBQUNEO0FBQ1Q7QUFFMEI7QUFDeEIsc0JBQXFCO0FBRTFELE1BQU1RLG9CQUFvQixTQUFnQztRQUEvQixFQUFFQyx1QkFBc0IsRUFBRTs7SUFDakQsTUFBTSxFQUFFQyxzQkFBcUIsRUFBQ0MseUJBQXdCLEVBQUNDLDBCQUF5QixFQUFFQyxVQUFTLEVBQUVDLGNBQWEsRUFBRSxHQUFHUixzRUFBZUE7SUFDOUgsTUFBTSxDQUFFUyxhQUFhQyxlQUFnQixHQUFHZiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ3RELE1BQU0sQ0FBRWdCLGtCQUFrQkMsb0JBQXFCLEdBQUdqQiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzdELE1BQU0sQ0FBRWtCLGtCQUFrQkMsb0JBQXFCLEdBQUduQiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzdELE1BQU0sQ0FBRW9CLHNCQUFzQkMsd0JBQXlCLEdBQUdyQiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXJFLE1BQU1zQixnQkFBZ0IsSUFBTTtRQUN4QixJQUFJVixVQUFVVyxNQUFNLEdBQUcsR0FBRztZQUN0QixNQUFNQyxRQUFRWixVQUFVYSxNQUFNLENBQUMsQ0FBQ0MsV0FBYTtnQkFDekMsTUFBTUMsUUFBUSxJQUFJQztnQkFDbEIsTUFBTUMsUUFBUSxJQUFJRCxLQUFLRixTQUFTSSxTQUFTO2dCQUV6QyxNQUFNQyxtQkFBbUJsQixjQUFjYyxPQUFPRTtnQkFDOUMsSUFBSSxJQUFJRSxvQkFBb0JBLG9CQUFvQixJQUFHO29CQUMvQyxPQUFPTDtnQkFDWCxDQUFDO1lBQ0w7WUFDQVQsb0JBQW9CTztZQUVwQixNQUFNUSxRQUFRcEIsVUFBVWEsTUFBTSxDQUFDLENBQUNDLFdBQWE7Z0JBQ3pDLE1BQU1DLFFBQVEsSUFBSUM7Z0JBQ2xCLE1BQU1DLFFBQVEsSUFBSUQsS0FBS0YsU0FBU0ksU0FBUztnQkFFekMsTUFBTUMsbUJBQW1CbEIsY0FBY2MsT0FBT0U7Z0JBQzlDLElBQUksTUFBTUUsb0JBQW9CQSxtQkFBbUIsSUFBSTtvQkFDakQsT0FBT0w7Z0JBQ1gsQ0FBQztZQUNMO1lBRUFQLG9CQUFvQmE7WUFFcEIsTUFBTUMsUUFBUXJCLFVBQVVhLE1BQU0sQ0FBQyxDQUFDQyxXQUFhO2dCQUN6QyxNQUFNQyxRQUFRLElBQUlDO2dCQUNsQixNQUFNQyxRQUFRLElBQUlELEtBQUtGLFNBQVNJLFNBQVM7Z0JBRXpDLE1BQU1DLG1CQUFtQmxCLGNBQWNjLE9BQU9FO2dCQUM5QyxJQUFJRSxtQkFBbUIsSUFBRztvQkFDdEIsT0FBT0w7Z0JBQ1gsQ0FBQztZQUNMO1lBRUFMLHdCQUF3Qlk7UUFDNUIsQ0FBQztJQUNMO0lBRUEsTUFBTUMsU0FBUyxJQUFNO1FBQ2pCbkIsZUFBZSxDQUFDRDtJQUNwQjtJQUVBYixnREFBU0EsQ0FBQyxJQUFNO1FBQ1pxQjtJQUNKLEdBQUc7UUFBQ2I7UUFBc0JDO1FBQXlCQztRQUEyQkM7S0FBVTtJQUV4RixxQkFDSSw4REFBQ3VCO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBUTs7Ozs7OzBCQUFjLDhEQUFDaEMsaURBQVFBOzs7OzswQkFDN0MsOERBQUMrQjtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNEO2tDQUVJLENBQUNyQixlQUFlTCxzQkFBc0JjLE1BQU0sS0FBSyxtQkFDOUMsOERBQUNZOzs4Q0FDRCw4REFBQ0c7OENBQUc7Ozs7Ozs4Q0FDSiw4REFBQ2hDLDhDQUFlQTtvQ0FBQ2lDLFNBQVE7b0NBQWdCQyxjQUFjL0I7b0NBQXVCRCx3QkFBd0JBOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJOUcsOERBQUMyQjtrQ0FFSSxDQUFDckIsZUFBZUoseUJBQXlCYSxNQUFNLEtBQUssbUJBQ2pELDhEQUFDWTs7OENBQ0EsOERBQUNHOzhDQUFHOzs7Ozs7OENBQ0wsOERBQUNoQyw4Q0FBZUE7b0NBQUNpQyxTQUFRO29DQUFnQkMsY0FBYzlCO29DQUEwQkYsd0JBQXdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR2pILDhEQUFDMkI7a0NBRUEsQ0FBQ3JCLGVBQWVILDBCQUEwQlksTUFBTSxLQUFLLG1CQUNsRCw4REFBQ1k7OzhDQUNELDhEQUFDRzs4Q0FBRzs7Ozs7OzhDQUNBLDhEQUFDaEMsOENBQWVBO29DQUFDaUMsU0FBUTtvQ0FBZ0JDLGNBQWM3QjtvQ0FBMkJILHdCQUF3QkE7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUlsSCw4REFBQzJCO3dCQUFJQyxXQUFVO2tDQUVQLDRFQUFDRDs7OENBQ0UsOERBQUNHOzhDQUFHOzs7Ozs7Z0NBQ0x0QixpQkFBaUJPLE1BQU0sR0FBRyxtQkFDeEIsOERBQUNqQiw4Q0FBZUE7b0NBQUNpQyxTQUFRO29DQUFVQyxjQUFjeEI7b0NBQWtCUix3QkFBd0JBOzs7Ozs7Z0NBRTdGVSxpQkFBaUJ1QixNQUFNLEdBQUcsbUJBQ3hCLDhEQUFDbkMsOENBQWVBO29DQUFDaUMsU0FBUTtvQ0FBb0NDLGNBQWN0QjtvQ0FBa0JWLHdCQUF3QkE7Ozs7OztnQ0FFdkhZLHFCQUFxQkcsTUFBTSxHQUFHLG1CQUMvQiw4REFBQ2pCLDhDQUFlQTtvQ0FBQ2lDLFNBQVE7b0NBQXdDQyxjQUFjcEI7b0NBQXNCWix3QkFBd0JBOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLdEksOERBQUNMLDhEQUFNQTt3QkFBQ3VDLFNBQVE7d0JBQVFOLFdBQVU7d0JBQWtCTyxTQUFTVDtrQ0FDekQsNEVBQUNoQyx1REFBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEM7R0ExR01LOztRQUM2R0Ysa0VBQWVBOzs7S0FENUhFO0FBNEdOLCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXN0b21lci9DdXN0b21lckNvbnRhaW5lci5qc3g/OTA2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJzVGhyZWVEb3RzIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuaW1wb3J0IERyb3BEb3duIGZyb20gJy4uL0Ryb3BEb3duJztcblxuaW1wb3J0IHsgdXNlU3RhdGVDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9TdGF0ZUNvbnRleHQnO1xuaW1wb3J0IHsgQ3VzdG9tZXJTZWN0aW9uIH0gZnJvbSAnLi4nOy8vY29tcG9uZW50cy9pbmRleC5qc1xuXG5jb25zdCBDdXN0b21lckNvbnRhaW5lciA9ICh7IHNjcm9sbFRvQ3VzdG9tZXJEZXRhaWwgfSkgPT4ge1xuICAgIGNvbnN0IHsgZmlsdGVyZWRDdXN0b21lcnNCeUlELGZpbHRlcmVkQ3VzdG9tZXJzQnlFbWFpbCxmaWx0ZXJlZEN1c3RvbWVyc0J5V2VjaGF0LCBjdXN0b21lcnMsIGRheURpZmZlcmVuY2UgfSA9IHVzZVN0YXRlQ29udGV4dCgpXG4gICAgY29uc3QgWyBpc0NvbGxhcHNlZCwgc2V0SXNDb2xsYXBzZWQgXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFsgY3VycmVudEN1c3RvbWVycywgc2V0Q3VycmVudEN1c3RvbWVycyBdID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgWyBpblNldmVuQ3VzdG9tZXJzLCBzZXRJblNldmVuQ3VzdG9tZXJzIF0gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBbIGJleW9uZFNldmVuQ3VzdG9tZXJzLCBzZXRCZXlvbmRTZXZlbkN1c3RvbWVycyBdID0gdXNlU3RhdGUoW10pXG5cbiAgICBjb25zdCBzb3J0Q3VzdG9tZXJzID0gKCkgPT4ge1xuICAgICAgICBpZiAoY3VzdG9tZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3QxID0gY3VzdG9tZXJzLmZpbHRlcigoY3VzdG9tZXIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlMSA9IG5ldyBEYXRlKClcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlMiA9IG5ldyBEYXRlKGN1c3RvbWVyLnJlbnRfZGF0ZSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBkaWZmZXJlbmNlSW5EYXlzID0gZGF5RGlmZmVyZW5jZShkYXRlMSwgZGF0ZTIpXG4gICAgICAgICAgICAgICAgaWYgKDAgPCBkaWZmZXJlbmNlSW5EYXlzICYmIGRpZmZlcmVuY2VJbkRheXMgPD0gNjApe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VzdG9tZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgc2V0Q3VycmVudEN1c3RvbWVycyhsaXN0MSlcblxuICAgICAgICAgICAgY29uc3QgbGlzdDIgPSBjdXN0b21lcnMuZmlsdGVyKChjdXN0b21lcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUxID0gbmV3IERhdGUoKVxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUyID0gbmV3IERhdGUoY3VzdG9tZXIucmVudF9kYXRlKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGRpZmZlcmVuY2VJbkRheXMgPSBkYXlEaWZmZXJlbmNlKGRhdGUxLCBkYXRlMilcbiAgICAgICAgICAgICAgICBpZiAoNjcgPj0gZGlmZmVyZW5jZUluRGF5cyAmJiBkaWZmZXJlbmNlSW5EYXlzID4gNjAgKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1c3RvbWVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgc2V0SW5TZXZlbkN1c3RvbWVycyhsaXN0MilcblxuICAgICAgICAgICAgY29uc3QgbGlzdDMgPSBjdXN0b21lcnMuZmlsdGVyKChjdXN0b21lcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUxID0gbmV3IERhdGUoKVxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUyID0gbmV3IERhdGUoY3VzdG9tZXIucmVudF9kYXRlKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGRpZmZlcmVuY2VJbkRheXMgPSBkYXlEaWZmZXJlbmNlKGRhdGUxLCBkYXRlMilcbiAgICAgICAgICAgICAgICBpZiAoZGlmZmVyZW5jZUluRGF5cyA+IDY3KXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1c3RvbWVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgc2V0QmV5b25kU2V2ZW5DdXN0b21lcnMobGlzdDMpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB0b2dnbGUgPSAoKSA9PiB7XG4gICAgICAgIHNldElzQ29sbGFwc2VkKCFpc0NvbGxhcHNlZClcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzb3J0Q3VzdG9tZXJzKClcbiAgICB9LCBbZmlsdGVyZWRDdXN0b21lcnNCeUlELGZpbHRlcmVkQ3VzdG9tZXJzQnlFbWFpbCxmaWx0ZXJlZEN1c3RvbWVyc0J5V2VjaGF0LCBjdXN0b21lcnNdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2R1bGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGVcIj5DdXN0b21lcnM8L2g0PjxEcm9wRG93bj48L0Ryb3BEb3duPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b21lci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgeyFpc0NvbGxhcHNlZCAmJiBmaWx0ZXJlZEN1c3RvbWVyc0J5SUQubGVuZ3RoICE9PSAwICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+QnkgSUQ8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbWVyU2VjdGlvbiBzZWN0aW9uPVwiU2VhcmNoIFJlc3VsdFwiIGN1c3RvbWVyTGlzdD17ZmlsdGVyZWRDdXN0b21lcnNCeUlEfSBzY3JvbGxUb0N1c3RvbWVyRGV0YWlsPXtzY3JvbGxUb0N1c3RvbWVyRGV0YWlsfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB7IWlzQ29sbGFwc2VkICYmIGZpbHRlcmVkQ3VzdG9tZXJzQnlFbWFpbC5sZW5ndGggIT09IDAgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkJ5IEVtYWlsPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21lclNlY3Rpb24gc2VjdGlvbj1cIlNlYXJjaCBSZXN1bHRcIiBjdXN0b21lckxpc3Q9e2ZpbHRlcmVkQ3VzdG9tZXJzQnlFbWFpbH0gc2Nyb2xsVG9DdXN0b21lckRldGFpbD17c2Nyb2xsVG9DdXN0b21lckRldGFpbH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB7IWlzQ29sbGFwc2VkICYmIGZpbHRlcmVkQ3VzdG9tZXJzQnlXZWNoYXQubGVuZ3RoICE9PSAwICYmIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgPGg1PkJ5IFdlY2hhdDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tZXJTZWN0aW9uIHNlY3Rpb249XCJTZWFyY2ggUmVzdWx0XCIgY3VzdG9tZXJMaXN0PXtmaWx0ZXJlZEN1c3RvbWVyc0J5V2VjaGF0fSBzY3JvbGxUb0N1c3RvbWVyRGV0YWlsPXtzY3JvbGxUb0N1c3RvbWVyRGV0YWlsfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Nyb2xsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+Q3VycmVudCBjdXN0b21lcnM8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyBjdXJyZW50Q3VzdG9tZXJzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tZXJTZWN0aW9uIHNlY3Rpb249J0N1cnJlbnQnIGN1c3RvbWVyTGlzdD17Y3VycmVudEN1c3RvbWVyc30gc2Nyb2xsVG9DdXN0b21lckRldGFpbD17c2Nyb2xsVG9DdXN0b21lckRldGFpbH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgaW5TZXZlbkN1c3RvbWVycy5sZW5naHQgPiAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbWVyU2VjdGlvbiBzZWN0aW9uPSdOZXcgZGVtYW5kaW5nIGN1c3RvbWVycyBpbiA3IGRheXMnIGN1c3RvbWVyTGlzdD17aW5TZXZlbkN1c3RvbWVyc30gc2Nyb2xsVG9DdXN0b21lckRldGFpbD17c2Nyb2xsVG9DdXN0b21lckRldGFpbH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgeyBiZXlvbmRTZXZlbkN1c3RvbWVycy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbWVyU2VjdGlvbiBzZWN0aW9uPSdOZXcgZGVtYW5kaW5nIGN1c3RvbWVycyBiZXlvbmQgNyBkYXlzJyBjdXN0b21lckxpc3Q9e2JleW9uZFNldmVuQ3VzdG9tZXJzfSBzY3JvbGxUb0N1c3RvbWVyRGV0YWlsPXtzY3JvbGxUb0N1c3RvbWVyRGV0YWlsfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJsaWdodFwiIGNsYXNzTmFtZT1cImNvbGxhcHNlLWJ1dHRvblwiIG9uQ2xpY2s9e3RvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxCc1RocmVlRG90cyAvPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbWVyQ29udGFpbmVyOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQnNUaHJlZURvdHMiLCJCdXR0b24iLCJEcm9wRG93biIsInVzZVN0YXRlQ29udGV4dCIsIkN1c3RvbWVyU2VjdGlvbiIsIkN1c3RvbWVyQ29udGFpbmVyIiwic2Nyb2xsVG9DdXN0b21lckRldGFpbCIsImZpbHRlcmVkQ3VzdG9tZXJzQnlJRCIsImZpbHRlcmVkQ3VzdG9tZXJzQnlFbWFpbCIsImZpbHRlcmVkQ3VzdG9tZXJzQnlXZWNoYXQiLCJjdXN0b21lcnMiLCJkYXlEaWZmZXJlbmNlIiwiaXNDb2xsYXBzZWQiLCJzZXRJc0NvbGxhcHNlZCIsImN1cnJlbnRDdXN0b21lcnMiLCJzZXRDdXJyZW50Q3VzdG9tZXJzIiwiaW5TZXZlbkN1c3RvbWVycyIsInNldEluU2V2ZW5DdXN0b21lcnMiLCJiZXlvbmRTZXZlbkN1c3RvbWVycyIsInNldEJleW9uZFNldmVuQ3VzdG9tZXJzIiwic29ydEN1c3RvbWVycyIsImxlbmd0aCIsImxpc3QxIiwiZmlsdGVyIiwiY3VzdG9tZXIiLCJkYXRlMSIsIkRhdGUiLCJkYXRlMiIsInJlbnRfZGF0ZSIsImRpZmZlcmVuY2VJbkRheXMiLCJsaXN0MiIsImxpc3QzIiwidG9nZ2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDQiLCJoNSIsInNlY3Rpb24iLCJjdXN0b21lckxpc3QiLCJsZW5naHQiLCJ2YXJpYW50Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Customer/CustomerContainer.jsx\n"));

/***/ })

});