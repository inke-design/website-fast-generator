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
export function isObject(value) {
  return Object.prototype.toString.call(value) === "[object Object]";
}
export function isEmpty(val) {
  if (val === null || val === undefined || val === "") return true;
  if (isObject(val)) return Object.keys(val) === 0;
  if (Array.isArray(val)) return val.length === 0;
  return false;
} // 浅拷贝

export function clone(value) {
  var isArr = Array.isArray(value);
  if (isArr) return _toConsumableArray(value);
  if (isObject(value)) return _objectSpread({}, value);
  return value;
} // 生成UUID

export function uuid() {
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

export function get(target, path) {
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
export function compose() {
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

export var ArrayUtils = {
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