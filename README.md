# 官网快速搭建平台

## 前言
本项目基于开源项目[VvvebJs](https://github.com/givanz/VvvebJs)再开发。

技术栈: bootstrap4、jQuery、原生JS

> 拓展后支持ES6语法及模块化开发, 采用gulp打包


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
│   ├── libs               库文件，主要逻辑在此
│   ├── scss
│   └── template           *模板库
└── yarn.lock
```
开发过程中常接触的文件夹一般是：
* template文件夹，用于新增/修改模板
* libs文件夹，用于修改/拓展平台的一些逻辑

