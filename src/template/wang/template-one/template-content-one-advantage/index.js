const html = `
<section class="template-one-advantage">
    <div class="template-one-advantage-header">
      <div class="template-one-advantage-header-top">
        我们的服务优势
      </div>
      <div>
        完备的支持体系为您的经营提供较有利的保障助您稳健盈利
      </div>
    </div>
    <div class="template-one-advantage-content">
      <div class="template-one-advantage-content-item">
        <div class="text">
          <div class="title">先进的设备</div>
          <div class="desc">公司有着各类设备，提高操作效能，更好地服务客户</div>
        </div>
        <img src="http://image.fast.126net.cn/group1/M00/04/49/wKgADFuh_wWAIY6FAAG-OMtSu9M007.png" alt="">
      </div>
      <div class="template-one-advantage-content-item">
        <div class="text">
          <div class="title">专业的团队</div>
          <div class="desc">专业的服务人员，良好的素养，为客户解决各类疑难问题</div>
        </div>
        <img src="http://image.fast.126net.cn/group1/M00/04/49/wKgADFuh_wWAIY6FAAG-OMtSu9M007.png" alt="">
      </div>
      <div class="template-one-advantage-content-item">
        <div class="text">
          <div class="title">互利共赢</div>
          <div class="desc">公司本着“以质量为本；以客户为先”的经营理念，期待与您的合作</div>
        </div>
        <img src="http://image.fast.126net.cn/group1/M00/04/49/wKgADFuh_wWAIY6FAAG-OMtSu9M007.png" alt="">
      </div>
    </div>

    </div>
  </section>`;

const css = `
<style>
      a:hover { text-decoration:none; }
      .template-one-advantage {
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
      .template-one-advantage-header {
        padding: 80px 0 50px;
        text-align: center;
        font-size: 14px;
        color: #000;
      }
      .template-one-advantage-header-top {
        font-size: 40px;
        color: #000;
      }
      .template-one-advantage-header-top .template-one-advantage-header-title {
        color: #de2c2e;
      }
      .template-one-advantage-content {
        display: flex;
        width: 1140px;
        margin: 0 auto;
        justify-content: space-between;
        align-items: center;
        margin-top: 50px;
      }
      .template-one-advantage-content-item {
        width: 340px;
        height: 340px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .template-one-advantage-content-item img {
          width: 380px;
          height: 205px;
      }

      .template-one-advantage-content-item .text {
        color: #fff;
        font-size: 14px;
        width: 380px;
        height: 135px;
        background-color: red;
        box-sizing: border-box;
        padding: 20px;
      }

      .template-one-advantage-content-item .title {
        font-size: 24px;
        font-weight: bold;
      }


    </style>
`

const script = ``


export default { html, css, script };
