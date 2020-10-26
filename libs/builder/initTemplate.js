/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/libs/builder/initTemplate.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/libs/builder/initTemplate.js":
/*!******************************************!*\
  !*** ./src/libs/builder/initTemplate.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../template */ "./src/template/index.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


/**
 * 初始化模版配置
 *
 * @param {object} templateConfig 模版配置
 */

function initTempate(templateConfig) {
  Object.keys(templateConfig).forEach(function (groupKey) {
    var group = templateConfig[groupKey]; // 如果组需要不显示

    if (group.hide) return;
    var groupName = group.groupName,
        list = group.list;
    var filterGroupList = list.filter(function (v) {
      return !v.hide;
    });
    Vvveb.BlocksGroup[groupName] = filterGroupList.map(function (templateItem) {
      return templateItem.key;
    });
    filterGroupList.forEach(function (templateItem) {
      var key = templateItem.key,
          rest = _objectWithoutProperties(templateItem, ["key"]);

      Vvveb.Blocks.add(templateItem.key, rest);
    });
  });
}

initTempate(_template__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/template/banner/banner-one/index.js":
/*!*************************************************!*\
  !*** ./src/template/banner/banner-one/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var html = "\n<section class=\"banner-one\">\n<div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img src=\"https://img.ikstatic.cn/MTYwMzQxODU4ODc2OCM2MzcjanBn.jpg\" class=\"d-block w-100\" alt=\"...\">\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"https://img.ikstatic.cn/MTYwMzQxODU3NDY0NSM5NDQjanBn.jpg\" class=\"d-block w-100\" alt=\"...\">\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"https://img.ikstatic.cn/MTYwMzQxODU2MTk5MCM1NjMjanBn.jpg\" class=\"d-block w-100\" alt=\"...\">\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n</section>\n";
var css = "\n";
var script = "\n<script>\n  console.log($)\n</script>\n";
var exportModule = {
  script: {
    jQuery: {
      url: 'https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js',
      attrs: {
        crossorigin: 'anonymous',
        integrity: 'sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj'
      }
    },
    popperJs: {
      url: 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js',
      attrs: {
        crossorigin: 'anonymous',
        integrity: 'sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo'
      }
    },
    bootstrapJs: {
      url: 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/js/bootstrap.min.js',
      attrs: {
        crossorigin: 'anonymous',
        integrity: 'sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI'
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  html: html,
  css: css,
  script: script,
  exportModule: exportModule
});

/***/ }),

/***/ "./src/template/banner/banner-three/index.js":
/*!***************************************************!*\
  !*** ./src/template/banner/banner-three/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var html = "\n<section class=\"banner-one\">\n<div id=\"carouselExampleCaptions\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"1\"></li>\n    <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"2\"></li>\n  </ol>\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img src=\"https://img.ikstatic.cn/MTYwMzQxODU2MTk5MCM1NjMjanBn.jpg\" class=\"d-block w-100\" alt=\"...\">\n      <div class=\"carousel-caption d-none d-md-block\">\n        <h5>First slide label</h5>\n        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n      </div>\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"https://img.ikstatic.cn/MTYwMzQxODU4ODc2OCM2MzcjanBn.jpg\" class=\"d-block w-100\" alt=\"...\">\n      <div class=\"carousel-caption d-none d-md-block\">\n        <h5>Second slide label</h5>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n      </div>\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"https://img.ikstatic.cn/MTYwMzQxODU3NDY0NSM5NDQjanBn.jpg\" class=\"d-block w-100\" alt=\"...\">\n      <div class=\"carousel-caption d-none d-md-block\">\n        <h5>Third slide label</h5>\n        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n      </div>\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleCaptions\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleCaptions\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n</section>\n";
var css = "\n";
var script = "\n";
var exportModule = {
  script: {
    jQuery: {
      url: 'https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js',
      attrs: {
        crossorigin: 'anonymous',
        integrity: 'sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj'
      }
    },
    popperJs: {
      url: 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js',
      attrs: {
        crossorigin: 'anonymous',
        integrity: 'sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo'
      }
    },
    bootstrapJs: {
      url: 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/js/bootstrap.min.js',
      attrs: {
        crossorigin: 'anonymous',
        integrity: 'sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI'
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  html: html,
  css: css,
  script: script,
  exportModule: exportModule
});

/***/ }),

/***/ "./src/template/banner/banner-two/index.js":
/*!*************************************************!*\
  !*** ./src/template/banner/banner-two/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var html = "\n<section class=\"banner-one\">\n<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n  </ol>\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img src=\"https://img.ikstatic.cn/MTYwMzQxODU2MTk5MCM1NjMjanBn.jpg\" class=\"d-block w-100\" alt=\"...\">\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"https://img.ikstatic.cn/MTYwMzQxODU2MTk5MCM1NjMjanBn.jpg\" class=\"d-block w-100\" alt=\"...\">\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"https://img.ikstatic.cn/MTYwMzQxODU4ODc2OCM2MzcjanBn.jpg\" class=\"d-block w-100\" alt=\"...\">\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n</section>\n";
var css = "\n";
var script = "\n";
var exportModule = {
  script: {
    jQuery: {
      url: 'https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js',
      attrs: {
        crossorigin: 'anonymous',
        integrity: 'sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj'
      }
    },
    popperJs: {
      url: 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js',
      attrs: {
        crossorigin: 'anonymous',
        integrity: 'sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo'
      }
    },
    bootstrapJs: {
      url: 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/js/bootstrap.min.js',
      attrs: {
        crossorigin: 'anonymous',
        integrity: 'sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI'
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  html: html,
  css: css,
  script: script,
  exportModule: exportModule
});

/***/ }),

/***/ "./src/template/bootstrap4/image-gallery/index.js":
/*!********************************************************!*\
  !*** ./src/template/bootstrap4/image-gallery/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var template = "\n<section class=\"container\">\n\n  <h1 class=\"font-weight-light text-center text-lg-left mt-4 mb-0\">Thumbnail Gallery</h1>\n\n  <hr class=\"mt-2 mb-5\">\n\n  <div class=\"row text-center text-lg-left\">\n\n    <div class=\"col-lg-3 col-md-4 col-6\">\n      <a href=\"#\" class=\"d-block mb-4 h-100\">\n            <img class=\"img-fluid img-thumbnail\" src=\"https://source.unsplash.com/pWkk7iiCoDM/400x300\" alt=\"\">\n          </a>\n    </div>\n    <div class=\"col-lg-3 col-md-4 col-6\">\n      <a href=\"#\" class=\"d-block mb-4 h-100\">\n            <img class=\"img-fluid img-thumbnail\" src=\"https://source.unsplash.com/aob0ukAYfuI/400x300\" alt=\"\">\n          </a>\n    </div>\n    <div class=\"col-lg-3 col-md-4 col-6\">\n      <a href=\"#\" class=\"d-block mb-4 h-100\">\n            <img class=\"img-fluid img-thumbnail\" src=\"https://source.unsplash.com/EUfxH-pze7s/400x300\" alt=\"\">\n          </a>\n    </div>\n    <div class=\"col-lg-3 col-md-4 col-6\">\n      <a href=\"#\" class=\"d-block mb-4 h-100\">\n            <img class=\"img-fluid img-thumbnail\" src=\"https://source.unsplash.com/M185_qYH8vg/400x300\" alt=\"\">\n          </a>\n    </div>\n    <div class=\"col-lg-3 col-md-4 col-6\">\n      <a href=\"#\" class=\"d-block mb-4 h-100\">\n            <img class=\"img-fluid img-thumbnail\" src=\"https://source.unsplash.com/sesveuG_rNo/400x300\" alt=\"\">\n          </a>\n    </div>\n    <div class=\"col-lg-3 col-md-4 col-6\">\n      <a href=\"#\" class=\"d-block mb-4 h-100\">\n            <img class=\"img-fluid img-thumbnail\" src=\"https://source.unsplash.com/AvhMzHwiE_0/400x300\" alt=\"\">\n          </a>\n    </div>\n    <div class=\"col-lg-3 col-md-4 col-6\">\n      <a href=\"#\" class=\"d-block mb-4 h-100\">\n            <img class=\"img-fluid img-thumbnail\" src=\"https://source.unsplash.com/2gYsZUmockw/400x300\" alt=\"\">\n          </a>\n    </div>\n    <div class=\"col-lg-3 col-md-4 col-6\">\n      <a href=\"#\" class=\"d-block mb-4 h-100\">\n            <img class=\"img-fluid img-thumbnail\" src=\"https://source.unsplash.com/EMSDtjVHdQ8/400x300\" alt=\"\">\n          </a>\n    </div>\n    <div class=\"col-lg-3 col-md-4 col-6\">\n      <a href=\"#\" class=\"d-block mb-4 h-100\">\n            <img class=\"img-fluid img-thumbnail\" src=\"https://source.unsplash.com/8mUEy0ABdNE/400x300\" alt=\"\">\n          </a>\n    </div>\n    <div class=\"col-lg-3 col-md-4 col-6\">\n      <a href=\"#\" class=\"d-block mb-4 h-100\">\n            <img class=\"img-fluid img-thumbnail\" src=\"https://source.unsplash.com/G9Rfc1qccH4/400x300\" alt=\"\">\n          </a>\n    </div>\n    <div class=\"col-lg-3 col-md-4 col-6\">\n      <a href=\"#\" class=\"d-block mb-4 h-100\">\n            <img class=\"img-fluid img-thumbnail\" src=\"https://source.unsplash.com/aJeH0KcFkuc/400x300\" alt=\"\">\n          </a>\n    </div>\n    <div class=\"col-lg-3 col-md-4 col-6\">\n      <a href=\"#\" class=\"d-block mb-4 h-100\">\n            <img class=\"img-fluid img-thumbnail\" src=\"https://source.unsplash.com/p2TQ-3Bh3Oo/400x300\" alt=\"\">\n          </a>\n    </div>\n  </div>\n\n</section>\n";
/* harmony default export */ __webpack_exports__["default"] = (template);

/***/ }),

