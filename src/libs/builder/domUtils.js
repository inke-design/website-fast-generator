
Vvveb.domUtils = {
  iframe: $("#iframe-wrapper > iframe"),
  frameDoc: window.FrameDocument,
  $selectedEl: null,

  setIframe(iframe) {
    this.iframe = iframe;
  },

  setFrameDocument(doc) {
    this.frameDoc = doc;
    return this;
  },

  getFilename(name) {
    return name.replace(/\//g, "-");
  },

  getTemplateNode(el) {
    const $el = $(el);

    if($el.data("uuid")) {
      return $el;
    }

    return $el.parents('[data-component="template"]');
  },

  selectNode(uuid) {
    const selector = `[data-uuid="${uuid}"]`;
    const $frameDoc = $(this.frameDoc);
    this.$selectedEl = $frameDoc.find(selector);
    const el = this.$selectedEl.get(0);

    if (!el) {
      $("#select-box").hide();
      return;
    }

    try {
      var offset = this.$selectedEl.offset();

      $("#select-box").css({
        top: offset.top - $frameDoc.scrollTop(),
        left: offset.left - $frameDoc.scrollLeft(),
        width: this.$selectedEl.outerWidth(),
        height: this.$selectedEl.outerHeight(),
        display: "block",
      });
    } catch (err) {
      console.log(err);
      return false;
    }

    this.$selectedEl.css("border", "");
  },

  downloadZip() {
    if(!this.iframe) return;

    const fakeIframe = document.createElement("iframe");
    const src = $(this.iframe).get(0).src;
    const that = this;

    $(fakeIframe).on("load", function() {
      const fakeIframeDoc = fakeIframe.contentWindow.document;
      const frameHead = fakeIframeDoc.head;
      const frameBody = fakeIframeDoc.body;

      const nodes = Vvveb.Model2.getter("nodes");
      const zip = new JSZip();

      const jsFoler = zip.folder("js");
      const cssFoler = zip.folder("css");

      zip.file("README.txt", `
        此网站由网站快速搭建平台生成。
        github地址：https://github.com/inke-design/website-fast-generator
      `);

      fakeIframe.style.display = "none";

      const fastDom = new FastDom().loadNodes(nodes);
      // 构造伪body容器
      let $fakeBody = $();

      fastDom.loadExportModules(fastDom.exportModule, fakeIframeDoc);

      fastDom.vnodes.forEach((vnode) => {
        const filename = that.getFilename(vnode.node.type);
        
        $fakeBody = $fakeBody.add(vnode.$html);

        if(vnode.$script) {
          jsFoler.file(`${filename}.js`, vnode.$script.html());

          $(frameBody).append(`<script src="./js/${filename}.js"></script>`)
        }

        if(vnode.$css) {
          cssFoler.file(`${filename}.css`, vnode.$css.html());

          $(frameHead).append(`<link rel="stylesheet" href="./css/${filename}.css"></link>`)
        }
      });
      
      $(frameBody).prepend($fakeBody);

      zip.file("index.html", fakeIframeDoc.documentElement.outerHTML);

      zip.generateAsync({ type: "blob" }).then(function (content) {
        // see FileSaver.js
        saveAs(content, `生成网页${new Date().toLocaleDateString()}.zip`);
        fakeIframe.remove();
      });
    });

    fakeIframe.src = src;
    document.body.appendChild(fakeIframe);
  },
};
