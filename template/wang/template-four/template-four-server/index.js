const html = `
<section class="template-four-server">
<div class="template-four-server-header">
  <div class="template-four-server-header-top">
    <span class="template-four-server-header-title">爱家智能生活，给您一个温馨的港湾</span>
  </div>
  <p>
    人工智能科技有限公司，是国家级高新技术企业、xxxx高新技术企业、xxxx软件企业、是xxxx市建筑绿色化技术咨询服务第一批单位
  </p>
</div>
<div class="template-four-server-content">

  <div class="template-four-server-content-item">
    <div class="img">
      <img src="http://image.fast.126net.cn/group2/M00/02/45/wKgADlyYL3CAe59DAAALtcBc1rI226.png" alt="">
    </div>
    <div class="text">中国领先发布多用户</div>
    <div class="text">智慧家庭管理平台</div>
  </div>

  <div class="template-four-server-content-item">
    <div class="img">
      <img src="http://image.fast.126net.cn/group1/M00/04/DA/wKgADFyYL3mALArOAAAMJ1sNUpw694.png" alt="">
    </div>
    <div class="text">中国领先完成物联网</div>
    <div class="text">智慧酒店样板间</div>
  </div>

  <div class="template-four-server-content-item">
    <div class="img">
      <img src="http://image.fast.126net.cn/group2/M00/02/45/wKgADlyYL4KAOv7PAAATpfFajaM321.png" alt="">
    </div>
    <div class="text">国内领先物联网无线</div>
    <div class="text">智慧楼宇样板工程</div>
  </div>

  <div class="template-four-server-content-item">
    <div class="img">
      <img src="http://image.fast.126net.cn/group1/M00/04/DA/wKgADFyYL4qAD1gRAAAQoH-3ImI342.png" alt="">
    </div>
    <div class="text">国内领先完成智慧家庭</div>
    <div class="text">12大系统功能实现</div>
  </div>

  <div class="template-four-server-content-item">
    <div class="img">
      <img src="http://image.fast.126net.cn/group2/M00/02/45/wKgADlyYL5OAWF6ZAAAQJw31gtU925.png" alt="">
    </div>
    <div class="text">国内领先推出全系列</div>
    <div class="text">环境检测无线产品</div>
  </div>

  <div class="template-four-server-content-item">
    <div class="img">
      <img src="http://image.fast.126net.cn/group1/M00/04/DA/wKgADFyYL5yALOWiAAASw1fRJGw906.png" alt="">
    </div>
    <div class="text">国内领先推出全系列</div>
    <div class="text">无线射频智能家居产品</div>
  </div>


</div>

</section>`;

const css = `
<style>
      a:hover { text-decoration:none; }
      .template-two-team {
        height: 683px;
        width: 1140px;
        margin: 0 auto;
        clear: both;
        background-color: #fff;
        min-height: 30px;
        margin: 0 auto 0px auto;
        padding: 100px 0;
        position: relative;
      }
      .template-four-server-header {
        padding: 40px 0;
        text-align: center;
        font-size: 14px;
        color: #999;
       
      }
      .template-four-server-header p {
        font-size: 18px;
        color: rgb(89, 87, 87);
        width: 1140px;
        margin: 0 auto;
      }
      .template-four-server-header-top {
        font-size: 14px;
        margin-bottom: 20px;
      }
      .template-four-server-header-top .template-four-server-header-title {
        color: #333;
        font-size: 24px;
        
      }
      .template-four-server-content {
        display: flex;
        width: 1140px;
        margin: 0 auto;
        justify-content: space-around;
        align-items: center;
        font-size: 14px;
        color: rgb(39, 38, 54);
      }
      .template-four-server-content-item {
        width: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        color: #999;
      }

      .template-four-server-content-item .img {
          width: 183px;
          height: 143px;
          overflow: hidden;
          margin-bottom: 10px;
      }

      .template-four-server-content-item img {
          width: 183px;
          height: 143px;
          transition: all 0.3s;
      }

      .template-four-server-content-item:hover img {
          transform: scale(1.1);
      }

      .template-four-server-content-item .text {
        color: rgb(39, 38, 54);;
        font-size: 14px;
        line-height: 28px;
        text-align: center;
      }
    </style>
`

const script = ``


export default { html, css, script };
