function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { uuid } from "../../utils"; // 打印日志中间件

export var logger = function logger() {
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

export var uuidMiddleware = function uuidMiddleware() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      dispatch = _ref2.dispatch,
      getState = _ref2.getState;

  if (typeof dispatch === "function" || typeof getState === "function") {
    return function (next) {
      return function (action) {
        var uid = uuid();

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

export var loadSectionsMiddleWare = function loadSectionsMiddleWare() {
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