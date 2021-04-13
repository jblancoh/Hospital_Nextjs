webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Navbar/Navbar.js":
/*!*************************************!*\
  !*** ./components/Navbar/Navbar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/esm/index.js\");\n/* harmony import */ var _components_Logo_Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Logo/Logo */ \"./components/Logo/Logo.js\");\n\n\nvar _jsxFileName = \"/Users/jblancoh/Projects/Hospital_Nextjs/components/Navbar/Navbar.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar MenuItems = function MenuItems(_ref) {\n  var children = _ref.children,\n      _ref$to = _ref.to,\n      to = _ref$to === void 0 ? '/' : _ref$to;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"MenuItem\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      href: to,\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = MenuItems;\n\nvar Navbar = function Navbar(props) {\n  _s();\n\n  var _useDisclosure = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"useDisclosure\"])(),\n      isOpen = _useDisclosure.isOpen,\n      onToggle = _useDisclosure.onToggle;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n      bg: Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"useColorModeValue\"])('white', 'gray.800'),\n      color: Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"useColorModeValue\"])('gray.600', 'white'),\n      minH: '60px',\n      py: {\n        base: 2\n      },\n      px: {\n        base: 4\n      },\n      borderBottom: 1,\n      borderStyle: 'solid',\n      borderColor: Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"useColorModeValue\"])('gray.200', 'gray.900'),\n      align: 'center',\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n        flex: {\n          base: 1,\n          md: 'auto'\n        },\n        ml: {\n          base: -2\n        },\n        display: {\n          base: 'flex',\n          md: 'none'\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"IconButton\"], {\n          onClick: onToggle,\n          icon: isOpen ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"CloseIcon\"], {\n            w: 3,\n            h: 3\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 24\n          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"HamburgerIcon\"], {\n            w: 5,\n            h: 5\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 52\n          }, _this),\n          variant: 'ghost',\n          \"aria-label\": 'Toggle Navigation'\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n        flex: {\n          base: 1\n        },\n        justify: {\n          base: 'center',\n          md: 'start'\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Logo_Logo__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n          display: {\n            base: 'none',\n            md: 'flex'\n          },\n          ml: 10\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Navbar, \"7aim04IgMAlATSrx6b1D+TE6jFI=\", false, function () {\n  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"useDisclosure\"], _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"useColorModeValue\"], _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"useColorModeValue\"], _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"useColorModeValue\"]];\n});\n\n_c2 = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"MenuItems\");\n$RefreshReg$(_c2, \"Navbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyLmpzP2Q1NzgiXSwibmFtZXMiOlsiTWVudUl0ZW1zIiwiY2hpbGRyZW4iLCJ0byIsIk5hdmJhciIsInByb3BzIiwidXNlRGlzY2xvc3VyZSIsImlzT3BlbiIsIm9uVG9nZ2xlIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJiYXNlIiwibWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFjQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEscUJBQWFDLEVBQWI7QUFBQSxNQUFhQSxFQUFiLHdCQUFrQixHQUFsQjtBQUFBLHNCQUNoQixxRUFBQyx5REFBRDtBQUFBLDJCQUNFLHFFQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFFQSxFQUFaO0FBQUEsZ0JBQWlCRDtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURnQjtBQUFBLENBQWxCOztLQUFNRCxTOztBQU9OLElBQU1HLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLHVCQUNLQyxzRUFBYSxFQURsQjtBQUFBLE1BQ2hCQyxNQURnQixrQkFDaEJBLE1BRGdCO0FBQUEsTUFDUkMsUUFEUSxrQkFDUkEsUUFEUTs7QUFFeEIsc0JBQ0UscUVBQUMsb0RBQUQ7QUFBQSwyQkFDRSxxRUFBQyxxREFBRDtBQUNFLFFBQUUsRUFBRUMsMEVBQWlCLENBQUMsT0FBRCxFQUFVLFVBQVYsQ0FEdkI7QUFFRSxXQUFLLEVBQUVBLDBFQUFpQixDQUFDLFVBQUQsRUFBYSxPQUFiLENBRjFCO0FBR0UsVUFBSSxFQUFFLE1BSFI7QUFJRSxRQUFFLEVBQUU7QUFBRUMsWUFBSSxFQUFFO0FBQVIsT0FKTjtBQUtFLFFBQUUsRUFBRTtBQUFFQSxZQUFJLEVBQUU7QUFBUixPQUxOO0FBTUUsa0JBQVksRUFBRSxDQU5oQjtBQU9FLGlCQUFXLEVBQUUsT0FQZjtBQVFFLGlCQUFXLEVBQUVELDBFQUFpQixDQUFDLFVBQUQsRUFBYSxVQUFiLENBUmhDO0FBU0UsV0FBSyxFQUFFLFFBVFQ7QUFBQSw4QkFVRSxxRUFBQyxxREFBRDtBQUNFLFlBQUksRUFBRTtBQUFFQyxjQUFJLEVBQUUsQ0FBUjtBQUFXQyxZQUFFLEVBQUU7QUFBZixTQURSO0FBRUUsVUFBRSxFQUFFO0FBQUVELGNBQUksRUFBRSxDQUFDO0FBQVQsU0FGTjtBQUdFLGVBQU8sRUFBRTtBQUFFQSxjQUFJLEVBQUUsTUFBUjtBQUFnQkMsWUFBRSxFQUFFO0FBQXBCLFNBSFg7QUFBQSwrQkFJRSxxRUFBQywyREFBRDtBQUNFLGlCQUFPLEVBQUVILFFBRFg7QUFFRSxjQUFJLEVBQ0ZELE1BQU0sZ0JBQUcscUVBQUMsMERBQUQ7QUFBVyxhQUFDLEVBQUUsQ0FBZDtBQUFpQixhQUFDLEVBQUU7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBSCxnQkFBK0IscUVBQUMsOERBQUQ7QUFBZSxhQUFDLEVBQUUsQ0FBbEI7QUFBcUIsYUFBQyxFQUFFO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSHpDO0FBS0UsaUJBQU8sRUFBRSxPQUxYO0FBTUUsd0JBQVk7QUFOZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZGLGVBdUJFLHFFQUFDLHFEQUFEO0FBQU0sWUFBSSxFQUFFO0FBQUVHLGNBQUksRUFBRTtBQUFSLFNBQVo7QUFBeUIsZUFBTyxFQUFFO0FBQUVBLGNBQUksRUFBRSxRQUFSO0FBQWtCQyxZQUFFLEVBQUU7QUFBdEIsU0FBbEM7QUFBQSxnQ0FDRSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUscUVBQUMscURBQUQ7QUFBTSxpQkFBTyxFQUFFO0FBQUVELGdCQUFJLEVBQUUsTUFBUjtBQUFnQkMsY0FBRSxFQUFFO0FBQXBCLFdBQWY7QUFBNkMsWUFBRSxFQUFFO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtDRCxDQXBDRDs7R0FBTVAsTTtVQUN5QkUsOEQsRUFJbkJHLGtFLEVBQ0dBLGtFLEVBTU1BLGtFOzs7TUFaZkwsTTtBQXNDU0EscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci9OYXZiYXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQge1xuICBNZW51LFxuICBNZW51SXRlbSxcbiAgSWNvbkJ1dHRvbixcbiAgTWVudUJ1dHRvbixcbiAgTWVudUxpc3QsXG4gIEJ1dHRvbixcbiAgRmxleCxcbiAgQm94LFxuICBUZXh0LFxuICBTdGFjayxcbiAgdXNlRGlzY2xvc3VyZSxcbiAgdXNlQ29sb3JNb2RlVmFsdWVcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxuaW1wb3J0IHsgQ2hldnJvbkRvd25JY29uLCBDbG9zZUljb24sIEhhbWJ1cmdlckljb24gfSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiXG5pbXBvcnQgTG9nbyBmcm9tICdAY29tcG9uZW50cy9Mb2dvL0xvZ28nXG5cbmNvbnN0IE1lbnVJdGVtcyA9ICh7IGNoaWxkcmVuLCB0byA9ICcvJyB9KSA9PiAoXG4gIDxNZW51SXRlbT5cbiAgICA8TGluayBocmVmPXt0b30+e2NoaWxkcmVufTwvTGluaz5cbiAgPC9NZW51SXRlbT5cbik7XG5cblxuY29uc3QgTmF2YmFyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgaXNPcGVuLCBvblRvZ2dsZSB9ID0gdXNlRGlzY2xvc3VyZSgpO1xuICByZXR1cm4gKFxuICAgIDxCb3g+XG4gICAgICA8RmxleFxuICAgICAgICBiZz17dXNlQ29sb3JNb2RlVmFsdWUoJ3doaXRlJywgJ2dyYXkuODAwJyl9XG4gICAgICAgIGNvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZSgnZ3JheS42MDAnLCAnd2hpdGUnKX1cbiAgICAgICAgbWluSD17JzYwcHgnfVxuICAgICAgICBweT17eyBiYXNlOiAyIH19XG4gICAgICAgIHB4PXt7IGJhc2U6IDQgfX1cbiAgICAgICAgYm9yZGVyQm90dG9tPXsxfVxuICAgICAgICBib3JkZXJTdHlsZT17J3NvbGlkJ31cbiAgICAgICAgYm9yZGVyQ29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKCdncmF5LjIwMCcsICdncmF5LjkwMCcpfVxuICAgICAgICBhbGlnbj17J2NlbnRlcid9PlxuICAgICAgICA8RmxleFxuICAgICAgICAgIGZsZXg9e3sgYmFzZTogMSwgbWQ6ICdhdXRvJyB9fVxuICAgICAgICAgIG1sPXt7IGJhc2U6IC0yIH19XG4gICAgICAgICAgZGlzcGxheT17eyBiYXNlOiAnZmxleCcsIG1kOiAnbm9uZScgfX0+XG4gICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uVG9nZ2xlfVxuICAgICAgICAgICAgaWNvbj17XG4gICAgICAgICAgICAgIGlzT3BlbiA/IDxDbG9zZUljb24gdz17M30gaD17M30gLz4gOiA8SGFtYnVyZ2VySWNvbiB3PXs1fSBoPXs1fSAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyaWFudD17J2dob3N0J31cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9eydUb2dnbGUgTmF2aWdhdGlvbid9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgICA8RmxleCBmbGV4PXt7IGJhc2U6IDEgfX0ganVzdGlmeT17eyBiYXNlOiAnY2VudGVyJywgbWQ6ICdzdGFydCcgfX0+XG4gICAgICAgICAgPExvZ28gLz5cbiAgICAgICAgICA8RmxleCBkaXNwbGF5PXt7IGJhc2U6ICdub25lJywgbWQ6ICdmbGV4JyB9fSBtbD17MTB9PlxuICAgICAgICAgICAgey8qIDxEZXNrdG9wTmF2IC8+ICovfVxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgPC9GbGV4PlxuICAgIDwvQm94PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar/Navbar.js\n");

/***/ })

})