import * as monaco from 'monaco-editor';

self.MonacoEnvironment = {
	getWorkerUrl: function (moduleId, label) {
		if (label === 'json') {
			return './json.worker.js';
		}
		if (label === 'css') {
			return './css.worker.js';
		}
		if (label === 'html') {
			return './html.worker.js';
		}
		if (label === 'typescript' || label === 'javascript') {
			return './ts.worker.js';
		}
		return './editor.worker.js';
	}
};

// 注册css格式化
monaco.languages.registerDocumentFormattingEditProvider('css', {
  async provideDocumentFormattingEdits(model, options, token) {
    const prettier = await import('prettier/standalone');
    const cssParser = await import('prettier/parser-postcss');
    const text = prettier.format(model.getValue(), {
      parser: 'css',
      plugins: [cssParser],
    });

    return [
      {
        range: model.getFullModelRange(),
        text,
      },
    ];
  },
});

class MonacoEditor {
  constructor(config) {
    const { el, initValue, lang = 'javascript', onChange, onBlur, theme = 'vs' } = config;

    this.el = el;
    this.initValue = initValue;
    this.lang = lang;
    this.onChange = onChange; 
    this.onBlur = onBlur; 
    this.theme = theme;

    this._create();
  }

  getInstance() {
    return this.editor;
  }

  _create() {
    const editor = monaco.editor.create(this.el, {
      value: this.initValue,
      language: this.lang,
      theme: this.theme,
      automaticLayout: true,
    });

    this.editor = editor;

    this._initFns();
  }

  // 设置编辑内容
  setValue(value) {
    return this.editor.setValue(value);
  }

  // 获取编辑器
  getValue() {
    return this.editor.getValue();
  }

  // 更改语言
  changeLang(lang) {
    monaco.editor.setModelLanguage(this.editor.getModel(), lang);
  }

  destroy() {
    this.editor.dispose();
  }

  _initFns() {
    this._onChange();
    this._onBlur();
  }

  _onChange() {
    this.editor.onDidChangeModelContent((event) => {
      const value = this.getValue();

      this.onChange && this.onChange(value, event);
    });
  }

  _onBlur() {
    this.editor.onDidBlurEditorWidget((event) => {
      const value = this.getValue();

      this.onBlur && this.onBlur(value, event);
    });
  }
}

Vvveb.MonacoEditor = MonacoEditor;

export default MonacoEditor;