const html = `
<section class="template-two-team">
<div class="template-two-team-header">
  <div class="template-two-team-header-top">
    <span class="template-two-team-header-title">精英团队</span>
  </div>
  <div>
    Team
  </div>
</div>
<div class="template-two-team-content">
  <div class="template-two-team-content-item">
    <div class="img">
      <img src="http://image.fast.126net.cn/group2/M00/02/28/wKgADlx0nd2ACgsZAACKjhrw5Mw661.jpg" alt="">
    </div>
    <div class="text">Zayne Jackson</div>
    <div>网页设计师</div>
  </div>

  <div class="template-two-team-content-item">
    <div class="img">
      <img src="http://image.fast.126net.cn/group2/M00/02/28/wKgADlx0neyATQwSAABqrTJT9ys114.jpg" alt="">
    </div>
    <div class="text">梅甘-Sacha</div>
    <div>网交互设计师</div>
  </div>

  <div class="template-two-team-content-item">
    <div class="img">
      <img src="http://image.fast.126net.cn/group2/M00/02/28/wKgADlx0ngmAYyShAACZ6aAlecg889.jpg" alt="">
    </div>
    <div class="text">Zach Simith</div>
    <div>视觉设计师</div>
  </div>

  <div class="template-two-team-content-item">
    <div class="img">
      <img src="http://image.fast.126net.cn/group1/M00/04/C2/wKgADFx0nhaADcqhAACJpLcOO9E186.jpg" alt="">
    </div>
    <div class="text">萨玛-Sam</div>
    <div>网页设计师</div>
  </div>

</div>

<div class="template-two-team-btn">
  <a href="">更多人员</a>
</div>
</section>`;

const css = `
<style>
      a:hover { text-decoration:none; }
      .template-t wo-team {
        height: 683px;
        margin-bottom: 0;
        clear: both;
        background-color: #fff;
        min-height: 30px;
        margin: 0 auto 0px auto;
        position: relative;
      }
      .template-two-team-header {
        padding: 40px 0;
        text-align: center;
        font-size: 14px;
        color: #999;
      }
      .template-two-team-header-top {
        font-size: 14px;
      }
      .template-two-team-header-top .template-two-team-header-title {
        color: #333;
        font-size: 24px;
      }
      .template-two-team-content {
        display: flex;
        width: 1140px;
        margin: 0 auto;
        justify-content: space-around;
        align-items: center;
        font-size: 14px;
        color: #999;
      }
      .template-two-team-content-item {
        width: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        color: #999;
      }

      .template-two-team-content-item .img {
          width: 265px;
          height: 336px;
          overflow: hidden;
      }

      .template-two-team-content-item img {
          width: 265px;
          height: 336px;
          transition: all 0.3s;
      }

      .template-two-team-content-item:hover img {
          transform: scale(1.1);
      }

      .template-two-team-content-item .text {
        color: #000;
        font-size: 24px;
      }

      .template-two-team-btn {
        margin-top: 70px;
        text-align: center;
      }

      .template-two-team-btn a {
        display: inline-block;
        height: 45px;
        width: 150px;
        color:#999;
        line-height: 45px;
        text-align: center;
        border: 1px solid#999;
        border-radius: 26px;
      }

      .template-two-team-btn a:hover {
        background-color:#999;
        color: #fff;
      }
    </style>
`

const script = ``


export default { html, css, script };