/***/ "./src/template/bootstrap4/signin-split/index.js":
/*!*******************************************************!*\
  !*** ./src/template/bootstrap4/signin-split/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var template = "\n<section class=\"container-fluid\">\n  <div class=\"row no-gutter\">\n    <div class=\"d-none d-md-flex col-md-4 col-lg-6 bg-image\"></div>\n    <div class=\"col-md-8 col-lg-6\">\n      <div class=\"login d-flex align-items-center py-5\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-9 col-lg-8 mx-auto\">\n              <h3 class=\"login-heading mb-4\">Welcome back!</h3>\n              <form>\n                <div class=\"form-label-group\">\n                  <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required autofocus>\n                  <label for=\"inputEmail\">Email address</label>\n                </div>\n\n                <div class=\"form-label-group\">\n                  <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required>\n                  <label for=\"inputPassword\">Password</label>\n                </div>\n\n                <div class=\"custom-control custom-checkbox mb-3\">\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\n                  <label class=\"custom-control-label\" for=\"customCheck1\">Remember password</label>\n                </div>\n                <button class=\"btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2\" type=\"submit\">Sign in</button>\n                <div class=\"text-center\">\n                  <a class=\"small\" href=\"#\">Forgot password?</a></div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n<style>\n.login,\n.image {\n  min-height: 100vh;\n}\n\n.bg-image {\n  background-image: url('https://source.unsplash.com/WEQbe2jBg40/600x1200');\n  background-size: cover;\n  background-position: center;\n}\n\n.login-heading {\n  font-weight: 300;\n}\n\n.btn-login {\n  font-size: 0.9rem;\n  letter-spacing: 0.05rem;\n  padding: 0.75rem 1rem;\n  border-radius: 2rem;\n}\n\n.form-label-group {\n  position: relative;\n  margin-bottom: 1rem;\n}\n\n.form-label-group>input,\n.form-label-group>label {\n  padding: var(--input-padding-y) var(--input-padding-x);\n  height: auto;\n  border-radius: 2rem;\n}\n\n.form-label-group>label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  margin-bottom: 0;\n  line-height: 1.5;\n  color: #495057;\n  cursor: text;\n  /* Match the input under the label */\n  border: 1px solid transparent;\n  border-radius: .25rem;\n  transition: all .1s ease-in-out;\n}\n\n.form-label-group input::-webkit-input-placeholder {\n  color: transparent;\n}\n\n.form-label-group input:-ms-input-placeholder {\n  color: transparent;\n}\n\n.form-label-group input::-ms-input-placeholder {\n  color: transparent;\n}\n\n.form-label-group input::-moz-placeholder {\n  color: transparent;\n}\n\n.form-label-group input::placeholder {\n  color: transparent;\n}\n\n.form-label-group input:not(:placeholder-shown) {\n  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\n  padding-bottom: calc(var(--input-padding-y) / 3);\n}\n\n.form-label-group input:not(:placeholder-shown)~label {\n  padding-top: calc(var(--input-padding-y) / 3);\n  padding-bottom: calc(var(--input-padding-y) / 3);\n  font-size: 12px;\n  color: #777;\n}\n</style>  \n</section>\n";
/* harmony default export */ __webpack_exports__["default"] = (template);

/***/ }),

/***/ "./src/template/bootstrap4/slider-header/index.js":
/*!********************************************************!*\
  !*** ./src/template/bootstrap4/slider-header/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var template = "\n<header class=\"slider\">\n  <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n    </ol>\n    <div class=\"carousel-inner\" role=\"listbox\">\n      <!-- Slide One - Set the background image for this slide in the line below -->\n      <div class=\"carousel-item active\" style=\"background-image: url('https://source.unsplash.com/LAaSoL0LrYs/1920x1080')\">\n        <div class=\"carousel-caption d-none d-md-block\">\n          <h2 class=\"display-4\">First Slide</h2>\n          <p class=\"lead\">This is a description for the first slide.</p>\n        </div>\n      </div>\n      <!-- Slide Two - Set the background image for this slide in the line below -->\n      <div class=\"carousel-item\" style=\"background-image: url('https://source.unsplash.com/bF2vsubyHcQ/1920x1080')\">\n        <div class=\"carousel-caption d-none d-md-block\">\n          <h2 class=\"display-4\">Second Slide</h2>\n          <p class=\"lead\">This is a description for the second slide.</p>\n        </div>\n      </div>\n      <!-- Slide Three - Set the background image for this slide in the line below -->\n      <div class=\"carousel-item\" style=\"background-image: url('https://source.unsplash.com/szFUQoyvrxM/1920x1080')\">\n        <div class=\"carousel-caption d-none d-md-block\">\n          <h2 class=\"display-4\">Third Slide</h2>\n          <p class=\"lead\">This is a description for the third slide.</p>\n        </div>\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n  </div>\n    \n<style>\n.carousel-item {\n  height: 100vh;\n  min-height: 350px;\n  background: no-repeat center center scroll;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n}\n</style>  \n</header>\n";
/* harmony default export */ __webpack_exports__["default"] = (template);

/***/ }),

/***/ "./src/template/content/about-us/index.js":
/*!************************************************!*\
  !*** ./src/template/content/about-us/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var html = "\n<section class=\"about-us section\">\n<div class=\"container\">\n  <div class=\"row align-items-center\">\n    <div class=\"col-md-6\">\n      <div class=\"entry\">\n        <img src=\"https://img.ikstatic.cn/MTYwMzYzNzI1MzcwOSMzODYjcG5n.png\" alt=\"\" />\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"entry\">\n        <span>\u5173\u4E8E\u6211\u4EEC</span>\n        <h2>\u6211\u4EEC\u662F\u4E00\u4E2A\u56E2\u961F</h2>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec\n          ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur\n          adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus\n          leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus\n          nec ullamcorper mattis, pulvinar dapibus leo.\n        </p>\n        <button class=\"button\">Read More</button>\n      </div>\n    </div>\n  </div>\n</div>\n</section>";
var css = "\n<style>\n.about-us {\n  background-image: url(../images/bg-about-us.png);\n  background-position: top right;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n.section {\n  padding: 55px 0 75px 0;\n}\n.align-items-center {\n  -ms-flex-align: center !important;\n  align-items: center !important;\n}\n.about-us .entry img {\n  padding-right: 40px;\n  width: 100%;\n  vertical-align: middle;\n  border-style: none;\n}\n.about-us .entry span {\n  color: #614caa;\n  font-size: 16px;\n  font-weight: 600;\n}\n.about-us .entry h2 {\n  margin: 20px 0;\n}\n.about-us p {\n  margin-top: 0;\n  margin-bottom: 20px;\n}\n.about-us .button {\n  background: #614caa;\n  border: 0;\n  color: #fff;\n  padding: 6px 14px 6px 14px;\n  border-radius: 5px;\n  font-size: 15px;\n  position: relative;\n  padding: 8px 20px;\n  transition: all 0.3s;\n  margin-top: 20px;\n}\n[type='button']:not(:disabled),\n[type='reset']:not(:disabled),\n[type='submit']:not(:disabled),\nbutton:not(:disabled) {\n  cursor: pointer;\n}\n</style>\n";
var script = "";
/* harmony default export */ __webpack_exports__["default"] = ({
  html: html,
  css: css,
  script: script
});

/***/ }),

