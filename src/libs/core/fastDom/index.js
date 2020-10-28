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
    stylesheet: {
      animate: {
        url: "//www.inke.cn/css/animate.min.css",
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
  let dom = null;
  const { url, attrs } = config;

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
        $dom.attr("id", vnode.uuid);
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

FastDom.prototype.renderDom = function(doc) {
  const docHead = doc.head;
  const docBody = doc.body;

  let fakeHead = $();
  let fakeBody = $();
  let fakeScript = $();

  this.vnodes.forEach((vnode) => {
    fakeHead = fakeHead.add(vnode.$css);
    fakeBody = fakeBody.add(vnode.$html);
    fakeScript = fakeScript.add(vnode.$script);
  });

  $(docBody).html("");
  // 加载公共模块
  this.loadExportModules(this.exportModule, doc);
  $(docHead).append(fakeHead);
  $(docBody).prepend(fakeBody).append(fakeScript);
};

export default FastDom;
