"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/customers/[customer]";
exports.ids = ["pages/api/customers/[customer]"];
exports.modules = {

/***/ "serverless-mysql":
/*!***********************************!*\
  !*** external "serverless-mysql" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("serverless-mysql");

/***/ }),

/***/ "(api)/./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ excuteQuery)\n/* harmony export */ });\n/* harmony import */ var serverless_mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! serverless-mysql */ \"serverless-mysql\");\n/* harmony import */ var serverless_mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(serverless_mysql__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = serverless_mysql__WEBPACK_IMPORTED_MODULE_0___default()({\n    config: {\n        host: \"127.0.0.1\",\n        port: \"3306\",\n        database: \"test_house_database\",\n        user: \"root\",\n        password: \"password\"\n    }\n});\nasync function excuteQuery({ query , values  }) {\n    try {\n        const results = await db.query(query, values);\n        await db.end();\n        return results;\n    } catch (error) {\n        return {\n            error\n        };\n    }\n}\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFDO0FBRXJDLE1BQU1DLEtBQUtELHVEQUFLQSxDQUFDO0lBQ2ZFLFFBQVE7UUFDTkMsTUFBTUMsV0FBc0I7UUFDNUJHLE1BQU1ILE1BQXNCO1FBQzVCSyxVQUFVTCxxQkFBMEI7UUFDcENPLE1BQU1QLE1BQXNCO1FBQzVCUyxVQUFVVCxVQUEwQjtJQUN0QztBQUNGO0FBRWUsZUFBZVcsWUFBWSxFQUFFQyxNQUFLLEVBQUVDLE9BQU0sRUFBRSxFQUFFO0lBQzNELElBQUk7UUFDRixNQUFNQyxVQUFVLE1BQU1qQixHQUFHZSxLQUFLLENBQUNBLE9BQU9DO1FBQ3RDLE1BQU1oQixHQUFHa0IsR0FBRztRQUNaLE9BQU9EO0lBQ1QsRUFBRSxPQUFPRSxPQUFPO1FBQ2QsT0FBTztZQUFFQTtRQUFNO0lBQ2pCO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xpbmxpLWN1c3RvbWVycy8uL2xpYi9kYi5qcz8zZGM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBteXNxbCBmcm9tICdzZXJ2ZXJsZXNzLW15c3FsJztcblxuY29uc3QgZGIgPSBteXNxbCh7XG4gIGNvbmZpZzoge1xuICAgIGhvc3Q6IHByb2Nlc3MuZW52Lk1ZU1FMX0hPU1QsXG4gICAgcG9ydDogcHJvY2Vzcy5lbnYuTVlTUUxfUE9SVCxcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuTVlTUUxfREFUQUJBU0UsXG4gICAgdXNlcjogcHJvY2Vzcy5lbnYuTVlTUUxfVVNFUixcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuTVlTUUxfUEFTU1dPUkRcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGV4Y3V0ZVF1ZXJ5KHsgcXVlcnksIHZhbHVlcyB9KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGRiLnF1ZXJ5KHF1ZXJ5LCB2YWx1ZXMpO1xuICAgIGF3YWl0IGRiLmVuZCgpO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IGVycm9yIH07XG4gIH1cbn07Il0sIm5hbWVzIjpbIm15c3FsIiwiZGIiLCJjb25maWciLCJob3N0IiwicHJvY2VzcyIsImVudiIsIk1ZU1FMX0hPU1QiLCJwb3J0IiwiTVlTUUxfUE9SVCIsImRhdGFiYXNlIiwiTVlTUUxfREFUQUJBU0UiLCJ1c2VyIiwiTVlTUUxfVVNFUiIsInBhc3N3b3JkIiwiTVlTUUxfUEFTU1dPUkQiLCJleGN1dGVRdWVyeSIsInF1ZXJ5IiwidmFsdWVzIiwicmVzdWx0cyIsImVuZCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/db.js\n");

/***/ }),