/***/ "./src/template/content/background-videdo-content/index.js":
/*!*****************************************************************!*\
  !*** ./src/template/content/background-videdo-content/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var html = "\n<section class=\"full-backgroud-video-content\">\n<div class=\"cont\">\n  <div class=\"cont-bg\"><video id=\"bgvideo\" width=\"100%\" height=\"100%\"\n      src=\"https://m4a.inke.cn/MTU5MTI0Mjg1NzAwNCMzNzYjbXA0.mp4\" loop=\"\" style=\"width: 1300px; height: 731.25px;\"\n      autoplay=\"\">\u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301video\u6807\u7B7E\uFF0C\u5EFA\u8BAE\u66F4\u65B0\u6D4F\u89C8\u5668\u7248\u672C</video>\n    <div class=\"cont-bg-mask\"></div>\n  </div>\n</div>\n<div class=\"window-wrapper\" style=\"width: 1300px; height: 731.25px;\">\n  <ul>\n    <li><a href=\"https://itunes.apple.com/cn/app/id978985106\">IOS\u4E0B\u8F7D</a></li>\n    <li><a href=\"http://app.inke.cn/spread/inkeguanwang.apk?v=1603419\" class=\"android_down_url\">Android\u4E0B\u8F7D</a></li>\n    <li class=\"code pr\"><span>\u626B\u7801\u4E0B\u8F7D</span>\n      <p id=\"qrcode\"></p>\n    </li>\n    <li><a href=\"./livemanager/index.html#/livepartner\">\u76F4\u64AD\u4F34\u4FA3</a></li>\n  </ul>\n  <div class=\"roll\">\n    <div id=\"muted\" style=\"background-position: -31px -77px;\"></div>\n    <div class=\"box rollNextPage\" data-page=\"1\">\n      <div class=\"icon\"></div>\n      <div class=\"text\">\u5411\u4E0B\u6ED1\u52A8</div>\n    </div>\n  </div>\n</div>\n</section> \n";
var css = "\n<style type=\"text/css\">\n.full-backgroud-video-content {\n  position: relative;\n}\n\n.full-backgroud-video-content .cont {\n  width: 100%;\n  min-width: 1060px;\n  position: relative;\n  margin: 0 auto;\n  height: 100%\n}\n\n.full-backgroud-video-content .cont .roll,\n.full-backgroud-video-content .content .roll {\n  margin: auto;\n  padding: 20px 0 0;\n  position: absolute;\n  left: 0;\n  right: 0\n}\n\n.full-backgroud-video-content .cont-bg {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -100;\n  font-size: 0\n}\n\n.full-backgroud-video-content .cont-bg-mask {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(1, 7, 20, .2)\n}\n\n.full-backgroud-video-content .cont .roll {\n  bottom: 20px\n}\n\n.full-backgroud-video-content .content .roll {\n  bottom: 30px\n}\n\n.full-backgroud-video-content .content .roll .text {\n  color: #333\n}\n\n.full-backgroud-video-content .roll {\n  position: absolute;\n  bottom: 12px;\n  left: 0;\n  right: 0\n}\n\n.full-backgroud-video-content .roll .box {\n  -webkit-animation: jump 2s infinite;\n  animation: jump 2s infinite\n}\n\n.full-backgroud-video-content .roll .icon {\n  cursor: pointer;\n  margin: 0 auto;\n  width: 42px;\n  height: 42px;\n  background: url(https://img.ikstatic.cn/MTU4OTc5NDUzNzQxNSM0NDgjcG5n.png) center no-repeat;\n  background-size: 42px 42px\n}\n\n.full-backgroud-video-content .roll .text {\n  text-align: center;\n  font-size: 14px;\n  color: #fff;\n  padding: 16px 0\n}\n\n.full-backgroud-video-content .cont p {\n  margin-top: 0;\n  margin-bottom: 0;\n  height: 150px;\n  text-align: center\n}\n\n.full-backgroud-video-content .cont p img {\n  display: inline-block;\n  width: 1200px;\n  height: 150px\n}\n\n.full-backgroud-video-content .window-wrapper {\n  position: absolute;\n  top: 0;\n  min-width: 1300px;\n  width: 100%\n}\n\n.full-backgroud-video-content .window-wrapper ul {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto auto 180px;\n  width: 800px;\n  height: 76px;\n  list-style: none;\n  display: -webkit-flex;\n  -webkit-justify-content: space-between\n}\n\n.full-backgroud-video-content .window-wrapper li {\n  width: 178px;\n  line-height: 76px;\n  border-radius: 38px\n}\n\n.full-backgroud-video-content .window-wrapper li:nth-of-type(1) a {\n  background: url(https://img.ikstatic.cn/MTU4OTk0Njk3OTQ3NyM5OTUjcG5n.png) center no-repeat;\n  background-size: 100%;\n}\n\n.full-backgroud-video-content .window-wrapper li a,\n.full-backgroud-video-content .window-wrapper li span {\n  display: block;\n  width: 100%;\n  height: 100%;\n  text-indent: -9999px;\n  opacity: .7;\n  filter: alpha(opacity=70);\n  outline: 0\n}\n\n.full-backgroud-video-content .pr {\n  position: relative;\n}\n\n.full-backgroud-video-content #muted,\n.full-backgroud-video-content #qrcode {\n  position: absolute;\n  z-index: 1;\n}\n\n.full-backgroud-video-content #muted {\n  overflow: hidden;\n  right: 10px;\n  bottom: 10px;\n  width: 30px;\n  height: 30px;\n  border-radius: 20px;\n  background-position: 0 -77px;\n  cursor: pointer;\n  z-index: 1;\n}\n\n.full-backgroud-video-content #qrcode {\n  display: none;\n  top: 80px;\n  left: 50%;\n  margin-left: -89px;\n  width: 178px;\n  height: 178px;\n  padding: 3px;\n  background: url(//www.inke.cn/images/download_code.png) 0 0/100% no-repeat #fff;\n  border-radius: 10px;\n  background-clip: padding-box;\n  box-shadow: 0 0 20px #ccc\n}\n\n\n.full-backgroud-video-content #muted,\n.full-backgroud-video-content .window-wrapper li a,\n.full-backgroud-video-content .window-wrapper li span {\n  background-image: url(https://www.inke.cn/images/sprite_img.png);\n  background-repeat: no-repeat\n}\n\n.window-wrapper li a:hover,\n.window-wrapper li span:hover {\n  opacity: 1;\n  filter: alpha(opacity=100)\n}\n\n.full-backgroud-video-content window-wrapper li:nth-of-type(1) a {\n  background: url(https://img.ikstatic.cn/MTU4OTk0Njk3OTQ3NyM5OTUjcG5n.png) center no-repeat;\n  background-size: 100%\n}\n\n.full-backgroud-video-content .window-wrapper li:nth-of-type(2) a {\n  background: url(https://img.ikstatic.cn/MTU4OTk0Njk5NTY2MiM1MDEjcG5n.png) center no-repeat;\n  background-size: 100%\n}\n\n.full-backgroud-video-content .window-wrapper li:nth-of-type(3) span {\n  background: url(https://img.ikstatic.cn/MTU4OTk0Njk4NDg3NyM5NjEjcG5n.png) center no-repeat;\n  background-size: 100%\n}\n\n.full-backgroud-video-content .window-wrapper li:nth-of-type(4) a {\n  background: url(https://img.ikstatic.cn/MTU4OTk0Njk5MDQ2MiMyMTIjcG5n.png) center no-repeat;\n  background-size: 100%\n}\n\n\n@-webkit-keyframes jump {\n\n  0%,\n  to {\n    transform: translateY(0)\n  }\n\n  50% {\n    transform: translateY(20%)\n  }\n}\n\n@keyframes jump {\n\n  0%,\n  to {\n    transform: translateY(0)\n  }\n\n  50% {\n    transform: translateY(20%)\n  }\n}\n</style>\n";
var script = "\n<script>\n  // \u9002\u914D\n  window.addEventListener('load', changeSize)\n  window.addEventListener('resize', changeSize)\n\n  $(function () {\n    var $bgVideo = $('#bgvideo');\n    var bgVideo = $bgVideo[0],\n      $muted = $('#muted'),\n      $code = $('.code.pr'),\n      _muted = false;\n    changeSize()\n    var setMuteIcon = function () {\n      // \u9759\u97F3\u7684\u6837\u5F0F\n      if (_muted) {\n        $muted.css('backgroundPosition', '-31px -77px');\n      } else {\n        $muted.css('backgroundPosition', '0 -77px');\n      }\n    }\n\n    bgVideo.addEventListener('canplay', function () {\n      var promise = this.play();\n      bgVideo.volume = 0.75\n      promise && promise.then && promise.then(function () {\n        console.log('\u652F\u6301\u64AD\u653E: ')\n      }).catch(function () {\n        // \u65B0\u7248chrome\u4E0D\u652F\u6301\u81EA\u52A8\u64AD\u653E\u4E86, \u6240\u4EE5\u8FD9\u91CC\u5F97\u517C\u5BB9\u4E00\u4E0B, \u505A\u4E2A\u5224\u65AD, \u5148\u8FD9\u53EA\u9759\u97F3, \u7136\u540E\u518D\u9759\u97F3\u64AD\u653E\n        _muted = true\n        bgVideo.muted = true\n        setMuteIcon()\n\n        $bgVideo.prop('muted', true)\n        $bgVideo.prop('autoplay', true)\n        bgVideo.play()\n      })\n    });\n\n    // \u9759\u97F3\n    $muted.on('click', function () {\n      bgVideo.muted = !bgVideo.muted;\n      _muted = !_muted;\n      setMuteIcon()\n    });\n\n    // \u626B\u7801\u4E0B\u8F7D\n    $code.find('span').hover(function () {\n      $code.find('p').show();\n    }, function () {\n      $code.find('p').hide();\n    });\n\n    // \u76F4\u64AD\u52A9\u624Bnew\n    var LIVE_MANAGER_NEW = 'LIVE_MANAGER_NEW';\n    var liveNew = localStorage.getItem(LIVE_MANAGER_NEW);\n    if (!liveNew) {\n      $('#push-flow').append('<img class=\"icon-top-right\" src=\"https://img.ikstatic.cn/MTU1OTE5NjYzNzQyMSM1NDgjcG5n.png\" alt=\"\"/>');\n      $('#push-flow').on('click', function () {\n        localStorage.setItem(LIVE_MANAGER_NEW, Date.now());\n      });\n    }\n    // \u57CB\u70B9\n    var src = window.location.protocol + '//baseapi.busi.inke.cn/b.gif?cc=TG6001&source=other&os=other&type=hactivity&busi=inke&time=' + Date.now() + '&userid=&page=index&info=%7B%22desc%22%3A%22%E9%A6%96%E9%A1%B5%E5%B1%95%E7%A4%BA%E4%B8%8A%E6%8A%A5%22%7D&eid=pv&url=' + encodeURIComponent(window.location.href);\n    var image = new Image();\n    image.src = src;\n  });\n\n  function changeSize() {\n    var width = Math.max($('body').width(), 1300)\n    var iVideoRatio = 16 / 9,\n      iH = width / iVideoRatio;\n    $('.full-backgroud-video-content').css({ width: width })\n    $('.window-wrapper').css({\n      width: width,\n      height: Math.min(iH, window.innerHeight)\n    })\n    $('#bgvideo').css({\n      width: width,\n      height: iH\n    });\n  }\n\n</script>\n";
/* harmony default export */ __webpack_exports__["default"] = ({
  html: html,
  css: css,
  script: script
});

/***/ }),

/***/ "./src/template/content/more-icon/index.js":
/*!*************************************************!*\
  !*** ./src/template/content/more-icon/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var html = "\n<section class=\"services section\">\n<div class=\"container\">\n  <div class=\"title-section\">\n    <span>Sevices</span>\n    <h2>Choose our<br />creative services</h2>\n  </div>\n  <div class=\"row first-row\">\n    <div class=\"col-md-4\">\n      <div class=\"entry aos-init aos-animate\" data-aos=\"zoom-in\">\n        <img\n          src=\"https://img.ikstatic.cn/MTYwMDM5ODYwNTAzNiM3NjMjcG5n.png\"\n          class=\"fab fa-wordpress\"\n        />\n        <h5>WordPress</h5>\n        <p>\n          Lorem ipsum dolor sit consectetur adipiscing elit. Ut elit tellus, luctus nec\n          ullamcorper\n        </p>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"entry aos-init aos-animate\" data-aos=\"zoom-in\" data-aos-duration=\"1500\">\n        <img\n          src=\"https://img.ikstatic.cn/MTYwMDM5ODYwNTAzNiM3NjMjcG5n.png\"\n          class=\"fab fa-wordpress\"\n        />\n        <h5>Magento</h5>\n        <p>\n          Lorem ipsum dolor sit consectetur adipiscing elit. Ut elit tellus, luctus nec\n          ullamcorper\n        </p>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"entry aos-init aos-animate\" data-aos=\"zoom-in\" data-aos-duration=\"1500\">\n        <img\n          src=\"https://img.ikstatic.cn/MTYwMDM5ODYwNTAzNiM3NjMjcG5n.png\"\n          class=\"fab fa-wordpress\"\n        />\n        <h5>Drupal</h5>\n        <p>\n          Lorem ipsum dolor sit consectetur adipiscing elit. Ut elit tellus, luctus nec\n          ullamcorper\n        </p>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"entry aos-init aos-animate\" data-aos=\"zoom-in\" data-aos-duration=\"2000\">\n        <img\n          src=\"https://img.ikstatic.cn/MTYwMDM5ODYwNTAzNiM3NjMjcG5n.png\"\n          class=\"fab fa-wordpress\"\n        />\n        <h5>Marketing</h5>\n        <p>\n          Lorem ipsum dolor sit consectetur adipiscing elit. Ut elit tellus, luctus nec\n          ullamcorper\n        </p>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"entry aos-init aos-animate\" data-aos=\"zoom-in\" data-aos-duration=\"2500\">\n        <img\n          src=\"https://img.ikstatic.cn/MTYwMDM5ODYwNTAzNiM3NjMjcG5n.png\"\n          class=\"fab fa-wordpress\"\n        />\n        <h5>Mobile</h5>\n        <p>\n          Lorem ipsum dolor sit consectetur adipiscing elit. Ut elit tellus, luctus nec\n          ullamcorper\n        </p>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"entry aos-init aos-animate\" data-aos=\"zoom-in\" data-aos-duration=\"3000\">\n        <img\n          src=\"https://img.ikstatic.cn/MTYwMDM5ODYwNTAzNiM3NjMjcG5n.png\"\n          class=\"fab fa-wordpress\"\n        />\n        <h5>Graphic</h5>\n        <p>\n          Lorem ipsum dolor sit consectetur adipiscing elit. Ut elit tellus, luctus nec\n          ullamcorper\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n</section>";
var css = "\n<style>\n.services {\n  background-image: url(https://img.ikstatic.cn/MTYwMzYzNjIwNzQ2MCMgODYjcG5n.png);\n  background-position: top left;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.section {\n  padding: 55px 0 75px 0;\n}\n.title-section {\n  text-align: center;\n  padding-bottom: 40px;\n}\n.container {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n[data-aos^='zoom'][data-aos^='zoom'].aos-animate {\n  opacity: 1;\n  transform: translateZ(0) scale(1);\n}\n[data-aos][data-aos][data-aos-duration='1500'],\nbody[data-aos-duration='1500'] [data-aos] {\n  transition-duration: 1.5s;\n}\n[data-aos][data-aos][data-aos-easing='ease'],\nbody[data-aos-easing='ease'] [data-aos] {\n  transition-timing-function: ease;\n}\n.services .entry {\n  margin: 0px 20px 0px 20px;\n  padding: 20px 20px 2px 20px;\n  border-radius: 10px;\n  text-align: center;\n}\n.services .entry:hover {\n  background-color: #ffffff;\n  box-shadow: 0px 1px 45px 0px #dddddd;\n}\n.services .first-row {\n  padding-bottom: 40px;\n}\n</style>\n";
var script = "";
/* harmony default export */ __webpack_exports__["default"] = ({
  html: html,
  css: css,
  script: script
});

