function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// utils
function isObject(val) {
  return _typeof(val) === "object";
}

export var Watcher = function Watcher(proxy, key, cb) {
  _classCallCheck(this, Watcher);

  this.cb = cb;
  Dep.target = this;
  this.value = proxy[key];
};

var Dep = /*#__PURE__*/function () {
  function Dep() {
    _classCallCheck(this, Dep);

    this.subs = [];
  }

  _createClass(Dep, [{
    key: "addSub",
    value: function addSub(sub) {
      this.subs.push(sub);
    }
  }, {
    key: "notify",
    value: function notify(newVal) {
      this.subs.forEach(function (sub) {
        sub.cb(newVal, sub.value);
        sub.value = newVal;
      });
    }
  }]);

  return Dep;
}();

var deps = {};
var extraDepKey = ['undefined', 'null', ''];
export var observe = function observe(obj) {
  var ctx = null;
  return new Proxy(obj, {
    get: function get(target, key, receiver) {
      var dep = deps[key] = deps[key] || new Dep();
      Dep.target && dep.addSub(Dep.target);
      Dep.target = null;
      var res = Reflect.get(target, key, receiver);
      return isObject(res) ? observe(res) : res;
      return res;
    },
    set: function set(target, key, value, receiver) {
      if (target[key] === value) return true;
      var dep = deps[key] = deps[key] || new Dep();
      Promise.resolve().then(function () {
        dep.notify(value);
        extraDepKey.forEach(function (k) {
          return deps[k] && deps[k].notify(target);
        });
      });
      return Reflect.set(target, key, value, receiver);
    }
  });
};