// 生成uuid
function uuid() {
  const time = Date.now();
  const r = Math.random();
  return `${time.toString(36)}-${r.toString(36).substr(2)}`;
}

// 生产dom
function generateDom(template = {}, vNode) {
  const { html, css, script } = template;
  const $dom = $(html);

  css && $dom.append($(css));
  script && $dom.append($(script));

  $dom.attr("data-uid", vNode.uuid);
  ["type", "name"].forEach((key) => {
    $dom.attr(`data-${key}`, vNode.node[key]);
  });

  return $dom;
}

Vvveb.Model = {
  store: {
    nodes: [],
  },

  TYPES: {
    // 添加节点
    ADD: "ADD",
    // 移除节点
    REMOVE: "REMOVE",
    // 移动节点
    MOVE: "MOVE",
    // 修改节点
    EDIT: "EDIT",
  },

  /**
   * dispatch action
   *
   * @param {String} action.type action type 值为this.TYPES
   * @param {Object} action.data action.payload
   */
  dispatch(action) {
    return this.reducer(action);
  },

  reducer(action) {
    const { type, node } = action;
    switch (action.type) {
      case this.TYPES.ADD: {
        const uid = uuid();
        const vNode = {
          uuid: uid,
          node,
        };
        const $dom = generateDom(
          { html: node.html, css: node.css, script: node.script },
          vNode
        );

        vNode.$dom = $dom;
        this.store.nodes.push(vNode);
        return {
          dom: $dom,
        };
      }
      case this.TYPES.REMOVE: {
        break;
      }
      case this.TYPES.MOVE: {
        break;
      }
      case this.TYPES.EDIT: {
        break;
      }
      default: {
      }
    }
  },
};
