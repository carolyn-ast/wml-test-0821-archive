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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/StateContext */ \"./context/StateContext.js\");\n/* harmony import */ var _context_StaticContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/StaticContext */ \"./context/StaticContext.js\");\n/* harmony import */ var _InputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../InputField */ \"./components/InputField.jsx\");\n/* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Textarea */ \"./components/Textarea.jsx\");\n/* harmony import */ var _DropDown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../DropDown */ \"./components/DropDown.jsx\");\n/* harmony import */ var _mui_x_date_pickers_DateTimePicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/x-date-pickers/DateTimePicker */ \"./node_modules/@mui/x-date-pickers/DateTimePicker/index.js\");\n/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/x-date-pickers/LocalizationProvider */ \"./node_modules/@mui/x-date-pickers/LocalizationProvider/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst CustomerDetail = /*#__PURE__*/ _s(react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(_c = _s((param, ref)=>{\n    let { scrollToCustomerDetail  } = param;\n    _s();\n    const { currentCustomer , handleCustomerUpdate  } = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_2__.useStateContext)();\n    const { detailList , options_city , options_gender , options_rentType  } = (0,_context_StaticContext__WEBPACK_IMPORTED_MODULE_3__.useStaticContext)();\n    const [customer, setCustomer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(currentCustomer);\n    const [updateItems, setUpdateItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [rentTime, setRentTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const handleChange = (e)=>{\n        const { name , value  } = e.target;\n        setUpdateItems({\n            ...updateItems,\n            [name]: value\n        });\n        setCustomer({\n            ...customer,\n            [name]: value\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setCustomer(currentCustomer);\n        setUpdateItems({});\n        if (scrollToCustomerDetail) {\n            ref.current.scrollIntoView({\n                behavior: \"smooth\"\n            });\n        }\n    }, [\n        currentCustomer,\n        scrollToCustomerDetail,\n        ref\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: ref,\n        children: customer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"module-container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    className: \"title\",\n                    children: \"Customer's Detail\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 21\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"detail-contanier\",\n                    children: [\n                        Object.entries(detailList).map((param)=>{\n                            let [key, value] = param;\n                            return key === \"Submission_Date\" || key === \"Last Update Date\" || key === \"UserId\" || key === \"Assistant_name\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                type: \"text\",\n                                value: customer[key],\n                                placeholder: value,\n                                label: value,\n                                name: key,\n                                onChange: handleChange,\n                                readOnly: \"true\"\n                            }, key, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 38\n                            }, undefined) : key === \"Leasing_demand\" || key === \"Assistant_message\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Textarea__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                label: value,\n                                name: key,\n                                placeholder: value,\n                                value: customer[key],\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                                lineNumber: 66,\n                                columnNumber: 42\n                            }, undefined) : key === \"City\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DropDown__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                label: value,\n                                options: options_city,\n                                name: key,\n                                value: customer[key],\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 49\n                            }, undefined) : key === \"gender\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DropDown__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                label: value,\n                                options: options_gender,\n                                name: key,\n                                value: customer[key],\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                                lineNumber: 81,\n                                columnNumber: 49\n                            }, undefined) : key === \"rent_type\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DropDown__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                label: value,\n                                options: options_rentType,\n                                name: key,\n                                value: customer[key],\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                                lineNumber: 86,\n                                columnNumber: 49\n                            }, undefined) : key === \"rent_date\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_7__.LocalizationProvider, {\n                                dateAdapter: AdapterDayjs,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_date_pickers_DateTimePicker__WEBPACK_IMPORTED_MODULE_8__.DateTimePicker, {\n                                    value: customer[key],\n                                    onChange: handleChange\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 46\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                                lineNumber: 91,\n                                columnNumber: 45\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                type: \"text\",\n                                value: customer[key],\n                                placeholder: value,\n                                label: value,\n                                name: key,\n                                onChange: handleChange\n                            }, key, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                                lineNumber: 100,\n                                columnNumber: 41\n                            }, undefined);\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"submit-button-block\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                variant: \"success\",\n                                size: \"sm\",\n                                className: \"submit-button\",\n                                onClick: ()=>handleCustomerUpdate(updateItems, customer),\n                                children: \"Update\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                                lineNumber: 114,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                            lineNumber: 113,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n            lineNumber: 47,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n        lineNumber: 45,\n        columnNumber: 9\n    }, undefined);\n}, \"Yei4zclXbospbLo+APQJ2EFvqAU=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_2__.useStateContext,\n        _context_StaticContext__WEBPACK_IMPORTED_MODULE_3__.useStaticContext\n    ];\n})), \"Yei4zclXbospbLo+APQJ2EFvqAU=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_2__.useStateContext,\n        _context_StaticContext__WEBPACK_IMPORTED_MODULE_3__.useStaticContext\n    ];\n});\n_c1 = CustomerDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomerDetail);\nvar _c, _c1;\n$RefreshReg$(_c, \"CustomerDetail$React.forwardRef\");\n$RefreshReg$(_c1, \"CustomerDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1c3RvbWVyL0N1c3RvbWVyRGV0YWlsLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDUDtBQUVpQjtBQUNFO0FBQ3hCO0FBQ0o7QUFDQTtBQUNpQztBQUNZO0FBRWhGLE1BQU1XLCtCQUFpQlgsR0FBQUEsdURBQWdCLFNBQUMsUUFBMkJhLE1BQVE7UUFBbEMsRUFBQ0MsdUJBQXNCLEVBQUM7O0lBQzdELE1BQU0sRUFBRUMsZ0JBQWUsRUFBRUMscUJBQW9CLEVBQUUsR0FBR1osc0VBQWVBO0lBQ2pFLE1BQU0sRUFBRWEsV0FBVSxFQUFDQyxhQUFZLEVBQzNCQyxlQUFjLEVBQ2RDLGlCQUFnQixFQUFFLEdBQUdmLHdFQUFnQkE7SUFDekMsTUFBTSxDQUFDZ0IsVUFBVUMsWUFBWSxHQUFHckIsK0NBQVFBLENBQUNjO0lBQ3pDLE1BQU0sQ0FBQ1EsYUFBYUMsZUFBZSxHQUFHdkIsK0NBQVFBLENBQUMsQ0FBQztJQUNoRCxNQUFNLENBQUN3QixVQUFVQyxZQUFZLEdBQUd6QiwrQ0FBUUE7SUFFeEMsTUFBTTBCLGVBQWUsQ0FBQ0MsSUFBTTtRQUN4QixNQUFNLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFLEdBQUdGLEVBQUVHLE1BQU07UUFDaENQLGVBQWU7WUFDWCxHQUFHRCxXQUFXO1lBQ2QsQ0FBQ00sS0FBSyxFQUFFQztRQUNaO1FBRUFSLFlBQVk7WUFDUixHQUFHRCxRQUFRO1lBQ1gsQ0FBQ1EsS0FBSyxFQUFFQztRQUNaO0lBQ0o7SUFHQTVCLGdEQUFTQSxDQUFDLElBQU07UUFDWm9CLFlBQVlQO1FBQ1pTLGVBQWUsQ0FBQztRQUNoQixJQUFJVix3QkFBd0I7WUFDeEJELElBQUltQixPQUFPLENBQUNDLGNBQWMsQ0FBQztnQkFBRUMsVUFBVTtZQUFTO1FBQ3BELENBQUM7SUFDTCxHQUFHO1FBQUNuQjtRQUFpQkQ7UUFBd0JEO0tBQUk7SUFHakQscUJBQ0ksOERBQUNzQjtRQUFJdEIsS0FBS0E7a0JBQ0xRLDBCQUNELDhEQUFDYztZQUFJQyxXQUFVOzs4QkFDUCw4REFBQ0M7b0JBQUdELFdBQVU7OEJBQVE7Ozs7Ozs4QkFFMUIsOERBQUNEO29CQUFJQyxXQUFVOzt3QkFFSEUsT0FBT0MsT0FBTyxDQUFDdEIsWUFBWXVCLEdBQUcsQ0FBQyxTQUMzQkM7Z0NBRDRCLENBQUNBLEtBQUtYLE1BQU07bUNBQ3hDVyxRQUFRLHFCQUFxQkEsUUFBUSxzQkFBc0JBLFFBQVEsWUFBWUEsUUFBUSxpQ0FDbEYsOERBQUNuQyxtREFBVUE7Z0NBQ1pvQyxNQUFLO2dDQUNMWixPQUFPVCxRQUFRLENBQUNvQixJQUFJO2dDQUNwQkUsYUFBYWI7Z0NBQ2JjLE9BQU9kO2dDQUNQRCxNQUFNWTtnQ0FDTkksVUFBVWxCO2dDQUVWbUIsVUFBUzsrQkFESkw7Ozs7NENBSUxBLFFBQVEsb0JBQW9CQSxRQUFRLG9DQUMvQiw4REFBQ2xDLGlEQUFRQTtnQ0FDTnFDLE9BQU9kO2dDQUNQRCxNQUFNWTtnQ0FDTkUsYUFBYWI7Z0NBQ2JBLE9BQU9ULFFBQVEsQ0FBQ29CLElBQUk7Z0NBQ3BCSSxVQUFVbEI7Ozs7OzRDQUdaYyxRQUFRLHVCQUVGLDhEQUFDakMsaURBQVFBO2dDQUFDb0MsT0FBT2Q7Z0NBQU9pQixTQUFTN0I7Z0NBQWNXLE1BQU1ZO2dDQUFLWCxPQUFPVCxRQUFRLENBQUNvQixJQUFJO2dDQUFFSSxVQUFVbEI7Ozs7OzRDQUc5RmMsUUFBUSx5QkFFSiw4REFBQ2pDLGlEQUFRQTtnQ0FBQ29DLE9BQU9kO2dDQUFPaUIsU0FBUzVCO2dDQUFnQlUsTUFBTVk7Z0NBQUtYLE9BQU9ULFFBQVEsQ0FBQ29CLElBQUk7Z0NBQUVJLFVBQVVsQjs7Ozs7NENBR2hHYyxRQUFRLDRCQUVKLDhEQUFDakMsaURBQVFBO2dDQUFDb0MsT0FBT2Q7Z0NBQU9pQixTQUFTM0I7Z0NBQWtCUyxNQUFNWTtnQ0FBS1gsT0FBT1QsUUFBUSxDQUFDb0IsSUFBSTtnQ0FBRUksVUFBVWxCOzs7Ozs0Q0FHbEdjLFFBQVEsNEJBRVIsOERBQUMvQiwwRkFBb0JBO2dDQUFDc0MsYUFBYUM7MENBQ2xDLDRFQUFDeEMsOEVBQWNBO29DQUNoQnFCLE9BQU9ULFFBQVEsQ0FBQ29CLElBQUk7b0NBQ3BCSSxVQUFVbEI7Ozs7Ozs7Ozs7MERBTWQsOERBQUNyQixtREFBVUE7Z0NBQ1hvQyxNQUFLO2dDQUNMWixPQUFPVCxRQUFRLENBQUNvQixJQUFJO2dDQUNwQkUsYUFBYWI7Z0NBQ2JjLE9BQU9kO2dDQUNQRCxNQUFNWTtnQ0FDTkksVUFBVWxCOytCQUNMYzs7Ozt5Q0FFUDt3QkFBRDtzQ0FJakIsOERBQUNOOzRCQUFJQyxXQUFVO3NDQUNYLDRFQUFDakMsOERBQU1BO2dDQUFDK0MsU0FBUTtnQ0FBVUMsTUFBSztnQ0FBS2YsV0FBVTtnQ0FBZ0JnQixTQUFTLElBQU1wQyxxQkFBcUJPLGFBQWFGOzBDQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2xKOztRQTVHc0RqQixrRUFBZUE7UUFHeENDLG9FQUFnQkE7Ozs7UUFIU0Qsa0VBQWVBO1FBR3hDQyxvRUFBZ0JBOzs7O0FBMkc3QywrREFBZU0sY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0N1c3RvbWVyL0N1c3RvbWVyRGV0YWlsLmpzeD81OTQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcblxuaW1wb3J0IHsgdXNlU3RhdGVDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9TdGF0ZUNvbnRleHQnO1xuaW1wb3J0IHsgdXNlU3RhdGljQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQvU3RhdGljQ29udGV4dCc7XG5pbXBvcnQgSW5wdXRGaWVsZCBmcm9tICcuLi9JbnB1dEZpZWxkJztcbmltcG9ydCBUZXh0YXJlYSBmcm9tICcuLi9UZXh0YXJlYSc7XG5pbXBvcnQgRHJvcERvd24gZnJvbSAnLi4vRHJvcERvd24nO1xuaW1wb3J0IHsgRGF0ZVRpbWVQaWNrZXIgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL0RhdGVUaW1lUGlja2VyJztcbmltcG9ydCB7IExvY2FsaXphdGlvblByb3ZpZGVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9Mb2NhbGl6YXRpb25Qcm92aWRlcic7XG5cbmNvbnN0IEN1c3RvbWVyRGV0YWlsID0gUmVhY3QuZm9yd2FyZFJlZigoe3Njcm9sbFRvQ3VzdG9tZXJEZXRhaWx9LCByZWYpID0+IHtcbiAgICBjb25zdCB7IGN1cnJlbnRDdXN0b21lciwgaGFuZGxlQ3VzdG9tZXJVcGRhdGUgfSA9IHVzZVN0YXRlQ29udGV4dCgpXG4gICAgY29uc3QgeyBkZXRhaWxMaXN0LG9wdGlvbnNfY2l0eSxcbiAgICAgICAgb3B0aW9uc19nZW5kZXIsXG4gICAgICAgIG9wdGlvbnNfcmVudFR5cGUgfSA9IHVzZVN0YXRpY0NvbnRleHQoKVxuICAgIGNvbnN0IFtjdXN0b21lciwgc2V0Q3VzdG9tZXJdID0gdXNlU3RhdGUoY3VycmVudEN1c3RvbWVyKVxuICAgIGNvbnN0IFt1cGRhdGVJdGVtcywgc2V0VXBkYXRlSXRlbXNdID0gdXNlU3RhdGUoe30pXG4gICAgY29uc3QgW3JlbnRUaW1lLCBzZXRSZW50VGltZV0gPSB1c2VTdGF0ZSgpO1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXRcbiAgICAgICAgc2V0VXBkYXRlSXRlbXMoe1xuICAgICAgICAgICAgLi4udXBkYXRlSXRlbXMsIFxuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZVxuICAgICAgICB9KVxuXG4gICAgICAgIHNldEN1c3RvbWVyKHtcbiAgICAgICAgICAgIC4uLmN1c3RvbWVyLFxuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0Q3VzdG9tZXIoY3VycmVudEN1c3RvbWVyKVxuICAgICAgICBzZXRVcGRhdGVJdGVtcyh7fSlcbiAgICAgICAgaWYgKHNjcm9sbFRvQ3VzdG9tZXJEZXRhaWwpIHtcbiAgICAgICAgICAgIHJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pXG4gICAgICAgIH1cbiAgICB9LCBbY3VycmVudEN1c3RvbWVyLCBzY3JvbGxUb0N1c3RvbWVyRGV0YWlsLCByZWZdKTtcblxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgcmVmPXtyZWZ9PlxuICAgICAgICAgICAge2N1c3RvbWVyICYmIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2R1bGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZVwiPkN1c3RvbWVyJ3MgRGV0YWlsPC9oND5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWwtY29udGFuaWVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHsgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhkZXRhaWxMaXN0KS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9PT0gJ1N1Ym1pc3Npb25fRGF0ZScgfHwga2V5ID09PSAnTGFzdCBVcGRhdGUgRGF0ZScgfHwga2V5ID09PSAnVXNlcklkJyB8fCBrZXkgPT09ICdBc3Npc3RhbnRfbmFtZScgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxJbnB1dEZpZWxkIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y3VzdG9tZXJba2V5XX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PSd0cnVlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID09PSAnTGVhc2luZ19kZW1hbmQnIHx8IGtleSA9PT0gJ0Fzc2lzdGFudF9tZXNzYWdlJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxUZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y3VzdG9tZXJba2V5XX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvVGV4dGFyZWE+KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoga2V5ID09PSAnQ2l0eScgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcERvd24gbGFiZWw9e3ZhbHVlfSBvcHRpb25zPXtvcHRpb25zX2NpdHl9IG5hbWU9e2tleX0gdmFsdWU9e2N1c3RvbWVyW2tleV19IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PjwvRHJvcERvd24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPT09ICdnZW5kZXInID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3BEb3duIGxhYmVsPXt2YWx1ZX0gb3B0aW9ucz17b3B0aW9uc19nZW5kZXJ9IG5hbWU9e2tleX0gdmFsdWU9e2N1c3RvbWVyW2tleV19IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PjwvRHJvcERvd24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPT09ICdyZW50X3R5cGUnID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3BEb3duIGxhYmVsPXt2YWx1ZX0gb3B0aW9ucz17b3B0aW9uc19yZW50VHlwZX0gbmFtZT17a2V5fSB2YWx1ZT17Y3VzdG9tZXJba2V5XX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+PC9Ecm9wRG93bj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9PT0gJ3JlbnRfZGF0ZScgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6YXRpb25Qcm92aWRlciBkYXRlQWRhcHRlcj17QWRhcHRlckRheWpzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlVGltZVBpY2tlciBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2N1c3RvbWVyW2tleV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Mb2NhbGl6YXRpb25Qcm92aWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRGaWVsZCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2N1c3RvbWVyW2tleV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym1pdC1idXR0b24tYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInN1Y2Nlc3NcIiBzaXplPVwic21cIiBjbGFzc05hbWU9XCJzdWJtaXQtYnV0dG9uXCIgb25DbGljaz17KCkgPT4gaGFuZGxlQ3VzdG9tZXJVcGRhdGUodXBkYXRlSXRlbXMsIGN1c3RvbWVyKX0+VXBkYXRlPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21lckRldGFpbDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJ1dHRvbiIsInVzZVN0YXRlQ29udGV4dCIsInVzZVN0YXRpY0NvbnRleHQiLCJJbnB1dEZpZWxkIiwiVGV4dGFyZWEiLCJEcm9wRG93biIsIkRhdGVUaW1lUGlja2VyIiwiTG9jYWxpemF0aW9uUHJvdmlkZXIiLCJDdXN0b21lckRldGFpbCIsImZvcndhcmRSZWYiLCJyZWYiLCJzY3JvbGxUb0N1c3RvbWVyRGV0YWlsIiwiY3VycmVudEN1c3RvbWVyIiwiaGFuZGxlQ3VzdG9tZXJVcGRhdGUiLCJkZXRhaWxMaXN0Iiwib3B0aW9uc19jaXR5Iiwib3B0aW9uc19nZW5kZXIiLCJvcHRpb25zX3JlbnRUeXBlIiwiY3VzdG9tZXIiLCJzZXRDdXN0b21lciIsInVwZGF0ZUl0ZW1zIiwic2V0VXBkYXRlSXRlbXMiLCJyZW50VGltZSIsInNldFJlbnRUaW1lIiwiaGFuZGxlQ2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDQiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwia2V5IiwidHlwZSIsInBsYWNlaG9sZGVyIiwibGFiZWwiLCJvbkNoYW5nZSIsInJlYWRPbmx5Iiwib3B0aW9ucyIsImRhdGVBZGFwdGVyIiwiQWRhcHRlckRheWpzIiwidmFyaWFudCIsInNpemUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Customer/CustomerDetail.jsx\n"));

/***/ })

});