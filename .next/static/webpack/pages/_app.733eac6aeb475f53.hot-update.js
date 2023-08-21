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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/StateContext */ \"./context/StateContext.js\");\n/* harmony import */ var _context_StaticContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/StaticContext */ \"./context/StaticContext.js\");\n/* harmony import */ var _InputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../InputField */ \"./components/InputField.jsx\");\n/* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Textarea */ \"./components/Textarea.jsx\");\n/* harmony import */ var _DropDown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../DropDown */ \"./components/DropDown.jsx\");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst CustomerDetail = /*#__PURE__*/ _s(react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(_c = _s((param, ref)=>{\n    let { scrollToCustomerDetail  } = param;\n    _s();\n    const { currentCustomer , handleCustomerUpdate  } = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_2__.useStateContext)();\n    const { detailList  } = (0,_context_StaticContext__WEBPACK_IMPORTED_MODULE_3__.useStaticContext)();\n    const [customer, setCustomer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(currentCustomer);\n    const [updateItems, setUpdateItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const handleChange = (e)=>{\n        const { name , value  } = e.target;\n        setUpdateItems({\n            ...updateItems,\n            [name]: value\n        });\n        setCustomer({\n            ...customer,\n            [name]: value\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setCustomer(currentCustomer);\n        setUpdateItems({});\n        if (scrollToCustomerDetail) {\n            ref.current.scrollIntoView({\n                behavior: \"smooth\"\n            });\n        }\n    }, [\n        currentCustomer,\n        scrollToCustomerDetail,\n        ref\n    ]);\n    const options_rentType = [\n        {\n            value: 1,\n            label: \"Leanne Graham\"\n        },\n        {\n            value: 2,\n            label: \"Ervin Howell\"\n        },\n        {\n            value: 3,\n            label: \"Leanne Graham\"\n        },\n        {\n            value: 4,\n            label: \"Ervin Howell\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: ref,\n        children: customer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"module-container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    className: \"title\",\n                    children: \"Customer's Detail\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                    lineNumber: 60,\n                    columnNumber: 21\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"detail-contanier\",\n                    children: [\n                        Object.entries(detailList).map((param)=>{\n                            let [key, value] = param;\n                            return key === \"Submission_Date\" || key === \"Last Update Date\" || key === \"UserId\" || key === \"Assistant_name\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                type: \"text\",\n                                value: customer[key],\n                                placeholder: value,\n                                label: value,\n                                name: key,\n                                onChange: handleChange,\n                                readOnly: \"true\"\n                            }, key, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                                lineNumber: 66,\n                                columnNumber: 38\n                            }, undefined) : key === \"Leasing_demand\" || key === \"Assistant_message\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Textarea__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                label: value,\n                                name: key,\n                                placeholder: value,\n                                value: customer[key],\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 42\n                            }, undefined) : key === \"gender\" || key === \"几人入住？\" || key === \"City\" || key === \"rent_duration\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Select, {\n                                className: \"dropdown-select\",\n                                size: \"sm\",\n                                onChange: handleSelect,\n                                children: Object.entries(options_rentType).map((param)=>/*#__PURE__*/ {\n                                    let [key, value] = param;\n                                    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: customer[key],\n                                        children: \"All\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 57\n                                    }, undefined);\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                                lineNumber: 88,\n                                columnNumber: 49\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                type: \"text\",\n                                value: customer[key],\n                                placeholder: value,\n                                label: value,\n                                name: key,\n                                onChange: handleChange\n                            }, key, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                                lineNumber: 97,\n                                columnNumber: 41\n                            }, undefined);\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"submit-button-block\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                variant: \"success\",\n                                size: \"sm\",\n                                className: \"submit-button\",\n                                onClick: ()=>handleCustomerUpdate(updateItems, customer),\n                                children: \"Update\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                                lineNumber: 111,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                            lineNumber: 110,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                    lineNumber: 62,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n            lineNumber: 59,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n        lineNumber: 57,\n        columnNumber: 9\n    }, undefined);\n}, \"FjH4GImhkili7CBySJRrBfLWE9U=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_2__.useStateContext,\n        _context_StaticContext__WEBPACK_IMPORTED_MODULE_3__.useStaticContext\n    ];\n})), \"FjH4GImhkili7CBySJRrBfLWE9U=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_2__.useStateContext,\n        _context_StaticContext__WEBPACK_IMPORTED_MODULE_3__.useStaticContext\n    ];\n});\n_c1 = CustomerDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomerDetail);\nvar _c, _c1;\n$RefreshReg$(_c, \"CustomerDetail$React.forwardRef\");\n$RefreshReg$(_c1, \"CustomerDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1c3RvbWVyL0N1c3RvbWVyRGV0YWlsLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNQO0FBRWlCO0FBQ0U7QUFDeEI7QUFDSjtBQUNBO0FBQ0s7QUFDeEMsTUFBTVUsK0JBQWlCVixHQUFBQSx1REFBZ0IsU0FBQyxRQUEyQlksTUFBUTtRQUFsQyxFQUFDQyx1QkFBc0IsRUFBQzs7SUFDN0QsTUFBTSxFQUFFQyxnQkFBZSxFQUFFQyxxQkFBb0IsRUFBRSxHQUFHWCxzRUFBZUE7SUFDakUsTUFBTSxFQUFFWSxXQUFVLEVBQUUsR0FBR1gsd0VBQWdCQTtJQUN2QyxNQUFNLENBQUNZLFVBQVVDLFlBQVksR0FBR2pCLCtDQUFRQSxDQUFDYTtJQUN6QyxNQUFNLENBQUNLLGFBQWFDLGVBQWUsR0FBR25CLCtDQUFRQSxDQUFDLENBQUM7SUFFaEQsTUFBTW9CLGVBQWUsQ0FBQ0MsSUFBTTtRQUN4QixNQUFNLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFLEdBQUdGLEVBQUVHLE1BQU07UUFDaENMLGVBQWU7WUFDWCxHQUFHRCxXQUFXO1lBQ2QsQ0FBQ0ksS0FBSyxFQUFFQztRQUNaO1FBRUFOLFlBQVk7WUFDUixHQUFHRCxRQUFRO1lBQ1gsQ0FBQ00sS0FBSyxFQUFFQztRQUNaO0lBQ0o7SUFFQXRCLGdEQUFTQSxDQUFDLElBQU07UUFDWmdCLFlBQVlKO1FBQ1pNLGVBQWUsQ0FBQztRQUNoQixJQUFJUCx3QkFBd0I7WUFDeEJELElBQUljLE9BQU8sQ0FBQ0MsY0FBYyxDQUFDO2dCQUFFQyxVQUFVO1lBQVM7UUFDcEQsQ0FBQztJQUNMLEdBQUc7UUFBQ2Q7UUFBaUJEO1FBQXdCRDtLQUFJO0lBRWpELE1BQU1pQixtQkFBbUI7UUFDckI7WUFDRUwsT0FBTztZQUNQTSxPQUFPO1FBQ1Q7UUFDQTtZQUNFTixPQUFRO1lBQ1JNLE9BQU87UUFDVDtRQUNBO1lBQ0lOLE9BQU87WUFDUE0sT0FBTztRQUNUO1FBQ0E7WUFDRU4sT0FBUTtZQUNSTSxPQUFPO1FBQ1Q7S0FDSDtJQUVILHFCQUNJLDhEQUFDQztRQUFJbkIsS0FBS0E7a0JBQ0xLLDBCQUNELDhEQUFDYztZQUFJQyxXQUFVOzs4QkFDUCw4REFBQ0M7b0JBQUdELFdBQVU7OEJBQVE7Ozs7Ozs4QkFFMUIsOERBQUNEO29CQUFJQyxXQUFVOzt3QkFFSEUsT0FBT0MsT0FBTyxDQUFDbkIsWUFBWW9CLEdBQUcsQ0FBQyxTQUMzQkM7Z0NBRDRCLENBQUNBLEtBQUtiLE1BQU07bUNBQ3hDYSxRQUFRLHFCQUFxQkEsUUFBUSxzQkFBc0JBLFFBQVEsWUFBWUEsUUFBUSxpQ0FDbEYsOERBQUMvQixtREFBVUE7Z0NBQ1pnQyxNQUFLO2dDQUNMZCxPQUFPUCxRQUFRLENBQUNvQixJQUFJO2dDQUNwQkUsYUFBYWY7Z0NBQ2JNLE9BQU9OO2dDQUNQRCxNQUFNYztnQ0FDTkcsVUFBVW5CO2dDQUVWb0IsVUFBUzsrQkFESko7Ozs7NENBSUxBLFFBQVEsb0JBQW9CQSxRQUFRLG9DQUMvQiw4REFBQzlCLGlEQUFRQTtnQ0FDTnVCLE9BQU9OO2dDQUNQRCxNQUFNYztnQ0FDTkUsYUFBYWY7Z0NBQ2JBLE9BQU9QLFFBQVEsQ0FBQ29CLElBQUk7Z0NBQ3BCRyxVQUFVbkI7Ozs7OzRDQUdaZ0IsUUFBUSxZQUFVQSxRQUFRLFdBQVNBLFFBQVEsVUFBUUEsUUFBUSxnQ0FFckQsOERBQUM1QixtRUFBVztnQ0FBQ3VCLFdBQVU7Z0NBQWtCVyxNQUFLO2dDQUFLSCxVQUFVSTswQ0FDeERWLE9BQU9DLE9BQU8sQ0FBQ04sa0JBQWtCTyxHQUFHLENBQUMsdUJBQ2xDO3dDQURtQyxDQUFDQyxLQUFLYixNQUFNOzJDQUMvQyw4REFBQ3FCO3dDQUFPckIsT0FBT1AsUUFBUSxDQUFDb0IsSUFBSTtrREFBRTs7Ozs7O2dDQUFXOzs7OzswREFPekQsOERBQUMvQixtREFBVUE7Z0NBQ1hnQyxNQUFLO2dDQUNMZCxPQUFPUCxRQUFRLENBQUNvQixJQUFJO2dDQUNwQkUsYUFBYWY7Z0NBQ2JNLE9BQU9OO2dDQUNQRCxNQUFNYztnQ0FDTkcsVUFBVW5COytCQUNMZ0I7Ozs7eUNBRVA7d0JBQUQ7c0NBSWpCLDhEQUFDTjs0QkFBSUMsV0FBVTtzQ0FDWCw0RUFBQzdCLDhEQUFNQTtnQ0FBQzJDLFNBQVE7Z0NBQVVILE1BQUs7Z0NBQUtYLFdBQVU7Z0NBQWdCZSxTQUFTLElBQU1oQyxxQkFBcUJJLGFBQWFGOzBDQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2xKOztRQTNHc0RiLGtFQUFlQTtRQUMxQ0Msb0VBQWdCQTs7OztRQURXRCxrRUFBZUE7UUFDMUNDLG9FQUFnQkE7Ozs7QUE0RzNDLCtEQUFlSyxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ3VzdG9tZXIvQ3VzdG9tZXJEZXRhaWwuanN4PzU5NDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZUNvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0L1N0YXRlQ29udGV4dCc7XG5pbXBvcnQgeyB1c2VTdGF0aWNDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9TdGF0aWNDb250ZXh0JztcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gJy4uL0lucHV0RmllbGQnO1xuaW1wb3J0IFRleHRhcmVhIGZyb20gJy4uL1RleHRhcmVhJztcbmltcG9ydCBEcm9wRG93biBmcm9tICcuLi9Ecm9wRG93bic7XG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XG5jb25zdCBDdXN0b21lckRldGFpbCA9IFJlYWN0LmZvcndhcmRSZWYoKHtzY3JvbGxUb0N1c3RvbWVyRGV0YWlsfSwgcmVmKSA9PiB7XG4gICAgY29uc3QgeyBjdXJyZW50Q3VzdG9tZXIsIGhhbmRsZUN1c3RvbWVyVXBkYXRlIH0gPSB1c2VTdGF0ZUNvbnRleHQoKVxuICAgIGNvbnN0IHsgZGV0YWlsTGlzdCB9ID0gdXNlU3RhdGljQ29udGV4dCgpXG4gICAgY29uc3QgW2N1c3RvbWVyLCBzZXRDdXN0b21lcl0gPSB1c2VTdGF0ZShjdXJyZW50Q3VzdG9tZXIpXG4gICAgY29uc3QgW3VwZGF0ZUl0ZW1zLCBzZXRVcGRhdGVJdGVtc10gPSB1c2VTdGF0ZSh7fSlcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0XG4gICAgICAgIHNldFVwZGF0ZUl0ZW1zKHtcbiAgICAgICAgICAgIC4uLnVwZGF0ZUl0ZW1zLCBcbiAgICAgICAgICAgIFtuYW1lXTogdmFsdWVcbiAgICAgICAgfSlcblxuICAgICAgICBzZXRDdXN0b21lcih7XG4gICAgICAgICAgICAuLi5jdXN0b21lcixcbiAgICAgICAgICAgIFtuYW1lXTogdmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRDdXN0b21lcihjdXJyZW50Q3VzdG9tZXIpXG4gICAgICAgIHNldFVwZGF0ZUl0ZW1zKHt9KVxuICAgICAgICBpZiAoc2Nyb2xsVG9DdXN0b21lckRldGFpbCkge1xuICAgICAgICAgICAgcmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbiAgICAgICAgfVxuICAgIH0sIFtjdXJyZW50Q3VzdG9tZXIsIHNjcm9sbFRvQ3VzdG9tZXJEZXRhaWwsIHJlZl0pO1xuXG4gICAgY29uc3Qgb3B0aW9uc19yZW50VHlwZSA9IFtcbiAgICAgICAgeyBcbiAgICAgICAgICB2YWx1ZTogMSxcbiAgICAgICAgICBsYWJlbDogXCJMZWFubmUgR3JhaGFtXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHZhbHVlOiAgMixcbiAgICAgICAgICBsYWJlbDogXCJFcnZpbiBIb3dlbGxcIlxuICAgICAgICB9LFxuICAgICAgICB7IFxuICAgICAgICAgICAgdmFsdWU6IDMsXG4gICAgICAgICAgICBsYWJlbDogXCJMZWFubmUgR3JhaGFtXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhbHVlOiAgNCxcbiAgICAgICAgICAgIGxhYmVsOiBcIkVydmluIEhvd2VsbFwiXG4gICAgICAgICAgfVxuICAgICAgXTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgcmVmPXtyZWZ9PlxuICAgICAgICAgICAge2N1c3RvbWVyICYmIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2R1bGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZVwiPkN1c3RvbWVyJ3MgRGV0YWlsPC9oND5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWwtY29udGFuaWVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHsgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhkZXRhaWxMaXN0KS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9PT0gJ1N1Ym1pc3Npb25fRGF0ZScgfHwga2V5ID09PSAnTGFzdCBVcGRhdGUgRGF0ZScgfHwga2V5ID09PSAnVXNlcklkJyB8fCBrZXkgPT09ICdBc3Npc3RhbnRfbmFtZScgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxJbnB1dEZpZWxkIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y3VzdG9tZXJba2V5XX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PSd0cnVlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID09PSAnTGVhc2luZ19kZW1hbmQnIHx8IGtleSA9PT0gJ0Fzc2lzdGFudF9tZXNzYWdlJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxUZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y3VzdG9tZXJba2V5XX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvVGV4dGFyZWE+KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoga2V5ID09PSAnZ2VuZGVyJ3x8a2V5ID09PSAn5Yeg5Lq65YWl5L2P77yfJ3x8a2V5ID09PSAnQ2l0eSd8fGtleSA9PT0gJ3JlbnRfZHVyYXRpb24nID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uU2VsZWN0IGNsYXNzTmFtZT1cImRyb3Bkb3duLXNlbGVjdFwiIHNpemU9XCJzbVwiIG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3R9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyhvcHRpb25zX3JlbnRUeXBlKS5tYXAoKFtrZXksIHZhbHVlXSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Y3VzdG9tZXJba2V5XX0+QWxsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uU2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy88RHJvcERvd24gb3B0aW9ucz17b3B0aW9uc19yZW50VHlwZX0gbmFtZT17a2V5fSB2YWx1ZT17Y3VzdG9tZXJba2V5XX0+PC9Ecm9wRG93bj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0RmllbGQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjdXN0b21lcltrZXldfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtaXQtYnV0dG9uLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzdWNjZXNzXCIgc2l6ZT1cInNtXCIgY2xhc3NOYW1lPVwic3VibWl0LWJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUN1c3RvbWVyVXBkYXRlKHVwZGF0ZUl0ZW1zLCBjdXN0b21lcil9PlVwZGF0ZTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tZXJEZXRhaWw7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCdXR0b24iLCJ1c2VTdGF0ZUNvbnRleHQiLCJ1c2VTdGF0aWNDb250ZXh0IiwiSW5wdXRGaWVsZCIsIlRleHRhcmVhIiwiRHJvcERvd24iLCJGb3JtIiwiQ3VzdG9tZXJEZXRhaWwiLCJmb3J3YXJkUmVmIiwicmVmIiwic2Nyb2xsVG9DdXN0b21lckRldGFpbCIsImN1cnJlbnRDdXN0b21lciIsImhhbmRsZUN1c3RvbWVyVXBkYXRlIiwiZGV0YWlsTGlzdCIsImN1c3RvbWVyIiwic2V0Q3VzdG9tZXIiLCJ1cGRhdGVJdGVtcyIsInNldFVwZGF0ZUl0ZW1zIiwiaGFuZGxlQ2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwib3B0aW9uc19yZW50VHlwZSIsImxhYmVsIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDQiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwia2V5IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJyZWFkT25seSIsIlNlbGVjdCIsInNpemUiLCJoYW5kbGVTZWxlY3QiLCJvcHRpb24iLCJ2YXJpYW50Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Customer/CustomerDetail.jsx\n"));

/***/ })

});