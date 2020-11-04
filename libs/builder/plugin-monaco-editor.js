function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Vvveb.MonacoEditorPlugin = {
  isActive: false,
  codemirriorHTML: null,
  codemirriorCss: null,
  codemirriorScript: null,
  // 编辑器模式
  // * mode: template 模板编辑器 design 创作模式编辑器
  mode: 'template',
  value: {
    html: '',
    css: '',
    script: ''
  },
  init: function init() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // if(this.htmlEditor && this.cssEditor && this.scriptEditor) {
    //   this.resetValue().setCodeEditorValue();
    //   return this;
    // }      
    this.mode = options.mode; // 生成编辑器实例

    var htmlEl = document.querySelector("#vvveb-code-editor-content");
    var cssEl = document.querySelector("#vvveb-code-editor-style");
    var scriptEl = document.querySelector("#vvveb-code-editor-advanced");
    var that = this;
    this.htmlEditor = new Vvveb.MonacoEditor({
      el: htmlEl,
      lang: 'html',
      initValue: 'function(){}',
      onBlur: function onBlur(value) {
        that.updateNode({
          html: value
        }, 'html');
      }
    });
    this.cssEditor = new Vvveb.MonacoEditor({
      el: cssEl,
      lang: 'css',
      initValue: '.a {}',
      onBlur: function onBlur(value) {
        that.updateNode({
          css: value
        }, 'css');
      }
    });
    this.scriptEditor = new Vvveb.MonacoEditor({
      el: scriptEl,
      lang: 'javascript',
      initValue: 'console.log(1)',
      onBlur: function onBlur(value) {
        that.updateNode({
          script: value
        }, 'script');
      }
    }); // 将数据回填并刷新编辑器

    this.setCodeEditorValue();
    this.setEditorLayout();
  },
  // 编辑器数据回填
  setCodeEditorValue: function setCodeEditorValue() {
    var _this$value = this.value,
        _this$value$html = _this$value.html,
        html = _this$value$html === void 0 ? '' : _this$value$html,
        _this$value$css = _this$value.css,
        css = _this$value$css === void 0 ? '' : _this$value$css,
        _this$value$script = _this$value.script,
        script = _this$value$script === void 0 ? '' : _this$value$script;
    this.htmlEditor && this.htmlEditor.setValue(html);
    this.cssEditor && this.cssEditor.setValue(this.replaceTag(css));
    this.scriptEditor && this.scriptEditor.setValue(this.replaceTag(script));
    return this;
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
    return this;
  },
  resetValue: function resetValue() {
    this.value = {};
    return this;
  },
  // 更新节点
  updateNode: function updateNode(params, field) {
    var _this = this;

    var uuid = this.value.uuid;
    var oldValue = this.value[field];
    var newValue = params[field];
    if (oldValue === newValue) return;
    Object.keys(params).forEach(function (key) {
      params[key] = _this.wrapCode(field, params[key]);
    });
    var nodeData = Vvveb.Model2.getter(function (_ref) {
      var nodes = _ref.nodes;
      return nodes.find(function (v) {
        return v.uuid === uuid;
      });
    });

    if (!nodeData && this.mode === 'design') {
      Vvveb.Model2.dispatch({
        type: 'ADD',
        payload: _objectSpread(_objectSpread({}, params), {}, {
          uuid: uuid
        })
      });
    } else {
      Vvveb.Model2.dispatch({
        type: 'EDIT',
        uuid: uuid,
        node: params
      });
    }
  },
  // 销毁
  destroy: function destroy(element) {
    this.htmlEditor && this.htmlEditor.destroy();
    this.cssEditor && this.cssEditor.destroy();
    this.scriptEditor && this.scriptEditor.destroy();
  },
  // 切换状态
  toggle: function toggle() {
    this.isActive = !this.isActive; // $("#vvveb-builder").toggleClass("bottom-panel-expand");

    $("#bottom-panel").css("height", this.isActive ? '65vh' : 50);
    this.setEditorLayout();
  },
  // 关闭编辑器弹窗
  closeCodeEditor: function closeCodeEditor() {
    if (!this.isActive) return;
    this.isActive = false;
    $("#bottom-panel").css("height", 50);
    this.setEditorLayout();
  },
  replaceTag: function replaceTag(str) {
    if (!str) return '';
    return str.replace(/(<script.*>)|(<\/script>)|(<s.*>)|(<\/style>)/g, '');
    ;
  },
  wrapCode: function wrapCode(type, code) {
    switch (type) {
      case 'css':
        {
          return "<style type=\"text/css\">\n".concat(code, "\n</style>");
        }

      case 'script':
        {
          return "<script>\n".concat(code, "\n</script>");
        }

      default:
        {
          return code;
        }
    }
  },
  setEditorLayout: function setEditorLayout() {
    if (this.isActive) {
      var height = $(".codeEditor.tab-content").height();
      var width = $(".codeEditor.tab-content").width();
      this.htmlEditor && this.htmlEditor.getInstance().layout({
        width: width,
        height: height
      });
      this.cssEditor && this.cssEditor.getInstance().layout({
        width: width,
        height: height
      });
      this.scriptEditor && this.scriptEditor.getInstance().layout({
        width: width,
        height: height
      });
    }

    return this;
  },
  setActive: function setActive(isActive) {
    this.isActive = isActive;

    if (this.isActive) {
      this.setEditorLayout();
    }

    return this;
  }
};