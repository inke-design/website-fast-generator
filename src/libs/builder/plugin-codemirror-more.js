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
	
	init: function() {
      // 生成编辑器实例
			this.codemirriorHTML = this.createCodeEditor(document.querySelector("#vvveb-code-editor-content"), {
        mode: 'text/html',
				lineWrapping: true,
        theme: 'material',
        lineNumbers: true,
      });
      this.codemirriorCss= this.createCodeEditor(document.querySelector("#vvveb-code-editor-style"), {
        mode: 'css',
				lineWrapping: true,
        theme: 'material',
        lineNumbers: true,
      });
      this.codemirriorScript = this.createCodeEditor(document.querySelector("#vvveb-code-editor-advanced"), {
        mode: 'javascript',
				lineWrapping: true,
        theme: 'material',
        lineNumbers: true,
      });
      // 将数据回填并刷新编辑器
      this.setCodeEditorValue()
      this.refresh()
      // this.setShowHint()
      // 编辑器绑定失去焦点触发数据更新事件
      const that = this
			this.codemirriorHTML.on("blur", function (e, v) { 
        that.uplateNode({ html: e.getValue() }, 'html')
      });
      this.codemirriorCss.on("blur", function (e, v) { 
        that.uplateNode({ css: e.getValue() }, 'css')
      });
      this.codemirriorScript.on("blur", function (e, v) { 
				that.uplateNode({ script: e.getValue() }, 'script')
      });
  },

  // 创建文本编辑器
  createCodeEditor: function (dom, option) {
    return  CodeMirror.fromTextArea(dom, option);
  },

  // 编辑器数据回填
  setCodeEditorValue: function () {
    const { html, css, script } = this.value;
    this.codemirriorHTML && this.codemirriorHTML.setValue(html)
    this.codemirriorCss && this.codemirriorCss.setValue(css)
    this.codemirriorScript && this.codemirriorScript.setValue(script)
  },

  // 编辑器刷新
  refresh: function () {
    this.codemirriorHTML && this.codemirriorHTML.refresh()
    this.codemirriorCss && this.codemirriorCss.refresh()
    this.codemirriorScript && this.codemirriorScript.refresh()
  },

  // 编辑器设置代码补全
  setShowHint: function () {
    this.codemirriorHTML && this.codemirriorHTML.on("cursorActivity", () => {
      this.codemirriorHTML.showHint();
    });  
    this.codemirriorCss && this.codemirriorCss.on("cursorActivity", () => {
      this.codemirriorCss.showHint();
    });  
    this.codemirriorScript && this.codemirriorScript.on("cursorActivity", () => {
      this.codemirriorScript.showHint();
    });  
  },

  // 设置value初始值
	setValue: function(value) {
		this.value = { ...value }
  },
  
  // 更新节点
  uplateNode: function (params, field) {
    const { uuid } = this.value
    const oldValue = this.value[field]
    const newValue = params[field]
    if(oldValue === newValue) return
    Vvveb.Model.dispatch({
      type: Vvveb.Model.TYPES.EDIT,
      uuid,
      node: params,
    })
  },

  // 销毁
	destroy: function(element) {
    if(!this.codemirriorHTML) return
    this.codemirriorHTML && this.codemirriorHTML.toTextArea()
    this.codemirriorCss && this.codemirriorCss.toTextArea()
    this.codemirriorScript && this.codemirriorScript.toTextArea()
    this.value = {
      html: '',
      css: '',
      script: ''
    }
		this.codemirriorHTML = null
    this.codemirriorCss = null
    this.codemirriorScript = null
	},

  // 切换状态
	toggle: function() {
    this.isActive = !this.isActive
    $("#vvveb-builder").toggleClass("bottom-panel-expand");
  },

  // 关闭编辑器弹窗
  closeCodeEditor: function() {
    if(!this.isActive) return
    this.isActive = false
    $("#vvveb-builder").removeClass("bottom-panel-expand");
  }
}
