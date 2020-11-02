/*
Copyright 2017 Ziadin Givan

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

	 http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

https://github.com/givanz/VvvebJs
*/


// Simple JavaScript Templating
// John Resig - https://johnresig.com/ - MIT Licensed
(function () {
	var cache = {};

	this.tmpl = function tmpl(str, data) {
		// Figure out if we're getting a template, or if we need to
		// load the template - and be sure to cache the result.
		var fn = /^[-a-zA-Z0-9]+$/.test(str) ?
			cache[str] = cache[str] ||
			tmpl(document.getElementById(str).innerHTML) :

			// Generate a reusable function that will serve as a template
			// generator (and which will be cached).
			new Function("obj",
				"var p=[],print=function(){p.push.apply(p,arguments);};" +

				// Introduce the data as local variables using with(){}
				"with(obj){p.push('" +

				// Convert the template into pure JavaScript
				str
					.replace(/[\r\t\n]/g, " ")
					.split("{%").join("\t")
					.replace(/((^|%})[^\t]*)'/g, "$1\r")
					.replace(/\t=(.*?)%}/g, "',$1,'")
					.split("\t").join("');")
					.split("%}").join("p.push('")
					.split("\r").join("\\'")
				+ "');}return p.join('');");
		// Provide some basic currying to the user
		return data ? fn(data) : fn;
	};
})();

var delay = (function () {
	var timer = 0;
	return function (callback, ms) {
		clearTimeout(timer);
		timer = setTimeout(callback, ms);
	};
})();

function isElement(obj) {
	return (typeof obj === "object") &&
		(obj.nodeType === 1) && (typeof obj.style === "object") &&
		(typeof obj.ownerDocument === "object")/* && obj.tagName != "BODY"*/;
}

function isTemplateElement(obj) {
		return isElement(obj) && obj.dataset.uuid;
}

var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

if (Vvveb === undefined) var Vvveb = {};

Vvveb.defaultComponent = "_base";
Vvveb.preservePropertySections = true;
Vvveb.dragIcon = 'icon';//icon = use component icon when dragging | html = use component html to create draggable element

Vvveb.baseUrl = document.currentScript ? document.currentScript.src.replace(/[^\/]*?\.js$/, '') : '';
Vvveb.imgBaseUrl = Vvveb.baseUrl;

Vvveb.ComponentsGroup = {};
Vvveb.BlocksGroup = {};

