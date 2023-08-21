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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/StateContext */ \"./context/StateContext.js\");\n/* harmony import */ var _context_StaticContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/StaticContext */ \"./context/StaticContext.js\");\n/* harmony import */ var _InputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../InputField */ \"./components/InputField.jsx\");\n/* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Textarea */ \"./components/Textarea.jsx\");\n/* harmony import */ var _DropDown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../DropDown */ \"./components/DropDown.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst CustomerDetail = /*#__PURE__*/ _s(react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(_c = _s((param, ref)=>{\n    let { scrollToCustomerDetail  } = param;\n    _s();\n    const { currentCustomer , handleCustomerUpdate  } = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_2__.useStateContext)();\n    const { detailList  } = (0,_context_StaticContext__WEBPACK_IMPORTED_MODULE_3__.useStaticContext)();\n    const [customer, setCustomer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(currentCustomer);\n    const [updateItems, setUpdateItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const handleChange = (e)=>{\n        const { name , value  } = e.target;\n        setUpdateItems({\n            ...updateItems,\n            [name]: value\n        });\n        setCustomer({\n            ...customer,\n            [name]: value\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setCustomer(currentCustomer);\n        setUpdateItems({});\n        if (scrollToCustomerDetail) {\n            ref.current.scrollIntoView({\n                behavior: \"smooth\"\n            });\n        }\n    }, [\n        currentCustomer,\n        scrollToCustomerDetail,\n        ref\n    ]);\n    const options_rentType = [\n        {\n            value: 1,\n            label: \"Leanne Graham\"\n        },\n        {\n            value: 2,\n            label: \"Ervin Howell\"\n        },\n        {\n            value: 3,\n            label: \"Leanne Graham\"\n        },\n        {\n            value: 4,\n            label: \"Ervin Howell\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: ref,\n        children: customer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"module-container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    className: \"title\",\n                    children: \"Customer's Detail\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                    lineNumber: 60,\n                    columnNumber: 21\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"detail-contanier\",\n                    children: [\n                        Object.entries(detailList).map((param)=>{\n                            let [key, value] = param;\n                            return key === \"Submission_Date\" || key === \"Last Update Date\" || key === \"UserId\" || key === \"Assistant_name\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                type: \"text\",\n                                value: customer[key],\n                                placeholder: value,\n                                label: value,\n                                name: key,\n                                onChange: handleChange,\n                                readOnly: \"true\"\n                            }, key, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                                lineNumber: 66,\n                                columnNumber: 38\n                            }, undefined) : key === \"Leasing_demand\" || key === \"Assistant_message\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Textarea__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                label: value,\n                                name: key,\n                                placeholder: value,\n                                value: customer[key],\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 42\n                            }, undefined) : key === \"gender\" ? /*#__PURE__*/ ((0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                type: \"text\",\n                                value: customer[key],\n                                placeholder: value,\n                                label: value,\n                                name: key,\n                                onChange: handleChange,\n                                readOnly: \"true\"\n                            }, key, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                                lineNumber: 87,\n                                columnNumber: 46\n                            }, undefined), /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DropDown__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                options: options_rentType,\n                                name: key,\n                                value: customer[key]\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                                lineNumber: 97,\n                                columnNumber: 49\n                            }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                type: \"text\",\n                                value: customer[key],\n                                placeholder: value,\n                                label: value,\n                                name: key,\n                                onChange: handleChange\n                            }, key, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                                lineNumber: 99,\n                                columnNumber: 41\n                            }, undefined);\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"submit-button-block\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                variant: \"success\",\n                                size: \"sm\",\n                                className: \"submit-button\",\n                                onClick: ()=>handleCustomerUpdate(updateItems, customer),\n                                children: \"Update\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                                lineNumber: 113,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                            lineNumber: 112,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                    lineNumber: 62,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n            lineNumber: 59,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n        lineNumber: 57,\n        columnNumber: 9\n    }, undefined);\n}, \"FjH4GImhkili7CBySJRrBfLWE9U=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_2__.useStateContext,\n        _context_StaticContext__WEBPACK_IMPORTED_MODULE_3__.useStaticContext\n    ];\n})), \"FjH4GImhkili7CBySJRrBfLWE9U=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_2__.useStateContext,\n        _context_StaticContext__WEBPACK_IMPORTED_MODULE_3__.useStaticContext\n    ];\n});\n_c1 = CustomerDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomerDetail);\nvar _c, _c1;\n$RefreshReg$(_c, \"CustomerDetail$React.forwardRef\");\n$RefreshReg$(_c1, \"CustomerDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1c3RvbWVyL0N1c3RvbWVyRGV0YWlsLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1A7QUFFaUI7QUFDRTtBQUN4QjtBQUNKO0FBQ0E7QUFFbkMsTUFBTVMsK0JBQWlCVCxHQUFBQSx1REFBZ0IsU0FBQyxRQUEyQlcsTUFBUTtRQUFsQyxFQUFDQyx1QkFBc0IsRUFBQzs7SUFDN0QsTUFBTSxFQUFFQyxnQkFBZSxFQUFFQyxxQkFBb0IsRUFBRSxHQUFHVixzRUFBZUE7SUFDakUsTUFBTSxFQUFFVyxXQUFVLEVBQUUsR0FBR1Ysd0VBQWdCQTtJQUN2QyxNQUFNLENBQUNXLFVBQVVDLFlBQVksR0FBR2hCLCtDQUFRQSxDQUFDWTtJQUN6QyxNQUFNLENBQUNLLGFBQWFDLGVBQWUsR0FBR2xCLCtDQUFRQSxDQUFDLENBQUM7SUFFaEQsTUFBTW1CLGVBQWUsQ0FBQ0MsSUFBTTtRQUN4QixNQUFNLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFLEdBQUdGLEVBQUVHLE1BQU07UUFDaENMLGVBQWU7WUFDWCxHQUFHRCxXQUFXO1lBQ2QsQ0FBQ0ksS0FBSyxFQUFFQztRQUNaO1FBRUFOLFlBQVk7WUFDUixHQUFHRCxRQUFRO1lBQ1gsQ0FBQ00sS0FBSyxFQUFFQztRQUNaO0lBQ0o7SUFFQXJCLGdEQUFTQSxDQUFDLElBQU07UUFDWmUsWUFBWUo7UUFDWk0sZUFBZSxDQUFDO1FBQ2hCLElBQUlQLHdCQUF3QjtZQUN4QkQsSUFBSWMsT0FBTyxDQUFDQyxjQUFjLENBQUM7Z0JBQUVDLFVBQVU7WUFBUztRQUNwRCxDQUFDO0lBQ0wsR0FBRztRQUFDZDtRQUFpQkQ7UUFBd0JEO0tBQUk7SUFFakQsTUFBTWlCLG1CQUFtQjtRQUNyQjtZQUNFTCxPQUFPO1lBQ1BNLE9BQU87UUFDVDtRQUNBO1lBQ0VOLE9BQVE7WUFDUk0sT0FBTztRQUNUO1FBQ0E7WUFDSU4sT0FBTztZQUNQTSxPQUFPO1FBQ1Q7UUFDQTtZQUNFTixPQUFRO1lBQ1JNLE9BQU87UUFDVDtLQUNIO0lBRUgscUJBQ0ksOERBQUNDO1FBQUluQixLQUFLQTtrQkFDTEssMEJBQ0QsOERBQUNjO1lBQUlDLFdBQVU7OzhCQUNQLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBUTs7Ozs7OzhCQUUxQiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3dCQUVIRSxPQUFPQyxPQUFPLENBQUNuQixZQUFZb0IsR0FBRyxDQUFDLFNBQzNCQztnQ0FENEIsQ0FBQ0EsS0FBS2IsTUFBTTttQ0FDeENhLFFBQVEscUJBQXFCQSxRQUFRLHNCQUFzQkEsUUFBUSxZQUFZQSxRQUFRLGlDQUNsRiw4REFBQzlCLG1EQUFVQTtnQ0FDWitCLE1BQUs7Z0NBQ0xkLE9BQU9QLFFBQVEsQ0FBQ29CLElBQUk7Z0NBQ3BCRSxhQUFhZjtnQ0FDYk0sT0FBT047Z0NBQ1BELE1BQU1jO2dDQUNORyxVQUFVbkI7Z0NBRVZvQixVQUFTOytCQURKSjs7Ozs0Q0FJTEEsUUFBUSxvQkFBb0JBLFFBQVEsb0NBQy9CLDhEQUFDN0IsaURBQVFBO2dDQUNOc0IsT0FBT047Z0NBQ1BELE1BQU1jO2dDQUNORSxhQUFhZjtnQ0FDYkEsT0FBT1AsUUFBUSxDQUFDb0IsSUFBSTtnQ0FDcEJHLFVBQVVuQjs7Ozs7NENBR1pnQixRQUFRLHlCQUNMLCtEQUFDOUIsbURBQVVBO2dDQUNSK0IsTUFBSztnQ0FDTGQsT0FBT1AsUUFBUSxDQUFDb0IsSUFBSTtnQ0FDcEJFLGFBQWFmO2dDQUNiTSxPQUFPTjtnQ0FDUEQsTUFBTWM7Z0NBQ05HLFVBQVVuQjtnQ0FFVm9CLFVBQVM7K0JBREpKOzs7O3lEQUdMLDhEQUFDNUIsaURBQVFBO2dDQUFDaUMsU0FBU2I7Z0NBQWtCTixNQUFNYztnQ0FBS2IsT0FBT1AsUUFBUSxDQUFDb0IsSUFBSTs7Ozs7eUNBQWEsa0JBRXpGLDhEQUFDOUIsbURBQVVBO2dDQUNYK0IsTUFBSztnQ0FDTGQsT0FBT1AsUUFBUSxDQUFDb0IsSUFBSTtnQ0FDcEJFLGFBQWFmO2dDQUNiTSxPQUFPTjtnQ0FDUEQsTUFBTWM7Z0NBQ05HLFVBQVVuQjsrQkFDTGdCOzs7O3lDQUVQO3dCQUFEO3NDQUlqQiw4REFBQ047NEJBQUlDLFdBQVU7c0NBQ1gsNEVBQUM1Qiw4REFBTUE7Z0NBQUN1QyxTQUFRO2dDQUFVQyxNQUFLO2dDQUFLWixXQUFVO2dDQUFnQmEsU0FBUyxJQUFNOUIscUJBQXFCSSxhQUFhRjswQ0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9sSjs7UUE3R3NEWixrRUFBZUE7UUFDMUNDLG9FQUFnQkE7Ozs7UUFEV0Qsa0VBQWVBO1FBQzFDQyxvRUFBZ0JBOzs7O0FBOEczQywrREFBZUksY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0N1c3RvbWVyL0N1c3RvbWVyRGV0YWlsLmpzeD81OTQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcblxuaW1wb3J0IHsgdXNlU3RhdGVDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9TdGF0ZUNvbnRleHQnO1xuaW1wb3J0IHsgdXNlU3RhdGljQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQvU3RhdGljQ29udGV4dCc7XG5pbXBvcnQgSW5wdXRGaWVsZCBmcm9tICcuLi9JbnB1dEZpZWxkJztcbmltcG9ydCBUZXh0YXJlYSBmcm9tICcuLi9UZXh0YXJlYSc7XG5pbXBvcnQgRHJvcERvd24gZnJvbSAnLi4vRHJvcERvd24nO1xuXG5jb25zdCBDdXN0b21lckRldGFpbCA9IFJlYWN0LmZvcndhcmRSZWYoKHtzY3JvbGxUb0N1c3RvbWVyRGV0YWlsfSwgcmVmKSA9PiB7XG4gICAgY29uc3QgeyBjdXJyZW50Q3VzdG9tZXIsIGhhbmRsZUN1c3RvbWVyVXBkYXRlIH0gPSB1c2VTdGF0ZUNvbnRleHQoKVxuICAgIGNvbnN0IHsgZGV0YWlsTGlzdCB9ID0gdXNlU3RhdGljQ29udGV4dCgpXG4gICAgY29uc3QgW2N1c3RvbWVyLCBzZXRDdXN0b21lcl0gPSB1c2VTdGF0ZShjdXJyZW50Q3VzdG9tZXIpXG4gICAgY29uc3QgW3VwZGF0ZUl0ZW1zLCBzZXRVcGRhdGVJdGVtc10gPSB1c2VTdGF0ZSh7fSlcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0XG4gICAgICAgIHNldFVwZGF0ZUl0ZW1zKHtcbiAgICAgICAgICAgIC4uLnVwZGF0ZUl0ZW1zLCBcbiAgICAgICAgICAgIFtuYW1lXTogdmFsdWVcbiAgICAgICAgfSlcblxuICAgICAgICBzZXRDdXN0b21lcih7XG4gICAgICAgICAgICAuLi5jdXN0b21lcixcbiAgICAgICAgICAgIFtuYW1lXTogdmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRDdXN0b21lcihjdXJyZW50Q3VzdG9tZXIpXG4gICAgICAgIHNldFVwZGF0ZUl0ZW1zKHt9KVxuICAgICAgICBpZiAoc2Nyb2xsVG9DdXN0b21lckRldGFpbCkge1xuICAgICAgICAgICAgcmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbiAgICAgICAgfVxuICAgIH0sIFtjdXJyZW50Q3VzdG9tZXIsIHNjcm9sbFRvQ3VzdG9tZXJEZXRhaWwsIHJlZl0pO1xuXG4gICAgY29uc3Qgb3B0aW9uc19yZW50VHlwZSA9IFtcbiAgICAgICAgeyBcbiAgICAgICAgICB2YWx1ZTogMSxcbiAgICAgICAgICBsYWJlbDogXCJMZWFubmUgR3JhaGFtXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHZhbHVlOiAgMixcbiAgICAgICAgICBsYWJlbDogXCJFcnZpbiBIb3dlbGxcIlxuICAgICAgICB9LFxuICAgICAgICB7IFxuICAgICAgICAgICAgdmFsdWU6IDMsXG4gICAgICAgICAgICBsYWJlbDogXCJMZWFubmUgR3JhaGFtXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhbHVlOiAgNCxcbiAgICAgICAgICAgIGxhYmVsOiBcIkVydmluIEhvd2VsbFwiXG4gICAgICAgICAgfVxuICAgICAgXTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgcmVmPXtyZWZ9PlxuICAgICAgICAgICAge2N1c3RvbWVyICYmIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2R1bGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZVwiPkN1c3RvbWVyJ3MgRGV0YWlsPC9oND5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWwtY29udGFuaWVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHsgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhkZXRhaWxMaXN0KS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9PT0gJ1N1Ym1pc3Npb25fRGF0ZScgfHwga2V5ID09PSAnTGFzdCBVcGRhdGUgRGF0ZScgfHwga2V5ID09PSAnVXNlcklkJyB8fCBrZXkgPT09ICdBc3Npc3RhbnRfbmFtZScgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxJbnB1dEZpZWxkIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y3VzdG9tZXJba2V5XX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PSd0cnVlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID09PSAnTGVhc2luZ19kZW1hbmQnIHx8IGtleSA9PT0gJ0Fzc2lzdGFudF9tZXNzYWdlJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxUZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y3VzdG9tZXJba2V5XX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvVGV4dGFyZWE+KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoga2V5ID09PSAnZ2VuZGVyJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8SW5wdXRGaWVsZCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2N1c3RvbWVyW2tleV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT0ndHJ1ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3BEb3duIG9wdGlvbnM9e29wdGlvbnNfcmVudFR5cGV9IG5hbWU9e2tleX0gdmFsdWU9e2N1c3RvbWVyW2tleV19PjwvRHJvcERvd24+KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0RmllbGQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjdXN0b21lcltrZXldfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtaXQtYnV0dG9uLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzdWNjZXNzXCIgc2l6ZT1cInNtXCIgY2xhc3NOYW1lPVwic3VibWl0LWJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUN1c3RvbWVyVXBkYXRlKHVwZGF0ZUl0ZW1zLCBjdXN0b21lcil9PlVwZGF0ZTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tZXJEZXRhaWw7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCdXR0b24iLCJ1c2VTdGF0ZUNvbnRleHQiLCJ1c2VTdGF0aWNDb250ZXh0IiwiSW5wdXRGaWVsZCIsIlRleHRhcmVhIiwiRHJvcERvd24iLCJDdXN0b21lckRldGFpbCIsImZvcndhcmRSZWYiLCJyZWYiLCJzY3JvbGxUb0N1c3RvbWVyRGV0YWlsIiwiY3VycmVudEN1c3RvbWVyIiwiaGFuZGxlQ3VzdG9tZXJVcGRhdGUiLCJkZXRhaWxMaXN0IiwiY3VzdG9tZXIiLCJzZXRDdXN0b21lciIsInVwZGF0ZUl0ZW1zIiwic2V0VXBkYXRlSXRlbXMiLCJoYW5kbGVDaGFuZ2UiLCJlIiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJvcHRpb25zX3JlbnRUeXBlIiwibGFiZWwiLCJkaXYiLCJjbGFzc05hbWUiLCJoNCIsIk9iamVjdCIsImVudHJpZXMiLCJtYXAiLCJrZXkiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInJlYWRPbmx5Iiwib3B0aW9ucyIsInZhcmlhbnQiLCJzaXplIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Customer/CustomerDetail.jsx\n"));

/***/ })

});