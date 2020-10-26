const html = `
<section class="navbar-three">
<div class="navbar-three-header">
  <div class="navbar-three-header-left">
    <img src="https://img.ikstatic.cn/MTQ5NjczMjc0MTUxOCM0NTgjanBn.jpg" alt="">
  </div>
  <div class="navbar-three-header-right">
    
    <div class="navbar-three-header-right-text">
      <div>服务热线</div>
      <div class="navbar-three-header-right-tel">010-XXXXXXXX</div>
    </div>
    <img class="navbar-three-header-right-img" src="http://image.fast.126net.cn/group2/M00/01/27/wKgBTFtqxn-AbDpbAAAON5qx5DM297.png" alt="">
  </div>
</div>
<div class="navbar-three-navigation-box">
  <div id="navbar-three-navigation-box-content" class="navbar-three-navigation-box-content">
    <div class="navbar-three-navigation-item active"><a href="">首页</a></div>
    <div class="navbar-three-navigation-item"><a href="">服务项目</a></div>
    <div class="navbar-three-navigation-item"><a href="">新闻资讯</a></div>
    <div class="navbar-three-navigation-item"><a href="">公司简介</a></div>
    <div class="navbar-three-navigation-item"><a href="">客户案例</a></div>
  </div>
</div>
</section>`;

const css = `
<style>
.navbar-three-header {
  min-height: 30px;
  margin: 0 auto;
  position: relative;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
}
.navbar-three-header-left,
.navbar-three-header-right {
  display: flex;
  align-items: center;
}
.navbar-three-header-right-text {
  color: rgb(222, 44, 46);
  font-size: 22px;
}
.navbar-three-header-right-img {
  width: 50px;
  height: 50px;
}
.navbar-three-header-right-tel {
  color: #999;
  font-size: 16px;
}
.navbar-three-navigation-box-content {
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  align-items: center;
}
.navbar-three-navigation-item {
  width: 150px;
  text-align: center;
  height: 50px;
  line-height: 50px;
  cursor: pointer;
  background: #bbb;
  border-radius: 5px;
}
.navbar-three-navigation-item:not(:first-child) {
  margin-left: 10px;
}
.navbar-three-navigation-item:hover {
  background-color: rgb(222, 44, 46);
}
.navbar-three-navigation-item.active {
  background-color: rgb(222, 44, 46);
}
.navbar-three-navigation-item a {
  color: #FFF;
}
</style>
`

const script = `
<script>
      $('#navbar-three-navigation-box-content').on('click', 'div.navbar-three-navigation-item', function () {
        $(this).addClass('active').siblings().removeClass('active')
      })
    </script>`


export default { html, css, script };
