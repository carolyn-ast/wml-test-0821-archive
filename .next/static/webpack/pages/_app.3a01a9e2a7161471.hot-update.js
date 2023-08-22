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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StaticContext\": function() { return /* binding */ StaticContext; },\n/* harmony export */   \"useStaticContext\": function() { return /* binding */ useStaticContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst StatContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst StaticContext = (param)=>{\n    let { children  } = param;\n    const detailList = {\n        \"Submission_Date\": \"Submission date\",\n        \"Last Update Date\": \"Last update Time\",\n        \"名\": \"First Name\",\n        \"姓\": \"Last Name\",\n        \"UserId\": \"UserId\",\n        \"mail\": \"Email\",\n        \"wechat_name\": \"Wechat name\",\n        \"gender\": \"Gender\",\n        // missing address in db\n        // missing phone in db\n        \"请填写您的目的地邮编，更好获得附近邻里的帮助\": \"Postal code\",\n        \"City\": \"Target city\",\n        \"如下哪些方面需要我们的帮助？\": \"Need help with\",\n        \"Budget_price\": \"Budget\",\n        \"rent_type\": \"Rent type\",\n        \"rent_date\": \"Wish to rent from\",\n        \"rent_duration\": \"Rent duration\",\n        \"几人入住？\": \"Tenants number\",\n        \"house_type\": \"House type\",\n        \"semi_underground\": \"Underground acceptance\",\n        \"room_type\": \"Room type\",\n        \"是否有宠物\": \"Pets Allowed\",\n        \"Kitchen\": \"Kitchen\",\n        \"Furniture\": \"Furniture\",\n        \"车位\": \"Parking\",\n        \"Assistant_name\": \"Assistant\",\n        \"rent_status\": \"rent status\",\n        \"Leasing_demand\": \"Leasing demand\",\n        \"Assistant_message\": \"Message for Assistant\"\n    };\n    const options_city = {\n        \"1\": \"温哥华\",\n        \"2\": \"本拿比\",\n        \"3\": \"列治文\",\n        \"4\": \"北素里\",\n        \"5\": \"中素里\",\n        \"6\": \"南素里白石\",\n        \"7\": \"高贵林\",\n        \"8\": \"西温\",\n        \"9\": \"北温\",\n        \"10\": \"满地宝\",\n        \"11\": \"新西敏\",\n        \"12\": \"枫树岭\",\n        \"13\": \"其他城市\",\n        \"14\": \"我不是租客，我不租房\",\n        \"15\": \"我是房东，我要出租\"\n    };\n    const options_rentType = {\n        \"1\": \"必须整租\",\n        \"2\": \"可以接受合租\"\n    };\n    const options_gender = {\n        \"1\": \"皆为男性\",\n        \"2\": \"都是女性\",\n        \"3\": \"组合\",\n        \"4\": \"暂不说明\"\n    };\n    const options_houseType = {\n        \"1\": \"独立屋\",\n        \"2\": \"联排\",\n        \"3\": \"公寓\",\n        \"4\": \"后巷屋\",\n        \"5\": \"只要预算符合，任何房屋类型皆可\"\n    };\n    const options_underground = {\n        \"1\": \"可接受半地下\",\n        \"2\": \"完全不接受半地下\"\n    };\n    const options_BedroomNum = {\n        \"1\": \"1睡房\",\n        \"2\": \"2睡房\",\n        \"3\": \"3睡房\",\n        \"4\": \"4睡房\",\n        \"5\": \"5睡房\",\n        \"6\": \"6 或 6个以上 睡房\",\n        \"7\": \"other\"\n    };\n    const options_pet = {\n        \"1\": \"无宠物\",\n        \"2\": \"有猫\",\n        \"3\": \"有狗\",\n        \"4\": \"其他宠物\"\n    };\n    const options_Kitchen = {\n        \"1\": \"必须独立厨房\",\n        \"2\": \"可共用厨房\",\n        \"3\": \"无所谓\",\n        \"4\": \"other\"\n    };\n    const options_furniture = {\n        \"1\": \"需要全套家具\",\n        \"2\": \"需要简单家具\",\n        \"3\": \"不要家具\",\n        \"4\": \"有家具更好，没有也可以\"\n    };\n    const options_parking = {\n        \"1\": \"没有车，不需要车位\",\n        \"2\": \"需要正规停车位\",\n        \"3\": \"可以路边停车\",\n        \"4\": \"other\"\n    };\n    const customerCatogary = [\n        \"Current Clients\",\n        \"New Clients\",\n        \"Potential Clients\",\n        \"Clients\",\n        \"Past Clients\"\n    ];\n    const options_status = {\n        \"1\": \"YES\",\n        \"2\": \"NO\",\n        \"3\": \"PENDING\"\n    };\n    const options_tenantNum = {\n        \"1\": \"1\",\n        \"2\": \"2\",\n        \"3\": \"3\",\n        \"4\": \"4\",\n        \"5\": \"5睡房\",\n        \"6\": \"6 或 6个以上 睡房\",\n        \"7\": \"other\"\n    };\n    // const dropDownList = {\n    //     \"City\": \"options_city\",\n    //     \"gender\": \"options_gender\",\n    //     \"rent_type\": \"options_rentType\",\n    //     \"house_type\": \"options_houseType\",\n    //     \"是否有宠物\": \"options_pet\",\n    //     \"Kitchen\": \"options_Kitchen\",\n    //     \"Furniture\": \"options_furniture\",\n    //     \"车位\": \"options_parking\",\n    //     \"semi_underground\": \"options_underground\",\n    //     \"room_type\": \"options_BedroomNum\",\n    //     \"rent_status\": \"options_status\"\n    // }\n    const externalCityTables = {\n        \"Vancouver\": \"old_vancouver_match\",\n        \"Burnaby\": \"old_burnaby_match\",\n        \"Coquitlam\": \"old_internal_coquitlam_match\",\n        \"Richmond\": \"old_richmond_match\",\n        \"Surrey\": \"old_surrey_match\",\n        \"South Surrey\": \"old_surrey_match\",\n        \"White Rock\": \"old_surrey_match\"\n    };\n    const internalCityTables = {\n        \"Vancouver\": \"old_internal_vancouver_match\",\n        \"Burnaby\": \"old_internal_burnaby_match\",\n        \"Coquitlam\": \"old_internal_coquitlam_match\",\n        \"Richmond\": \"old_internal_richmond_match\",\n        \"Surrey\": \"old_internal_surrey_match\",\n        \"South Surrey\": \"old_internal_surrey_match\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StatContext.Provider, {\n        value: {\n            detailList,\n            customerCatogary,\n            externalCityTables,\n            internalCityTables,\n            options_city,\n            options_gender,\n            options_rentType,\n            options_BedroomNum,\n            options_Kitchen,\n            options_furniture,\n            options_parking,\n            options_underground,\n            options_pet,\n            options_houseType,\n            options_status,\n            dropDownList\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\documents\\\\wml\\\\wml-test-main\\\\wml-test-main\\\\context\\\\StaticContext.js\",\n        lineNumber: 182,\n        columnNumber: 9\n    }, undefined);\n};\n_c = StaticContext;\nconst useStaticContext = ()=>{\n    _s();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(StatContext);\n};\n_s(useStaticContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"StaticContext\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHFCQUNJLDhEQUFDbEIsWUFBWW1CLFFBQVE7UUFBQ0MsT0FBTztZQUN6QmpCO1lBQ0FXO1lBQ0FHO1lBQ0FDO1lBQ0FkO1lBQ0FFO1lBQ0FEO1lBQ0FJO1lBQ0FFO1lBQ0FDO1lBQ0FDO1lBQ0FMO1lBQ0FFO1lBQ0FIO1lBQ0FRO1lBQ0FNO1FBQ0o7a0JBRUtuQjs7Ozs7O0FBR2IsRUFBRTtLQXZNV0Q7QUF5TU4sTUFBTXFCLG1CQUFtQixJQUFNdkI7O0lBQUFBLE9BQUFBLGlEQUFVQSxDQUFDQztBQUFXLEVBQUU7R0FBakRzQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L1N0YXRpY0NvbnRleHQuanM/YTcxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU3RhdENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBjb25zdCBTdGF0aWNDb250ZXh0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuXG4gICAgY29uc3QgZGV0YWlsTGlzdCA9IHtcbiAgICAgICAgXCJTdWJtaXNzaW9uX0RhdGVcIjogXCJTdWJtaXNzaW9uIGRhdGVcIixcbiAgICAgICAgXCJMYXN0IFVwZGF0ZSBEYXRlXCI6IFwiTGFzdCB1cGRhdGUgVGltZVwiLFxuICAgICAgICBcIuWQjVwiOiBcIkZpcnN0IE5hbWVcIixcbiAgICAgICAgXCLlp5NcIjogXCJMYXN0IE5hbWVcIixcbiAgICAgICAgXCJVc2VySWRcIjonVXNlcklkJyxcbiAgICAgICAgXCJtYWlsXCI6IFwiRW1haWxcIixcbiAgICAgICAgXCJ3ZWNoYXRfbmFtZVwiOiBcIldlY2hhdCBuYW1lXCIsXG4gICAgICAgIFwiZ2VuZGVyXCI6IFwiR2VuZGVyXCIsXG4gICAgICAgIFxuICAgICAgICAvLyBtaXNzaW5nIGFkZHJlc3MgaW4gZGJcbiAgICAgICAgLy8gbWlzc2luZyBwaG9uZSBpbiBkYlxuICAgICAgICBcIuivt+Whq+WGmeaCqOeahOebrueahOWcsOmCrue8lu+8jOabtOWlveiOt+W+l+mZhOi/kemCu+mHjOeahOW4ruWKqVwiOiBcIlBvc3RhbCBjb2RlXCIsXG4gICAgICAgIFwiQ2l0eVwiOiBcIlRhcmdldCBjaXR5XCIsXG4gICAgICAgIFwi5aaC5LiL5ZOq5Lqb5pa56Z2i6ZyA6KaB5oiR5Lus55qE5biu5Yqp77yfXCI6XCJOZWVkIGhlbHAgd2l0aFwiLFxuICAgICAgICBcIkJ1ZGdldF9wcmljZVwiOiBcIkJ1ZGdldFwiLFxuICAgICAgICBcInJlbnRfdHlwZVwiOiBcIlJlbnQgdHlwZVwiLFxuICAgICAgICBcInJlbnRfZGF0ZVwiOiBcIldpc2ggdG8gcmVudCBmcm9tXCIsXG4gICAgICAgIFwicmVudF9kdXJhdGlvblwiOiBcIlJlbnQgZHVyYXRpb25cIixcbiAgICAgICAgXCLlh6DkurrlhaXkvY/vvJ9cIjogXCJUZW5hbnRzIG51bWJlclwiLFxuICAgICAgICBcImhvdXNlX3R5cGVcIjogXCJIb3VzZSB0eXBlXCIsXG4gICAgICAgIFwic2VtaV91bmRlcmdyb3VuZFwiOiBcIlVuZGVyZ3JvdW5kIGFjY2VwdGFuY2VcIixcbiAgICAgICAgXCJyb29tX3R5cGVcIjogXCJSb29tIHR5cGVcIixcbiAgICAgICAgXCLmmK/lkKbmnInlrqDnialcIjogXCJQZXRzIEFsbG93ZWRcIixcbiAgICAgICAgXCJLaXRjaGVuXCI6IFwiS2l0Y2hlblwiLFxuICAgICAgICBcIkZ1cm5pdHVyZVwiOiBcIkZ1cm5pdHVyZVwiLFxuICAgICAgICBcIui9puS9jVwiOiBcIlBhcmtpbmdcIixcbiAgICAgICAgXCJBc3Npc3RhbnRfbmFtZVwiOiBcIkFzc2lzdGFudFwiLFxuICAgICAgICBcInJlbnRfc3RhdHVzXCI6J3JlbnQgc3RhdHVzJyxcbiAgICAgICAgXCJMZWFzaW5nX2RlbWFuZFwiOiBcIkxlYXNpbmcgZGVtYW5kXCIsXG4gICAgICAgIFwiQXNzaXN0YW50X21lc3NhZ2VcIjogXCJNZXNzYWdlIGZvciBBc3Npc3RhbnRcIlxuICAgICAgIFxuICAgIH1cblxuICAgIGNvbnN0IG9wdGlvbnNfY2l0eSA9IHtcbiAgICAgICAgXCIxXCI6IFwi5rip5ZOl5Y2OXCIsXG4gICAgICAgIFwiMlwiOiBcIuacrOaLv+avlFwiLFxuICAgICAgICBcIjNcIjogXCLliJfmsrvmlodcIixcbiAgICAgICAgXCI0XCI6IFwi5YyX57Sg6YeMXCIsXG4gICAgICAgIFwiNVwiOiBcIuS4ree0oOmHjFwiLFxuICAgICAgICBcIjZcIjogXCLljZfntKDph4znmb3nn7NcIixcbiAgICAgICAgXCI3XCI6IFwi6auY6LS15p6XXCIsXG4gICAgICAgIFwiOFwiOiBcIuilv+a4qVwiLFxuICAgICAgICBcIjlcIjogXCLljJfmuKlcIixcbiAgICAgICAgXCIxMFwiOiBcIua7oeWcsOWunVwiLFxuICAgICAgICBcIjExXCI6IFwi5paw6KW/5pWPXCIsXG4gICAgICAgIFwiMTJcIjogXCLmnqvmoJHlsq1cIixcbiAgICAgICAgXCIxM1wiOiBcIuWFtuS7luWfjuW4glwiLFxuICAgICAgICBcIjE0XCI6IFwi5oiR5LiN5piv56ef5a6i77yM5oiR5LiN56ef5oi/XCIsXG4gICAgICAgIFwiMTVcIjogXCLmiJHmmK/miL/kuJzvvIzmiJHopoHlh7rnp59cIlxuICAgIH1cbiAgICBjb25zdCBvcHRpb25zX3JlbnRUeXBlID0ge1xuICAgICAgICBcIjFcIjogXCLlv4XpobvmlbTnp59cIixcbiAgICAgICAgXCIyXCI6IFwi5Y+v5Lul5o6l5Y+X5ZCI56efXCJcbiAgICB9XG5cbiAgICBjb25zdCBvcHRpb25zX2dlbmRlciA9IHtcbiAgICAgICAgXCIxXCI6IFwi55qG5Li655S35oCnXCIsXG4gICAgICAgIFwiMlwiOiBcIumDveaYr+Wls+aAp1wiLFxuICAgICAgICBcIjNcIjogXCLnu4TlkIhcIixcbiAgICAgICAgXCI0XCI6IFwi5pqC5LiN6K+05piOXCJcbiAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBvcHRpb25zX2hvdXNlVHlwZSA9IHtcbiAgICAgICAgXCIxXCI6IFwi54us56uL5bGLXCIsXG4gICAgICAgIFwiMlwiOiBcIuiBlOaOklwiLFxuICAgICAgICBcIjNcIjogXCLlhazlr5NcIixcbiAgICAgICAgXCI0XCI6IFwi5ZCO5be35bGLXCIsXG4gICAgICAgIFwiNVwiOiBcIuWPquimgemihOeul+espuWQiO+8jOS7u+S9leaIv+Wxi+exu+Wei+eahuWPr1wiXG4gICAgfVxuXG4gICAgY29uc3Qgb3B0aW9uc191bmRlcmdyb3VuZCA9IHtcbiAgICAgICAgXCIxXCI6IFwi5Y+v5o6l5Y+X5Y2K5Zyw5LiLXCIsXG4gICAgICAgIFwiMlwiOiBcIuWujOWFqOS4jeaOpeWPl+WNiuWcsOS4i1wiXG4gICAgfVxuXG4gICAgY29uc3Qgb3B0aW9uc19CZWRyb29tTnVtID0ge1xuICAgICAgICBcIjFcIjogXCIx552h5oi/XCIsXG4gICAgICAgIFwiMlwiOiBcIjLnnaHmiL9cIixcbiAgICAgICAgXCIzXCI6IFwiM+edoeaIv1wiLFxuICAgICAgICBcIjRcIjogXCI0552h5oi/XCIsXG4gICAgICAgIFwiNVwiOiBcIjXnnaHmiL9cIixcbiAgICAgICAgXCI2XCI6IFwiNiDmiJYgNuS4quS7peS4iiDnnaHmiL9cIixcbiAgICAgICAgXCI3XCI6IFwib3RoZXJcIlxuICAgIH1cblxuICAgIGNvbnN0IG9wdGlvbnNfcGV0ID0ge1xuICAgICAgICBcIjFcIjogXCLml6DlrqDnialcIixcbiAgICAgICAgXCIyXCI6IFwi5pyJ54yrXCIsXG4gICAgICAgIFwiM1wiOiBcIuacieeLl1wiLFxuICAgICAgICBcIjRcIjogXCLlhbbku5blrqDnialcIlxuICAgIH1cblxuICAgIGNvbnN0IG9wdGlvbnNfS2l0Y2hlbiA9IHtcbiAgICAgICAgXCIxXCI6IFwi5b+F6aG754us56uL5Y6o5oi/XCIsXG4gICAgICAgIFwiMlwiOiBcIuWPr+WFseeUqOWOqOaIv1wiLFxuICAgICAgICBcIjNcIjogXCLml6DmiYDosJNcIixcbiAgICAgICAgXCI0XCI6IFwib3RoZXJcIlxuICAgIH1cblxuICAgIGNvbnN0IG9wdGlvbnNfZnVybml0dXJlID0ge1xuICAgICAgICBcIjFcIjogXCLpnIDopoHlhajlpZflrrblhbdcIixcbiAgICAgICAgXCIyXCI6IFwi6ZyA6KaB566A5Y2V5a625YW3XCIsXG4gICAgICAgIFwiM1wiOiBcIuS4jeimgeWutuWFt1wiLFxuICAgICAgICBcIjRcIjogXCLmnInlrrblhbfmm7Tlpb3vvIzmsqHmnInkuZ/lj6/ku6VcIlxuICAgIH1cblxuICAgIGNvbnN0IG9wdGlvbnNfcGFya2luZyA9IHtcbiAgICAgICAgXCIxXCI6IFwi5rKh5pyJ6L2m77yM5LiN6ZyA6KaB6L2m5L2NXCIsXG4gICAgICAgIFwiMlwiOiBcIumcgOimgeato+inhOWBnOi9puS9jVwiLFxuICAgICAgICBcIjNcIjogXCLlj6/ku6Xot6/ovrnlgZzovaZcIixcbiAgICAgICAgXCI0XCI6IFwib3RoZXJcIlxuICAgIH1cblxuICAgIGNvbnN0IGN1c3RvbWVyQ2F0b2dhcnkgPSBbXG4gICAgICAgIFwiQ3VycmVudCBDbGllbnRzXCIsXG4gICAgICAgIFwiTmV3IENsaWVudHNcIixcbiAgICAgICAgXCJQb3RlbnRpYWwgQ2xpZW50c1wiLFxuICAgICAgICBcIkNsaWVudHNcIixcbiAgICAgICAgXCJQYXN0IENsaWVudHNcIlxuICAgIF1cblxuICAgIGNvbnN0IG9wdGlvbnNfc3RhdHVzID0ge1xuICAgICAgICBcIjFcIjogXCJZRVNcIixcbiAgICAgICAgXCIyXCI6IFwiTk9cIixcbiAgICAgICAgXCIzXCI6IFwiUEVORElOR1wiICBcbiAgICB9XG5cbiAgICBjb25zdCBvcHRpb25zX3RlbmFudE51bSA9IHtcbiAgICAgICAgXCIxXCI6IFwiMVwiLFxuICAgICAgICBcIjJcIjogXCIyXCIsXG4gICAgICAgIFwiM1wiOiBcIjNcIixcbiAgICAgICAgXCI0XCI6IFwiNFwiLFxuICAgICAgICBcIjVcIjogXCI1552h5oi/XCIsXG4gICAgICAgIFwiNlwiOiBcIjYg5oiWIDbkuKrku6XkuIog552h5oi/XCIsXG4gICAgICAgIFwiN1wiOiBcIm90aGVyXCJcbiAgICB9XG5cbiAgICAvLyBjb25zdCBkcm9wRG93bkxpc3QgPSB7XG4gICAgLy8gICAgIFwiQ2l0eVwiOiBcIm9wdGlvbnNfY2l0eVwiLFxuICAgIC8vICAgICBcImdlbmRlclwiOiBcIm9wdGlvbnNfZ2VuZGVyXCIsXG4gICAgLy8gICAgIFwicmVudF90eXBlXCI6IFwib3B0aW9uc19yZW50VHlwZVwiLFxuICAgIC8vICAgICBcImhvdXNlX3R5cGVcIjogXCJvcHRpb25zX2hvdXNlVHlwZVwiLFxuICAgIC8vICAgICBcIuaYr+WQpuacieWuoOeJqVwiOiBcIm9wdGlvbnNfcGV0XCIsXG4gICAgLy8gICAgIFwiS2l0Y2hlblwiOiBcIm9wdGlvbnNfS2l0Y2hlblwiLFxuICAgIC8vICAgICBcIkZ1cm5pdHVyZVwiOiBcIm9wdGlvbnNfZnVybml0dXJlXCIsXG4gICAgLy8gICAgIFwi6L2m5L2NXCI6IFwib3B0aW9uc19wYXJraW5nXCIsXG4gICAgLy8gICAgIFwic2VtaV91bmRlcmdyb3VuZFwiOiBcIm9wdGlvbnNfdW5kZXJncm91bmRcIixcbiAgICAvLyAgICAgXCJyb29tX3R5cGVcIjogXCJvcHRpb25zX0JlZHJvb21OdW1cIixcbiAgICAvLyAgICAgXCJyZW50X3N0YXR1c1wiOiBcIm9wdGlvbnNfc3RhdHVzXCJcbiAgICAvLyB9XG5cbiAgICBjb25zdCBleHRlcm5hbENpdHlUYWJsZXMgPSB7XG4gICAgICAgIFwiVmFuY291dmVyXCI6IFwib2xkX3ZhbmNvdXZlcl9tYXRjaFwiLFxuICAgICAgICBcIkJ1cm5hYnlcIjogXCJvbGRfYnVybmFieV9tYXRjaFwiLFxuICAgICAgICBcIkNvcXVpdGxhbVwiOiBcIm9sZF9pbnRlcm5hbF9jb3F1aXRsYW1fbWF0Y2hcIixcbiAgICAgICAgXCJSaWNobW9uZFwiOiBcIm9sZF9yaWNobW9uZF9tYXRjaFwiLFxuICAgICAgICBcIlN1cnJleVwiOiBcIm9sZF9zdXJyZXlfbWF0Y2hcIixcbiAgICAgICAgXCJTb3V0aCBTdXJyZXlcIjogXCJvbGRfc3VycmV5X21hdGNoXCIsXG4gICAgICAgIFwiV2hpdGUgUm9ja1wiOiBcIm9sZF9zdXJyZXlfbWF0Y2hcIlxuICAgIH1cblxuXG5cbiAgICBjb25zdCBpbnRlcm5hbENpdHlUYWJsZXMgPSB7XG4gICAgICAgIFwiVmFuY291dmVyXCI6IFwib2xkX2ludGVybmFsX3ZhbmNvdXZlcl9tYXRjaFwiLFxuICAgICAgICBcIkJ1cm5hYnlcIjogXCJvbGRfaW50ZXJuYWxfYnVybmFieV9tYXRjaFwiLFxuICAgICAgICBcIkNvcXVpdGxhbVwiOiBcIm9sZF9pbnRlcm5hbF9jb3F1aXRsYW1fbWF0Y2hcIixcbiAgICAgICAgXCJSaWNobW9uZFwiOiBcIm9sZF9pbnRlcm5hbF9yaWNobW9uZF9tYXRjaFwiLFxuICAgICAgICBcIlN1cnJleVwiOiBcIm9sZF9pbnRlcm5hbF9zdXJyZXlfbWF0Y2hcIixcbiAgICAgICAgXCJTb3V0aCBTdXJyZXlcIjogXCJvbGRfaW50ZXJuYWxfc3VycmV5X21hdGNoXCJcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8U3RhdENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcbiAgICAgICAgICAgIGRldGFpbExpc3QsXG4gICAgICAgICAgICBjdXN0b21lckNhdG9nYXJ5LFxuICAgICAgICAgICAgZXh0ZXJuYWxDaXR5VGFibGVzLFxuICAgICAgICAgICAgaW50ZXJuYWxDaXR5VGFibGVzLFxuICAgICAgICAgICAgb3B0aW9uc19jaXR5LFxuICAgICAgICAgICAgb3B0aW9uc19nZW5kZXIsXG4gICAgICAgICAgICBvcHRpb25zX3JlbnRUeXBlLFxuICAgICAgICAgICAgb3B0aW9uc19CZWRyb29tTnVtLFxuICAgICAgICAgICAgb3B0aW9uc19LaXRjaGVuLFxuICAgICAgICAgICAgb3B0aW9uc19mdXJuaXR1cmUsXG4gICAgICAgICAgICBvcHRpb25zX3BhcmtpbmcsXG4gICAgICAgICAgICBvcHRpb25zX3VuZGVyZ3JvdW5kLFxuICAgICAgICAgICAgb3B0aW9uc19wZXQsXG4gICAgICAgICAgICBvcHRpb25zX2hvdXNlVHlwZSxcbiAgICAgICAgICAgIG9wdGlvbnNfc3RhdHVzLFxuICAgICAgICAgICAgZHJvcERvd25MaXN0XG4gICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9TdGF0Q29udGV4dC5Qcm92aWRlcj5cbiAgICApXG59O1xuXG5leHBvcnQgY29uc3QgdXNlU3RhdGljQ29udGV4dCA9ICgpID0+IHVzZUNvbnRleHQoU3RhdENvbnRleHQpOyJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiU3RhdENvbnRleHQiLCJTdGF0aWNDb250ZXh0IiwiY2hpbGRyZW4iLCJkZXRhaWxMaXN0Iiwib3B0aW9uc19jaXR5Iiwib3B0aW9uc19yZW50VHlwZSIsIm9wdGlvbnNfZ2VuZGVyIiwib3B0aW9uc19ob3VzZVR5cGUiLCJvcHRpb25zX3VuZGVyZ3JvdW5kIiwib3B0aW9uc19CZWRyb29tTnVtIiwib3B0aW9uc19wZXQiLCJvcHRpb25zX0tpdGNoZW4iLCJvcHRpb25zX2Z1cm5pdHVyZSIsIm9wdGlvbnNfcGFya2luZyIsImN1c3RvbWVyQ2F0b2dhcnkiLCJvcHRpb25zX3N0YXR1cyIsIm9wdGlvbnNfdGVuYW50TnVtIiwiZXh0ZXJuYWxDaXR5VGFibGVzIiwiaW50ZXJuYWxDaXR5VGFibGVzIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImRyb3BEb3duTGlzdCIsInVzZVN0YXRpY0NvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/StaticContext.js\n"));

/***/ })

});