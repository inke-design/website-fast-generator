const html = `
<footer class="container icp-footer" style="width: 1445px">
  <div class="footer_menu">
    <span><a target="_blank" href="/private.html">隐私政策</a>|</span
    ><span><a target="_blank" href="/server.html">服务条款</a>|</span
    ><span><a href="/hotlive_list.html">热门直播</a>|</span
    ><span><a href="/livemanager/index.html#/stream">直播助手</a></span>
  </div>
  <p><a href="/">湖南映客互娱网络信息有限公司</a><span>客服热线：4008-178-168</span></p>
  <p>
    Copyright 2015-2020 inke.cn All rights reserved.
    <a href="http://www.beian.miit.gov.cn " target="_blank">湘ICP备16012585号-1</a>
  </p>
  <p class="txt">
    湘网文（2016）2964-057号
    <img src="https://img.ikstatic.cn/MTU4ODk5MzMwNTIyOSM0NDQjcG5n.png" class="img-bei" /><a
      href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=43019002000355"
      target="_blank"
      >湘公网安备 43019002000355号</a
    >
    增值业务许可证：湘B2-20170040
  </p>
  <p class="txt"><a href="http://www.cyberpolice.cn/wfjb/" target="_blank">公安部网络违法犯罪举报网站</a></p>
  <p class="txt">
    <a href="http://www.shdf.gov.cn/shdf/channels/740.html" target="_blank">中国扫黄打非网举报入口</a>
  </p>
  <p class="txt">举报热线：0731-81872901 举报邮箱：jubao@inke.cn</p>
</footer>
`;

const css = `
<style type="text/css">
.icp-footer {
  background: #fff;
  padding-bottom: 20px;
  line-height: 20px;
  text-align: center;
}

.icp-footer .footer_menu {
  padding-top: 30px;
  padding-bottom: 26px;
  font-size: 14px;
  border-top: 1px #e8e8e8 solid;
}

.icp-footer .footer_menu span a {
  margin-right: 15px;
  margin-left: 15px;
  color: #333;
  text-decoration: none;
}

.icp-footer p a:hover,
.icp-footer .footer_menu span a:hover {
  color: #00d8c9;
}

.icp-footer p {
  margin-top: 0;
  font-size: 12px;
  color: #999;
  margin-bottom: 6px;
}

.icp-footer p a {
  color: #999;
  text-decoration: none;
}

.icp-footer p span {
  padding-left: 10px;
}
</style>
`

const script = ''


export default { html, css, script };
