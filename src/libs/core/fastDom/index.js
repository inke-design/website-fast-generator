import { uuid } from "../utils";
function FastDom() {
  this.vnodes = [];
  // 暴露给公共使用的模块
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
        attrs: {},
      },
    },
    // 内置css库
    stylesheet: {
      animate: {
        url: "//www.inke.cn/css/animate.min.css",
      },
      bootstrapCSS: {
        url: 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/css/bootstrap.min.css',
        integrity: 'sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk',
        crossorigin: 'anonymous',
      },
    },
  };
}

FastDom.prototype.init = function () {
  this.vnodes = [];
  return this;
};

FastDom.prototype.loadNodes = function (nodes) {
  this.nodes = nodes;

  this.nodes.forEach((node) => {
    const vnode = this.render(node);
    this.vnodes.push(vnode);
  });

  return this;
};

// 添加模块
FastDom.prototype.addModule = function (exportModule) {
  if (!exportModule) return;

  Object.keys(exportModule).forEach((moduleType) => {
    const moduleListMap = exportModule[moduleType];
    const crrModuleListMap = this.exportModule[moduleType];

    this.exportModule[moduleType] = {
      ...moduleListMap,
      ...moduleListMap,
    };
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
  let dom = null;
  const { url, attrs } = config;

  // 策略集
  switch (type) {
    case "script": {
      dom = document.createElement("script");
      dom.setAttribute("src", url);
      break;
    }
    case "stylesheet": {
      dom = document.createElement("link");
      dom.setAttribute("rel", "stylesheet");
      dom.setAttribute("href", url);
      break;
    }
  }

  // 短路
  dom && dom.setAttribute("data-url", url);
  dom && dom.setAttribute("data-module", config.moduleName);
  dom &&
    attrs &&
    Object.keys(attrs).forEach((attrKey) => {
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
FastDom.prototype.loadModuleEl = function ({ type, el: dom }, doc = document) {
  let parentBody = doc.body;
  let parentHead = doc.head;

  switch (type) {
    case "script": {
      parent = parentBody;
      break;
    }
    case "stylesheet": {
      parent = parentHead;
      break;
    }
    default: {
      parent = parentBody;
      break;
    }
  }

  return new Promise((resolve, reject) => {
    if (!dom) {
      reject("dom不存在");
      return;
    }

    const selector = `[data-module="${dom.dataset.module}"]`;
    const origin = parent.querySelector(selector);

    if (origin) {
      console.warn(`${dom.dataset.module}已经存在了`);
      resolve(origin);
      return;
    }

    dom.addEventListener("load", () => {
      resolve(dom);
    });

    dom.addEventListener("error", (err) => {
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
  const modulePromise = [];
  Object.keys(modules).forEach((moduleType) => {
    const moduleList = modules[moduleType];

    Object.keys(moduleList).forEach((moduleName) => {
      const el = this.renderModuleEl(moduleType, {
        ...moduleList[moduleName],
        moduleName,
      });

      const promise = this.loadModuleEl({ type: moduleType, el }, doc);
      modulePromise.push(promise);
    });
  });

  return Promise.all(modulePromise);
};

// 将节点渲染成一个vnode,方便后续处理
FastDom.prototype.render = function (node) {
  const vnode = { node };

  vnode.uuid = node.uuid || uuid();
  node.exportModule && this.addModule(node.exportModule);
  ["html", "css", "script"].forEach((sniptKey) => {
    if (node[sniptKey]) {
      const $dom = $(node[sniptKey]);

      vnode[`$${sniptKey}`] = $dom;
      if (sniptKey === "html") {
        $dom.attr("data-uuid", vnode.uuid);
        $dom.attr("data-component", "template");
        ["type", "name"].forEach((key) => {
          $dom.attr(`data-${key}`, vnode.node[key]);
        });
      } else {
        $dom.attr("data-uuid", `${sniptKey}-${vnode.uuid}`);
      }
    }
  });

  return vnode;
};

// 渲染并插入dom到页面
FastDom.prototype.renderDom = function(doc) {
  const docHead = doc.head;
  const docBody = doc.body;

  // 构造伪head容器
  let fakeHead = $();
  // 构造伪body容器
  let fakeBody = $();
  // 构造伪srcipt容器
  let fakeScript = $();

  // 先将节点统一加入伪容器，后面一次性替换真实dom,避免多次重绘
  this.vnodes.forEach((vnode) => {
    fakeHead = fakeHead.add(vnode.$css);
    fakeBody = fakeBody.add(vnode.$html);
    fakeScript = fakeScript.add(vnode.$script);
  });

  // 将页面body置空
  $(docBody).html("");
  // 加载公共模块
  this.loadExportModules(this.exportModule, doc);
  // 加载伪head到真实document.head
  $(docHead).append(fakeHead);
  // 加载伪body到真实document.body
  $(docBody).prepend(fakeBody).append(fakeScript);
};

window.FastDom = FastDom;
export default FastDom;
