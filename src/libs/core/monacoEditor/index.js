import * as monaco from 'monaco-editor';

self.MonacoEnvironment = {
	getWorkerUrl: function (moduleId, label) {
    console.log('getWorkerUrl:', moduleId, label);
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

class MonacoEditor {
  constructor(config) {
    const { el, initValue, lang = 'javascript', onChange, onBlur } = config;

    this.el = el;
    this.initValue = initValue;
    this.lang = lang;
    this.onChange = onChange; 
    this.onBlur = onBlur; 

    this._create();
  }

  _create() {
    const editor = monaco.editor.create(this.el, {
      value: this.initValue,
      language: this.lang,
    });

    console.log('create', this.el, this.lang);
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

    console.log(
      `model language was changed to ${
        editor.getModel().getLanguageIdentifier().language
      }`
    );
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