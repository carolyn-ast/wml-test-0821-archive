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

/***/ "./context/StaticContext.js":
/*!**********************************!*\
  !*** ./context/StaticContext.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StaticContext\": function() { return /* binding */ StaticContext; },\n/* harmony export */   \"useStaticContext\": function() { return /* binding */ useStaticContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst StatContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst StaticContext = (param)=>{\n    let { children  } = param;\n    const detailList = {\n        \"Submission_Date\": \"Submission date\",\n        \"Last Update Date\": \"Last update Time\",\n        \"名\": \"First Name\",\n        \"姓\": \"Last Name\",\n        \"UserId\": \"UserId\",\n        \"mail\": \"Email\",\n        \"wechat_name\": \"Wechat name\",\n        \"gender\": \"Gender\",\n        // missing address in db\n        // missing phone in db\n        \"请填写您的目的地邮编，更好获得附近邻里的帮助\": \"Postal code\",\n        \"City\": \"Target city\",\n        \"如下哪些方面需要我们的帮助？\": \"Need help with\",\n        \"Budget_price\": \"Budget\",\n        \"rent_type\": \"Rent type\",\n        \"rent_date\": \"Wish to Rent date\",\n        \"rent_duration\": \"Rent duration\",\n        \"几人入住？\": \"Tenants number\",\n        \"house_type\": \"House type\",\n        \"semi_underground\": \"Underground acceptance\",\n        \"room_type\": \"Room type\",\n        \"是否有宠物\": \"Pets Allowed\",\n        \"Kitchen\": \"Kitchen\",\n        \"Furniture\": \"Furniture\",\n        \"车位\": \"Parking\",\n        \"Assistant_name\": \"Assistant\",\n        \"rent_status\": \"rent status\",\n        \"Leasing_demand\": \"Leasing demand\",\n        \"Assistant_message\": \"Message for Assistant\"\n    };\n    const options_city = {\n        \"1\": \"温哥华\",\n        \"2\": \"本拿比\",\n        \"3\": \"列治文\",\n        \"4\": \"北素里\",\n        \"5\": \"中素里\",\n        \"6\": \"南素里白石\",\n        \"7\": \"高贵林\",\n        \"8\": \"西温\",\n        \"9\": \"北温\",\n        \"10\": \"满地宝\",\n        \"11\": \"新西敏\",\n        \"12\": \"枫树岭\",\n        \"13\": \"其他城市\",\n        \"14\": \"我不是租客，我不租房\",\n        \"15\": \"我是房东，我要出租\"\n    };\n    const options_rentType = {\n        \"1\": \"必须整租\",\n        \"2\": \"可以接受合租\"\n    };\n    const options_gender = {\n        \"1\": \"皆为男性\",\n        \"2\": \"都是女性\",\n        \"3\": \"组合\",\n        \"4\": \"暂不说明\"\n    };\n    const customerCatogary = [\n        \"Current Clients\",\n        \"New Clients\",\n        \"Potential Clients\",\n        \"Clients\",\n        \"Past Clients\"\n    ];\n    const externalCityTables = {\n        \"Vancouver\": \"old_vancouver_match\",\n        \"Burnaby\": \"old_burnaby_match\",\n        \"Coquitlam\": \"old_internal_coquitlam_match\",\n        \"Richmond\": \"old_richmond_match\",\n        \"Surrey\": \"old_surrey_match\",\n        \"South Surrey\": \"old_surrey_match\",\n        \"White Rock\": \"old_surrey_match\"\n    };\n    const internalCityTables = {\n        \"Vancouver\": \"old_internal_vancouver_match\",\n        \"Burnaby\": \"old_internal_burnaby_match\",\n        \"Coquitlam\": \"old_internal_coquitlam_match\",\n        \"Richmond\": \"old_internal_richmond_match\",\n        \"Surrey\": \"old_internal_surrey_match\",\n        \"South Surrey\": \"old_internal_surrey_match\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StatContext.Provider, {\n        value: {\n            detailList,\n            customerCatogary,\n            externalCityTables,\n            internalCityTables,\n            options_city,\n            options_gender,\n            options_rentType\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\context\\\\StaticContext.js\",\n        lineNumber: 99,\n        columnNumber: 9\n    }, undefined);\n};\n_c = StaticContext;\nconst useStaticContext = ()=>{\n    _s();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(StatContext);\n};\n_s(useStaticContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"StaticContext\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L1N0YXRpY0NvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUQ7QUFFekQsTUFBTUcsNEJBQWNGLG9EQUFhQTtBQUUxQixNQUFNRyxnQkFBZ0IsU0FBa0I7UUFBakIsRUFBRUMsU0FBUSxFQUFFO0lBRXRDLE1BQU1DLGFBQWE7UUFDZixtQkFBbUI7UUFDbkIsb0JBQW9CO1FBQ3BCLEtBQUs7UUFDTCxLQUFLO1FBQ0wsVUFBUztRQUNULFFBQVE7UUFDUixlQUFlO1FBQ2YsVUFBVTtRQUVWLHdCQUF3QjtRQUN4QixzQkFBc0I7UUFDdEIsMEJBQTBCO1FBQzFCLFFBQVE7UUFDUixrQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLFNBQVM7UUFDVCxjQUFjO1FBQ2Qsb0JBQW9CO1FBQ3BCLGFBQWE7UUFDYixTQUFTO1FBQ1QsV0FBVztRQUNYLGFBQWE7UUFDYixNQUFNO1FBQ04sa0JBQWtCO1FBQ2xCLGVBQWM7UUFDZCxrQkFBa0I7UUFDbEIscUJBQXFCO0lBRXpCO0lBRUEsTUFBTUMsZUFBZTtRQUNqQixLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07SUFDVjtJQUNBLE1BQU1DLG1CQUFtQjtRQUNyQixLQUFLO1FBQ0wsS0FBSztJQUNUO0lBRUEsTUFBTUMsaUJBQWlCO1FBQ25CLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7SUFFVDtJQUVBLE1BQU1DLG1CQUFtQjtRQUNyQjtRQUNBO1FBQ0E7UUFDQTtRQUNBO0tBQ0g7SUFFRCxNQUFNQyxxQkFBcUI7UUFDdkIsYUFBYTtRQUNiLFdBQVc7UUFDWCxhQUFhO1FBQ2IsWUFBWTtRQUNaLFVBQVU7UUFDVixnQkFBZ0I7UUFDaEIsY0FBYztJQUNsQjtJQUVBLE1BQU1DLHFCQUFxQjtRQUN2QixhQUFhO1FBQ2IsV0FBVztRQUNYLGFBQWE7UUFDYixZQUFZO1FBQ1osVUFBVTtRQUNWLGdCQUFnQjtJQUNwQjtJQUVBLHFCQUNJLDhEQUFDVCxZQUFZVSxRQUFRO1FBQUNDLE9BQU87WUFDekJSO1lBQ0FJO1lBQ0FDO1lBQ0FDO1lBQ0FMO1lBQ0FFO1lBQ0FEO1FBQ0o7a0JBRUtIOzs7Ozs7QUFHYixFQUFFO0tBM0dXRDtBQTZHTixNQUFNVyxtQkFBbUIsSUFBTWI7O0lBQUFBLE9BQUFBLGlEQUFVQSxDQUFDQztBQUFXLEVBQUU7R0FBakRZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHQvU3RhdGljQ29udGV4dC5qcz9hNzEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTdGF0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGNvbnN0IFN0YXRpY0NvbnRleHQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG5cbiAgICBjb25zdCBkZXRhaWxMaXN0ID0ge1xuICAgICAgICBcIlN1Ym1pc3Npb25fRGF0ZVwiOiBcIlN1Ym1pc3Npb24gZGF0ZVwiLFxuICAgICAgICBcIkxhc3QgVXBkYXRlIERhdGVcIjogXCJMYXN0IHVwZGF0ZSBUaW1lXCIsXG4gICAgICAgIFwi5ZCNXCI6IFwiRmlyc3QgTmFtZVwiLFxuICAgICAgICBcIuWnk1wiOiBcIkxhc3QgTmFtZVwiLFxuICAgICAgICBcIlVzZXJJZFwiOidVc2VySWQnLFxuICAgICAgICBcIm1haWxcIjogXCJFbWFpbFwiLFxuICAgICAgICBcIndlY2hhdF9uYW1lXCI6IFwiV2VjaGF0IG5hbWVcIixcbiAgICAgICAgXCJnZW5kZXJcIjogXCJHZW5kZXJcIixcbiAgICAgICAgXG4gICAgICAgIC8vIG1pc3NpbmcgYWRkcmVzcyBpbiBkYlxuICAgICAgICAvLyBtaXNzaW5nIHBob25lIGluIGRiXG4gICAgICAgIFwi6K+35aGr5YaZ5oKo55qE55uu55qE5Zyw6YKu57yW77yM5pu05aW96I635b6X6ZmE6L+R6YK76YeM55qE5biu5YqpXCI6IFwiUG9zdGFsIGNvZGVcIixcbiAgICAgICAgXCJDaXR5XCI6IFwiVGFyZ2V0IGNpdHlcIixcbiAgICAgICAgXCLlpoLkuIvlk6rkupvmlrnpnaLpnIDopoHmiJHku6znmoTluK7liqnvvJ9cIjpcIk5lZWQgaGVscCB3aXRoXCIsXG4gICAgICAgIFwiQnVkZ2V0X3ByaWNlXCI6IFwiQnVkZ2V0XCIsXG4gICAgICAgIFwicmVudF90eXBlXCI6IFwiUmVudCB0eXBlXCIsXG4gICAgICAgIFwicmVudF9kYXRlXCI6IFwiV2lzaCB0byBSZW50IGRhdGVcIixcbiAgICAgICAgXCJyZW50X2R1cmF0aW9uXCI6IFwiUmVudCBkdXJhdGlvblwiLFxuICAgICAgICBcIuWHoOS6uuWFpeS9j++8n1wiOiBcIlRlbmFudHMgbnVtYmVyXCIsXG4gICAgICAgIFwiaG91c2VfdHlwZVwiOiBcIkhvdXNlIHR5cGVcIixcbiAgICAgICAgXCJzZW1pX3VuZGVyZ3JvdW5kXCI6IFwiVW5kZXJncm91bmQgYWNjZXB0YW5jZVwiLFxuICAgICAgICBcInJvb21fdHlwZVwiOiBcIlJvb20gdHlwZVwiLFxuICAgICAgICBcIuaYr+WQpuacieWuoOeJqVwiOiBcIlBldHMgQWxsb3dlZFwiLFxuICAgICAgICBcIktpdGNoZW5cIjogXCJLaXRjaGVuXCIsXG4gICAgICAgIFwiRnVybml0dXJlXCI6IFwiRnVybml0dXJlXCIsXG4gICAgICAgIFwi6L2m5L2NXCI6IFwiUGFya2luZ1wiLFxuICAgICAgICBcIkFzc2lzdGFudF9uYW1lXCI6IFwiQXNzaXN0YW50XCIsXG4gICAgICAgIFwicmVudF9zdGF0dXNcIjoncmVudCBzdGF0dXMnLFxuICAgICAgICBcIkxlYXNpbmdfZGVtYW5kXCI6IFwiTGVhc2luZyBkZW1hbmRcIixcbiAgICAgICAgXCJBc3Npc3RhbnRfbWVzc2FnZVwiOiBcIk1lc3NhZ2UgZm9yIEFzc2lzdGFudFwiXG4gICAgICAgXG4gICAgfVxuXG4gICAgY29uc3Qgb3B0aW9uc19jaXR5ID0ge1xuICAgICAgICBcIjFcIjogXCLmuKnlk6XljY5cIixcbiAgICAgICAgXCIyXCI6IFwi5pys5ou/5q+UXCIsXG4gICAgICAgIFwiM1wiOiBcIuWIl+ayu+aWh1wiLFxuICAgICAgICBcIjRcIjogXCLljJfntKDph4xcIixcbiAgICAgICAgXCI1XCI6IFwi5Lit57Sg6YeMXCIsXG4gICAgICAgIFwiNlwiOiBcIuWNl+e0oOmHjOeZveefs1wiLFxuICAgICAgICBcIjdcIjogXCLpq5jotLXmnpdcIixcbiAgICAgICAgXCI4XCI6IFwi6KW/5ripXCIsXG4gICAgICAgIFwiOVwiOiBcIuWMl+a4qVwiLFxuICAgICAgICBcIjEwXCI6IFwi5ruh5Zyw5a6dXCIsXG4gICAgICAgIFwiMTFcIjogXCLmlrDopb/mlY9cIixcbiAgICAgICAgXCIxMlwiOiBcIuaeq+agkeWyrVwiLFxuICAgICAgICBcIjEzXCI6IFwi5YW25LuW5Z+O5biCXCIsXG4gICAgICAgIFwiMTRcIjogXCLmiJHkuI3mmK/np5/lrqLvvIzmiJHkuI3np5/miL9cIixcbiAgICAgICAgXCIxNVwiOiBcIuaIkeaYr+aIv+S4nO+8jOaIkeimgeWHuuenn1wiXG4gICAgfVxuICAgIGNvbnN0IG9wdGlvbnNfcmVudFR5cGUgPSB7XG4gICAgICAgIFwiMVwiOiBcIuW/hemhu+aVtOenn1wiLFxuICAgICAgICBcIjJcIjogXCLlj6/ku6XmjqXlj5flkIjnp59cIlxuICAgIH1cblxuICAgIGNvbnN0IG9wdGlvbnNfZ2VuZGVyID0ge1xuICAgICAgICBcIjFcIjogXCLnmobkuLrnlLfmgKdcIixcbiAgICAgICAgXCIyXCI6IFwi6YO95piv5aWz5oCnXCIsXG4gICAgICAgIFwiM1wiOiBcIue7hOWQiFwiLFxuICAgICAgICBcIjRcIjogXCLmmoLkuI3or7TmmI5cIlxuICAgICAgIFxuICAgIH1cblxuICAgIGNvbnN0IGN1c3RvbWVyQ2F0b2dhcnkgPSBbXG4gICAgICAgIFwiQ3VycmVudCBDbGllbnRzXCIsXG4gICAgICAgIFwiTmV3IENsaWVudHNcIixcbiAgICAgICAgXCJQb3RlbnRpYWwgQ2xpZW50c1wiLFxuICAgICAgICBcIkNsaWVudHNcIixcbiAgICAgICAgXCJQYXN0IENsaWVudHNcIlxuICAgIF1cblxuICAgIGNvbnN0IGV4dGVybmFsQ2l0eVRhYmxlcyA9IHtcbiAgICAgICAgXCJWYW5jb3V2ZXJcIjogXCJvbGRfdmFuY291dmVyX21hdGNoXCIsXG4gICAgICAgIFwiQnVybmFieVwiOiBcIm9sZF9idXJuYWJ5X21hdGNoXCIsXG4gICAgICAgIFwiQ29xdWl0bGFtXCI6IFwib2xkX2ludGVybmFsX2NvcXVpdGxhbV9tYXRjaFwiLFxuICAgICAgICBcIlJpY2htb25kXCI6IFwib2xkX3JpY2htb25kX21hdGNoXCIsXG4gICAgICAgIFwiU3VycmV5XCI6IFwib2xkX3N1cnJleV9tYXRjaFwiLFxuICAgICAgICBcIlNvdXRoIFN1cnJleVwiOiBcIm9sZF9zdXJyZXlfbWF0Y2hcIixcbiAgICAgICAgXCJXaGl0ZSBSb2NrXCI6IFwib2xkX3N1cnJleV9tYXRjaFwiXG4gICAgfVxuXG4gICAgY29uc3QgaW50ZXJuYWxDaXR5VGFibGVzID0ge1xuICAgICAgICBcIlZhbmNvdXZlclwiOiBcIm9sZF9pbnRlcm5hbF92YW5jb3V2ZXJfbWF0Y2hcIixcbiAgICAgICAgXCJCdXJuYWJ5XCI6IFwib2xkX2ludGVybmFsX2J1cm5hYnlfbWF0Y2hcIixcbiAgICAgICAgXCJDb3F1aXRsYW1cIjogXCJvbGRfaW50ZXJuYWxfY29xdWl0bGFtX21hdGNoXCIsXG4gICAgICAgIFwiUmljaG1vbmRcIjogXCJvbGRfaW50ZXJuYWxfcmljaG1vbmRfbWF0Y2hcIixcbiAgICAgICAgXCJTdXJyZXlcIjogXCJvbGRfaW50ZXJuYWxfc3VycmV5X21hdGNoXCIsXG4gICAgICAgIFwiU291dGggU3VycmV5XCI6IFwib2xkX2ludGVybmFsX3N1cnJleV9tYXRjaFwiXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFN0YXRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XG4gICAgICAgICAgICBkZXRhaWxMaXN0LFxuICAgICAgICAgICAgY3VzdG9tZXJDYXRvZ2FyeSxcbiAgICAgICAgICAgIGV4dGVybmFsQ2l0eVRhYmxlcyxcbiAgICAgICAgICAgIGludGVybmFsQ2l0eVRhYmxlcyxcbiAgICAgICAgICAgIG9wdGlvbnNfY2l0eSxcbiAgICAgICAgICAgIG9wdGlvbnNfZ2VuZGVyLFxuICAgICAgICAgICAgb3B0aW9uc19yZW50VHlwZVxuICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvU3RhdENvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufTtcblxuZXhwb3J0IGNvbnN0IHVzZVN0YXRpY0NvbnRleHQgPSAoKSA9PiB1c2VDb250ZXh0KFN0YXRDb250ZXh0KTsiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIlN0YXRDb250ZXh0IiwiU3RhdGljQ29udGV4dCIsImNoaWxkcmVuIiwiZGV0YWlsTGlzdCIsIm9wdGlvbnNfY2l0eSIsIm9wdGlvbnNfcmVudFR5cGUiLCJvcHRpb25zX2dlbmRlciIsImN1c3RvbWVyQ2F0b2dhcnkiLCJleHRlcm5hbENpdHlUYWJsZXMiLCJpbnRlcm5hbENpdHlUYWJsZXMiLCJQcm92aWRlciIsInZhbHVlIiwidXNlU3RhdGljQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/StaticContext.js\n"));

/***/ })

});