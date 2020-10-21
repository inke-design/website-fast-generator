Vvveb.Model = {
  store: {
    nodes: [],
  },

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
    EDIT: "EDIT",
  },

  // store写入值
  set(key, value){
    this.store[key] = value;
  },

  // store读取值
  get(key) {
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
  dispatch(action) {
    return this.reducer(action);
  },

  // action reducer
  reducer(action) {
    const { type, node, uuid, dom } = action;
    switch (action.type) {
      // 添加节点
      case this.TYPES.ADD: {
        const uid = Vvveb.Utils.uuid();
        const vNode = { uuid: uid, node };
        const $dom = Vvveb.Utils.generateDom(
          { html: node.html, css: node.css, script: node.script },
          vNode
        );

        vNode.$dom = $dom;
        this.store.nodes.push(vNode);

        return {
          after: this.after({ uuid: uid, node, $dom }),
        };
      }
      // 移除节点
      case this.TYPES.REMOVE: {
        const { index, node } = this.findNodeByUUID(uuid);


        if(index === -1) return;
        const newNodes = this.store.nodes.filter((_, idx) => idx !== index)

        this.store.nodes = newNodes;
        return {
          after: this.after({ ...node }),
        };
      }
      // 上移节点
      case this.TYPES.MOVE_UP: {
        const { index, node } = this.findNodeByUUID(uuid);

        if(index === -1 || index === 0) return;

        Vvveb.Utils.swapArray(this.store.nodes, index, index - 1);

        return {
          after: this.after({ ...node }),
        };
      }
      // 下移动节点
      case this.TYPES.MOVE_DOWN: {
        const { index, node } = this.findNodeByUUID(uuid);

        if(index === -1 || index === this.store.nodes.length - 1) return;

        Vvveb.Utils.swapArray(this.store.nodes, index, index + 1);

        return {
          after: this.after({ ...node }),
        };
      }
      // 编辑节点
      case this.TYPES.EDIT: {
        break;
      }
      // 拷贝节点
      case this.TYPES.CLONE: {
        const { index, node: vNode } = this.findNodeByUUID(uuid);
        if(index === -1) return;

        const uid = Vvveb.Utils.uuid();
        const node = vNode.node;
        const vNodeClone = { uuid: uid, node: node };
        const $dom = Vvveb.Utils.generateDom(
          { html: node.html, css: node.css, script: node.script },
          vNodeClone
        );

        vNodeClone.$dom = $dom;
        this.store.nodes.push(vNodeClone);

        return {
          after: this.after({ uuid: uid, node, $dom }),
        };
      }
      default: {
      }
    }
  },

  // 根据uuid查找节点
  findNodeByUUID(uuid) {
    let index = -1;
    const nodes = this.get('nodes') || [];
    let node = nodes.find((node, idx) => {
      if(String(node.uuid) === String(uuid)) {
        index = idx
        return true
      }
    })

    return { index, node }
  },

  // acion after
  after() {
    const args = arguments;
    const that = this;
    return function (cb) {
      cb && cb.apply(this, args);
      return that;
    };
  },
};
