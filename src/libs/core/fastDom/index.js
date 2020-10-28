import { uuid } from "../utils";
function FastDom() {
  this.vnodes = [];
}

FastDom.prototype.init = function () {
  this.vnodes = [];
  return this;
};

FastDom.prototype.loadNodes = function (nodes) {
  this.nodes = nodes;

  this.nodes.forEach((node) => {
    const vnode = this.render(node);
    this.vnodes.push(vnode);
  });

  return this;
};

FastDom.prototype.render = function (node) {
  const vnode = { node };

  vnode.uuid = node.uuid || uuid();

  ["html", "css", "script"].forEach((sniptKey) => {
    if (node[sniptKey]) {
      const $dom = $(node[sniptKey]);

      vnode[`$${sniptKey}`] = $dom;
      if (sniptKey === "html") {
        $dom.attr("data-uuid", vnode.uuid);
        $dom.attr("data-component", "template");
        $dom.attr("id", vnode.uuid);
        ["type", "name"].forEach((key) => {
          $dom.attr(`data-${key}`, vnode.node[key]);
        });
      } else {
        $dom.attr("data-uuid", `${sniptKey}-${vnode.uuid}`);
      }
    }
  });

  return vnode;
};


FastDom.prototype.renderDom = function(doc) {
  console.log('this.vnodes',this.nodes, this.vnodes)
  const docHead = doc.head;
  const docBody =  doc.body;

  let fakeHead = $();
  let fakeBody = $();
  let fakeScript = $();

  this.vnodes.forEach(vnode => {
    fakeHead = fakeHead.add(vnode.$css);
    fakeBody = fakeBody.add(vnode.$html);
    fakeScript = fakeScript.add(vnode.$script);
  })

  $(docHead).append(fakeHead);
  $(docBody).html('').append(fakeBody).append(fakeScript);
}



export default FastDom;