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

/***/ "./components/DropDown.jsx":
/*!*********************************!*\
  !*** ./components/DropDown.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n//import Select from \"react-dropdown-select\";\n\n\n\n\n\n//import { Select, Space } from 'antd';\nconst DropDown = (param)=>{\n    let { options , name , value , label , onChange  } = param;\n    _s();\n    const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        value\n    });\n    // console.log({values})\n    // return (\n    //     <div className=\"customerDetail_dropDown_box\">\n    //         <p>{ name}</p>\n    //         <Select className=\"customerDetail_dropDown\" placeholder={ value} value={values} options={options} onChange={(values) => setValues(values)} />\n    //     </div>\n    // )\n    return(// <Box className=\"customerDetail_dropDown_box\" sx={{ minWidth: 120 }}>\n    //   <FormControl fullWidth>\n    //     <InputLabel variant=\"standard\" htmlFor=\"uncontrolled-native\">\n    //     {name}\n    //     </InputLabel>\n    //         <NativeSelect\n    //     //defaultValue={{ value }}\n    //             // inputProps={{\n    //             //     name: { name },\n    //             //     id: 'uncontrolled-native',\n    //             // }}\n    //             onChange={(values) => setValues(values)}\n    //         >\n    //            <option value={0}>{value}</option>\n    //             { Object.entries(options).map(([key, value]) =>{\n    //                 return (<option key={key} value={value}>{value}</option>)\n    //             })}\n    //     </NativeSelect>\n    //   </FormControl>\n    // </Box>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        className: \"customerDetail_dropDown_box\",\n        children: [\n            label,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                className: \"customerDetail_dropDown\",\n                name: name,\n                onChange: onChange,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: 0,\n                        children: value\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\DropDown.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 13\n                    }, undefined),\n                    Object.entries(options).map((param)=>{\n                        let [key, value] = param;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: value,\n                            children: value\n                        }, key, false, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\DropDown.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 33\n                        }, undefined);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\DropDown.jsx\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\DropDown.jsx\",\n        lineNumber: 52,\n        columnNumber: 9\n    }, undefined));\n};\n_s(DropDown, \"PcYTRPuolQN++L6/2J85r/NMmNg=\");\n_c = DropDown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DropDown);\nvar _c;\n$RefreshReg$(_c, \"DropDown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Ryb3BEb3duLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTRDO0FBQzVDLDZDQUE2QztBQUVkO0FBQ0s7QUFDYztBQUNFO0FBQ0U7QUFFdEQsdUNBQXVDO0FBR3ZDLE1BQU1PLFdBQVcsU0FBMkM7UUFBMUMsRUFBRUMsUUFBTyxFQUFDQyxLQUFJLEVBQUNDLE1BQUssRUFBQ0MsTUFBSyxFQUFDQyxTQUFRLEVBQUU7O0lBQ2xELE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHZCwrQ0FBUUEsQ0FBQztRQUFFVTtJQUFNO0lBQzlDLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsb0RBQW9EO0lBQ3BELHlCQUF5QjtJQUN6Qix3SkFBd0o7SUFDeEosYUFBYTtJQUViLElBQUk7SUFJSixPQUNJLHVFQUF1RTtJQUN2RSw0QkFBNEI7SUFDNUIsb0VBQW9FO0lBQ3BFLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsd0JBQXdCO0lBRXhCLGlDQUFpQztJQUNqQywrQkFBK0I7SUFDL0IscUNBQXFDO0lBQ3JDLGdEQUFnRDtJQUNoRCxvQkFBb0I7SUFDcEIsdURBQXVEO0lBQ3ZELFlBQVk7SUFFWixnREFBZ0Q7SUFDaEQsK0RBQStEO0lBQy9ELDRFQUE0RTtJQUM1RSxrQkFBa0I7SUFFbEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO2tCQUdULDhEQUFDQztRQUFNSSxXQUFVOztZQUNYSjswQkFDRiw4REFBQ0s7Z0JBQU9ELFdBQVU7Z0JBQTBCTixNQUFNQTtnQkFBTUcsVUFBVUE7O2tDQUNsRSw4REFBQ0s7d0JBQU9QLE9BQU87a0NBQUlBOzs7Ozs7b0JBQ2pCUSxPQUFPQyxPQUFPLENBQUNYLFNBQVNZLEdBQUcsQ0FBQyxTQUFpQjs0QkFBaEIsQ0FBQ0MsS0FBS1gsTUFBTTt3QkFDL0IscUJBQVEsOERBQUNPOzRCQUFpQlAsT0FBT0E7c0NBQVFBOzJCQUFwQlc7Ozs7O29CQUN6Qjs7Ozs7Ozs7Ozs7OztBQVFwQjtHQXJETWQ7S0FBQUE7QUF1RE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ecm9wRG93bi5qc3g/MzMzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3QtZHJvcGRvd24tc2VsZWN0XCI7XHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xyXG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tICdAbXVpL21hdGVyaWFsL0lucHV0TGFiZWwnO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG11aS9tYXRlcmlhbC9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCBOYXRpdmVTZWxlY3QgZnJvbSAnQG11aS9tYXRlcmlhbC9OYXRpdmVTZWxlY3QnO1xyXG5cclxuLy9pbXBvcnQgeyBTZWxlY3QsIFNwYWNlIH0gZnJvbSAnYW50ZCc7XHJcblxyXG5cclxuY29uc3QgRHJvcERvd24gPSAoeyBvcHRpb25zLG5hbWUsdmFsdWUsbGFiZWwsb25DaGFuZ2UgfSkgPT4ge1xyXG4gICAgIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7IHZhbHVlIH0pXHJcbiAgICAvLyBjb25zb2xlLmxvZyh7dmFsdWVzfSlcclxuICAgIC8vIHJldHVybiAoXHJcbiAgICAvLyAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b21lckRldGFpbF9kcm9wRG93bl9ib3hcIj5cclxuICAgIC8vICAgICAgICAgPHA+eyBuYW1lfTwvcD5cclxuICAgIC8vICAgICAgICAgPFNlbGVjdCBjbGFzc05hbWU9XCJjdXN0b21lckRldGFpbF9kcm9wRG93blwiIHBsYWNlaG9sZGVyPXsgdmFsdWV9IHZhbHVlPXt2YWx1ZXN9IG9wdGlvbnM9e29wdGlvbnN9IG9uQ2hhbmdlPXsodmFsdWVzKSA9PiBzZXRWYWx1ZXModmFsdWVzKX0gLz5cclxuICAgIC8vICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgLy8gKVxyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIC8vIDxCb3ggY2xhc3NOYW1lPVwiY3VzdG9tZXJEZXRhaWxfZHJvcERvd25fYm94XCIgc3g9e3sgbWluV2lkdGg6IDEyMCB9fT5cclxuICAgICAgICAvLyAgIDxGb3JtQ29udHJvbCBmdWxsV2lkdGg+XHJcbiAgICAgICAgLy8gICAgIDxJbnB1dExhYmVsIHZhcmlhbnQ9XCJzdGFuZGFyZFwiIGh0bWxGb3I9XCJ1bmNvbnRyb2xsZWQtbmF0aXZlXCI+XHJcbiAgICAgICAgLy8gICAgIHtuYW1lfVxyXG4gICAgICAgIC8vICAgICA8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgLy8gICAgICAgICA8TmF0aXZlU2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIC8vZGVmYXVsdFZhbHVlPXt7IHZhbHVlIH19XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gaW5wdXRQcm9wcz17e1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICBuYW1lOiB7IG5hbWUgfSxcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyAgICAgaWQ6ICd1bmNvbnRyb2xsZWQtbmF0aXZlJyxcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyB9fVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWVzKSA9PiBzZXRWYWx1ZXModmFsdWVzKX1cclxuICAgICAgICAvLyAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17MH0+e3ZhbHVlfTwvb3B0aW9uPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHsgT2JqZWN0LmVudHJpZXMob3B0aW9ucykubWFwKChba2V5LCB2YWx1ZV0pID0+e1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gKDxvcHRpb24ga2V5PXtrZXl9IHZhbHVlPXt2YWx1ZX0+e3ZhbHVlfTwvb3B0aW9uPilcclxuICAgICAgICAvLyAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICA8L05hdGl2ZVNlbGVjdD5cclxuICAgICAgICAvLyAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgLy8gPC9Cb3g+XHJcblxyXG5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY3VzdG9tZXJEZXRhaWxfZHJvcERvd25fYm94XCIgPlxyXG4gICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImN1c3RvbWVyRGV0YWlsX2Ryb3BEb3duXCIgbmFtZT17bmFtZX0gb25DaGFuZ2U9e29uQ2hhbmdlfSA+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezB9Pnt2YWx1ZX08L29wdGlvbj5cclxuICAgICAgICAgICAgeyBPYmplY3QuZW50cmllcyhvcHRpb25zKS5tYXAoKFtrZXksIHZhbHVlXSkgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPG9wdGlvbiBrZXk9e2tleX0gdmFsdWU9e3ZhbHVlfT57dmFsdWV9PC9vcHRpb24+KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgXHJcblxyXG4pO1xyXG5cclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcm9wRG93bjsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJSZWFjdCIsIkJveCIsIklucHV0TGFiZWwiLCJGb3JtQ29udHJvbCIsIk5hdGl2ZVNlbGVjdCIsIkRyb3BEb3duIiwib3B0aW9ucyIsIm5hbWUiLCJ2YWx1ZSIsImxhYmVsIiwib25DaGFuZ2UiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJjbGFzc05hbWUiLCJzZWxlY3QiLCJvcHRpb24iLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/DropDown.jsx\n"));

/***/ })

});