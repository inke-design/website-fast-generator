Vvveb.Utils = {
  // 生成uuid
  uuid() {
    const time = Date.now();
    const r = Math.random();
    return `${time.toString(36)}-${r.toString(36).substr(2)}`;
  },

  // 生成dom
  generateDom(template = {}, vNode) {
    const { html, css, script } = template;
    const $dom = $(html);

    css && $dom.append($(css));
    script && $dom.append($(script));

    $dom.attr("data-uuid", vNode.uuid);
    $dom.attr("id", vNode.uuid);
    ["type", "name"].forEach((key) => {
      $dom.attr(`data-${key}`, vNode.node[key]);
    });

    return $dom;
  },

  // 判断是否为对象
  isObject(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
  },

  // 浅拷贝
  clone(value) {
    const isArr = Array.isArray(value);

    if (isArr) return [...value];

    if (this.isObject(value)) return { ...value };

    return value;
  },

  // 操作数组
  Array: {
  /**
     * 交换数组位置
     *
     * @param {*} arr 源数组
     * @param {*} index 索引1
     * @param {*} targetIndex 索引2
     * @returns
     */
    swap(arr, index, targetIndex) {
      if(!Array.isArray(arr)) return [];
      if(index < 0 || targetIndex < 0) return arr;
      if(index >= arr.length || targetIndex >= arr.length) return arr;

      let newArr = [...arr];
      let temp = Vvveb.Utils.clone(newArr[targetIndex]);
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
      if(!Array.isArray(arr)) return [];

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
      if(!Array.isArray(arr)) return [];

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
      if(!Array.isArray(arr)) return [];

      return arr.filter((_, idx) => idx !== index);
    }
  },

};
