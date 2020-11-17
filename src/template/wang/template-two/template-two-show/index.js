const html = `
<section class="template-two-show section">
      <div class="container">
        <div class="title-section">
          <h2>作品展示</h2>
          <span>Case show</span>
        </div>
        <div class="row first-row">
          <div class="col-md-4">
            <a href="">
              <div class="entry aos-init aos-animate" data-aos="zoom-in">
                <img
                  src="http://image.fast.126net.cn/group2/M00/02/5D/wKgADlytyxeAWfPZAAEBXXxKuwI363.jpg"
                  class="fab fa-wordpress"
                />
                <p>网站设计作品01</p>
                <div class="content">
                  <div class="title">-- 01</div>
                  <div class="des">
                    随着网络技术的不断发展，网络应用已经渗透到人类社会的各个角落。作为网络世界的支撑点的网站，更是人们关注的热点：政府利用网站宣传自己的施政纲领，日益成为与百姓交流...
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div class="col-md-4">
            <a href="">
              <div class="entry aos-init aos-animate" data-aos="zoom-in" data-aos-duration="1500">
                <img
                  src="http://image.fast.126net.cn/group2/M00/02/5D/wKgADlytyxeAWfPZAAEBXXxKuwI363.jpg"
                  class="fab fa-wordpress"
                />
                <p>网站设计作品01</p>
                <div class="content">
                  <div class="title">-- 02</div>
                  <div class="des">
                    随着网络技术的不断发展，网络应用已经渗透到人类社会的各个角落。作为网络世界的支撑点的网站，更是人们关注的热点：政府利用网站宣传自己的施政纲领，日益成为与百姓交流...
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div class="col-md-4">
            <a href="">
              <div class="entry aos-init aos-animate" data-aos="zoom-in" data-aos-duration="1500">
                <img
                  src="http://image.fast.126net.cn/group2/M00/02/5D/wKgADlytyxeAWfPZAAEBXXxKuwI363.jpg"
                  class="fab fa-wordpress"
                />
                <p>网站设计作品01</p>
                <div class="content">
                  <div class="title">-- 03</div>
                  <div class="des">
                    随着网络技术的不断发展，网络应用已经渗透到人类社会的各个角落。作为网络世界的支撑点的网站，更是人们关注的热点：政府利用网站宣传自己的施政纲领，日益成为与百姓交流...
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <a href="">
              <div class="entry aos-init aos-animate" data-aos="zoom-in" data-aos-duration="2000">
                <img
                  src="http://image.fast.126net.cn/group2/M00/02/5D/wKgADlytyxeAWfPZAAEBXXxKuwI363.jpg"
                  class="fab fa-wordpress"
                />
                <p>网站设计作品01</p>
                <div class="content">
                  <div class="title">-- 04</div>
                  <div class="des">
                    随着网络技术的不断发展，网络应用已经渗透到人类社会的各个角落。作为网络世界的支撑点的网站，更是人们关注的热点：政府利用网站宣传自己的施政纲领，日益成为与百姓交流...
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div class="col-md-4">
            <a href="">
              <div class="entry aos-init aos-animate" data-aos="zoom-in" data-aos-duration="2500">
                <img
                  src="http://image.fast.126net.cn/group2/M00/02/5D/wKgADlytyxeAWfPZAAEBXXxKuwI363.jpg"
                  class="fab fa-wordpress"
                />
                <p>网站设计作品01</p>
                <div class="content">
                  <div class="title">-- 05</div>
                  <div class="des">
                    随着网络技术的不断发展，网络应用已经渗透到人类社会的各个角落。作为网络世界的支撑点的网站，更是人们关注的热点：政府利用网站宣传自己的施政纲领，日益成为与百姓交流...
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div class="col-md-4">
            <a href="">
              <div class="entry aos-init aos-animate" data-aos="zoom-in" data-aos-duration="3000">
                <img
                  src="http://image.fast.126net.cn/group2/M00/02/5D/wKgADlytyxeAWfPZAAEBXXxKuwI363.jpg"
                  class="fab fa-wordpress"
                />
                <p>网站设计作品01</p>
                <div class="content">
                  <div class="title">-- 06</div>
                  <div class="des">
                    随着网络技术的不断发展，网络应用已经渗透到人类社会的各个角落。作为网络世界的支撑点的网站，更是人们关注的热点：政府利用网站宣传自己的施政纲领，日益成为与百姓交流...
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>`;

const css = `
<style>
      a:hover {
        text-decoration: none;
      }
      .template-two-show {
        background-color: #fff;
      }
      .template-two-show a {
        color: #333;
      }
      .template-two-show.section {
        padding: 55px 0 75px 0;
      }
      .template-two-show .title-section {
        text-align: center;
        padding-bottom: 40px;
      }
      .template-two-show .container {
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
      }
      .template-two-show .entry {
        margin: 0px 20px 0px 20px;
        padding: 20px 20px 2px 20px;
        border-radius: 10px;
        text-align: center;
        position: relative;
        box-sizing: border-box;
        height: 393px;
      }
      .template-two-show .entry:hover {
        background-color: #ffffff;
        box-shadow: 0px 1px 45px 0px #dddddd;
      }
      .template-two-show .first-row {
        padding-bottom: 40px;
      }
      .template-two-show .entry img {
        height: 333px;
        width: 270px;
      }
      .template-two-show .entry p {
        margin-top: 10px;
      }

      .template-two-show .entry .content {
        position: absolute;
        overflow: hidden;
        height: 0;
        opacity: 0;
        transition: all 0.3s;
        width: 100%;
        bottom: 0;
        left: 0;
        border-radius: 10px;
        color: #fff;
        box-sizing: border-box;
        padding: 30px;
        text-align: left;
        background-color: rgba(0, 0, 0, 0.5);
        /* transform: translateY(100%); */
      }

      .template-two-show .entry .content .title {
        font-size: 60px;
      }

      .template-two-show .entry:hover .content {
        height: 100%;
        opacity: 1;
      }
    </style>
`

const script = `
<script>
      $('#template-two-navbar-navigation-box').on('click', 'div', function () {
   $(this).addClass('active').siblings().removeClass('active')
 })
   </script>`


export default { html, css, script };
