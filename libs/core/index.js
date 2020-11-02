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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/libs/core/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/libs/core/actions/index.js":
/*!****************************************!*\
  !*** ./src/libs/core/actions/index.js ***!
  \****************************************/
/*! exports provided: ACTION_TYPES, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_TYPES", function() { return ACTION_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/libs/core/utils/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var ACTION_TYPES = {
  // 添加节点
  ADD: "ADD",
  // 移除节点
  REMOVE: "REMOVE",
  // 往上移动节点
  MOVE_UP: "MOVE_UP",
  // 往下移动节点
  MOVE_DOWN: "MOVE_DOWN",
  // 拷贝节点
  CLONE: "CLONE",
  // 修改节点
  EDIT: "EDIT"
};
var actions = [{
  type: ACTION_TYPES.ADD,
  reducer: function reducer(state, action) {
    state.nodes.push(action.payload);
    return state;
  }
}, {
  type: ACTION_TYPES.EDIT,
  reducer: function reducer(state, action) {
    var uuid = action.uuid;

    var _ArrayUtils$findIndex = _utils__WEBPACK_IMPORTED_MODULE_0__["ArrayUtils"].findIndex(state.nodes, {
      uuid: uuid
    }),
        _ArrayUtils$findIndex2 = _slicedToArray(_ArrayUtils$findIndex, 2),
        idx = _ArrayUtils$findIndex2[0],
        node = _ArrayUtils$findIndex2[1];

    if (idx === -1) {
      console.warn("未找到节点");
      return state;
    }

    var newNode = _objectSpread(_objectSpread({}, node), action.node);

    state.nodes[idx] = newNode;
    return state;
  }
}, {
  type: ACTION_TYPES.CLONE,
  reducer: function reducer(state, action) {
    return state;
  }
}, {
  type: ACTION_TYPES.REMOVE,
  reducer: function reducer(state, action) {
    var newNodes = state.nodes.filter(function (v) {
      return v.uuid !== action.uuid;
    });
    state.nodes = newNodes;
    return state;
  }
}, {
  type: ACTION_TYPES.MOVE_UP,
  reducer: function reducer(state, action) {
    var uuid = action.uuid;

    var _ArrayUtils$findIndex3 = _utils__WEBPACK_IMPORTED_MODULE_0__["ArrayUtils"].findIndex(state.nodes, {
      uuid: uuid
    }),
        _ArrayUtils$findIndex4 = _slicedToArray(_ArrayUtils$findIndex3, 2),
        idx = _ArrayUtils$findIndex4[0],
        node = _ArrayUtils$findIndex4[1];

    if (idx === -1) {
      console.warn("未找到节点");
      return state;
    }

    if (idx === 0) {
      console.warn("节点已在最上面了");
      return state;
    }

    var newNodes = _utils__WEBPACK_IMPORTED_MODULE_0__["ArrayUtils"].swap(state.nodes, idx, idx - 1);
    state.nodes = newNodes;
    return state;
  }
}, {
  type: ACTION_TYPES.MOVE_DOWN,
  reducer: function reducer(state, action) {
    var uuid = action.uuid;

    var _ArrayUtils$findIndex5 = _utils__WEBPACK_IMPORTED_MODULE_0__["ArrayUtils"].findIndex(state.nodes, {
      uuid: uuid
    }),
        _ArrayUtils$findIndex6 = _slicedToArray(_ArrayUtils$findIndex5, 2),
        idx = _ArrayUtils$findIndex6[0],
        node = _ArrayUtils$findIndex6[1];

    if (idx === -1) {
      console.warn("未找到节点");
      return state;
    }

    if (idx === state.nodes.length - 1) {
      console.warn("节点已在最下面了");
      return state;
    }

    var newNodes = _utils__WEBPACK_IMPORTED_MODULE_0__["ArrayUtils"].swap(state.nodes, idx, idx + 1);
    state.nodes = newNodes;
    return state;
  }
}];

/***/ }),