/***/ }),

/***/ "./src/template/content/video-card-content/index.js":
/*!**********************************************************!*\
  !*** ./src/template/content/video-card-content/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var html = "\n<section class=\"video-card-content\">\n<div class=\"top\">\n  <img\n    class=\"top-img wow fadeInUp\"\n    data-wow-duration=\"1s\"\n    src=\"https://img.ikstatic.cn/MTU5MDAzOTc4NTM4MCMgMjQjcG5n.png\"\n    alt=\"\"\n    style=\"\n      visibility: visible;\n      animation-duration: 1s;\n      animation-name: fadeInUp;\n    \"\n  />\n</div>\n<div class=\"info\">\n  <div\n    class=\"video-box wow fadeInUp\"\n    data-wow-delay=\"0.5s\"\n    style=\"\n      visibility: visible;\n      animation-delay: 0.5s;\n      animation-name: fadeInUp;\n    \"\n  >\n    <img\n      class=\"video\"\n      src=\"https://img.ikstatic.cn/MTU5MjI4NTc3NDUyOSM5NzcjcG5n.png\"\n      alt=\"\"\n    />\n    <div id=\"videoPlay\" class=\"play\"></div>\n  </div>\n  <div class=\"box\">\n    <div\n      class=\"logo wow fadeInUp\"\n      data-wow-delay=\"0.5s\"\n      style=\"\n        visibility: visible;\n        animation-delay: 0.5s;\n        animation-name: fadeInUp;\n      \"\n    ></div>\n    <div class=\"cen\">\n      <div class=\"text\">\n        <p\n          class=\"paragraph1 wow fadeInUp\"\n          data-wow-delay=\"0.5s\"\n          style=\"\n            visibility: visible;\n            animation-delay: 0.5s;\n            animation-name: fadeInUp;\n          \"\n        >\n          \u8BDE\u751F\u4E8E2015\u5E74\u7684\u6620\u5BA2\uFF0C\u4EE5\u201C\u4F60\u4E11\u4F60\u5148\u7761\u3001\u6211\u7F8E\u6211\u76F4\u64AD\u201D\u4E3ASlogan\u5E26\u52A8\u201C\u5168\u6C11\u76F4\u64AD\u201D\u7684\u98CE\u6F6E\uFF0C\u8BA9\u79FB\u52A8\u76F4\u64AD\u6DF1\u5165\u4EBA\u5FC3\u3002\n        </p>\n        <p\n          class=\"paragraph2 wow fadeInUp\"\n          data-wow-delay=\"0.5s\"\n          style=\"\n            visibility: visible;\n            animation-delay: 0.5s;\n            animation-name: fadeInUp;\n          \"\n        >\n          \u201C\u5343\u64AD\u5927\u6218\u201D\u4E2D\u6620\u5BA2\u7A81\u56F4\u800C\u51FA\uFF0C\u6210\u4E3A\u6CDB\u5A31\u4E50\u76F4\u64AD\u884C\u4E1A\u7684\u4EE3\u8868\uFF0C\u5E76\u4E8E2018\u5E74\u5728\u6E2F\u4EA4\u6240\u6302\u724C\u4E0A\u5E02\u3002\u4F5C\u4E3A\u201C\u76F4\u64AD+\u201D\u7684\u5021\u5BFC\u8005\uFF0C\u6620\u5BA2\u9664\u5728\u79C0\u573A\u3001\u7EFC\u827A\u3001\u7535\u5546\u7B49\u65B9\u5411\u7EB5\u6DF1\u53D1\u5C55\u5916\uFF0C\u5728\u77ED\u89C6\u9891\u3001\u97F3\u9891\u7B49\u9886\u57DF\u4E5F\u62A2\u5148\u5E03\u5C40\uFF0C\u81F4\u529B\u4E8E\u6253\u9020\u97F3\u89C6\u9891\u5A31\u4E50\u793E\u4EA4\u65B0\u751F\u6001\uFF0C\u5F15\u9886\u4E2D\u56FD\u4E92\u52A8\u5A31\u4E50\u4EA7\u4E1A\u7684\u65B0\u53D1\u5C55\u3002\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- \u89C6\u9891\u5F39\u7A97 -->\n<div class=\"map_layer\" id=\"js_may_layer\">\n  <div class=\"map_pannel\">\n    <span class=\"map_close\"></span>\n    <div class=\"map_pannel_content\">\n      <video\n        id=\"videoMain\"\n        controls=\"\"\n        controlslist=\"nodownload\"\n        class=\"video\"\n        src=\"https://m4a.inke.cn/MTU5MjIwNTAxMDQyMiM4MDcjbXA0.mp4\"\n      >\n        \u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301video\u6807\u7B7E\uFF0C\u5EFA\u8BAE\u66F4\u65B0\u6D4F\u89C8\u5668\u7248\u672C\n      </video>\n    </div>\n  </div>\n</div>\n</section>";
var css = "\n<style type=\"text/css\">\n.video-card-content {\n}\n.video-card-content .top {\n  padding: 121px 0 20px;\n}\n\n.video-card-content .top .top-img {\n  display: block;\n  margin: 0 auto;\n  width: 385px;\n  height: 93px;\n}\n\n.video-card-content .info {\n  padding: 72px 0 22px;\n  height: 1012px;\n  background: url(//img.ikstatic.cn/MTU5MjI3NjIwMDY4NiM0NzQjcG5n.png)\n    center no-repeat;\n  background-size: 1333px 1012px;\n}\n\n.video-card-content .info .video-box {\n  width: 937px;\n  height: 527px;\n  margin: 140px auto 0;\n  position: relative;\n}\n\n.video-card-content .info .video-box .video {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n\n.video-card-content .info .video-box .play {\n  background: url(//img.ikstatic.cn/MTU5MjIwNjAzNTAyMyM4NjgjcG5n.png)\n    center no-repeat;\n  background-size: 84px 84px;\n  position: absolute;\n  width: 84px;\n  height: 84px;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  z-index: 1;\n  cursor: pointer;\n  transition: 0.25s;\n}\n\n.video-card-content .info .video-box .play:hover {\n  opacity: 0.8;\n}\n\n.video-card-content .info .box {\n  width: 937px;\n  margin: 55px auto 0;\n  display: flex;\n  display: -webkit-flex;\n  justify-content: space-between;\n  -webkit-justify-content: space-between;\n}\n\n.video-card-content .info .box .logo {\n  width: 144px;\n  height: 144px;\n  background: url(//img.ikstatic.cn/MTU5MjIwNzI4ODY5NyM5MDEjcG5n.png)\n    center no-repeat;\n  background-size: 144px 144px;\n}\n\n.video-card-content .info .box .cen {\n  width: 708px;\n}\n\n.video-card-content .info .box .cen .text {\n  font-size: 16px;\n  color: #333;\n  font-weight: 400;\n  line-height: 32px;\n  text-align: justify;\n  margin-top: -10px;\n}\n\n.video-card-content .info .box .cen .text .paragraph1 {\n  margin: 0;\n  padding-bottom: 10px;\n  text-indent: 2rem;\n}\n\n.video-card-content .info .box .cen .text .paragraph2 {\n  margin: 0;\n  text-indent: 2rem;\n}\n\n.video-card-content .info .box .cen .text .btn {\n  text-decoration: none;\n  display: flex;\n  display: -webkit-flex;\n  justify-content: center;\n  -webkit-justify-content: center;\n  align-items: center;\n  -webkit-align-items: center;\n  align-content: center;\n  -webkit-align-content: center;\n  cursor: pointer;\n  width: 120px;\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  font-size: 12px;\n  font-weight: 400;\n  color: #00d8c9;\n  border: 1px solid #00d8c9;\n  border-radius: 20px;\n  background-size: 6px 10px;\n  margin-top: 48px;\n}\n\n.video-card-content .info .box .cen .text .btn .btn-icon {\n  width: 6px;\n  height: 10px;\n  margin: 1px 0 0 10px;\n}\n\n.video-card-content .info .box .cen .text .btn:hover {\n  color: #fff;\n  background: #00d8c9;\n}\n\n.video-card-content .info .box .cen .text .btn:hover .hove1 {\n  display: none;\n}\n\n.video-card-content .info .box .cen .text .btn:hover .hove2 {\n  display: block;\n}\n\n.map_layer {\n  position: fixed;\n  display: none;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 100;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.map_layer.show {\n  display: block;\n}\n\n.map_layer .map_pannel {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  z-index: 101;\n  height: 527px;\n  width: 937px;\n  font-size: 14px;\n  background-color: #fff;\n  border-radius: 10px;\n  background-clip: padding-box;\n}\n\n.map_layer .map_pannel .map_close {\n  z-index: 999;\n  position: absolute;\n  right: 20px;\n  width: 18px;\n  height: 18px;\n  transition: 0.2s all ease-in-out;\n  background-image: url(https://www.inke.cn/images/sprite_icon.png);\n  background-repeat: no-repeat;\n}\n\n.map_layer .map_pannel .map_close {\n  top: 20px;\n  background-position: -2px -190px;\n  -webkit-transition: 0.2s all ease-in-out;\n  -moz-transition: 0.2s all ease-in-out;\n  -o-transition: 0.2s all ease-in-out;\n  cursor: pointer;\n}\n\n.map_layer .map_pannel .map_close:hover {\n  transform: rotate(180deg);\n}\n\n.map_layer .map_pannel .map_pannel_content {\n  border-radius: 6px;\n  width: 100%;\n  overflow: hidden;\n}\n\n.map_layer .map_pannel .map_pannel_content .video {\n  width: 100%;\n  height: 100%;\n}\n</style>\n";
var script = "\n<script>\nvar $palyBtn = $(\"#videoPlay\");\nvar $jsPlayer = $(\"#js_may_layer\");\nvar $video = document.getElementById(\"videoMain\");\nvar $closeBtn = $jsPlayer.find(\".map_close\");\n\n$palyBtn.on(\"click\", function () {\n  $jsPlayer.addClass(\"show\"),\n    $video.paused ? $video.play() : $video.pause();\n});\n\n$closeBtn.on(\"click\", function (e) {\n  e.stopPropagation();\n  $video.pause();\n  $jsPlayer.removeClass(\"show\");\n});\n</script>\n";
/* harmony default export */ __webpack_exports__["default"] = ({
  html: html,
  css: css,
  script: script
});

