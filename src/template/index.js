// 主要内容
import AboutUs from "./content/about-us";
import DemoOne from "./content/demo-one";

const templateConfig = {
  content: {
    groupName: "Content模板",
    list: [
      {
        key: "content/about-us",
        name: "关于我们模版",
        dragHtml: '<img src="https://img.ikstatic.cn/MTYwMzYzODMzNDQ1MiM4MjgjanBn.jpg">',
        image: '//img.ikstatic.cn/MTYwMzYzODMzNDQ1MiM4MjgjanBn.jpg',
        html: AboutUs.html,
        css: AboutUs.css,
        script: AboutUs.script,
      },
      {
        key: "content/demo-one",
        name: "测试模板",
        dragHtml: '<img src="https://images.unsplash.com/photo-1494894194458-0174142560c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80">',
        image: 'https://images.unsplash.com/photo-1494894194458-0174142560c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
        html: DemoOne.html,
        css: DemoOne.css,
        script: DemoOne.script,
      },
    ]
  },
};



function addLocalTemplates() {
  const localTemplates = Vvveb.domUtils.getTemplates();

  if(localTemplates && localTemplates.length) {
    templateConfig['__custome__'] = {
      groupName: '自定义模版',
      list: localTemplates,
    }
  }
}

addLocalTemplates();


export default templateConfig;