/***/ "./src/libs/core/fastDom/index.js":
/*!****************************************!*\
  !*** ./src/libs/core/fastDom/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/libs/core/utils/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function FastDom() {
  this.vnodes = []; // 暴露给公共使用的模块

  this.exportModule = {
    /**
     * 公共脚本库。内置了jQuery
     *
     * script[key] 脚本库名称，唯一值
     * script[key][vaue].url script src
     * script[key][vaue].atr script 属性
     *
     */
    script: {
      jQuery: {
        url: "//static.inke.cn/web/common/jquery/jquery-1.9.1.min.js",
        attrs: {}
      }
    },
    stylesheet: {
      animate: {
        url: "//www.inke.cn/css/animate.min.css"
      }
    }
  };
}

FastDom.prototype.init = function () {
  this.vnodes = [];
  return this;
};

FastDom.prototype.loadNodes = function (nodes) {
  var _this = this;

  this.nodes = nodes;
  this.nodes.forEach(function (node) {
    var vnode = _this.render(node);

    _this.vnodes.push(vnode);
  });
  return this;
}; // 添加模块


FastDom.prototype.addModule = function (exportModule) {
  var _this2 = this;

  if (!exportModule) return;
  Object.keys(exportModule).forEach(function (moduleType) {
    var moduleListMap = exportModule[moduleType];
    var crrModuleListMap = _this2.exportModule[moduleType];
    _this2.exportModule[moduleType] = _objectSpread(_objectSpread({}, moduleListMap), moduleListMap);
  });
};
/**
 * 渲染模板对应的el。如脚本、css库等
 *
 * @param {*} type script | stylesheet
 * @param {*} config { url, attrs, moduleName }
 */


FastDom.prototype.renderModuleEl = function (type, config) {
  // 对象池
  var dom = null;
  var url = config.url,
      attrs = config.attrs; // 策略集

  switch (type) {
    case "script":
      {
        dom = document.createElement("script");
        dom.setAttribute("src", url);
        break;
      }

    case "stylesheet":
      {
        dom = document.createElement("link");
        dom.setAttribute("rel", "stylesheet");
        dom.setAttribute("href", url);
        break;
      }
  } // 短路


  dom && dom.setAttribute("data-url", url);
  dom && dom.setAttribute("data-module", config.moduleName);
  dom && attrs && Object.keys(attrs).forEach(function (attrKey) {
    dom.setAttribute(attrKey, attrs[attrKey]);
  });
  return dom;
};
/**
 * 将模块插入到dom，并返回promise
 *
 * @param {*} dom 要插入到页面的dom
 * @param {*} doc dom挂载节点，默认document.body
 */


FastDom.prototype.loadModuleEl = function (_ref) {
  var type = _ref.type,
      dom = _ref.el;
  var doc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  var parentBody = doc.body;
  var parentHead = doc.head;

  switch (type) {
    case "script":
      {
        parent = parentBody;
        break;
      }

    case "stylesheet":
      {
        parent = parentHead;
        break;
      }

    default:
      {
        parent = parentBody;
        break;
      }
  }

  return new Promise(function (resolve, reject) {
    if (!dom) {
      reject("dom不存在");
      return;
    }

    var selector = "[data-module=\"".concat(dom.dataset.module, "\"]");
    var origin = parent.querySelector(selector);

    if (origin) {
      console.warn("".concat(dom.dataset.module, "\u5DF2\u7ECF\u5B58\u5728\u4E86"));
      resolve(origin);
      return;
    }

    dom.addEventListener("load", function () {
      resolve(dom);
    });
    dom.addEventListener("error", function (err) {
      reject(err);
    });
    parent.appendChild(dom);
  });
};
/**
 * 加载模块
 *
 * @param {*} module
 * @param {*} doc 文档document
 */