/***/ }),

/***/ "./src/template/custome/demo/index.js":
/*!********************************************!*\
  !*** ./src/template/custome/demo/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var template = "\n<section class=\"container\">\n  <h2 class=\"demo-title\">this is a demo, will delete</h2>\n</section>";
/* harmony default export */ __webpack_exports__["default"] = (template);

/***/ }),

/***/ "./src/template/custome/layout/index.js":
/*!**********************************************!*\
  !*** ./src/template/custome/layout/index.js ***!
  \**********************************************/
/*! exports provided: template, css, script */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "template", function() { return template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "script", function() { return script; });
var template = "\n<section class=\"container layout-container\">\n  <h2 class=\"test-title\">test layout 2</h2>\n</section>";
var css = "\n<style>\n  .layout-container {\n    background-color: red;\n  }\n</style>\n";
var script = "\n <script>\n  console.log('layout run');\n </script>\n";


/***/ }),

/***/ "./src/template/footer/icp-footer/index.js":
/*!*************************************************!*\
  !*** ./src/template/footer/icp-footer/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var html = "\n<footer class=\"container icp-footer\" style=\"width: 1445px\">\n  <div class=\"footer_menu\">\n    <span><a target=\"_blank\" href=\"/private.html\">\u9690\u79C1\u653F\u7B56</a>|</span\n    ><span><a target=\"_blank\" href=\"/server.html\">\u670D\u52A1\u6761\u6B3E</a>|</span\n    ><span><a href=\"/hotlive_list.html\">\u70ED\u95E8\u76F4\u64AD</a>|</span\n    ><span><a href=\"/livemanager/index.html#/stream\">\u76F4\u64AD\u52A9\u624B</a></span>\n  </div>\n  <p><a href=\"/\">\u6E56\u5357\u6620\u5BA2\u4E92\u5A31\u7F51\u7EDC\u4FE1\u606F\u6709\u9650\u516C\u53F8</a><span>\u5BA2\u670D\u70ED\u7EBF\uFF1A4008-178-168</span></p>\n  <p>\n    Copyright 2015-2020 inke.cn All rights reserved.\n    <a href=\"http://www.beian.miit.gov.cn \" target=\"_blank\">\u6E58ICP\u590716012585\u53F7-1</a>\n  </p>\n  <p class=\"txt\">\n    \u6E58\u7F51\u6587\uFF082016\uFF092964-057\u53F7\n    <img src=\"https://img.ikstatic.cn/MTU4ODk5MzMwNTIyOSM0NDQjcG5n.png\" class=\"img-bei\" /><a\n      href=\"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=43019002000355\"\n      target=\"_blank\"\n      >\u6E58\u516C\u7F51\u5B89\u5907 43019002000355\u53F7</a\n    >\n    \u589E\u503C\u4E1A\u52A1\u8BB8\u53EF\u8BC1\uFF1A\u6E58B2-20170040\n  </p>\n  <p class=\"txt\"><a href=\"http://www.cyberpolice.cn/wfjb/\" target=\"_blank\">\u516C\u5B89\u90E8\u7F51\u7EDC\u8FDD\u6CD5\u72AF\u7F6A\u4E3E\u62A5\u7F51\u7AD9</a></p>\n  <p class=\"txt\">\n    <a href=\"http://www.shdf.gov.cn/shdf/channels/740.html\" target=\"_blank\">\u4E2D\u56FD\u626B\u9EC4\u6253\u975E\u7F51\u4E3E\u62A5\u5165\u53E3</a>\n  </p>\n  <p class=\"txt\">\u4E3E\u62A5\u70ED\u7EBF\uFF1A0731-81872901 \u4E3E\u62A5\u90AE\u7BB1\uFF1Ajubao@inke.cn</p>\n</footer>\n";
var css = "\n<style type=\"text/css\">\n.icp-footer {\n  background: #fff;\n  padding-bottom: 20px;\n  line-height: 20px;\n  text-align: center;\n}\n\n.icp-footer .footer_menu {\n  padding-top: 30px;\n  padding-bottom: 26px;\n  font-size: 14px;\n  border-top: 1px #e8e8e8 solid;\n}\n\n.icp-footer .footer_menu span a {\n  margin-right: 15px;\n  margin-left: 15px;\n  color: #333;\n  text-decoration: none;\n}\n\n.icp-footer p a:hover,\n.icp-footer .footer_menu span a:hover {\n  color: #00d8c9;\n}\n\n.icp-footer p {\n  margin-top: 0;\n  font-size: 12px;\n  color: #999;\n  margin-bottom: 6px;\n}\n\n.icp-footer p a {\n  color: #999;\n  text-decoration: none;\n}\n\n.icp-footer p span {\n  padding-left: 10px;\n}\n</style>\n";
var script = '';
/* harmony default export */ __webpack_exports__["default"] = ({
  html: html,
  css: css,
  script: script
});

/***/ }),

/***/ "./src/template/footer/lite/index.js":
/*!*******************************************!*\
  !*** ./src/template/footer/lite/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var html = "\n<footer class=\"container lite-footer\">\n  <p class=\"float-right\"><a href=\"#\">Back to top</a></p>\n  <p>&copy; 2019-2020 Inke Desgin, Inc. &middot; <a href=\"#\">Privacy</a> &middot; <a href=\"#\">Terms</a></p>\n</footer>";
var css = "\n<style>\n  .lite-footer {\n  }\n</style>\n";
var script = '';
/* harmony default export */ __webpack_exports__["default"] = ({
  html: html,
  css: css,
  script: script
});

/***/ }),

/***/ "./src/template/footer/with-group-footer/index.js":
/*!********************************************************!*\
  !*** ./src/template/footer/with-group-footer/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var html = "\n<footer class=\"container py-5 with-group-footer\">\n  <div class=\"row\">\n    <div class=\"col-12 col-md\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"d-block mb-2\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"14.31\" y1=\"8\" x2=\"20.05\" y2=\"17.94\"></line><line x1=\"9.69\" y1=\"8\" x2=\"21.17\" y2=\"8\"></line><line x1=\"7.38\" y1=\"12\" x2=\"13.12\" y2=\"2.06\"></line><line x1=\"9.69\" y1=\"16\" x2=\"3.95\" y2=\"6.06\"></line><line x1=\"14.31\" y1=\"16\" x2=\"2.83\" y2=\"16\"></line><line x1=\"16.62\" y1=\"12\" x2=\"10.88\" y2=\"21.94\"></line></svg>\n      <small class=\"d-block mb-3 text-muted\">&copy; 2017-2018</small>\n    </div>\n    <div class=\"col-6 col-md\">\n      <h5>Features</h5>\n      <ul class=\"list-unstyled text-small\">\n        <li><a class=\"text-muted\" href=\"#\">Cool stuff</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Random feature</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Team feature</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Stuff for developers</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Another one</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Last time</a></li>\n      </ul>\n    </div>\n    <div class=\"col-6 col-md\">\n      <h5>Resources</h5>\n      <ul class=\"list-unstyled text-small\">\n        <li><a class=\"text-muted\" href=\"#\">Resource</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Resource name</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Another resource</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Final resource</a></li>\n      </ul>\n    </div>\n    <div class=\"col-6 col-md\">\n      <h5>Resources</h5>\n      <ul class=\"list-unstyled text-small\">\n        <li><a class=\"text-muted\" href=\"#\">Business</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Education</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Government</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Gaming</a></li>\n      </ul>\n    </div>\n    <div class=\"col-6 col-md\">\n      <h5>About</h5>\n      <ul class=\"list-unstyled text-small\">\n        <li><a class=\"text-muted\" href=\"#\">Team</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Locations</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Privacy</a></li>\n        <li><a class=\"text-muted\" href=\"#\">Terms</a></li>\n      </ul>\n    </div>\n  </div>\n</footer>";
var css = "\n<style>\n  .with-group-footer {\n  }\n</style>\n";
var script = '';
/* harmony default export */ __webpack_exports__["default"] = ({
  html: html,
  css: css,
  script: script
});

/***/ }),

/***/ "./src/template/index.js":
/*!*******************************!*\
  !*** ./src/template/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap4_signin_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap4/signin-split */ "./src/template/bootstrap4/signin-split/index.js");
/* harmony import */ var _bootstrap4_slider_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap4/slider-header */ "./src/template/bootstrap4/slider-header/index.js");
/* harmony import */ var _bootstrap4_image_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bootstrap4/image-gallery */ "./src/template/bootstrap4/image-gallery/index.js");
/* harmony import */ var _custome_layout_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custome/layout/index.js */ "./src/template/custome/layout/index.js");
/* harmony import */ var _custome_demo_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custome/demo/index */ "./src/template/custome/demo/index.js");
/* harmony import */ var _navbar_inke_navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/inke-navbar */ "./src/template/navbar/inke-navbar/index.js");
/* harmony import */ var _navbar_navbar_one__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar-one */ "./src/template/navbar/navbar-one/index.js");
/* harmony import */ var _navbar_navbar_two__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar-two */ "./src/template/navbar/navbar-two/index.js");
/* harmony import */ var _navbar_navbar_three__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar-three */ "./src/template/navbar/navbar-three/index.js");
/* harmony import */ var _banner_banner_one__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./banner/banner-one */ "./src/template/banner/banner-one/index.js");
/* harmony import */ var _banner_banner_two__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./banner/banner-two */ "./src/template/banner/banner-two/index.js");
/* harmony import */ var _banner_banner_three__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./banner/banner-three */ "./src/template/banner/banner-three/index.js");
/* harmony import */ var _content_background_videdo_content__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./content/background-videdo-content */ "./src/template/content/background-videdo-content/index.js");
/* harmony import */ var _content_video_card_content__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./content/video-card-content */ "./src/template/content/video-card-content/index.js");
/* harmony import */ var _content_about_us__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./content/about-us */ "./src/template/content/about-us/index.js");
/* harmony import */ var _content_more_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./content/more-icon */ "./src/template/content/more-icon/index.js");
/* harmony import */ var _footer_lite_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./footer/lite/index */ "./src/template/footer/lite/index.js");
/* harmony import */ var _footer_with_group_footer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./footer/with-group-footer */ "./src/template/footer/with-group-footer/index.js");
/* harmony import */ var _footer_icp_footer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./footer/icp-footer */ "./src/template/footer/icp-footer/index.js");
// bootstrap4代码片段


 // 自定义代码片段


 // Navbar模版




 // banner模版



 // Content




 // Footer




