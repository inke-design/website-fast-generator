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
import TemplateNavbarOne from "./wang/template-one/template-navbar-one";
import TemplateTwoNavbar from "./wang/template-two/template-two-navbar";
import TemplateThreeNavbar from "./wang/template-three/template-three-navbar";
import TemplateFourNavbar from "./wang/template-four/template-four-navbar";
import Site1Navbar from "./site/site1/navbar";
import Site2Navbar from "./site/site2/navbar";
import Site3Navbar from "./site/site3/navbar";
import Site4Navbar from "./site/site4/navbar";

// banner模版
import BannerOne from "./banner/banner-one";
import BannerTwo from "./banner/banner-two";
import BannerThree from "./banner/banner-three";
import TemplateTwoBanner from "./wang/template-two/template-two-banner";
import TemplateThreeBanner from "./wang/template-three/template-three-banner";
import TemplateFourBanner from "./wang/template-four/template-four-banner";

// Content
import BackVideoContent from "./content/background-videdo-content";
import VideoCardCotent from "./content/video-card-content";
import AboutUs from "./content/about-us";
import MoreIcon from "./content/more-icon";
import TemplateContentOneServe from "./wang/template-one/template-content-one-serve";
import TemplateContentOneCase from "./wang/template-one/template-content-one-case";
import TemplateContentOneAdvantage from "./wang/template-one/template-content-one-advantage";
import TemplateTwoDesc from "./wang/template-two/template-two-desc";
import TemplateThreeDesc from "./wang/template-three/template-three-desc";
import TemplateFourDesc from "./wang/template-four/template-four-desc";
import TemplateTwoShow from "./wang/template-two/template-two-show";
import TemplateThreeShow from "./wang/template-three/template-three-show";
import TemplateFourShow from "./wang/template-four/template-four-show";
import TemplateTwoServer from "./wang/template-two/template-two-server";
import TemplateTwoNumber from "./wang/template-two/template-two-number";
import TemplateTwoTeam from "./wang/template-two/template-two-team";
import TemplateThreeStory from "./wang/template-three/template-three-story";
import TemplateFourServer from "./wang/template-four/template-four-server";
import TemplateFourNews from "./wang/template-four/template-four-news";
import Site1Content from "./site/site1/content";
import Site2Content from "./site/site2/content";
import Site3Content from "./site/site3/content";
import Site4Content1 from "./site/site4/content";
import Site4Content2 from "./site/site4/content2";

// Footer
import LiteFooter from "./footer/lite/index";
import WithGroupFooter from "./footer/with-group-footer";
import ICPFooter from "./footer/icp-footer";
import TemplateFooterOne from "./wang/template-one/template-footer-one";
import TemplateTwoFooter from "./wang/template-two/template-two-footer";
import TemplateThreeFooter from "./wang/template-three/template-three-footer";
import TemplateFourFooter from "./wang/template-four/template-four-footer";
import Site1Footer from "./site/site1/footer";
import Site3Footer from "./site/site3/footer";