/***/ "(api)/./lib/resource.js":
/*!*************************!*\
  !*** ./lib/resource.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"queries\": () => (/* binding */ queries)\n/* harmony export */ });\nconst queries = {\n    \"customers_by_assistant\": \"SELECT * FROM UserForm\",\n    \"update_customer\": \"UPDATE UserForm SET {variable} WHERE UserId = ?\",\n    \"landlords_by_assistant\": \"SELECT * FROM landlord WHERE listing_developer = ?\",\n    \"landlords_by_city\": \"SELECT * FROM landlord WHERE listingCity = ?\",\n    \"insert_matched_landlord\": \"INSERT INTO {table} SET {variable}\",\n    \"matched_landlords_by_customer\": \"SELECT * FROM {table} WHERE UserId = ?\",\n    \"update_matched_landlord\": \"UPDATE {table} SET {variable} WHERE UserId = ? AND listingAdd = ?\",\n    \"update_new_house\": \"UPDATE {table} SET {variable} WHERE UserId = ? AND listingId = ?\",\n    \"delete_landlords\": \"DELETE FROM {table} WHERE UserId = ?\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcmVzb3VyY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLFVBQVU7SUFDbkIsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQixpQ0FBaUM7SUFDakMsMkJBQTJCO0lBQzNCLG9CQUFvQjtJQUNwQixvQkFBb0I7QUFDeEIsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2xpbmxpLWN1c3RvbWVycy8uL2xpYi9yZXNvdXJjZS5qcz85NmNlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBxdWVyaWVzID0ge1xuICAgIFwiY3VzdG9tZXJzX2J5X2Fzc2lzdGFudFwiOiBcIlNFTEVDVCAqIEZST00gVXNlckZvcm1cIixcbiAgICBcInVwZGF0ZV9jdXN0b21lclwiOiBcIlVQREFURSBVc2VyRm9ybSBTRVQge3ZhcmlhYmxlfSBXSEVSRSBVc2VySWQgPSA/XCIsXG4gICAgXCJsYW5kbG9yZHNfYnlfYXNzaXN0YW50XCI6IFwiU0VMRUNUICogRlJPTSBsYW5kbG9yZCBXSEVSRSBsaXN0aW5nX2RldmVsb3BlciA9ID9cIixcbiAgICBcImxhbmRsb3Jkc19ieV9jaXR5XCI6IFwiU0VMRUNUICogRlJPTSBsYW5kbG9yZCBXSEVSRSBsaXN0aW5nQ2l0eSA9ID9cIixcbiAgICBcImluc2VydF9tYXRjaGVkX2xhbmRsb3JkXCI6IFwiSU5TRVJUIElOVE8ge3RhYmxlfSBTRVQge3ZhcmlhYmxlfVwiLFxuICAgIFwibWF0Y2hlZF9sYW5kbG9yZHNfYnlfY3VzdG9tZXJcIjogXCJTRUxFQ1QgKiBGUk9NIHt0YWJsZX0gV0hFUkUgVXNlcklkID0gP1wiLFxuICAgIFwidXBkYXRlX21hdGNoZWRfbGFuZGxvcmRcIjogXCJVUERBVEUge3RhYmxlfSBTRVQge3ZhcmlhYmxlfSBXSEVSRSBVc2VySWQgPSA/IEFORCBsaXN0aW5nQWRkID0gP1wiLFxuICAgIFwidXBkYXRlX25ld19ob3VzZVwiOiBcIlVQREFURSB7dGFibGV9IFNFVCB7dmFyaWFibGV9IFdIRVJFIFVzZXJJZCA9ID8gQU5EIGxpc3RpbmdJZCA9ID9cIixcbiAgICBcImRlbGV0ZV9sYW5kbG9yZHNcIjogXCJERUxFVEUgRlJPTSB7dGFibGV9IFdIRVJFIFVzZXJJZCA9ID9cIlxufTsiXSwibmFtZXMiOlsicXVlcmllcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/resource.js\n");

/***/ }),

/***/ "(api)/./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"interpolate\": () => (/* binding */ interpolate),\n/* harmony export */   \"queryFormatter\": () => (/* binding */ queryFormatter)\n/* harmony export */ });\nconst interpolate = (pattern, str, value)=>{\n    return str.replace(pattern, value);\n};\nconst queryFormatter = (dictionary)=>{\n    const vals = Object.entries(dictionary).map(([key, value])=>{\n        const s = \"`\" + key + \"`\" + ` = '${value}'`;\n        return s;\n    });\n    return vals.join(\", \");\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvdXRpbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxNQUFNQSxjQUFjLENBQUNDLFNBQVNDLEtBQUtDLFFBQVU7SUFDaEQsT0FBT0QsSUFBSUUsT0FBTyxDQUFDSCxTQUFTRTtBQUNoQyxFQUFFO0FBR0ssTUFBTUUsaUJBQWlCLENBQUNDLGFBQWU7SUFDMUMsTUFBTUMsT0FBT0MsT0FBT0MsT0FBTyxDQUFDSCxZQUFZSSxHQUFHLENBQUMsQ0FBQyxDQUFDQyxLQUFLUixNQUFNLEdBQUs7UUFDMUQsTUFBTVMsSUFBSyxNQUFNRCxNQUFNLE1BQU0sQ0FBQyxJQUFJLEVBQUVSLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLE9BQU9TO0lBQ1g7SUFDQSxPQUFPTCxLQUFLTSxJQUFJLENBQUM7QUFDckIsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2xpbmxpLWN1c3RvbWVycy8uL2xpYi91dGlscy5qcz84YTFmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbnRlcnBvbGF0ZSA9IChwYXR0ZXJuLCBzdHIsIHZhbHVlKSA9PiB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKHBhdHRlcm4sIHZhbHVlKVxufTtcblxuXG5leHBvcnQgY29uc3QgcXVlcnlGb3JtYXR0ZXIgPSAoZGljdGlvbmFyeSkgPT4ge1xuICAgIGNvbnN0IHZhbHMgPSBPYmplY3QuZW50cmllcyhkaWN0aW9uYXJ5KS5tYXAoKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICBjb25zdCBzID0gIFwiYFwiICsga2V5ICsgXCJgXCIgKyBgID0gJyR7dmFsdWV9J2BcbiAgICAgICAgcmV0dXJuIHNcbiAgICB9KSBcbiAgICByZXR1cm4gdmFscy5qb2luKCcsICcpXG59OyJdLCJuYW1lcyI6WyJpbnRlcnBvbGF0ZSIsInBhdHRlcm4iLCJzdHIiLCJ2YWx1ZSIsInJlcGxhY2UiLCJxdWVyeUZvcm1hdHRlciIsImRpY3Rpb25hcnkiLCJ2YWxzIiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcCIsImtleSIsInMiLCJqb2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/utils.js\n");

