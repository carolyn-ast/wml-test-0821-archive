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

/***/ "./components/Customer/CustomerDetail.jsx":
/*!************************************************!*\
  !*** ./components/Customer/CustomerDetail.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/StateContext */ \"./context/StateContext.js\");\n/* harmony import */ var _context_StaticContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/StaticContext */ \"./context/StaticContext.js\");\n/* harmony import */ var _InputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../InputField */ \"./components/InputField.jsx\");\n/* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Textarea */ \"./components/Textarea.jsx\");\n/* harmony import */ var _DropDown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../DropDown */ \"./components/DropDown.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n//import Form from 'react-bootstrap/Form';\nconst CustomerDetail = /*#__PURE__*/ _s(react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(_c = _s((param, ref)=>{\n    let { scrollToCustomerDetail  } = param;\n    _s();\n    const { currentCustomer , handleCustomerUpdate  } = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_2__.useStateContext)();\n    const { detailList , options_city , options_gender , options_rentType  } = (0,_context_StaticContext__WEBPACK_IMPORTED_MODULE_3__.useStaticContext)();\n    const [customer, setCustomer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(currentCustomer);\n    const [updateItems, setUpdateItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const handleChange = (e)=>{\n        const { name , value  } = e.target;\n        setUpdateItems({\n            ...updateItems,\n            [name]: value\n        });\n        setCustomer({\n            ...customer,\n            [name]: value\n        });\n    };\n    const handleSelectChange = (e)=>{};\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setCustomer(currentCustomer);\n        setUpdateItems({});\n        if (scrollToCustomerDetail) {\n            ref.current.scrollIntoView({\n                behavior: \"smooth\"\n            });\n        }\n    }, [\n        currentCustomer,\n        scrollToCustomerDetail,\n        ref\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: ref,\n        children: customer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"module-container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    className: \"title\",\n                    children: \"Customer's Detail\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 21\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"detail-contanier\",\n                    children: [\n                        Object.entries(detailList).map((param)=>{\n                            let [key, value] = param;\n                            return key === \"Submission_Date\" || key === \"Last Update Date\" || key === \"UserId\" || key === \"Assistant_name\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                type: \"text\",\n                                value: customer[key],\n                                placeholder: value,\n                                label: value,\n                                name: key,\n                                onChange: handleChange,\n                                readOnly: \"true\"\n                            }, key, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 38\n                            }, undefined) : key === \"Leasing_demand\" || key === \"Assistant_message\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Textarea__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                label: value,\n                                name: key,\n                                placeholder: value,\n                                value: customer[key],\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                                lineNumber: 67,\n                                columnNumber: 42\n                            }, undefined) : key === \"City\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DropDown__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                options: options_city,\n                                name: key,\n                                value: customer[key]\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                                lineNumber: 77,\n                                columnNumber: 49\n                            }, undefined) : key === \"gender\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DropDown__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                options: options_gender,\n                                name: key,\n                                value: customer[key],\n                                onChange: handleSelectChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                                lineNumber: 82,\n                                columnNumber: 49\n                            }, undefined) : key === \"rent_type\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DropDown__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                options: options_rentType,\n                                name: key,\n                                value: customer[key]\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                                lineNumber: 87,\n                                columnNumber: 49\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                type: \"text\",\n                                value: customer[key],\n                                placeholder: value,\n                                label: value,\n                                name: key,\n                                onChange: handleChange\n                            }, key, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                                lineNumber: 90,\n                                columnNumber: 41\n                            }, undefined);\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"submit-button-block\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                variant: \"success\",\n                                size: \"sm\",\n                                className: \"submit-button\",\n                                onClick: ()=>handleCustomerUpdate(updateItems, customer),\n                                children: \"Update\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                                lineNumber: 104,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                            lineNumber: 103,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                    lineNumber: 51,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n            lineNumber: 48,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, undefined);\n}, \"Icro8i0A3rnKag2AZ5VpZbE9rgo=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_2__.useStateContext,\n        _context_StaticContext__WEBPACK_IMPORTED_MODULE_3__.useStaticContext\n    ];\n})), \"Icro8i0A3rnKag2AZ5VpZbE9rgo=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_2__.useStateContext,\n        _context_StaticContext__WEBPACK_IMPORTED_MODULE_3__.useStaticContext\n    ];\n});\n_c1 = CustomerDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomerDetail);\nvar _c, _c1;\n$RefreshReg$(_c, \"CustomerDetail$React.forwardRef\");\n$RefreshReg$(_c1, \"CustomerDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1c3RvbWVyL0N1c3RvbWVyRGV0YWlsLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1A7QUFFaUI7QUFDRTtBQUN4QjtBQUNKO0FBQ0E7QUFDbkMsMENBQTBDO0FBRTFDLE1BQU1TLCtCQUFpQlQsR0FBQUEsdURBQWdCLFNBQUMsUUFBMkJXLE1BQVE7UUFBbEMsRUFBQ0MsdUJBQXNCLEVBQUM7O0lBQzdELE1BQU0sRUFBRUMsZ0JBQWUsRUFBRUMscUJBQW9CLEVBQUUsR0FBR1Ysc0VBQWVBO0lBQ2pFLE1BQU0sRUFBRVcsV0FBVSxFQUFDQyxhQUFZLEVBQzNCQyxlQUFjLEVBQ2RDLGlCQUFnQixFQUFFLEdBQUdiLHdFQUFnQkE7SUFDekMsTUFBTSxDQUFDYyxVQUFVQyxZQUFZLEdBQUduQiwrQ0FBUUEsQ0FBQ1k7SUFDekMsTUFBTSxDQUFDUSxhQUFhQyxlQUFlLEdBQUdyQiwrQ0FBUUEsQ0FBQyxDQUFDO0lBRWhELE1BQU1zQixlQUFlLENBQUNDLElBQU07UUFDeEIsTUFBTSxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRSxHQUFHRixFQUFFRyxNQUFNO1FBQ2hDTCxlQUFlO1lBQ1gsR0FBR0QsV0FBVztZQUNkLENBQUNJLEtBQUssRUFBRUM7UUFDWjtRQUVBTixZQUFZO1lBQ1IsR0FBR0QsUUFBUTtZQUNYLENBQUNNLEtBQUssRUFBRUM7UUFDWjtJQUNKO0lBRUEsTUFBTUUscUJBQXFCLENBQUNKLElBQU0sQ0FFbEM7SUFFQXRCLGdEQUFTQSxDQUFDLElBQU07UUFDWmtCLFlBQVlQO1FBQ1pTLGVBQWUsQ0FBQztRQUNoQixJQUFJVix3QkFBd0I7WUFDeEJELElBQUlrQixPQUFPLENBQUNDLGNBQWMsQ0FBQztnQkFBRUMsVUFBVTtZQUFTO1FBQ3BELENBQUM7SUFDTCxHQUFHO1FBQUNsQjtRQUFpQkQ7UUFBd0JEO0tBQUk7SUFHakQscUJBQ0ksOERBQUNxQjtRQUFJckIsS0FBS0E7a0JBQ0xRLDBCQUNELDhEQUFDYTtZQUFJQyxXQUFVOzs4QkFDUCw4REFBQ0M7b0JBQUdELFdBQVU7OEJBQVE7Ozs7Ozs4QkFFMUIsOERBQUNEO29CQUFJQyxXQUFVOzt3QkFFSEUsT0FBT0MsT0FBTyxDQUFDckIsWUFBWXNCLEdBQUcsQ0FBQyxTQUMzQkM7Z0NBRDRCLENBQUNBLEtBQUtaLE1BQU07bUNBQ3hDWSxRQUFRLHFCQUFxQkEsUUFBUSxzQkFBc0JBLFFBQVEsWUFBWUEsUUFBUSxpQ0FDbEYsOERBQUNoQyxtREFBVUE7Z0NBQ1ppQyxNQUFLO2dDQUNMYixPQUFPUCxRQUFRLENBQUNtQixJQUFJO2dDQUNwQkUsYUFBYWQ7Z0NBQ2JlLE9BQU9mO2dDQUNQRCxNQUFNYTtnQ0FDTkksVUFBVW5CO2dDQUVWb0IsVUFBUzsrQkFESkw7Ozs7NENBSUxBLFFBQVEsb0JBQW9CQSxRQUFRLG9DQUMvQiw4REFBQy9CLGlEQUFRQTtnQ0FDTmtDLE9BQU9mO2dDQUNQRCxNQUFNYTtnQ0FDTkUsYUFBYWQ7Z0NBQ2JBLE9BQU9QLFFBQVEsQ0FBQ21CLElBQUk7Z0NBQ3BCSSxVQUFVbkI7Ozs7OzRDQUdaZSxRQUFRLHVCQUVGLDhEQUFDOUIsaURBQVFBO2dDQUFDb0MsU0FBUzVCO2dDQUFjUyxNQUFNYTtnQ0FBS1osT0FBT1AsUUFBUSxDQUFDbUIsSUFBSTs7Ozs7NENBR3BFQSxRQUFRLHlCQUVKLDhEQUFDOUIsaURBQVFBO2dDQUFDb0MsU0FBUzNCO2dDQUFnQlEsTUFBTWE7Z0NBQUtaLE9BQU9QLFFBQVEsQ0FBQ21CLElBQUk7Z0NBQUVJLFVBQVVkOzs7Ozs0Q0FHbEZVLFFBQVEsNEJBRUosOERBQUM5QixpREFBUUE7Z0NBQUNvQyxTQUFTMUI7Z0NBQWtCTyxNQUFNYTtnQ0FBS1osT0FBT1AsUUFBUSxDQUFDbUIsSUFBSTs7Ozs7MERBRzVFLDhEQUFDaEMsbURBQVVBO2dDQUNYaUMsTUFBSztnQ0FDTGIsT0FBT1AsUUFBUSxDQUFDbUIsSUFBSTtnQ0FDcEJFLGFBQWFkO2dDQUNiZSxPQUFPZjtnQ0FDUEQsTUFBTWE7Z0NBQ05JLFVBQVVuQjsrQkFDTGU7Ozs7eUNBRVA7d0JBQUQ7c0NBSWpCLDhEQUFDTjs0QkFBSUMsV0FBVTtzQ0FDWCw0RUFBQzlCLDhEQUFNQTtnQ0FBQzBDLFNBQVE7Z0NBQVVDLE1BQUs7Z0NBQUtiLFdBQVU7Z0NBQWdCYyxTQUFTLElBQU1qQyxxQkFBcUJPLGFBQWFGOzBDQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2xKOztRQW5Hc0RmLGtFQUFlQTtRQUd4Q0Msb0VBQWdCQTs7OztRQUhTRCxrRUFBZUE7UUFHeENDLG9FQUFnQkE7Ozs7QUFrRzdDLCtEQUFlSSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ3VzdG9tZXIvQ3VzdG9tZXJEZXRhaWwuanN4PzU5NDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZUNvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0L1N0YXRlQ29udGV4dCc7XG5pbXBvcnQgeyB1c2VTdGF0aWNDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9TdGF0aWNDb250ZXh0JztcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gJy4uL0lucHV0RmllbGQnO1xuaW1wb3J0IFRleHRhcmVhIGZyb20gJy4uL1RleHRhcmVhJztcbmltcG9ydCBEcm9wRG93biBmcm9tICcuLi9Ecm9wRG93bic7XG4vL2ltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcblxuY29uc3QgQ3VzdG9tZXJEZXRhaWwgPSBSZWFjdC5mb3J3YXJkUmVmKCh7c2Nyb2xsVG9DdXN0b21lckRldGFpbH0sIHJlZikgPT4ge1xuICAgIGNvbnN0IHsgY3VycmVudEN1c3RvbWVyLCBoYW5kbGVDdXN0b21lclVwZGF0ZSB9ID0gdXNlU3RhdGVDb250ZXh0KClcbiAgICBjb25zdCB7IGRldGFpbExpc3Qsb3B0aW9uc19jaXR5LFxuICAgICAgICBvcHRpb25zX2dlbmRlcixcbiAgICAgICAgb3B0aW9uc19yZW50VHlwZSB9ID0gdXNlU3RhdGljQ29udGV4dCgpXG4gICAgY29uc3QgW2N1c3RvbWVyLCBzZXRDdXN0b21lcl0gPSB1c2VTdGF0ZShjdXJyZW50Q3VzdG9tZXIpXG4gICAgY29uc3QgW3VwZGF0ZUl0ZW1zLCBzZXRVcGRhdGVJdGVtc10gPSB1c2VTdGF0ZSh7fSlcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0XG4gICAgICAgIHNldFVwZGF0ZUl0ZW1zKHtcbiAgICAgICAgICAgIC4uLnVwZGF0ZUl0ZW1zLCBcbiAgICAgICAgICAgIFtuYW1lXTogdmFsdWVcbiAgICAgICAgfSlcblxuICAgICAgICBzZXRDdXN0b21lcih7XG4gICAgICAgICAgICAuLi5jdXN0b21lcixcbiAgICAgICAgICAgIFtuYW1lXTogdmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTZWxlY3RDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgIFxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldEN1c3RvbWVyKGN1cnJlbnRDdXN0b21lcilcbiAgICAgICAgc2V0VXBkYXRlSXRlbXMoe30pXG4gICAgICAgIGlmIChzY3JvbGxUb0N1c3RvbWVyRGV0YWlsKSB7XG4gICAgICAgICAgICByZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICAgICAgICB9XG4gICAgfSwgW2N1cnJlbnRDdXN0b21lciwgc2Nyb2xsVG9DdXN0b21lckRldGFpbCwgcmVmXSk7XG5cbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHJlZj17cmVmfT5cbiAgICAgICAgICAgIHtjdXN0b21lciAmJiBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kdWxlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGVcIj5DdXN0b21lcidzIERldGFpbDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsLWNvbnRhbmllclwiPlxuICAgICAgICAgICAgICAgICAgICB7ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoZGV0YWlsTGlzdCkubWFwKChba2V5LCB2YWx1ZV0pID0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPT09ICdTdWJtaXNzaW9uX0RhdGUnIHx8IGtleSA9PT0gJ0xhc3QgVXBkYXRlIERhdGUnIHx8IGtleSA9PT0gJ1VzZXJJZCcgfHwga2V5ID09PSAnQXNzaXN0YW50X25hbWUnID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8SW5wdXRGaWVsZCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2N1c3RvbWVyW2tleV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT0ndHJ1ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9PT0gJ0xlYXNpbmdfZGVtYW5kJyB8fCBrZXkgPT09ICdBc3Npc3RhbnRfbWVzc2FnZScgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8VGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2N1c3RvbWVyW2tleV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L1RleHRhcmVhPilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGtleSA9PT0gJ0NpdHknID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3BEb3duIG9wdGlvbnM9e29wdGlvbnNfY2l0eX0gbmFtZT17a2V5fSB2YWx1ZT17Y3VzdG9tZXJba2V5XX0+PC9Ecm9wRG93bj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9PT0gJ2dlbmRlcicgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcERvd24gb3B0aW9ucz17b3B0aW9uc19nZW5kZXJ9IG5hbWU9e2tleX0gdmFsdWU9e2N1c3RvbWVyW2tleV19IG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3RDaGFuZ2V9PjwvRHJvcERvd24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPT09ICdyZW50X3R5cGUnID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3BEb3duIG9wdGlvbnM9e29wdGlvbnNfcmVudFR5cGV9IG5hbWU9e2tleX0gdmFsdWU9e2N1c3RvbWVyW2tleV19PjwvRHJvcERvd24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEZpZWxkIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y3VzdG9tZXJba2V5XX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VibWl0LWJ1dHRvbi1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic3VjY2Vzc1wiIHNpemU9XCJzbVwiIGNsYXNzTmFtZT1cInN1Ym1pdC1idXR0b25cIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDdXN0b21lclVwZGF0ZSh1cGRhdGVJdGVtcywgY3VzdG9tZXIpfT5VcGRhdGU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbWVyRGV0YWlsOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQnV0dG9uIiwidXNlU3RhdGVDb250ZXh0IiwidXNlU3RhdGljQ29udGV4dCIsIklucHV0RmllbGQiLCJUZXh0YXJlYSIsIkRyb3BEb3duIiwiQ3VzdG9tZXJEZXRhaWwiLCJmb3J3YXJkUmVmIiwicmVmIiwic2Nyb2xsVG9DdXN0b21lckRldGFpbCIsImN1cnJlbnRDdXN0b21lciIsImhhbmRsZUN1c3RvbWVyVXBkYXRlIiwiZGV0YWlsTGlzdCIsIm9wdGlvbnNfY2l0eSIsIm9wdGlvbnNfZ2VuZGVyIiwib3B0aW9uc19yZW50VHlwZSIsImN1c3RvbWVyIiwic2V0Q3VzdG9tZXIiLCJ1cGRhdGVJdGVtcyIsInNldFVwZGF0ZUl0ZW1zIiwiaGFuZGxlQ2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsImhhbmRsZVNlbGVjdENoYW5nZSIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDQiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwia2V5IiwidHlwZSIsInBsYWNlaG9sZGVyIiwibGFiZWwiLCJvbkNoYW5nZSIsInJlYWRPbmx5Iiwib3B0aW9ucyIsInZhcmlhbnQiLCJzaXplIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Customer/CustomerDetail.jsx\n"));

/***/ })

});