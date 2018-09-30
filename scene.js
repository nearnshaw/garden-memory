(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../private/var/folders/dl/bpdwhdg504j8z_t2tdcnt1n00000gp/T/0.6040648312847956.WebWorker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../private/var/folders/dl/bpdwhdg504j8z_t2tdcnt1n00000gp/T/0.6040648312847956.WebWorker.js":
/*!************************************************************************************************!*\
  !*** /private/var/folders/dl/bpdwhdg504j8z_t2tdcnt1n00000gp/T/0.6040648312847956.WebWorker.js ***!
  \************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_Nico_Documents_github_garden_memory_node_modules_decentraland_rpc_lib_common_transports_WebWorker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/decentraland-rpc/lib/common/transports/WebWorker */ \"./node_modules/decentraland-rpc/lib/common/transports/WebWorker.js\");\n\n\nconst imported = __webpack_require__(/*! ./scene.tsx */ \"./scene.tsx\")\n\nif (imported && imported.__esModule && imported['default']) {\n  new imported['default'](Object(_Users_Nico_Documents_github_garden_memory_node_modules_decentraland_rpc_lib_common_transports_WebWorker__WEBPACK_IMPORTED_MODULE_0__[\"WebWorkerTransport\"])(self))\n}\n\n\n//# sourceURL=webpack:////private/var/folders/dl/bpdwhdg504j8z_t2tdcnt1n00000gp/T/0.6040648312847956.WebWorker.js?");

/***/ }),

/***/ "./node_modules/decentraland-rpc/lib/common/transports/WebWorker.js":
/*!**************************************************************************!*\
  !*** ./node_modules/decentraland-rpc/lib/common/transports/WebWorker.js ***!
  \**************************************************************************/
