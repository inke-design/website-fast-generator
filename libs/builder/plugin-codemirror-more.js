function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Vvveb.CodeEditorMore = {
  isActive: false,
  codemirriorHTML: null,
  codemirriorCss: null,
  codemirriorScript: null,
  value: {
    html: '',
    css: '',
    script: ''
  },
  init: function init() {
    // 生成编辑器实例
    this.codemirriorHTML = this.createCodeEditor(document.querySelector("#vvveb-code-editor-content"), {
      mode: 'text/html',
      lineWrapping: true,
      theme: 'material'
    });
    this.codemirriorCss = this.createCodeEditor(document.querySelector("#vvveb-code-editor-style"), {
      mode: 'css',
      lineWrapping: true,
      theme: 'material'
    });
    this.codemirriorScript = this.createCodeEditor(document.querySelector("#vvveb-code-editor-advanced"), {
      mode: 'javascript',
      lineWrapping: true,
      theme: 'material'
    }); // 将数据回填并刷新编辑器

    this.setCodeEditorValue();
    this.refresh(); // 编辑器绑定失去焦点触发数据更新事件

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
    });
  },
  // 创建文本编辑器
  createCodeEditor: function createCodeEditor(dom, option) {
    return CodeMirror.fromTextArea(dom, option);
  },
  // 编辑器数据回填
  setCodeEditorValue: function setCodeEditorValue() {
    var _this$value = this.value,
        html = _this$value.html,
        css = _this$value.css,
        script = _this$value.script;
    this.codemirriorHTML && this.codemirriorHTML.setValue(html);
    this.codemirriorCss && this.codemirriorCss.setValue(css);
    this.codemirriorScript && this.codemirriorScript.setValue(script);
  },
  // 编辑器刷新
  refresh: function refresh() {
    this.codemirriorHTML && this.codemirriorHTML.refresh();
    this.codemirriorCss && this.codemirriorCss.refresh();
    this.codemirriorScript && this.codemirriorScript.refresh();
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
    if (!this.codemirriorHTML) return;
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
  // 切换状态
  toggle: function toggle() {
    this.isActive = !this.isActive;
    $("#vvveb-builder").toggleClass("bottom-panel-expand");
  },
  // 关闭编辑器弹窗
  closeCodeEditor: function closeCodeEditor() {
    if (!this.isActive) return;
    this.isActive = false;
    $("#vvveb-builder").removeClass("bottom-panel-expand");
  }
};