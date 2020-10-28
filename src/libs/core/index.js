import Model from "./model";
import { logger, uuidMiddleware } from "./model/middlewares";
import FastDom from './fastDom';
import { actions } from './actions';

// 初始化model
const model = new Model({
  // 配置初始state
  state: {
    nodes: [],
  },
  // 配置中间件
  middlewares: [uuidMiddleware, logger ],
});

// 注册action
model.install("action", actions);


// 订阅数据流改变
model.subscribe((newVal, oldVal, state) => {
  const fastDom = new FastDom();

  // vnode => dom
  fastDom
    .loadNodes(state.nodes)
    .renderDom(window.FrameDocument);
}, []);

// 挂载到Vvveb上
Vvveb.Model2 = model;

// es Module
export default model;
