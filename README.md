# 官网快速搭建平台

## 前言
本项目基于开源项目[VvvebJs](https://github.com/givanz/VvvebJs)再开发。

技术栈: bootstrap4、jQuery、原生JS

> 拓展后支持ES6语法及模块化开发, 采用gulp打包

## DEMO:
[https://inke-design.github.io/website-fast-generator/editor.html](https://inke-design.github.io/website-fast-generator/editor.html)

## 使用
- 开发调试
1. `npm install` 或者 `yarn install`
2. `npm run dev`
3. vscode安装`Live Server`插件（相当于一个http资源服务器
3. 在`dist`目录找到`editor.html`，右键`Open with Live Server`,即可实时预览

- 生产打包
1. `npm install` 或者 `yarn install`
2. 根目录执行`npm run build`


## 项目结构
```
├── LICENSE
├── README.md
├── dist                   打包后文件目录
├── gulpfile.js            gulp配置文件
├── node_modules
├── package.json
├── src                    开发源代码目录
│   ├── css                样式
│   ├── demo
│   ├── editor.html        编辑器的html
│   ├── fonts              字体
│   ├── img                图片资源
│   ├── js                 第三方js
├── libs                   库文件，主要逻辑在此
│   ├── autocomplete
│   ├── bootstrap-colorpicker
│   ├── builder            编辑器的主要逻辑
│   ├── codemirror
│   ├── core               数据驱动iframe渲染的主要逻辑
│   └── jszip
│   ├── scss
│   └── template           *模板库
└── yarn.lock
```
开发过程中常接触的文件夹一般是：
* template文件夹，用于新增/修改模板
* libs/builder 编辑器逻辑相关
* libs/core    生成网页主逻辑

## Todo List
What did we do & What will we do

#### v0.1
- [x] 支持ES6语法及转译
- [x] 支持import/export modules
- [x] 模板分离html、css、script
- [x] model层设计，劫持所有操作，统一管理所有action
- [x] 模板html、css、script实时编辑预览、语法高亮
- [x] 内置4套Navbar模板、4套Content模板、3套Footer模板、3套Banner模板

#### v0.2
- [x] 数据驱动设计
- [x] 生成更好的网页结构
- [ ] 自定义模板，一键保存
  - [x] 支持导入html、css、script
  - [ ] 接入compile
- [x] 网页编辑器支持语法提示，自动补全([monaco-editor](https://github.com/microsoft/monaco-editor))
- [x] 网页可以拆分html、css、script独立文件导出([jsZip](https://github.com/Stuk/jszip))
- [x] 更容易的选中编辑模版
- [ ] 组件适配移动端
- [x] 编辑器显示区域扩大
- [ ] 更多的模板
- [ ] 组件适配移动端
- [ ] 导出网页可再次导入以模板维度修改
- [ ] 模板支持通过本地html、css、js文件编写，更好的语法提示, node统一打包处理