/*! exports provided: WebWorkerTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WebWorkerTransport\", function() { return WebWorkerTransport; });\nfunction WebWorkerTransport(worker) {\n    const api = {\n        onConnect(handler) {\n            worker.addEventListener('message', () => handler(), { once: true });\n        },\n        onError(handler) {\n            worker.addEventListener('error', (err) => {\n                if (err.error) {\n                    handler(err.error);\n                }\n                else if (err.message) {\n                    handler(Object.assign(new Error(err.message), {\n                        colno: err.colno,\n                        error: err.error,\n                        filename: err.filename,\n                        lineno: err.lineno,\n                        message: err.message\n                    }));\n                }\n            });\n        },\n        onMessage(handler) {\n            worker.addEventListener('message', (message) => {\n                handler(message.data);\n            });\n        },\n        sendMessage(message) {\n            worker.postMessage(message);\n        },\n        close() {\n            if ('terminate' in worker) {\n                ;\n                worker.terminate();\n            }\n            else if ('close' in worker) {\n                ;\n                worker.close();\n            }\n        }\n    };\n    return api;\n}\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViV29ya2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1vbi90cmFuc3BvcnRzL1dlYldvcmtlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQSxNQUFNLFVBQVUsa0JBQWtCLENBQUMsTUFBZTtJQUNoRCxNQUFNLEdBQUcsR0FBdUI7UUFDOUIsU0FBUyxDQUFDLE9BQU87WUFDZixNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUE7UUFDckUsQ0FBQztRQUNELE9BQU8sQ0FBQyxPQUFPO1lBQ2IsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQWUsRUFBRSxFQUFFO2dCQUNuRCxJQUFJLEdBQUcsQ0FBQyxLQUFLLEVBQUU7b0JBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtpQkFDbkI7cUJBQU0sSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFO29CQUN0QixPQUFPLENBQ0wsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUU7d0JBQ3BDLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSzt3QkFDaEIsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLO3dCQUNoQixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7d0JBQ3RCLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTTt3QkFDbEIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPO3FCQUNyQixDQUFDLENBQ0gsQ0FBQTtpQkFDRjtZQUNILENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQztRQUNELFNBQVMsQ0FBQyxPQUFPO1lBQ2YsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxDQUFDLE9BQXFCLEVBQUUsRUFBRTtnQkFDM0QsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUN2QixDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFDRCxXQUFXLENBQUMsT0FBTztZQUNqQixNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQzdCLENBQUM7UUFDRCxLQUFLO1lBQ0gsSUFBSSxXQUFXLElBQUksTUFBTSxFQUFFO2dCQUV6QixDQUFDO2dCQUFDLE1BQWMsQ0FBQyxTQUFTLEVBQUUsQ0FBQTthQUM3QjtpQkFBTSxJQUFJLE9BQU8sSUFBSSxNQUFNLEVBQUU7Z0JBRTVCLENBQUM7Z0JBQUMsTUFBYyxDQUFDLEtBQUssRUFBRSxDQUFBO2FBQ3pCO1FBQ0gsQ0FBQztLQUNGLENBQUE7SUFFRCxPQUFPLEdBQUcsQ0FBQTtBQUNaLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY3JpcHRpbmdUcmFuc3BvcnQgfSBmcm9tICcuLi9qc29uLXJwYy90eXBlcydcblxuZXhwb3J0IGludGVyZmFjZSBJV29ya2VyIHtcbiAgdGVybWluYXRlPygpOiB2b2lkXG4gIGNsb3NlPygpOiB2b2lkXG4gIHBvc3RNZXNzYWdlKG1lc3NhZ2U6IGFueSk6IHZvaWRcbiAgYWRkRXZlbnRMaXN0ZW5lcih0eXBlOiAnbWVzc2FnZScgfCAnZXJyb3InLCBsaXN0ZW5lcjogRnVuY3Rpb24sIG9wdGlvbnM/OiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBXZWJXb3JrZXJUcmFuc3BvcnQod29ya2VyOiBJV29ya2VyKTogU2NyaXB0aW5nVHJhbnNwb3J0IHtcbiAgY29uc3QgYXBpOiBTY3JpcHRpbmdUcmFuc3BvcnQgPSB7XG4gICAgb25Db25uZWN0KGhhbmRsZXIpIHtcbiAgICAgIHdvcmtlci5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKCkgPT4gaGFuZGxlcigpLCB7IG9uY2U6IHRydWUgfSlcbiAgICB9LFxuICAgIG9uRXJyb3IoaGFuZGxlcikge1xuICAgICAgd29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKGVycjogRXJyb3JFdmVudCkgPT4ge1xuICAgICAgICBpZiAoZXJyLmVycm9yKSB7XG4gICAgICAgICAgaGFuZGxlcihlcnIuZXJyb3IpXG4gICAgICAgIH0gZWxzZSBpZiAoZXJyLm1lc3NhZ2UpIHtcbiAgICAgICAgICBoYW5kbGVyKFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoZXJyLm1lc3NhZ2UpLCB7XG4gICAgICAgICAgICAgIGNvbG5vOiBlcnIuY29sbm8sXG4gICAgICAgICAgICAgIGVycm9yOiBlcnIuZXJyb3IsXG4gICAgICAgICAgICAgIGZpbGVuYW1lOiBlcnIuZmlsZW5hbWUsXG4gICAgICAgICAgICAgIGxpbmVubzogZXJyLmxpbmVubyxcbiAgICAgICAgICAgICAgbWVzc2FnZTogZXJyLm1lc3NhZ2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgb25NZXNzYWdlKGhhbmRsZXIpIHtcbiAgICAgIHdvcmtlci5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKG1lc3NhZ2U6IE1lc3NhZ2VFdmVudCkgPT4ge1xuICAgICAgICBoYW5kbGVyKG1lc3NhZ2UuZGF0YSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICBzZW5kTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgICB3b3JrZXIucG9zdE1lc3NhZ2UobWVzc2FnZSlcbiAgICB9LFxuICAgIGNsb3NlKCkge1xuICAgICAgaWYgKCd0ZXJtaW5hdGUnIGluIHdvcmtlcikge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6c2VtaWNvbG9uXG4gICAgICAgIDsod29ya2VyIGFzIGFueSkudGVybWluYXRlKClcbiAgICAgIH0gZWxzZSBpZiAoJ2Nsb3NlJyBpbiB3b3JrZXIpIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnNlbWljb2xvblxuICAgICAgICA7KHdvcmtlciBhcyBhbnkpLmNsb3NlKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXBpXG59XG4iXX0=\n\n//# sourceURL=webpack:///./node_modules/decentraland-rpc/lib/common/transports/WebWorker.js?");

/***/ }),

/***/ "./scene.tsx":
/*!*******************!*\
  !*** ./scene.tsx ***!
  \*******************/
/*! exports provided: sleep, flowerTypes, default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: ENOENT: no such file or directory, open '/Users/Nico/Documents/github/garden-memory/scene.tsx'\");\n\n//# sourceURL=webpack:///./scene.tsx?");

/***/ })

/******/ })));