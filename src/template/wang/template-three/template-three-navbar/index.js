const html = `
<section class="template-three-navbar">
    <div class="template-three-navbar-web-icon">
      <img src="http://image.fast.126net.cn/group2/M00/02/DB/wKgADl1k1uKAc5GCAAAu6ON7gQM883.png" alt="" />
    </div>
    <div id="template-three-navbar-navigation-box" class="template-three-navbar-navigation-box">
      <div class="template-three-navbar-navigation-item"><a href="">合作加盟</a></div>
      <div class="template-three-navbar-navigation-item"><a href="">新闻资讯</a></div>
      <div class="template-three-navbar-navigation-item"><a href="">产品中心</a></div>
      <div class="template-three-navbar-navigation-item"><a href="">品牌介绍</a></div>
      <div class="template-three-navbar-navigation-item"><a href="">明星投资人</a></div>
      <div class="template-three-navbar-navigation-item active"><a href="">首页</a></div>
    </div>
    </section>`;

const css = `
<style>
      
a:hover { text-decoration:none; }
.template-three-navbar {
  min-height: 102px;
  margin: 0 auto 0px auto;
  position: relative;
  max-width: 1140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #333;
}
.template-three-navbar-navigation-box {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}
.template-three-navbar-navigation-item {
  min-width: 120px;
  line-height: 50px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
}
.template-three-navbar-navigation-item:hover {
  /* border-bottom: 1px solid #7A7A7A; */
}
.template-three-navbar-navigation-item:hover a {
  color: rgba(255,93,0,1);
}
.template-three-navbar-navigation-item a {
  color: #333;
}
.template-three-navbar-navigation-item.active {
  /* border-bottom: 1px solid #7A7A7A; */
}
.template-three-navbar-navigation-item.active a {
  color: rgba(255,93,0,1);
}
</style>
`

const script = `
<script>
      $('#template-three-navbar-navigation-box').on('click', 'div', function () {
   $(this).addClass('active').siblings().removeClass('active')
 })
   </script>`


export default { html, css, script };