const TEST_IMAGE = "https://img.ikstatic.cn/MTYwMjgxMzEyMzMwOSMzMTUjcG5n.png";
const TEST_DRAG_HTML = `<img src="${TEST_IMAGE}">`

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
      {
        key: "navbar/navbar-four",
        name: "Navbar模板四",
        dragHtml: TEST_DRAG_HTML,
        image: TEST_IMAGE,
        html: TemplateNavbarOne.html,
        css: TemplateNavbarOne.css,
        script: TemplateNavbarOne.script,
      },
      {
        key: "navbar/template-navbar-two",
        name: "模版二Navbar",
        dragHtml: TEST_DRAG_HTML,
        image: TEST_IMAGE,
        html: TemplateTwoNavbar.html,
        css: TemplateTwoNavbar.css,
        script: TemplateTwoNavbar.script,
      },{
        key: "navbar/template-navbar-three",
        name: "模版三Navbar",
        dragHtml: TEST_DRAG_HTML,
        image: TEST_IMAGE,
        html: TemplateThreeNavbar.html,
        css: TemplateThreeNavbar.css,
        script: TemplateThreeNavbar.script,
      },{
        key: "navbar/template-navbar-four",
        name: "模版四Navbar",
        dragHtml: TEST_DRAG_HTML,
        image: TEST_IMAGE,
        html: TemplateFourNavbar.html,
        css: TemplateFourNavbar.css,
        script: TemplateFourNavbar.script,
      },
      {
        key: "navbar/navbar-5",
        name: "Navbar模板五",
        dragHtml: TEST_DRAG_HTML,
        image: TEST_IMAGE,
        html: Site1Navbar.html,
        css: Site1Navbar.css,
        script: Site1Navbar.script,
      },
      {
        key: "navbar/navbar-6",
        name: "Navbar模板六",
        dragHtml: TEST_DRAG_HTML,
        image: TEST_IMAGE,
        html: Site2Navbar.html,
        css: Site2Navbar.css,
        script: Site2Navbar.script,
      },
      {
        key: "navbar/navbar-7",
        name: "Navbar模板七",
        dragHtml: TEST_DRAG_HTML,
        image: TEST_IMAGE,
        html: Site3Navbar.html,
        css: Site3Navbar.css,
        script: Site3Navbar.script,
        exportModule: Site3Navbar.exportModule || {},
      },
      {
        key: "navbar/navbar-8",
        name: "Navbar模板八",
        dragHtml: TEST_DRAG_HTML,
        image: TEST_IMAGE,
        html: Site4Navbar.html,
        css: Site4Navbar.css,
        script: Site4Navbar.script,
        exportModule: Site4Navbar.exportModule || {},
      }
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
      {
        key: "banner/template-banner-two",
        name: "模板二banner",
        dragHtml: TEST_DRAG_HTML,
        image: TEST_IMAGE,
        html: TemplateTwoBanner.html,
        css: TemplateTwoBanner.css,
        script: TemplateTwoBanner.script,
        exportModule: TemplateTwoBanner.exportModule,
      },
      {
        key: "banner/template-banner-three",
        name: "模板三banner",
        dragHtml: TEST_DRAG_HTML,
        image: TEST_IMAGE,
        html: TemplateThreeBanner.html,
        css: TemplateThreeBanner.css,
        script: TemplateThreeBanner.script,
        exportModule: TemplateThreeBanner.exportModule,
      },
      {
        key: "banner/template-banner-four",
        name: "模板四banner",
        dragHtml: TEST_DRAG_HTML,
        image: TEST_IMAGE,
        html: TemplateFourBanner.html,
        css: TemplateFourBanner.css,
        script: TemplateFourBanner.script,
        exportModule: TemplateFourBanner.exportModule,
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
      {
        key: "content/template-content-one-serve",
        name: "模版一内容-服务",
        dragHtml: TEST_DRAG_HTML,
        image: TEST_IMAGE,
        html: TemplateContentOneServe.html,
        css: TemplateContentOneServe.css,
        script: TemplateContentOneServe.script,
      },
      {
        key: "navbar/template-content-one-case",
        name: "模版一内容-案例",
        dragHtml: TEST_DRAG_HTML,
        image: TEST_IMAGE,
        html: TemplateContentOneCase.html,
        css: TemplateContentOneCase.css,
        script: TemplateContentOneCase.script,
      },
      {
        key: "navbar/template-content-one-advantage",
        name: "模版一内容-优势",
        dragHtml: TEST_DRAG_HTML,
        image: TEST_IMAGE,
        html: TemplateContentOneAdvantage.html,
        css: TemplateContentOneAdvantage.css,
        script: TemplateContentOneAdvantage.script,
      },
      {
        key: "navbar/template-content-two-desc",
        name: "模版二内容-描述",
        dragHtml: TEST_DRAG_HTML,
        image: TEST_IMAGE,
        html: TemplateTwoDesc.html,
        css: TemplateTwoDesc.css,
        script: TemplateTwoDesc.script,
      },
      {
        key: "navbar/template-content-two-show",
        name: "模版二内容-展示",
        dragHtml: TEST_DRAG_HTML,
        image: TEST_IMAGE,
        html: TemplateTwoShow.html,
        css: TemplateTwoShow.css,
        script: TemplateTwoShow.script,
      },
      {
        key: "navbar/template-content-two-server",
        name: "模版二内容-服务",
        dragHtml: TEST_DRAG_HTML,
        image: TEST_IMAGE,
        html: TemplateTwoServer.html,
        css: TemplateTwoServer.css,
        script: TemplateTwoServer.script,
      },
      {
        key: "navbar/template-content-two-number",
        name: "模版二内容-数据",
        dragHtml: TEST_DRAG_HTML,
        image: TEST_IMAGE,
        html: TemplateTwoNumber.html,
        css: TemplateTwoNumber.css,
        script: TemplateTwoNumber.script,
      },
      {
        key: "navbar/template-content-two-team",
        name: "模版二内容-团队",
        dragHtml: TEST_DRAG_HTML,
        image: TEST_IMAGE,
        html: TemplateTwoTeam.html,
        css: TemplateTwoTeam.css,
        script: TemplateTwoTeam.script,
      },
      {
        key: "navbar/template-content-three-desc",
        name: "模版三内容-描述",
        dragHtml: TEST_DRAG_HTML,
        image: TEST_IMAGE,
        html: TemplateThreeDesc.html,
        css: TemplateThreeDesc.css,
        script: TemplateThreeDesc.script,
      },
      {
        key: "navbar/template-content-three-show",
        name: "模版三内容-展示",
        dragHtml: TEST_DRAG_HTML,
        image: TEST_IMAGE,
        html: TemplateThreeShow.html,
        css: TemplateThreeShow.css,
        script: TemplateThreeShow.script,
      },
      {
        key: "navbar/template-content-three-story",
        name: "模版三内容-故事",
        dragHtml: TEST_DRAG_HTML,
        image: TEST_IMAGE,
        html: TemplateThreeStory.html,
        css: TemplateThreeStory.css,
        script: TemplateThreeStory.script,
      },
      {
        key: "navbar/template-content-four-desc",
        name: "模版四内容-描述",
        dragHtml: TEST_DRAG_HTML,
        image: TEST_IMAGE,
        html: TemplateFourDesc.html,
        css: TemplateFourDesc.css,
        script: TemplateFourDesc.script,
      },
      {
        key: "navbar/template-content-four-show",
        name: "模版四内容-展示",
        dragHtml: TEST_DRAG_HTML,
        image: TEST_IMAGE,
        html: TemplateFourShow.html,
        css: TemplateFourShow.css,
        script: TemplateFourShow.script,
      },
      {
        key: "navbar/template-content-four-server",
        name: "模版四内容-服务",
        dragHtml: TEST_DRAG_HTML,
        image: TEST_IMAGE,
        html: TemplateFourServer.html,
        css: TemplateFourServer.css,
        script: TemplateFourServer.script,
      },
      {
        key: "navbar/template-content-four-news",
        name: "模版四内容-新闻",
        dragHtml: TEST_DRAG_HTML,
        image: TEST_IMAGE,
        html: TemplateFourNews.html,
        css: TemplateFourNews.css,
        script: TemplateFourNews.script,
      },
      {
        key: "content/nike-content-1",
        name: "耐克-商品-宫格",
        dragHtml: TEST_DRAG_HTML,
        image: TEST_IMAGE,
        html: Site1Content.html,
        css: Site1Content.css,
        script: Site1Content.script,
      },
      {
        key: "content/site2-content",
        name: "关于我们区快",
        dragHtml: TEST_DRAG_HTML,
        image: TEST_IMAGE,
        html: Site2Content.html,
        css: Site2Content.css,
        script: Site2Content.script,
      },
      {
        key: "content/navbar-7",
        name: "content模板",
        dragHtml: TEST_DRAG_HTML,
        image: TEST_IMAGE,
        html: Site3Content.html,
        css: Site3Content.css,
        script: Site3Content.script,
        exportModule: Site3Content.exportModule || {},
      },
      {
        key: "content/content-bootrap1",
        name: "content模板",
        dragHtml: TEST_DRAG_HTML,
        image: TEST_IMAGE,
        html: Site4Content1.html,
        css: Site4Content1.css,
        script: Site4Content1.script,
        exportModule: Site4Content1.exportModule || {},
      },
      {
        key: "content/content-bootrap1",
        name: "content模板",
        dragHtml: TEST_DRAG_HTML,
        image: TEST_IMAGE,
        html: Site4Content2.html,
        css: Site4Content2.css,
        script: Site4Content2.script,
        exportModule: Site4Content2.exportModule || {},
      }
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
        name: "带icpFooter",
        dragHtml: `<img src="https://img.ikstatic.cn/MTYwMzMzMzYyNzY2MiM3MDIjcG5n.png">`,
        image: '//img.ikstatic.cn/MTYwMzMzMzYyNzY2MiM3MDIjcG5n.png',
        html: ICPFooter.html,
        css: ICPFooter.css,
        script: ICPFooter.script,
      },
      {
        key: "footer/template-footer-one",
        name: "模版一底部",
        dragHtml: TEST_DRAG_HTML,
        image: TEST_IMAGE,
        html: TemplateFooterOne.html,
        css: TemplateFooterOne.css,
        script: TemplateFooterOne.script,
      },
      {
        key: "footer/template-footer-two",
        name: "模版二底部",
        dragHtml: TEST_DRAG_HTML,
        image: TEST_IMAGE,
        html: TemplateTwoFooter.html,
        css: TemplateTwoFooter.css,
        script: TemplateTwoFooter.script,
      },
      {
        key: "footer/template-footer-three",
        name: "模版三底部",
        dragHtml: TEST_DRAG_HTML,
        image: TEST_IMAGE,
        html: TemplateThreeFooter.html,
        css: TemplateThreeFooter.css,
        script: TemplateThreeFooter.script,
      },
      {
        key: "footer/template-footer-four",
        name: "模版四底部",
        dragHtml: TEST_DRAG_HTML,
        image: TEST_IMAGE,
        html: TemplateFourFooter.html,
        css: TemplateFourFooter.css,
        script: TemplateFourFooter.script,
      },
      {
        key: "footer/nike-footer-1",
        name: "耐克-商品-footer",
        dragHtml: TEST_DRAG_HTML,
        image: TEST_IMAGE,
        html: Site1Footer.html,
        css: Site1Footer.css,
        script: Site1Footer.script,
      },
      {
        key: "footer/site3-footer",
        name: "简洁footer",
        dragHtml: TEST_DRAG_HTML,
        image: TEST_IMAGE,
        html: Site3Footer.html,
        css: Site3Footer.css,
        script: Site3Footer.script,
        exportModule: Site3Footer.exportModule || {},
      },
    ],
  }
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
