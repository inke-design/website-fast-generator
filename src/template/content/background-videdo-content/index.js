const html = `
<section class="full-backgroud-video-content">
<div class="cont">
  <div class="cont-bg"><video id="bgvideo" width="100%" height="100%"
      src="https://m4a.inke.cn/MTU5MTI0Mjg1NzAwNCMzNzYjbXA0.mp4" loop="" style="width: 1300px; height: 731.25px;"
      autoplay="">您的浏览器不支持video标签，建议更新浏览器版本</video>
    <div class="cont-bg-mask"></div>
  </div>
</div>
<div class="window-wrapper" style="width: 1300px; height: 731.25px;">
  <ul>
    <li><a href="https://itunes.apple.com/cn/app/id978985106">IOS下载</a></li>
    <li><a href="http://app.inke.cn/spread/inkeguanwang.apk?v=1603419" class="android_down_url">Android下载</a></li>
    <li class="code pr"><span>扫码下载</span>
      <p id="qrcode"></p>
    </li>
    <li><a href="./livemanager/index.html#/livepartner">直播伴侣</a></li>
  </ul>
  <div class="roll">
    <div id="muted" style="background-position: -31px -77px;"></div>
    <div class="box rollNextPage" data-page="1">
      <div class="icon"></div>
      <div class="text">向下滑动</div>
    </div>
  </div>
</div>
</section> 
`;

const css = `
<style type="text/css">
.full-backgroud-video-content {
  position: relative;
}

.full-backgroud-video-content .cont {
  width: 100%;
  min-width: 1060px;
  position: relative;
  margin: 0 auto;
  height: 100%
}

.full-backgroud-video-content .cont .roll,
.full-backgroud-video-content .content .roll {
  margin: auto;
  padding: 20px 0 0;
  position: absolute;
  left: 0;
  right: 0
}

.full-backgroud-video-content .cont-bg {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -100;
  font-size: 0
}

.full-backgroud-video-content .cont-bg-mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(1, 7, 20, .2)
}

.full-backgroud-video-content .cont .roll {
  bottom: 20px
}

.full-backgroud-video-content .content .roll {
  bottom: 30px
}

.full-backgroud-video-content .content .roll .text {
  color: #333
}

.full-backgroud-video-content .roll {
  position: absolute;
  bottom: 12px;
  left: 0;
  right: 0
}

.full-backgroud-video-content .roll .box {
  -webkit-animation: jump 2s infinite;
  animation: jump 2s infinite
}

.full-backgroud-video-content .roll .icon {
  cursor: pointer;
  margin: 0 auto;
  width: 42px;
  height: 42px;
  background: url(https://img.ikstatic.cn/MTU4OTc5NDUzNzQxNSM0NDgjcG5n.png) center no-repeat;
  background-size: 42px 42px
}

.full-backgroud-video-content .roll .text {
  text-align: center;
  font-size: 14px;
  color: #fff;
  padding: 16px 0
}

.full-backgroud-video-content .cont p {
  margin-top: 0;
  margin-bottom: 0;
  height: 150px;
  text-align: center
}

.full-backgroud-video-content .cont p img {
  display: inline-block;
  width: 1200px;
  height: 150px
}

.full-backgroud-video-content .window-wrapper {
  position: absolute;
  top: 0;
  min-width: 1300px;
  width: 100%
}

.full-backgroud-video-content .window-wrapper ul {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto 180px;
  width: 800px;
  height: 76px;
  list-style: none;
  display: -webkit-flex;
  -webkit-justify-content: space-between
}

.full-backgroud-video-content .window-wrapper li {
  width: 178px;
  line-height: 76px;
  border-radius: 38px
}

.full-backgroud-video-content .window-wrapper li:nth-of-type(1) a {
  background: url(https://img.ikstatic.cn/MTU4OTk0Njk3OTQ3NyM5OTUjcG5n.png) center no-repeat;
  background-size: 100%;
}

.full-backgroud-video-content .window-wrapper li a,
.full-backgroud-video-content .window-wrapper li span {
  display: block;
  width: 100%;
  height: 100%;
  text-indent: -9999px;
  opacity: .7;
  filter: alpha(opacity=70);
  outline: 0
}

.full-backgroud-video-content .pr {
  position: relative;
}

.full-backgroud-video-content #muted,
.full-backgroud-video-content #qrcode {
  position: absolute;
  z-index: 1;
}

.full-backgroud-video-content #muted {
  overflow: hidden;
  right: 10px;
  bottom: 10px;
  width: 30px;
  height: 30px;
  border-radius: 20px;
  background-position: 0 -77px;
  cursor: pointer;
  z-index: 1;
}

.full-backgroud-video-content #qrcode {
  display: none;
  top: 80px;
  left: 50%;
  margin-left: -89px;
  width: 178px;
  height: 178px;
  padding: 3px;
  background: url(https://www.inke.cn/images/download_code.png) 0 0/100% no-repeat #fff;
  border-radius: 10px;
  background-clip: padding-box;
  box-shadow: 0 0 20px #ccc
}


.full-backgroud-video-content #muted,
.full-backgroud-video-content .window-wrapper li a,
.full-backgroud-video-content .window-wrapper li span {
  background-image: url(https://www.inke.cn/images/sprite_img.png);
  background-repeat: no-repeat
}

.window-wrapper li a:hover,
.window-wrapper li span:hover {
  opacity: 1;
  filter: alpha(opacity=100)
}

.full-backgroud-video-content window-wrapper li:nth-of-type(1) a {
  background: url(https://img.ikstatic.cn/MTU4OTk0Njk3OTQ3NyM5OTUjcG5n.png) center no-repeat;
  background-size: 100%
}

.full-backgroud-video-content .window-wrapper li:nth-of-type(2) a {
  background: url(https://img.ikstatic.cn/MTU4OTk0Njk5NTY2MiM1MDEjcG5n.png) center no-repeat;
  background-size: 100%
}

.full-backgroud-video-content .window-wrapper li:nth-of-type(3) span {
  background: url(https://img.ikstatic.cn/MTU4OTk0Njk4NDg3NyM5NjEjcG5n.png) center no-repeat;
  background-size: 100%
}

.full-backgroud-video-content .window-wrapper li:nth-of-type(4) a {
  background: url(https://img.ikstatic.cn/MTU4OTk0Njk5MDQ2MiMyMTIjcG5n.png) center no-repeat;
  background-size: 100%
}


@-webkit-keyframes jump {

  0%,
  to {
    transform: translateY(0)
  }

  50% {
    transform: translateY(20%)
  }
}

@keyframes jump {

  0%,
  to {
    transform: translateY(0)
  }

  50% {
    transform: translateY(20%)
  }
}
</style>
`

