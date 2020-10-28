// utils
function isObject(val) {
  return typeof val === "object";
}

export class Watcher {
  constructor(proxy, key, cb) {
    this.cb = cb;
    Dep.target = this;
    this.value = proxy[key];
  }
}

class Dep {
  constructor() {
    this.subs = [];
  }
  addSub(sub) {
    this.subs.push(sub);
  }
  notify(newVal) {
    this.subs.forEach((sub) => {
      sub.cb(newVal, sub.value);
      sub.value = newVal;
    });
  }
}

const deps = {};
const extraDepKey = ['undefined', 'null', ''];

export const observe = (obj) => {
  let ctx = null;
  return new Proxy(obj, {
    get: function (target, key, receiver) {
      const dep = (deps[key] = deps[key] || new Dep());
      Dep.target && dep.addSub(Dep.target);
      Dep.target = null;
      const res = Reflect.get(target, key, receiver);
      return isObject(res) ? observe(res) : res;
      return res;
    },
    set: function (target, key, value, receiver) {
      if(target[key] === value) return true;
      const dep = (deps[key] = deps[key] || new Dep());
      Promise.resolve().then(() => {
        dep.notify(value);
        extraDepKey.forEach(k => deps[k] && deps[k].notify(target))
      });
      return Reflect.set(target, key, value, receiver);
    },
  });
};
