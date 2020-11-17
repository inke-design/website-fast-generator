const html = `
<section class="template-two-number">
    <div class="content">
      <div class="box">
        <div class="head">
          <span class="num">645</span><span class="icon">+</span>
        </div>
        <div class="des">服务网站</div>
      </div>
      <div class="box">
        <div class="head">
          <span class="num">91</span><span class="icon">款</span>
        </div>
        <div class="des">建站产品</div>
      </div>
      <div class="box">
        <div class="head">
          <span class="num">11</span><span class="icon">年</span>
        </div>
        <div class="des">WEB服务</div>
      </div>
      <div class="box">
        <div class="head">
          <span class="num">375</span><span class="icon">+</span>
        </div>
        <div class="des">覆盖城市</div>
      </div>
      
    </div>
    </section>`;

const css = `
<style>
      
      a:hover { text-decoration:none; }
      .template-two-number {
        margin: 0 auto 0px auto;    
        position: relative;
        max-width: 1140px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #333;
        padding: 46px 0;
      }
      .template-two-number .content {
        display: flex;
        align-items: center;
        width: 100%;
      }
      .template-two-number .content .box {
        display: flex;
        align-items: center;
        flex-direction: column;
        box-sizing: border-box;
        width: 25%;
        color: #a9a9a9;
        box-sizing: border-box;
      }
      .template-two-number .content .box:not(:first-child) {
        border-left: 1px solid #ccc;
      }

      .template-two-number .box .head {
        font-size: 14px;
        color: #a9a9a9;
      }
      .template-two-number .box .num {
        font-size: 70px;
        color: #666;
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
