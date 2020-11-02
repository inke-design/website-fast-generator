import { ArrayUtils } from "../utils";

export const ACTION_TYPES = {
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
};

export const actions = [
  {
    type: ACTION_TYPES.ADD,
    reducer: (state, action) => {
      state.nodes.push(action.payload);

      return state;
    },
  },
  {
    type: ACTION_TYPES.EDIT,
    reducer: (state, action) => {
      const { uuid } = action;
      const [idx, node] = ArrayUtils.findIndex(state.nodes, { uuid });

      if (idx === -1) {
        console.warn("未找到节点");
        return state;
      }

      const newNode = {...node, ...action.node };

      state.nodes[idx] = newNode;

      return state;
    },
  },
  {
    type: ACTION_TYPES.CLONE,
    reducer: (state, action) => {
      return state;
    },
  },
  {
    type: ACTION_TYPES.REMOVE,
    reducer: (state, action) => {
      const newNodes = state.nodes.filter((v) => v.uuid !== action.uuid);

      state.nodes = newNodes;
      return state;
    },
  },
  {
    type: ACTION_TYPES.MOVE_UP,
    reducer: (state, action) => {
      const { uuid } = action;
      const [idx, node] = ArrayUtils.findIndex(state.nodes, { uuid });

      if (idx === -1) {
        console.warn("未找到节点");
        return state;
      }
      if (idx === 0) {
        console.warn("节点已在最上面了");
        return state;
      }
      const newNodes = ArrayUtils.swap(state.nodes, idx, idx - 1);

      state.nodes = newNodes;
      return state;
    },
  },
  {
    type: ACTION_TYPES.MOVE_DOWN,
    reducer: (state, action) => {
      const { uuid } = action;
      const [idx, node] = ArrayUtils.findIndex(state.nodes, { uuid });

      if (idx === -1) {
        console.warn("未找到节点");
        return state;
      }
      if (idx === state.nodes.length - 1) {
        console.warn("节点已在最下面了");
        return state;
      }
      const newNodes = ArrayUtils.swap(state.nodes, idx, idx + 1);

      state.nodes = newNodes;
      return state;
    },
  },
];