FastDom.prototype.loadExportModules = function (modules, doc) {
  var _this3 = this;

  var modulePromise = [];
  Object.keys(modules).forEach(function (moduleType) {
    var moduleList = modules[moduleType];
    Object.keys(moduleList).forEach(function (moduleName) {
      var el = _this3.renderModuleEl(moduleType, _objectSpread(_objectSpread({}, moduleList[moduleName]), {}, {
        moduleName: moduleName
      }));

      var promise = _this3.loadModuleEl({
        type: moduleType,
        el: el
      }, doc);

      modulePromise.push(promise);
    });
  });
  return Promise.all(modulePromise);
}; // 将节点渲染成一个vnode,方便后续处理


FastDom.prototype.render = function (node) {
  var vnode = {
    node: node
  };
  vnode.uuid = node.uuid || Object(_utils__WEBPACK_IMPORTED_MODULE_0__["uuid"])();
  node.exportModule && this.addModule(node.exportModule);
  ["html", "css", "script"].forEach(function (sniptKey) {
    if (node[sniptKey]) {
      var $dom = $(node[sniptKey]);
      vnode["$".concat(sniptKey)] = $dom;

      if (sniptKey === "html") {
        $dom.attr("data-uuid", vnode.uuid);
        $dom.attr("data-component", "template");
        $dom.attr("id", vnode.uuid);
        ["type", "name"].forEach(function (key) {
          $dom.attr("data-".concat(key), vnode.node[key]);
        });
      } else {
        $dom.attr("data-uuid", "".concat(sniptKey, "-").concat(vnode.uuid));
      }
    }
  });
  return vnode;
}; // 渲染并插入dom到页面


FastDom.prototype.renderDom = function (doc) {
  var docHead = doc.head;
  var docBody = doc.body; // 构造伪head容器

  var fakeHead = $(); // 构造伪body容器

  var fakeBody = $(); // 构造伪srcipt容器

  var fakeScript = $(); // 先将节点统一加入伪容器，后面一次性替换真实dom,避免多次重绘

  this.vnodes.forEach(function (vnode) {
    fakeHead = fakeHead.add(vnode.$css);
    fakeBody = fakeBody.add(vnode.$html);
    fakeScript = fakeScript.add(vnode.$script);
  }); // 将页面body置空

  $(docBody).html(""); // 加载公共模块

  this.loadExportModules(this.exportModule, doc); // 加载伪head到真实document.head

  $(docHead).append(fakeHead); // 加载伪body到真实document.body

  $(docBody).prepend(fakeBody).append(fakeScript);
};

window.FastDom = FastDom;
/* harmony default export */ __webpack_exports__["default"] = (FastDom);

/***/ }),

/***/ "./src/libs/core/index.js":
/*!********************************!*\
  !*** ./src/libs/core/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/libs/core/model/index.js");
/* harmony import */ var _model_middlewares__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/middlewares */ "./src/libs/core/model/middlewares/index.js");
/* harmony import */ var _fastDom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fastDom */ "./src/libs/core/fastDom/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./src/libs/core/actions/index.js");



 // 初始化model

var model = new _model__WEBPACK_IMPORTED_MODULE_0__["default"]({
  // 配置初始state
  state: {
    nodes: []
  },
  // 配置中间件
  middlewares: [_model_middlewares__WEBPACK_IMPORTED_MODULE_1__["uuidMiddleware"], _model_middlewares__WEBPACK_IMPORTED_MODULE_1__["loadSectionsMiddleWare"], _model_middlewares__WEBPACK_IMPORTED_MODULE_1__["logger"]]
}); // 注册action

model.install("action", _actions__WEBPACK_IMPORTED_MODULE_3__["actions"]); // 订阅数据流改变

model.subscribe(function (newVal, oldVal, state) {
  var fastDom = new _fastDom__WEBPACK_IMPORTED_MODULE_2__["default"](); // node => dom

  fastDom // 加载nodes
  .loadNodes(state.nodes) // 渲染nodes
  .renderDom(window.FrameDocument);
}, []); // 挂载到Vvveb上