var TEST_IMAGE = "https://img.ikstatic.cn/MTYwMjgxMzEyMzMwOSMzMTUjcG5n.png";
var templateConfig = {
  bootstrap4: {
    groupName: "Bootstrap 4代码片段",
    // 是否不显示
    hide: true,
    list: [{
      key: "bootstrap4/signin-split",
      name: "登录模板",
      dragHtml: '<img src="' + Vvveb.baseUrl + 'icons/product.png">',
      image: "https://startbootstrap.com/assets/img/screenshots/snippets/sign-in-split.jpg",
      html: _bootstrap4_signin_split__WEBPACK_IMPORTED_MODULE_0__["default"]
    }, {
      key: "bootstrap4/slider-header",
      name: "轮播图模板",
      dragHtml: '<img src="' + Vvveb.baseUrl + 'icons/product.png">',
      image: "https://startbootstrap.com/assets/img/screenshots/snippets/full-slider.jpg",
      html: _bootstrap4_slider_header__WEBPACK_IMPORTED_MODULE_1__["default"]
    }, {
      key: "bootstrap4/image-gallery",
      name: "图库模板",
      image: "https://startbootstrap.com/assets/img/screenshots/snippets/thumbnail-gallery.jpg",
      dragHtml: '<img src="' + Vvveb.baseUrl + 'icons/product.png">',
      html: _bootstrap4_image_gallery__WEBPACK_IMPORTED_MODULE_2__["default"]
    }]
  },
  custome: {
    groupName: "自定义代码片段",
    // 是否不显示
    hide: true,
    list: [{
      // 是否不显示
      // hide: true,
      key: "custome/layout",
      name: "layout容器",
      dragHtml: "<img src=\"".concat(TEST_IMAGE, "\">"),
      image: TEST_IMAGE,
      html: _custome_layout_index_js__WEBPACK_IMPORTED_MODULE_3__["template"],
      css: _custome_layout_index_js__WEBPACK_IMPORTED_MODULE_3__["css"],
      script: _custome_layout_index_js__WEBPACK_IMPORTED_MODULE_3__["script"]
    }, {
      key: "custome/demo",
      name: "demo 片段",
      dragHtml: "<img src=\"".concat(TEST_IMAGE, "\">"),
      image: TEST_IMAGE,
      html: _custome_demo_index__WEBPACK_IMPORTED_MODULE_4__["default"]
    }]
  },
  navbar: {
    groupName: "Navbar模板",
    list: [{
      key: "navbar/inke-navbar",
      name: "映客官网Navbar",
      dragHtml: '<img src="https://img.ikstatic.cn/MTYwMzQxOTU5MjM2NSM1ODQjcG5n.png">',
      image: '//img.ikstatic.cn/MTYwMzQxOTU5MjM2NSM1ODQjcG5n.png',
      html: _navbar_inke_navbar__WEBPACK_IMPORTED_MODULE_5__["default"].html,
      css: _navbar_inke_navbar__WEBPACK_IMPORTED_MODULE_5__["default"].css,
      script: _navbar_inke_navbar__WEBPACK_IMPORTED_MODULE_5__["default"].script
    }, {
      key: "navbar/navbar-one",
      name: "Navbar模板一",
      dragHtml: '<img src="https://img.ikstatic.cn/MTYwMzM1MzI2MjM4NyMyODkjanBn.jpg">',
      image: '//img.ikstatic.cn/MTYwMzM1MzI2MjM4NyMyODkjanBn.jpg',
      html: _navbar_navbar_one__WEBPACK_IMPORTED_MODULE_6__["default"].html,
      css: _navbar_navbar_one__WEBPACK_IMPORTED_MODULE_6__["default"].css,
      script: _navbar_navbar_one__WEBPACK_IMPORTED_MODULE_6__["default"].script
    }, {
      key: "navbar/navbar-two",
      name: "Navbar模板二",
      dragHtml: '<img src="https://img.ikstatic.cn/MTYwMzM1ODc3MjYxMyM1MjUjanBn.jpg">',
      image: '//img.ikstatic.cn/MTYwMzM1ODc3MjYxMyM1MjUjanBn.jpg',
      html: _navbar_navbar_two__WEBPACK_IMPORTED_MODULE_7__["default"].html,
      css: _navbar_navbar_two__WEBPACK_IMPORTED_MODULE_7__["default"].css,
      script: _navbar_navbar_two__WEBPACK_IMPORTED_MODULE_7__["default"].script
    }, {
      key: "navbar/navbar-three",
      name: "Navbar模板三",
      dragHtml: '<img src="https://img.ikstatic.cn/MTYwMzM2MDAwNTQ4OSM2NzcjanBn.jpg">',
      image: '//img.ikstatic.cn/MTYwMzM2MDAwNTQ4OSM2NzcjanBn.jpg',
      html: _navbar_navbar_three__WEBPACK_IMPORTED_MODULE_8__["default"].html,
      css: _navbar_navbar_three__WEBPACK_IMPORTED_MODULE_8__["default"].css,
      script: _navbar_navbar_three__WEBPACK_IMPORTED_MODULE_8__["default"].script
    }]
  },
  banner: {
    groupName: "Banner模板",
    list: [{
      key: "banner/banner-one",
      name: "Banner模板一",
      dragHtml: '<img src="https://img.ikstatic.cn/MTYwMzQyNDY3MTMxMSMxODgjanBn.jpg">',
      image: '//img.ikstatic.cn/MTYwMzQyNDY3MTMxMSMxODgjanBn.jpg',
      html: _banner_banner_one__WEBPACK_IMPORTED_MODULE_9__["default"].html,
      css: _banner_banner_one__WEBPACK_IMPORTED_MODULE_9__["default"].css,
      script: _banner_banner_one__WEBPACK_IMPORTED_MODULE_9__["default"].script,
      exportModule: _banner_banner_one__WEBPACK_IMPORTED_MODULE_9__["default"].exportModule
    }, {
      key: "banner/banner-two",
      name: "Banner模板二",
      dragHtml: '<img src="https://img.ikstatic.cn/MTYwMzQ0Mjc1NDA5NSM1ODkjanBn.jpg">',
      image: '//img.ikstatic.cn/MTYwMzQ0Mjc1NDA5NSM1ODkjanBn.jpg',
      html: _banner_banner_two__WEBPACK_IMPORTED_MODULE_10__["default"].html,
      css: _banner_banner_two__WEBPACK_IMPORTED_MODULE_10__["default"].css,
      script: _banner_banner_two__WEBPACK_IMPORTED_MODULE_10__["default"].script,
      exportModule: _banner_banner_one__WEBPACK_IMPORTED_MODULE_9__["default"].exportModule
    }, {
      key: "banner/banner-three",
      name: "Banner模板三",
      dragHtml: '<img src="https://img.ikstatic.cn/MTYwMzQ0Mjc2NDI5OSM1NTIjanBn.jpg">',
      image: '//img.ikstatic.cn/MTYwMzQ0Mjc2NDI5OSM1NTIjanBn.jpg',
      html: _banner_banner_three__WEBPACK_IMPORTED_MODULE_11__["default"].html,
      css: _banner_banner_three__WEBPACK_IMPORTED_MODULE_11__["default"].css,
      script: _banner_banner_three__WEBPACK_IMPORTED_MODULE_11__["default"].script,
      exportModule: _banner_banner_one__WEBPACK_IMPORTED_MODULE_9__["default"].exportModule
    }]
  },
  content: {
    groupName: "Content模板",
    list: [{
      key: "content/back-video-content",
      name: "全屏背景视频内容模板",
      dragHtml: '<img src="https://img.ikstatic.cn/MTYwMzQyMjIwNjY0NCM1NTYjcG5n.png">',
      image: '//img.ikstatic.cn/MTYwMzQyMjIwNjY0NCM1NTYjcG5n.png',
      html: _content_background_videdo_content__WEBPACK_IMPORTED_MODULE_12__["default"].html,
      css: _content_background_videdo_content__WEBPACK_IMPORTED_MODULE_12__["default"].css,
      script: _content_background_videdo_content__WEBPACK_IMPORTED_MODULE_12__["default"].script
    }, {
      key: "content/video-card",
      name: "带视频播放内容模板",
      dragHtml: '<img src="https://img.ikstatic.cn/MTYwMzMzNzUzMzI4NCM3NTAjcG5n.png">',
      image: '//img.ikstatic.cn/MTYwMzMzNzUzMzI4NCM3NTAjcG5n.png',
      html: _content_video_card_content__WEBPACK_IMPORTED_MODULE_13__["default"].html,
      css: _content_video_card_content__WEBPACK_IMPORTED_MODULE_13__["default"].css,
      script: _content_video_card_content__WEBPACK_IMPORTED_MODULE_13__["default"].script
    }, {
      key: "content/about-us",
      name: "关于我们模版",
      dragHtml: '<img src="https://img.ikstatic.cn/MTYwMzYzODMzNDQ1MiM4MjgjanBn.jpg">',
      image: '//img.ikstatic.cn/MTYwMzYzODMzNDQ1MiM4MjgjanBn.jpg',
      html: _content_about_us__WEBPACK_IMPORTED_MODULE_14__["default"].html,
      css: _content_about_us__WEBPACK_IMPORTED_MODULE_14__["default"].css,
      script: _content_about_us__WEBPACK_IMPORTED_MODULE_14__["default"].script
    }, {
      key: "content/more-icon",
      name: "多图标描述",
      dragHtml: '<img src="https://img.ikstatic.cn/MTYwMzYzODE1NTM2NSMzOTgjanBn.jpg">',
      image: '//img.ikstatic.cn/MTYwMzYzODE1NTM2NSMzOTgjanBn.jpg',
      html: _content_more_icon__WEBPACK_IMPORTED_MODULE_15__["default"].html,
      css: _content_more_icon__WEBPACK_IMPORTED_MODULE_15__["default"].css,
      script: _content_more_icon__WEBPACK_IMPORTED_MODULE_15__["default"].script
    }]
  },
  footer: {
    groupName: "Footer模板",
    list: [{
      key: "footer/lite",
      name: "简洁Footer",
      dragHtml: '<img src="https://img.ikstatic.cn/MTYwMzMzNDE4OTg1NyMyNDgjcG5n.png">',
      image: '//img.ikstatic.cn/MTYwMzMzNDE4OTg1NyMyNDgjcG5n.png',
      html: _footer_lite_index__WEBPACK_IMPORTED_MODULE_16__["default"].html,
      css: _footer_lite_index__WEBPACK_IMPORTED_MODULE_16__["default"].css,
      script: _footer_lite_index__WEBPACK_IMPORTED_MODULE_16__["default"].script
    }, {
      key: "footer/with-group-footer",
      name: "带分组Footer",
      dragHtml: "<img src=\"https://img.ikstatic.cn/MTYwMzMzNDEyMDA2MiM0NTMjcG5n.png\">",
      image: '//img.ikstatic.cn/MTYwMzMzNDEyMDA2MiM0NTMjcG5n.png',
      html: _footer_with_group_footer__WEBPACK_IMPORTED_MODULE_17__["default"].html,
      css: _footer_with_group_footer__WEBPACK_IMPORTED_MODULE_17__["default"].css,
      script: _footer_with_group_footer__WEBPACK_IMPORTED_MODULE_17__["default"].script
    }, {
      key: "footer/icp-footer",
      name: "带备案信息Footer",
      dragHtml: "<img src=\"https://img.ikstatic.cn/MTYwMzMzMzYyNzY2MiM3MDIjcG5n.png\">",
      image: '//img.ikstatic.cn/MTYwMzMzMzYyNzY2MiM3MDIjcG5n.png',
      html: _footer_icp_footer__WEBPACK_IMPORTED_MODULE_18__["default"].html,
      css: _footer_icp_footer__WEBPACK_IMPORTED_MODULE_18__["default"].css,
      script: _footer_icp_footer__WEBPACK_IMPORTED_MODULE_18__["default"].script
    }]
  }
};
/* harmony default export */ __webpack_exports__["default"] = (templateConfig);

