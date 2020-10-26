const html = `
<section class="navbar-one">
<div class="navbar-one-web-icon">
  <img src="https://img.ikstatic.cn/MTQ5NjczMjc0MTUxOCM0NTgjanBn.jpg" alt="" />
</div>
<div id="navbar-one-navigation-box" class="navbar-one-navigation-box">
  <div class="navbar-one-navigation-item"><a href="">新闻资讯</a></div>
  <div class="navbar-one-navigation-item"><a href="">公司简介</a></div>
  <div class="navbar-one-navigation-item"><a href="">客户案例</a></div>
  <div class="navbar-one-navigation-item"><a href="">服务项目</a></div>
  <div class="navbar-one-navigation-item active"><a href="">首页</a></div>
</div>
</section>`;

const css = `
<style>
      .navbar-one {
        min-height: 30px;
        margin: 0 auto 0px auto;
        position: relative;
        max-width: 1200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .navbar-one-navigation-box {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
      }
      .navbar-one-navigation-item {
        min-width: 100px;
        line-height: 50px;
        text-align: center;
        font-size: 16px;
        cursor: pointer;
      }
      .navbar-one-navigation-item:hover {
        background: rgb(0, 204, 152);
      }
      .navbar-one-navigation-item:hover a {
        color: rgba(255, 255, 255, 1);
      }
      .navbar-one-navigation-item a {
        color: #000;
      }
      .navbar-one-navigation-item.active {
        background: rgb(0, 204, 152);
      }
      .navbar-one-navigation-item.active a {
        color: rgba(255, 255, 255, 1);
      }
    </style>
`

const script = `
<script>
  $('#navbar-one-navigation-box').on('click', 'div', function () {
    $(this).addClass('active').siblings().removeClass('active')
  })
</script>`


export default { html, css, script };
