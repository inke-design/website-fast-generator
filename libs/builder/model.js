function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Vvveb.Model = {
  store: {
    nodes: []
  },
  // action type
  TYPES: {
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
  },
  // 暴露给公共使用的模块
  exportModule: {
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
        url: '//static.inke.cn/web/common/jquery/jquery-1.9.1.min.js',
        attrs: {}
      }
    },
    stylesheet: {
      animate: {
        url: '//www.inke.cn/css/animate.min.css'
      }
    }
  },
  // 添加模块
  addModule: function addModule(exportModule) {
    var _this = this;

    if (!exportModule) return;
    Object.keys(exportModule).forEach(function (moduleType) {
      var moduleListMap = exportModule[moduleType];
      var crrModuleListMap = _this.exportModule[moduleType];
      _this.exportModule[moduleType] = _objectSpread(_objectSpread({}, moduleListMap), moduleListMap);
    });
  },
  // store写入值
  set: function set(key, value) {
    this.store[key] = value;
  },
  // store读取值
  get: function get(key) {
    return this.store[key];
  },

  /**
   * dispatch action
   *
   * @param {String} action.type action type 值为this.TYPES
   * @param {Object} action.node 节点data
   * @param {Function} action.before 操作node json数据完成，未转为真实dom前
   * @param {Function} action.after node转为真实dom后
   *
   */
  dispatch: function dispatch(action) {
    if (!this.isShouldDispatch(action)) {
      console.warn('数据未发生变更，没有必要dispatch action', action);
      return;
    }

    return this.reducer(action);
  },
  // action reducer
  reducer: function reducer(action) {
    var _this2 = this;

    var type = action.type,
        node = action.node,
        uuid = action.uuid,
        dom = action.dom;

    switch (action.type) {
      // 添加节点
      case this.TYPES.ADD:
        {
          return this._baseAfter(function () {
            var uid = Vvveb.Utils.uuid();
            var vNode = {
              uuid: uid,
              node: node
            };
            var $dom = Vvveb.Utils.render(vNode, window.FrameDocument);
            vNode.$dom = $dom;

            _this2.store.nodes.push(vNode);

            node.exportModule && _this2.addModule(node.exportModule);
            return {
              uuid: uid,
              node: node,
              $dom: $dom
            };
          });
        }
      // 移除节点

      case this.TYPES.REMOVE:
        {
          return this._baseAfter(function () {
            var _this2$findNodeByUUID = _this2.findNodeByUUID(uuid),
                index = _this2$findNodeByUUID.index,
                node = _this2$findNodeByUUID.node;

            if (index === -1) throw new Error('未找到节点');

            var newNodes = _this2.store.nodes.filter(function (_, idx) {
              return idx !== index;
            });

            _this2.store.nodes = newNodes;
            return _objectSpread({}, node);
          });
        }
      // 上移节点

      case this.TYPES.MOVE_UP:
        {
          return this._baseAfter(function () {
            var _this2$findNodeByUUID2 = _this2.findNodeByUUID(uuid),
                index = _this2$findNodeByUUID2.index,
                node = _this2$findNodeByUUID2.node;

            if (index === -1 || index === 0) throw new Error('未找到节点或上移节点越界');
            _this2.store.nodes = Vvveb.Utils.Array.swap(_this2.store.nodes, index, index - 1);
            return _objectSpread({}, node);
          });
        }
      // 下移动节点

      case this.TYPES.MOVE_DOWN:
        {
          return this._baseAfter(function () {
            var _this2$findNodeByUUID3 = _this2.findNodeByUUID(uuid),
                index = _this2$findNodeByUUID3.index,
                node = _this2$findNodeByUUID3.node;

            if (index === -1 || index === _this2.store.nodes.length - 1) throw new Error('未找到节点或下移节点越界');
            _this2.store.nodes = Vvveb.Utils.Array.swap(_this2.store.nodes, index, index + 1);
            return _objectSpread({}, node);
          });
        }
      // 编辑节点

      case this.TYPES.EDIT:
        {
          return this._baseAfter(function () {
            var _this2$findNodeByUUID4 = _this2.findNodeByUUID(uuid),
                index = _this2$findNodeByUUID4.index,
                vNode = _this2$findNodeByUUID4.node;

            if (index === -1) throw new Error('未找到节点');

            var vNodeNew = _objectSpread(_objectSpread({}, vNode), {}, {
              node: _objectSpread(_objectSpread({}, vNode.node), node)
            });

            var $dom = Vvveb.Utils.render(vNodeNew, window.FrameDocument);
            vNodeNew.$dom = $dom;
            _this2.store.nodes = Vvveb.Utils.Array.replace(_this2.store.nodes, index, vNodeNew);
            vNode.$dom.replaceWith($dom);
            return _objectSpread({}, vNodeNew);
          });
        }
      // 拷贝节点

      case this.TYPES.CLONE:
        {
          return this._baseAfter(function () {
            var _this2$findNodeByUUID5 = _this2.findNodeByUUID(uuid),
                index = _this2$findNodeByUUID5.index,
                vNode = _this2$findNodeByUUID5.node;

            if (index === -1) throw new Error('未找到节点');
            var uid = Vvveb.Utils.uuid();
            var node = vNode.node;
            var vNodeClone = {
              uuid: uid,
              node: node
            };
            var $dom = Vvveb.Utils.render(vNodeClone, window.FrameDocument);
            vNodeClone.$dom = $dom;

            _this2.store.nodes.push(vNodeClone);

            return {
              uuid: uid,
              node: node,
              $dom: $dom
            };
          });
        }

      default:
        {}
    }
  },
  // 根据uuid查找节点
  findNodeByUUID: function findNodeByUUID(uuid) {
    var index = -1;
    var nodes = this.get('nodes') || [];
    var node = nodes.find(function (node, idx) {
      if (String(node.uuid) === String(uuid)) {
        index = idx;
        return true;
      }
    });
    return {
      index: index,
      node: node
    };
  },

  /**
   * action是否应该被触发
   * 发现api被调用时候，可能数据根本没有变动，此时就没有必要dispatch一个action
   * 从而避免触发 遍历nodes、生成dom等 不必要的操作
   *
   * @param {*} action dispatch action
   * 
   */
  isShouldDispatch: function isShouldDispatch(action) {
    var type = action.type,
        node = action.node,
        uuid = action.uuid,
        dom = action.dom; // 目前只有编辑节点需要优化

    if (action.type === this.TYPES.EDIT) {
      var _this$findNodeByUUID = this.findNodeByUUID(uuid),
          index = _this$findNodeByUUID.index,
          vNode = _this$findNodeByUUID.node;

      if (index === -1) return false;
      return Object.keys(node).some(function (changeKey) {
        return node[changeKey] !== vNode.node[changeKey];
      });
    }

    return true;
  },
  // 用于对reducer的操作再封装，统一捕获异常
  _baseAfter: function _baseAfter(fn) {
    var result = null;

    try {
      result = fn();
      return {
        after: this._after(null, result)
      };
    } catch (err) {
      console.error('dipatch action报错:', err);
      return {
        after: this._after(err, result)
      };
    }
  },
  // dispatch acion结束之后回调[非异步]
  _after: function _after() {
    var args = arguments;
    var that = this;
    return function (cb) {
      cb && cb.apply(this, args);
      Vvveb.Sections.loadSections();
      Vvveb.Utils.loadExportModules(Vvveb.Model.exportModule, window.FrameDocument);
      return that;
    };
  }
};