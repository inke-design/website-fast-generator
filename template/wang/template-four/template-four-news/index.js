const html = `
<section class="template-four-news">
<div class="template-four-news-header">
  <div class="template-four-news-header-top">
    <span class="template-four-news-header-title">新闻资讯</span>
  </div>
  <div>
    NEWS
  </div>
</div>
<div class="template-four-news-content">

  <div class="template-four-news-content-item">
    <div class="img">
      <img src="http://image.fast.126net.cn/group2/M00/02/4B/wKgADlycQemAA_HfAACCE_Jm6ck891.jpg" alt="">
    </div>
    <div class="text">
      人工智能时代来临，市场亟待爆发	 </div>
    <div>
      2017年3月5日“人工智能”正式写入2017政府工作报告，崭新的时代来了！Python凭借超高.. </div>
  </div>

  <div class="template-four-news-content-item">
    <div class="img">
      <img src="http://image.fast.126net.cn/group2/M00/02/D9/wKgADl1jSlyAP7fJAABSHT1Pt3s623.jpg" alt="">
    </div>
    <div class="text">
      《人工智能导论》初稿研讨交流会在京顺利召开	 </div>
    <div>
      为加速新一代信息技术人才培养，发挥学会人才培养优势，中国科协开展大数据、云计算、..</div>
  </div>

  <div class="template-four-news-content-item">
    <div class="img">
      <img src="http://image.fast.126net.cn/group2/M00/02/4B/wKgADlycVrqAehdsAABw7YwV5EY880.jpg" alt="">
    </div>
    <div class="text">
      人工智能产品集中亮相世界互联网大会	 </div>
    <div>
      不少参会的业内人士认为，在算法优化、网络基础设施进一步改善等有利条件助推下，人工..</div>
  </div>

</div>
</section>`;

const css = `
<style>
      a:hover { text-decoration:none; }
      .template-four-news {
        height: 550px;
        margin-bottom: 0;
        clear: both;
        padding: 50px 0;
        background-color: #fff;
        min-height: 30px;
        margin: 0 auto 0px auto;
        position: relative;
      }
      .template-four-news-header {
        padding: 40px 0;
        text-align: center;
        font-size: 14px;
        color: #999;
      }
      .template-four-news-header-top {
        font-size: 14px;
      }
      .template-four-news-header-top .template-four-news-header-title {
        color: #333;
        font-size: 24px;
      }
      .template-four-news-content {
        display: flex;
        width: 1140px;
        margin: 0 auto;
        justify-content: space-around;
        font-size: 14px;
        color: #999;
      }
      .template-four-news-content-item {
        color: #999;
        font-size: 14px;
        width: 353px;
        cursor: pointer;
      }

      .template-four-news-content-item .img {
          width: 353px;
          height: 211px;
          overflow: hidden;
      }

      .template-four-news-content-item img {
          width: 353px;
          height: 211px;
          transition: all 0.3s;
      }

      .template-four-news-content-item:hover img {
          transform: scale(1.1);
      }

      .template-four-news-content-item .text {
        color: #333;
        font-size: 16px;
        padding: 10px 0;
      }
    </style>
`

const script = ``


export default { html, css, script };
