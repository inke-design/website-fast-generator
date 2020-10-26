const html = `
<section class="navbar-two">
<div class="navbar-two-header">
  <div class="navbar-two-header-left">
    <img src="https://img.ikstatic.cn/MTQ5NjczMjc0MTUxOCM0NTgjanBn.jpg" alt="">
    <div class="navbar-two-header-left-line"></div>
    <div class="navbar-two-header-left-text">
      <div>看直播 玩直播</div>
      <div>尽在映客APP</div>
    </div>
  </div>
  <div class="navbar-two-header-right">
    <img class="navbar-two-header-right-img" src="http://image.fast.126net.cn/group1/M00/04/74/wKgADFvRLUGAauTaAAAY3sKHqx4496.png" alt="">
    <div class="navbar-two-header-right-text">
      <div>全国统一热线</div>
      <div class="navbar-two-header-right-tel">010-XXXXXXXX</div>
    </div>
  </div>
</div>
<div class="navbar-two-navigation-box">
  <div id="navbar-two-navigation-box-content" class="navbar-two-navigation-box-content">
    <div class="navbar-two-navigation-item active"><a href="">首页</a></div>
    <div class="navbar-two-navigation-item"><a href="">服务项目</a></div>
    <div class="navbar-two-navigation-item"><a href="">新闻资讯</a></div>
    <div class="navbar-two-navigation-item"><a href="">公司简介</a></div>
    <div class="navbar-two-navigation-item"><a href="">客户案例</a></div>
  </div>
</div>
</section>`;

const css = `
<style>
.navbar-two-header {
  min-height: 30px;
  margin: 0 auto;
  position: relative;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
}
.navbar-two-header-left,
.navbar-two-header-right {
  display: flex;
  align-items: center;
}
.navbar-two-header-left-line {
  width: 1px;
  height: 50px;
  background-color: #999;
  margin: 0 30px;
}
.navbar-two-header-right-text,
.navbar-two-header-left-text {
  color: #999;
  font-size: 13px;
}
.navbar-two-header-right-img {
  width: 50px;
  height: 50px;
}
.navbar-two-header-right-tel {
  color: rgb(0, 204, 152);
  font-size: 16px;
}
.navbar-two-navigation-box {
  background-color: rgb(0, 204, 152);
}
.navbar-two-navigation-box-content {
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  align-items: center;
}
.navbar-two-navigation-item {
  width: 150px;
  text-align: center;
  height: 50px;
  line-height: 50px;
  cursor: pointer;
}
.navbar-two-navigation-item:hover {
  background-color: rgba(255,255,255,.3);
}
.navbar-two-navigation-item.active {
  background-color: rgba(255,255,255,.3);
}
.navbar-two-navigation-item a {
  color: #FFF;
}
</style>
`

const script = `
<script>
  $('#navbar-two-navigation-box-content').on('click', 'div', function () {
    $(this).addClass('active').siblings().removeClass('active')
  })
</script>`


export default { html, css, script };
