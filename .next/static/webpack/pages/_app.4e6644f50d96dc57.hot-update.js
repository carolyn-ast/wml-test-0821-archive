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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/StateContext */ \"./context/StateContext.js\");\n/* harmony import */ var _context_StaticContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/StaticContext */ \"./context/StaticContext.js\");\n/* harmony import */ var _InputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../InputField */ \"./components/InputField.jsx\");\n/* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Textarea */ \"./components/Textarea.jsx\");\n/* harmony import */ var _DropDown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../DropDown */ \"./components/DropDown.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n//import Form from 'react-bootstrap/Form';\nconst CustomerDetail = /*#__PURE__*/ _s(react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(_c = _s((param, ref)=>{\n    let { scrollToCustomerDetail  } = param;\n    _s();\n    const { currentCustomer , handleCustomerUpdate  } = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_2__.useStateContext)();\n    const { detailList  } = (0,_context_StaticContext__WEBPACK_IMPORTED_MODULE_3__.useStaticContext)();\n    const [customer, setCustomer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(currentCustomer);\n    const [updateItems, setUpdateItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const handleChange = (e)=>{\n        const { name , value  } = e.target;\n        setUpdateItems({\n            ...updateItems,\n            [name]: value\n        });\n        setCustomer({\n            ...customer,\n            [name]: value\n        });\n    };\n    const handleSelect = (e)=>{};\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setCustomer(currentCustomer);\n        setUpdateItems({});\n        if (scrollToCustomerDetail) {\n            ref.current.scrollIntoView({\n                behavior: \"smooth\"\n            });\n        }\n    }, [\n        currentCustomer,\n        scrollToCustomerDetail,\n        ref\n    ]);\n    const options_city = {\n        \"1\": \"Submission date\",\n        \"2\": \"Last update Time\",\n        \"3\": \"First Name\",\n        \"4\": \"Last Name\",\n        \"5\": \"Submission date\",\n        \"6\": \"Last update Time\",\n        \"7\": \"First Name\",\n        \"8\": \"Last Name\",\n        \"9\": \"Submission date\",\n        \"10\": \"Last update Time\",\n        \"11\": \"First Name\",\n        \"12\": \"Last Name\",\n        \"13\": \"Submission date\",\n        \"\": \"Last update Time\",\n        \"3\": \"First Name\",\n        \"4\": \"Last Name\"\n    };\n    const options_rentType = {\n        \"1\": \"Submission date\",\n        \"2\": \"Last update Time\",\n        \"3\": \"First Name\",\n        \"4\": \"Last Name\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: ref,\n        children: customer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"module-container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    className: \"title\",\n                    children: \"Customer's Detail\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                    lineNumber: 72,\n                    columnNumber: 21\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"detail-contanier\",\n                    children: [\n                        Object.entries(detailList).map((param)=>{\n                            let [key, value] = param;\n                            return key === \"Submission_Date\" || key === \"Last Update Date\" || key === \"UserId\" || key === \"Assistant_name\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                type: \"text\",\n                                value: customer[key],\n                                placeholder: value,\n                                label: value,\n                                name: key,\n                                onChange: handleChange,\n                                readOnly: \"true\"\n                            }, key, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 38\n                            }, undefined) : key === \"Leasing_demand\" || key === \"Assistant_message\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Textarea__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                label: value,\n                                name: key,\n                                placeholder: value,\n                                value: customer[key],\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                                lineNumber: 90,\n                                columnNumber: 42\n                            }, undefined) : key === \"gender\" || key === \"几人入住？\" || key === \"City\" || key === \"rent_duration\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DropDown__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                options: options_rentType,\n                                name: key,\n                                value: customer[key]\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                                lineNumber: 100,\n                                columnNumber: 49\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                type: \"text\",\n                                value: customer[key],\n                                placeholder: value,\n                                label: value,\n                                name: key,\n                                onChange: handleChange\n                            }, key, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                                lineNumber: 103,\n                                columnNumber: 41\n                            }, undefined);\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"submit-button-block\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                variant: \"success\",\n                                size: \"sm\",\n                                className: \"submit-button\",\n                                onClick: ()=>handleCustomerUpdate(updateItems, customer),\n                                children: \"Update\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                                lineNumber: 117,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                            lineNumber: 116,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                    lineNumber: 74,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n            lineNumber: 71,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n        lineNumber: 69,\n        columnNumber: 9\n    }, undefined);\n}, \"FjH4GImhkili7CBySJRrBfLWE9U=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_2__.useStateContext,\n        _context_StaticContext__WEBPACK_IMPORTED_MODULE_3__.useStaticContext\n    ];\n})), \"FjH4GImhkili7CBySJRrBfLWE9U=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_2__.useStateContext,\n        _context_StaticContext__WEBPACK_IMPORTED_MODULE_3__.useStaticContext\n    ];\n});\n_c1 = CustomerDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomerDetail);\nvar _c, _c1;\n$RefreshReg$(_c, \"CustomerDetail$React.forwardRef\");\n$RefreshReg$(_c1, \"CustomerDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1c3RvbWVyL0N1c3RvbWVyRGV0YWlsLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1A7QUFFaUI7QUFDRTtBQUN4QjtBQUNKO0FBQ0E7QUFDbkMsMENBQTBDO0FBRTFDLE1BQU1TLCtCQUFpQlQsR0FBQUEsdURBQWdCLFNBQUMsUUFBMkJXLE1BQVE7UUFBbEMsRUFBQ0MsdUJBQXNCLEVBQUM7O0lBQzdELE1BQU0sRUFBRUMsZ0JBQWUsRUFBRUMscUJBQW9CLEVBQUUsR0FBR1Ysc0VBQWVBO0lBQ2pFLE1BQU0sRUFBRVcsV0FBVSxFQUFFLEdBQUdWLHdFQUFnQkE7SUFDdkMsTUFBTSxDQUFDVyxVQUFVQyxZQUFZLEdBQUdoQiwrQ0FBUUEsQ0FBQ1k7SUFDekMsTUFBTSxDQUFDSyxhQUFhQyxlQUFlLEdBQUdsQiwrQ0FBUUEsQ0FBQyxDQUFDO0lBRWhELE1BQU1tQixlQUFlLENBQUNDLElBQU07UUFDeEIsTUFBTSxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRSxHQUFHRixFQUFFRyxNQUFNO1FBQ2hDTCxlQUFlO1lBQ1gsR0FBR0QsV0FBVztZQUNkLENBQUNJLEtBQUssRUFBRUM7UUFDWjtRQUVBTixZQUFZO1lBQ1IsR0FBR0QsUUFBUTtZQUNYLENBQUNNLEtBQUssRUFBRUM7UUFDWjtJQUNKO0lBRUEsTUFBTUUsZUFBZSxDQUFDSixJQUFNLENBRTVCO0lBRUFuQixnREFBU0EsQ0FBQyxJQUFNO1FBQ1plLFlBQVlKO1FBQ1pNLGVBQWUsQ0FBQztRQUNoQixJQUFJUCx3QkFBd0I7WUFDeEJELElBQUllLE9BQU8sQ0FBQ0MsY0FBYyxDQUFDO2dCQUFFQyxVQUFVO1lBQVM7UUFDcEQsQ0FBQztJQUNMLEdBQUc7UUFBQ2Y7UUFBaUJEO1FBQXdCRDtLQUFJO0lBRWpELE1BQU1rQixlQUFlO1FBQ2pCLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixJQUFJO1FBQ0osS0FBSztRQUNMLEtBQUs7SUFDVDtJQUNBLE1BQU1DLG1CQUFtQjtRQUNyQixLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO0lBQ1Q7SUFHQSxxQkFDSSw4REFBQ0M7UUFBSXBCLEtBQUtBO2tCQUNMSywwQkFDRCw4REFBQ2U7WUFBSUMsV0FBVTs7OEJBQ1AsOERBQUNDO29CQUFHRCxXQUFVOzhCQUFROzs7Ozs7OEJBRTFCLDhEQUFDRDtvQkFBSUMsV0FBVTs7d0JBRUhFLE9BQU9DLE9BQU8sQ0FBQ3BCLFlBQVlxQixHQUFHLENBQUMsU0FDM0JDO2dDQUQ0QixDQUFDQSxLQUFLZCxNQUFNO21DQUN4Q2MsUUFBUSxxQkFBcUJBLFFBQVEsc0JBQXNCQSxRQUFRLFlBQVlBLFFBQVEsaUNBQ2xGLDhEQUFDL0IsbURBQVVBO2dDQUNaZ0MsTUFBSztnQ0FDTGYsT0FBT1AsUUFBUSxDQUFDcUIsSUFBSTtnQ0FDcEJFLGFBQWFoQjtnQ0FDYmlCLE9BQU9qQjtnQ0FDUEQsTUFBTWU7Z0NBQ05JLFVBQVVyQjtnQ0FFVnNCLFVBQVM7K0JBREpMOzs7OzRDQUlMQSxRQUFRLG9CQUFvQkEsUUFBUSxvQ0FDL0IsOERBQUM5QixpREFBUUE7Z0NBQ05pQyxPQUFPakI7Z0NBQ1BELE1BQU1lO2dDQUNORSxhQUFhaEI7Z0NBQ2JBLE9BQU9QLFFBQVEsQ0FBQ3FCLElBQUk7Z0NBQ3BCSSxVQUFVckI7Ozs7OzRDQUdaaUIsUUFBUSxZQUFVQSxRQUFRLFdBQVNBLFFBQVEsVUFBUUEsUUFBUSxnQ0FFckQsOERBQUM3QixpREFBUUE7Z0NBQUNtQyxTQUFTYjtnQ0FBa0JSLE1BQU1lO2dDQUFLZCxPQUFPUCxRQUFRLENBQUNxQixJQUFJOzs7OzswREFHNUUsOERBQUMvQixtREFBVUE7Z0NBQ1hnQyxNQUFLO2dDQUNMZixPQUFPUCxRQUFRLENBQUNxQixJQUFJO2dDQUNwQkUsYUFBYWhCO2dDQUNiaUIsT0FBT2pCO2dDQUNQRCxNQUFNZTtnQ0FDTkksVUFBVXJCOytCQUNMaUI7Ozs7eUNBRVA7d0JBQUQ7c0NBSWpCLDhEQUFDTjs0QkFBSUMsV0FBVTtzQ0FDWCw0RUFBQzdCLDhEQUFNQTtnQ0FBQ3lDLFNBQVE7Z0NBQVVDLE1BQUs7Z0NBQUtiLFdBQVU7Z0NBQWdCYyxTQUFTLElBQU1oQyxxQkFBcUJJLGFBQWFGOzBDQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2xKOztRQWhIc0RaLGtFQUFlQTtRQUMxQ0Msb0VBQWdCQTs7OztRQURXRCxrRUFBZUE7UUFDMUNDLG9FQUFnQkE7Ozs7QUFpSDNDLCtEQUFlSSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ3VzdG9tZXIvQ3VzdG9tZXJEZXRhaWwuanN4PzU5NDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZUNvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0L1N0YXRlQ29udGV4dCc7XG5pbXBvcnQgeyB1c2VTdGF0aWNDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9TdGF0aWNDb250ZXh0JztcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gJy4uL0lucHV0RmllbGQnO1xuaW1wb3J0IFRleHRhcmVhIGZyb20gJy4uL1RleHRhcmVhJztcbmltcG9ydCBEcm9wRG93biBmcm9tICcuLi9Ecm9wRG93bic7XG4vL2ltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcblxuY29uc3QgQ3VzdG9tZXJEZXRhaWwgPSBSZWFjdC5mb3J3YXJkUmVmKCh7c2Nyb2xsVG9DdXN0b21lckRldGFpbH0sIHJlZikgPT4ge1xuICAgIGNvbnN0IHsgY3VycmVudEN1c3RvbWVyLCBoYW5kbGVDdXN0b21lclVwZGF0ZSB9ID0gdXNlU3RhdGVDb250ZXh0KClcbiAgICBjb25zdCB7IGRldGFpbExpc3QgfSA9IHVzZVN0YXRpY0NvbnRleHQoKVxuICAgIGNvbnN0IFtjdXN0b21lciwgc2V0Q3VzdG9tZXJdID0gdXNlU3RhdGUoY3VycmVudEN1c3RvbWVyKVxuICAgIGNvbnN0IFt1cGRhdGVJdGVtcywgc2V0VXBkYXRlSXRlbXNdID0gdXNlU3RhdGUoe30pXG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldFxuICAgICAgICBzZXRVcGRhdGVJdGVtcyh7XG4gICAgICAgICAgICAuLi51cGRhdGVJdGVtcywgXG4gICAgICAgICAgICBbbmFtZV06IHZhbHVlXG4gICAgICAgIH0pXG5cbiAgICAgICAgc2V0Q3VzdG9tZXIoe1xuICAgICAgICAgICAgLi4uY3VzdG9tZXIsXG4gICAgICAgICAgICBbbmFtZV06IHZhbHVlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKGUpID0+IHtcbiAgICAgICBcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRDdXN0b21lcihjdXJyZW50Q3VzdG9tZXIpXG4gICAgICAgIHNldFVwZGF0ZUl0ZW1zKHt9KVxuICAgICAgICBpZiAoc2Nyb2xsVG9DdXN0b21lckRldGFpbCkge1xuICAgICAgICAgICAgcmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbiAgICAgICAgfVxuICAgIH0sIFtjdXJyZW50Q3VzdG9tZXIsIHNjcm9sbFRvQ3VzdG9tZXJEZXRhaWwsIHJlZl0pO1xuXG4gICAgY29uc3Qgb3B0aW9uc19jaXR5ID0ge1xuICAgICAgICBcIjFcIjogXCJTdWJtaXNzaW9uIGRhdGVcIixcbiAgICAgICAgXCIyXCI6IFwiTGFzdCB1cGRhdGUgVGltZVwiLFxuICAgICAgICBcIjNcIjogXCJGaXJzdCBOYW1lXCIsXG4gICAgICAgIFwiNFwiOiBcIkxhc3QgTmFtZVwiLFxuICAgICAgICBcIjVcIjogXCJTdWJtaXNzaW9uIGRhdGVcIixcbiAgICAgICAgXCI2XCI6IFwiTGFzdCB1cGRhdGUgVGltZVwiLFxuICAgICAgICBcIjdcIjogXCJGaXJzdCBOYW1lXCIsXG4gICAgICAgIFwiOFwiOiBcIkxhc3QgTmFtZVwiLFxuICAgICAgICBcIjlcIjogXCJTdWJtaXNzaW9uIGRhdGVcIixcbiAgICAgICAgXCIxMFwiOiBcIkxhc3QgdXBkYXRlIFRpbWVcIixcbiAgICAgICAgXCIxMVwiOiBcIkZpcnN0IE5hbWVcIixcbiAgICAgICAgXCIxMlwiOiBcIkxhc3QgTmFtZVwiLFxuICAgICAgICBcIjEzXCI6IFwiU3VibWlzc2lvbiBkYXRlXCIsXG4gICAgICAgIFwiXCI6IFwiTGFzdCB1cGRhdGUgVGltZVwiLFxuICAgICAgICBcIjNcIjogXCJGaXJzdCBOYW1lXCIsXG4gICAgICAgIFwiNFwiOiBcIkxhc3QgTmFtZVwiLFxuICAgIH1cbiAgICBjb25zdCBvcHRpb25zX3JlbnRUeXBlID0ge1xuICAgICAgICBcIjFcIjogXCJTdWJtaXNzaW9uIGRhdGVcIixcbiAgICAgICAgXCIyXCI6IFwiTGFzdCB1cGRhdGUgVGltZVwiLFxuICAgICAgICBcIjNcIjogXCJGaXJzdCBOYW1lXCIsXG4gICAgICAgIFwiNFwiOiBcIkxhc3QgTmFtZVwiXG4gICAgfVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHJlZj17cmVmfT5cbiAgICAgICAgICAgIHtjdXN0b21lciAmJiBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kdWxlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGVcIj5DdXN0b21lcidzIERldGFpbDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsLWNvbnRhbmllclwiPlxuICAgICAgICAgICAgICAgICAgICB7ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoZGV0YWlsTGlzdCkubWFwKChba2V5LCB2YWx1ZV0pID0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPT09ICdTdWJtaXNzaW9uX0RhdGUnIHx8IGtleSA9PT0gJ0xhc3QgVXBkYXRlIERhdGUnIHx8IGtleSA9PT0gJ1VzZXJJZCcgfHwga2V5ID09PSAnQXNzaXN0YW50X25hbWUnID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8SW5wdXRGaWVsZCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2N1c3RvbWVyW2tleV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT0ndHJ1ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9PT0gJ0xlYXNpbmdfZGVtYW5kJyB8fCBrZXkgPT09ICdBc3Npc3RhbnRfbWVzc2FnZScgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8VGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2N1c3RvbWVyW2tleV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L1RleHRhcmVhPilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGtleSA9PT0gJ2dlbmRlcid8fGtleSA9PT0gJ+WHoOS6uuWFpeS9j++8nyd8fGtleSA9PT0gJ0NpdHknfHxrZXkgPT09ICdyZW50X2R1cmF0aW9uJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wRG93biBvcHRpb25zPXtvcHRpb25zX3JlbnRUeXBlfSBuYW1lPXtrZXl9IHZhbHVlPXtjdXN0b21lcltrZXldfT48L0Ryb3BEb3duPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRGaWVsZCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2N1c3RvbWVyW2tleV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym1pdC1idXR0b24tYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInN1Y2Nlc3NcIiBzaXplPVwic21cIiBjbGFzc05hbWU9XCJzdWJtaXQtYnV0dG9uXCIgb25DbGljaz17KCkgPT4gaGFuZGxlQ3VzdG9tZXJVcGRhdGUodXBkYXRlSXRlbXMsIGN1c3RvbWVyKX0+VXBkYXRlPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21lckRldGFpbDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJ1dHRvbiIsInVzZVN0YXRlQ29udGV4dCIsInVzZVN0YXRpY0NvbnRleHQiLCJJbnB1dEZpZWxkIiwiVGV4dGFyZWEiLCJEcm9wRG93biIsIkN1c3RvbWVyRGV0YWlsIiwiZm9yd2FyZFJlZiIsInJlZiIsInNjcm9sbFRvQ3VzdG9tZXJEZXRhaWwiLCJjdXJyZW50Q3VzdG9tZXIiLCJoYW5kbGVDdXN0b21lclVwZGF0ZSIsImRldGFpbExpc3QiLCJjdXN0b21lciIsInNldEN1c3RvbWVyIiwidXBkYXRlSXRlbXMiLCJzZXRVcGRhdGVJdGVtcyIsImhhbmRsZUNoYW5nZSIsImUiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJoYW5kbGVTZWxlY3QiLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsIm9wdGlvbnNfY2l0eSIsIm9wdGlvbnNfcmVudFR5cGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoNCIsIk9iamVjdCIsImVudHJpZXMiLCJtYXAiLCJrZXkiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJsYWJlbCIsIm9uQ2hhbmdlIiwicmVhZE9ubHkiLCJvcHRpb25zIiwidmFyaWFudCIsInNpemUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Customer/CustomerDetail.jsx\n"));

/***/ })

});