Vvveb.Components = {

	_components: {},

	_nodesLookup: {},

	_attributesLookup: {},

	_classesLookup: {},

	_classesRegexLookup: {},

	componentPropertiesElement: "#right-panel .component-properties",

	componentPropertiesDefaultSection: "content",

	get: function (type) {
		return this._components[type];
	},

	add: function (type, data) {
		data.type = type;

		this._components[type] = data;

		if (data.nodes) {
			for (var i in data.nodes) {
				this._nodesLookup[data.nodes[i]] = data;
			}
		}

		if (data.attributes) {
			if (data.attributes.constructor === Array) {
				for (var i in data.attributes) {
					this._attributesLookup[data.attributes[i]] = data;
				}
			} else {
				for (var i in data.attributes) {
					if (typeof this._attributesLookup[i] === 'undefined') {
						this._attributesLookup[i] = {};
					}

					if (typeof this._attributesLookup[i][data.attributes[i]] === 'undefined') {
						this._attributesLookup[i][data.attributes[i]] = {};
					}

					this._attributesLookup[i][data.attributes[i]] = data;
				}
			}
		}

		if (data.classes) {
			for (var i in data.classes) {
				this._classesLookup[data.classes[i]] = data;
			}
		}

		if (data.classesRegex) {
			for (var i in data.classesRegex) {
				this._classesRegexLookup[data.classesRegex[i]] = data;
			}
		}
	},

	extend: function (inheritType, type, data) {

		var newData = data;

		if (inheritData = this._components[inheritType]) {
			newData = $.extend(true, {}, inheritData, data);
			newData.properties = $.merge($.merge([], inheritData.properties ? inheritData.properties : []), data.properties ? data.properties : []);
		}

		//sort by order
		newData.properties.sort(function (a, b) {
			if (typeof a.sort === "undefined") a.sort = 0;
			if (typeof b.sort === "undefined") b.sort = 0;

			if (a.sort < b.sort)
				return -1;
			if (a.sort > b.sort)
				return 1;
			return 0;
		});
		/*		 
				var output = array.reduce(function(o, cur) {
		
					// Get the index of the key-value pair.
					var occurs = o.reduce(function(n, item, i) {
					return (item.key === cur.key) ? i : n;
					}, -1);
		
					// If the name is found,
					if (occurs >= 0) {
		
					// append the current value to its list of values.
					o[occurs].value = o[occurs].value.concat(cur.value);
		
					// Otherwise,
					} else {
		
					// add the current item to o (but make sure the value is an array).
					var obj = {name: cur.key, value: [cur.value]};
					o = o.concat([obj]);
					}
		
					return o;
				}, newData.properties);		 
		*/

		this.add(type, newData);
	},


	matchNode: function (node) {
		var component = {};

		if (!node || !node.tagName) return false;

		if (node.attributes && node.attributes.length) {
			//search for attributes
			for (var i in node.attributes) {
				if (node.attributes[i]) {
					attr = node.attributes[i].name;
					value = node.attributes[i].value;

					if (attr in this._attributesLookup) {
						component = this._attributesLookup[attr];

						//currently we check that is not a component by looking at name attribute
						//if we have a collection of objects it means that attribute value must be checked
						if (typeof component["name"] === "undefined") {
							if (value in component) {
								return component[value];
							}
						} else
							return component;
					}
				}
			}

			for (var i in node.attributes) {
				attr = node.attributes[i].name;
				value = node.attributes[i].value;

				//check for node classes
				if (attr == "class") {
					classes = value.split(" ");

					for (j in classes) {
						if (classes[j] in this._classesLookup)
							return this._classesLookup[classes[j]];
					}

					for (regex in this._classesRegexLookup) {
						regexObj = new RegExp(regex);
						if (regexObj.exec(value)) {
							return this._classesRegexLookup[regex];
						}
					}
				}
			}
		}

		tagName = node.tagName.toLowerCase();
		if (tagName in this._nodesLookup) return this._nodesLookup[tagName];

		return false;
		//return false;
	},

	render: function (type) {

		var component = this._components[type];

		var componentsPanel = $(this.componentPropertiesElement);
		var defaultSection = this.componentPropertiesDefaultSection;
		var componentsPanelSections = {};
    var propertiesElement = 
		$(propertiesElement + " .tab-pane").each(function () {
			var sectionName = this.dataset.section;
			componentsPanelSections[sectionName] = $(this);

		});

		var section = componentsPanelSections[defaultSection].find('.section[data-section="default"]');

		if (!(Vvveb.preservePropertySections && section.length)) {
			componentsPanelSections[defaultSection].html('').append(tmpl("vvveb-input-sectioninput", { key: "default", header: component.name }));
			section = componentsPanelSections[defaultSection].find(".section");
		}

		componentsPanelSections[defaultSection].find('[data-header="default"] span').html(component.name);
		section.html("")

		if (component.beforeInit) component.beforeInit(Vvveb.Builder.selectedEl.get(0));

		var element;

		var fn = function (component, property) {
			return property.input.on('propertyChange', function (event, value, input) {

				var element = Vvveb.Builder.selectedEl;

				if (property.child) element = element.find(property.child);
				if (property.parent) element = element.parent(property.parent);

				if (property.onChange) {
					element = property.onChange(element, value, input, component);
				}/* else */
				if (property.htmlAttr) {
					oldValue = element.attr(property.htmlAttr);

					if (property.htmlAttr == "class" && property.validValues) {
						element.removeClass(property.validValues.join(" "));
						element = element.addClass(value);
					}
					else if (property.htmlAttr == "style") {
						element = Vvveb.StyleManager.setStyle(element, property.key, value);
					}
					else if (property.htmlAttr == "innerHTML") {
						element = Vvveb.ContentManager.setHtml(element, value);
					}
					else {
						//if value is empty then remove attribute useful for attributes without values like disabled
						if (value) {
							element = element.attr(property.htmlAttr, value);
						} else {
							element = element.removeAttr(property.htmlAttr);
						}
					}

					Vvveb.Undo.addMutation({
						type: 'attributes',
						target: element.get(0),
						attributeName: property.htmlAttr,
						oldValue: oldValue,
						newValue: element.attr(property.htmlAttr)
					});
				}

				if (component.onChange) {
					element = component.onChange(element, property, value, input);
				}

				if (!property.child && !property.parent) Vvveb.Builder.selectNode(element);

				return element;
			});
		};

		var nodeElement = Vvveb.Builder.selectedEl;

		for (var i in component.properties) {
			var property = component.properties[i];
			var element = nodeElement;

			if (property.beforeInit) property.beforeInit(element.get(0))

			if (property.child) element = element.find(property.child);

			if (property.data) {
				property.data["key"] = property.key;
			} else {
				property.data = { "key": property.key };
			}

			if (typeof property.group === 'undefined') property.group = null;

			property.input = property.inputtype.init(property.data);

			if (property.init) {
				property.inputtype.setValue(property.init(element.get(0)));
			} else if (property.htmlAttr) {
				if (property.htmlAttr == "style") {
					//value = element.css(property.key);//jquery css returns computed style
					var value = Vvveb.StyleManager.getStyle(element, property.key);//getStyle returns declared style
				} else
					if (property.htmlAttr == "innerHTML") {
						var value = Vvveb.ContentManager.getHtml(element);
					} else {
						var value = element.attr(property.htmlAttr);
					}

				//if attribute is class check if one of valid values is included as class to set the select
				if (value && property.htmlAttr == "class" && property.validValues) {
					value = value.split(" ").filter(function (el) {
						return property.validValues.indexOf(el) != -1
					});
				}

				property.inputtype.setValue(value);
			}

			fn(component, property);

			var propertySection = defaultSection;
			if (property.section) {
				propertySection = property.section;
			}


			if (property.inputtype == SectionInput) {
				section = componentsPanelSections[propertySection].find('.section[data-section="' + property.key + '"]');

				if (Vvveb.preservePropertySections && section.length) {
					section.html("");
				} else {
					componentsPanelSections[propertySection].append(property.input);
					section = componentsPanelSections[propertySection].find('.section[data-section="' + property.key + '"]');
				}
			}
			else {
				var row = $(tmpl('vvveb-property', property));
				row.find('.input').append(property.input);
				section.append(row);
			}

			if (property.inputtype.afterInit) {
				property.inputtype.afterInit(property.input);
			}

		}

		if (component.init) component.init(Vvveb.Builder.selectedEl.get(0));
	},

  // 渲染代码编辑器
	renderCodeEditor: function (type, data) {
    const uuid = $(data).data('uuid');

		if(!uuid) return;

		const nodeData = Vvveb.Model2.getter(({nodes}) => nodes.find(v => v.uuid === uuid))
		
    var component = this._components[type];
		var componentsPanelSections = {};
    const propertiesElement = "#component-properties-code-editor"
		$(propertiesElement + " .tab-pane").each(function () {
			var sectionName = this.dataset.section;
			componentsPanelSections[sectionName] = $(this);
		});
    if(!uuid) {
      // 如果不是组件 卸载代码编辑器
      Object.keys(componentsPanelSections).forEach(sectionName => {
        componentsPanelSections[sectionName].html('').append('<div class="mt-4 text-center">点击一个组件容器编辑HTML</div>');
      })
      Vvveb.MonacoEditorPlugin.destroy()
      return false
    }
    // 如果组件 加载载代码编辑器 并进行数据回填
    const { html, css, script } = nodeData
    Vvveb.MonacoEditorPlugin.setValue({ uuid, html, css, script })

		Object.keys(componentsPanelSections).forEach(sectionName => {
			componentsPanelSections[sectionName].html('').append(tmpl("vvveb-input-sectioninput", { key: "default", header: component.name }));
			const section = componentsPanelSections[sectionName].find(".section")
			componentsPanelSections[sectionName].find('[data-header="default"] span').html(`${name} Code`);
			componentsPanelSections[sectionName].find('[data-header="default"]').css('display', "none")

      section.html('')
      const id = `vvveb-code-editor-${sectionName}`
      section.append(`<div style="width: 100%" id=${id} class="component-code-eidtor"></div>`)
		})
		
    Vvveb.MonacoEditorPlugin.init()
		if (component.beforeInit) component.beforeInit(Vvveb.Builder.selectedEl.get(0));
	}
};


Vvveb.Blocks = {

	_blocks: {},

	get: function (type) {
		return this._blocks[type];
	},

	add: function (type, data) {
		data.type = type;
		this._blocks[type] = data;
	},
};



Vvveb.WysiwygEditor = {

	isActive: false,
	oldValue: '',
	doc: false,

	init: function (doc) {
		this.doc = doc;

		$("#bold-btn").on("click", function (e) {
			doc.execCommand('bold', false, null);
			e.preventDefault();
			return false;
		});

		$("#italic-btn").on("click", function (e) {
			doc.execCommand('italic', false, null);
			e.preventDefault();
			return false;
		});

		$("#underline-btn").on("click", function (e) {
			doc.execCommand('underline', false, null);
			e.preventDefault();
			return false;
		});

		$("#strike-btn").on("click", function (e) {
			doc.execCommand('strikeThrough', false, null);
			e.preventDefault();
			return false;
		});

		$("#link-btn").on("click", function (e) {
			doc.execCommand('createLink', false, "#");
			e.preventDefault();
			return false;
		});
	},

	undo: function (element) {
		this.doc.execCommand('undo', false, null);
	},

	redo: function (element) {
		this.doc.execCommand('redo', false, null);
	},

	edit: function (element) {
		element.attr({ 'contenteditable': true, 'spellcheckker': false });
		$("#wysiwyg-editor").show();

		this.element = element;
		this.isActive = true;
		this.oldValue = element.html();
	},

	destroy: function (element) {
		element.removeAttr('contenteditable spellcheckker');
		$("#wysiwyg-editor").hide();
		this.isActive = false;


		node = this.element.get(0);
		Vvveb.Undo.addMutation({
			type: 'characterData',
			target: node,
			oldValue: this.oldValue,
			newValue: node.innerHTML
		});
	}
}

