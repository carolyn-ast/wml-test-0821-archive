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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StaticContext\": function() { return /* binding */ StaticContext; },\n/* harmony export */   \"useStaticContext\": function() { return /* binding */ useStaticContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst StatContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst StaticContext = (param)=>{\n    let { children  } = param;\n    const detailList = {\n        \"Submission_Date\": \"Submission Date\",\n        \"LastUpdateTime\": \"Last Update Time\",\n        \"名\": \"First Name\",\n        \"姓\": \"Last Name\",\n        \"UserId\": \"UserId\",\n        \"mail\": \"Email\",\n        \"wechat_name\": \"Wechat Name\",\n        \"gender\": \"Gender\",\n        // missing address in db\n        // missing phone in db\n        \"请填写您的目的地邮编，更好获得附近邻里的帮助\": \"Postal Code\",\n        \"City\": \"Target City\",\n        \"如下哪些方面需要我们的帮助？\": \"Need Help With\",\n        \"Budget_price\": \"Budget\",\n        \"rent_type\": \"Rent Type\",\n        \"rent_date\": \"Wish To Rent From\",\n        \"rent_duration\": \"Rent Duration\",\n        \"几人入住？\": \"Tenants Number\",\n        \"house_type\": \"House Type\",\n        \"semi_underground\": \"Underground Acceptance\",\n        \"room_type\": \"Room Type\",\n        \"是否有宠物\": \"Pets Allowed\",\n        \"Kitchen\": \"Kitchen\",\n        \"Furniture\": \"Furniture\",\n        \"车位\": \"Parking\",\n        \"Assistant_name\": \"Assistant\",\n        \"rent_status\": \"Rent Status\",\n        \"Leasing_demand\": \"Leasing Demand\",\n        \"Assistant_message\": \"Message for Assistant\"\n    };\n    const options_city = {\n        \"1\": \"温哥华\",\n        \"2\": \"本拿比\",\n        \"3\": \"列治文\",\n        \"4\": \"北素里\",\n        \"5\": \"中素里\",\n        \"6\": \"南素里白石\",\n        \"7\": \"高贵林\",\n        \"8\": \"西温\",\n        \"9\": \"北温\",\n        \"10\": \"满地宝\",\n        \"11\": \"新西敏\",\n        \"12\": \"枫树岭\",\n        \"13\": \"其他城市\",\n        \"14\": \"我不是租客，我不租房\",\n        \"15\": \"我是房东，我要出租\"\n    };\n    const options_rentType = {\n        \"1\": \"必须整租\",\n        \"2\": \"可以接受合租\"\n    };\n    const options_gender = {\n        \"1\": \"皆为男性\",\n        \"2\": \"都是女性\",\n        \"3\": \"组合\",\n        \"4\": \"暂不说明\"\n    };\n    const options_houseType = {\n        \"1\": \"独立屋\",\n        \"2\": \"联排\",\n        \"3\": \"公寓\",\n        \"4\": \"后巷屋\",\n        \"5\": \"只要预算符合，任何房屋类型皆可\"\n    };\n    const options_underground = {\n        \"1\": \"可接受半地下\",\n        \"2\": \"完全不接受半地下\"\n    };\n    const options_BedroomNum = {\n        \"1\": \"1睡房\",\n        \"2\": \"2睡房\",\n        \"3\": \"3睡房\",\n        \"4\": \"4睡房\",\n        \"5\": \"5睡房\",\n        \"6\": \"6 或 6个以上 睡房\",\n        \"7\": \"other\"\n    };\n    const options_pet = {\n        \"1\": \"无宠物\",\n        \"2\": \"有猫\",\n        \"3\": \"有狗\",\n        \"4\": \"其他宠物\"\n    };\n    const options_Kitchen = {\n        \"1\": \"必须独立厨房\",\n        \"2\": \"可共用厨房\",\n        \"3\": \"无所谓\",\n        \"4\": \"other\"\n    };\n    const options_furniture = {\n        \"1\": \"需要全套家具\",\n        \"2\": \"需要简单家具\",\n        \"3\": \"不要家具\",\n        \"4\": \"有家具更好，没有也可以\"\n    };\n    const options_parking = {\n        \"1\": \"没有车，不需要车位\",\n        \"2\": \"需要正规停车位\",\n        \"3\": \"可以路边停车\",\n        \"4\": \"other\"\n    };\n    const options_status = {\n        \"1\": \"YES\",\n        \"2\": \"NO\",\n        \"3\": \"PENDING\",\n        \"4\": \"DELETED\",\n        \"5\": \"看房客户\"\n    };\n    const options_tenantNum = {\n        \"1\": \"1\",\n        \"2\": \"2\",\n        \"3\": \"3\",\n        \"4\": \"4\",\n        \"5\": \"5\",\n        \"6\": \"6\",\n        \"7\": \"6人以上\"\n    };\n    const options_rentDuration = {\n        \"1\": \"长租1年\",\n        \"2\": \"7个月到一年\",\n        \"3\": \"短租半年\",\n        \"4\": \"4个月到半年\",\n        \"5\": \"短租三个月\",\n        \"6\": \"短租一个月\",\n        \"7\": \"短租一周\"\n    };\n    const customerCatogary = [\n        \"Current Clients\",\n        \"New Clients\",\n        \"Potential Clients\",\n        \"Clients\",\n        \"Past Clients\"\n    ];\n    const externalCityTables = {\n        \"Vancouver\": \"old_vancouver_match\",\n        \"Burnaby\": \"old_burnaby_match\",\n        \"Coquitlam\": \"old_internal_coquitlam_match\",\n        \"Richmond\": \"old_richmond_match\",\n        \"Surrey\": \"old_surrey_match\",\n        \"South Surrey\": \"old_surrey_match\",\n        \"White Rock\": \"old_surrey_match\"\n    };\n    const internalCityTables = {\n        \"Vancouver\": \"old_internal_vancouver_match\",\n        \"Burnaby\": \"old_internal_burnaby_match\",\n        \"Coquitlam\": \"old_internal_coquitlam_match\",\n        \"Richmond\": \"old_internal_richmond_match\",\n        \"Surrey\": \"old_internal_surrey_match\",\n        \"South Surrey\": \"old_internal_surrey_match\"\n    };\n    const citys = [\n        \"Vancouver\",\n        \"Burnaby\",\n        \"Richmond\",\n        \"Surrey\",\n        \"Coquitlam\",\n        \"Other City\"\n    ];\n    const users = {};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StatContext.Provider, {\n        value: {\n            detailList,\n            customerCatogary,\n            externalCityTables,\n            internalCityTables,\n            options_city,\n            options_gender,\n            options_rentType,\n            options_BedroomNum,\n            options_Kitchen,\n            options_furniture,\n            options_parking,\n            options_underground,\n            options_pet,\n            options_houseType,\n            options_status,\n            options_tenantNum,\n            options_rentDuration,\n            citys\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\context\\\\StaticContext.js\",\n        lineNumber: 184,\n        columnNumber: 9\n    }, undefined);\n};\n_c = StaticContext;\nconst useStaticContext = ()=>{\n    _s();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(StatContext);\n};\n_s(useStaticContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"StaticContext\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU1DLFFBQVEsQ0FFZDtJQUVBLHFCQUNJLDhEQUFDckIsWUFBWXNCLFFBQVE7UUFBQ0MsT0FBTztZQUN6QnBCO1lBQ0FjO1lBQ0FDO1lBQ0FDO1lBQ0FmO1lBQ0FFO1lBQ0FEO1lBQ0FJO1lBQ0FFO1lBQ0FDO1lBQ0FDO1lBQ0FMO1lBQ0FFO1lBQ0FIO1lBQ0FPO1lBQ0FDO1lBQ0FDO1lBQ0FJO1FBQ0o7a0JBRUtsQjs7Ozs7O0FBR2IsRUFBRTtLQTNNV0Q7QUE2TU4sTUFBTXVCLG1CQUFtQixJQUFNekI7O0lBQUFBLE9BQUFBLGlEQUFVQSxDQUFDQztBQUFXLEVBQUU7R0FBakR3QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L1N0YXRpY0NvbnRleHQuanM/YTcxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU3RhdENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBjb25zdCBTdGF0aWNDb250ZXh0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuXG4gICAgY29uc3QgZGV0YWlsTGlzdCA9IHtcbiAgICAgICAgXCJTdWJtaXNzaW9uX0RhdGVcIjogXCJTdWJtaXNzaW9uIERhdGVcIixcbiAgICAgICAgXCJMYXN0VXBkYXRlVGltZVwiOiBcIkxhc3QgVXBkYXRlIFRpbWVcIixcbiAgICAgICAgXCLlkI1cIjogXCJGaXJzdCBOYW1lXCIsXG4gICAgICAgIFwi5aeTXCI6IFwiTGFzdCBOYW1lXCIsXG4gICAgICAgIFwiVXNlcklkXCI6J1VzZXJJZCcsXG4gICAgICAgIFwibWFpbFwiOiBcIkVtYWlsXCIsXG4gICAgICAgIFwid2VjaGF0X25hbWVcIjogXCJXZWNoYXQgTmFtZVwiLFxuICAgICAgICBcImdlbmRlclwiOiBcIkdlbmRlclwiLFxuICAgICAgICBcbiAgICAgICAgLy8gbWlzc2luZyBhZGRyZXNzIGluIGRiXG4gICAgICAgIC8vIG1pc3NpbmcgcGhvbmUgaW4gZGJcbiAgICAgICAgXCLor7floavlhpnmgqjnmoTnm67nmoTlnLDpgq7nvJbvvIzmm7Tlpb3ojrflvpfpmYTov5Hpgrvph4znmoTluK7liqlcIjogXCJQb3N0YWwgQ29kZVwiLFxuICAgICAgICBcIkNpdHlcIjogXCJUYXJnZXQgQ2l0eVwiLFxuICAgICAgICBcIuWmguS4i+WTquS6m+aWuemdoumcgOimgeaIkeS7rOeahOW4ruWKqe+8n1wiOlwiTmVlZCBIZWxwIFdpdGhcIixcbiAgICAgICAgXCJCdWRnZXRfcHJpY2VcIjogXCJCdWRnZXRcIixcbiAgICAgICAgXCJyZW50X3R5cGVcIjogXCJSZW50IFR5cGVcIixcbiAgICAgICAgXCJyZW50X2RhdGVcIjogXCJXaXNoIFRvIFJlbnQgRnJvbVwiLFxuICAgICAgICBcInJlbnRfZHVyYXRpb25cIjogXCJSZW50IER1cmF0aW9uXCIsXG4gICAgICAgIFwi5Yeg5Lq65YWl5L2P77yfXCI6IFwiVGVuYW50cyBOdW1iZXJcIixcbiAgICAgICAgXCJob3VzZV90eXBlXCI6IFwiSG91c2UgVHlwZVwiLFxuICAgICAgICBcInNlbWlfdW5kZXJncm91bmRcIjogXCJVbmRlcmdyb3VuZCBBY2NlcHRhbmNlXCIsXG4gICAgICAgIFwicm9vbV90eXBlXCI6IFwiUm9vbSBUeXBlXCIsXG4gICAgICAgIFwi5piv5ZCm5pyJ5a6g54mpXCI6IFwiUGV0cyBBbGxvd2VkXCIsXG4gICAgICAgIFwiS2l0Y2hlblwiOiBcIktpdGNoZW5cIixcbiAgICAgICAgXCJGdXJuaXR1cmVcIjogXCJGdXJuaXR1cmVcIixcbiAgICAgICAgXCLovabkvY1cIjogXCJQYXJraW5nXCIsXG4gICAgICAgIFwiQXNzaXN0YW50X25hbWVcIjogXCJBc3Npc3RhbnRcIixcbiAgICAgICAgXCJyZW50X3N0YXR1c1wiOidSZW50IFN0YXR1cycsXG4gICAgICAgIFwiTGVhc2luZ19kZW1hbmRcIjogXCJMZWFzaW5nIERlbWFuZFwiLFxuICAgICAgICBcIkFzc2lzdGFudF9tZXNzYWdlXCI6IFwiTWVzc2FnZSBmb3IgQXNzaXN0YW50XCJcbiAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBvcHRpb25zX2NpdHkgPSB7XG4gICAgICAgIFwiMVwiOiBcIua4qeWTpeWNjlwiLFxuICAgICAgICBcIjJcIjogXCLmnKzmi7/mr5RcIixcbiAgICAgICAgXCIzXCI6IFwi5YiX5rK75paHXCIsXG4gICAgICAgIFwiNFwiOiBcIuWMl+e0oOmHjFwiLFxuICAgICAgICBcIjVcIjogXCLkuK3ntKDph4xcIixcbiAgICAgICAgXCI2XCI6IFwi5Y2X57Sg6YeM55m955+zXCIsXG4gICAgICAgIFwiN1wiOiBcIumrmOi0teael1wiLFxuICAgICAgICBcIjhcIjogXCLopb/muKlcIixcbiAgICAgICAgXCI5XCI6IFwi5YyX5ripXCIsXG4gICAgICAgIFwiMTBcIjogXCLmu6HlnLDlrp1cIixcbiAgICAgICAgXCIxMVwiOiBcIuaWsOilv+aVj1wiLFxuICAgICAgICBcIjEyXCI6IFwi5p6r5qCR5bKtXCIsXG4gICAgICAgIFwiMTNcIjogXCLlhbbku5bln47luIJcIixcbiAgICAgICAgXCIxNFwiOiBcIuaIkeS4jeaYr+enn+Wuou+8jOaIkeS4jeenn+aIv1wiLFxuICAgICAgICBcIjE1XCI6IFwi5oiR5piv5oi/5Lic77yM5oiR6KaB5Ye656efXCJcbiAgICB9XG4gICAgY29uc3Qgb3B0aW9uc19yZW50VHlwZSA9IHtcbiAgICAgICAgXCIxXCI6IFwi5b+F6aG75pW056efXCIsXG4gICAgICAgIFwiMlwiOiBcIuWPr+S7peaOpeWPl+WQiOenn1wiXG4gICAgfVxuXG4gICAgY29uc3Qgb3B0aW9uc19nZW5kZXIgPSB7XG4gICAgICAgIFwiMVwiOiBcIueahuS4uueUt+aAp1wiLFxuICAgICAgICBcIjJcIjogXCLpg73mmK/lpbPmgKdcIixcbiAgICAgICAgXCIzXCI6IFwi57uE5ZCIXCIsXG4gICAgICAgIFwiNFwiOiBcIuaaguS4jeivtOaYjlwiXG4gICAgICAgXG4gICAgfVxuXG4gICAgY29uc3Qgb3B0aW9uc19ob3VzZVR5cGUgPSB7XG4gICAgICAgIFwiMVwiOiBcIueLrOeri+Wxi1wiLFxuICAgICAgICBcIjJcIjogXCLogZTmjpJcIixcbiAgICAgICAgXCIzXCI6IFwi5YWs5a+TXCIsXG4gICAgICAgIFwiNFwiOiBcIuWQjuW3t+Wxi1wiLFxuICAgICAgICBcIjVcIjogXCLlj6ropoHpooTnrpfnrKblkIjvvIzku7vkvZXmiL/lsYvnsbvlnovnmoblj69cIlxuICAgIH1cblxuICAgIGNvbnN0IG9wdGlvbnNfdW5kZXJncm91bmQgPSB7XG4gICAgICAgIFwiMVwiOiBcIuWPr+aOpeWPl+WNiuWcsOS4i1wiLFxuICAgICAgICBcIjJcIjogXCLlrozlhajkuI3mjqXlj5fljYrlnLDkuItcIlxuICAgIH1cblxuICAgIGNvbnN0IG9wdGlvbnNfQmVkcm9vbU51bSA9IHtcbiAgICAgICAgXCIxXCI6IFwiMeedoeaIv1wiLFxuICAgICAgICBcIjJcIjogXCIy552h5oi/XCIsXG4gICAgICAgIFwiM1wiOiBcIjPnnaHmiL9cIixcbiAgICAgICAgXCI0XCI6IFwiNOedoeaIv1wiLFxuICAgICAgICBcIjVcIjogXCI1552h5oi/XCIsXG4gICAgICAgIFwiNlwiOiBcIjYg5oiWIDbkuKrku6XkuIog552h5oi/XCIsXG4gICAgICAgIFwiN1wiOiBcIm90aGVyXCJcbiAgICB9XG5cbiAgICBjb25zdCBvcHRpb25zX3BldCA9IHtcbiAgICAgICAgXCIxXCI6IFwi5peg5a6g54mpXCIsXG4gICAgICAgIFwiMlwiOiBcIuacieeMq1wiLFxuICAgICAgICBcIjNcIjogXCLmnInni5dcIixcbiAgICAgICAgXCI0XCI6IFwi5YW25LuW5a6g54mpXCJcbiAgICB9XG5cbiAgICBjb25zdCBvcHRpb25zX0tpdGNoZW4gPSB7XG4gICAgICAgIFwiMVwiOiBcIuW/hemhu+eLrOeri+WOqOaIv1wiLFxuICAgICAgICBcIjJcIjogXCLlj6/lhbHnlKjljqjmiL9cIixcbiAgICAgICAgXCIzXCI6IFwi5peg5omA6LCTXCIsXG4gICAgICAgIFwiNFwiOiBcIm90aGVyXCJcbiAgICB9XG5cbiAgICBjb25zdCBvcHRpb25zX2Z1cm5pdHVyZSA9IHtcbiAgICAgICAgXCIxXCI6IFwi6ZyA6KaB5YWo5aWX5a625YW3XCIsXG4gICAgICAgIFwiMlwiOiBcIumcgOimgeeugOWNleWutuWFt1wiLFxuICAgICAgICBcIjNcIjogXCLkuI3opoHlrrblhbdcIixcbiAgICAgICAgXCI0XCI6IFwi5pyJ5a625YW35pu05aW977yM5rKh5pyJ5Lmf5Y+v5LulXCJcbiAgICB9XG5cbiAgICBjb25zdCBvcHRpb25zX3BhcmtpbmcgPSB7XG4gICAgICAgIFwiMVwiOiBcIuayoeaciei9pu+8jOS4jemcgOimgei9puS9jVwiLFxuICAgICAgICBcIjJcIjogXCLpnIDopoHmraPop4TlgZzovabkvY1cIixcbiAgICAgICAgXCIzXCI6IFwi5Y+v5Lul6Lev6L655YGc6L2mXCIsXG4gICAgICAgIFwiNFwiOiBcIm90aGVyXCJcbiAgICB9XG5cbiAgICBjb25zdCBvcHRpb25zX3N0YXR1cyA9IHtcbiAgICAgICAgXCIxXCI6IFwiWUVTXCIsXG4gICAgICAgIFwiMlwiOiBcIk5PXCIsXG4gICAgICAgIFwiM1wiOiBcIlBFTkRJTkdcIixcbiAgICAgICAgXCI0XCI6IFwiREVMRVRFRFwiLFxuICAgICAgICBcIjVcIjogXCLnnIvmiL/lrqLmiLdcIiAgXG4gICAgfVxuXG4gICAgY29uc3Qgb3B0aW9uc190ZW5hbnROdW0gPSB7XG4gICAgICAgIFwiMVwiOiBcIjFcIixcbiAgICAgICAgXCIyXCI6IFwiMlwiLFxuICAgICAgICBcIjNcIjogXCIzXCIsXG4gICAgICAgIFwiNFwiOiBcIjRcIixcbiAgICAgICAgXCI1XCI6IFwiNVwiLFxuICAgICAgICBcIjZcIjogXCI2XCIsXG4gICAgICAgIFwiN1wiOiBcIjbkurrku6XkuIpcIlxuICAgIH1cbiAgICBcbiAgICBjb25zdCBvcHRpb25zX3JlbnREdXJhdGlvbiA9IHtcbiAgICAgICAgXCIxXCI6IFwi6ZW/56efMeW5tFwiLFxuICAgICAgICBcIjJcIjogXCI35Liq5pyI5Yiw5LiA5bm0XCIsXG4gICAgICAgIFwiM1wiOiBcIuefreenn+WNiuW5tFwiLFxuICAgICAgICBcIjRcIjogXCI05Liq5pyI5Yiw5Y2K5bm0XCIsXG4gICAgICAgIFwiNVwiOiBcIuefreenn+S4ieS4quaciFwiLFxuICAgICAgICBcIjZcIjogXCLnn63np5/kuIDkuKrmnIhcIixcbiAgICAgICAgXCI3XCI6IFwi55+t56ef5LiA5ZGoXCIgICAgICAgXG4gICAgfVxuXG4gICAgY29uc3QgY3VzdG9tZXJDYXRvZ2FyeSA9IFtcbiAgICAgICAgXCJDdXJyZW50IENsaWVudHNcIixcbiAgICAgICAgXCJOZXcgQ2xpZW50c1wiLFxuICAgICAgICBcIlBvdGVudGlhbCBDbGllbnRzXCIsXG4gICAgICAgIFwiQ2xpZW50c1wiLFxuICAgICAgICBcIlBhc3QgQ2xpZW50c1wiXG4gICAgXVxuXG4gICAgY29uc3QgZXh0ZXJuYWxDaXR5VGFibGVzID0ge1xuICAgICAgICBcIlZhbmNvdXZlclwiOiBcIm9sZF92YW5jb3V2ZXJfbWF0Y2hcIixcbiAgICAgICAgXCJCdXJuYWJ5XCI6IFwib2xkX2J1cm5hYnlfbWF0Y2hcIixcbiAgICAgICAgXCJDb3F1aXRsYW1cIjogXCJvbGRfaW50ZXJuYWxfY29xdWl0bGFtX21hdGNoXCIsXG4gICAgICAgIFwiUmljaG1vbmRcIjogXCJvbGRfcmljaG1vbmRfbWF0Y2hcIixcbiAgICAgICAgXCJTdXJyZXlcIjogXCJvbGRfc3VycmV5X21hdGNoXCIsXG4gICAgICAgIFwiU291dGggU3VycmV5XCI6IFwib2xkX3N1cnJleV9tYXRjaFwiLFxuICAgICAgICBcIldoaXRlIFJvY2tcIjogXCJvbGRfc3VycmV5X21hdGNoXCJcbiAgICB9XG5cbiAgICBjb25zdCBpbnRlcm5hbENpdHlUYWJsZXMgPSB7XG4gICAgICAgIFwiVmFuY291dmVyXCI6IFwib2xkX2ludGVybmFsX3ZhbmNvdXZlcl9tYXRjaFwiLFxuICAgICAgICBcIkJ1cm5hYnlcIjogXCJvbGRfaW50ZXJuYWxfYnVybmFieV9tYXRjaFwiLFxuICAgICAgICBcIkNvcXVpdGxhbVwiOiBcIm9sZF9pbnRlcm5hbF9jb3F1aXRsYW1fbWF0Y2hcIixcbiAgICAgICAgXCJSaWNobW9uZFwiOiBcIm9sZF9pbnRlcm5hbF9yaWNobW9uZF9tYXRjaFwiLFxuICAgICAgICBcIlN1cnJleVwiOiBcIm9sZF9pbnRlcm5hbF9zdXJyZXlfbWF0Y2hcIixcbiAgICAgICAgXCJTb3V0aCBTdXJyZXlcIjogXCJvbGRfaW50ZXJuYWxfc3VycmV5X21hdGNoXCJcbiAgICB9XG4gXG4gICAgY29uc3QgY2l0eXMgPVsnVmFuY291dmVyJywnQnVybmFieScsICdSaWNobW9uZCcsJ1N1cnJleScsICdDb3F1aXRsYW0nLCAnT3RoZXIgQ2l0eSddXG5cbiAgICBjb25zdCB1c2VycyA9IHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFN0YXRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XG4gICAgICAgICAgICBkZXRhaWxMaXN0LFxuICAgICAgICAgICAgY3VzdG9tZXJDYXRvZ2FyeSxcbiAgICAgICAgICAgIGV4dGVybmFsQ2l0eVRhYmxlcyxcbiAgICAgICAgICAgIGludGVybmFsQ2l0eVRhYmxlcyxcbiAgICAgICAgICAgIG9wdGlvbnNfY2l0eSxcbiAgICAgICAgICAgIG9wdGlvbnNfZ2VuZGVyLFxuICAgICAgICAgICAgb3B0aW9uc19yZW50VHlwZSxcbiAgICAgICAgICAgIG9wdGlvbnNfQmVkcm9vbU51bSxcbiAgICAgICAgICAgIG9wdGlvbnNfS2l0Y2hlbixcbiAgICAgICAgICAgIG9wdGlvbnNfZnVybml0dXJlLFxuICAgICAgICAgICAgb3B0aW9uc19wYXJraW5nLFxuICAgICAgICAgICAgb3B0aW9uc191bmRlcmdyb3VuZCxcbiAgICAgICAgICAgIG9wdGlvbnNfcGV0LFxuICAgICAgICAgICAgb3B0aW9uc19ob3VzZVR5cGUsXG4gICAgICAgICAgICBvcHRpb25zX3N0YXR1cyxcbiAgICAgICAgICAgIG9wdGlvbnNfdGVuYW50TnVtLFxuICAgICAgICAgICAgb3B0aW9uc19yZW50RHVyYXRpb24sXG4gICAgICAgICAgICBjaXR5c1xuICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvU3RhdENvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufTtcblxuZXhwb3J0IGNvbnN0IHVzZVN0YXRpY0NvbnRleHQgPSAoKSA9PiB1c2VDb250ZXh0KFN0YXRDb250ZXh0KTsiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIlN0YXRDb250ZXh0IiwiU3RhdGljQ29udGV4dCIsImNoaWxkcmVuIiwiZGV0YWlsTGlzdCIsIm9wdGlvbnNfY2l0eSIsIm9wdGlvbnNfcmVudFR5cGUiLCJvcHRpb25zX2dlbmRlciIsIm9wdGlvbnNfaG91c2VUeXBlIiwib3B0aW9uc191bmRlcmdyb3VuZCIsIm9wdGlvbnNfQmVkcm9vbU51bSIsIm9wdGlvbnNfcGV0Iiwib3B0aW9uc19LaXRjaGVuIiwib3B0aW9uc19mdXJuaXR1cmUiLCJvcHRpb25zX3BhcmtpbmciLCJvcHRpb25zX3N0YXR1cyIsIm9wdGlvbnNfdGVuYW50TnVtIiwib3B0aW9uc19yZW50RHVyYXRpb24iLCJjdXN0b21lckNhdG9nYXJ5IiwiZXh0ZXJuYWxDaXR5VGFibGVzIiwiaW50ZXJuYWxDaXR5VGFibGVzIiwiY2l0eXMiLCJ1c2VycyIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VTdGF0aWNDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/StaticContext.js\n"));

/***/ })

});