Vvveb.Model2 = model; // es Module

/* harmony default export */ __webpack_exports__["default"] = (model);

/***/ }),

/***/ "./src/libs/core/model/index.js":
/*!**************************************!*\
  !*** ./src/libs/core/model/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Model; });
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observer */ "./src/libs/core/observer/index.js");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/index */ "./src/libs/core/utils/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Model = /*#__PURE__*/function () {
  function Model(_ref) {
    var _this = this;

    var _ref$state = _ref.state,
        _state = _ref$state === void 0 ? {} : _ref$state,
        _ref$middlewares = _ref.middlewares,
        middlewares = _ref$middlewares === void 0 ? [] : _ref$middlewares;

    _classCallCheck(this, Model);

    _defineProperty(this, "dispatch", function (action) {
      return _this._beforeDispatch(function () {
        var actionType = action.type;
        var actionCfg = _this.actions[actionType];

        if (actionCfg) {
          var reducer = actionCfg.reducer;

          var state = _this.getState();

          var newState = reducer(state, action);

          _this.setState(newState);
        } else {
          console.warn("dispatch ".concat(action.type, "\u5C1A\u672A\u6CE8\u518C"));
        }
      });
    });

    this.store = Object(_observer__WEBPACK_IMPORTED_MODULE_0__["observe"])(_state);
    this.INSTALL_TYPES = {
      action: "action"
    };
    this.actions = {};
    this.middlewares = middlewares;

    this._initMiddleWares(this.middlewares);
  }

  _createClass(Model, [{
    key: "getState",
    value: function getState() {
      return this.store;
    }
  }, {
    key: "setState",
    value: function setState(state) {
      this.store = state;
    }
  }, {
    key: "install",
    value: function install(type, config) {
      switch (type) {
        case this.INSTALL_TYPES.action:
          {
            this._addAction(config);
          }

        default:
          {}
      }
    }
  }, {
    key: "getter",
    value: function getter(fn) {
      var state = _objectSpread({}, this.getState());

      if (typeof fn === 'string') {
        return Object(_utils_index__WEBPACK_IMPORTED_MODULE_1__["get"])(state, fn, undefined);
      }

      if (typeof fn === 'function') {
        return fn(state);
      }

      throw new Error("getter params is not a function or string");
    }
  }, {
    key: "subscribe",
    value: function subscribe(fn, keys) {
      this._addWatcher(keys, fn);
    }
  }, {
    key: "_addAction",
    value: function _addAction(config) {
      var _this2 = this;

      if (Array.isArray(config)) {
        config.forEach(function (action) {
          _this2.actions[action.type] = action;
        });
        return;
      }

      this.actions[config.type] = config;
    }
  }, {
    key: "_addWatcher",
    value: function _addWatcher(keys, fn) {
      var _this3 = this;

      if (Object(_utils_index__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(keys)) {
        new _observer__WEBPACK_IMPORTED_MODULE_0__["Watcher"](this.store, undefined, function (newVal, oldVal, state) {
          fn(newVal, oldVal, _this3.getState());
        });
        return;
      }

      keys.forEach(function (watchKey) {
        new _observer__WEBPACK_IMPORTED_MODULE_0__["Watcher"](_this3.store, watchKey, function (newVal, oldVal, state) {
          fn(newVal, oldVal, _this3.getState());
        });
      });
    }
  }, {
    key: "_applyMiddleware",
    value: function _applyMiddleware(middlewares) {
      var store = this.store;
      var _dispatch = this.dispatch;
      var middlewareAPI = {
        getState: this.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = _utils_index__WEBPACK_IMPORTED_MODULE_1__["compose"].apply(void 0, _toConsumableArray(chain))(_dispatch);
      return _dispatch;
    }
  }, {
    key: "_beforeDispatch",
    value: function _beforeDispatch(fn) {
      return new Promise(function (resolve, reject) {
        try {
          fn();
          resolve();
        } catch (err) {
          reject(err);
        }
      });
    }
  }, {
    key: "_initMiddleWares",
    value: function _initMiddleWares(middlewares) {
      if (!Object(_utils_index__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(middlewares)) {
        this._dispatch = this.dispatch;
        this.dispatch = this._applyMiddleware(middlewares);
      }
    }
  }]);

  return Model;
}();



/***/ }),