Vvveb.Builder = {

	component: {},
	dragMoveMutation: false,
	isPreview: false,
	runJsOnSetHtml: false,
	designerMode: false,

	init: function (url, callback) {

		var self = this;

		self.loadControlGroups();
		self.loadBlockGroups();
		self.setBlocksContainerHeight()

		self.selectedEl = null;
		self.highlightEl = null;
		self.initCallback = callback;

		self.documentFrame = $("#iframe-wrapper > iframe");
		self.canvas = $("#canvas");

		self._loadIframe(url);

		self._initDragdrop();

		self._initBox();

		self.dragElement = null;
	},

	// 计算左侧模块容器高度
	setBlocksContainerHeight() {
		let navHeight = 0;
		$(".drag-elements .nav-tabs").each((i, node) => {
			navHeight += $(node).height()
		 })
		 const h = $("#left-panel").height() - $("#filemanager").height() - navHeight;
		 
		 $("#left-panel .drag-elements-sidepane").height(h);
		 return h;
	},

	/* controls */
	loadControlGroups: function () {

		var componentsList = $(".components-list");
		componentsList.empty();
		var item = {}, component = {};
		var count = 0;

		componentsList.each(function () {
			var list = $(this);
			var type = this.dataset.type;
			count++;

			for (group in Vvveb.ComponentsGroup) {
				list.append('<li class="header clearfix" data-section="' + group + '"  data-search=""><label class="header" for="' + type + '_comphead_' + group + count + '">' + group + '  <div class="header-arrow"></div>\
									   </label><input class="header_check" type="checkbox" checked="true" id="' + type + '_comphead_' + group + count + '">  <ol></ol></li>');

				var componentsSubList = list.find('li[data-section="' + group + '"]  ol');

				components = Vvveb.ComponentsGroup[group];

				for (i in components) {
					componentType = components[i];
					component = Vvveb.Components.get(componentType);

					if (component) {
						item = $('<li data-section="' + group + '" data-drag-type=component data-type="' + componentType + '" data-search="' + component.name.toLowerCase() + '"><a href="#">' + component.name + "</a></li>");

						if (component.image) {

							item.css({
								backgroundImage: "url(" + Vvveb.imgBaseUrl + component.image + ")",
								backgroundRepeat: "no-repeat"
							})
						}

						componentsSubList.append(item)
					}
				}
			}
		});
	},

	loadBlockGroups: function () {

		var blocksList = $(".blocks-list");
		blocksList.empty();
		var item = {};

		blocksList.each(function () {

			var list = $(this);
			var type = this.dataset.type;

			for (group in Vvveb.BlocksGroup) {
				list.append('<li class="header" data-section="' + group + '"  data-search=""><label class="header" for="' + type + '_blockhead_' + group + '">' + group + '  <div class="header-arrow"></div>\
									   </label><input class="header_check" type="checkbox" checked="true" id="' + type + '_blockhead_' + group + '">  <ol></ol></li>');

				var blocksSubList = list.find('li[data-section="' + group + '"]  ol');
				blocks = Vvveb.BlocksGroup[group];

				for (i in blocks) {
					blockType = blocks[i];
					block = Vvveb.Blocks.get(blockType);

					if (block) {
						item = $('<li data-section="' + group + '" data-drag-type=block data-type="' + blockType + '" data-search="' + block.name.toLowerCase() + '"><a href="#">' + block.name + "</a></li>");

						if (block.image) {

							item.css({
								backgroundImage: "url(" + ((block.image.indexOf('/') == -1) ? Vvveb.imgBaseUrl : '') + block.image + ")",
								backgroundRepeat: "no-repeat"
							})
						}

						blocksSubList.append(item)
					}
				}
			}
		});
	},

	loadUrl: function (url, callback) {
		var self = this;
		$("#select-box").hide();

		self.initCallback = callback;
		if (Vvveb.Builder.iframe.src != url) Vvveb.Builder.iframe.src = url;
	},

	/* iframe */
	_loadIframe: function (url) {

		var self = this;
		self.iframe = this.documentFrame.get(0);
		self.iframe.src = url;

		Vvveb.domUtils.setIframe(self.iframe);
		return this.documentFrame.on("load", function () {
			window.FrameWindow = self.iframe.contentWindow;
			window.FrameDocument = self.iframe.contentWindow.document;
			var addSectionBox = $("#add-section-box");
			var highlightBox = $("#highlight-box").hide();


			$(window.FrameWindow).on("beforeunload", function (event) {
				if (Vvveb.Undo.undoIndex <= 0) {
					var dialogText = "You have unsaved changes";
					event.returnValue = dialogText;
					return dialogText;
				}
			});

			$(window.FrameWindow).on("scroll resize", function (event) {

				if (self.selectedEl) {
					var offset = self.selectedEl.offset();

					$("#select-box").css(
						{
							"top": offset.top - self.frameDoc.scrollTop(),
							"left": offset.left - self.frameDoc.scrollLeft(),
							"width": self.selectedEl.outerWidth(),
							"height": self.selectedEl.outerHeight(),
							//"display": "block"
						});

				}

				if (self.highlightEl) {
					var offset = self.highlightEl.offset();

					highlightBox.css(
						{
							"top": offset.top - self.frameDoc.scrollTop(),
							"left": offset.left - self.frameDoc.scrollLeft(),
							"width": self.highlightEl.outerWidth(),
							"height": self.highlightEl.outerHeight(),
							//"display": "block"
						});


					addSectionBox.hide();
				}

			});

			Vvveb.WysiwygEditor.init(window.FrameDocument);
			if (self.initCallback) self.initCallback();

			return self._frameLoaded();
		});

	},

	_frameLoaded: function () {

		var self = Vvveb.Builder;

		self.frameDoc = $(window.FrameDocument);
		self.frameHtml = $(window.FrameDocument).find("html");
		self.frameBody = $(window.FrameDocument).find("body");
		self.frameHead = $(window.FrameDocument).find("head");

		//insert editor helpers like non editable areas
		self.frameHead.append('<link data-vvveb-helpers href="' + Vvveb.baseUrl + '../../css/vvvebjs-editor-helpers.css" rel="stylesheet">');

		self._initHighlight();

		$(window).triggerHandler("vvveb.iframe.loaded", self.frameDoc);
	},

	_getElementType: function (el) {

		//search for component attribute
		componentName = '';

		if (el.attributes)
			for (var j = 0; j < el.attributes.length; j++) {

				if (el.attributes[j].nodeName.indexOf('data-component') > -1) {
					componentName = el.attributes[j].nodeName.replace('data-component-', '');
				}
				if (el.attributes[j].nodeName.indexOf('data-name') > -1) {
					componentName = el.attributes[j].nodeValue;
				}
			}

		if (componentName != '') return componentName;

		return el.tagName;
	},

	loadNodeComponent: function (node) {
		data = Vvveb.Components.matchNode(node);
		var componentType;

		if (data)
		componentType = data.type;
		else
		componentType = Vvveb.defaultComponent;

		// Vvveb.Components.render(component);
		Vvveb.Components.renderCodeEditor(componentType, node);

	},

	moveNodeUp: function (node) {
		const nodeUUID = $(node).data('uuid');

		// nodeUUID存在，则为我们定义模板组件
		if(nodeUUID) {
			Vvveb.Model2.dispatch({
				type: 'MOVE_UP',
				uuid: nodeUUID,
			});
		} else {
			/**
			 * TODO:
			 * 非模版组件
			 */
		}
	},

	moveNodeDown: function (node) {
		const nodeUUID = $(node).data('uuid');

		// nodeUUID存在，则为我们定义模板组件
		if(nodeUUID) {
			Vvveb.Model2.dispatch({
				type: 'MOVE_DOWN',
				uuid: nodeUUID,
			});
		} else {
			/**
			 * TODO:
			 * 非模版组件
			 */
		}
	},

	cloneNode: function (node) {
		if (!node) {
			node = Vvveb.Builder.selectedEl;
		}

		const nodeUUID = $(node).data('uuid');
		if(nodeUUID) {
			Vvveb.Model2.dispatch({
				type: 'CLONE',
				dom: node,
				uuid: nodeUUID,
			});
		} else {
			clone = node.clone();
			node.after(clone);
		}

		node = clone.click();
		element = clone.get(0);


		Vvveb.Undo.addMutation({
			type: 'childList',
			target: node.parentNode,
			addedNodes: [element],
			nextSibling: node.nextSibling
		});

	},


	selectNode: function (node) {
		var self = this;

		if (!node) {
			$("#select-box").hide();
			return;
		}

		if (self.texteditEl && self.selectedEl.get(0) != node) {
			Vvveb.WysiwygEditor.destroy(self.texteditEl);
			$("#select-box").removeClass("text-edit").find("#select-actions").show();
			self.texteditEl = null;
		}

		var target = $(node);

		if (target) {
			self.selectedEl = target;

			try {
				var offset = target.offset();

				$("#select-box").css(
					{
						"top": offset.top - self.frameDoc.scrollTop(),
						"left": offset.left - self.frameDoc.scrollLeft(),
						"width": target.outerWidth(),
						"height": target.outerHeight(),
						"display": "block",
					});
			} catch (err) {
				console.log(err);
				return false;
			}
		}

		$("#highlight-name").html(this._getElementType(node));

	},

	/* iframe highlight */
	_initHighlight: function () {

		var self = Vvveb.Builder;

		self.frameHtml.on("mousemove touchmove", function (event) {

			if (event.target && isElement(event.target) && event.originalEvent) {
				/**
				 *  TODO:
				 * v0.1 支持往body里面拖拽组件，不支持组件内再嵌套组件
				 */
				self.highlightEl = target = $(window.FrameDocument.body);

				var offset = target.offset();
				var height = target.outerHeight();
				var halfHeight = Math.max(height / 2, 50);
				var width = target.outerWidth();
				var halfWidth = Math.max(width / 2, 50);

				var x = (event.clientX || event.originalEvent.clientX);
				var y = (event.clientY || event.originalEvent.clientY);

				if (self.isDragging) {
					var parent = self.highlightEl;

					try {
						if (event.originalEvent) {
							if ((offset.top < (y - halfHeight)) || (offset.left < (x - halfWidth))) {
								if (isIE11)
									self.highlightEl.append(self.dragElement);
								else
									self.dragElement.appendTo(parent);
							} else {
								if (isIE11)
									self.highlightEl.prepend(self.dragElement);
								else
									self.dragElement.prependTo(parent);
							};

							if (self.designerMode) {
								var parentOffset = self.dragElement.offsetParent().offset();

								self.dragElement.css({
									"position": "absolute",
									'left': x - (parentOffset.left - self.frameDoc.scrollLeft()),
									'top': y - (parentOffset.top - self.frameDoc.scrollTop()),
								});
							}
						}

					} catch (err) {
						console.log(err);
						return false;
					}

					if (!self.designerMode && self.iconDrag) self.iconDrag.css({ 'left': x + 275/*left panel width*/, 'top': y - 30 });
				}// else //uncomment else to disable parent highlighting when dragging
				{

					$("#highlight-box").css(
						{
							"top": offset.top - self.frameDoc.scrollTop(),
							"left": offset.left - self.frameDoc.scrollLeft(),
							"width": width,
							"height": height,
							"display": event.target.hasAttribute('contenteditable') ? "none" : "block",
							"border": self.isDragging ? "1px dashed aqua" : "",//when dragging highlight parent with green
						});

					if (height < 50) {
						$("#section-actions").addClass("outside");
					} else {
						$("#section-actions").removeClass("outside");
					}
					$("#highlight-name").html(self._getElementType(event.target));
					if (self.isDragging) $("#highlight-name").hide(); else $("#highlight-name").show();//hide tag name when dragging
				}
			}

		});

		self.frameHtml.on("mouseup touchend", function (event) {
			if (self.isDragging) {
				self.isDragging = false;
				if (self.iconDrag) self.iconDrag.remove();
				$("#component-clone").remove();

				if (self.dragMoveMutation === false) {
					if (self.component.dragHtml) //if dragHtml is set for dragging then set real component html
					{
						newElement = $(self.component.html);
						Vvveb.Model2.dispatch({
							type: 'ADD',
							payload: self.component
						}).then(() => {
							Vvveb.domUtils
								.setFrameDocument(window.FrameDocument)
								.selectNode(self.activeUUID);
						})
					}

					return;
				}
			}
		});

		self.frameHtml.on("dblclick", function (event) {

			if (Vvveb.Builder.isPreview == false) {
				self.texteditEl = target = $(event.target);

				Vvveb.WysiwygEditor.edit(self.texteditEl);

				self.texteditEl.attr({ 'contenteditable': true, 'spellcheckker': false });

				self.texteditEl.on("blur keyup paste input", function (event) {

					$("#select-box").css({
						"width": self.texteditEl.outerWidth(),
						"height": self.texteditEl.outerHeight()
					});
				});

				$("#select-box").addClass("text-edit").find("#select-actions").hide();
				$("#highlight-box").hide();
			}
		});


		self.frameHtml.on("click", function (event) {

			if (Vvveb.Builder.isPreview == false) {
				if (event.target) {
					//if component properties is loaded in left panel tab instead of right panel show tab
					if ($(".component-properties-tab").is(":visible"))//if properites tab is enabled/visible 
						$('.component-properties-tab a').show().tab('show');

					self.selectNode(event.target);
					self.loadNodeComponent(event.target);
				}

				event.preventDefault();
				return false;
			}

		});

	},

	_initBox: function () {
		var self = this;

		$("#drag-btn").on("mousedown", function (event) {
			$("#select-box").hide();
			self.dragElement = self.selectedEl.css("position", "");
			self.isDragging = true;

			node = self.dragElement.get(0);

			self.dragMoveMutation = {
				type: 'move',
				target: node,
				oldParent: node.parentNode,
				oldNextSibling: node.nextSibling
			};

			//self.selectNode(false);
			event.preventDefault();
			return false;
		});

		$("#down-btn").on("click", function (event) {

			$("#select-box").hide();

			Vvveb.Builder.moveNodeDown();

			event.preventDefault();
			return false;
		});

		$("#up-btn").on("click", function (event) {
			$("#select-box").hide();

			Vvveb.Builder.moveNodeUp();

			event.preventDefault();
			return false;
		});

		$("#clone-btn").on("click", function (event) {

			Vvveb.Builder.cloneNode();

			event.preventDefault();
			return false;
		});

		$("#parent-btn").on("click", function (event) {

			node = self.selectedEl.parent().get(0);

			self.selectNode(node);
			self.loadNodeComponent(node);

			event.preventDefault();
			return false;
		});

		$("#delete-btn").on("click", function (event) {
			$("#select-box").hide();

			node = self.selectedEl.get(0);
			const nodeUUID = $(node).data('uuid');

			Vvveb.Undo.addMutation({
				type: 'childList',
				target: node.parentNode,
				removedNodes: [node],
				nextSibling: node.nextSibling
			});

			nodeUUID ? Vvveb.Model2.dispatch({
				type: 'REMOVE',
				uuid: nodeUUID,
			}) : null;

			event.preventDefault();
			return false;
		});

		var addSectionBox = $("#add-section-box");
		var addSectionElement = {};

		$("#add-section-btn").on("click", function (event) {

			addSectionElement = self.highlightEl;

			var offset = $(addSectionElement).offset();
			var top = (offset.top - self.frameDoc.scrollTop()) + addSectionElement.outerHeight();
			var left = (offset.left - self.frameDoc.scrollLeft()) + (addSectionElement.outerWidth() / 2) - (addSectionBox.outerWidth() / 2);
			var outerHeight = $(window.FrameWindow).height() + self.frameDoc.scrollTop();

			//check if box is out of viewport and move inside
			if (left < 0) left = 0;
			if (top < 0) top = 0;
			if ((left + addSectionBox.outerWidth()) > self.frameDoc.outerWidth()) left = self.frameDoc.outerWidth() - addSectionBox.outerWidth();
			if (((top + addSectionBox.outerHeight()) + self.frameDoc.scrollTop()) > outerHeight) top = top - addSectionBox.outerHeight();


			addSectionBox.css(
				{
					"top": top,
					"left": left,
					"display": "block",
				});

			event.preventDefault();
			return false;
		});

		$("#close-section-btn").on("click", function (event) {
			addSectionBox.hide();
		});

		function addSectionComponent(component, after = true) {

			Vvveb.Model2.dispatch({
				type: 'ADD',
				payload: component,
			});
		}

		$(".components-list li ol li", addSectionBox).on("click", function (event) {
			var component = Vvveb.Components.get(this.dataset.type);

			addSectionComponent(component, ($("[name='add-section-insert-mode']:checked").val() == "after"));

			addSectionBox.hide();
		});

		$(".blocks-list li ol li", addSectionBox).on("click", function (event) {
			var component = Vvveb.Blocks.get(this.dataset.type);

			addSectionComponent(component, ($("[name='add-section-insert-mode']:checked").val() == "after"));

			addSectionBox.hide();
		});

	},

	/* drag and drop */
	_initDragdrop: function () {

		var self = this;
		self.isDragging = false;

		$('.drag-elements-sidepane ul > li > ol > li').on("mousedown touchstart", function (event) {

			$this = $(this);

			$("#component-clone").remove();

			if ($this.data("drag-type") == "component")
				self.component = Vvveb.Components.get($this.data("type"));
			else
				self.component = Vvveb.Blocks.get($this.data("type"));

			if (self.component.dragHtml) {
				html = self.component.dragHtml;
			} else {
				html = self.component.html;
			}

			self.dragElement = $(html);
			self.dragElement.css("border", "1px dashed #4285f4");

			if (self.component.dragStart) self.dragElement = self.component.dragStart(self.dragElement);

			self.isDragging = true;
			if (Vvveb.dragIcon == 'html') {
				self.iconDrag = $(html).attr("id", "dragElement-clone").css('position', 'absolute');
			}
			else if (self.designerMode == false) {
				self.iconDrag = $('<img src=""/>').attr({ "id": "dragElement-clone", 'src': $this.css("background-image").replace(/^url\(['"](.+)['"]\)/, '$1') }).
					css({ 'z-index': 100, 'position': 'absolute', 'width': '64px', 'height': '64px', 'top': event.originalEvent.y, 'left': event.originalEvent.x });
			}

			$('body').append(self.iconDrag);

			event.preventDefault();
			return false;
		});

		$('body').on('mouseup touchend', function (event) {
			if (self.iconDrag && self.isDragging == true) {
				self.isDragging = false;
				$("#component-clone").remove();
				self.iconDrag.remove();
				if (self.dragElement) {
					self.dragElement.remove();
				}
			}
		});

		$('body').on('mousemove touchmove', function (event) {
			if (self.iconDrag && self.isDragging == true) {
				var x = (event.clientX || event.originalEvent.clientX);
				var y = (event.clientY || event.originalEvent.clientY);

				self.iconDrag.css({ 'left': x - 60, 'top': y - 30 });

				elementMouseIsOver = document.elementFromPoint(x - 60, y - 40);

				//if drag elements hovers over iframe switch to iframe mouseover handler	
				if (elementMouseIsOver && elementMouseIsOver.tagName == 'IFRAME') {
					self.frameBody.trigger("mousemove", event);
					event.stopPropagation();
					self.selectNode(false);
				}
			}
		});

		$('.drag-elements-sidepane ul > ol > li > li').on("mouseup touchend", function (event) {
			self.isDragging = false;
			$("#component-clone").remove();
		});

	},

	removeHelpers: function (html, keepHelperAttributes = false) {
		//tags like stylesheets or scripts 
		html = html.replace(/<.*?data-vvveb-helpers.*?>/gi, "");
		//attributes
		if (!keepHelperAttributes) {
			html = html.replace(/\s*data-vvveb-\w+(=["'].*?["'])?\s*/gi, "");
		}

		return html;
	},

	getHtml: function (keepHelperAttributes = true) {
		var doc = window.FrameDocument;
		var hasDoctpe = (doc.doctype !== null);
		var html = "";

		$("[contenteditable]", doc).removeAttr("contenteditable");
		$("[spellcheckker]", doc).removeAttr("spellcheckker");

		$(window).triggerHandler("vvveb.getHtml.before", doc);

		if (hasDoctpe) html =
			"<!DOCTYPE "
			+ doc.doctype.name
			+ (doc.doctype.publicId ? ' PUBLIC "' + doc.doctype.publicId + '"' : '')
			+ (!doc.doctype.publicId && doc.doctype.systemId ? ' SYSTEM' : '')
			+ (doc.doctype.systemId ? ' "' + doc.doctype.systemId + '"' : '')
			+ ">\n";

		this.replaceRelativeLink(doc.documentElement);
		const innerHtml = doc.documentElement.innerHTML;
		html += innerHtml + "\n</html>";
		html = this.removeHelpers(html, keepHelperAttributes);

		var filter = $(window).triggerHandler("vvveb.getHtml.after", html);
		if (filter) return filter;

		return html;
	},

	replaceRelativeLink(doc) {
		doc.querySelectorAll('link').forEach(el => {
			let path = el.getAttribute('href')
			if(path) el.href = el.href;
		})
		doc.querySelectorAll('script').forEach(el => {
			let path = el.getAttribute('src')

			if(path) el.src = el.src;
		})
		return doc;
	},

	setHtml: function (html) {
		//update only body to avoid breaking iframe css/js relative paths
		start = html.indexOf("<body");
		end = html.indexOf("</body");

		if (start >= 0 && end >= 0) {
			body = html.slice(html.indexOf(">", start) + 1, end);
		} else {
			body = html
		}

		if (this.runJsOnSetHtml)
			self.frameBody.html(body);
		else
			window.FrameDocument.body.innerHTML = body;


		//below methods brake document relative css and js paths
		//return self.iframe.outerHTML = html;
		//return self.documentFrame.html(html);
		//return self.documentFrame.attr("srcdoc", html);
	},

	saveAjax: function (fileName, startTemplateUrl, callback, saveUrl) {
		var data = {};
		data["fileName"] = (fileName && fileName != "") ? fileName : Vvveb.FileManager.getCurrentFileName();
		data["startTemplateUrl"] = startTemplateUrl;
		if (!startTemplateUrl || startTemplateUrl == null) {
			data["html"] = this.getHtml();
		}

		$.ajax({
			type: "POST",
			url: saveUrl,//set your server side save script url
			data: data,
			cache: false,
			success: function (data) {

				if (callback) callback(data);

			},
			error: function (data) {
				alert(data.responseText);
			}
		});
	},

	setDesignerMode: function (designerMode = false) {
		this.designerMode = designerMode;
	}

};

Vvveb.CodeEditor = {

	isActive: false,
	oldValue: '',
	doc: false,

	init: function (doc) {
		$("#vvveb-code-editor textarea").val(Vvveb.Builder.getHtml());

		$("#vvveb-code-editor textarea").keyup(function () {
			delay(Vvveb.Builder.setHtml(this.value), 1000);
		});

		//load code on document changes
		Vvveb.Builder.frameBody.on("vvveb.undo.add vvveb.undo.restore", function (e) { Vvveb.CodeEditor.setValue(); });
		//load code when a new url is loaded
		Vvveb.Builder.documentFrame.on("load", function (e) { Vvveb.CodeEditor.setValue(); });

		this.isActive = true;
	},

	setValue: function (value) {
		if (this.isActive) {
			$("#vvveb-code-editor textarea").val(Vvveb.Builder.getHtml());
		}
	},

	destroy: function (element) {
		//this.isActive = false;
	},

	toggle: function () {
		if (this.isActive != true) {
			this.isActive = true;
			return this.init();
		}
		this.isActive = false;
		this.destroy();
	}
}

Vvveb.Gui = {

	init: function () {
		$("[data-vvveb-action]").each(function () {
			on = "click";
			if (this.dataset.vvvebOn) on = this.dataset.vvvebOn;

			$(this).on(on, Vvveb.Gui[this.dataset.vvvebAction]);
			if (this.dataset.vvvebShortcut) {
				$(document).bind('keydown', this.dataset.vvvebShortcut, Vvveb.Gui[this.dataset.vvvebAction]);
				$(window.FrameDocument, window.FrameWindow).bind('keydown', this.dataset.vvvebShortcut, Vvveb.Gui[this.dataset.vvvebAction]);
			}
		});
	},

	undo: function () {
		if (Vvveb.WysiwygEditor.isActive) {
			Vvveb.WysiwygEditor.undo();
		} else {
			Vvveb.Undo.undo();
		}
		Vvveb.Builder.selectNode();
	},

	redo: function () {
		if (Vvveb.WysiwygEditor.isActive) {
			Vvveb.WysiwygEditor.redo();
		} else {
			Vvveb.Undo.redo();
		}
		Vvveb.Builder.selectNode();
	},

	//show modal with html content
	save: function () {
		$('#textarea-modal textarea').val(Vvveb.Builder.getHtml());
		$('#textarea-modal').modal();
	},

	//post html content through ajax to save to filesystem/db
	saveAjax: function () {

		var saveUrl = this.dataset.vvvebUrl;
		var url = Vvveb.FileManager.getPageData('file');

		return Vvveb.Builder.saveAjax(url, null, function (data) {
			$('#message-modal').modal().find(".modal-body").html("File saved at: " + data);
		}, saveUrl);
	},

	download: function () {
		filename = /[^\/]+$/.exec(Vvveb.Builder.iframe.src)[0];
		uriContent = "data:application/octet-stream," + encodeURIComponent(Vvveb.Builder.getHtml());

		var link = document.createElement('a');
		if ('download' in link) {
			link.dataset.download = filename;
			link.download = filename;
			link.href = uriContent;
			link.target = "_blank";

			document.body.appendChild(link);
			result = link.click();
			document.body.removeChild(link);
			link.remove();

		} else {
			location.href = uriContent;
		}
	},

	// 打包下载文件下载
	downloadZip: function() {
		Vvveb.domUtils.downloadZip();
	},

	viewport: function () {
		$("#canvas").attr("class", this.dataset.view);
	},

  // 编辑器展开状态切换
	toggleEditor: function () {
		Vvveb.CodeEditorMore.toggle()
	},

	toggleEditorJsExecute: function () {
		Vvveb.Builder.runJsOnSetHtml = this.checked;
	},

	preview: function () {
		(Vvveb.Builder.isPreview == true) ? Vvveb.Builder.isPreview = false : Vvveb.Builder.isPreview = true;
		$("#iframe-layer").toggle();
    $("#vvveb-builder").toggleClass("preview");
    // 预览关闭代码编辑器弹窗
    Vvveb.CodeEditorMore.closeCodeEditor()
	},

	fullscreen: function () {
		launchFullScreen(document); // the whole page
  },

	componentSearch: function () {
		searchText = this.value;

		$("#left-panel .components-list li ol li").each(function () {
			$this = $(this);

			$this.hide();
			if ($this.data("search").indexOf(searchText) > -1) $this.show();
		});
	},

	clearComponentSearch: function () {
		$(".component-search").val("").keyup();
	},

	blockSearch: function () {
		searchText = this.value;

		$("#left-panel .blocks-list li ol li").each(function () {
			$this = $(this);

			$this.hide();
			if ($this.data("search").indexOf(searchText) > -1) $this.show();
		});
	},

	clearBlockSearch: function () {
		$(".block-search").val("").keyup();
	},

	addBoxComponentSearch: function () {
		searchText = this.value;

		$("#add-section-box .components-list li ol li").each(function () {
			$this = $(this);

			$this.hide();
			if ($this.data("search").indexOf(searchText) > -1) $this.show();
		});
	},


	addBoxBlockSearch: function () {
		searchText = this.value;

		$("#add-section-box .blocks-list li ol li").each(function () {
			$this = $(this);

			$this.hide();
			if ($this.data("search").indexOf(searchText) > -1) $this.show();
		});
	},

	//Pages, file/components tree 
	newPage: function () {

		var newPageModal = $('#new-page-modal');
		newPageModal.modal("show").find("form").off("submit").submit(function (e) {

			var data = {};
			$.each($(this).serializeArray(), function () {
				data[this.name] = this.value;
			});


			Vvveb.FileManager.addPage(name, data);
			e.preventDefault();

			var url = "save.php";

			return Vvveb.Builder.saveAjax(url, data.startTemplateUrl, function (data) {
				Vvveb.FileManager.loadPage(data.name);
				Vvveb.FileManager.scrollBottom();
				newPageModal.modal("hide");
			});
		});

	},

	deletePage: function () {

	},

	setDesignerMode: function () {
		//aria-pressed attribute is updated after action is called and we check for false instead of true
		var designerMode = this.attributes["aria-pressed"].value != "true";
		Vvveb.Builder.setDesignerMode(designerMode);
	},
	//layout
	togglePanel: function (panel, cssVar) {
		var panel = $(panel);
		var body = $("body");
		var prevValue = body.css(cssVar);
		if (prevValue !== "0px") {
			panel.data("layout-toggle", prevValue);
			body.css(cssVar, "0px");
			panel.hide();
		} else {
			prevValue = panel.data("layout-toggle");
			body.css(cssVar, '');
			panel.show();

		}
	},

	toggleFileManager: function () {
		Vvveb.Gui.togglePanel("#filemanager", "--builder-filemanager-height");
	},

	toggleLeftColumn: function () {
		Vvveb.Gui.togglePanel("#left-panel", "--builder-left-panel-width");
	},

	toggleRightColumn: function (rightColumnEnabled = null) {
		Vvveb.Gui.togglePanel("#right-panel", "--builder-right-panel-width");
		(rightColumnEnabled == null) ? rightColumnEnabled = this.attributes["aria-pressed"].value == "true" : false;

		$("#vvveb-builder").toggleClass("no-right-panel");
		$(".component-properties-tab").toggle();

		Vvveb.Components.componentPropertiesElement = (rightColumnEnabled ? "#right-panel" : "#left-panel") + " .component-properties";
		if ($("#properties").is(":visible")) $('.component-tab a').show().tab('show');

	},
}

Vvveb.StyleManager = {
	setStyle: function (element, styleProp, value) {
		return element.css(styleProp, value);
	},


	_getCssStyle: function (element, styleProp) {
		var value = "";
		var el = element.get(0);

		if (el.style && el.style.length > 0 && el.style[styleProp])//check inline
			var value = el.style[styleProp];
		else
			if (el.currentStyle)	//check defined css
				var value = el.currentStyle[styleProp];
			else if (window.getComputedStyle) {
				var value = document.defaultView.getDefaultComputedStyle ?
					document.defaultView.getDefaultComputedStyle(el, null).getPropertyValue(styleProp) :
					window.getComputedStyle(el, null).getPropertyValue(styleProp);
			}

		return value;
	},

	getStyle: function (element, styleProp) {
		return this._getCssStyle(element, styleProp);
	}
}

Vvveb.ContentManager = {
	getAttr: function (element, attrName) {
		return element.attr(attrName);
	},

	setAttr: function (element, attrName, value) {
		return element.attr(attrName, value);
	},

	setHtml: function (element, html) {
		return element.html(html);
	},

	getHtml: function (element) {
		return element.html();
	},
}


Vvveb.Sections = {

	selector: '.sections',

	getSections: function () {
		var sections = [];
		var sectionList =
			$('> section, > header, > footer', window.FrameDocument.body);

		sectionList.each(function (i, node) {

			const $node = $(node);

			var section = {
				name: $node.data('name') || node.id.replace(/[^\w+]+/g, ' '),
				id: node.id || $node.data('uuid'),
				type: node.tagName.toLowerCase(),
				node: node
			};
			sections.push(section);
		});

		return sections;
	},

	addSection: function (data) {

		var section = $(tmpl("vvveb-section", data));
		section.data("node", data.node);
		section.attr("data-uuid", data.uuid || data.id);
		section.attr("data-name", data.name);
		section.attr("data-type", data.type);

		$(this.selector).append(section);
	},

	loadSections: function () {
		var sections = this.getSections();
		$(this.selector).html("");
		for (i in sections) {
			this.addSection(sections[i]);
		}

	},

	init: function () {

		$(this.selector).on("click", "> div", function (e) {
			var uuid = $(e.currentTarget).data("uuid");
			var node = window.FrameDocument.querySelector(`#${uuid}`);
			var $node = $(node);

			Vvveb.Builder.frameHtml.animate({
				scrollTop: $node.offset().top
			}, 500);

			//node.click();
			Vvveb.Builder.selectNode(node);
			Vvveb.Builder.loadNodeComponent(node);
		}).on("dblclick", "> div", function (e) {
			$node.click();
		});


		$(this.selector).on("click", ".delete-btn", function (e) {
			var section = $(e.currentTarget).parents(".section-item");
			var node = section.data("node");
			const nodeUUID = $(node).data('uuid');

			nodeUUID && Vvveb.Model2.dispatch({
				type: 'REMOVE',
				uuid: nodeUUID,
			});
			e.preventDefault();
		});

		$(this.selector).on("click", ".up-btn", function (e) {
			var section = $(e.currentTarget).parents(".section-item");
			var node = section.data("node");
			Vvveb.Builder.moveNodeUp(node);
			// Vvveb.Builder.moveNodeUp(section.get(0));

			e.preventDefault();
		});


		$(this.selector).on("click", ".down-btn", function (e) {
			var section = $(e.currentTarget).parents(".section-item");
			var node = section.data("node");
			Vvveb.Builder.moveNodeDown(node);
			// Vvveb.Builder.moveNodeDown(section.get(0));

			e.preventDefault();
		});


		$(this.selector).on("click", ".properties-btn", function (e) {
			var section = $(e.currentTarget).parents(".section-item");
			var node = section.data("node");
			node.click();

			e.preventDefault();
		});

	}
}


Vvveb.FileManager = {
	tree: false,
	pages: {},
	currentPage: false,
	allowedComponents: {},

	init: function (allowedComponents = {}) {

		this.allowedComponents = allowedComponents;
		this.tree = $("#filemanager .tree > ol").html("");

		$(this.tree).on("click", "a", function (e) {
			e.preventDefault();
			return false;
		});

		$(this.tree).on("click", "li[data-page] label", function (e) {
			var page = $(this.parentNode).data("page");
			if (page) Vvveb.FileManager.loadPage(page, allowedComponents);
			return false;
		})

		$(this.tree).on("click", "li[data-component] label ", function (e) {
			node = $(e.currentTarget.parentNode).data("node");

			Vvveb.Builder.frameHtml.animate({
				scrollTop: $(node).offset().top
			}, 1000);

			node.click();
			//Vvveb.Builder.selectNode(node);
			//Vvveb.Builder.loadNodeComponent(node);

			//e.preventDefault();
			//return false;
		}).on("mouseenter", "li[data-component] label", function (e) {

			node = $(e.currentTarget).data("node");
			$(node).trigger("mousemove");

		});
	},

	addPage: function (name, data) {
		this.pages[name] = data;
		data['name'] = name;

		var folder = this.tree;
		if (data.folder) {
			if (!(folder = this.tree.find('li[data-folder="' + data.folder + '"]')).length) {
				data.folderTitle = data.folder[0].toUpperCase() + data.folder.slice(1);
				folder = $(tmpl("vvveb-filemanager-folder", data));
				this.tree.append(folder);
			}

			folder = folder.find("> ol");
		}

		folder.append(
			tmpl("vvveb-filemanager-page", data));
	},

	addPages: function (pages) {
		for (page in pages) {
			this.addPage(pages[page]['name'], pages[page]);
		}
	},

	addComponent: function (name, url, title, page) {
		$("[data-page='" + page + "'] > ol", this.tree).append(
			tmpl("vvveb-filemanager-component", { name: name, url: url, title: title }));
	},

	getComponents: function (allowedComponents = {}) {
		var tree = [];
		function getNodeTree(node, parent) {
			if (node.hasChildNodes()) {
				for (var j = 0; j < node.childNodes.length; j++) {
					child = node.childNodes[j];

					if (child && child["attributes"] != undefined &&
						(matchChild = Vvveb.Components.matchNode(child))) {
						if (Array.isArray(allowedComponents)
							&& allowedComponents.indexOf(matchChild.type) == -1)
							continue;

						element = {
							name: matchChild.name,
							image: matchChild.image,
							type: matchChild.type,
							node: child,
							children: []
						};
						element.children = [];
						parent.push(element);
						element = getNodeTree(child, element.children);
					} else {
						element = getNodeTree(child, parent);
					}
				}
			}

			return false;
		}

		getNodeTree(window.FrameDocument.body, tree);

		return tree;
	},

	loadComponents: function (allowedComponents = {}) {

		var tree = this.getComponents(allowedComponents);
		var html = drawComponentsTree(tree);
		var j = 0;

		function drawComponentsTree(tree) {
			var html = $("<ol></ol>");
			j++;
			for (i in tree) {
				var node = tree[i];

				if (tree[i].children.length > 0) {
					var li = $('<li data-component="' + node.name + '">\
					<label for="id' + j + '" style="background-image:url(' + Vvveb.imgBaseUrl + node.image + ')"><span>' + node.name + '</span></label>\
					<input type="checkbox" id="id' + j + '">\
					</li>');
					li.data("node", node.node);
					li.append(drawComponentsTree(node.children));
					html.append(li);
				}
				else {
					var li = $('<li data-component="' + node.name + '" class="file">\
							<label for="id' + j + '" style="background-image:url(' + Vvveb.imgBaseUrl + node.image + ')"><span>' + node.name + '</span></label>\
							<input type="checkbox" id="id' + j + '"></li>');
					li.data("node", node.node);
					html.append(li);
				}
			}

			return html;
		}

		$("[data-page='" + this.currentPage + "'] > ol", this.tree).replaceWith(html);
	},

	getCurrentUrl: function () {
		if (this.currentPage)
			return this.pages[this.currentPage]['url'];
	},

	getPageData: function (key) {
		if (this.currentPage)
			return this.pages[this.currentPage][key];
	},


	getCurrentFileName: function () {
		if (this.currentPage) {
			var folder = this.pages[this.currentPage]['folder'];
			folder = folder ? folder + '/' : '';
			return folder + this.pages[this.currentPage]['filename'];
		}
	},

	reloadCurrentPage: function () {
		if (this.currentPage)
			return this.loadPage(this.currentPage);
	},

	loadPage: function (name, allowedComponents = false, disableCache = true) {
		$("[data-page]", this.tree).removeClass("active");
		$("[data-page='" + name + "']", this.tree).addClass("active");

		this.currentPage = name;
		var url = this.pages[name]['url'];

		Vvveb.Builder.loadUrl(url + (disableCache ? (url.indexOf('?') > -1 ? '&' : '?') + Math.random() : ''),
			function () {
				Vvveb.FileManager.loadComponents(allowedComponents);
				Vvveb.Sections.loadSections();
			});
	},

	scrollBottom: function () {
		var scroll = this.tree.parent();
		scroll.scrollTop(scroll.prop("scrollHeight"));
	},
}


// Toggle fullscreen
function launchFullScreen(document) {
	if (document.documentElement.requestFullScreen) {

		if (document.FullScreenElement)
			document.exitFullScreen();
		else
			document.documentElement.requestFullScreen();
		//mozilla		
	} else if (document.documentElement.mozRequestFullScreen) {

		if (document.mozFullScreenElement)
			document.mozCancelFullScreen();
		else
			document.documentElement.mozRequestFullScreen();
		//webkit	  
	} else if (document.documentElement.webkitRequestFullScreen) {

		if (document.webkitFullscreenElement)
			document.webkitExitFullscreen();
		else
			document.documentElement.webkitRequestFullScreen();
		//ie	  
	} else if (document.documentElement.msRequestFullscreen) {

		if (document.msFullScreenElement)
			document.msExitFullscreen();
		else
			document.documentElement.msRequestFullscreen();
	}
}
