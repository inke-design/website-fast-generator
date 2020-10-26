// bootstrap4代码片段
import SigninSplit from "./bootstrap4/signin-split";
import SliderHeader from "./bootstrap4/slider-header";
import ImageGallery from "./bootstrap4/image-gallery";

// 自定义代码片段
import { template as LayoutTemplate, css, script } from "./custome/layout/index.js";
import DemoTemplate from "./custome/demo/index";

// Navbar模版
import InkeNavbar from "./navbar/inke-navbar";
import NavbarOne from "./navbar/navbar-one";
import NavbarTwo from "./navbar/navbar-two";
import NavbarThree from "./navbar/navbar-three";

// banner模版
import BannerOne from "./banner/banner-one";
import BannerTwo from "./banner/banner-two";
import BannerThree from "./banner/banner-three";

// Content
import BackVideoContent from "./content/background-videdo-content";
import VideoCardCotent from "./content/video-card-content";
import AboutUs from "./content/about-us";
import MoreIcon from "./content/more-icon";

// Footer
import LiteFooter from "./footer/lite/index";
import WithGroupFooter from "./footer/with-group-footer";
import ICPFooter from "./footer/icp-footer";


const TEST_IMAGE = "https://img.ikstatic.cn/MTYwMjgxMzEyMzMwOSMzMTUjcG5n.png";

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
  navbar: {
    groupName: "Navbar模板",
    list: [
      {
        key: "navbar/inke-navbar",
        name: "映客官网Navbar",
        dragHtml: '<img src="https://img.ikstatic.cn/MTYwMzQxOTU5MjM2NSM1ODQjcG5n.png">',
        image: '//img.ikstatic.cn/MTYwMzQxOTU5MjM2NSM1ODQjcG5n.png',
        html: InkeNavbar.html,
        css: InkeNavbar.css,
        script: InkeNavbar.script,
      },
      {
        key: "navbar/navbar-one",
        name: "Navbar模板一",
        dragHtml: '<img src="https://img.ikstatic.cn/MTYwMzM1MzI2MjM4NyMyODkjanBn.jpg">',
        image: '//img.ikstatic.cn/MTYwMzM1MzI2MjM4NyMyODkjanBn.jpg',
        html: NavbarOne.html,
        css: NavbarOne.css,
        script: NavbarOne.script,
      },
      {
        key: "navbar/navbar-two",
        name: "Navbar模板二",
        dragHtml: '<img src="https://img.ikstatic.cn/MTYwMzM1ODc3MjYxMyM1MjUjanBn.jpg">',
        image: '//img.ikstatic.cn/MTYwMzM1ODc3MjYxMyM1MjUjanBn.jpg',
        html: NavbarTwo.html,
        css: NavbarTwo.css,
        script: NavbarTwo.script,
      },
      {
        key: "navbar/navbar-three",
        name: "Navbar模板三",
        dragHtml: '<img src="https://img.ikstatic.cn/MTYwMzM2MDAwNTQ4OSM2NzcjanBn.jpg">',
        image: '//img.ikstatic.cn/MTYwMzM2MDAwNTQ4OSM2NzcjanBn.jpg',
        html: NavbarThree.html,
        css: NavbarThree.css,
        script: NavbarThree.script,
      },
    ]
  },
  banner: {
    groupName: "Banner模板",
    list: [
      {
        key: "banner/banner-one",
        name: "Banner模板一",
        dragHtml: '<img src="https://img.ikstatic.cn/MTYwMzQyNDY3MTMxMSMxODgjanBn.jpg">',
        image: '//img.ikstatic.cn/MTYwMzQyNDY3MTMxMSMxODgjanBn.jpg',
        html: BannerOne.html,
        css: BannerOne.css,
        script: BannerOne.script,
        exportModule: BannerOne.exportModule,
      },
      {
        key: "banner/banner-two",
        name: "Banner模板二",
        dragHtml: '<img src="https://img.ikstatic.cn/MTYwMzQ0Mjc1NDA5NSM1ODkjanBn.jpg">',
        image: '//img.ikstatic.cn/MTYwMzQ0Mjc1NDA5NSM1ODkjanBn.jpg',
        html: BannerTwo.html,
        css: BannerTwo.css,
        script: BannerTwo.script,
        exportModule: BannerOne.exportModule,
      },
      {
        key: "banner/banner-three",
        name: "Banner模板三",
        dragHtml: '<img src="https://img.ikstatic.cn/MTYwMzQ0Mjc2NDI5OSM1NTIjanBn.jpg">',
        image: '//img.ikstatic.cn/MTYwMzQ0Mjc2NDI5OSM1NTIjanBn.jpg',
        html: BannerThree.html,
        css: BannerThree.css,
        script: BannerThree.script,
        exportModule: BannerOne.exportModule,
      },
    ]
  },
  content: {
    groupName: "Content模板",
    list: [
      {
        key: "content/back-video-content",
        name: "全屏背景视频内容模板",
        dragHtml: '<img src="https://img.ikstatic.cn/MTYwMzQyMjIwNjY0NCM1NTYjcG5n.png">',
        image: '//img.ikstatic.cn/MTYwMzQyMjIwNjY0NCM1NTYjcG5n.png',
        html: BackVideoContent.html,
        css: BackVideoContent.css,
        script: BackVideoContent.script,
      },
      {
        key: "content/video-card",
        name: "带视频播放内容模板",
        dragHtml: '<img src="https://img.ikstatic.cn/MTYwMzMzNzUzMzI4NCM3NTAjcG5n.png">',
        image: '//img.ikstatic.cn/MTYwMzMzNzUzMzI4NCM3NTAjcG5n.png',
        html: VideoCardCotent.html,
        css: VideoCardCotent.css,
        script: VideoCardCotent.script,
      },
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
        key: "content/more-icon",
        name: "多图标描述",
        dragHtml: '<img src="https://img.ikstatic.cn/MTYwMzYzODE1NTM2NSMzOTgjanBn.jpg">',
        image: '//img.ikstatic.cn/MTYwMzYzODE1NTM2NSMzOTgjanBn.jpg',
        html: MoreIcon.html,
        css: MoreIcon.css,
        script: MoreIcon.script,
      },
    ]
  },
  footer: {
    groupName: "Footer模板",
    list: [
      {
        key: "footer/lite",
        name: "简洁Footer",
        dragHtml: '<img src="https://img.ikstatic.cn/MTYwMzMzNDE4OTg1NyMyNDgjcG5n.png">',
        image: '//img.ikstatic.cn/MTYwMzMzNDE4OTg1NyMyNDgjcG5n.png',
        html: LiteFooter.html,
        css: LiteFooter.css,
        script: LiteFooter.script,
      },
      {
        key: "footer/with-group-footer",
        name: "带分组Footer",
        dragHtml: `<img src="https://img.ikstatic.cn/MTYwMzMzNDEyMDA2MiM0NTMjcG5n.png">`,
        image: '//img.ikstatic.cn/MTYwMzMzNDEyMDA2MiM0NTMjcG5n.png',
        html: WithGroupFooter.html,
        css: WithGroupFooter.css,
        script: WithGroupFooter.script,
      },
      {
        key: "footer/icp-footer",
        name: "带备案信息Footer",
        dragHtml: `<img src="https://img.ikstatic.cn/MTYwMzMzMzYyNzY2MiM3MDIjcG5n.png">`,
        image: '//img.ikstatic.cn/MTYwMzMzMzYyNzY2MiM3MDIjcG5n.png',
        html: ICPFooter.html,
        css: ICPFooter.css,
        script: ICPFooter.script,
      },
    ],
  }
};

export default templateConfig;
