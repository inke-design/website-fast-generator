const html = `
<section class="template-two-serve">
      <div class="template-two-serve-header">
        <div class="template-two-serve-header-top">
          <span class="template-two-serve-header-title">优质的服务</span>
        </div>
        <div>Publish what you think, don't put it on social media</div>
      </div>
      <div class="template-two-serve-content">
        <a href=""
          ><div class="template-two-serve-content-item">
            <div class="img">
              <img
                src="http://image.fast.126net.cn/group1/M00/04/C2/wKgADFx01SOAT5ZwAAEfj5AYdSI329.jpg"
                alt=""
              />
            </div>
            <div class="text">
              <div class="text-title">用户体验设计</div>
              <div class="text-des">
                是以用户为中心的一种设计手段，以用户需求为目标而进行的设计。设计过程注重以用户为中心，用户体验的概..
              </div>
            </div>
          </div></a
        >

        <a href="">
          <div class="template-two-serve-content-item">
            <div class="img">
              <img
                src="http://image.fast.126net.cn/group2/M00/02/28/wKgADlx00oOAMuzYAABTF4-uEbg351.jpg"
                alt=""
              />
            </div>
            <div class="text">
              <div class="text-title">工业设计</div>
              <div class="text-des">
                工业设计分为产品设计、环境设计、传播设计、设计管理4类；包括造型设计、机械设计、电路设计、服装设计、...
              </div>
            </div>
          </div>
        </a>
        
        <a href="">
          <div class="template-two-serve-content-item">
            <div class="img">
              <img
                src="http://image.fast.126net.cn/group2/M00/02/28/wKgADlx00g6AB-_FAABqDppTQu0268.jpg"
                alt=""
              />
            </div>
            <div class="text">
              <div class="text-title">包装设计</div>
              <div class="text-des">
                包装设计，是一个学科专业名称，培养掌握平面包装设计、广告艺术设计领域的专业知识及专业技能的人才。经济..
              </div>
            </div>
          </div>
        </a>
        
      </div>
    </section>`;

const css = `
<style>
      a:hover {
        text-decoration: none;
      }
      .template-two-serve {
        height: 590px;
        margin-bottom: 0;
        clear: both;
        background-color: rgba(247, 247, 247, 1);
        margin: 0 auto 0px auto;
        position: relative;
      }
      .template-two-serve-header {
        padding: 40px 0;
        text-align: center;
        font-size: 14px;
        color: #000;
      }
      .template-two-serve-header-top {
        font-size: 14px;
        color: #999;
      }
      .template-two-serve-header-top .template-two-serve-header-title {
        color: #333;
        font-size: 24px;
      }
      .template-two-serve-content {
        display: flex;
        width: 1140px;
        margin: 0 auto;
        justify-content: space-around;
        align-items: center;
      }
      .template-two-serve-content-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 352px;
        height: 360px;
        cursor: pointer;
      }
      .template-two-serve-content-item img {
        width: 352px;
        height: 211px;
        transition: all 0.36s ease;
      }

      .template-two-serve-content-item .img {
        width: 352px;
        height: 211px;
        overflow: hidden;
      }

      .template-two-serve-content-item .text {
        flex: 1;
        padding: 40px 28px 20px 18px;
        border-bottom: 1px solid #eee;
        transition: all 0.36s ease;
        color: #999;
        font-size: 13px;
      }

      .template-two-serve-content-item:hover img {
        transform: scale(1.1);
      }

      .template-two-serve-content-item:hover .text {
        background-color: #000;
        color: #fff;
      }

      .template-two-serve-content-item:hover .text .text-title {
        color: #fff;
      }

      .template-two-serve-content-item .text .text-title {
        font-size: 16px;
        color: #333;
        margin-bottom: 10px;
      }
    </style>
`

const script = ``


export default { html, css, script };
