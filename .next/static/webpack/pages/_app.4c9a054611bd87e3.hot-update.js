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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StaticContext\": function() { return /* binding */ StaticContext; },\n/* harmony export */   \"useStaticContext\": function() { return /* binding */ useStaticContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst StatContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst StaticContext = (param)=>{\n    let { children  } = param;\n    const detailList = {\n        \"Submission_Date\": \"Submission Date\",\n        \"LastUpdateTime\": \"Last Update Time\",\n        \"名\": \"First Name\",\n        \"姓\": \"Last Name\",\n        \"UserId\": \"UserId\",\n        \"mail\": \"Email\",\n        \"wechat_name\": \"Wechat Name\",\n        \"gender\": \"Gender\",\n        // missing address in db\n        // missing phone in db\n        \"请填写您的目的地邮编，更好获得附近邻里的帮助\": \"Postal Code\",\n        \"City\": \"Target city\",\n        \"如下哪些方面需要我们的帮助？\": \"Need Help With\",\n        \"Budget_price\": \"Budget\",\n        \"rent_type\": \"Rent Type\",\n        \"rent_date\": \"Wish to rent from\",\n        \"rent_duration\": \"Rent duration\",\n        \"几人入住？\": \"Tenants number\",\n        \"house_type\": \"House type\",\n        \"semi_underground\": \"Underground acceptance\",\n        \"room_type\": \"Room type\",\n        \"是否有宠物\": \"Pets Allowed\",\n        \"Kitchen\": \"Kitchen\",\n        \"Furniture\": \"Furniture\",\n        \"车位\": \"Parking\",\n        \"Assistant_name\": \"Assistant\",\n        \"rent_status\": \"rent status\",\n        \"Leasing_demand\": \"Leasing demand\",\n        \"Assistant_message\": \"Message for Assistant\"\n    };\n    const options_city = {\n        \"1\": \"温哥华\",\n        \"2\": \"本拿比\",\n        \"3\": \"列治文\",\n        \"4\": \"北素里\",\n        \"5\": \"中素里\",\n        \"6\": \"南素里白石\",\n        \"7\": \"高贵林\",\n        \"8\": \"西温\",\n        \"9\": \"北温\",\n        \"10\": \"满地宝\",\n        \"11\": \"新西敏\",\n        \"12\": \"枫树岭\",\n        \"13\": \"其他城市\",\n        \"14\": \"我不是租客，我不租房\",\n        \"15\": \"我是房东，我要出租\"\n    };\n    const options_rentType = {\n        \"1\": \"必须整租\",\n        \"2\": \"可以接受合租\"\n    };\n    const options_gender = {\n        \"1\": \"皆为男性\",\n        \"2\": \"都是女性\",\n        \"3\": \"组合\",\n        \"4\": \"暂不说明\"\n    };\n    const options_houseType = {\n        \"1\": \"独立屋\",\n        \"2\": \"联排\",\n        \"3\": \"公寓\",\n        \"4\": \"后巷屋\",\n        \"5\": \"只要预算符合，任何房屋类型皆可\"\n    };\n    const options_underground = {\n        \"1\": \"可接受半地下\",\n        \"2\": \"完全不接受半地下\"\n    };\n    const options_BedroomNum = {\n        \"1\": \"1睡房\",\n        \"2\": \"2睡房\",\n        \"3\": \"3睡房\",\n        \"4\": \"4睡房\",\n        \"5\": \"5睡房\",\n        \"6\": \"6 或 6个以上 睡房\",\n        \"7\": \"other\"\n    };\n    const options_pet = {\n        \"1\": \"无宠物\",\n        \"2\": \"有猫\",\n        \"3\": \"有狗\",\n        \"4\": \"其他宠物\"\n    };\n    const options_Kitchen = {\n        \"1\": \"必须独立厨房\",\n        \"2\": \"可共用厨房\",\n        \"3\": \"无所谓\",\n        \"4\": \"other\"\n    };\n    const options_furniture = {\n        \"1\": \"需要全套家具\",\n        \"2\": \"需要简单家具\",\n        \"3\": \"不要家具\",\n        \"4\": \"有家具更好，没有也可以\"\n    };\n    const options_parking = {\n        \"1\": \"没有车，不需要车位\",\n        \"2\": \"需要正规停车位\",\n        \"3\": \"可以路边停车\",\n        \"4\": \"other\"\n    };\n    const options_status = {\n        \"1\": \"YES\",\n        \"2\": \"NO\",\n        \"3\": \"PENDING\",\n        \"4\": \"DELETED\",\n        \"5\": \"看房客户\"\n    };\n    const options_tenantNum = {\n        \"1\": \"1\",\n        \"2\": \"2\",\n        \"3\": \"3\",\n        \"4\": \"4\",\n        \"5\": \"5\",\n        \"6\": \"6\",\n        \"7\": \"6人以上\"\n    };\n    const options_rentDuration = {\n        \"1\": \"长租1年\",\n        \"2\": \"7个月到一年\",\n        \"3\": \"短租半年\",\n        \"4\": \"4个月到半年\",\n        \"5\": \"短租三个月\",\n        \"6\": \"短租一个月\",\n        \"7\": \"短租一周\"\n    };\n    const customerCatogary = [\n        \"Current Clients\",\n        \"New Clients\",\n        \"Potential Clients\",\n        \"Clients\",\n        \"Past Clients\"\n    ];\n    const externalCityTables = {\n        \"Vancouver\": \"old_vancouver_match\",\n        \"Burnaby\": \"old_burnaby_match\",\n        \"Coquitlam\": \"old_internal_coquitlam_match\",\n        \"Richmond\": \"old_richmond_match\",\n        \"Surrey\": \"old_surrey_match\",\n        \"South Surrey\": \"old_surrey_match\",\n        \"White Rock\": \"old_surrey_match\"\n    };\n    const internalCityTables = {\n        \"Vancouver\": \"old_internal_vancouver_match\",\n        \"Burnaby\": \"old_internal_burnaby_match\",\n        \"Coquitlam\": \"old_internal_coquitlam_match\",\n        \"Richmond\": \"old_internal_richmond_match\",\n        \"Surrey\": \"old_internal_surrey_match\",\n        \"South Surrey\": \"old_internal_surrey_match\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StatContext.Provider, {\n        value: {\n            detailList,\n            customerCatogary,\n            externalCityTables,\n            internalCityTables,\n            options_city,\n            options_gender,\n            options_rentType,\n            options_BedroomNum,\n            options_Kitchen,\n            options_furniture,\n            options_parking,\n            options_underground,\n            options_pet,\n            options_houseType,\n            options_status,\n            options_tenantNum,\n            options_rentDuration\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\context\\\\StaticContext.js\",\n        lineNumber: 181,\n        columnNumber: 9\n    }, undefined);\n};\n_c = StaticContext;\nconst useStaticContext = ()=>{\n    _s();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(StatContext);\n};\n_s(useStaticContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"StaticContext\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFDQUM7WUFDQUM7WUFDQWY7WUFDQUU7WUFDQUQ7WUFDQUk7WUFDQUU7WUFDQUM7WUFDQUM7WUFDQUw7WUFDQUU7WUFDQUg7WUFDQU87WUFDQUM7WUFDQUM7UUFDSjtrQkFFS2Q7Ozs7OztBQUdiLEVBQUU7S0F2TVdEO0FBeU1OLE1BQU1xQixtQkFBbUIsSUFBTXZCOztJQUFBQSxPQUFBQSxpREFBVUEsQ0FBQ0M7QUFBVyxFQUFFO0dBQWpEc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9TdGF0aWNDb250ZXh0LmpzP2E3MTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFN0YXRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgY29uc3QgU3RhdGljQ29udGV4dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcblxuICAgIGNvbnN0IGRldGFpbExpc3QgPSB7XG4gICAgICAgIFwiU3VibWlzc2lvbl9EYXRlXCI6IFwiU3VibWlzc2lvbiBEYXRlXCIsXG4gICAgICAgIFwiTGFzdFVwZGF0ZVRpbWVcIjogXCJMYXN0IFVwZGF0ZSBUaW1lXCIsXG4gICAgICAgIFwi5ZCNXCI6IFwiRmlyc3QgTmFtZVwiLFxuICAgICAgICBcIuWnk1wiOiBcIkxhc3QgTmFtZVwiLFxuICAgICAgICBcIlVzZXJJZFwiOidVc2VySWQnLFxuICAgICAgICBcIm1haWxcIjogXCJFbWFpbFwiLFxuICAgICAgICBcIndlY2hhdF9uYW1lXCI6IFwiV2VjaGF0IE5hbWVcIixcbiAgICAgICAgXCJnZW5kZXJcIjogXCJHZW5kZXJcIixcbiAgICAgICAgXG4gICAgICAgIC8vIG1pc3NpbmcgYWRkcmVzcyBpbiBkYlxuICAgICAgICAvLyBtaXNzaW5nIHBob25lIGluIGRiXG4gICAgICAgIFwi6K+35aGr5YaZ5oKo55qE55uu55qE5Zyw6YKu57yW77yM5pu05aW96I635b6X6ZmE6L+R6YK76YeM55qE5biu5YqpXCI6IFwiUG9zdGFsIENvZGVcIixcbiAgICAgICAgXCJDaXR5XCI6IFwiVGFyZ2V0IGNpdHlcIixcbiAgICAgICAgXCLlpoLkuIvlk6rkupvmlrnpnaLpnIDopoHmiJHku6znmoTluK7liqnvvJ9cIjpcIk5lZWQgSGVscCBXaXRoXCIsXG4gICAgICAgIFwiQnVkZ2V0X3ByaWNlXCI6IFwiQnVkZ2V0XCIsXG4gICAgICAgIFwicmVudF90eXBlXCI6IFwiUmVudCBUeXBlXCIsXG4gICAgICAgIFwicmVudF9kYXRlXCI6IFwiV2lzaCB0byByZW50IGZyb21cIixcbiAgICAgICAgXCJyZW50X2R1cmF0aW9uXCI6IFwiUmVudCBkdXJhdGlvblwiLFxuICAgICAgICBcIuWHoOS6uuWFpeS9j++8n1wiOiBcIlRlbmFudHMgbnVtYmVyXCIsXG4gICAgICAgIFwiaG91c2VfdHlwZVwiOiBcIkhvdXNlIHR5cGVcIixcbiAgICAgICAgXCJzZW1pX3VuZGVyZ3JvdW5kXCI6IFwiVW5kZXJncm91bmQgYWNjZXB0YW5jZVwiLFxuICAgICAgICBcInJvb21fdHlwZVwiOiBcIlJvb20gdHlwZVwiLFxuICAgICAgICBcIuaYr+WQpuacieWuoOeJqVwiOiBcIlBldHMgQWxsb3dlZFwiLFxuICAgICAgICBcIktpdGNoZW5cIjogXCJLaXRjaGVuXCIsXG4gICAgICAgIFwiRnVybml0dXJlXCI6IFwiRnVybml0dXJlXCIsXG4gICAgICAgIFwi6L2m5L2NXCI6IFwiUGFya2luZ1wiLFxuICAgICAgICBcIkFzc2lzdGFudF9uYW1lXCI6IFwiQXNzaXN0YW50XCIsXG4gICAgICAgIFwicmVudF9zdGF0dXNcIjoncmVudCBzdGF0dXMnLFxuICAgICAgICBcIkxlYXNpbmdfZGVtYW5kXCI6IFwiTGVhc2luZyBkZW1hbmRcIixcbiAgICAgICAgXCJBc3Npc3RhbnRfbWVzc2FnZVwiOiBcIk1lc3NhZ2UgZm9yIEFzc2lzdGFudFwiXG4gICAgICAgXG4gICAgfVxuXG4gICAgY29uc3Qgb3B0aW9uc19jaXR5ID0ge1xuICAgICAgICBcIjFcIjogXCLmuKnlk6XljY5cIixcbiAgICAgICAgXCIyXCI6IFwi5pys5ou/5q+UXCIsXG4gICAgICAgIFwiM1wiOiBcIuWIl+ayu+aWh1wiLFxuICAgICAgICBcIjRcIjogXCLljJfntKDph4xcIixcbiAgICAgICAgXCI1XCI6IFwi5Lit57Sg6YeMXCIsXG4gICAgICAgIFwiNlwiOiBcIuWNl+e0oOmHjOeZveefs1wiLFxuICAgICAgICBcIjdcIjogXCLpq5jotLXmnpdcIixcbiAgICAgICAgXCI4XCI6IFwi6KW/5ripXCIsXG4gICAgICAgIFwiOVwiOiBcIuWMl+a4qVwiLFxuICAgICAgICBcIjEwXCI6IFwi5ruh5Zyw5a6dXCIsXG4gICAgICAgIFwiMTFcIjogXCLmlrDopb/mlY9cIixcbiAgICAgICAgXCIxMlwiOiBcIuaeq+agkeWyrVwiLFxuICAgICAgICBcIjEzXCI6IFwi5YW25LuW5Z+O5biCXCIsXG4gICAgICAgIFwiMTRcIjogXCLmiJHkuI3mmK/np5/lrqLvvIzmiJHkuI3np5/miL9cIixcbiAgICAgICAgXCIxNVwiOiBcIuaIkeaYr+aIv+S4nO+8jOaIkeimgeWHuuenn1wiXG4gICAgfVxuICAgIGNvbnN0IG9wdGlvbnNfcmVudFR5cGUgPSB7XG4gICAgICAgIFwiMVwiOiBcIuW/hemhu+aVtOenn1wiLFxuICAgICAgICBcIjJcIjogXCLlj6/ku6XmjqXlj5flkIjnp59cIlxuICAgIH1cblxuICAgIGNvbnN0IG9wdGlvbnNfZ2VuZGVyID0ge1xuICAgICAgICBcIjFcIjogXCLnmobkuLrnlLfmgKdcIixcbiAgICAgICAgXCIyXCI6IFwi6YO95piv5aWz5oCnXCIsXG4gICAgICAgIFwiM1wiOiBcIue7hOWQiFwiLFxuICAgICAgICBcIjRcIjogXCLmmoLkuI3or7TmmI5cIlxuICAgICAgIFxuICAgIH1cblxuICAgIGNvbnN0IG9wdGlvbnNfaG91c2VUeXBlID0ge1xuICAgICAgICBcIjFcIjogXCLni6znq4vlsYtcIixcbiAgICAgICAgXCIyXCI6IFwi6IGU5o6SXCIsXG4gICAgICAgIFwiM1wiOiBcIuWFrOWvk1wiLFxuICAgICAgICBcIjRcIjogXCLlkI7lt7flsYtcIixcbiAgICAgICAgXCI1XCI6IFwi5Y+q6KaB6aKE566X56ym5ZCI77yM5Lu75L2V5oi/5bGL57G75Z6L55qG5Y+vXCJcbiAgICB9XG5cbiAgICBjb25zdCBvcHRpb25zX3VuZGVyZ3JvdW5kID0ge1xuICAgICAgICBcIjFcIjogXCLlj6/mjqXlj5fljYrlnLDkuItcIixcbiAgICAgICAgXCIyXCI6IFwi5a6M5YWo5LiN5o6l5Y+X5Y2K5Zyw5LiLXCJcbiAgICB9XG5cbiAgICBjb25zdCBvcHRpb25zX0JlZHJvb21OdW0gPSB7XG4gICAgICAgIFwiMVwiOiBcIjHnnaHmiL9cIixcbiAgICAgICAgXCIyXCI6IFwiMuedoeaIv1wiLFxuICAgICAgICBcIjNcIjogXCIz552h5oi/XCIsXG4gICAgICAgIFwiNFwiOiBcIjTnnaHmiL9cIixcbiAgICAgICAgXCI1XCI6IFwiNeedoeaIv1wiLFxuICAgICAgICBcIjZcIjogXCI2IOaIliA25Liq5Lul5LiKIOedoeaIv1wiLFxuICAgICAgICBcIjdcIjogXCJvdGhlclwiXG4gICAgfVxuXG4gICAgY29uc3Qgb3B0aW9uc19wZXQgPSB7XG4gICAgICAgIFwiMVwiOiBcIuaXoOWuoOeJqVwiLFxuICAgICAgICBcIjJcIjogXCLmnInnjKtcIixcbiAgICAgICAgXCIzXCI6IFwi5pyJ54uXXCIsXG4gICAgICAgIFwiNFwiOiBcIuWFtuS7luWuoOeJqVwiXG4gICAgfVxuXG4gICAgY29uc3Qgb3B0aW9uc19LaXRjaGVuID0ge1xuICAgICAgICBcIjFcIjogXCLlv4Xpobvni6znq4vljqjmiL9cIixcbiAgICAgICAgXCIyXCI6IFwi5Y+v5YWx55So5Y6o5oi/XCIsXG4gICAgICAgIFwiM1wiOiBcIuaXoOaJgOiwk1wiLFxuICAgICAgICBcIjRcIjogXCJvdGhlclwiXG4gICAgfVxuXG4gICAgY29uc3Qgb3B0aW9uc19mdXJuaXR1cmUgPSB7XG4gICAgICAgIFwiMVwiOiBcIumcgOimgeWFqOWll+WutuWFt1wiLFxuICAgICAgICBcIjJcIjogXCLpnIDopoHnroDljZXlrrblhbdcIixcbiAgICAgICAgXCIzXCI6IFwi5LiN6KaB5a625YW3XCIsXG4gICAgICAgIFwiNFwiOiBcIuacieWutuWFt+abtOWlve+8jOayoeacieS5n+WPr+S7pVwiXG4gICAgfVxuXG4gICAgY29uc3Qgb3B0aW9uc19wYXJraW5nID0ge1xuICAgICAgICBcIjFcIjogXCLmsqHmnInovabvvIzkuI3pnIDopoHovabkvY1cIixcbiAgICAgICAgXCIyXCI6IFwi6ZyA6KaB5q2j6KeE5YGc6L2m5L2NXCIsXG4gICAgICAgIFwiM1wiOiBcIuWPr+S7pei3r+i+ueWBnOi9plwiLFxuICAgICAgICBcIjRcIjogXCJvdGhlclwiXG4gICAgfVxuXG4gICAgY29uc3Qgb3B0aW9uc19zdGF0dXMgPSB7XG4gICAgICAgIFwiMVwiOiBcIllFU1wiLFxuICAgICAgICBcIjJcIjogXCJOT1wiLFxuICAgICAgICBcIjNcIjogXCJQRU5ESU5HXCIsXG4gICAgICAgIFwiNFwiOiBcIkRFTEVURURcIixcbiAgICAgICAgXCI1XCI6IFwi55yL5oi/5a6i5oi3XCIgIFxuICAgIH1cblxuICAgIGNvbnN0IG9wdGlvbnNfdGVuYW50TnVtID0ge1xuICAgICAgICBcIjFcIjogXCIxXCIsXG4gICAgICAgIFwiMlwiOiBcIjJcIixcbiAgICAgICAgXCIzXCI6IFwiM1wiLFxuICAgICAgICBcIjRcIjogXCI0XCIsXG4gICAgICAgIFwiNVwiOiBcIjVcIixcbiAgICAgICAgXCI2XCI6IFwiNlwiLFxuICAgICAgICBcIjdcIjogXCI25Lq65Lul5LiKXCJcbiAgICB9XG4gICAgXG4gICAgY29uc3Qgb3B0aW9uc19yZW50RHVyYXRpb24gPSB7XG4gICAgICAgIFwiMVwiOiBcIumVv+ennzHlubRcIixcbiAgICAgICAgXCIyXCI6IFwiN+S4quaciOWIsOS4gOW5tFwiLFxuICAgICAgICBcIjNcIjogXCLnn63np5/ljYrlubRcIixcbiAgICAgICAgXCI0XCI6IFwiNOS4quaciOWIsOWNiuW5tFwiLFxuICAgICAgICBcIjVcIjogXCLnn63np5/kuInkuKrmnIhcIixcbiAgICAgICAgXCI2XCI6IFwi55+t56ef5LiA5Liq5pyIXCIsXG4gICAgICAgIFwiN1wiOiBcIuefreenn+S4gOWRqFwiLFxuICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBjdXN0b21lckNhdG9nYXJ5ID0gW1xuICAgICAgICBcIkN1cnJlbnQgQ2xpZW50c1wiLFxuICAgICAgICBcIk5ldyBDbGllbnRzXCIsXG4gICAgICAgIFwiUG90ZW50aWFsIENsaWVudHNcIixcbiAgICAgICAgXCJDbGllbnRzXCIsXG4gICAgICAgIFwiUGFzdCBDbGllbnRzXCJcbiAgICBdXG5cbiAgICBjb25zdCBleHRlcm5hbENpdHlUYWJsZXMgPSB7XG4gICAgICAgIFwiVmFuY291dmVyXCI6IFwib2xkX3ZhbmNvdXZlcl9tYXRjaFwiLFxuICAgICAgICBcIkJ1cm5hYnlcIjogXCJvbGRfYnVybmFieV9tYXRjaFwiLFxuICAgICAgICBcIkNvcXVpdGxhbVwiOiBcIm9sZF9pbnRlcm5hbF9jb3F1aXRsYW1fbWF0Y2hcIixcbiAgICAgICAgXCJSaWNobW9uZFwiOiBcIm9sZF9yaWNobW9uZF9tYXRjaFwiLFxuICAgICAgICBcIlN1cnJleVwiOiBcIm9sZF9zdXJyZXlfbWF0Y2hcIixcbiAgICAgICAgXCJTb3V0aCBTdXJyZXlcIjogXCJvbGRfc3VycmV5X21hdGNoXCIsXG4gICAgICAgIFwiV2hpdGUgUm9ja1wiOiBcIm9sZF9zdXJyZXlfbWF0Y2hcIlxuICAgIH1cblxuXG5cbiAgICBjb25zdCBpbnRlcm5hbENpdHlUYWJsZXMgPSB7XG4gICAgICAgIFwiVmFuY291dmVyXCI6IFwib2xkX2ludGVybmFsX3ZhbmNvdXZlcl9tYXRjaFwiLFxuICAgICAgICBcIkJ1cm5hYnlcIjogXCJvbGRfaW50ZXJuYWxfYnVybmFieV9tYXRjaFwiLFxuICAgICAgICBcIkNvcXVpdGxhbVwiOiBcIm9sZF9pbnRlcm5hbF9jb3F1aXRsYW1fbWF0Y2hcIixcbiAgICAgICAgXCJSaWNobW9uZFwiOiBcIm9sZF9pbnRlcm5hbF9yaWNobW9uZF9tYXRjaFwiLFxuICAgICAgICBcIlN1cnJleVwiOiBcIm9sZF9pbnRlcm5hbF9zdXJyZXlfbWF0Y2hcIixcbiAgICAgICAgXCJTb3V0aCBTdXJyZXlcIjogXCJvbGRfaW50ZXJuYWxfc3VycmV5X21hdGNoXCJcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8U3RhdENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcbiAgICAgICAgICAgIGRldGFpbExpc3QsXG4gICAgICAgICAgICBjdXN0b21lckNhdG9nYXJ5LFxuICAgICAgICAgICAgZXh0ZXJuYWxDaXR5VGFibGVzLFxuICAgICAgICAgICAgaW50ZXJuYWxDaXR5VGFibGVzLFxuICAgICAgICAgICAgb3B0aW9uc19jaXR5LFxuICAgICAgICAgICAgb3B0aW9uc19nZW5kZXIsXG4gICAgICAgICAgICBvcHRpb25zX3JlbnRUeXBlLFxuICAgICAgICAgICAgb3B0aW9uc19CZWRyb29tTnVtLFxuICAgICAgICAgICAgb3B0aW9uc19LaXRjaGVuLFxuICAgICAgICAgICAgb3B0aW9uc19mdXJuaXR1cmUsXG4gICAgICAgICAgICBvcHRpb25zX3BhcmtpbmcsXG4gICAgICAgICAgICBvcHRpb25zX3VuZGVyZ3JvdW5kLFxuICAgICAgICAgICAgb3B0aW9uc19wZXQsXG4gICAgICAgICAgICBvcHRpb25zX2hvdXNlVHlwZSxcbiAgICAgICAgICAgIG9wdGlvbnNfc3RhdHVzLFxuICAgICAgICAgICAgb3B0aW9uc190ZW5hbnROdW0sXG4gICAgICAgICAgICBvcHRpb25zX3JlbnREdXJhdGlvblxuICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvU3RhdENvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufTtcblxuZXhwb3J0IGNvbnN0IHVzZVN0YXRpY0NvbnRleHQgPSAoKSA9PiB1c2VDb250ZXh0KFN0YXRDb250ZXh0KTsiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIlN0YXRDb250ZXh0IiwiU3RhdGljQ29udGV4dCIsImNoaWxkcmVuIiwiZGV0YWlsTGlzdCIsIm9wdGlvbnNfY2l0eSIsIm9wdGlvbnNfcmVudFR5cGUiLCJvcHRpb25zX2dlbmRlciIsIm9wdGlvbnNfaG91c2VUeXBlIiwib3B0aW9uc191bmRlcmdyb3VuZCIsIm9wdGlvbnNfQmVkcm9vbU51bSIsIm9wdGlvbnNfcGV0Iiwib3B0aW9uc19LaXRjaGVuIiwib3B0aW9uc19mdXJuaXR1cmUiLCJvcHRpb25zX3BhcmtpbmciLCJvcHRpb25zX3N0YXR1cyIsIm9wdGlvbnNfdGVuYW50TnVtIiwib3B0aW9uc19yZW50RHVyYXRpb24iLCJjdXN0b21lckNhdG9nYXJ5IiwiZXh0ZXJuYWxDaXR5VGFibGVzIiwiaW50ZXJuYWxDaXR5VGFibGVzIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZVN0YXRpY0NvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/StaticContext.js\n"));

/***/ })

});