/***/ "./src/libs/core/model/middlewares/index.js":
/*!**************************************************!*\
  !*** ./src/libs/core/model/middlewares/index.js ***!
  \**************************************************/
/*! exports provided: logger, uuidMiddleware, loadSectionsMiddleWare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return logger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uuidMiddleware", function() { return uuidMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSectionsMiddleWare", function() { return loadSectionsMiddleWare; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/libs/core/utils/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // 打印日志中间件

var logger = function logger() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      dispatch = _ref.dispatch,
      getState = _ref.getState;

  if (typeof dispatch === "function" || typeof getState === "function") {
    return function (next) {
      return function (action) {
        console.log("looger", action);
        return next(action);
      };
    };
  }
}; // 生成uuid中间件

var uuidMiddleware = function uuidMiddleware() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      dispatch = _ref2.dispatch,
      getState = _ref2.getState;

  if (typeof dispatch === "function" || typeof getState === "function") {
    return function (next) {
      return function (action) {
        var uid = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["uuid"])();

        var payload = _objectSpread({}, action.payload);

        if (action.payload && !payload.uuid) {
          payload.uuid = uid;
          console.log("生成uuid", uid);
        }

        Vvveb.Builder.activeUUID = uid;
        return next(_objectSpread(_objectSpread({}, action), {}, {
          payload: payload
        }));
      };
    };
  }
}; // 加载页面编辑器页面模块列表中间

var loadSectionsMiddleWare = function loadSectionsMiddleWare() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      dispatch = _ref3.dispatch,
      getState = _ref3.getState;

  if (typeof dispatch === "function" || typeof getState === "function") {
    return function (next) {
      return function (action) {
        setTimeout(function () {
          Vvveb.Sections.loadSections();
        }, 200);
        return next(action);
      };
    };
  }
};

/***/ }),

/***/ "./src/libs/core/observer/index.js":
/*!*****************************************!*\
  !*** ./src/libs/core/observer/index.js ***!
  \*****************************************/
/*! exports provided: Watcher, observe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Watcher", function() { return Watcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observe", function() { return observe; });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// utils
function isObject(val) {
  return _typeof(val) === "object";
}

var Watcher = function Watcher(proxy, key, cb) {
  _classCallCheck(this, Watcher);

  this.cb = cb;
  Dep.target = this;
  this.value = proxy[key];
};

var Dep = /*#__PURE__*/function () {
  function Dep() {
    _classCallCheck(this, Dep);

    this.subs = [];
  }

  _createClass(Dep, [{
    key: "addSub",
    value: function addSub(sub) {
      this.subs.push(sub);
    }
  }, {
    key: "notify",
    value: function notify(newVal) {
      this.subs.forEach(function (sub) {
        sub.cb(newVal, sub.value);
        sub.value = newVal;
      });
    }
  }]);

  return Dep;
}();

var deps = {};
var extraDepKey = ['undefined', 'null', ''];
var observe = function observe(obj) {
  var ctx = null;
  return new Proxy(obj, {
    get: function get(target, key, receiver) {
      var dep = deps[key] = deps[key] || new Dep();
      Dep.target && dep.addSub(Dep.target);
      Dep.target = null;
      var res = Reflect.get(target, key, receiver);
      return isObject(res) ? observe(res) : res;
      return res;
    },
    set: function set(target, key, value, receiver) {
      if (target[key] === value) return true;
      var dep = deps[key] = deps[key] || new Dep();
      Promise.resolve().then(function () {
        dep.notify(value);
        extraDepKey.forEach(function (k) {
          return deps[k] && deps[k].notify(target);
        });
      });
      return Reflect.set(target, key, value, receiver);
    }
  });
};

