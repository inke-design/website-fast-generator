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

import { observe, Watcher } from "../observer";
import { isEmpty, compose, get } from "../utils/index";

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

    this.store = observe(_state);
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
        return get(state, fn, undefined);
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

      if (isEmpty(keys)) {
        new Watcher(this.store, undefined, function (newVal, oldVal, state) {
          fn(newVal, oldVal, _this3.getState());
        });
        return;
      }

      keys.forEach(function (watchKey) {
        new Watcher(_this3.store, watchKey, function (newVal, oldVal, state) {
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
      _dispatch = compose.apply(void 0, _toConsumableArray(chain))(_dispatch);
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
      if (!isEmpty(middlewares)) {
        this._dispatch = this.dispatch;
        this.dispatch = this._applyMiddleware(middlewares);
      }
    }
  }]);

  return Model;
}();

export { Model as default };