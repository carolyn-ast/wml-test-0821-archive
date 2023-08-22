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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/StateContext */ \"./context/StateContext.js\");\n/* harmony import */ var _context_StaticContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/StaticContext */ \"./context/StaticContext.js\");\n/* harmony import */ var _InputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../InputField */ \"./components/InputField.jsx\");\n/* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Textarea */ \"./components/Textarea.jsx\");\n/* harmony import */ var _DropDown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../DropDown */ \"./components/DropDown.jsx\");\n/* harmony import */ var _TimePicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../TimePicker */ \"./components/TimePicker.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst CustomerDetail = /*#__PURE__*/ _s(react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(_c = _s((param, ref)=>{\n    let { scrollToCustomerDetail  } = param;\n    _s();\n    const { currentCustomer , handleCustomerUpdate  } = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_2__.useStateContext)();\n    const { detailList , options_city , options_gender , options_rentType  } = (0,_context_StaticContext__WEBPACK_IMPORTED_MODULE_3__.useStaticContext)();\n    const [customer, setCustomer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(currentCustomer);\n    const [updateItems, setUpdateItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [rentTime, setRentTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const handleChange = (e)=>{\n        const { name , value  } = e.target;\n        setUpdateItems({\n            ...updateItems,\n            [name]: value\n        });\n        setCustomer({\n            ...customer,\n            [name]: value\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setCustomer(currentCustomer);\n        setUpdateItems({});\n        if (scrollToCustomerDetail) {\n            ref.current.scrollIntoView({\n                behavior: \"smooth\"\n            });\n        }\n    }, [\n        currentCustomer,\n        scrollToCustomerDetail,\n        ref\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: ref,\n        children: customer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"module-container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    className: \"title\",\n                    children: \"Customer's Detail\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 21\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"detail-contanier\",\n                    children: [\n                        Object.entries(detailList).map((param)=>{\n                            let [key, value] = param;\n                            return key === \"Submission_Date\" || key === \"Last Update Date\" || key === \"UserId\" || key === \"Assistant_name\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                type: \"text\",\n                                value: customer[key],\n                                placeholder: value,\n                                label: value,\n                                name: key,\n                                onChange: handleChange,\n                                readOnly: \"true\"\n                            }, key, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 38\n                            }, undefined) : key === \"Leasing_demand\" || key === \"Assistant_message\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Textarea__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                label: value,\n                                name: key,\n                                placeholder: value,\n                                value: customer[key],\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 42\n                            }, undefined) : key === \"City\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DropDown__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                label: value,\n                                options: options_city,\n                                name: key,\n                                value: customer[key],\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                                lineNumber: 75,\n                                columnNumber: 49\n                            }, undefined) : key === \"gender\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DropDown__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                label: value,\n                                options: options_gender,\n                                name: key,\n                                value: customer[key],\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                                lineNumber: 80,\n                                columnNumber: 49\n                            }, undefined) : key === \"rent_type\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DropDown__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                label: value,\n                                options: options_rentType,\n                                name: key,\n                                value: customer[key],\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                                lineNumber: 85,\n                                columnNumber: 49\n                            }, undefined) : // key === 'rent_date' ?\n                            // (\n                            //    <TimePicker></TimePicker>\n                            // )\n                            // :\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                type: \"text\",\n                                value: customer[key],\n                                placeholder: value,\n                                label: value,\n                                name: key,\n                                onChange: handleChange\n                            }, key, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                                lineNumber: 93,\n                                columnNumber: 41\n                            }, undefined);\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"submit-button-block\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                variant: \"success\",\n                                size: \"sm\",\n                                className: \"submit-button\",\n                                onClick: ()=>handleCustomerUpdate(updateItems, customer),\n                                children: \"Update\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                                lineNumber: 107,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                            lineNumber: 106,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n            lineNumber: 46,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, undefined);\n}, \"Yei4zclXbospbLo+APQJ2EFvqAU=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_2__.useStateContext,\n        _context_StaticContext__WEBPACK_IMPORTED_MODULE_3__.useStaticContext\n    ];\n})), \"Yei4zclXbospbLo+APQJ2EFvqAU=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_2__.useStateContext,\n        _context_StaticContext__WEBPACK_IMPORTED_MODULE_3__.useStaticContext\n    ];\n});\n_c1 = CustomerDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomerDetail);\nvar _c, _c1;\n$RefreshReg$(_c, \"CustomerDetail$React.forwardRef\");\n$RefreshReg$(_c1, \"CustomerDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1c3RvbWVyL0N1c3RvbWVyRGV0YWlsLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNQO0FBRWlCO0FBQ0U7QUFDeEI7QUFDSjtBQUNBO0FBQ0k7QUFFdkMsTUFBTVUsK0JBQWlCVixHQUFBQSx1REFBZ0IsU0FBQyxRQUEyQlksTUFBUTtRQUFsQyxFQUFDQyx1QkFBc0IsRUFBQzs7SUFDN0QsTUFBTSxFQUFFQyxnQkFBZSxFQUFFQyxxQkFBb0IsRUFBRSxHQUFHWCxzRUFBZUE7SUFDakUsTUFBTSxFQUFFWSxXQUFVLEVBQUNDLGFBQVksRUFDM0JDLGVBQWMsRUFDZEMsaUJBQWdCLEVBQUUsR0FBR2Qsd0VBQWdCQTtJQUN6QyxNQUFNLENBQUNlLFVBQVVDLFlBQVksR0FBR3BCLCtDQUFRQSxDQUFDYTtJQUN6QyxNQUFNLENBQUNRLGFBQWFDLGVBQWUsR0FBR3RCLCtDQUFRQSxDQUFDLENBQUM7SUFDaEQsTUFBTSxDQUFDdUIsVUFBVUMsWUFBWSxHQUFHeEIsK0NBQVFBO0lBRXhDLE1BQU15QixlQUFlLENBQUNDLElBQU07UUFDeEIsTUFBTSxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRSxHQUFHRixFQUFFRyxNQUFNO1FBQ2hDUCxlQUFlO1lBQ1gsR0FBR0QsV0FBVztZQUNkLENBQUNNLEtBQUssRUFBRUM7UUFDWjtRQUVBUixZQUFZO1lBQ1IsR0FBR0QsUUFBUTtZQUNYLENBQUNRLEtBQUssRUFBRUM7UUFDWjtJQUNKO0lBR0EzQixnREFBU0EsQ0FBQyxJQUFNO1FBQ1ptQixZQUFZUDtRQUNaUyxlQUFlLENBQUM7UUFDaEIsSUFBSVYsd0JBQXdCO1lBQ3hCRCxJQUFJbUIsT0FBTyxDQUFDQyxjQUFjLENBQUM7Z0JBQUVDLFVBQVU7WUFBUztRQUNwRCxDQUFDO0lBQ0wsR0FBRztRQUFDbkI7UUFBaUJEO1FBQXdCRDtLQUFJO0lBR2pELHFCQUNJLDhEQUFDc0I7UUFBSXRCLEtBQUtBO2tCQUNMUSwwQkFDRCw4REFBQ2M7WUFBSUMsV0FBVTs7OEJBQ1AsOERBQUNDO29CQUFHRCxXQUFVOzhCQUFROzs7Ozs7OEJBRTFCLDhEQUFDRDtvQkFBSUMsV0FBVTs7d0JBRUhFLE9BQU9DLE9BQU8sQ0FBQ3RCLFlBQVl1QixHQUFHLENBQUMsU0FDM0JDO2dDQUQ0QixDQUFDQSxLQUFLWCxNQUFNO21DQUN4Q1csUUFBUSxxQkFBcUJBLFFBQVEsc0JBQXNCQSxRQUFRLFlBQVlBLFFBQVEsaUNBQ2xGLDhEQUFDbEMsbURBQVVBO2dDQUNabUMsTUFBSztnQ0FDTFosT0FBT1QsUUFBUSxDQUFDb0IsSUFBSTtnQ0FDcEJFLGFBQWFiO2dDQUNiYyxPQUFPZDtnQ0FDUEQsTUFBTVk7Z0NBQ05JLFVBQVVsQjtnQ0FFVm1CLFVBQVM7K0JBREpMOzs7OzRDQUlMQSxRQUFRLG9CQUFvQkEsUUFBUSxvQ0FDL0IsOERBQUNqQyxpREFBUUE7Z0NBQ05vQyxPQUFPZDtnQ0FDUEQsTUFBTVk7Z0NBQ05FLGFBQWFiO2dDQUNiQSxPQUFPVCxRQUFRLENBQUNvQixJQUFJO2dDQUNwQkksVUFBVWxCOzs7Ozs0Q0FHWmMsUUFBUSx1QkFFRiw4REFBQ2hDLGlEQUFRQTtnQ0FBQ21DLE9BQU9kO2dDQUFPaUIsU0FBUzdCO2dDQUFjVyxNQUFNWTtnQ0FBS1gsT0FBT1QsUUFBUSxDQUFDb0IsSUFBSTtnQ0FBRUksVUFBVWxCOzs7Ozs0Q0FHOUZjLFFBQVEseUJBRUosOERBQUNoQyxpREFBUUE7Z0NBQUNtQyxPQUFPZDtnQ0FBT2lCLFNBQVM1QjtnQ0FBZ0JVLE1BQU1ZO2dDQUFLWCxPQUFPVCxRQUFRLENBQUNvQixJQUFJO2dDQUFFSSxVQUFVbEI7Ozs7OzRDQUdoR2MsUUFBUSw0QkFFSiw4REFBQ2hDLGlEQUFRQTtnQ0FBQ21DLE9BQU9kO2dDQUFPaUIsU0FBUzNCO2dDQUFrQlMsTUFBTVk7Z0NBQUtYLE9BQU9ULFFBQVEsQ0FBQ29CLElBQUk7Z0NBQUVJLFVBQVVsQjs7Ozs7NENBR2xHLHdCQUF3Qjs0QkFDeEIsSUFBSTs0QkFDSiwrQkFBK0I7NEJBQy9CLElBQUk7NEJBQ0osSUFBSTswQ0FDUiw4REFBQ3BCLG1EQUFVQTtnQ0FDWG1DLE1BQUs7Z0NBQ0xaLE9BQU9ULFFBQVEsQ0FBQ29CLElBQUk7Z0NBQ3BCRSxhQUFhYjtnQ0FDYmMsT0FBT2Q7Z0NBQ1BELE1BQU1ZO2dDQUNOSSxVQUFVbEI7K0JBQ0xjOzs7O3lDQUVQO3dCQUFEO3NDQUlqQiw4REFBQ047NEJBQUlDLFdBQVU7c0NBQ1gsNEVBQUNoQyw4REFBTUE7Z0NBQUM0QyxTQUFRO2dDQUFVQyxNQUFLO2dDQUFLYixXQUFVO2dDQUFnQmMsU0FBUyxJQUFNbEMscUJBQXFCTyxhQUFhRjswQ0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9sSjs7UUF0R3NEaEIsa0VBQWVBO1FBR3hDQyxvRUFBZ0JBOzs7O1FBSFNELGtFQUFlQTtRQUd4Q0Msb0VBQWdCQTs7OztBQXFHN0MsK0RBQWVLLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXN0b21lci9DdXN0b21lckRldGFpbC5qc3g/NTk0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5cbmltcG9ydCB7IHVzZVN0YXRlQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQvU3RhdGVDb250ZXh0JztcbmltcG9ydCB7IHVzZVN0YXRpY0NvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0L1N0YXRpY0NvbnRleHQnO1xuaW1wb3J0IElucHV0RmllbGQgZnJvbSAnLi4vSW5wdXRGaWVsZCc7XG5pbXBvcnQgVGV4dGFyZWEgZnJvbSAnLi4vVGV4dGFyZWEnO1xuaW1wb3J0IERyb3BEb3duIGZyb20gJy4uL0Ryb3BEb3duJztcbmltcG9ydCBUaW1lUGlja2VyIGZyb20gJy4uL1RpbWVQaWNrZXInO1xuXG5jb25zdCBDdXN0b21lckRldGFpbCA9IFJlYWN0LmZvcndhcmRSZWYoKHtzY3JvbGxUb0N1c3RvbWVyRGV0YWlsfSwgcmVmKSA9PiB7XG4gICAgY29uc3QgeyBjdXJyZW50Q3VzdG9tZXIsIGhhbmRsZUN1c3RvbWVyVXBkYXRlIH0gPSB1c2VTdGF0ZUNvbnRleHQoKVxuICAgIGNvbnN0IHsgZGV0YWlsTGlzdCxvcHRpb25zX2NpdHksXG4gICAgICAgIG9wdGlvbnNfZ2VuZGVyLFxuICAgICAgICBvcHRpb25zX3JlbnRUeXBlIH0gPSB1c2VTdGF0aWNDb250ZXh0KClcbiAgICBjb25zdCBbY3VzdG9tZXIsIHNldEN1c3RvbWVyXSA9IHVzZVN0YXRlKGN1cnJlbnRDdXN0b21lcilcbiAgICBjb25zdCBbdXBkYXRlSXRlbXMsIHNldFVwZGF0ZUl0ZW1zXSA9IHVzZVN0YXRlKHt9KVxuICAgIGNvbnN0IFtyZW50VGltZSwgc2V0UmVudFRpbWVdID0gdXNlU3RhdGUoKTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0XG4gICAgICAgIHNldFVwZGF0ZUl0ZW1zKHtcbiAgICAgICAgICAgIC4uLnVwZGF0ZUl0ZW1zLCBcbiAgICAgICAgICAgIFtuYW1lXTogdmFsdWVcbiAgICAgICAgfSlcblxuICAgICAgICBzZXRDdXN0b21lcih7XG4gICAgICAgICAgICAuLi5jdXN0b21lcixcbiAgICAgICAgICAgIFtuYW1lXTogdmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldEN1c3RvbWVyKGN1cnJlbnRDdXN0b21lcilcbiAgICAgICAgc2V0VXBkYXRlSXRlbXMoe30pXG4gICAgICAgIGlmIChzY3JvbGxUb0N1c3RvbWVyRGV0YWlsKSB7XG4gICAgICAgICAgICByZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICAgICAgICB9XG4gICAgfSwgW2N1cnJlbnRDdXN0b21lciwgc2Nyb2xsVG9DdXN0b21lckRldGFpbCwgcmVmXSk7XG5cbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHJlZj17cmVmfT5cbiAgICAgICAgICAgIHtjdXN0b21lciAmJiBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kdWxlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGVcIj5DdXN0b21lcidzIERldGFpbDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsLWNvbnRhbmllclwiPlxuICAgICAgICAgICAgICAgICAgICB7ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoZGV0YWlsTGlzdCkubWFwKChba2V5LCB2YWx1ZV0pID0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPT09ICdTdWJtaXNzaW9uX0RhdGUnIHx8IGtleSA9PT0gJ0xhc3QgVXBkYXRlIERhdGUnIHx8IGtleSA9PT0gJ1VzZXJJZCcgfHwga2V5ID09PSAnQXNzaXN0YW50X25hbWUnID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8SW5wdXRGaWVsZCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2N1c3RvbWVyW2tleV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT0ndHJ1ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9PT0gJ0xlYXNpbmdfZGVtYW5kJyB8fCBrZXkgPT09ICdBc3Npc3RhbnRfbWVzc2FnZScgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8VGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2N1c3RvbWVyW2tleV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L1RleHRhcmVhPilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGtleSA9PT0gJ0NpdHknID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3BEb3duIGxhYmVsPXt2YWx1ZX0gb3B0aW9ucz17b3B0aW9uc19jaXR5fSBuYW1lPXtrZXl9IHZhbHVlPXtjdXN0b21lcltrZXldfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT48L0Ryb3BEb3duPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID09PSAnZ2VuZGVyJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wRG93biBsYWJlbD17dmFsdWV9IG9wdGlvbnM9e29wdGlvbnNfZ2VuZGVyfSBuYW1lPXtrZXl9IHZhbHVlPXtjdXN0b21lcltrZXldfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT48L0Ryb3BEb3duPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID09PSAncmVudF90eXBlJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wRG93biBsYWJlbD17dmFsdWV9IG9wdGlvbnM9e29wdGlvbnNfcmVudFR5cGV9IG5hbWU9e2tleX0gdmFsdWU9e2N1c3RvbWVyW2tleV19IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PjwvRHJvcERvd24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBrZXkgPT09ICdyZW50X2RhdGUnID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICA8VGltZVBpY2tlcj48L1RpbWVQaWNrZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEZpZWxkIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y3VzdG9tZXJba2V5XX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VibWl0LWJ1dHRvbi1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic3VjY2Vzc1wiIHNpemU9XCJzbVwiIGNsYXNzTmFtZT1cInN1Ym1pdC1idXR0b25cIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDdXN0b21lclVwZGF0ZSh1cGRhdGVJdGVtcywgY3VzdG9tZXIpfT5VcGRhdGU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbWVyRGV0YWlsOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQnV0dG9uIiwidXNlU3RhdGVDb250ZXh0IiwidXNlU3RhdGljQ29udGV4dCIsIklucHV0RmllbGQiLCJUZXh0YXJlYSIsIkRyb3BEb3duIiwiVGltZVBpY2tlciIsIkN1c3RvbWVyRGV0YWlsIiwiZm9yd2FyZFJlZiIsInJlZiIsInNjcm9sbFRvQ3VzdG9tZXJEZXRhaWwiLCJjdXJyZW50Q3VzdG9tZXIiLCJoYW5kbGVDdXN0b21lclVwZGF0ZSIsImRldGFpbExpc3QiLCJvcHRpb25zX2NpdHkiLCJvcHRpb25zX2dlbmRlciIsIm9wdGlvbnNfcmVudFR5cGUiLCJjdXN0b21lciIsInNldEN1c3RvbWVyIiwidXBkYXRlSXRlbXMiLCJzZXRVcGRhdGVJdGVtcyIsInJlbnRUaW1lIiwic2V0UmVudFRpbWUiLCJoYW5kbGVDaGFuZ2UiLCJlIiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJoNCIsIk9iamVjdCIsImVudHJpZXMiLCJtYXAiLCJrZXkiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJsYWJlbCIsIm9uQ2hhbmdlIiwicmVhZE9ubHkiLCJvcHRpb25zIiwidmFyaWFudCIsInNpemUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Customer/CustomerDetail.jsx\n"));

/***/ })

});