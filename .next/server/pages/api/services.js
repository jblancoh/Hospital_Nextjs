module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/services/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/services/index.js":
/*!*************************************!*\
  !*** ./pages/api/services/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst allServices = async (request, res) => {\n  const url = \"https://age-of-empires-2-api.herokuapp.com/api/v1\";\n  const response = await fetch(`${url}/civilizations`, {\n    method: 'GET',\n    headers: {\n      'Content-type': 'application/json'\n    }\n  });\n  let data = await response.json();\n  res.status(200).json(data);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (allServices);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvc2VydmljZXMvaW5kZXguanM/NTRkYiJdLCJuYW1lcyI6WyJhbGxTZXJ2aWNlcyIsInJlcXVlc3QiLCJyZXMiLCJ1cmwiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImRhdGEiLCJqc29uIiwic3RhdHVzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU1BLFdBQVcsR0FBRyxPQUFPQyxPQUFQLEVBQWdCQyxHQUFoQixLQUF3QjtBQUMxQyxRQUFNQyxHQUFHLEdBQUcsbURBQVo7QUFDQSxRQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFFLEdBQUVGLEdBQUksZ0JBQVIsRUFBeUI7QUFDbkRHLFVBQU0sRUFBRSxLQUQyQztBQUVuREMsV0FBTyxFQUFFO0FBQ1Asc0JBQWdCO0FBRFQ7QUFGMEMsR0FBekIsQ0FBNUI7QUFNQSxNQUFJQyxJQUFJLEdBQUcsTUFBTUosUUFBUSxDQUFDSyxJQUFULEVBQWpCO0FBQ0FQLEtBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JELElBQWhCLENBQXFCRCxJQUFyQjtBQUNELENBVkQ7O0FBV2VSLDBFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3NlcnZpY2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYWxsU2VydmljZXMgPSBhc3luYyAocmVxdWVzdCwgcmVzKSA9PiB7XG4gIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly9hZ2Utb2YtZW1waXJlcy0yLWFwaS5oZXJva3VhcHAuY29tL2FwaS92MVwiXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dXJsfS9jaXZpbGl6YXRpb25zYCwge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgIH1cbiAgfSlcbiAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSlcbn1cbmV4cG9ydCBkZWZhdWx0IGFsbFNlcnZpY2VzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/services/index.js\n");

/***/ })

/******/ });