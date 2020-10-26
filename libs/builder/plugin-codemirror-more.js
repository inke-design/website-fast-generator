function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Vvveb.CodeEditorMore = {
  isActive: false,
  doc: false,
  codemirriorHTML: null,
  codemirriorCss: null,
  codemirriorScript: null,
  value: {
    html: '',
    css: '',
    script: ''
  },
  init: function init(doc) {
    var _this$value = this.value,
        html = _this$value.html,
        css = _this$value.css,
        script = _this$value.script; // 生成html编辑器

    this.codemirriorHTML = CodeMirror.fromTextArea(document.querySelector("#vvveb-code-editor-content"), {
      mode: 'text/html',
      // lineNumbers: true,
      // autofocus: true,
      lineWrapping: true,
      // viewportMargin:Infinity,
      theme: 'material'
    });
    this.codemirriorCss = CodeMirror.fromTextArea(document.querySelector("#vvveb-code-editor-style"), {
      mode: 'css',
      // lineNumbers: true,
      // autofocus: true,
      lineWrapping: true,
      // viewportMargin:Infinity,
      theme: 'material'
    });
    this.codemirriorScript = CodeMirror.fromTextArea(document.querySelector("#vvveb-code-editor-advanced"), {
      mode: 'javascript',
      // lineNumbers: true,
      // autofocus: true,
      lineWrapping: true,
      // viewportMargin:Infinity,
      theme: 'material'
    });
    this.codemirriorHTML.setValue(html);
    this.codemirriorCss.setValue(css);
    this.codemirriorScript.setValue(script); // 编辑器失去焦点触发数据更新

    var that = this;
    this.codemirriorHTML.on("blur", function (e, v) {
      that.uplateNode({
        html: e.getValue()
      }, 'html');
    });
    this.codemirriorCss.on("blur", function (e, v) {
      that.uplateNode({
        css: e.getValue()
      }, 'css');
    });
    this.codemirriorScript.on("blur", function (e, v) {
      that.uplateNode({
        script: e.getValue()
      }, 'script');
    }); //load code on document changes
    // Vvveb.Builder.frameBody.on("vvveb.undo.add vvveb.undo.restore", function (e) { Vvveb.CodeEditor.setValue(e);});
    //load code when a new url is loaded
    // Vvveb.Builder.documentFrame.on("load", function (e) { Vvveb.CodeEditor.setValue();});
    // this.setValue();
  },
  // 设置value初始值
  setValue: function setValue(value) {
    this.value = _objectSpread({}, value);
  },
  // 更新节点
  uplateNode: function uplateNode(params, field) {
    var uuid = this.value.uuid;
    var oldValue = this.value[field];
    var newValue = params[field];
    if (oldValue === newValue) return;
    Vvveb.Model.dispatch({
      type: Vvveb.Model.TYPES.EDIT,
      uuid: uuid,
      node: params
    });
  },
  // 销毁
  destroy: function destroy(element) {
    this.codemirriorHTML && this.codemirriorHTML.toTextArea();
    this.codemirriorCss && this.codemirriorCss.toTextArea();
    this.codemirriorScript && this.codemirriorScript.toTextArea();
    this.value = {
      html: '',
      css: '',
      script: ''
    };
    this.codemirriorHTML = null;
    this.codemirriorCss = null;
    this.codemirriorScript = null;
  },
  toggle: function toggle() {
    if (this.isActive != true) {
      this.isActive = true;
      return this.init();
    }

    this.isActive = false;
    this.destroy();
  }
};