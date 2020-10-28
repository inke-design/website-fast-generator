import { uuid } from "../../utils";

export const logger = ({ dispatch, getState } = {}) => {
  if (typeof dispatch === "function" || typeof getState === "function") {
    return (next) => (action) => {
      console.log("looger", action);
      return next(action);
    };
  }
};

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
