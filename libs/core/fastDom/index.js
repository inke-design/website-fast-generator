function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { uuid } from "../utils";

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
    // 内置css库
    stylesheet: {
      animate: {
        url: "//www.inke.cn/css/animate.min.css"
      },
      bootstrapCSS: {
        url: 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/css/bootstrap.min.css',
        integrity: 'sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk',
        crossorigin: 'anonymous'
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
  vnode.uuid = node.uuid || uuid();
  node.exportModule && this.addModule(node.exportModule);
  ["html", "css", "script"].forEach(function (sniptKey) {
    if (node[sniptKey]) {
      var $dom = $(node[sniptKey]);
      vnode["$".concat(sniptKey)] = $dom;

      if (sniptKey === "html") {
        $dom.attr("data-uuid", vnode.uuid);
        $dom.attr("data-component", "template");
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
export default FastDom;