/***/ }),

/***/ "./src/template/navbar/inke-navbar/index.js":
/*!**************************************************!*\
  !*** ./src/template/navbar/inke-navbar/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var html = "\n<section class=\"inke-navbar-1\">\n<div class=\"header_wrapper\" style=\"width: 1300px\">\n  <img id=\"inke-logo\" class=\"logo\" src=\"https://img.ikstatic.cn/MTU5MDExOTQzNDY0OCMgODcjcG5n.png\" />\n  <ul class=\"nav\">\n    <li><a href=\"/\">\u9996\u9875</a></li>\n    <li class=\"nav-li\">\n      <a href=\"./news/index.html\">\u516C\u53F8\u65B0\u95FB</a>\n      <div class=\"nav-li-children\">\n        <a href=\"/news/index.html#home/1000\">\u96C6\u56E2\u8981\u95FB</a>\n        <a href=\"/news/index.html#home/1001\">\u4E1A\u52A1\u524D\u6CBF</a>\n        <a href=\"/news/index.html#home/1002\">\u5E02\u573A\u52A8\u6001</a>\n        <a href=\"/news/index.html#home/1003\">\u6B63\u80FD\u91CF\u884C\u52A8</a>\n      </div>\n    </li>\n    <li class=\"nav-li\">\n      <a href=\"./products/index.html\">\u4EA7\u54C1\u5C55\u793A</a>\n      <div class=\"nav-li-children\">\n        <a href=\"./products/index.html#inke\" id=\"inke-app-nav\">\u6620\u5BA2APP</a>\n        <a href=\"./live-show.html\" id=\"show-game\" style=\"display: none\">\u6F14\u51FA\u5267</a>\n        <a href=\"./products/index.html#gmu\" class=\"other-app-nav\">\u79EF\u76EEAPP</a>\n        <a href=\"./products/index.html#duiyuan\" class=\"other-app-nav\">\u5BF9\u7F18APP</a>\n      </div>\n    </li>\n    <li class=\"nav-li\">\n      <a href=\"./social-duty/index.html\">\u793E\u4F1A\u8D23\u4EFB</a>\n      <div class=\"nav-li-children\">\n        <a href=\"./social-duty/index.html#penergy\">\u5C0F\u6620\u6B63\u80FD\u91CF</a>\n        <a href=\"./social-duty/index.html#welfare\">\u5C0F\u6620\u516C\u76CA</a>\n        <a href=\"./social-duty/index.html#dang\">\u515A\u56E2\u5DE5\u4F5C</a>\n      </div>\n    </li>\n    <li class=\"_plug\">\n      <a href=\"./investor_relations.html\">\u6295\u8D44\u8005\u5173\u7CFB</a>\n    </li>\n    <li class=\"_plug none\" id=\"live-settlement\" style=\"display: list-item\">\n      <a href=\"./live_organization.html\">\u76F4\u64AD\u673A\u6784\u5165\u9A7B</a>\n    </li>\n    <li class=\"nav-li none\" id=\"settlement\">\n      <a href=\"javascript:void(0)\">\u5165\u9A7B</a>\n      <div class=\"nav-li-children\">\n        <a href=\"./live_organization.html\">\u76F4\u64AD\u673A\u6784\u5165\u9A7B</a>\n        <a href=\"./live_sign.html\">\u4E3B\u64AD\u7B7E\u7EA6</a>\n      </div>\n    </li>\n    <li><a href=\"https://pay.busi.inke.cn/\">\u8D26\u6237\u5145\u503C</a></li>\n    <li>\n      <a href=\"./contact.html\">\u8054\u7CFB\u6211\u4EEC</a>\n      <div class=\"nav-li-children\">\n        <a href=\"https://app.mokahr.com/apply/inke/26115\">\u6620\u5BA2\u62DB\u8058</a>\n      </div>\n    </li>\n  </ul>\n</div>\n</section>\n";
var css = "\n<style type=\"text/css\">\n.inke-navbar-1 {\n  height: 90px;\n  z-index: 999;\n  font-family: PingFangSC-Medium, PingFang SC;\n  font-weight: 500\n}\n\n.inke-navbar-1 .header_wrapper {\n  box-sizing: border-box;\n  padding: 0 88px;\n  margin: 0 auto;\n  font-size: 14px;\n  color: #333;\n  display: flex;\n  display: -webkit-flex;\n  justify-content: space-between;\n  -webkit-justify-content: space-between;\n  align-content: center;\n  align-items: center;\n  -webkit-align-content: center;\n  -webkit-align-items: center;\n  background: rgba(255, 255, 255, 0)\n}\n\n.inke-navbar-1 .header_wrapper .logo {\n  height: 36px\n}\n\n.inke-navbar-1 .header_wrapper_hover {\n  background: #fff\n}\n\n.inke-navbar-1 .header_wrapper_hover .nav li>a {\n  color: #333 !important\n}\n\n.inke-navbar-1 .header_wrapper_hover .header_rg .login {\n  color: #00d8c9;\n  border: 1px solid #00d8c9\n}\n\n.inke-navbar-1 .header_wrapper .inke_logo {\n  margin-top: 26px\n}\n\n.inke-navbar-1 .header_wrapper .inke_logo img {\n  display: block;\n  width: 156px;\n  margin-right: 20px\n}\n\n.inke-navbar-1 .header_wrapper .nav {\n  list-style: none;\n  padding: 0;\n  margin: 0\n}\n\n.inke-navbar-1 .header_wrapper .nav li {\n  float: left;\n  position: relative;\n  height: 90px;\n  line-height: 90px;\n  transition: 1s\n}\n\n.inke-navbar-1 .header_wrapper .nav li:hover .nav-li-children {\n  transform: scaleY(1);\n  display: flex\n}\n\n.inke-navbar-1 .header_wrapper .nav li .nav-li-children {\n  flex-direction: column;\n  position: absolute;\n  top: 80px;\n  left: -2px;\n  display: flex;\n  width: 144px;\n  transition-duration: .5s;\n  transform: scaleY(0);\n  transform-origin: 0 0;\n  background: #fff;\n  padding: 12px 0;\n  border-radius: 8px;\n  box-shadow: 0 0 5px 1px rgba(0, 0, 0, .1);\n  z-index: 999;\n}\n\n.inke-navbar-1 .header_wrapper .nav li .nav-li-children a {\n  text-decoration: none;\n  color: #333;\n  width: 100%;\n  height: 48px;\n  font-size: 14px;\n  line-height: 48px;\n  padding: 0;\n  border: none;\n  text-indent: 24px;\n  margin: 0\n}\n\n.inke-navbar-1 .header_wrapper .nav li .nav-li-children a:hover {\n  background: #effbfb\n}\n\n.inke-navbar-1 .header_wrapper .nav li .second>a {\n  height: 14px;\n  line-height: 14px;\n  padding: 15px 0;\n  display: block;\n  text-align: center;\n  color: #666;\n  font-weight: 400;\n  text-decoration: none\n}\n\n.inke-navbar-1 .header_wrapper .nav li .second>a:first-child {\n  padding: 30px 0 15px\n}\n\n.header_wrapper .nav li .second>a:hover {\n  color: #333\n}\n\n.inke-navbar-1 .header_wrapper .nav li:hover .second {\n  visibility: visible\n}\n\n.inke-navbar-1 .header_wrapper .nav li>a {\n  margin-left: 18px;\n  margin-right: 18px;\n  /* color: #fff; */\n  color: #333;\n  text-decoration: none;\n  padding: 10px 1px;\n  font-size: 14px;\n  border-bottom: 2px solid transparent\n}\n\n.inke-navbar-1 .header_wrapper .nav li>a:hover {\n  border-color: #00d8c9\n}\n\n.inke-navbar-1 .header_wrapper .nav li .icon-top-right {\n  position: absolute;\n  top: 24px;\n  right: 2px\n}\n\n.inke-navbar-1 .header_wrapper .header_rg {\n  display: none;\n  height: 90px\n}\n\n.inke-navbar-1 .header_wrapper .header_rg div {\n  margin: 30px 0 0;\n  cursor: pointer;\n  display: inline-block;\n  text-align: center;\n  width: 78px;\n  height: 32px;\n  line-height: 32px;\n  color: #fff;\n  border-radius: 18px;\n  border: 1px solid #fff\n}\n\n.inke-navbar-1 .header_wrapper .header_rg .regist {\n  background: #00d8c9;\n  color: #fff;\n  border: 1px solid #00d8c9\n}\n\n.inke-navbar-1 .header_wrapper .header_rg .regist:hover {\n  background: #00e2d2;\n  border: 1px solid #00e2d2\n}\n\n.inke-navbar-1 .header_wrapper .header_rg .login:hover {\n  background: #00e2d2;\n  color: #fff\n}\n\n.inke-navbar-1 .header_wrapper .header_rg div:hover {\n  background: #00d8c9;\n  color: #fff;\n  border: 1px solid #00d8c9\n}\n\n.inke-navbar-1 .header_wrapper .header_rg span {\n  cursor: pointer\n}\n\n.inke-navbar-1 .header_wrapper .header_rg .login {\n  margin-right: 16px\n}\n\n@media screen and (max-width: 1260px) {\n  .header_wrapper {\n    width: 1260px\n  }\n}\n\n</style>\n";
var script = '';
/* harmony default export */ __webpack_exports__["default"] = ({
  html: html,
  css: css,
  script: script
});

