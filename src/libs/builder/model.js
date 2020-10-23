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
    if(!this.isShouldDispatch(action)) {
      console.warn('数据未发生变更，没有必要dispatch action', action);
      return;
    }
    return this.reducer(action);
  },

  // action reducer
  reducer(action) {
    const { type, node, uuid, dom } = action;
    switch (action.type) {
      // 添加节点
      case this.TYPES.ADD: {
        return this._baseAfter(() => {
          const uid = Vvveb.Utils.uuid();
          const vNode = { uuid: uid, node };
          const $dom = Vvveb.Utils.render(vNode);
  
          vNode.$dom = $dom;
          this.store.nodes.push(vNode);

          return { uuid: uid, node, $dom }
        })
      }
      // 移除节点
      case this.TYPES.REMOVE: {
        return this._baseAfter(() => {
          const { index, node } = this.findNodeByUUID(uuid);
  
  
          if(index === -1) throw new Error('未找到节点');
          const newNodes = this.store.nodes.filter((_, idx) => idx !== index)
  
          this.store.nodes = newNodes;
          return { ...node }
        })
      }
      // 上移节点
      case this.TYPES.MOVE_UP: {
        return this._baseAfter(() => {
          const { index, node } = this.findNodeByUUID(uuid);
  
          if(index === -1 || index === 0) throw new Error('未找到节点或上移节点越界');
  
          this.store.nodes = Vvveb.Utils.Array.swap(this.store.nodes, index, index - 1);
  
          return { ...node }
        })
      }
      // 下移动节点
      case this.TYPES.MOVE_DOWN: {
        return this._baseAfter(() => {
          const { index, node } = this.findNodeByUUID(uuid);
  
          if(index === -1 || index === this.store.nodes.length - 1) throw new Error('未找到节点或下移节点越界');
  
          this.store.nodes = Vvveb.Utils.Array.swap(this.store.nodes, index, index + 1);
  
          return { ...node }
        })
      }
      // 编辑节点
      case this.TYPES.EDIT: {
        return this._baseAfter(() => {
          const { index, node: vNode } = this.findNodeByUUID(uuid);
          if(index === -1) throw new Error('未找到节点');

          const vNodeNew = { ...vNode, node: { ...vNode.node, ...node } };
          const $dom = Vvveb.Utils.render(vNodeNew);
  
          vNodeNew.$dom = $dom;
          this.store.nodes = Vvveb.Utils.Array.replace(this.store.nodes, index, vNodeNew);
          
          vNode.$dom.replaceWith($dom);
          return { ...vNodeNew }
        })
      }
      // 拷贝节点
      case this.TYPES.CLONE: {
        return this._baseAfter(() => {
          const { index, node: vNode } = this.findNodeByUUID(uuid);
          if(index === -1) throw new Error('未找到节点');
  
          const uid = Vvveb.Utils.uuid();
          const node = vNode.node;
          const vNodeClone = { uuid: uid, node: node };
          const $dom = Vvveb.Utils.render(vNodeClone);
  
          vNodeClone.$dom = $dom;
          this.store.nodes.push(vNodeClone);
  
          return { uuid: uid, node, $dom }
        })
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

  /**
   * action是否应该被触发
   * 发现api被调用时候，可能数据根本没有变动，此时就没有必要dispatch一个action
   * 从而避免触发 遍历nodes、生成dom等 不必要的操作
   *
   * @param {*} action dispatch action
   * 
   */
  isShouldDispatch(action) {
    const { type, node, uuid, dom } = action;

    // 目前只有编辑节点需要优化
    if(action.type === this.TYPES.EDIT) {
      const { index, node: vNode } = this.findNodeByUUID(uuid);
      if(index === -1) return false;

      return Object.keys(node).some(changeKey => {
        return node[changeKey] !== vNode.node[changeKey]
      })
    }

    return true;
  },

  // 用于对reducer的操作再封装，统一捕获异常
  _baseAfter(fn) {
    let result = null;
    try {
      result = fn();

      return { after: this._after(null, result) };
    } catch(err) {
      console.error('dipatch action报错:', err);
      return { after: this._after(err, result) };
    }
  },

  // dispatch acion结束之后回调[非异步]
  _after() {
    const args = arguments;
    const that = this;
    return function (cb) {
      cb && cb.apply(this, args);

			Vvveb.Sections.loadSections();
      return that;
    };
  },
};
