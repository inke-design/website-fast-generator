const html = `
<section class="template-two-navbar">
    <div class="template-two-navbar-web-icon">
      <img src="http://image.fast.126net.cn/group1/M00/04/C2/wKgADFxzwHWAF8-NAAAJgoscOvY909.png" alt="" />
    </div>
    <div id="template-two-navbar-navigation-box" class="template-two-navbar-navigation-box">
      <div class="template-two-navbar-navigation-item"><a href="">联系我们</a></div>
      <div class="template-two-navbar-navigation-item"><a href="">优质服务</a></div>
      <div class="template-two-navbar-navigation-item"><a href="">新闻资讯</a></div>
      <div class="template-two-navbar-navigation-item"><a href="">作品展示</a></div>
      <div class="template-two-navbar-navigation-item"><a href="">公司简介</a></div>
      <div class="template-two-navbar-navigation-item active"><a href="">首页</a></div>
    </div>
    </section>`;

const css = `
<style>
      
      a:hover { text-decoration:none; }
      .template-two-navbar {
        min-height: 72px;
        margin: 0 auto 0px auto;
        position: relative;
        max-width: 1140px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #333;
      }
      .template-two-navbar-navigation-box {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
      }
      .template-two-navbar-navigation-item {
        min-width: 120px;
        line-height: 50px;
        text-align: center;
        font-size: 16px;
        cursor: pointer;
      }
      .template-two-navbar-navigation-item:hover {
        border-bottom: 1px solid #7A7A7A;
      }
      .template-two-navbar-navigation-item:hover a {
        color: #7A7A7A;
      }
      .template-two-navbar-navigation-item a {
        color: #333;
      }
      .template-two-navbar-navigation-item.active {
        /* border-bottom: 1px solid #7A7A7A; */
      }
      .template-two-navbar-navigation-item.active a {
        color: #7A7A7A;
      }
    </style>
`

const script = `
<script>
      $('#template-two-navbar-navigation-box').on('click', 'div', function () {
   $(this).addClass('active').siblings().removeClass('active')
 })
   </script>`


export default { html, css, script };
