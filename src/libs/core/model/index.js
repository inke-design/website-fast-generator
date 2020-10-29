import { observe, Watcher } from "../observer";
import { isEmpty, compose } from "../utils/index";

export default class Model {
  constructor({ state = {}, middlewares = [] }) {
    this.store = observe(state);

    this.INSTALL_TYPES = {
      action: "action",
    };

    this.actions = {};

    this.middlewares = middlewares;

    this._initMiddleWares(this.middlewares);
  }

  getState() {
    return this.store;
  }

  setState(state) {
    this.store = state;
  }

  dispatch = (action) => {
    return this._beforeDispatch(() => {
      const actionType = action.type;
      const actionCfg = this.actions[actionType];
      if (actionCfg) {
        const { reducer } = actionCfg;
        const state = this.getState();
        const newState = reducer(state, action);
  
        this.setState(newState);
      } else {
        console.warn(`dispatch ${action.type}尚未注册`);
      }
    });
  }

  install(type, config) {
    switch (type) {
      case this.INSTALL_TYPES.action: {
        this._addAction(config);
      }
      default: {
      }
    }
  }

  getter() {
    /**
     * TODO:
     */
  }

  subscribe(fn, keys) {
    this._addWatcher(keys, fn);
  }

  _addAction(config) {
    if(Array.isArray(config)) {
      config.forEach(action => {
        this.actions[action.type] = action;
      })
      return;
    }
    this.actions[config.type] = config;
    
  }

  _addWatcher(keys, fn) {
    if (isEmpty(keys)) {
      new Watcher(this.store, undefined, (newVal, oldVal, state) => {
        fn(newVal, oldVal, this.getState());
      });
      return;
    }

    keys.forEach((watchKey) => {
      new Watcher(this.store, watchKey, (newVal, oldVal, state) => {
        fn(newVal, oldVal, this.getState());
      });
    });
  }

  _applyMiddleware(middlewares) {
    const store = this.store;
    let dispatch = this.dispatch;
    const middlewareAPI = {
      getState: this.getState,
      dispatch: (action) => dispatch(action),
    };
    const chain = middlewares.map((middleware) => middleware(middlewareAPI));

    dispatch = compose(...chain)(dispatch);
    return dispatch;
  }

  _beforeDispatch(fn){
    return new Promise((resolve, reject) => {
      try {
        fn();
        resolve();
      } catch(err) {
        reject(err);
      }
    });
  }

  _initMiddleWares(middlewares) {
    if(!isEmpty(middlewares)) {
      this._dispatch = this.dispatch;

      this.dispatch = this._applyMiddleware(middlewares);
    }
  }
}
