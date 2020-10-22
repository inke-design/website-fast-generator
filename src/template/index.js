// bootstrap4代码片段
import SigninSplit from "./bootstrap4/signin-split";
import SliderHeader from "./bootstrap4/slider-header";
import ImageGallery from "./bootstrap4/image-gallery";

// 自定义代码片段
import { template as LayoutTemplate, css, script } from "./custome/layout/index.js";
import DemoTemplate from "./custome/demo/index";

// Footer
import LiteFooter from "./footer/lite/index";
import WithGroupFooter from "./footer/with-group-footer";


const TEST_IMAGE = "//img.ikstatic.cn/MTYwMjgxMzEyMzMwOSMzMTUjcG5n.png";

const templateConfig = {
  bootstrap4: {
    groupName: "Bootstrap 4代码片段",
    // 是否不显示
    hide: true,
    list: [
      {
        key: "bootstrap4/signin-split",
        name: "登录模板",
        dragHtml: '<img src="' + Vvveb.baseUrl + 'icons/product.png">',
        image:
          "https://startbootstrap.com/assets/img/screenshots/snippets/sign-in-split.jpg",
        html: SigninSplit,
      },
      {
        key: "bootstrap4/slider-header",
        name: "轮播图模板",
        dragHtml: '<img src="' + Vvveb.baseUrl + 'icons/product.png">',
        image:
          "https://startbootstrap.com/assets/img/screenshots/snippets/full-slider.jpg",
        html: SliderHeader,
      },
      {
        key: "bootstrap4/image-gallery",
        name: "图库模板",
        image:
          "https://startbootstrap.com/assets/img/screenshots/snippets/thumbnail-gallery.jpg",
        dragHtml: '<img src="' + Vvveb.baseUrl + 'icons/product.png">',
        html: ImageGallery,
      },
    ],
  },
  custome: {
    groupName: "自定义代码片段",
    // 是否不显示
    hide: true,
    list: [
      {
        // 是否不显示
        // hide: true,
        key: "custome/layout",
        name: "layout容器",
        dragHtml: `<img src="${TEST_IMAGE}">`,
        image: TEST_IMAGE,
        html: LayoutTemplate,
        css,
        script,
      },
      {
        key: "custome/demo",
        name: "demo 片段",
        dragHtml: `<img src="${TEST_IMAGE}">`,
        image: TEST_IMAGE,
        html: DemoTemplate,
      },
    ],
  },
  footer: {
    groupName: "Footer模板",
    list: [
      {
        key: "footer/lite",
        name: "简洁Footer",
        dragHtml: `<img src="${TEST_IMAGE}">`,
        image: TEST_IMAGE,
        html: LiteFooter.html,
        css: LiteFooter.css,
        script: LiteFooter.script,
      },
      {
        key: "footer/with-group-footer",
        name: "带分组Footer",
        dragHtml: `<img src="${TEST_IMAGE}">`,
        image: TEST_IMAGE,
        html: WithGroupFooter.html,
        css: WithGroupFooter.css,
        script: WithGroupFooter.script,
      },
    ],
  }
};

export default templateConfig;
