const html = `
<section class="template-navbar-one">
    <div class="template-navbar-one-web-icon">
      <img src="http://image.fast.126net.cn/group2/M00/01/82/wKgADluh5XuAYGa_AAAoq66oPxQ135.png" alt="" />
    </div>
    <div id="template-navbar-one-navigation-box" class="template-navbar-one-navigation-box">
      <div class="template-navbar-one-navigation-item"><a href="">新闻资讯</a></div>
      <div class="template-navbar-one-navigation-item"><a href="">公司简介</a></div>
      <div class="template-navbar-one-navigation-item"><a href="">客户案例</a></div>
      <div class="template-navbar-one-navigation-item"><a href="">服务项目</a></div>
      <div class="template-navbar-one-navigation-item active"><a href="">首页</a></div>
    </div>
    </section>`;

const css = `
<style>
      
      a:hover { text-decoration:none; }
      .template-navbar-one {
        min-height: 100px;
        margin: 0 auto 0px auto;
        position: relative;
        max-width: 1140px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .template-navbar-one-navigation-box {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
      }
      .template-navbar-one-navigation-item {
        min-width: 100px;
        line-height: 50px;
        text-align: center;
        font-size: 16px;
        cursor: pointer;
      }
      .template-navbar-one-navigation-item:hover {
        border-bottom: 1px solid red;
      }
      .template-navbar-one-navigation-item:hover a {
        color: red;
      }
      .template-navbar-one-navigation-item a {
        color: #000;
      }
      .template-navbar-one-navigation-item.active {
        border-bottom: 1px solid red;
      }
      .template-navbar-one-navigation-item.active a {
        color: red;
      }
    </style>
`

const script = `
<script>
       $('#template-navbar-one-navigation-box').on('click', 'div', function () {
    $(this).addClass('active').siblings().removeClass('active')
  })
    </script>`


export default { html, css, script };
