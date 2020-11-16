const html = `
<section class="template-one-serve">
    <div class="template-one-serve-header">
      <div class="template-one-serve-header-top">
        <span class="template-one-serve-header-title">设计</span>印刷服务
      </div>
      <div>
        我们是专业的包装设计印刷服务商
      </div>
    </div>
    <div class="template-one-serve-content">
      <div class="template-one-serve-content-item">
        <img src="http://image.fast.126net.cn/group2/M00/01/82/wKgADluh9DmAN_4wAACTBAhQW9U473.png" alt="">
        <div class="text">宣传画册</div>
      </div>

      <div class="template-one-serve-content-item">
        <img src="http://image.fast.126net.cn/group1/M00/04/49/wKgADFuh9CyAQw0kAACxUCgB6j0084.png" alt="">
        <div class="text">高档名片</div>
      </div>

      <div class="template-one-serve-content-item">
        <img src="http://image.fast.126net.cn/group1/M00/04/49/wKgADFuh9DaAPMyoAADf3QZMaWc228.png" alt="">
        <div class="text">广告笔记本</div>
      </div>

      <div class="template-one-serve-content-item">
        <img src="http://image.fast.126net.cn/group2/M00/01/82/wKgADluh9DGAZ410AAC_VNmsg6k757.png" alt="">
        <div class="text">产品包装</div>
      </div>

    </div>

    <div class="template-one-serve-btn">
      <a href="">更多服务</a>
    </div>
  </section>`;

const css = `
<style>
      a:hover { text-decoration:none; }
      .template-one-serve {
        height: 683px;
        margin-bottom: 0;
        clear: both;
        background-color: rgba(247,247,247,1);
        background-repeat: repeat-x;
        background-position: center bottom;
        background-image: url(http://image.fast.126net.cn/group2/M00/01/82/wKgADluh9xKAAqotAAAk5AHKguA335.jpg);
        min-height: 30px;
        margin: 0 auto 0px auto;
        position: relative;
      }
      .template-one-serve-header {
        padding: 80px 0 50px;
        text-align: center;
        font-size: 14px;
        color: #000;
      }
      .template-one-serve-header-top {
        font-size: 40px;
        color: #000;
      }
      .template-one-serve-header-top .template-one-serve-header-title {
        color: #de2c2e;
      }
      .template-one-serve-content {
        display: flex;
        width: 1140px;
        margin: 0 auto;
        justify-content: space-around;
        align-items: center;
        margin-top: 50px;
      }
      .template-one-serve-content-item {
        width: 200px;
        height: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
      }
      .template-one-serve-content-item img {
          width: 140px;
          height: 140px;
          border-radius: 50%;
      }

      .template-one-serve-content-item .text {
        color: #000;
        font-size: 24px;
      }

      .template-one-serve-btn {
        margin-top: 70px;
        text-align: center;
      }

      .template-one-serve-btn a {
        display: inline-block;
        height: 45px;
        width: 150px;
        color: rgb(222, 44, 46);
        line-height: 45px;
        text-align: center;
        border: 1px solid rgb(222, 44, 46);
        border-radius: 26px;
      }

      .template-one-serve-btn a:hover {
        background-color: rgb(222, 44, 46);
        color: #fff;
      }
    </style>
`

const script = ``


export default { html, css, script };