/***/ }),

/***/ "(api)/./pages/api/customers/[customer].js":
/*!*******************************************!*\
  !*** ./pages/api/customers/[customer].js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/db */ \"(api)/./lib/db.js\");\n/* harmony import */ var _lib_resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/resource */ \"(api)/./lib/resource.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/utils */ \"(api)/./lib/utils.js\");\n\n\n\nasync function handler(req, res) {\n    if (req.method === \"PUT\") {\n        try {\n            const qry = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.interpolate)(/{variable}/g, _lib_resource__WEBPACK_IMPORTED_MODULE_1__.queries.update_customer, (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.queryFormatter)(req.body.vals));\n            const values = [\n                req.query.customer\n            ];\n            const response = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n                query: qry,\n                values: values\n            });\n            return res.status(200).json(response);\n        } catch (err) {\n            console.log(err.message);\n            return res.status(err.statusCode || 500).json(err.message);\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY3VzdG9tZXJzL1tjdXN0b21lcl0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQztBQUVNO0FBQ2lCO0FBRWxELGVBQWVJLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzVDLElBQUlELElBQUlFLE1BQU0sS0FBSyxPQUFPO1FBQ3RCLElBQUk7WUFDQSxNQUFNQyxNQUFNTix1REFBV0EsQ0FBQyxlQUFlRCxrRUFBdUIsRUFBRUUsMERBQWNBLENBQUNFLElBQUlLLElBQUksQ0FBQ0MsSUFBSTtZQUM1RixNQUFNQyxTQUFTO2dCQUFDUCxJQUFJUSxLQUFLLENBQUNDLFFBQVE7YUFBQztZQUNuQyxNQUFNQyxXQUFXLE1BQU1mLG1EQUFXQSxDQUFDO2dCQUMvQmEsT0FBT0w7Z0JBQ1BJLFFBQVFBO1lBQ1o7WUFDQSxPQUFPTixJQUFJVSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDRjtRQUNoQyxFQUFFLE9BQU9HLEtBQUs7WUFDVkMsUUFBUUMsR0FBRyxDQUFDRixJQUFJRyxPQUFPO1lBQ3ZCLE9BQU9mLElBQUlVLE1BQU0sQ0FBQ0UsSUFBSUksVUFBVSxJQUFJLEtBQUtMLElBQUksQ0FBQ0MsSUFBSUcsT0FBTztRQUM3RDtJQUNKLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlubGktY3VzdG9tZXJzLy4vcGFnZXMvYXBpL2N1c3RvbWVycy9bY3VzdG9tZXJdLmpzP2EyNmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4Y3V0ZVF1ZXJ5IGZyb20gJy4uLy4uLy4uL2xpYi9kYic7XG5cbmltcG9ydCB7IHF1ZXJpZXMgfSBmcm9tICcuLi8uLi8uLi9saWIvcmVzb3VyY2UnO1xuaW1wb3J0IHsgaW50ZXJwb2xhdGUsIHF1ZXJ5Rm9ybWF0dGVyIH0gZnJvbSAnLi4vLi4vLi4vbGliL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIGlmIChyZXEubWV0aG9kID09PSBcIlBVVFwiKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBxcnkgPSBpbnRlcnBvbGF0ZSgve3ZhcmlhYmxlfS9nLCBxdWVyaWVzLnVwZGF0ZV9jdXN0b21lciwgcXVlcnlGb3JtYXR0ZXIocmVxLmJvZHkudmFscykpXG4gICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBbcmVxLnF1ZXJ5LmN1c3RvbWVyXVxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBleGN1dGVRdWVyeSh7XG4gICAgICAgICAgICAgICAgcXVlcnk6IHFyeSxcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IHZhbHVlc1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXNwb25zZSlcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSlcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKGVyci5zdGF0dXNDb2RlIHx8IDUwMCkuanNvbihlcnIubWVzc2FnZSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIl0sIm5hbWVzIjpbImV4Y3V0ZVF1ZXJ5IiwicXVlcmllcyIsImludGVycG9sYXRlIiwicXVlcnlGb3JtYXR0ZXIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwicXJ5IiwidXBkYXRlX2N1c3RvbWVyIiwiYm9keSIsInZhbHMiLCJ2YWx1ZXMiLCJxdWVyeSIsImN1c3RvbWVyIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJzdGF0dXNDb2RlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/customers/[customer].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/customers/[customer].js"));
module.exports = __webpack_exports__;

})();