Vvveb.CodeEditorMore = {
	
	isActive: false,
	doc:false,
  codemirriorHTML: null,
  codemirriorCss: null,
  codemirriorScript: null,
  value: {
    html: '',
    css: '',
    script: ''
  },

	
	init: function(doc) {

      const { html, css, script } = this.value
      // 生成html编辑器
			this.codemirriorHTML = CodeMirror.fromTextArea(document.querySelector("#vvveb-code-editor-content"), {
				mode: 'text/html',
				// lineNumbers: true,
				autofocus: true,
				lineWrapping: true,
				// viewportMargin:Infinity,
        theme: 'material',
      });
      this.codemirriorCss= CodeMirror.fromTextArea(document.querySelector("#vvveb-code-editor-style"), {
				mode: 'css',
				// lineNumbers: true,
				// autofocus: true,
				lineWrapping: true,
				// viewportMargin:Infinity,
        theme: 'material',
      });
      this.codemirriorScript = CodeMirror.fromTextArea(document.querySelector("#vvveb-code-editor-advanced"), {
				mode: 'javascript',
				// lineNumbers: true,
				// autofocus: true,
				lineWrapping: true,
				// viewportMargin:Infinity,
        theme: 'material',
      });
      console.log(this.codemirriorHTML, this.codemirriorCss, this.codemirriorScript)
      this.codemirriorHTML.setValue(html)
      this.codemirriorCss.setValue(css)
      this.codemirriorScript.setValue(script)
      // 编辑器失去焦点触发数据更新
      const that = this
			this.codemirriorHTML.on("blur", function (e, v) { 
        that.uplateNode({ html: e.getValue() })
      });
      this.codemirriorCss.on("blur", function (e, v) { 
        that.uplateNode({ css: e.getValue() })
      });
      this.codemirriorScript.on("blur", function (e, v) { 
				that.uplateNode({ script: e.getValue() })
      });
		
		
		//load code on document changes
		Vvveb.Builder.frameBody.on("vvveb.undo.add vvveb.undo.restore", function (e) { Vvveb.CodeEditor.setValue(e);});
		//load code when a new url is loaded
		// Vvveb.Builder.documentFrame.on("load", function (e) { Vvveb.CodeEditor.setValue();});
		// this.setValue();
	},

  // 设置value初始值
	setValue: function(value) {
		this.value = { ...value }
  },
  
  // 更新节点
  uplateNode: function (params) {
    const { uuid } = this.value
    console.log(uuid, params)
    Vvveb.Model.dispatch({
      type: Vvveb.Model.TYPES.EDIT,
      uuid,
      node: params,
    })
  },

  // 销毁
	destroy: function(element) {
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

	toggle: function() {
		if (this.isActive != true)
		{
			this.isActive = true;
			return this.init();
		}
		this.isActive = false;
		this.destroy();
  }
  
  
}