/***/ }),

/***/ "./src/template/navbar/navbar-one/index.js":
/*!*************************************************!*\
  !*** ./src/template/navbar/navbar-one/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var html = "\n<section class=\"navbar-one\">\n<div class=\"navbar-one-web-icon\">\n  <img src=\"https://img.ikstatic.cn/MTQ5NjczMjc0MTUxOCM0NTgjanBn.jpg\" alt=\"\" />\n</div>\n<div id=\"navbar-one-navigation-box\" class=\"navbar-one-navigation-box\">\n  <div class=\"navbar-one-navigation-item\"><a href=\"\">\u65B0\u95FB\u8D44\u8BAF</a></div>\n  <div class=\"navbar-one-navigation-item\"><a href=\"\">\u516C\u53F8\u7B80\u4ECB</a></div>\n  <div class=\"navbar-one-navigation-item\"><a href=\"\">\u5BA2\u6237\u6848\u4F8B</a></div>\n  <div class=\"navbar-one-navigation-item\"><a href=\"\">\u670D\u52A1\u9879\u76EE</a></div>\n  <div class=\"navbar-one-navigation-item active\"><a href=\"\">\u9996\u9875</a></div>\n</div>\n</section>";
var css = "\n<style>\n      .navbar-one {\n        min-height: 30px;\n        margin: 0 auto 0px auto;\n        position: relative;\n        max-width: 1200px;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n      }\n      .navbar-one-navigation-box {\n        display: flex;\n        flex-direction: row-reverse;\n        align-items: center;\n      }\n      .navbar-one-navigation-item {\n        min-width: 100px;\n        line-height: 50px;\n        text-align: center;\n        font-size: 16px;\n        cursor: pointer;\n      }\n      .navbar-one-navigation-item:hover {\n        background: rgb(0, 204, 152);\n      }\n      .navbar-one-navigation-item:hover a {\n        color: rgba(255, 255, 255, 1);\n      }\n      .navbar-one-navigation-item a {\n        color: #000;\n      }\n      .navbar-one-navigation-item.active {\n        background: rgb(0, 204, 152);\n      }\n      .navbar-one-navigation-item.active a {\n        color: rgba(255, 255, 255, 1);\n      }\n    </style>\n";
var script = "\n<script>\n  $('#navbar-one-navigation-box').on('click', 'div', function () {\n    $(this).addClass('active').siblings().removeClass('active')\n  })\n</script>";
/* harmony default export */ __webpack_exports__["default"] = ({
  html: html,
  css: css,
  script: script
});

/***/ }),

/***/ "./src/template/navbar/navbar-three/index.js":
/*!***************************************************!*\
  !*** ./src/template/navbar/navbar-three/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var html = "\n<section class=\"navbar-three\">\n<div class=\"navbar-three-header\">\n  <div class=\"navbar-three-header-left\">\n    <img src=\"https://img.ikstatic.cn/MTQ5NjczMjc0MTUxOCM0NTgjanBn.jpg\" alt=\"\">\n  </div>\n  <div class=\"navbar-three-header-right\">\n    \n    <div class=\"navbar-three-header-right-text\">\n      <div>\u670D\u52A1\u70ED\u7EBF</div>\n      <div class=\"navbar-three-header-right-tel\">010-XXXXXXXX</div>\n    </div>\n    <img class=\"navbar-three-header-right-img\" src=\"http://image.fast.126net.cn/group2/M00/01/27/wKgBTFtqxn-AbDpbAAAON5qx5DM297.png\" alt=\"\">\n  </div>\n</div>\n<div class=\"navbar-three-navigation-box\">\n  <div id=\"navbar-three-navigation-box-content\" class=\"navbar-three-navigation-box-content\">\n    <div class=\"navbar-three-navigation-item active\"><a href=\"\">\u9996\u9875</a></div>\n    <div class=\"navbar-three-navigation-item\"><a href=\"\">\u670D\u52A1\u9879\u76EE</a></div>\n    <div class=\"navbar-three-navigation-item\"><a href=\"\">\u65B0\u95FB\u8D44\u8BAF</a></div>\n    <div class=\"navbar-three-navigation-item\"><a href=\"\">\u516C\u53F8\u7B80\u4ECB</a></div>\n    <div class=\"navbar-three-navigation-item\"><a href=\"\">\u5BA2\u6237\u6848\u4F8B</a></div>\n  </div>\n</div>\n</section>";
var css = "\n<style>\n.navbar-three-header {\n  min-height: 30px;\n  margin: 0 auto;\n  position: relative;\n  max-width: 1200px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 16px;\n}\n.navbar-three-header-left,\n.navbar-three-header-right {\n  display: flex;\n  align-items: center;\n}\n.navbar-three-header-right-text {\n  color: rgb(222, 44, 46);\n  font-size: 22px;\n}\n.navbar-three-header-right-img {\n  width: 50px;\n  height: 50px;\n}\n.navbar-three-header-right-tel {\n  color: #999;\n  font-size: 16px;\n}\n.navbar-three-navigation-box-content {\n  margin: 0 auto;\n  max-width: 1200px;\n  display: flex;\n  align-items: center;\n}\n.navbar-three-navigation-item {\n  width: 150px;\n  text-align: center;\n  height: 50px;\n  line-height: 50px;\n  cursor: pointer;\n  background: #bbb;\n  border-radius: 5px;\n}\n.navbar-three-navigation-item:not(:first-child) {\n  margin-left: 10px;\n}\n.navbar-three-navigation-item:hover {\n  background-color: rgb(222, 44, 46);\n}\n.navbar-three-navigation-item.active {\n  background-color: rgb(222, 44, 46);\n}\n.navbar-three-navigation-item a {\n  color: #FFF;\n}\n</style>\n";
var script = "\n<script>\n      $('#navbar-three-navigation-box-content').on('click', 'div.navbar-three-navigation-item', function () {\n        $(this).addClass('active').siblings().removeClass('active')\n      })\n    </script>";
/* harmony default export */ __webpack_exports__["default"] = ({
  html: html,
  css: css,
  script: script
});

/***/ }),

/***/ "./src/template/navbar/navbar-two/index.js":
/*!*************************************************!*\
  !*** ./src/template/navbar/navbar-two/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var html = "\n<section class=\"navbar-two\">\n<div class=\"navbar-two-header\">\n  <div class=\"navbar-two-header-left\">\n    <img src=\"https://img.ikstatic.cn/MTQ5NjczMjc0MTUxOCM0NTgjanBn.jpg\" alt=\"\">\n    <div class=\"navbar-two-header-left-line\"></div>\n    <div class=\"navbar-two-header-left-text\">\n      <div>\u770B\u76F4\u64AD \u73A9\u76F4\u64AD</div>\n      <div>\u5C3D\u5728\u6620\u5BA2APP</div>\n    </div>\n  </div>\n  <div class=\"navbar-two-header-right\">\n    <img class=\"navbar-two-header-right-img\" src=\"http://image.fast.126net.cn/group1/M00/04/74/wKgADFvRLUGAauTaAAAY3sKHqx4496.png\" alt=\"\">\n    <div class=\"navbar-two-header-right-text\">\n      <div>\u5168\u56FD\u7EDF\u4E00\u70ED\u7EBF</div>\n      <div class=\"navbar-two-header-right-tel\">010-XXXXXXXX</div>\n    </div>\n  </div>\n</div>\n<div class=\"navbar-two-navigation-box\">\n  <div id=\"navbar-two-navigation-box-content\" class=\"navbar-two-navigation-box-content\">\n    <div class=\"navbar-two-navigation-item active\"><a href=\"\">\u9996\u9875</a></div>\n    <div class=\"navbar-two-navigation-item\"><a href=\"\">\u670D\u52A1\u9879\u76EE</a></div>\n    <div class=\"navbar-two-navigation-item\"><a href=\"\">\u65B0\u95FB\u8D44\u8BAF</a></div>\n    <div class=\"navbar-two-navigation-item\"><a href=\"\">\u516C\u53F8\u7B80\u4ECB</a></div>\n    <div class=\"navbar-two-navigation-item\"><a href=\"\">\u5BA2\u6237\u6848\u4F8B</a></div>\n  </div>\n</div>\n</section>";
var css = "\n<style>\n.navbar-two-header {\n  min-height: 30px;\n  margin: 0 auto;\n  position: relative;\n  max-width: 1200px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 16px;\n}\n.navbar-two-header-left,\n.navbar-two-header-right {\n  display: flex;\n  align-items: center;\n}\n.navbar-two-header-left-line {\n  width: 1px;\n  height: 50px;\n  background-color: #999;\n  margin: 0 30px;\n}\n.navbar-two-header-right-text,\n.navbar-two-header-left-text {\n  color: #999;\n  font-size: 13px;\n}\n.navbar-two-header-right-img {\n  width: 50px;\n  height: 50px;\n}\n.navbar-two-header-right-tel {\n  color: rgb(0, 204, 152);\n  font-size: 16px;\n}\n.navbar-two-navigation-box {\n  background-color: rgb(0, 204, 152);\n}\n.navbar-two-navigation-box-content {\n  margin: 0 auto;\n  max-width: 1200px;\n  display: flex;\n  align-items: center;\n}\n.navbar-two-navigation-item {\n  width: 150px;\n  text-align: center;\n  height: 50px;\n  line-height: 50px;\n  cursor: pointer;\n}\n.navbar-two-navigation-item:hover {\n  background-color: rgba(255,255,255,.3);\n}\n.navbar-two-navigation-item.active {\n  background-color: rgba(255,255,255,.3);\n}\n.navbar-two-navigation-item a {\n  color: #FFF;\n}\n</style>\n";
var script = "\n<script>\n  $('#navbar-two-navigation-box-content').on('click', 'div', function () {\n    $(this).addClass('active').siblings().removeClass('active')\n  })\n</script>";
/* harmony default export */ __webpack_exports__["default"] = ({
  html: html,
  css: css,
  script: script
});

/***/ })

/******/ });