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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/StateContext */ \"./context/StateContext.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .. */ \"./components/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n //components/index.js\nconst CustomerContainer = (param)=>{\n    let { scrollToCustomerDetail  } = param;\n    _s();\n    const { filteredCustomersByID , filteredCustomersByEmail , filteredCustomersByWechat , customers , dayDifference , prioritizing_cutsomer  } = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_2__.useStateContext)();\n    const [isCollapsed, setIsCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [currentCustomers, setCurrentCustomers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [inSevenCustomers, setInSevenCustomers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [beyondSevenCustomers, setBeyondSevenCustomers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const sortCustomers = ()=>{\n        if (customers.length > 0) {\n            // const list1 = customers.filter((customer) => {\n            //     const date1 = new Date()\n            //     const date2 = new Date(customer.rent_date)\n            //     const differenceInDays = dayDifference(date1, date2)\n            //     if (-30 < differenceInDays && differenceInDays <= 60 && customer.rent_status !=='YES' && customer.rent_status !=='DELETED'){\n            //         return customer\n            //     }\n            // })\n            //Display all customers whose rent status is not “YES” or 'PENDING' or “Deleted” with the order.\n            setCurrentCustomers(customers);\n            const list2 = customers.filter((customer)=>{\n                const date1 = new Date();\n                const date2 = new Date(customer.rent_date);\n                const differenceInDays = dayDifference(date1, date2);\n                if (67 >= differenceInDays && differenceInDays > 60 && customer.rent_status !== \"YES\" && customer.rent_status !== \"DELETED\") {\n                    return customer;\n                }\n            });\n            setInSevenCustomers(list2);\n            const list3 = customers.filter((customer)=>{\n                const date1 = new Date();\n                const date2 = new Date(customer.rent_date);\n                const differenceInDays = dayDifference(date1, date2);\n                if (differenceInDays > 67 && customer.rent_status !== \"YES\" && customer.rent_status !== \"DELETED\") {\n                    return customer;\n                }\n            });\n            setBeyondSevenCustomers(list3);\n        }\n    };\n    const toggle = ()=>{\n        setIsCollapsed(!isCollapsed);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        sortCustomers();\n    }, [\n        filteredCustomersByID,\n        filteredCustomersByEmail,\n        filteredCustomersByWechat,\n        customers\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"module-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                className: \"title\",\n                children: \"Customers\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"customer-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: !isCollapsed && filteredCustomersByID.length !== 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    children: \"By ID\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_3__.CustomerSection, {\n                                    section: \"Search Result\",\n                                    customerList: filteredCustomersByID,\n                                    scrollToCustomerDetail: scrollToCustomerDetail\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                            lineNumber: 70,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: !isCollapsed && filteredCustomersByEmail.length !== 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    children: \"By Email\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 26\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_3__.CustomerSection, {\n                                    section: \"Search Result\",\n                                    customerList: filteredCustomersByEmail,\n                                    scrollToCustomerDetail: scrollToCustomerDetail\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                            lineNumber: 79,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: !isCollapsed && filteredCustomersByWechat.length !== 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    children: \"By Wechat\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_3__.CustomerSection, {\n                                    section: \"Search Result\",\n                                    customerList: filteredCustomersByWechat,\n                                    scrollToCustomerDetail: scrollToCustomerDetail\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                            lineNumber: 87,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"scroll-container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    children: \"Current customers\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 28\n                                }, undefined),\n                                currentCustomers.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_3__.CustomerSection, {\n                                    section: \"Current\",\n                                    customerList: currentCustomers,\n                                    scrollToCustomerDetail: scrollToCustomerDetail\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 29\n                                }, undefined),\n                                inSevenCustomers.lenght > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_3__.CustomerSection, {\n                                    section: \"New demanding customers in 7 days\",\n                                    customerList: inSevenCustomers,\n                                    scrollToCustomerDetail: scrollToCustomerDetail\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 29\n                                }, undefined),\n                                beyondSevenCustomers.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_3__.CustomerSection, {\n                                    section: \"New demanding customers beyond 7 days\",\n                                    customerList: beyondSevenCustomers,\n                                    scrollToCustomerDetail: scrollToCustomerDetail\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 26\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                            lineNumber: 95,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                        lineNumber: 93,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        variant: \"light\",\n                        className: \"collapse-button\",\n                        onClick: toggle,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsThreeDots, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                            lineNumber: 110,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                        lineNumber: 109,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n        lineNumber: 64,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CustomerContainer, \"XQaU4EnkLLtVkMI0qfTl5unvnh8=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_2__.useStateContext\n    ];\n});\n_c = CustomerContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomerContainer);\nvar _c;\n$RefreshReg$(_c, \"CustomerContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1c3RvbWVyL0N1c3RvbWVyQ29udGFpbmVyLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFtRDtBQUNOO0FBQ0Q7QUFDaUI7QUFDeEIsc0JBQXFCO0FBRTFELE1BQU1PLG9CQUFvQixTQUFnQztRQUEvQixFQUFFQyx1QkFBc0IsRUFBRTs7SUFDakQsTUFBTSxFQUFFQyxzQkFBcUIsRUFBQ0MseUJBQXdCLEVBQUNDLDBCQUF5QixFQUFFQyxVQUFTLEVBQUVDLGNBQWEsRUFBQ0Msc0JBQXFCLEVBQUUsR0FBR1Qsc0VBQWVBO0lBQ3BKLE1BQU0sQ0FBRVUsYUFBYUMsZUFBZ0IsR0FBR2YsK0NBQVFBLENBQUMsS0FBSztJQUN0RCxNQUFNLENBQUVnQixrQkFBa0JDLG9CQUFxQixHQUFHakIsK0NBQVFBLENBQUMsRUFBRTtJQUM3RCxNQUFNLENBQUVrQixrQkFBa0JDLG9CQUFxQixHQUFHbkIsK0NBQVFBLENBQUMsRUFBRTtJQUM3RCxNQUFNLENBQUVvQixzQkFBc0JDLHdCQUF5QixHQUFHckIsK0NBQVFBLENBQUMsRUFBRTtJQUVyRSxNQUFNc0IsZ0JBQWdCLElBQU07UUFDeEIsSUFBSVgsVUFBVVksTUFBTSxHQUFHLEdBQUc7WUFDdEIsaURBQWlEO1lBQ2pELCtCQUErQjtZQUMvQixpREFBaUQ7WUFFakQsMkRBQTJEO1lBQzNELG1JQUFtSTtZQUNuSSwwQkFBMEI7WUFDMUIsUUFBUTtZQUNSLEtBQUs7WUFDTCxnR0FBZ0c7WUFDaEdOLG9CQUFvQk47WUFFcEIsTUFBTWEsUUFBUWIsVUFBVWMsTUFBTSxDQUFDLENBQUNDLFdBQWE7Z0JBQ3pDLE1BQU1DLFFBQVEsSUFBSUM7Z0JBQ2xCLE1BQU1DLFFBQVEsSUFBSUQsS0FBS0YsU0FBU0ksU0FBUztnQkFFekMsTUFBTUMsbUJBQW1CbkIsY0FBY2UsT0FBT0U7Z0JBQzlDLElBQUksTUFBTUUsb0JBQW9CQSxtQkFBbUIsTUFBTUwsU0FBU00sV0FBVyxLQUFHLFNBQVFOLFNBQVNNLFdBQVcsS0FBSSxXQUFVO29CQUNwSCxPQUFPTjtnQkFDWCxDQUFDO1lBQ0w7WUFFQVAsb0JBQW9CSztZQUVwQixNQUFNUyxRQUFRdEIsVUFBVWMsTUFBTSxDQUFDLENBQUNDLFdBQWE7Z0JBQ3pDLE1BQU1DLFFBQVEsSUFBSUM7Z0JBQ2xCLE1BQU1DLFFBQVEsSUFBSUQsS0FBS0YsU0FBU0ksU0FBUztnQkFFekMsTUFBTUMsbUJBQW1CbkIsY0FBY2UsT0FBT0U7Z0JBQzlDLElBQUlFLG1CQUFtQixNQUFNTCxTQUFTTSxXQUFXLEtBQUcsU0FBUU4sU0FBU00sV0FBVyxLQUFJLFdBQVU7b0JBQzFGLE9BQU9OO2dCQUNYLENBQUM7WUFDTDtZQUVBTCx3QkFBd0JZO1FBQzVCLENBQUM7SUFDTDtJQUVBLE1BQU1DLFNBQVMsSUFBTTtRQUNqQm5CLGVBQWUsQ0FBQ0Q7SUFDcEI7SUFFQWIsZ0RBQVNBLENBQUMsSUFBTTtRQUNacUI7SUFDSixHQUFHO1FBQUNkO1FBQXNCQztRQUF5QkM7UUFBMkJDO0tBQVU7SUFHeEYscUJBQ0ksOERBQUN3QjtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQVE7Ozs7OzswQkFDdEIsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7a0NBRUksQ0FBQ3JCLGVBQWVOLHNCQUFzQmUsTUFBTSxLQUFLLG1CQUM5Qyw4REFBQ1k7OzhDQUNELDhEQUFDRzs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDakMsOENBQWVBO29DQUFDa0MsU0FBUTtvQ0FBZ0JDLGNBQWNoQztvQ0FBdUJELHdCQUF3QkE7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUk5Ryw4REFBQzRCO2tDQUVJLENBQUNyQixlQUFlTCx5QkFBeUJjLE1BQU0sS0FBSyxtQkFDakQsOERBQUNZOzs4Q0FDQSw4REFBQ0c7OENBQUc7Ozs7Ozs4Q0FDTCw4REFBQ2pDLDhDQUFlQTtvQ0FBQ2tDLFNBQVE7b0NBQWdCQyxjQUFjL0I7b0NBQTBCRix3QkFBd0JBOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHakgsOERBQUM0QjtrQ0FFQSxDQUFDckIsZUFBZUosMEJBQTBCYSxNQUFNLEtBQUssbUJBQ2xELDhEQUFDWTs7OENBQ0QsOERBQUNHOzhDQUFHOzs7Ozs7OENBQ0EsOERBQUNqQyw4Q0FBZUE7b0NBQUNrQyxTQUFRO29DQUFnQkMsY0FBYzlCO29DQUEyQkgsd0JBQXdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSWxILDhEQUFDNEI7d0JBQUlDLFdBQVU7a0NBRVAsNEVBQUNEOzs4Q0FDRSw4REFBQ0c7OENBQUc7Ozs7OztnQ0FDTHRCLGlCQUFpQk8sTUFBTSxHQUFHLG1CQUN4Qiw4REFBQ2xCLDhDQUFlQTtvQ0FBQ2tDLFNBQVE7b0NBQVVDLGNBQWN4QjtvQ0FBa0JULHdCQUF3QkE7Ozs7OztnQ0FFN0ZXLGlCQUFpQnVCLE1BQU0sR0FBRyxtQkFDeEIsOERBQUNwQyw4Q0FBZUE7b0NBQUNrQyxTQUFRO29DQUFvQ0MsY0FBY3RCO29DQUFrQlgsd0JBQXdCQTs7Ozs7O2dDQUV2SGEscUJBQXFCRyxNQUFNLEdBQUcsbUJBQy9CLDhEQUFDbEIsOENBQWVBO29DQUFDa0MsU0FBUTtvQ0FBd0NDLGNBQWNwQjtvQ0FBc0JiLHdCQUF3QkE7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUt0SSw4REFBQ0osOERBQU1BO3dCQUFDdUMsU0FBUTt3QkFBUU4sV0FBVTt3QkFBa0JPLFNBQVNUO2tDQUN6RCw0RUFBQ2hDLHVEQUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtoQztHQTVHTUk7O1FBQ21JRixrRUFBZUE7OztLQURsSkU7QUE4R04sK0RBQWVBLGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0N1c3RvbWVyL0N1c3RvbWVyQ29udGFpbmVyLmpzeD85MDY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnNUaHJlZURvdHMgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5pbXBvcnQgeyB1c2VTdGF0ZUNvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0L1N0YXRlQ29udGV4dCc7XG5pbXBvcnQgeyBDdXN0b21lclNlY3Rpb24gfSBmcm9tICcuLic7Ly9jb21wb25lbnRzL2luZGV4LmpzXG5cbmNvbnN0IEN1c3RvbWVyQ29udGFpbmVyID0gKHsgc2Nyb2xsVG9DdXN0b21lckRldGFpbCB9KSA9PiB7XG4gICAgY29uc3QgeyBmaWx0ZXJlZEN1c3RvbWVyc0J5SUQsZmlsdGVyZWRDdXN0b21lcnNCeUVtYWlsLGZpbHRlcmVkQ3VzdG9tZXJzQnlXZWNoYXQsIGN1c3RvbWVycywgZGF5RGlmZmVyZW5jZSxwcmlvcml0aXppbmdfY3V0c29tZXIgfSA9IHVzZVN0YXRlQ29udGV4dCgpXG4gICAgY29uc3QgWyBpc0NvbGxhcHNlZCwgc2V0SXNDb2xsYXBzZWQgXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFsgY3VycmVudEN1c3RvbWVycywgc2V0Q3VycmVudEN1c3RvbWVycyBdID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgWyBpblNldmVuQ3VzdG9tZXJzLCBzZXRJblNldmVuQ3VzdG9tZXJzIF0gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBbIGJleW9uZFNldmVuQ3VzdG9tZXJzLCBzZXRCZXlvbmRTZXZlbkN1c3RvbWVycyBdID0gdXNlU3RhdGUoW10pXG5cbiAgICBjb25zdCBzb3J0Q3VzdG9tZXJzID0gKCkgPT4ge1xuICAgICAgICBpZiAoY3VzdG9tZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIGNvbnN0IGxpc3QxID0gY3VzdG9tZXJzLmZpbHRlcigoY3VzdG9tZXIpID0+IHtcbiAgICAgICAgICAgIC8vICAgICBjb25zdCBkYXRlMSA9IG5ldyBEYXRlKClcbiAgICAgICAgICAgIC8vICAgICBjb25zdCBkYXRlMiA9IG5ldyBEYXRlKGN1c3RvbWVyLnJlbnRfZGF0ZSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8vICAgICBjb25zdCBkaWZmZXJlbmNlSW5EYXlzID0gZGF5RGlmZmVyZW5jZShkYXRlMSwgZGF0ZTIpXG4gICAgICAgICAgICAvLyAgICAgaWYgKC0zMCA8IGRpZmZlcmVuY2VJbkRheXMgJiYgZGlmZmVyZW5jZUluRGF5cyA8PSA2MCAmJiBjdXN0b21lci5yZW50X3N0YXR1cyAhPT0nWUVTJyAmJiBjdXN0b21lci5yZW50X3N0YXR1cyAhPT0nREVMRVRFRCcpe1xuICAgICAgICAgICAgLy8gICAgICAgICByZXR1cm4gY3VzdG9tZXJcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgLy9EaXNwbGF5IGFsbCBjdXN0b21lcnMgd2hvc2UgcmVudCBzdGF0dXMgaXMgbm90IOKAnFlFU+KAnSBvciAnUEVORElORycgb3Ig4oCcRGVsZXRlZOKAnSB3aXRoIHRoZSBvcmRlci5cbiAgICAgICAgICAgIHNldEN1cnJlbnRDdXN0b21lcnMoY3VzdG9tZXJzKVxuXG4gICAgICAgICAgICBjb25zdCBsaXN0MiA9IGN1c3RvbWVycy5maWx0ZXIoKGN1c3RvbWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZTEgPSBuZXcgRGF0ZSgpXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZTIgPSBuZXcgRGF0ZShjdXN0b21lci5yZW50X2RhdGUpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgZGlmZmVyZW5jZUluRGF5cyA9IGRheURpZmZlcmVuY2UoZGF0ZTEsIGRhdGUyKVxuICAgICAgICAgICAgICAgIGlmICg2NyA+PSBkaWZmZXJlbmNlSW5EYXlzICYmIGRpZmZlcmVuY2VJbkRheXMgPiA2MCAmJiBjdXN0b21lci5yZW50X3N0YXR1cyE9PSdZRVMnJiYgY3VzdG9tZXIucmVudF9zdGF0dXMgIT09J0RFTEVURUQnKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1c3RvbWVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgc2V0SW5TZXZlbkN1c3RvbWVycyhsaXN0MilcblxuICAgICAgICAgICAgY29uc3QgbGlzdDMgPSBjdXN0b21lcnMuZmlsdGVyKChjdXN0b21lcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUxID0gbmV3IERhdGUoKVxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUyID0gbmV3IERhdGUoY3VzdG9tZXIucmVudF9kYXRlKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGRpZmZlcmVuY2VJbkRheXMgPSBkYXlEaWZmZXJlbmNlKGRhdGUxLCBkYXRlMilcbiAgICAgICAgICAgICAgICBpZiAoZGlmZmVyZW5jZUluRGF5cyA+IDY3ICYmIGN1c3RvbWVyLnJlbnRfc3RhdHVzIT09J1lFUycmJiBjdXN0b21lci5yZW50X3N0YXR1cyAhPT0nREVMRVRFRCcpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VzdG9tZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBzZXRCZXlvbmRTZXZlbkN1c3RvbWVycyhsaXN0MylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNDb2xsYXBzZWQoIWlzQ29sbGFwc2VkKVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNvcnRDdXN0b21lcnMoKVxuICAgIH0sIFtmaWx0ZXJlZEN1c3RvbWVyc0J5SUQsZmlsdGVyZWRDdXN0b21lcnNCeUVtYWlsLGZpbHRlcmVkQ3VzdG9tZXJzQnlXZWNoYXQsIGN1c3RvbWVyc10pXG5cbiBcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZHVsZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZVwiPkN1c3RvbWVyczwvaDQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbWVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB7IWlzQ29sbGFwc2VkICYmIGZpbHRlcmVkQ3VzdG9tZXJzQnlJRC5sZW5ndGggIT09IDAgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5CeSBJRDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tZXJTZWN0aW9uIHNlY3Rpb249XCJTZWFyY2ggUmVzdWx0XCIgY3VzdG9tZXJMaXN0PXtmaWx0ZXJlZEN1c3RvbWVyc0J5SUR9IHNjcm9sbFRvQ3VzdG9tZXJEZXRhaWw9e3Njcm9sbFRvQ3VzdG9tZXJEZXRhaWx9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHshaXNDb2xsYXBzZWQgJiYgZmlsdGVyZWRDdXN0b21lcnNCeUVtYWlsLmxlbmd0aCAhPT0gMCAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+ICBcbiAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+QnkgRW1haWw8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbWVyU2VjdGlvbiBzZWN0aW9uPVwiU2VhcmNoIFJlc3VsdFwiIGN1c3RvbWVyTGlzdD17ZmlsdGVyZWRDdXN0b21lcnNCeUVtYWlsfSBzY3JvbGxUb0N1c3RvbWVyRGV0YWlsPXtzY3JvbGxUb0N1c3RvbWVyRGV0YWlsfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHshaXNDb2xsYXBzZWQgJiYgZmlsdGVyZWRDdXN0b21lcnNCeVdlY2hhdC5sZW5ndGggIT09IDAgJiYgXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+IFxuICAgICAgICAgICAgICAgICAgICA8aDU+QnkgV2VjaGF0PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21lclNlY3Rpb24gc2VjdGlvbj1cIlNlYXJjaCBSZXN1bHRcIiBjdXN0b21lckxpc3Q9e2ZpbHRlcmVkQ3VzdG9tZXJzQnlXZWNoYXR9IHNjcm9sbFRvQ3VzdG9tZXJEZXRhaWw9e3Njcm9sbFRvQ3VzdG9tZXJEZXRhaWx9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JvbGwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5DdXJyZW50IGN1c3RvbWVyczwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IGN1cnJlbnRDdXN0b21lcnMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21lclNlY3Rpb24gc2VjdGlvbj0nQ3VycmVudCcgY3VzdG9tZXJMaXN0PXtjdXJyZW50Q3VzdG9tZXJzfSBzY3JvbGxUb0N1c3RvbWVyRGV0YWlsPXtzY3JvbGxUb0N1c3RvbWVyRGV0YWlsfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgeyBpblNldmVuQ3VzdG9tZXJzLmxlbmdodCA+IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tZXJTZWN0aW9uIHNlY3Rpb249J05ldyBkZW1hbmRpbmcgY3VzdG9tZXJzIGluIDcgZGF5cycgY3VzdG9tZXJMaXN0PXtpblNldmVuQ3VzdG9tZXJzfSBzY3JvbGxUb0N1c3RvbWVyRGV0YWlsPXtzY3JvbGxUb0N1c3RvbWVyRGV0YWlsfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7IGJleW9uZFNldmVuQ3VzdG9tZXJzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tZXJTZWN0aW9uIHNlY3Rpb249J05ldyBkZW1hbmRpbmcgY3VzdG9tZXJzIGJleW9uZCA3IGRheXMnIGN1c3RvbWVyTGlzdD17YmV5b25kU2V2ZW5DdXN0b21lcnN9IHNjcm9sbFRvQ3VzdG9tZXJEZXRhaWw9e3Njcm9sbFRvQ3VzdG9tZXJEZXRhaWx9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImxpZ2h0XCIgY2xhc3NOYW1lPVwiY29sbGFwc2UtYnV0dG9uXCIgb25DbGljaz17dG9nZ2xlfT5cbiAgICAgICAgICAgICAgICAgICAgPEJzVGhyZWVEb3RzIC8+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tZXJDb250YWluZXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCc1RocmVlRG90cyIsIkJ1dHRvbiIsInVzZVN0YXRlQ29udGV4dCIsIkN1c3RvbWVyU2VjdGlvbiIsIkN1c3RvbWVyQ29udGFpbmVyIiwic2Nyb2xsVG9DdXN0b21lckRldGFpbCIsImZpbHRlcmVkQ3VzdG9tZXJzQnlJRCIsImZpbHRlcmVkQ3VzdG9tZXJzQnlFbWFpbCIsImZpbHRlcmVkQ3VzdG9tZXJzQnlXZWNoYXQiLCJjdXN0b21lcnMiLCJkYXlEaWZmZXJlbmNlIiwicHJpb3JpdGl6aW5nX2N1dHNvbWVyIiwiaXNDb2xsYXBzZWQiLCJzZXRJc0NvbGxhcHNlZCIsImN1cnJlbnRDdXN0b21lcnMiLCJzZXRDdXJyZW50Q3VzdG9tZXJzIiwiaW5TZXZlbkN1c3RvbWVycyIsInNldEluU2V2ZW5DdXN0b21lcnMiLCJiZXlvbmRTZXZlbkN1c3RvbWVycyIsInNldEJleW9uZFNldmVuQ3VzdG9tZXJzIiwic29ydEN1c3RvbWVycyIsImxlbmd0aCIsImxpc3QyIiwiZmlsdGVyIiwiY3VzdG9tZXIiLCJkYXRlMSIsIkRhdGUiLCJkYXRlMiIsInJlbnRfZGF0ZSIsImRpZmZlcmVuY2VJbkRheXMiLCJyZW50X3N0YXR1cyIsImxpc3QzIiwidG9nZ2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDQiLCJoNSIsInNlY3Rpb24iLCJjdXN0b21lckxpc3QiLCJsZW5naHQiLCJ2YXJpYW50Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Customer/CustomerContainer.jsx\n"));

/***/ })

});