const html = `
<section class="template-four-show section">
<div class="container">
  <div class="title-section">
    <h2>案例展示</h2>
    <span>Cases</span>
  </div>
  <div class="row first-row">
    <div class="col-md-4">
      <a href="">
        <div class="entry" data-aos="zoom-in">
          <div class="img">
          <img
            src="http://image.fast.126net.cn/group2/M00/02/4A/wKgADlycOaiAGM4HAACJmjlCb4w142.jpg"
            class="fab fa-wordpress"
          />
          </div>
          <p>智能宠物机器人</p>

        </div>
      </a>
    </div>

    <div class="col-md-4">
      <a href="">
        <div class="entry" data-aos="zoom-in" data-aos-duration="1500">
          <div class="img">
          <img
            src="http://image.fast.126net.cn/group1/M00/04/DE/wKgADFycOa-AX9dsAAB1IYWS-fI416.jpg"
            class="fab fa-wordpress"
          />
          </div>
          <p>智能音箱及家居中控</p>

        </div>
      </a>
    </div>

    <div class="col-md-4">
      <a href="">
        <div class="entry" data-aos="zoom-in" data-aos-duration="1500">
          <div class="img">
          <img
            src="http://image.fast.126net.cn/group2/M00/02/4A/wKgADlycObeALTn2AACD-fVBU0k458.jpg"
            class="fab fa-wordpress"
          />
          </div>
          <p>智能家电</p>

        </div>
      </a>
    </div>
  </div>
  <div class="row">
    <div class="col-md-4">
      <a href="">
        <div class="entry" data-aos="zoom-in" data-aos-duration="2000">
          <div class="img">
          <img
            src="http://image.fast.126net.cn/group1/M00/04/DE/wKgADFycOb6ANvbpAAB042CEUY8639.jpg"
            class="fab fa-wordpress"
          />
          </div>
          <p>智能会议室</p>

        </div>
      </a>
    </div>

    <div class="col-md-4">
      <a href="">
        <div class="entry" data-aos="zoom-in" data-aos-duration="2500">
          <div class="img">
          <img
            src="http://image.fast.126net.cn/group2/M00/02/4A/wKgADlycNOmAfkE-AAB63ksxI5s526.jpg"
            class="fab fa-wordpress"
          />
          </div>
          <p>儿童故事机</p>

        </div>
      </a>
    </div>

    <div class="col-md-4">
      <a href="">
        <div class="entry" data-aos="zoom-in" data-aos-duration="3000">
          <div class="img">
          <img
            src="http://image.fast.126net.cn/group2/M00/02/4A/wKgADlycNMmAQkvdAABnR19GlMw247.jpg"
            class="fab fa-wordpress"
          />
          </div>
          <p>智能家电</p>
            
        </div>
      </a>
    </div>
  </div>
</div>

<div class="template-four-show-btn">
  <a href="">+ MORE</a>
</div>

</section>`;

const css = `
<style>
      a:hover {
        text-decoration: none;
      }
      .template-four-show {
        background-color: #fff;
      }
      .template-four-show a {
        color: #333;
      }
      .template-four-show.section {
      }
      .template-four-show .title-section {
        text-align: center;
        padding-bottom: 40px;
      }
      .template-four-show .container {
        width: 100%;
        margin-right: auto;
        margin-left: auto;
      }
      .template-four-show .entry {
        text-align: center;
        position: relative;
        box-sizing: border-box;
        width: 344px;
        height: 250px;
        overflow: hidden;
      }
      .template-four-show .entry .img {
        width: 344px;
        height: 200px;
        overflow: hidden;
      }
      .template-four-show .entry:hover img {
        transform: scale(1.1);
      }
      .template-four-show .first-row {
        padding-bottom: 40px;
      }
      .template-four-show .entry img {
        transition: all 0.3s;
      }
      .template-four-show .entry p {
        margin-top: 10px;
      }

      .template-four-show-btn {
        margin-top: 70px;
        text-align: center;
      }

      .template-four-show-btn a {
        display: inline-block;
        height: 45px;
        width: 150px;
        color: #000;
        line-height: 45px;
        text-align: center;
        border: 1px solid #000;
        border-radius: 26px;
      }

      .template-four-show-btn a:hover {
        background-color: #000;
        color: #fff;
      }

    </style>
`

const script = ``


export default { html, css, script };
