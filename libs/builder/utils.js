function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

Vvveb.Utils = {
  // 生成uuid
  uuid: function uuid() {
    var time = Date.now();
    var r = Math.random();
    return "".concat(time.toString(36), "-").concat(r.toString(36).substr(2));
  },
  // 生成dom
  render: function render(vNode) {
    var _vNode$node = vNode.node,
        html = _vNode$node.html,
        css = _vNode$node.css,
        script = _vNode$node.script;
    var $dom = $(html);
    css && $dom.append($(css));
    script && $dom.append($(script));
    $dom.attr("data-uuid", vNode.uuid);
    $dom.attr("id", vNode.uuid);
    ["type", "name"].forEach(function (key) {
      $dom.attr("data-".concat(key), vNode.node[key]);
    });
    return $dom;
  },
  // 判断是否为对象
  isObject: function isObject(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
  },
  // 浅拷贝
  clone: function clone(value) {
    var isArr = Array.isArray(value);
    if (isArr) return _toConsumableArray(value);
    if (this.isObject(value)) return _objectSpread({}, value);
    return value;
  },
  // 操作数组
  Array: {
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

      var temp = Vvveb.Utils.clone(newArr[targetIndex]);
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
    }
  },

  /**
   * 渲染模板对应的el。如脚本、css库等
   *
   * @param {*} type script | stylesheet
   * @param {*} config { url, attrs, moduleName }
   */
  renderModuleEl: function renderModuleEl(type, config) {
    var dom = null;
    var url = config.url,
        attrs = config.attrs;

    switch (type) {
      case 'script':
        {
          dom = document.createElement('script');
          dom.setAttribute('src', url);
          break;
        }

      case 'stylesheet':
        {
          dom = document.createElement('link');
          dom.setAttribute('rel', 'stylesheet');
          dom.setAttribute('href', url);
          break;
        }
    }

    dom && dom.setAttribute('data-url', url);
    dom && dom.setAttribute('data-module', config.moduleName);
    dom && attrs && Object.keys(attrs).forEach(function (attrKey) {
      dom.setAttribute(attrKey, attrs[attrKey]);
    });
    return dom;
  },

  /**
   * 将模块插入到dom，并返回promise
   *
   * @param {*} dom 要插入到页面的dom
   * @param {*} doc dom挂载节点，默认document.body
   */
  loadModuleEl: function loadModuleEl(dom) {
    var doc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
    var parent = doc.body;
    return new Promise(function (resolve, reject) {
      if (!dom) {
        reject('dom不存在');
        return;
      }

      var selector = "[data-module=\"".concat(dom.dataset.module, "\"]");
      var origin = parent.querySelector(selector);

      if (origin) {
        console.warn("".concat(dom.dataset.module, "\u5DF2\u7ECF\u5B58\u5728\u4E86"));
        resolve(origin);
        return;
      }

      dom.addEventListener('load', function () {
        resolve(dom);
      });
      dom.addEventListener('error', function (err) {
        reject(err);
      });
      parent.appendChild(dom);
    });
  },

  /**
   * 加载模块
   *
   * @param {*} module
   * @param {*} doc 文档document
   */
  loadExportModules: function loadExportModules(modules, doc) {
    var _this = this;

    var modulePromise = [];
    Object.keys(modules).forEach(function (moduleType) {
      var moduleList = modules[moduleType];
      Object.keys(moduleList).forEach(function (moduleName) {
        var el = _this.renderModuleEl(moduleType, _objectSpread(_objectSpread({}, moduleList[moduleName]), {}, {
          moduleName: moduleName
        }));

        var promise = _this.loadModuleEl(el, doc);

        modulePromise.push(promise);
      });
    });
    return Promise.all(modulePromise);
  }
};