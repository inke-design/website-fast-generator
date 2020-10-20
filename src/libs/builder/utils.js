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
};
