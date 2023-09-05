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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/StateContext */ \"./context/StateContext.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .. */ \"./components/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n //components/index.js\nconst CustomerContainer = (param)=>{\n    let { scrollToCustomerDetail  } = param;\n    _s();\n    const { filteredCustomersByID , filteredCustomersByEmail , filteredCustomersByWechat , customers , dayDifference  } = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_2__.useStateContext)();\n    const [isCollapsed, setIsCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [currentCustomers, setCurrentCustomers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [inSevenCustomers, setInSevenCustomers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [beyondSevenCustomers, setBeyondSevenCustomers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const sortCustomers = ()=>{\n        if (customers.length > 0) {\n            const list1 = customers.filter((customer)=>{\n                const date1 = new Date();\n                const date2 = new Date(customer.rent_date);\n                const differenceInDays = dayDifference(date1, date2);\n                if (0 < differenceInDays && differenceInDays <= 60 && customer.rent_status !== \"YES\" && customer.rent_status !== \"DELETED\") {\n                    return customer;\n                }\n            });\n            setCurrentCustomers(list1);\n            const list2 = customers.filter((customer)=>{\n                const date1 = new Date();\n                const date2 = new Date(customer.rent_date);\n                const differenceInDays = dayDifference(date1, date2);\n                if (67 >= differenceInDays && differenceInDays > 60 && customer.rent_status !== \"YES\" && customer.rent_status !== \"DELETED\") {\n                    return customer;\n                }\n            });\n            setInSevenCustomers(list2);\n            const list3 = customers.filter((customer)=>{\n                const date1 = new Date();\n                const date2 = new Date(customer.rent_date);\n                const differenceInDays = dayDifference(date1, date2);\n                if (differenceInDays > 67 && customer.rent_status !== \"YES\" && customer.rent_status !== \"DELETED\") {\n                    return customer;\n                }\n            });\n            setBeyondSevenCustomers(list3);\n        }\n    };\n    const toggle = ()=>{\n        setIsCollapsed(!isCollapsed);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        sortCustomers();\n    }, [\n        filteredCustomersByID,\n        filteredCustomersByEmail,\n        filteredCustomersByWechat,\n        customers\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"module-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                className: \"title\",\n                children: \"Customers\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"customer-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: !isCollapsed && filteredCustomersByID.length !== 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    children: \"By ID\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_3__.CustomerSection, {\n                                    section: \"Search Result\",\n                                    customerList: filteredCustomersByID,\n                                    scrollToCustomerDetail: scrollToCustomerDetail\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                            lineNumber: 69,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: !isCollapsed && filteredCustomersByEmail.length !== 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    children: \"By Email\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 26\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_3__.CustomerSection, {\n                                    section: \"Search Result\",\n                                    customerList: filteredCustomersByEmail,\n                                    scrollToCustomerDetail: scrollToCustomerDetail\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                            lineNumber: 78,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: !isCollapsed && filteredCustomersByWechat.length !== 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    children: \"By Wechat\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_3__.CustomerSection, {\n                                    section: \"Search Result\",\n                                    customerList: filteredCustomersByWechat,\n                                    scrollToCustomerDetail: scrollToCustomerDetail\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                            lineNumber: 86,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                        lineNumber: 83,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"scroll-container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    children: \"Current customers\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 28\n                                }, undefined),\n                                currentCustomers.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_3__.CustomerSection, {\n                                    section: \"Current\",\n                                    customerList: currentCustomers,\n                                    scrollToCustomerDetail: scrollToCustomerDetail\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 29\n                                }, undefined),\n                                inSevenCustomers.lenght > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_3__.CustomerSection, {\n                                    section: \"New demanding customers in 7 days\",\n                                    customerList: inSevenCustomers,\n                                    scrollToCustomerDetail: scrollToCustomerDetail\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 29\n                                }, undefined),\n                                beyondSevenCustomers.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_3__.CustomerSection, {\n                                    section: \"New demanding customers beyond 7 days\",\n                                    customerList: beyondSevenCustomers,\n                                    scrollToCustomerDetail: scrollToCustomerDetail\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 26\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                            lineNumber: 94,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                        lineNumber: 92,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        variant: \"light\",\n                        className: \"collapse-button\",\n                        onClick: toggle,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsThreeDots, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                            lineNumber: 109,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                        lineNumber: 108,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerContainer.jsx\",\n        lineNumber: 63,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CustomerContainer, \"nUDFtykTxB8k59Cxw0GMx2WjIFg=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_2__.useStateContext\n    ];\n});\n_c = CustomerContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomerContainer);\nvar _c;\n$RefreshReg$(_c, \"CustomerContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1c3RvbWVyL0N1c3RvbWVyQ29udGFpbmVyLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFtRDtBQUNOO0FBQ0Q7QUFDaUI7QUFDeEIsc0JBQXFCO0FBRTFELE1BQU1PLG9CQUFvQixTQUFnQztRQUEvQixFQUFFQyx1QkFBc0IsRUFBRTs7SUFDakQsTUFBTSxFQUFFQyxzQkFBcUIsRUFBQ0MseUJBQXdCLEVBQUNDLDBCQUF5QixFQUFFQyxVQUFTLEVBQUVDLGNBQWEsRUFBRSxHQUFHUixzRUFBZUE7SUFDOUgsTUFBTSxDQUFFUyxhQUFhQyxlQUFnQixHQUFHZCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ3RELE1BQU0sQ0FBRWUsa0JBQWtCQyxvQkFBcUIsR0FBR2hCLCtDQUFRQSxDQUFDLEVBQUU7SUFDN0QsTUFBTSxDQUFFaUIsa0JBQWtCQyxvQkFBcUIsR0FBR2xCLCtDQUFRQSxDQUFDLEVBQUU7SUFDN0QsTUFBTSxDQUFFbUIsc0JBQXNCQyx3QkFBeUIsR0FBR3BCLCtDQUFRQSxDQUFDLEVBQUU7SUFFckUsTUFBTXFCLGdCQUFnQixJQUFNO1FBQ3hCLElBQUlWLFVBQVVXLE1BQU0sR0FBRyxHQUFHO1lBQ3RCLE1BQU1DLFFBQVFaLFVBQVVhLE1BQU0sQ0FBQyxDQUFDQyxXQUFhO2dCQUN6QyxNQUFNQyxRQUFRLElBQUlDO2dCQUNsQixNQUFNQyxRQUFRLElBQUlELEtBQUtGLFNBQVNJLFNBQVM7Z0JBRXpDLE1BQU1DLG1CQUFtQmxCLGNBQWNjLE9BQU9FO2dCQUM5QyxJQUFJLElBQUlFLG9CQUFvQkEsb0JBQW9CLE1BQU1MLFNBQVNNLFdBQVcsS0FBSSxTQUFTTixTQUFTTSxXQUFXLEtBQUksV0FBVTtvQkFDckgsT0FBT047Z0JBQ1gsQ0FBQztZQUNMO1lBQ0FULG9CQUFvQk87WUFFcEIsTUFBTVMsUUFBUXJCLFVBQVVhLE1BQU0sQ0FBQyxDQUFDQyxXQUFhO2dCQUN6QyxNQUFNQyxRQUFRLElBQUlDO2dCQUNsQixNQUFNQyxRQUFRLElBQUlELEtBQUtGLFNBQVNJLFNBQVM7Z0JBRXpDLE1BQU1DLG1CQUFtQmxCLGNBQWNjLE9BQU9FO2dCQUM5QyxJQUFJLE1BQU1FLG9CQUFvQkEsbUJBQW1CLE1BQU1MLFNBQVNNLFdBQVcsS0FBRyxTQUFRTixTQUFTTSxXQUFXLEtBQUksV0FBVTtvQkFDcEgsT0FBT047Z0JBQ1gsQ0FBQztZQUNMO1lBRUFQLG9CQUFvQmM7WUFFcEIsTUFBTUMsUUFBUXRCLFVBQVVhLE1BQU0sQ0FBQyxDQUFDQyxXQUFhO2dCQUN6QyxNQUFNQyxRQUFRLElBQUlDO2dCQUNsQixNQUFNQyxRQUFRLElBQUlELEtBQUtGLFNBQVNJLFNBQVM7Z0JBRXpDLE1BQU1DLG1CQUFtQmxCLGNBQWNjLE9BQU9FO2dCQUM5QyxJQUFJRSxtQkFBbUIsTUFBTUwsU0FBU00sV0FBVyxLQUFHLFNBQVFOLFNBQVNNLFdBQVcsS0FBSSxXQUFVO29CQUMxRixPQUFPTjtnQkFDWCxDQUFDO1lBQ0w7WUFFQUwsd0JBQXdCYTtRQUM1QixDQUFDO0lBQ0w7SUFFQSxNQUFNQyxTQUFTLElBQU07UUFDakJwQixlQUFlLENBQUNEO0lBQ3BCO0lBRUFaLGdEQUFTQSxDQUFDLElBQU07UUFDWm9CO0lBQ0osR0FBRztRQUFDYjtRQUFzQkM7UUFBeUJDO1FBQTJCQztLQUFVO0lBR3hGLHFCQUNJLDhEQUFDd0I7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFROzs7Ozs7MEJBQ3RCLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNEO2tDQUVJLENBQUN0QixlQUFlTCxzQkFBc0JjLE1BQU0sS0FBSyxtQkFDOUMsOERBQUNhOzs4Q0FDRCw4REFBQ0c7OENBQUc7Ozs7Ozs4Q0FDSiw4REFBQ2pDLDhDQUFlQTtvQ0FBQ2tDLFNBQVE7b0NBQWdCQyxjQUFjaEM7b0NBQXVCRCx3QkFBd0JBOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJOUcsOERBQUM0QjtrQ0FFSSxDQUFDdEIsZUFBZUoseUJBQXlCYSxNQUFNLEtBQUssbUJBQ2pELDhEQUFDYTs7OENBQ0EsOERBQUNHOzhDQUFHOzs7Ozs7OENBQ0wsOERBQUNqQyw4Q0FBZUE7b0NBQUNrQyxTQUFRO29DQUFnQkMsY0FBYy9CO29DQUEwQkYsd0JBQXdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR2pILDhEQUFDNEI7a0NBRUEsQ0FBQ3RCLGVBQWVILDBCQUEwQlksTUFBTSxLQUFLLG1CQUNsRCw4REFBQ2E7OzhDQUNELDhEQUFDRzs4Q0FBRzs7Ozs7OzhDQUNBLDhEQUFDakMsOENBQWVBO29DQUFDa0MsU0FBUTtvQ0FBZ0JDLGNBQWM5QjtvQ0FBMkJILHdCQUF3QkE7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUlsSCw4REFBQzRCO3dCQUFJQyxXQUFVO2tDQUVQLDRFQUFDRDs7OENBQ0UsOERBQUNHOzhDQUFHOzs7Ozs7Z0NBQ0x2QixpQkFBaUJPLE1BQU0sR0FBRyxtQkFDeEIsOERBQUNqQiw4Q0FBZUE7b0NBQUNrQyxTQUFRO29DQUFVQyxjQUFjekI7b0NBQWtCUix3QkFBd0JBOzs7Ozs7Z0NBRTdGVSxpQkFBaUJ3QixNQUFNLEdBQUcsbUJBQ3hCLDhEQUFDcEMsOENBQWVBO29DQUFDa0MsU0FBUTtvQ0FBb0NDLGNBQWN2QjtvQ0FBa0JWLHdCQUF3QkE7Ozs7OztnQ0FFdkhZLHFCQUFxQkcsTUFBTSxHQUFHLG1CQUMvQiw4REFBQ2pCLDhDQUFlQTtvQ0FBQ2tDLFNBQVE7b0NBQXdDQyxjQUFjckI7b0NBQXNCWix3QkFBd0JBOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLdEksOERBQUNKLDhEQUFNQTt3QkFBQ3VDLFNBQVE7d0JBQVFOLFdBQVU7d0JBQWtCTyxTQUFTVDtrQ0FDekQsNEVBQUNoQyx1REFBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEM7R0EzR01JOztRQUM2R0Ysa0VBQWVBOzs7S0FENUhFO0FBNkdOLCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXN0b21lci9DdXN0b21lckNvbnRhaW5lci5qc3g/OTA2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJzVGhyZWVEb3RzIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuaW1wb3J0IHsgdXNlU3RhdGVDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9TdGF0ZUNvbnRleHQnO1xuaW1wb3J0IHsgQ3VzdG9tZXJTZWN0aW9uIH0gZnJvbSAnLi4nOy8vY29tcG9uZW50cy9pbmRleC5qc1xuXG5jb25zdCBDdXN0b21lckNvbnRhaW5lciA9ICh7IHNjcm9sbFRvQ3VzdG9tZXJEZXRhaWwgfSkgPT4ge1xuICAgIGNvbnN0IHsgZmlsdGVyZWRDdXN0b21lcnNCeUlELGZpbHRlcmVkQ3VzdG9tZXJzQnlFbWFpbCxmaWx0ZXJlZEN1c3RvbWVyc0J5V2VjaGF0LCBjdXN0b21lcnMsIGRheURpZmZlcmVuY2UgfSA9IHVzZVN0YXRlQ29udGV4dCgpXG4gICAgY29uc3QgWyBpc0NvbGxhcHNlZCwgc2V0SXNDb2xsYXBzZWQgXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFsgY3VycmVudEN1c3RvbWVycywgc2V0Q3VycmVudEN1c3RvbWVycyBdID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgWyBpblNldmVuQ3VzdG9tZXJzLCBzZXRJblNldmVuQ3VzdG9tZXJzIF0gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBbIGJleW9uZFNldmVuQ3VzdG9tZXJzLCBzZXRCZXlvbmRTZXZlbkN1c3RvbWVycyBdID0gdXNlU3RhdGUoW10pXG5cbiAgICBjb25zdCBzb3J0Q3VzdG9tZXJzID0gKCkgPT4ge1xuICAgICAgICBpZiAoY3VzdG9tZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3QxID0gY3VzdG9tZXJzLmZpbHRlcigoY3VzdG9tZXIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlMSA9IG5ldyBEYXRlKClcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlMiA9IG5ldyBEYXRlKGN1c3RvbWVyLnJlbnRfZGF0ZSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBkaWZmZXJlbmNlSW5EYXlzID0gZGF5RGlmZmVyZW5jZShkYXRlMSwgZGF0ZTIpXG4gICAgICAgICAgICAgICAgaWYgKDAgPCBkaWZmZXJlbmNlSW5EYXlzICYmIGRpZmZlcmVuY2VJbkRheXMgPD0gNjAgJiYgY3VzdG9tZXIucmVudF9zdGF0dXMgIT09J1lFUycgJiYgY3VzdG9tZXIucmVudF9zdGF0dXMgIT09J0RFTEVURUQnKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1c3RvbWVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHNldEN1cnJlbnRDdXN0b21lcnMobGlzdDEpXG5cbiAgICAgICAgICAgIGNvbnN0IGxpc3QyID0gY3VzdG9tZXJzLmZpbHRlcigoY3VzdG9tZXIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlMSA9IG5ldyBEYXRlKClcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlMiA9IG5ldyBEYXRlKGN1c3RvbWVyLnJlbnRfZGF0ZSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBkaWZmZXJlbmNlSW5EYXlzID0gZGF5RGlmZmVyZW5jZShkYXRlMSwgZGF0ZTIpXG4gICAgICAgICAgICAgICAgaWYgKDY3ID49IGRpZmZlcmVuY2VJbkRheXMgJiYgZGlmZmVyZW5jZUluRGF5cyA+IDYwICYmIGN1c3RvbWVyLnJlbnRfc3RhdHVzIT09J1lFUycmJiBjdXN0b21lci5yZW50X3N0YXR1cyAhPT0nREVMRVRFRCcpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VzdG9tZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBzZXRJblNldmVuQ3VzdG9tZXJzKGxpc3QyKVxuXG4gICAgICAgICAgICBjb25zdCBsaXN0MyA9IGN1c3RvbWVycy5maWx0ZXIoKGN1c3RvbWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZTEgPSBuZXcgRGF0ZSgpXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZTIgPSBuZXcgRGF0ZShjdXN0b21lci5yZW50X2RhdGUpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgZGlmZmVyZW5jZUluRGF5cyA9IGRheURpZmZlcmVuY2UoZGF0ZTEsIGRhdGUyKVxuICAgICAgICAgICAgICAgIGlmIChkaWZmZXJlbmNlSW5EYXlzID4gNjcgJiYgY3VzdG9tZXIucmVudF9zdGF0dXMhPT0nWUVTJyYmIGN1c3RvbWVyLnJlbnRfc3RhdHVzICE9PSdERUxFVEVEJyl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXN0b21lclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHNldEJleW9uZFNldmVuQ3VzdG9tZXJzKGxpc3QzKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdG9nZ2xlID0gKCkgPT4ge1xuICAgICAgICBzZXRJc0NvbGxhcHNlZCghaXNDb2xsYXBzZWQpXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc29ydEN1c3RvbWVycygpXG4gICAgfSwgW2ZpbHRlcmVkQ3VzdG9tZXJzQnlJRCxmaWx0ZXJlZEN1c3RvbWVyc0J5RW1haWwsZmlsdGVyZWRDdXN0b21lcnNCeVdlY2hhdCwgY3VzdG9tZXJzXSlcblxuIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kdWxlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlXCI+Q3VzdG9tZXJzPC9oND5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHshaXNDb2xsYXBzZWQgJiYgZmlsdGVyZWRDdXN0b21lcnNCeUlELmxlbmd0aCAhPT0gMCAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkJ5IElEPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21lclNlY3Rpb24gc2VjdGlvbj1cIlNlYXJjaCBSZXN1bHRcIiBjdXN0b21lckxpc3Q9e2ZpbHRlcmVkQ3VzdG9tZXJzQnlJRH0gc2Nyb2xsVG9DdXN0b21lckRldGFpbD17c2Nyb2xsVG9DdXN0b21lckRldGFpbH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgeyFpc0NvbGxhcHNlZCAmJiBmaWx0ZXJlZEN1c3RvbWVyc0J5RW1haWwubGVuZ3RoICE9PSAwICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5CeSBFbWFpbDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tZXJTZWN0aW9uIHNlY3Rpb249XCJTZWFyY2ggUmVzdWx0XCIgY3VzdG9tZXJMaXN0PXtmaWx0ZXJlZEN1c3RvbWVyc0J5RW1haWx9IHNjcm9sbFRvQ3VzdG9tZXJEZXRhaWw9e3Njcm9sbFRvQ3VzdG9tZXJEZXRhaWx9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgeyFpc0NvbGxhcHNlZCAmJiBmaWx0ZXJlZEN1c3RvbWVyc0J5V2VjaGF0Lmxlbmd0aCAhPT0gMCAmJiBcbiAgICAgICAgICAgICAgICAgICAgPGRpdj4gXG4gICAgICAgICAgICAgICAgICAgIDxoNT5CeSBXZWNoYXQ8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbWVyU2VjdGlvbiBzZWN0aW9uPVwiU2VhcmNoIFJlc3VsdFwiIGN1c3RvbWVyTGlzdD17ZmlsdGVyZWRDdXN0b21lcnNCeVdlY2hhdH0gc2Nyb2xsVG9DdXN0b21lckRldGFpbD17c2Nyb2xsVG9DdXN0b21lckRldGFpbH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcm9sbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkN1cnJlbnQgY3VzdG9tZXJzPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgY3VycmVudEN1c3RvbWVycy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbWVyU2VjdGlvbiBzZWN0aW9uPSdDdXJyZW50JyBjdXN0b21lckxpc3Q9e2N1cnJlbnRDdXN0b21lcnN9IHNjcm9sbFRvQ3VzdG9tZXJEZXRhaWw9e3Njcm9sbFRvQ3VzdG9tZXJEZXRhaWx9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7IGluU2V2ZW5DdXN0b21lcnMubGVuZ2h0ID4gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21lclNlY3Rpb24gc2VjdGlvbj0nTmV3IGRlbWFuZGluZyBjdXN0b21lcnMgaW4gNyBkYXlzJyBjdXN0b21lckxpc3Q9e2luU2V2ZW5DdXN0b21lcnN9IHNjcm9sbFRvQ3VzdG9tZXJEZXRhaWw9e3Njcm9sbFRvQ3VzdG9tZXJEZXRhaWx9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYmV5b25kU2V2ZW5DdXN0b21lcnMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21lclNlY3Rpb24gc2VjdGlvbj0nTmV3IGRlbWFuZGluZyBjdXN0b21lcnMgYmV5b25kIDcgZGF5cycgY3VzdG9tZXJMaXN0PXtiZXlvbmRTZXZlbkN1c3RvbWVyc30gc2Nyb2xsVG9DdXN0b21lckRldGFpbD17c2Nyb2xsVG9DdXN0b21lckRldGFpbH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwibGlnaHRcIiBjbGFzc05hbWU9XCJjb2xsYXBzZS1idXR0b25cIiBvbkNsaWNrPXt0b2dnbGV9PlxuICAgICAgICAgICAgICAgICAgICA8QnNUaHJlZURvdHMgLz5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21lckNvbnRhaW5lcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJzVGhyZWVEb3RzIiwiQnV0dG9uIiwidXNlU3RhdGVDb250ZXh0IiwiQ3VzdG9tZXJTZWN0aW9uIiwiQ3VzdG9tZXJDb250YWluZXIiLCJzY3JvbGxUb0N1c3RvbWVyRGV0YWlsIiwiZmlsdGVyZWRDdXN0b21lcnNCeUlEIiwiZmlsdGVyZWRDdXN0b21lcnNCeUVtYWlsIiwiZmlsdGVyZWRDdXN0b21lcnNCeVdlY2hhdCIsImN1c3RvbWVycyIsImRheURpZmZlcmVuY2UiLCJpc0NvbGxhcHNlZCIsInNldElzQ29sbGFwc2VkIiwiY3VycmVudEN1c3RvbWVycyIsInNldEN1cnJlbnRDdXN0b21lcnMiLCJpblNldmVuQ3VzdG9tZXJzIiwic2V0SW5TZXZlbkN1c3RvbWVycyIsImJleW9uZFNldmVuQ3VzdG9tZXJzIiwic2V0QmV5b25kU2V2ZW5DdXN0b21lcnMiLCJzb3J0Q3VzdG9tZXJzIiwibGVuZ3RoIiwibGlzdDEiLCJmaWx0ZXIiLCJjdXN0b21lciIsImRhdGUxIiwiRGF0ZSIsImRhdGUyIiwicmVudF9kYXRlIiwiZGlmZmVyZW5jZUluRGF5cyIsInJlbnRfc3RhdHVzIiwibGlzdDIiLCJsaXN0MyIsInRvZ2dsZSIsImRpdiIsImNsYXNzTmFtZSIsImg0IiwiaDUiLCJzZWN0aW9uIiwiY3VzdG9tZXJMaXN0IiwibGVuZ2h0IiwidmFyaWFudCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Customer/CustomerContainer.jsx\n"));

/***/ })

});