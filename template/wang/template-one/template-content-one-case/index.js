const html = `
<section class="template-navbar-one-case">
    <div class="template-navbar-one-case-header">
      <div class="template-navbar-one-case-header-top">
        经典<span class="template-navbar-one-case-header-title">案例</span>
      </div>
    </div>
    <div class="template-navbar-one-case-content">
      <div class="template-navbar-one-case-content-box">
        <div class="template-navbar-one-case-content-item">
          <img src="http://image.fast.126net.cn/group2/M00/01/8E/wKgADlup_hSAVwBoAAEk6XdLjiY926.jpg" alt="">
          <div class="text">月饼礼盒</div>
        </div>
  
        <div class="template-navbar-one-case-content-item">
          <img src="http://image.fast.126net.cn/group1/M00/04/52/wKgADFup_hiAK9alAADi48jhceI187.jpg" alt="">
          <div class="text">月饼礼盒</div>
        </div>
  
        <div class="template-navbar-one-case-content-item">
          <img src="http://image.fast.126net.cn/group2/M00/01/8E/wKgADlup_h2AfByaAADGNtmLXK8459.jpg" alt="">
          <div class="text">糕点礼盒</div>
        </div>
  
        <div class="template-navbar-one-case-content-item">
          <img src="http://image.fast.126net.cn/group1/M00/04/52/wKgADFup_iGANnQBAAELfMnY5rI465.jpg" alt="">
          <div class="text">花茶礼盒</div>
        </div>

        <div class="template-navbar-one-case-content-item">
          <img src="http://image.fast.126net.cn/group1/M00/04/52/wKgADFup_jOAepv4AADAAHi5lVI573.jpg" alt="">
          <div class="text">化妆品礼盒</div>
        </div>

        <div class="template-navbar-one-case-content-item">
          <img src="http://image.fast.126net.cn/group2/M00/01/8E/wKgADlup_i-AVohUAACdytiFDds554.jpg" alt="">
          <div class="text">果汁礼盒</div>
        </div>
  
        <div class="template-navbar-one-case-content-item">
          <img src="http://image.fast.126net.cn/group1/M00/04/52/wKgADFup_iyAc3UWAAE9llBaLvQ444.jpg" alt="">
          <div class="text">月饼礼盒</div>
        </div>
  
        <div class="template-navbar-one-case-content-item">
          <img src="http://image.fast.126net.cn/group2/M00/01/8E/wKgADlup_ieAUPikAAECiriadWo331.jpg" alt="">
          <div class="text">糕点礼盒</div>
        </div>
      </div>
    </div>
  </section>`;

const css = `
<style>
      
      a:hover { text-decoration:none; }
      .template-navbar-one-case {
        height: 849px;
        clear: both;
        background-color: rgba(68,68,68,1);
        min-height: 30px;
        margin: 0 auto 0px auto;
        position: relative;
      }
      .template-navbar-one-case-header {
        padding: 80px 0 50px;
        text-align: center;
        font-size: 14px;
        color: #fff;
      }
      .template-navbar-one-case-header-top {
        font-size: 40px;
        color: #fff;
      }
      .template-navbar-one-case-header-top .template-navbar-one-case-header-title {
        color: #de2c2e;
      }
      .template-navbar-one-case-content {
        width: 1140px;
        margin: 0 auto;
      }
      .template-navbar-one-case-content-box {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        margin-left: 40px;
      }
      .template-navbar-one-case-content-item {
        width: 251px;
        height: 251px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 22.5%;
        margin: 0 2% 2% 0;
      }
      .template-navbar-one-case-content-item img {
          width: 100%;
          height: 210px;
      }

      .template-navbar-one-case-content-item .text {
        margin-top: 10px;
        color: #fff;
        font-size: 24px;
      }

      .template-navbar-one-case-btn {
        margin-top: 70px;
        text-align: center;
      }

      .template-navbar-one-case-btn a {
        display: inline-block;
        height: 45px;
        width: 150px;
        color: rgb(222, 44, 46);
        line-height: 45px;
        text-align: center;
        border: 1px solid rgb(222, 44, 46);
        border-radius: 26px;
      }

      .template-navbar-one-case-btn a:hover {
        background-color: rgb(222, 44, 46);
        color: #fff;
      }
    </style>
`

const script = ``


export default { html, css, script };
