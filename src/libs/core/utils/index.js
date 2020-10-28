// 判断是否为对象
export function isObject(value) {
  return Object.prototype.toString.call(value) === "[object Object]";
}

export function isEmpty(val) {
  if (val === null || val === undefined || val === "") return true;
  if (isObject(val)) return Object.keys(val) === 0;
  if (Array.isArray(val)) return val.length === 0;

  return false;
}

// 浅拷贝
export function clone(value) {
  const isArr = Array.isArray(value);

  if (isArr) return [...value];

  if (isObject(value)) return { ...value };

  return value;
}

export function uuid() {
  const time = Date.now();
  const r = Math.random();
  return `${time.toString(36)}-${r.toString(36).substr(2)}`;
}

export function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}

// 操作数组
export const ArrayUtils = {
  /**
   * 交换数组位置
   *
   * @param {*} arr 源数组
   * @param {*} index 索引1
   * @param {*} targetIndex 索引2
   * @returns
   */
  swap(arr, index, targetIndex) {
    if (!Array.isArray(arr)) return [];
    if (index < 0 || targetIndex < 0) return arr;
    if (index >= arr.length || targetIndex >= arr.length) return arr;

    let newArr = [...arr];
    let temp = clone(newArr[targetIndex]);
    newArr[targetIndex] = newArr[index];
    newArr[index] = temp;
    return newArr;
  },

  /**
   * 在数组中插入一个值
   *
   * @param {Array} arr 数组
   * @param {Number} index 开始索引
   * @param {any} value 值
   * @return {Array}
   */
  insert(arr, index, value) {
    if (!Array.isArray(arr)) return [];

    arr.splice(index, 0, value);
    return arr;
  },

  /**
   * 从数组中替换一个值
   *
   * @param {Array} arr 数组
   * @param {Number} index 替换索引
   * @param {any} value 新值
   * @return {Array}
   */
  replace(arr, index, value) {
    if (!Array.isArray(arr)) return [];

    arr.splice(index, 1, value);
    return arr;
  },

  /**
   * 从数组中移除一个值
   *
   * @param {Array} arr 数组
   * @param {Number} index 开始索引
   * @return {Array}
   */
  remove(arr, index) {
    if (!Array.isArray(arr)) return [];

    return arr.filter((_, idx) => idx !== index);
  },
  /**
   * 对象查找索引
   *
   * @param {*} arr
   * @param {*} obj
   */
  findIndex(arr, obj) {
    let idx = -1;

    const value = arr.find((v, index) => {
      const isMatch = Object.keys(obj).every((key) => {
        return obj[key] === v[key];
      });
      if (isMatch) {
        idx = index;
        return true;
      }
    });

    return [idx, value];
  },
};
