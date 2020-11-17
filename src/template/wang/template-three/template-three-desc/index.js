const html = `
<section class="template-three-des">
    <div class="template-three-des-header">
      <div class="template-three-des-header-top">
        <span class="template-three-des-header-title">北京咖啡时光有限公司</span>
      </div>
      <p>
        2008年10月成立于北京。是意大利***专业半自动商用咖啡机大中华区独家总代理。旗下拥有三大系列品牌。我们以独到的眼光和精准的市场定位，以区域独家代理机制开拓和服务中国中高端咖啡市场。
      </p>
      <p>
        全体员工经过不懈的努力，凭借着优质的产品和人性化的服务在业内得到了广大资深业内人士的支持和认可，享有良好的声誉。我们拥有一支年轻的充满激情与活力的专业的服务团队。紧抓市场脉搏，关注客户的每一个需求。我们拒绝提供任何不良的服务和产品。不追求华丽的排场,不做任何虚幻的承诺。争取用优质的产品、高效的管理、严谨的工作、真诚地服务每一位顾客。
      </p>
    </div>
    <div class="template-three-des-content">

      <div class="template-three-des-content-item">
        <div class="img">
          <img src="http://image.fast.126net.cn/group2/M00/02/DB/wKgADl1k2ImATk2sAAN9bcUIpc0842.png" alt="">
          <div class="content">
            餐厅环境
          </div>
        </div>

      </div>

      <div class="template-three-des-content-item">
        <div class="img">
          <img src="http://image.fast.126net.cn/group1/M00/05/59/wKgADF1k2ImAbgGNAAN4vYZmvwc135.png" alt="">
          <div class="content">
            餐厅一角
          </div>
        </div>
      </div>

      <div class="template-three-des-content-item">
        <div class="img">
          <img src="http://image.fast.126net.cn/group1/M00/05/59/wKgADF1k2ImAVYFTAALcWtG98Js274.png" alt="">
          <div class="content">
            门店展示
          </div>
        </div>
      </div>

    </div>

    <div class="template-three-des-btn">
      <a href="">更多风景</a>
    </div>
  </section>`;

const css = `
<style>
      a:hover { text-decoration:none; }
      .template-three-des {
        height: 683px;
        width: 1140px;
        margin: 0 auto;
        clear: both;
        background-color: #fff;
        min-height: 30px;
        margin: 0 auto 0px auto;
        position: relative;
      }
      .template-three-des-header {
        padding: 40px 0;
        font-size: 18px;
        color: #999;
        text-align: left;
        width: 1140px;
        margin: 0 auto;
      }
      .template-three-des-header p {
        font-size: 18px;
        color: rgb(89, 87, 87);
        width: 1140px;
        margin: 0 auto;
      }
      .template-three-des-header-top {
        font-size: 14px;
        margin-bottom: 20px;
      }
      .template-three-des-header-top .template-three-des-header-title {
        font-size: 24px;
        font-weight: bold;
        color: rgb(89, 87, 87);
        
      }
      .template-three-des-content {
        display: flex;
        width: 1140px;
        margin: 0 auto;
        justify-content: space-around;
        align-items: center;
        font-size: 14px;
        color: #999;
      }
      .template-three-des-content-item {
        width: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        color: #999;
      }

      .template-three-des-content-item .img {
          width: 350px;
          height: 268px;
          overflow: hidden;
          border-radius: 30px;
          position: relative;
      }

      .template-three-des-content-item .content {
          width: 350px;
          height: 0px;
          border-radius: 30px;
          position: absolute;
          left: 0;
          bottom: 0;
          text-align: center;
          transition: height 0.3s;
          line-height: 268px;
          font-size: 40px;
          color: #fff;
          background-color: rgba(0, 0, 0, 0.3);
      }

      .template-three-des-content-item img {
          width: 350px;
          height: 268px;
          border-radius: 30px;
      }

      .template-three-des-content-item:hover .content {
        height: 268px;
      }

      .template-three-des-content-item .text {
        color: #000;
        font-size: 24px;
      }

      .template-three-des-btn {
        padding: 35px 0;
        text-align: center;
      }

      .template-three-des-btn a {
        display: inline-block;
        height: 45px;
        width: 150px;
        color:#999;
        line-height: 45px;
        text-align: center;
        border: 1px solid#999;
        border-radius: 26px;
      }

      .template-three-des-btn a:hover {
        background-color:#999;
        color: #fff;
      }
    </style>
`

const script = ``


export default { html, css, script };
