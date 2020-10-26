const html = `
<section class="inke-navbar-1">
<div class="header_wrapper" style="width: 1300px">
  <img id="inke-logo" class="logo" src="https://img.ikstatic.cn/MTU5MDExOTQzNDY0OCMgODcjcG5n.png" />
  <ul class="nav">
    <li><a href="/">首页</a></li>
    <li class="nav-li">
      <a href="./news/index.html">公司新闻</a>
      <div class="nav-li-children">
        <a href="/news/index.html#home/1000">集团要闻</a>
        <a href="/news/index.html#home/1001">业务前沿</a>
        <a href="/news/index.html#home/1002">市场动态</a>
        <a href="/news/index.html#home/1003">正能量行动</a>
      </div>
    </li>
    <li class="nav-li">
      <a href="./products/index.html">产品展示</a>
      <div class="nav-li-children">
        <a href="./products/index.html#inke" id="inke-app-nav">映客APP</a>
        <a href="./live-show.html" id="show-game" style="display: none">演出剧</a>
        <a href="./products/index.html#gmu" class="other-app-nav">积目APP</a>
        <a href="./products/index.html#duiyuan" class="other-app-nav">对缘APP</a>
      </div>
    </li>
    <li class="nav-li">
      <a href="./social-duty/index.html">社会责任</a>
      <div class="nav-li-children">
        <a href="./social-duty/index.html#penergy">小映正能量</a>
        <a href="./social-duty/index.html#welfare">小映公益</a>
        <a href="./social-duty/index.html#dang">党团工作</a>
      </div>
    </li>
    <li class="_plug">
      <a href="./investor_relations.html">投资者关系</a>
    </li>
    <li class="_plug none" id="live-settlement" style="display: list-item">
      <a href="./live_organization.html">直播机构入驻</a>
    </li>
    <li class="nav-li none" id="settlement">
      <a href="javascript:void(0)">入驻</a>
      <div class="nav-li-children">
        <a href="./live_organization.html">直播机构入驻</a>
        <a href="./live_sign.html">主播签约</a>
      </div>
    </li>
    <li><a href="https://pay.busi.inke.cn/">账户充值</a></li>
    <li>
      <a href="./contact.html">联系我们</a>
      <div class="nav-li-children">
        <a href="https://app.mokahr.com/apply/inke/26115">映客招聘</a>
      </div>
    </li>
  </ul>
</div>
</section>
`;

const css = `
<style type="text/css">
.inke-navbar-1 {
  height: 90px;
  z-index: 999;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500
}

.inke-navbar-1 .header_wrapper {
  box-sizing: border-box;
  padding: 0 88px;
  margin: 0 auto;
  font-size: 14px;
  color: #333;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-content: center;
  align-items: center;
  -webkit-align-content: center;
  -webkit-align-items: center;
  background: rgba(255, 255, 255, 0)
}

.inke-navbar-1 .header_wrapper .logo {
  height: 36px
}

.inke-navbar-1 .header_wrapper_hover {
  background: #fff
}

.inke-navbar-1 .header_wrapper_hover .nav li>a {
  color: #333 !important
}

.inke-navbar-1 .header_wrapper_hover .header_rg .login {
  color: #00d8c9;
  border: 1px solid #00d8c9
}

.inke-navbar-1 .header_wrapper .inke_logo {
  margin-top: 26px
}

.inke-navbar-1 .header_wrapper .inke_logo img {
  display: block;
  width: 156px;
  margin-right: 20px
}

.inke-navbar-1 .header_wrapper .nav {
  list-style: none;
  padding: 0;
  margin: 0
}

.inke-navbar-1 .header_wrapper .nav li {
  float: left;
  position: relative;
  height: 90px;
  line-height: 90px;
  transition: 1s
}

.inke-navbar-1 .header_wrapper .nav li:hover .nav-li-children {
  transform: scaleY(1);
  display: flex
}

.inke-navbar-1 .header_wrapper .nav li .nav-li-children {
  flex-direction: column;
  position: absolute;
  top: 80px;
  left: -2px;
  display: flex;
  width: 144px;
  transition-duration: .5s;
  transform: scaleY(0);
  transform-origin: 0 0;
  background: #fff;
  padding: 12px 0;
  border-radius: 8px;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, .1);
  z-index: 999;
}

.inke-navbar-1 .header_wrapper .nav li .nav-li-children a {
  text-decoration: none;
  color: #333;
  width: 100%;
  height: 48px;
  font-size: 14px;
  line-height: 48px;
  padding: 0;
  border: none;
  text-indent: 24px;
  margin: 0
}

.inke-navbar-1 .header_wrapper .nav li .nav-li-children a:hover {
  background: #effbfb
}

.inke-navbar-1 .header_wrapper .nav li .second>a {
  height: 14px;
  line-height: 14px;
  padding: 15px 0;
  display: block;
  text-align: center;
  color: #666;
  font-weight: 400;
  text-decoration: none
}

.inke-navbar-1 .header_wrapper .nav li .second>a:first-child {
  padding: 30px 0 15px
}

.header_wrapper .nav li .second>a:hover {
  color: #333
}

.inke-navbar-1 .header_wrapper .nav li:hover .second {
  visibility: visible
}

.inke-navbar-1 .header_wrapper .nav li>a {
  margin-left: 18px;
  margin-right: 18px;
  /* color: #fff; */
  color: #333;
  text-decoration: none;
  padding: 10px 1px;
  font-size: 14px;
  border-bottom: 2px solid transparent
}

.inke-navbar-1 .header_wrapper .nav li>a:hover {
  border-color: #00d8c9
}

.inke-navbar-1 .header_wrapper .nav li .icon-top-right {
  position: absolute;
  top: 24px;
  right: 2px
}

.inke-navbar-1 .header_wrapper .header_rg {
  display: none;
  height: 90px
}

.inke-navbar-1 .header_wrapper .header_rg div {
  margin: 30px 0 0;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  width: 78px;
  height: 32px;
  line-height: 32px;
  color: #fff;
  border-radius: 18px;
  border: 1px solid #fff
}

.inke-navbar-1 .header_wrapper .header_rg .regist {
  background: #00d8c9;
  color: #fff;
  border: 1px solid #00d8c9
}

.inke-navbar-1 .header_wrapper .header_rg .regist:hover {
  background: #00e2d2;
  border: 1px solid #00e2d2
}

.inke-navbar-1 .header_wrapper .header_rg .login:hover {
  background: #00e2d2;
  color: #fff
}

.inke-navbar-1 .header_wrapper .header_rg div:hover {
  background: #00d8c9;
  color: #fff;
  border: 1px solid #00d8c9
}

.inke-navbar-1 .header_wrapper .header_rg span {
  cursor: pointer
}

.inke-navbar-1 .header_wrapper .header_rg .login {
  margin-right: 16px
}

@media screen and (max-width: 1260px) {
  .header_wrapper {
    width: 1260px
  }
}

</style>
`

const script = ''


export default { html, css, script };
