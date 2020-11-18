const html = `
<section class="template-navbar-four">
      <div class="template-navbar-four-web-icon">
        <img src="http://image.fast.126net.cn/group2/M00/02/D9/wKgADl1jQA6AGJHHAABE-QIcmHA590.png" alt="" />
      </div>
      <div id="template-navbar-four-navigation-box" class="template-navbar-four-navigation-box">
        <div class="template-navbar-four-navigation-item"><a href="">联系我们</a></div>
        <div class="template-navbar-four-navigation-item"><a href="">体验大厅</a></div>
        <div class="template-navbar-four-navigation-item"><a href="">新闻中心</a></div>
        <div class="template-navbar-four-navigation-item"><a href="">案例展示</a></div>
        <div class="template-navbar-four-navigation-item"><a href="">产品中心</a></div>
        <div class="template-navbar-four-navigation-item"><a href="">关于我们</a></div>
        <div class="template-navbar-four-navigation-item active"><a href="">首页</a></div>
      </div>
      </section>
`;

const css = `
<style>
      
a:hover { text-decoration:none; }
.template-navbar-four {
  min-height: 104px;
  margin: 0 auto 0px auto;
  position: relative;
  max-width: 1140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.template-navbar-four-web-icon img {
  width: 148px;
  height: 68px;
}
.template-navbar-four-navigation-box {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}
.template-navbar-four-navigation-item {
  min-width: 100px;
  line-height: 100px;
  height: 100px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
}
.template-navbar-four-navigation-item:hover {
  border-bottom: 2px solid rgba(62,52,85,1);
}
.template-navbar-four-navigation-item:hover a {
  color: rgba(62,52,85,1);
}
.template-navbar-four-navigation-item a {
  color: #000;
}
.template-navbar-four-navigation-item.active {
  border-bottom: 2px solid rgba(62,52,85,1);
}
.template-navbar-four-navigation-item.active a {
  color: rgba(62,52,85,1);
}
</style>
`

const script = `  <script>
$('#template-navbar-four-navigation-box').on('click', 'div', function () {
$(this).addClass('active').siblings().removeClass('active')
})
</script>`


export default { html, css, script };
