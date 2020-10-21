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

  /**
   * 交换数组位置
   *
   * @export
   * @param {*} arr 源数组
   * @param {*} index 索引1
   * @param {*} targetIndex 索引2
   * @returns
   */
  swapArray(arr, index, targetIndex) {
    if(index < 0 || targetIndex < 0) return arr;
    if(index >= arr.length || targetIndex >= arr.length) return arr;

    let newArr = [...arr];
    let temp = this.clone(newArr[targetIndex]);
    newArr[targetIndex] = newArr[index];
    newArr[index] = temp;
    return newArr;
  },
};
