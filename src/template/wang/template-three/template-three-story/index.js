const html = `
<section class="template-three-story">
    <div class="template-three-story-header">
      <div class="template-three-story-header-top">
        <span class="template-three-story-header-title">品牌故事</span>
      </div>
      <p>
        时光咖啡中的动物形象无处不在，然而又并非是简单堆砌。通过大幅墙画、光影、雕塑、纹路图案、定制家具、毛绒玩具、及众多贯穿于细节的表达，时光咖啡力图实践一种独特的“ZOO审美”——人类社会与自然的相互守望。在这个奇妙的空间里，儿童与大猩猩对坐，享受冰淇淋的甜美。ß
      </p>
    </div>
    <div class="template-three-story-content">

      <div class="template-three-story-content-item">
        <div class="img">
          <img src="http://image.fast.126net.cn/group2/M00/02/DB/wKgADl1k2ImATk2sAAN9bcUIpc0842.png" alt="">
        </div>

      </div>

      <div class="template-three-story-content-item">
        <div class="img">
          <img src="http://image.fast.126net.cn/group1/M00/05/59/wKgADF1k2ImAbgGNAAN4vYZmvwc135.png" alt="">
        </div>
      </div>

      <div class="template-three-story-content-item">
        <div class="img">
          <img src="http://image.fast.126net.cn/group1/M00/05/59/wKgADF1k2ImAVYFTAALcWtG98Js274.png" alt="">
        </div>
      </div>

    </div>

    <div class="template-three-story-btn">
      <a href="">更多故事</a>
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
        position: relative;
      }
      .template-three-story-header {
        padding: 40px 0;
        text-align: center;
        font-size: 14px;
        color: #999;
       
      }
      .template-three-story-header p {
        font-size: 18px;
        color: rgb(89, 87, 87);
        width: 1140px;
        margin: 0 auto;
      }
      .template-three-story-header-top {
        font-size: 14px;
        margin-bottom: 20px;
      }
      .template-three-story-header-top .template-three-story-header-title {
        color: #595757;
        font-size: 24px;
        
      }
      .template-three-story-content {
        display: flex;
        width: 1140px;
        margin: 0 auto;
        justify-content: space-around;
        align-items: center;
        font-size: 14px;
        color: #999;
      }
      .template-three-story-content-item {
        width: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        color: #999;
      }

      .template-three-story-content-item .img {
          width: 341px;
          height: 342px;
          overflow: hidden;
      }

      .template-three-story-content-item img {
          width: 341px;
          height: 342px;
          transition: all 0.3s;
      }

      .template-three-story-content-item:hover img {
          transform: scale(1.1);
      }

      .template-three-story-content-item .text {
        color: #000;
        font-size: 24px;
      }

      .template-three-story-btn {
        padding: 35px 0;
        text-align: center;
      }

      .template-three-story-btn a {
        display: inline-block;
        height: 45px;
        width: 150px;
        color:#999;
        line-height: 45px;
        text-align: center;
        border: 1px solid#999;
        border-radius: 26px;
      }

      .template-three-story-btn a:hover {
        background-color:#999;
        color: #fff;
      }
    </style>
`

const script = ``


export default { html, css, script };
