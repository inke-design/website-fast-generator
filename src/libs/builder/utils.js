Vvveb.Utils = {
  // 生成uuid
  uuid() {
    const time = Date.now();
    const r = Math.random();
    return `${time.toString(36)}-${r.toString(36).substr(2)}`;
  },

  // 生成dom
  render(vNode) {
    const { html, css, script } = vNode.node;
    const $dom = $(html);

    css && $dom.append($(css));
    script && $dom.append($(script));

    $dom.attr("data-uuid", vNode.uuid);
    $dom.attr("id", vNode.uuid);
    ["type", "name"].forEach((key) => {
      $dom.attr(`data-${key}`, vNode.node[key]);
    });

    return $dom;
  },

  // 判断是否为对象
  isObject(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
  },

  // 浅拷贝
  clone(value) {
    const isArr = Array.isArray(value);

    if (isArr) return [...value];

    if (this.isObject(value)) return { ...value };

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
    swap(arr, index, targetIndex) {
      if(!Array.isArray(arr)) return [];
      if(index < 0 || targetIndex < 0) return arr;
      if(index >= arr.length || targetIndex >= arr.length) return arr;

      let newArr = [...arr];
      let temp = Vvveb.Utils.clone(newArr[targetIndex]);
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
    insert(arr, index, value) {
      if(!Array.isArray(arr)) return [];

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
    replace(arr, index, value) {
      if(!Array.isArray(arr)) return [];

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
    remove(arr, index) {
      if(!Array.isArray(arr)) return [];

      return arr.filter((_, idx) => idx !== index);
    },
  },

  /**
   * 渲染模板对应的el。如脚本、css库等
   *
   * @param {*} type script | stylesheet
   * @param {*} config { url, attrs, moduleName }
   */
  renderModuleEl(type, config) {
    let dom = null;
    const { url, attrs } = config;

    switch(type) {
      case 'script': {
        dom = document.createElement('script');
        dom.setAttribute('src', url);
        break;
      }
      case 'stylesheet': {
        dom = document.createElement('link');
        dom.setAttribute('rel', 'stylesheet');
        dom.setAttribute('href', url);
        break;
      }
    }

    dom && dom.setAttribute('data-url', url);
    dom && dom.setAttribute('data-module', config.moduleName);
    dom && attrs && Object.keys(attrs).forEach(attrKey => {
      dom.setAttribute(attrKey, attrs[attrKey]);
    })

    return dom;
  },

  /**
   * 将模块插入到dom，并返回promise
   *
   * @param {*} dom 要插入到页面的dom
   * @param {*} doc dom挂载节点，默认document.body
   */
  loadModuleEl(dom, doc = document) {
    let parent =  doc.body;
    return new Promise((resolve, reject) => {
      if(!dom) {
        reject('dom不存在');
        return;
      }

      const selector = `[data-module="${dom.dataset.module}"]`;
      const origin = parent.querySelector(selector);

      if(origin) {
        console.warn(`${dom.dataset.module}已经存在了`);
        resolve(origin);
        return;
      }

      dom.addEventListener('load', () => {
        resolve(dom)
      });

      dom.addEventListener('error', (err) => {
        reject(err)
      });

      parent.appendChild(dom);
    })
  },

  /**
   * 加载模块
   *
   * @param {*} module
   * @param {*} doc 文档document
   */
  loadExportModules(modules, doc) {
    const modulePromise = [];
    Object.keys(modules).forEach(moduleType => {
      const moduleList = modules[moduleType];

      Object.keys(moduleList).forEach(moduleName => {
        const el = this.renderModuleEl(moduleType, {
          ...moduleList[moduleName],
          moduleName,
        });

        const promise = this.loadModuleEl(el, doc);
        modulePromise.push(promise);
      })
    });

    return Promise.all(modulePromise);
  }
};
