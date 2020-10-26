const html = `
<section class="video-card-content">
<div class="top">
  <img
    class="top-img wow fadeInUp"
    data-wow-duration="1s"
    src="https://img.ikstatic.cn/MTU5MDAzOTc4NTM4MCMgMjQjcG5n.png"
    alt=""
    style="
      visibility: visible;
      animation-duration: 1s;
      animation-name: fadeInUp;
    "
  />
</div>
<div class="info">
  <div
    class="video-box wow fadeInUp"
    data-wow-delay="0.5s"
    style="
      visibility: visible;
      animation-delay: 0.5s;
      animation-name: fadeInUp;
    "
  >
    <img
      class="video"
      src="https://img.ikstatic.cn/MTU5MjI4NTc3NDUyOSM5NzcjcG5n.png"
      alt=""
    />
    <div id="videoPlay" class="play"></div>
  </div>
  <div class="box">
    <div
      class="logo wow fadeInUp"
      data-wow-delay="0.5s"
      style="
        visibility: visible;
        animation-delay: 0.5s;
        animation-name: fadeInUp;
      "
    ></div>
    <div class="cen">
      <div class="text">
        <p
          class="paragraph1 wow fadeInUp"
          data-wow-delay="0.5s"
          style="
            visibility: visible;
            animation-delay: 0.5s;
            animation-name: fadeInUp;
          "
        >
          诞生于2015年的映客，以“你丑你先睡、我美我直播”为Slogan带动“全民直播”的风潮，让移动直播深入人心。
        </p>
        <p
          class="paragraph2 wow fadeInUp"
          data-wow-delay="0.5s"
          style="
            visibility: visible;
            animation-delay: 0.5s;
            animation-name: fadeInUp;
          "
        >
          “千播大战”中映客突围而出，成为泛娱乐直播行业的代表，并于2018年在港交所挂牌上市。作为“直播+”的倡导者，映客除在秀场、综艺、电商等方向纵深发展外，在短视频、音频等领域也抢先布局，致力于打造音视频娱乐社交新生态，引领中国互动娱乐产业的新发展。
        </p>
      </div>
    </div>
  </div>
</div>

<!-- 视频弹窗 -->
<div class="map_layer" id="js_may_layer">
  <div class="map_pannel">
    <span class="map_close"></span>
    <div class="map_pannel_content">
      <video
        id="videoMain"
        controls=""
        controlslist="nodownload"
        class="video"
        src="https://m4a.inke.cn/MTU5MjIwNTAxMDQyMiM4MDcjbXA0.mp4"
      >
        您的浏览器不支持video标签，建议更新浏览器版本
      </video>
    </div>
  </div>
</div>
</section>`;

const css = `
<style type="text/css">
.video-card-content {
}
.video-card-content .top {
  padding: 121px 0 20px;
}

.video-card-content .top .top-img {
  display: block;
  margin: 0 auto;
  width: 385px;
  height: 93px;
}

.video-card-content .info {
  padding: 72px 0 22px;
  height: 1012px;
  background: url(https://img.ikstatic.cn/MTU5MjI3NjIwMDY4NiM0NzQjcG5n.png)
    center no-repeat;
  background-size: 1333px 1012px;
}

.video-card-content .info .video-box {
  width: 937px;
  height: 527px;
  margin: 140px auto 0;
  position: relative;
}

.video-card-content .info .video-box .video {
  width: 100%;
  height: 100%;
  position: relative;
}

.video-card-content .info .video-box .play {
  background: url(https://img.ikstatic.cn/MTU5MjIwNjAzNTAyMyM4NjgjcG5n.png)
    center no-repeat;
  background-size: 84px 84px;
  position: absolute;
  width: 84px;
  height: 84px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 1;
  cursor: pointer;
  transition: 0.25s;
}

.video-card-content .info .video-box .play:hover {
  opacity: 0.8;
}

.video-card-content .info .box {
  width: 937px;
  margin: 55px auto 0;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
}

.video-card-content .info .box .logo {
  width: 144px;
  height: 144px;
  background: url(https://img.ikstatic.cn/MTU5MjIwNzI4ODY5NyM5MDEjcG5n.png)
    center no-repeat;
  background-size: 144px 144px;
}

.video-card-content .info .box .cen {
  width: 708px;
}

.video-card-content .info .box .cen .text {
  font-size: 16px;
  color: #333;
  font-weight: 400;
  line-height: 32px;
  text-align: justify;
  margin-top: -10px;
}

.video-card-content .info .box .cen .text .paragraph1 {
  margin: 0;
  padding-bottom: 10px;
  text-indent: 2rem;
}

.video-card-content .info .box .cen .text .paragraph2 {
  margin: 0;
  text-indent: 2rem;
}

.video-card-content .info .box .cen .text .btn {
  text-decoration: none;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
  align-content: center;
  -webkit-align-content: center;
  cursor: pointer;
  width: 120px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  color: #00d8c9;
  border: 1px solid #00d8c9;
  border-radius: 20px;
  background-size: 6px 10px;
  margin-top: 48px;
}

.video-card-content .info .box .cen .text .btn .btn-icon {
  width: 6px;
  height: 10px;
  margin: 1px 0 0 10px;
}

.video-card-content .info .box .cen .text .btn:hover {
  color: #fff;
  background: #00d8c9;
}

.video-card-content .info .box .cen .text .btn:hover .hove1 {
  display: none;
}

.video-card-content .info .box .cen .text .btn:hover .hove2 {
  display: block;
}

.map_layer {
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.4);
}

.map_layer.show {
  display: block;
}

.map_layer .map_pannel {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 101;
  height: 527px;
  width: 937px;
  font-size: 14px;
  background-color: #fff;
  border-radius: 10px;
  background-clip: padding-box;
}

.map_layer .map_pannel .map_close {
  z-index: 999;
  position: absolute;
  right: 20px;
  width: 18px;
  height: 18px;
  transition: 0.2s all ease-in-out;
  background-image: url(https://www.inke.cn/images/sprite_icon.png);
  background-repeat: no-repeat;
}

.map_layer .map_pannel .map_close {
  top: 20px;
  background-position: -2px -190px;
  -webkit-transition: 0.2s all ease-in-out;
  -moz-transition: 0.2s all ease-in-out;
  -o-transition: 0.2s all ease-in-out;
  cursor: pointer;
}

.map_layer .map_pannel .map_close:hover {
  transform: rotate(180deg);
}

.map_layer .map_pannel .map_pannel_content {
  border-radius: 6px;
  width: 100%;
  overflow: hidden;
}

.map_layer .map_pannel .map_pannel_content .video {
  width: 100%;
  height: 100%;
}
</style>
`

const script = `
<script>
var $palyBtn = $("#videoPlay");
var $jsPlayer = $("#js_may_layer");
var $video = document.getElementById("videoMain");
var $closeBtn = $jsPlayer.find(".map_close");

$palyBtn.on("click", function () {
  $jsPlayer.addClass("show"),
    $video.paused ? $video.play() : $video.pause();
});

$closeBtn.on("click", function (e) {
  e.stopPropagation();
  $video.pause();
  $jsPlayer.removeClass("show");
});
</script>
`;

export default { html, css, script };
