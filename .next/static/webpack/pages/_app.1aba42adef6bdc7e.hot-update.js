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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/StateContext */ \"./context/StateContext.js\");\n/* harmony import */ var _context_StaticContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/StaticContext */ \"./context/StaticContext.js\");\n/* harmony import */ var _InputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../InputField */ \"./components/InputField.jsx\");\n/* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Textarea */ \"./components/Textarea.jsx\");\n/* harmony import */ var _DropDown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../DropDown */ \"./components/DropDown.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst CustomerDetail = /*#__PURE__*/ _s(react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(_c = _s((param, ref)=>{\n    let { scrollToCustomerDetail  } = param;\n    _s();\n    const { currentCustomer , handleCustomerUpdate  } = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_2__.useStateContext)();\n    const { detailList  } = (0,_context_StaticContext__WEBPACK_IMPORTED_MODULE_3__.useStaticContext)();\n    const [customer, setCustomer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(currentCustomer);\n    const [updateItems, setUpdateItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const handleChange = (e)=>{\n        const { name , value  } = e.target;\n        setUpdateItems({\n            ...updateItems,\n            [name]: value\n        });\n        setCustomer({\n            ...customer,\n            [name]: value\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setCustomer(currentCustomer);\n        setUpdateItems({});\n        if (scrollToCustomerDetail) {\n            ref.current.scrollIntoView({\n                behavior: \"smooth\"\n            });\n        }\n    }, [\n        currentCustomer,\n        scrollToCustomerDetail,\n        ref\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: ref,\n        children: customer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"module-container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    className: \"title\",\n                    children: \"Customer's Detail\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"detail-contanier\",\n                    children: [\n                        Object.entries(detailList).map((param)=>{\n                            let [key, value] = param;\n                            return key === \"Submission_Date\" || key === \"Last Update Date\" || key === \"UserId\" || key === \"Assistant_name\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                type: \"text\",\n                                value: customer[key],\n                                placeholder: value,\n                                label: value,\n                                name: key,\n                                onChange: handleChange,\n                                readOnly: \"true\"\n                            }, key, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 38\n                            }, undefined) : key === \"Leasing_demand\" || key === \"Assistant_message\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Textarea__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                label: value,\n                                name: key,\n                                placeholder: value,\n                                value: customer[key],\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 42\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                type: \"text\",\n                                value: customer[key],\n                                placeholder: value,\n                                label: value,\n                                name: key,\n                                onChange: handleChange\n                            }, key, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                                lineNumber: 67,\n                                columnNumber: 41\n                            }, undefined);\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"submit-button-block\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                variant: \"success\",\n                                size: \"sm\",\n                                className: \"submit-button\",\n                                onClick: ()=>handleCustomerUpdate(updateItems, customer),\n                                children: \"Update\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                                lineNumber: 81,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                            lineNumber: 80,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n            lineNumber: 40,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\Customer\\\\CustomerDetail.jsx\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, undefined);\n}, \"FjH4GImhkili7CBySJRrBfLWE9U=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_2__.useStateContext,\n        _context_StaticContext__WEBPACK_IMPORTED_MODULE_3__.useStaticContext\n    ];\n})), \"FjH4GImhkili7CBySJRrBfLWE9U=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_2__.useStateContext,\n        _context_StaticContext__WEBPACK_IMPORTED_MODULE_3__.useStaticContext\n    ];\n});\n_c1 = CustomerDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomerDetail);\nvar _c, _c1;\n$RefreshReg$(_c, \"CustomerDetail$React.forwardRef\");\n$RefreshReg$(_c1, \"CustomerDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1c3RvbWVyL0N1c3RvbWVyRGV0YWlsLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1A7QUFFaUI7QUFDRTtBQUN4QjtBQUNKO0FBQ0E7QUFFbkMsTUFBTVMsK0JBQWlCVCxHQUFBQSx1REFBZ0IsU0FBQyxRQUEyQlcsTUFBUTtRQUFsQyxFQUFDQyx1QkFBc0IsRUFBQzs7SUFDN0QsTUFBTSxFQUFFQyxnQkFBZSxFQUFFQyxxQkFBb0IsRUFBRSxHQUFHVixzRUFBZUE7SUFDakUsTUFBTSxFQUFFVyxXQUFVLEVBQUUsR0FBR1Ysd0VBQWdCQTtJQUN2QyxNQUFNLENBQUNXLFVBQVVDLFlBQVksR0FBR2hCLCtDQUFRQSxDQUFDWTtJQUN6QyxNQUFNLENBQUNLLGFBQWFDLGVBQWUsR0FBR2xCLCtDQUFRQSxDQUFDLENBQUM7SUFFaEQsTUFBTW1CLGVBQWUsQ0FBQ0MsSUFBTTtRQUN4QixNQUFNLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFLEdBQUdGLEVBQUVHLE1BQU07UUFDaENMLGVBQWU7WUFDWCxHQUFHRCxXQUFXO1lBQ2QsQ0FBQ0ksS0FBSyxFQUFFQztRQUNaO1FBRUFOLFlBQVk7WUFDUixHQUFHRCxRQUFRO1lBQ1gsQ0FBQ00sS0FBSyxFQUFFQztRQUNaO0lBQ0o7SUFFQXJCLGdEQUFTQSxDQUFDLElBQU07UUFDWmUsWUFBWUo7UUFDWk0sZUFBZSxDQUFDO1FBQ2hCLElBQUlQLHdCQUF3QjtZQUN4QkQsSUFBSWMsT0FBTyxDQUFDQyxjQUFjLENBQUM7Z0JBQUVDLFVBQVU7WUFBUztRQUNwRCxDQUFDO0lBQ0wsR0FBRztRQUFDZDtRQUFpQkQ7UUFBd0JEO0tBQUk7SUFFakQscUJBQ0ksOERBQUNpQjtRQUFJakIsS0FBS0E7a0JBQ0xLLDBCQUNELDhEQUFDWTtZQUFJQyxXQUFVOzs4QkFDWCw4REFBQ0M7b0JBQUdELFdBQVU7OEJBQVE7Ozs7Ozs4QkFDdEIsOERBQUNEO29CQUFJQyxXQUFVOzt3QkFFSEUsT0FBT0MsT0FBTyxDQUFDakIsWUFBWWtCLEdBQUcsQ0FBQyxTQUMzQkM7Z0NBRDRCLENBQUNBLEtBQUtYLE1BQU07bUNBQ3hDVyxRQUFRLHFCQUFxQkEsUUFBUSxzQkFBc0JBLFFBQVEsWUFBWUEsUUFBUSxpQ0FDbEYsOERBQUM1QixtREFBVUE7Z0NBQ1o2QixNQUFLO2dDQUNMWixPQUFPUCxRQUFRLENBQUNrQixJQUFJO2dDQUNwQkUsYUFBYWI7Z0NBQ2JjLE9BQU9kO2dDQUNQRCxNQUFNWTtnQ0FDTkksVUFBVWxCO2dDQUVWbUIsVUFBUzsrQkFESkw7Ozs7NENBSUxBLFFBQVEsb0JBQW9CQSxRQUFRLG9DQUMvQiw4REFBQzNCLGlEQUFRQTtnQ0FDTjhCLE9BQU9kO2dDQUNQRCxNQUFNWTtnQ0FDTkUsYUFBYWI7Z0NBQ2JBLE9BQU9QLFFBQVEsQ0FBQ2tCLElBQUk7Z0NBQ3BCSSxVQUFVbEI7Ozs7OzBEQUlkLDhEQUFDZCxtREFBVUE7Z0NBQ1g2QixNQUFLO2dDQUNMWixPQUFPUCxRQUFRLENBQUNrQixJQUFJO2dDQUNwQkUsYUFBYWI7Z0NBQ2JjLE9BQU9kO2dDQUNQRCxNQUFNWTtnQ0FDTkksVUFBVWxCOytCQUNMYzs7Ozt5Q0FFUDt3QkFBRDtzQ0FJakIsOERBQUNOOzRCQUFJQyxXQUFVO3NDQUNYLDRFQUFDMUIsOERBQU1BO2dDQUFDcUMsU0FBUTtnQ0FBVUMsTUFBSztnQ0FBS1osV0FBVTtnQ0FBZ0JhLFNBQVMsSUFBTTVCLHFCQUFxQkksYUFBYUY7MENBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPbEo7O1FBN0VzRFosa0VBQWVBO1FBQzFDQyxvRUFBZ0JBOzs7O1FBRFdELGtFQUFlQTtRQUMxQ0Msb0VBQWdCQTs7OztBQThFM0MsK0RBQWVJLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXN0b21lci9DdXN0b21lckRldGFpbC5qc3g/NTk0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5cbmltcG9ydCB7IHVzZVN0YXRlQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQvU3RhdGVDb250ZXh0JztcbmltcG9ydCB7IHVzZVN0YXRpY0NvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0L1N0YXRpY0NvbnRleHQnO1xuaW1wb3J0IElucHV0RmllbGQgZnJvbSAnLi4vSW5wdXRGaWVsZCc7XG5pbXBvcnQgVGV4dGFyZWEgZnJvbSAnLi4vVGV4dGFyZWEnO1xuaW1wb3J0IERyb3BEb3duIGZyb20gJy4uL0Ryb3BEb3duJztcblxuY29uc3QgQ3VzdG9tZXJEZXRhaWwgPSBSZWFjdC5mb3J3YXJkUmVmKCh7c2Nyb2xsVG9DdXN0b21lckRldGFpbH0sIHJlZikgPT4ge1xuICAgIGNvbnN0IHsgY3VycmVudEN1c3RvbWVyLCBoYW5kbGVDdXN0b21lclVwZGF0ZSB9ID0gdXNlU3RhdGVDb250ZXh0KClcbiAgICBjb25zdCB7IGRldGFpbExpc3QgfSA9IHVzZVN0YXRpY0NvbnRleHQoKVxuICAgIGNvbnN0IFtjdXN0b21lciwgc2V0Q3VzdG9tZXJdID0gdXNlU3RhdGUoY3VycmVudEN1c3RvbWVyKVxuICAgIGNvbnN0IFt1cGRhdGVJdGVtcywgc2V0VXBkYXRlSXRlbXNdID0gdXNlU3RhdGUoe30pXG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldFxuICAgICAgICBzZXRVcGRhdGVJdGVtcyh7XG4gICAgICAgICAgICAuLi51cGRhdGVJdGVtcywgXG4gICAgICAgICAgICBbbmFtZV06IHZhbHVlXG4gICAgICAgIH0pXG5cbiAgICAgICAgc2V0Q3VzdG9tZXIoe1xuICAgICAgICAgICAgLi4uY3VzdG9tZXIsXG4gICAgICAgICAgICBbbmFtZV06IHZhbHVlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0Q3VzdG9tZXIoY3VycmVudEN1c3RvbWVyKVxuICAgICAgICBzZXRVcGRhdGVJdGVtcyh7fSlcbiAgICAgICAgaWYgKHNjcm9sbFRvQ3VzdG9tZXJEZXRhaWwpIHtcbiAgICAgICAgICAgIHJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pXG4gICAgICAgIH1cbiAgICB9LCBbY3VycmVudEN1c3RvbWVyLCBzY3JvbGxUb0N1c3RvbWVyRGV0YWlsLCByZWZdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgcmVmPXtyZWZ9PlxuICAgICAgICAgICAge2N1c3RvbWVyICYmIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2R1bGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlXCI+Q3VzdG9tZXIncyBEZXRhaWw8L2g0PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsLWNvbnRhbmllclwiPlxuICAgICAgICAgICAgICAgICAgICB7ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoZGV0YWlsTGlzdCkubWFwKChba2V5LCB2YWx1ZV0pID0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPT09ICdTdWJtaXNzaW9uX0RhdGUnIHx8IGtleSA9PT0gJ0xhc3QgVXBkYXRlIERhdGUnIHx8IGtleSA9PT0gJ1VzZXJJZCcgfHwga2V5ID09PSAnQXNzaXN0YW50X25hbWUnID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8SW5wdXRGaWVsZCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2N1c3RvbWVyW2tleV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT0ndHJ1ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9PT0gJ0xlYXNpbmdfZGVtYW5kJyB8fCBrZXkgPT09ICdBc3Npc3RhbnRfbWVzc2FnZScgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8VGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2N1c3RvbWVyW2tleV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L1RleHRhcmVhPilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0RmllbGQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjdXN0b21lcltrZXldfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtaXQtYnV0dG9uLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzdWNjZXNzXCIgc2l6ZT1cInNtXCIgY2xhc3NOYW1lPVwic3VibWl0LWJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUN1c3RvbWVyVXBkYXRlKHVwZGF0ZUl0ZW1zLCBjdXN0b21lcil9PlVwZGF0ZTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tZXJEZXRhaWw7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCdXR0b24iLCJ1c2VTdGF0ZUNvbnRleHQiLCJ1c2VTdGF0aWNDb250ZXh0IiwiSW5wdXRGaWVsZCIsIlRleHRhcmVhIiwiRHJvcERvd24iLCJDdXN0b21lckRldGFpbCIsImZvcndhcmRSZWYiLCJyZWYiLCJzY3JvbGxUb0N1c3RvbWVyRGV0YWlsIiwiY3VycmVudEN1c3RvbWVyIiwiaGFuZGxlQ3VzdG9tZXJVcGRhdGUiLCJkZXRhaWxMaXN0IiwiY3VzdG9tZXIiLCJzZXRDdXN0b21lciIsInVwZGF0ZUl0ZW1zIiwic2V0VXBkYXRlSXRlbXMiLCJoYW5kbGVDaGFuZ2UiLCJlIiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJoNCIsIk9iamVjdCIsImVudHJpZXMiLCJtYXAiLCJrZXkiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJsYWJlbCIsIm9uQ2hhbmdlIiwicmVhZE9ubHkiLCJ2YXJpYW50Iiwic2l6ZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Customer/CustomerDetail.jsx\n"));

/***/ })

});