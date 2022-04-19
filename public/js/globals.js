/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/animations.js":
/*!************************************!*\
  !*** ./resources/js/animations.js ***!
  \************************************/
/***/ (() => {

var revealLeft = document.querySelectorAll(".reveal-left");
var revealRight = document.querySelectorAll(".reveal-right");
var revealBottom = document.querySelectorAll(".reveal-bottom");
var revealTop = document.querySelectorAll(".reveal-top");
var fadeIn = document.querySelectorAll(".fade-in");
var pop = document.querySelectorAll(".pop");
var shadow = document.querySelectorAll(".shadow");
var grow = document.querySelectorAll(".grow");

var scrollAnim = function scrollAnim() {
  var windowHt = window.innerHeight;
  revealLeft.forEach(function (element) {
    var elPos = element.getBoundingClientRect().top;

    if (element.classList.contains('header-anim') && window.innerWidth > 875) {
      element.classList.add('revealed');
    } else {
      if (elPos < windowHt / 1.2) {
        element.classList.add('revealed');
      }
    }
  });
  revealRight.forEach(function (element) {
    var elPos = element.getBoundingClientRect().top;

    if (element.classList.contains('header-anim') && window.innerWidth > 875) {
      element.classList.add('revealed');
    } else {
      if (elPos < windowHt / 1.2) {
        element.classList.add('revealed');
      }
    }
  });
  revealBottom.forEach(function (element) {
    var elPos = element.getBoundingClientRect().top;

    if (element.classList.contains('header-anim') && window.innerWidth > 875) {
      element.classList.add('revealed');
    } else {
      if (elPos < windowHt / 1.2) {
        element.classList.add('revealed');
      }
    }
  });
  revealTop.forEach(function (element) {
    var elPos = element.getBoundingClientRect().top;

    if (element.classList.contains('header-anim') && window.innerWidth > 875) {
      element.classList.add('revealed');
    } else {
      if (elPos < windowHt / 1.2) {
        element.classList.add('revealed');
      }
    }
  });
  fadeIn.forEach(function (element) {
    var elPos = element.getBoundingClientRect().top;

    if (element.classList.contains('header-anim') && window.innerWidth > 875) {
      element.classList.add('revealed');
    } else {
      if (elPos < windowHt / 1.2) {
        element.classList.add('revealed');
      }
    }
  });
  pop.forEach(function (element) {
    var elPos = element.getBoundingClientRect().top;

    if (element.classList.contains('header-anim') && window.innerWidth > 875) {
      element.classList.add('revealed');
    } else {
      if (elPos < windowHt / 1.2) {
        element.classList.add('revealed');
      }
    }
  });
  shadow.forEach(function (element) {
    var elPos = element.getBoundingClientRect().top;

    if (element.classList.contains('header-anim') && window.innerWidth > 875) {
      element.classList.add('revealed');
    } else {
      if (elPos < windowHt / 1.2) {
        element.classList.add('revealed');
      }
    }
  });
  grow.forEach(function (element) {
    var elPos = element.getBoundingClientRect().top;

    if (element.classList.contains('header-anim') && window.innerWidth > 875) {
      element.classList.add('revealed');
    } else {
      if (elPos < windowHt / 1.2) {
        element.classList.add('revealed');
      }
    }
  });
};

document.addEventListener("DOMContentLoaded", scrollAnim);
window.addEventListener('scroll', scrollAnim);

/***/ }),

/***/ "./resources/js/globals.js":
/*!*********************************!*\
  !*** ./resources/js/globals.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animations */ "./resources/js/animations.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_animations__WEBPACK_IMPORTED_MODULE_0__);
 // BURGER MENU TOGGLE

var burgers = document.getElementsByClassName("burger");
var menu = document.getElementById('mob-menu');

for (var i = 0; i < burgers.length; i++) {
  burgers[i].addEventListener("click", function () {
    this.children[0].classList.toggle('open');
    menu.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  });
}

;

/***/ }),

/***/ "./resources/sass/home.scss":
/*!**********************************!*\
  !*** ./resources/sass/home.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/globals": 0,
/******/ 			"css/home": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/home"], () => (__webpack_require__("./resources/js/globals.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/home"], () => (__webpack_require__("./resources/sass/home.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;