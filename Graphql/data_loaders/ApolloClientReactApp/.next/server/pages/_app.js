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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./graphql/apolloClient.js":
/*!*********************************!*\
  !*** ./graphql/apolloClient.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkBoxListVar\": () => (/* binding */ checkBoxListVar),\n/* harmony export */   \"currentThemeVar\": () => (/* binding */ currentThemeVar),\n/* harmony export */   \"paginationDataVar\": () => (/* binding */ paginationDataVar),\n/* harmony export */   \"useApollo\": () => (/* binding */ useApollo)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagination */ \"./graphql/pagination.js\");\n\n\nconst currentThemeVar = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.makeVar)(\"light\");\nconst checkBoxListVar = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.makeVar)([]);\nconst paginationDataVar = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.makeVar)({\n    limit: 3,\n    offset: 0,\n    currentPage: 0,\n    totalItemCount: 0\n});\nfunction useApollo() {\n    const options = {\n        typePolicies: {\n            Query: {\n                fields: {\n                    speakersConcat: (0,_pagination__WEBPACK_IMPORTED_MODULE_1__.generalConcatPagination)(),\n                    sessionsConcat: (0,_pagination__WEBPACK_IMPORTED_MODULE_1__.generalConcatPagination)()\n                }\n            },\n            Speaker: {\n                fields: {\n                    fullName: {\n                        read: function(_, { readField  }) {\n                            return `${readField(\"first\")} ${readField(\"last\")}`;\n                        }\n                    },\n                    checkBoxColumn: {\n                        read: function(_, { readField  }) {\n                            const id = readField(\"id\");\n                            const selectedSpeakerIds = checkBoxListVar();\n                            return selectedSpeakerIds ? selectedSpeakerIds.includes(id) : false;\n                        }\n                    }\n                }\n            }\n        }\n    };\n    return new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n        uri: \"http://localhost:4000\",\n        cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache(options)\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ncmFwaHFsL2Fwb2xsb0NsaWVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXNFO0FBQ2Y7QUFFaEQsTUFBTUksZUFBZSxHQUFHRix1REFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3pDLE1BQU1HLGVBQWUsR0FBR0gsdURBQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNwQyxNQUFNSSxpQkFBaUIsR0FBR0osdURBQU8sQ0FBQztJQUN2Q0ssS0FBSyxFQUFFLENBQUM7SUFDUkMsTUFBTSxFQUFFLENBQUM7SUFDVEMsV0FBVyxFQUFFLENBQUM7SUFDZEMsY0FBYyxFQUFFLENBQUM7Q0FDbEIsQ0FBQyxDQUFDO0FBRUksU0FBU0MsU0FBUyxHQUFHO0lBQzFCLE1BQU1DLE9BQU8sR0FBRztRQUNkQyxZQUFZLEVBQUU7WUFDWkMsS0FBSyxFQUFFO2dCQUNMQyxNQUFNLEVBQUU7b0JBQ05DLGNBQWMsRUFBRWIsb0VBQXVCLEVBQUU7b0JBQ3pDYyxjQUFjLEVBQUVkLG9FQUF1QixFQUFFO2lCQUMxQzthQUNGO1lBQ0RlLE9BQU8sRUFBRTtnQkFDUEgsTUFBTSxFQUFFO29CQUNOSSxRQUFRLEVBQUU7d0JBQ1JDLElBQUksRUFBRSxTQUFVQyxDQUFDLEVBQUUsRUFBRUMsU0FBUyxHQUFFLEVBQUU7NEJBQ2hDLE9BQU8sQ0FBQyxFQUFFQSxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFQSxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN0RCxDQUFDO3FCQUNGO29CQUNEQyxjQUFjLEVBQUU7d0JBQ2RILElBQUksRUFBRSxTQUFVQyxDQUFDLEVBQUUsRUFBRUMsU0FBUyxHQUFFLEVBQUU7NEJBQ2hDLE1BQU1FLEVBQUUsR0FBR0YsU0FBUyxDQUFDLElBQUksQ0FBQzs0QkFDMUIsTUFBTUcsa0JBQWtCLEdBQUdwQixlQUFlLEVBQUU7NEJBQzVDLE9BQU9vQixrQkFBa0IsR0FDckJBLGtCQUFrQixDQUFDQyxRQUFRLENBQUNGLEVBQUUsQ0FBQyxHQUMvQixLQUFLLENBQUM7d0JBQ1osQ0FBQztxQkFDRjtpQkFDRjthQUNGO1NBQ0Y7S0FDRjtJQUNELE9BQU8sSUFBSXhCLHdEQUFZLENBQUM7UUFDdEIyQixHQUFHLEVBQUUsdUJBQXVCO1FBQzVCQyxLQUFLLEVBQUUsSUFBSTNCLHlEQUFhLENBQUNXLE9BQU8sQ0FBQztLQUNsQyxDQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQXBvbGxvQ2xpZW50UmVhY3RBcHAvLi9ncmFwaHFsL2Fwb2xsb0NsaWVudC5qcz82MjVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb0NsaWVudCwgSW5NZW1vcnlDYWNoZSwgbWFrZVZhciB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCB7IGdlbmVyYWxDb25jYXRQYWdpbmF0aW9uIH0gZnJvbSAnLi9wYWdpbmF0aW9uJztcblxuZXhwb3J0IGNvbnN0IGN1cnJlbnRUaGVtZVZhciA9IG1ha2VWYXIoJ2xpZ2h0Jyk7XG5leHBvcnQgY29uc3QgY2hlY2tCb3hMaXN0VmFyID0gbWFrZVZhcihbXSk7XG5leHBvcnQgY29uc3QgcGFnaW5hdGlvbkRhdGFWYXIgPSBtYWtlVmFyKHtcbiAgbGltaXQ6IDMsXG4gIG9mZnNldDogMCxcbiAgY3VycmVudFBhZ2U6IDAsXG4gIHRvdGFsSXRlbUNvdW50OiAwLFxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBcG9sbG8oKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgdHlwZVBvbGljaWVzOiB7XG4gICAgICBRdWVyeToge1xuICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICBzcGVha2Vyc0NvbmNhdDogZ2VuZXJhbENvbmNhdFBhZ2luYXRpb24oKSxcbiAgICAgICAgICBzZXNzaW9uc0NvbmNhdDogZ2VuZXJhbENvbmNhdFBhZ2luYXRpb24oKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBTcGVha2VyOiB7XG4gICAgICAgIGZpZWxkczoge1xuICAgICAgICAgIGZ1bGxOYW1lOiB7XG4gICAgICAgICAgICByZWFkOiBmdW5jdGlvbiAoXywgeyByZWFkRmllbGQgfSkge1xuICAgICAgICAgICAgICByZXR1cm4gYCR7cmVhZEZpZWxkKCdmaXJzdCcpfSAke3JlYWRGaWVsZCgnbGFzdCcpfWA7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2hlY2tCb3hDb2x1bW46IHtcbiAgICAgICAgICAgIHJlYWQ6IGZ1bmN0aW9uIChfLCB7IHJlYWRGaWVsZCB9KSB7XG4gICAgICAgICAgICAgIGNvbnN0IGlkID0gcmVhZEZpZWxkKCdpZCcpO1xuICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZFNwZWFrZXJJZHMgPSBjaGVja0JveExpc3RWYXIoKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGVkU3BlYWtlcklkc1xuICAgICAgICAgICAgICAgID8gc2VsZWN0ZWRTcGVha2VySWRzLmluY2x1ZGVzKGlkKVxuICAgICAgICAgICAgICAgIDogZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG4gIHJldHVybiBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICB1cmk6ICdodHRwOi8vbG9jYWxob3N0OjQwMDAnLFxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZShvcHRpb25zKSxcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiQXBvbGxvQ2xpZW50IiwiSW5NZW1vcnlDYWNoZSIsIm1ha2VWYXIiLCJnZW5lcmFsQ29uY2F0UGFnaW5hdGlvbiIsImN1cnJlbnRUaGVtZVZhciIsImNoZWNrQm94TGlzdFZhciIsInBhZ2luYXRpb25EYXRhVmFyIiwibGltaXQiLCJvZmZzZXQiLCJjdXJyZW50UGFnZSIsInRvdGFsSXRlbUNvdW50IiwidXNlQXBvbGxvIiwib3B0aW9ucyIsInR5cGVQb2xpY2llcyIsIlF1ZXJ5IiwiZmllbGRzIiwic3BlYWtlcnNDb25jYXQiLCJzZXNzaW9uc0NvbmNhdCIsIlNwZWFrZXIiLCJmdWxsTmFtZSIsInJlYWQiLCJfIiwicmVhZEZpZWxkIiwiY2hlY2tCb3hDb2x1bW4iLCJpZCIsInNlbGVjdGVkU3BlYWtlcklkcyIsImluY2x1ZGVzIiwidXJpIiwiY2FjaGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./graphql/apolloClient.js\n");

