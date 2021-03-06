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
	
	init: function(options = {}) {
      // if(this.htmlEditor && this.cssEditor && this.scriptEditor) {
      //   this.resetValue().setCodeEditorValue();
      //   return this;
      // }      
      this.mode = options.mode;

      // 生成编辑器实例
      const htmlEl = document.querySelector("#vvveb-code-editor-content");
      const cssEl = document.querySelector("#vvveb-code-editor-style");
      const scriptEl = document.querySelector("#vvveb-code-editor-advanced");
      const that = this;

			this.htmlEditor = new Vvveb.MonacoEditor({
        el: htmlEl,
        lang: 'html',
        initValue: 'function(){}',
        onBlur: (value) => {
          that.updateNode({ html: value }, 'html');
        },
      });

      this.cssEditor = new Vvveb.MonacoEditor({
        el: cssEl,
        lang: 'css',
        initValue: '.a {}',
        onBlur: (value) => {
          that.updateNode({ css: value }, 'css');
        },
      });

      this.scriptEditor = new Vvveb.MonacoEditor({
        el: scriptEl,
        lang: 'javascript',
        initValue: 'console.log(1)',
        onBlur: (value) => {
          that.updateNode({ script: value }, 'script');
        },
      });

      // 将数据回填并刷新编辑器
      this.setCodeEditorValue()
      this.setEditorLayout();
  },

  // 编辑器数据回填
  setCodeEditorValue: function () {
    const { html = '', css = '', script = '' } = this.value;

    this.htmlEditor && this.htmlEditor.setValue(html)
    this.cssEditor && this.cssEditor.setValue(this.replaceTag(css))
    this.scriptEditor && this.scriptEditor.setValue(this.replaceTag(script));

    return this;
  },

  // 编辑器刷新
  refresh: function () {
    this.codemirriorHTML && this.codemirriorHTML.refresh();
    this.codemirriorCss && this.codemirriorCss.refresh();
    this.codemirriorScript && this.codemirriorScript.refresh();
  },

  // 设置value初始值
	setValue: function(value) {
    if(value.html) {
      value.html = this.wrapCode('html', value.html);
    }

    this.value = { ...value }
    
    return this;
  },

  resetValue() {
    this.value = { }
    
    return this;
  },
  
  // 更新节点
  updateNode: function (params, field) {
    const { uuid } = this.value
    const oldValue = this.value[field]
    const newValue = params[field]

    if(oldValue === newValue) return

    Object.keys(params).forEach(key => {
      params[key] = this.wrapCode(field, params[key])
    });

		const nodeData = Vvveb.Model2.getter(({ nodes }) => nodes.find(v => v.uuid === uuid));


    if(!nodeData && this.mode === 'design') {
      Vvveb.Model2.dispatch({
        type: 'ADD',
        payload: { ...params, uuid: uuid },
      })
    } else {
      Vvveb.Model2.dispatch({
        type: 'EDIT',
        uuid,
        node: params,
      })
    }
  },

  // 销毁
	destroy: function(element) {
    this.htmlEditor && this.htmlEditor.destroy();
    this.cssEditor && this.cssEditor.destroy();
    this.scriptEditor && this.scriptEditor.destroy();
	},

  // 切换状态
	toggle: function() {
    this.isActive = !this.isActive
    // $("#vvveb-builder").toggleClass("bottom-panel-expand");
    $("#bottom-panel").css("height", this.isActive ? '65vh' : 50);
    this.setEditorLayout()
  },

  // 关闭编辑器弹窗
  closeCodeEditor: function() {
    if(!this.isActive) return
    this.isActive = false
    $("#bottom-panel").css("height", 50);
    this.setEditorLayout()
  },

  replaceTag(str) {
    if(!str) return '';
    return str.replace(/(<script.*>)|(<\/script>)|(<s.*>)|(<\/style>)/g, '');;
  },

  wrapCode(type, code) {
    switch(type) {
      case 'html': {
        const $html = $(code)
        if($html.length > 1) {
          return $("<section></section>").append($html).get(0).outerHTML;
        }
        return code;
      }
      case 'css': {
        return `<style type="text/css">\n${code}\n</style>`;
      }
      case 'script': {
        return `<script>\n${code}\n</script>`;
      }
      default: {
        return code;
      }
    }
  },

  setEditorLayout() {
    if(this.isActive) {
      const height = $(".codeEditor.tab-content").height();
      const width = $(".codeEditor.tab-content").width();

      this.htmlEditor && this.htmlEditor.getInstance().layout({ 
        width,
        height,
      });

      this.cssEditor && this.cssEditor.getInstance().layout({ 
        width,
        height,
      });

      this.scriptEditor && this.scriptEditor.getInstance().layout({ 
        width,
        height,
      });
    }

    return this;
  },

  setActive(isActive) {
    this.isActive = isActive;

    if(this.isActive) {
      this.setEditorLayout();
    }

    return this;
  }
}
