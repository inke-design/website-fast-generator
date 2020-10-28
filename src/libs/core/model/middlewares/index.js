import { uuid } from "../../utils";

// 打印日志中间件
export const logger = ({ dispatch, getState } = {}) => {
  if (typeof dispatch === "function" || typeof getState === "function") {
    return (next) => (action) => {
      console.log("looger", action);
      return next(action);
    };
  }
};

// 生成uuid中间件
export const uuidMiddleware = ({ dispatch, getState } = {}) => {
  if (typeof dispatch === "function" || typeof getState === "function") {
    return (next) => (action) => {
      const uid = uuid();
      const payload = { ...action.payload };
      if (action.payload && !payload.uuid) {
        payload.uuid = uid;
        console.log("生成uuid", uid);
      }
      Vvveb.Builder.activeUUID = uid;
      return next({ ...action, payload });
    };
  }
};

// 加载页面编辑器页面模块列表中间
export const loadSectionsMiddleWare = ({ dispatch, getState } = {}) => {
  if (typeof dispatch === "function" || typeof getState === "function") {
    return (next) => (action) => {
      setTimeout(() => {
        Vvveb.Sections.loadSections();
      }, 200);
      return next(action);
    };
  }
};