const script = `
<script>
  // 适配
  window.addEventListener('load', changeSize)
  window.addEventListener('resize', changeSize)

  $(function () {
    var $bgVideo = $('#bgvideo');
    var bgVideo = $bgVideo[0],
      $muted = $('#muted'),
      $code = $('.code.pr'),
      _muted = false;
    changeSize()
    var setMuteIcon = function () {
      // 静音的样式
      if (_muted) {
        $muted.css('backgroundPosition', '-31px -77px');
      } else {
        $muted.css('backgroundPosition', '0 -77px');
      }
    }

    bgVideo.addEventListener('canplay', function () {
      var promise = this.play();
      bgVideo.volume = 0.75
      promise && promise.then && promise.then(function () {
        console.log('支持播放: ')
      }).catch(function () {
        // 新版chrome不支持自动播放了, 所以这里得兼容一下, 做个判断, 先这只静音, 然后再静音播放
        _muted = true
        bgVideo.muted = true
        setMuteIcon()

        $bgVideo.prop('muted', true)
        $bgVideo.prop('autoplay', true)
        bgVideo.play()
      })
    });

    // 静音
    $muted.on('click', function () {
      bgVideo.muted = !bgVideo.muted;
      _muted = !_muted;
      setMuteIcon()
    });

    // 扫码下载
    $code.find('span').hover(function () {
      $code.find('p').show();
    }, function () {
      $code.find('p').hide();
    });

    // 直播助手new
    var LIVE_MANAGER_NEW = 'LIVE_MANAGER_NEW';
    var liveNew = localStorage.getItem(LIVE_MANAGER_NEW);
    if (!liveNew) {
      $('#push-flow').append('<img class="icon-top-right" src="https://img.ikstatic.cn/MTU1OTE5NjYzNzQyMSM1NDgjcG5n.png" alt=""/>');
      $('#push-flow').on('click', function () {
        localStorage.setItem(LIVE_MANAGER_NEW, Date.now());
      });
    }
    // 埋点
    var src = window.location.protocol + '//baseapi.busi.inke.cn/b.gif?cc=TG6001&source=other&os=other&type=hactivity&busi=inke&time=' + Date.now() + '&userid=&page=index&info=%7B%22desc%22%3A%22%E9%A6%96%E9%A1%B5%E5%B1%95%E7%A4%BA%E4%B8%8A%E6%8A%A5%22%7D&eid=pv&url=' + encodeURIComponent(window.location.href);
    var image = new Image();
    image.src = src;
  });

  function changeSize() {
    var width = Math.max($('body').width(), 1300)
    var iVideoRatio = 16 / 9,
      iH = width / iVideoRatio;
    $('.full-backgroud-video-content').css({ width: width })
    $('.window-wrapper').css({
      width: width,
      height: Math.min(iH, window.innerHeight)
    })
    $('#bgvideo').css({
      width: width,
      height: iH
    });
  }

</script>
`


export default { html, css, script };
