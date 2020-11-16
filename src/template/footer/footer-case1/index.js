const html = `
<div class="footer-four">
  <div class="middle">
    <div class="icon-label">
      <div class="label">
        <div class="icon">
          <img src="https://demosc.chinaz.net/Files/DownLoad/moban/202011/moban5026/icon/loc.png" alt="">
        </div>
        <span>Locations</span>
      </div>
      <div class="label">
        <div class="icon">
          <img src="https://demosc.chinaz.net/Files/DownLoad/moban/202011/moban5026/icon/call.png" alt="">
        </div>
        <span>+12586954775</span>
      </div>
      <div class="label">
        <div class="icon">
          <img src="https://demosc.chinaz.net/Files/DownLoad/moban/202011/moban5026/icon/email.png" alt="">
        </div>
        <span>demo@gmail.com</span>
      </div>
    </div>

    <p class="copyright">Copyright © 2020.Company name All rights reserved</p>
  </div>
</div>
`;

const css = `
<style type="text/css">
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.footer-four {
  width: 100%;
  background: #000;
  padding: 30px 0;
}
.footer-four .middle{
  width: 1140px;
  margin: 0 auto;
}
.footer-four .middle .icon-label{
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #fff;
  padding-bottom: 30px;
  margin-bottom: 30px;
}
.icon-label .label{
  display: flex;
  color: #fcfbfb;
  padding: 0px 30px;
  font-size: 18px;
}
.icon-label .label span{
  padding: 0 16px;
  color: #fcfbfb;
  margin-top: 4px;
}
.icon-label .label .icon{
  width: 31px;
  height: 31px;
}
.icon-label .label .icon img{
  width: 100%;
  height: 100%;
}
.copyright{
  color: #fff;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
}
</style>
`

const script = ''


export default { html, css, script };