/***/ }),

/***/ "./graphql/pagination.js":
/*!*******************************!*\
  !*** ./graphql/pagination.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generalConcatPagination\": () => (/* binding */ generalConcatPagination)\n/* harmony export */ });\nfunction generalConcatPagination() {\n    return {\n        read: function(existing) {\n            return existing;\n        },\n        merge: function(existing, incoming) {\n            return !existing ? {\n                __typename: incoming.__typename,\n                datalist: [\n                    ...incoming.datalist\n                ],\n                pageInfo: {\n                    ...incoming.pageInfo\n                }\n            } : {\n                __typename: incoming.__typename,\n                datalist: [\n                    ...existing.datalist,\n                    ...incoming.datalist\n                ],\n                pageInfo: {\n                    ...incoming.pageInfo\n                }\n            };\n        },\n        keyArgs: false\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ncmFwaHFsL3BhZ2luYXRpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLFNBQVNBLHVCQUF1QixHQUFHO0lBQ3hDLE9BQU87UUFDTEMsSUFBSSxFQUFFLFNBQVVDLFFBQVEsRUFBRTtZQUN4QixPQUFPQSxRQUFRLENBQUM7UUFDbEIsQ0FBQztRQUNEQyxLQUFLLEVBQUUsU0FBVUQsUUFBUSxFQUFFRSxRQUFRLEVBQUU7WUFDbkMsT0FBTyxDQUFDRixRQUFRLEdBQ1o7Z0JBQ0VHLFVBQVUsRUFBRUQsUUFBUSxDQUFDQyxVQUFVO2dCQUMvQkMsUUFBUSxFQUFFO3VCQUFJRixRQUFRLENBQUNFLFFBQVE7aUJBQUM7Z0JBQ2hDQyxRQUFRLEVBQUU7b0JBQUUsR0FBR0gsUUFBUSxDQUFDRyxRQUFRO2lCQUFFO2FBQ25DLEdBQ0Q7Z0JBQ0VGLFVBQVUsRUFBRUQsUUFBUSxDQUFDQyxVQUFVO2dCQUMvQkMsUUFBUSxFQUFFO3VCQUFJSixRQUFRLENBQUNJLFFBQVE7dUJBQUtGLFFBQVEsQ0FBQ0UsUUFBUTtpQkFBQztnQkFDdERDLFFBQVEsRUFBRTtvQkFBRSxHQUFHSCxRQUFRLENBQUNHLFFBQVE7aUJBQUU7YUFDbkMsQ0FBQztRQUNSLENBQUM7UUFDREMsT0FBTyxFQUFFLEtBQUs7S0FDZixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0Fwb2xsb0NsaWVudFJlYWN0QXBwLy4vZ3JhcGhxbC9wYWdpbmF0aW9uLmpzPzk5YjAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYWxDb25jYXRQYWdpbmF0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIHJlYWQ6IGZ1bmN0aW9uIChleGlzdGluZykge1xuICAgICAgcmV0dXJuIGV4aXN0aW5nO1xuICAgIH0sXG4gICAgbWVyZ2U6IGZ1bmN0aW9uIChleGlzdGluZywgaW5jb21pbmcpIHtcbiAgICAgIHJldHVybiAhZXhpc3RpbmdcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBfX3R5cGVuYW1lOiBpbmNvbWluZy5fX3R5cGVuYW1lLFxuICAgICAgICAgICAgZGF0YWxpc3Q6IFsuLi5pbmNvbWluZy5kYXRhbGlzdF0sXG4gICAgICAgICAgICBwYWdlSW5mbzogeyAuLi5pbmNvbWluZy5wYWdlSW5mbyB9LFxuICAgICAgICAgIH1cbiAgICAgICAgOiB7XG4gICAgICAgICAgICBfX3R5cGVuYW1lOiBpbmNvbWluZy5fX3R5cGVuYW1lLFxuICAgICAgICAgICAgZGF0YWxpc3Q6IFsuLi5leGlzdGluZy5kYXRhbGlzdCwgLi4uaW5jb21pbmcuZGF0YWxpc3RdLFxuICAgICAgICAgICAgcGFnZUluZm86IHsgLi4uaW5jb21pbmcucGFnZUluZm8gfSxcbiAgICAgICAgICB9O1xuICAgIH0sXG4gICAga2V5QXJnczogZmFsc2UsXG4gIH07XG59XG4iXSwibmFtZXMiOlsiZ2VuZXJhbENvbmNhdFBhZ2luYXRpb24iLCJyZWFkIiwiZXhpc3RpbmciLCJtZXJnZSIsImluY29taW5nIiwiX190eXBlbmFtZSIsImRhdGFsaXN0IiwicGFnZUluZm8iLCJrZXlBcmdzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./graphql/pagination.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _graphql_apolloClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../graphql/apolloClient */ \"./graphql/apolloClient.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction App({ Component , pageProps  }) {\n    const apolloClient = (0,_graphql_apolloClient__WEBPACK_IMPORTED_MODULE_1__.useApollo)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloProvider, {\n        client: apolloClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"Z:\\\\programming\\\\coding-exercises\\\\Graphql\\\\data_loaders\\\\ApolloClientReactApp\\\\pages\\\\_app.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"Z:\\\\programming\\\\coding-exercises\\\\Graphql\\\\data_loaders\\\\ApolloClientReactApp\\\\pages\\\\_app.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQW9EO0FBQ0o7QUFFakMsU0FBU0UsR0FBRyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEVBQUU7SUFDcEQsTUFBTUMsWUFBWSxHQUFHTCxnRUFBUyxFQUFFO0lBRWhDLHFCQUNFLDhEQUFDQywwREFBYztRQUFDSyxNQUFNLEVBQUVELFlBQVk7a0JBQ2xDLDRFQUFDRixTQUFTO1lBQUUsR0FBR0MsU0FBUzs7Ozs7Z0JBQUk7Ozs7O1lBQ2IsQ0FDakI7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQXBvbGxvQ2xpZW50UmVhY3RBcHAvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQXBvbGxvIH0gZnJvbSAnLi4vZ3JhcGhxbC9hcG9sbG9DbGllbnQnO1xuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgYXBvbGxvQ2xpZW50ID0gdXNlQXBvbGxvKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXthcG9sbG9DbGllbnR9PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlQXBvbGxvIiwiQXBvbGxvUHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJhcG9sbG9DbGllbnQiLCJjbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();