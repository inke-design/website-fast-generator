Vvveb.domUtils = {
  frameDoc: window.FrameDocument,
  $selectedEl: null,

  setFrameDocument(doc) {
    this.frameDoc = doc;
    return this;
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
};
