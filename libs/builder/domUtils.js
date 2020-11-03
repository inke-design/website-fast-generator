Vvveb.domUtils = {
  iframe: $("#iframe-wrapper > iframe"),
  frameDoc: window.FrameDocument,
  $selectedEl: null,
  setIframe: function setIframe(iframe) {
    this.iframe = iframe;
  },
  setFrameDocument: function setFrameDocument(doc) {
    this.frameDoc = doc;
    return this;
  },
  getFilename: function getFilename(name) {
    return name.replace(/\//g, "-");
  },
  getTemplateNode: function getTemplateNode(el) {
    var $el = $(el);

    if ($el.data("uuid")) {
      return $el;
    }

    return $el.parents('[data-component="template"]');
  },
  selectNode: function selectNode(uuid) {
    var selector = "[data-uuid=\"".concat(uuid, "\"]");
    var $frameDoc = $(this.frameDoc);
    this.$selectedEl = $frameDoc.find(selector);
    var el = this.$selectedEl.get(0);

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
        display: "block"
      });
    } catch (err) {
      console.log(err);
      return false;
    }

    this.$selectedEl.css("border", "");
  },
  downloadZip: function downloadZip() {
    if (!this.iframe) return;
    var fakeIframe = document.createElement("iframe");
    var src = $(this.iframe).get(0).src;
    var that = this;
    $(fakeIframe).on("load", function () {
      var fakeIframeDoc = fakeIframe.contentWindow.document;
      var frameHead = fakeIframeDoc.head;
      var frameBody = fakeIframeDoc.body;
      var nodes = Vvveb.Model2.getter("nodes");
      var zip = new JSZip();
      var jsFoler = zip.folder("js");
      var cssFoler = zip.folder("css");
      zip.file("README.txt", "\n        \u6B64\u7F51\u7AD9\u7531\u7F51\u7AD9\u5FEB\u901F\u642D\u5EFA\u5E73\u53F0\u751F\u6210\u3002\n        github\u5730\u5740\uFF1Ahttps://github.com/inke-design/website-fast-generator\n      ");
      fakeIframe.style.display = "none";
      fakeIframe.contentWindow.onerror = that.handleIframeErr;
      var fastDom = new FastDom().loadNodes(nodes); // 构造伪body容器

      var $fakeBody = $();
      fastDom.loadExportModules(fastDom.exportModule, fakeIframeDoc);
      fastDom.vnodes.forEach(function (vnode) {
        var filename = that.getFilename(vnode.node.type);
        $fakeBody = $fakeBody.add(vnode.$html);

        if (vnode.$script) {
          jsFoler.file("".concat(filename, ".js"), vnode.$script.html());
          $(frameBody).append("<script src=\"./js/".concat(filename, ".js\"></script>"));
        }

        if (vnode.$css) {
          cssFoler.file("".concat(filename, ".css"), vnode.$css.html());
          $(frameHead).append("<link rel=\"stylesheet\" href=\"./css/".concat(filename, ".css\"></link>"));
        }
      });
      $(frameBody).prepend($fakeBody);
      zip.file("index.html", fakeIframeDoc.documentElement.outerHTML);
      zip.generateAsync({
        type: "blob"
      }).then(function (content) {
        // see FileSaver.js
        saveAs(content, "\u751F\u6210\u7F51\u9875".concat(new Date().toLocaleDateString(), ".zip"));
        fakeIframe.remove();
      });
    });
    fakeIframe.src = src;
    document.body.appendChild(fakeIframe);
  },
  // 捕获iframe错误
  handleIframeErr: function handleIframeErr(err) {}
};