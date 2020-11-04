function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import { ArrayUtils } from "../utils";
export var ACTION_TYPES = {
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
  EDIT: "EDIT",
  // 重置
  RESET: 'RESET'
};
export var actions = [{
  type: ACTION_TYPES.ADD,
  reducer: function reducer(state, action) {
    state.nodes.push(action.payload);
    return state;
  }
}, {
  type: ACTION_TYPES.EDIT,
  reducer: function reducer(state, action) {
    var uuid = action.uuid;

    var _ArrayUtils$findIndex = ArrayUtils.findIndex(state.nodes, {
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

    var _ArrayUtils$findIndex3 = ArrayUtils.findIndex(state.nodes, {
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

    var newNodes = ArrayUtils.swap(state.nodes, idx, idx - 1);
    state.nodes = newNodes;
    return state;
  }
}, {
  type: ACTION_TYPES.MOVE_DOWN,
  reducer: function reducer(state, action) {
    var uuid = action.uuid;

    var _ArrayUtils$findIndex5 = ArrayUtils.findIndex(state.nodes, {
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

    var newNodes = ArrayUtils.swap(state.nodes, idx, idx + 1);
    state.nodes = newNodes;
    return state;
  }
}, {
  type: ACTION_TYPES.RESET,
  reducer: function reducer(state, action) {
    state.nodes = [];
    return state;
  }
}];