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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n//import Select from \"react-dropdown-select\";\n\n\n\n\n\n//import { Select, Space } from 'antd';\nconst DropDown = (param)=>{\n    let { options , name , value , label , onChange , ref  } = param;\n    _s();\n    const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        value\n    });\n    // console.log({values})\n    // return (\n    //     <div className=\"customerDetail_dropDown_box\">\n    //         <p>{ name}</p>\n    //         <Select className=\"customerDetail_dropDown\" placeholder={ value} value={values} options={options} onChange={(values) => setValues(values)} />\n    //     </div>\n    // )\n    return(// <Box className=\"customerDetail_dropDown_box\" sx={{ minWidth: 120 }}>\n    //   <FormControl fullWidth>\n    //     <InputLabel variant=\"standard\" htmlFor=\"uncontrolled-native\">\n    //     {name}\n    //     </InputLabel>\n    //         <NativeSelect\n    //     //defaultValue={{ value }}\n    //             // inputProps={{\n    //             //     name: { name },\n    //             //     id: 'uncontrolled-native',\n    //             // }}\n    //             onChange={(values) => setValues(values)}\n    //         >\n    //            <option value={0}>{value}</option>\n    //             { Object.entries(options).map(([key, value]) =>{\n    //                 return (<option key={key} value={value}>{value}</option>)\n    //             })}\n    //     </NativeSelect>\n    //   </FormControl>\n    // </Box>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        className: \"customerDetail_dropDown_box\",\n        children: [\n            label,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                className: \"customerDetail_dropDown\",\n                name: name,\n                onChange: onChange,\n                children: [\n                    \"setValues(\",\n                    value,\n                    \")\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: 0,\n                        children: value\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\DropDown.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 13\n                    }, undefined),\n                    Object.entries(options).map((param)=>{\n                        let [key, value] = param;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: value,\n                            children: value\n                        }, key, false, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\DropDown.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 33\n                        }, undefined);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\DropDown.jsx\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\components\\\\DropDown.jsx\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, undefined));\n};\n_s(DropDown, \"PcYTRPuolQN++L6/2J85r/NMmNg=\");\n_c = DropDown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DropDown);\nvar _c;\n$RefreshReg$(_c, \"DropDown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Ryb3BEb3duLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTRDO0FBQzVDLDZDQUE2QztBQUVkO0FBQ0s7QUFDYztBQUNFO0FBQ0U7QUFFdEQsdUNBQXVDO0FBR3ZDLE1BQU1PLFdBQVcsU0FBK0M7UUFBOUMsRUFBRUMsUUFBTyxFQUFDQyxLQUFJLEVBQUNDLE1BQUssRUFBQ0MsTUFBSyxFQUFDQyxTQUFRLEVBQUNDLElBQUcsRUFBRTs7SUFDdEQsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdmLCtDQUFRQSxDQUFDO1FBQUVVO0lBQU07SUFDOUMsd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxvREFBb0Q7SUFDcEQseUJBQXlCO0lBQ3pCLHdKQUF3SjtJQUN4SixhQUFhO0lBRWIsSUFBSTtJQUVKLE9BQ0ksdUVBQXVFO0lBQ3ZFLDRCQUE0QjtJQUM1QixvRUFBb0U7SUFDcEUsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFFeEIsaUNBQWlDO0lBQ2pDLCtCQUErQjtJQUMvQixxQ0FBcUM7SUFDckMsZ0RBQWdEO0lBQ2hELG9CQUFvQjtJQUNwQix1REFBdUQ7SUFDdkQsWUFBWTtJQUVaLGdEQUFnRDtJQUNoRCwrREFBK0Q7SUFDL0QsNEVBQTRFO0lBQzVFLGtCQUFrQjtJQUVsQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7a0JBR1QsOERBQUNDO1FBQU1LLFdBQVU7O1lBQ1hMOzBCQUNGLDhEQUFDTTtnQkFBT0QsV0FBVTtnQkFBMEJQLE1BQU1BO2dCQUFNRyxVQUFVQTs7b0JBQVc7b0JBQ2xFRjtvQkFBTTtrQ0FDakIsOERBQUNRO3dCQUFPUixPQUFPO2tDQUFJQTs7Ozs7O29CQUNqQlMsT0FBT0MsT0FBTyxDQUFDWixTQUFTYSxHQUFHLENBQUMsU0FBaUI7NEJBQWhCLENBQUNDLEtBQUtaLE1BQU07d0JBQy9CLHFCQUFRLDhEQUFDUTs0QkFBaUJSLE9BQU9BO3NDQUFRQTsyQkFBcEJZOzs7OztvQkFDekI7Ozs7Ozs7Ozs7Ozs7QUFRcEI7R0FwRE1mO0tBQUFBO0FBc0ROLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRHJvcERvd24uanN4PzMzMzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG4vL2ltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LWRyb3Bkb3duLXNlbGVjdFwiO1xyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcclxuaW1wb3J0IElucHV0TGFiZWwgZnJvbSAnQG11aS9tYXRlcmlhbC9JbnB1dExhYmVsJztcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgTmF0aXZlU2VsZWN0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTmF0aXZlU2VsZWN0JztcclxuXHJcbi8vaW1wb3J0IHsgU2VsZWN0LCBTcGFjZSB9IGZyb20gJ2FudGQnO1xyXG5cclxuXHJcbmNvbnN0IERyb3BEb3duID0gKHsgb3B0aW9ucyxuYW1lLHZhbHVlLGxhYmVsLG9uQ2hhbmdlLHJlZiB9KSA9PiB7XHJcbiAgICAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHsgdmFsdWUgfSlcclxuICAgIC8vIGNvbnNvbGUubG9nKHt2YWx1ZXN9KVxyXG4gICAgLy8gcmV0dXJuIChcclxuICAgIC8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbWVyRGV0YWlsX2Ryb3BEb3duX2JveFwiPlxyXG4gICAgLy8gICAgICAgICA8cD57IG5hbWV9PC9wPlxyXG4gICAgLy8gICAgICAgICA8U2VsZWN0IGNsYXNzTmFtZT1cImN1c3RvbWVyRGV0YWlsX2Ryb3BEb3duXCIgcGxhY2Vob2xkZXI9eyB2YWx1ZX0gdmFsdWU9e3ZhbHVlc30gb3B0aW9ucz17b3B0aW9uc30gb25DaGFuZ2U9eyh2YWx1ZXMpID0+IHNldFZhbHVlcyh2YWx1ZXMpfSAvPlxyXG4gICAgLy8gICAgIDwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAvLyApXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvLyA8Qm94IGNsYXNzTmFtZT1cImN1c3RvbWVyRGV0YWlsX2Ryb3BEb3duX2JveFwiIHN4PXt7IG1pbldpZHRoOiAxMjAgfX0+XHJcbiAgICAgICAgLy8gICA8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoPlxyXG4gICAgICAgIC8vICAgICA8SW5wdXRMYWJlbCB2YXJpYW50PVwic3RhbmRhcmRcIiBodG1sRm9yPVwidW5jb250cm9sbGVkLW5hdGl2ZVwiPlxyXG4gICAgICAgIC8vICAgICB7bmFtZX1cclxuICAgICAgICAvLyAgICAgPC9JbnB1dExhYmVsPlxyXG4gICAgICAgIC8vICAgICAgICAgPE5hdGl2ZVNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICAvL2RlZmF1bHRWYWx1ZT17eyB2YWx1ZSB9fVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyAgICAgbmFtZTogeyBuYW1lIH0sXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gICAgIGlkOiAndW5jb250cm9sbGVkLW5hdGl2ZScsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gfX1cclxuICAgICAgICAvLyAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlcykgPT4gc2V0VmFsdWVzKHZhbHVlcyl9XHJcbiAgICAgICAgLy8gICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezB9Pnt2YWx1ZX08L29wdGlvbj5cclxuICAgICAgICAvLyAgICAgICAgICAgICB7IE9iamVjdC5lbnRyaWVzKG9wdGlvbnMpLm1hcCgoW2tleSwgdmFsdWVdKSA9PntcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuICg8b3B0aW9uIGtleT17a2V5fSB2YWx1ZT17dmFsdWV9Pnt2YWx1ZX08L29wdGlvbj4pXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgPC9OYXRpdmVTZWxlY3Q+XHJcbiAgICAgICAgLy8gICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgIC8vIDwvQm94PlxyXG5cclxuXHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImN1c3RvbWVyRGV0YWlsX2Ryb3BEb3duX2JveFwiID5cclxuICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJjdXN0b21lckRldGFpbF9kcm9wRG93blwiIG5hbWU9e25hbWV9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gPlxyXG4gICAgICAgICAgICBzZXRWYWx1ZXMoe3ZhbHVlfSlcclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17MH0+e3ZhbHVlfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICB7IE9iamVjdC5lbnRyaWVzKG9wdGlvbnMpLm1hcCgoW2tleSwgdmFsdWVdKSA9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8b3B0aW9uIGtleT17a2V5fSB2YWx1ZT17dmFsdWV9Pnt2YWx1ZX08L29wdGlvbj4pXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICBcclxuXHJcbik7XHJcblxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyb3BEb3duOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJlYWN0IiwiQm94IiwiSW5wdXRMYWJlbCIsIkZvcm1Db250cm9sIiwiTmF0aXZlU2VsZWN0IiwiRHJvcERvd24iLCJvcHRpb25zIiwibmFtZSIsInZhbHVlIiwibGFiZWwiLCJvbkNoYW5nZSIsInJlZiIsInZhbHVlcyIsInNldFZhbHVlcyIsImNsYXNzTmFtZSIsInNlbGVjdCIsIm9wdGlvbiIsIk9iamVjdCIsImVudHJpZXMiLCJtYXAiLCJrZXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/DropDown.jsx\n"));

/***/ })

});