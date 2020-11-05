import prettier from "prettier/standalone";
import parserHtml from "prettier/parser-html";
import parserCss from "prettier/parser-postcss";
var miniHtmlCode = "<span class=\"zrh0\">\u5728\u4EFB\u610F\u7F51\u7AD9\u590D\u5236\u5185\u5BB9\uFF0C\u518D\u5230\u672C\u9875\u9762<span>&nbsp;</span></span><div class=\"zrh2 zrhN0\">Ctrl</div><span class=\"zrh0\">+<span>&nbsp;</span></span><div class=\"zrh5 zrhN0\">V</div> ";
var miniCssCode = ".vrj2 {min-width: 60px}.vrj5 {min-width: 50px}.vrj0 {color: rgb(32, 32, 35);font-family: Avenir, Helvetica, Arial, sans-serif;font-size: 14px;font-style: normal;font-weight: 400;white-space: normal;word-spacing: 0px;background-color: rgb(237, 237, 237);display: inline !important;float: none;}.vrjN0 {padding: 0px 12px;margin: 6px;border-radius: 1000px;background-color: rgb(237, 237, 237);border: 2px solid rgb(202, 200, 202);display: inline-flex;justify-content: center;align-items: center;min-height: 36px;font-weight: 900;cursor: pointer;font-family: Avenir, Helvetica, Arial, sans-serif;font-size: 14px;font-style: normal;white-space: normal;word-spacing: 0px;color: rgb(245, 37, 37);} ";
var htmlCode = prettier.format(miniHtmlCode, {
  parser: "html",
  plugins: [parserHtml]
});
var cssCode = prettier.format(miniCssCode, {
  parser: "css",
  plugins: [parserCss]
});
console.log("-----html-----");
console.log(htmlCode);
console.log("-----html-----");
console.log("-----css-----");
console.log(cssCode);
console.log("-----csss-----");