/***/ }),

/***/ "./src/libs/core/utils/index.js":
/*!**************************************!*\
  !*** ./src/libs/core/utils/index.js ***!
  \**************************************/
/*! exports provided: isObject, isEmpty, clone, uuid, get, compose, ArrayUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uuid", function() { return uuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayUtils", function() { return ArrayUtils; });
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// 判断是否为对象
function isObject(value) {
  return Object.prototype.toString.call(value) === "[object Object]";
}
function isEmpty(val) {
  if (val === null || val === undefined || val === "") return true;
  if (isObject(val)) return Object.keys(val) === 0;
  if (Array.isArray(val)) return val.length === 0;
  return false;
} // 浅拷贝

function clone(value) {
  var isArr = Array.isArray(value);
  if (isArr) return _toConsumableArray(value);
  if (isObject(value)) return _objectSpread({}, value);
  return value;
} // 生成UUID

function uuid() {
  var time = Date.now();
  var r = Math.random();
  return "".concat(time.toString(36), "-").concat(r.toString(36).substr(2));
}
/**
 * 类似lodash get
 *
 * @export
 * @param {*} target 
 * @param {*} path
 * @param {*} [defaultValue=undefined]
 * @return {*} 
 */

function get(target, path) {
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  var paths = path.replace(/\[(\d+)\]/, '.$1').split(".");
  var result = Object(target);

  var _iterator = _createForOfIteratorHelper(paths),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var p = _step.value;
      result = Object(result)[p];
      if (result === undefined) return defaultValue;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return result;
}
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
} // 操作数组

var ArrayUtils = {
  /**
   * 交换数组位置
   *
   * @param {*} arr 源数组
   * @param {*} index 索引1
   * @param {*} targetIndex 索引2
   * @returns
   */
  swap: function swap(arr, index, targetIndex) {
    if (!Array.isArray(arr)) return [];
    if (index < 0 || targetIndex < 0) return arr;
    if (index >= arr.length || targetIndex >= arr.length) return arr;

    var newArr = _toConsumableArray(arr);

    var temp = clone(newArr[targetIndex]);
    newArr[targetIndex] = newArr[index];
    newArr[index] = temp;
    return newArr;
  },

  /**
   * 在数组中插入一个值
   *
   * @param {Array} arr 数组
   * @param {Number} index 开始索引
   * @param {any} value 值
   * @return {Array}
   */
  insert: function insert(arr, index, value) {
    if (!Array.isArray(arr)) return [];
    arr.splice(index, 0, value);
    return arr;
  },

  /**
   * 从数组中替换一个值
   *
   * @param {Array} arr 数组
   * @param {Number} index 替换索引
   * @param {any} value 新值
   * @return {Array}
   */
  replace: function replace(arr, index, value) {
    if (!Array.isArray(arr)) return [];
    arr.splice(index, 1, value);
    return arr;
  },

  /**
   * 从数组中移除一个值
   *
   * @param {Array} arr 数组
   * @param {Number} index 开始索引
   * @return {Array}
   */
  remove: function remove(arr, index) {
    if (!Array.isArray(arr)) return [];
    return arr.filter(function (_, idx) {
      return idx !== index;
    });
  },

  /**
   * 对象查找索引
   *
   * @param {*} arr
   * @param {*} obj
   */
  findIndex: function findIndex(arr, obj) {
    var idx = -1;
    var value = arr.find(function (v, index) {
      var isMatch = Object.keys(obj).every(function (key) {
        return obj[key] === v[key];
      });

      if (isMatch) {
        idx = index;
        return true;
      }
    });
    return [idx, value];
  }
};

/***/ })

/******/ });