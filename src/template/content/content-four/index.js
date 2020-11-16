const html = `
<section class="content-four">
<div class="content">
    <div class="middle">
      <div class="left">
        <h2>About Us</h2>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look</p>
        <a>
          Read More
        </a>
      </div>
      <div class="right">
        <img src="https://demosc.chinaz.net/Files/DownLoad/moban/202011/moban5026/images/about.png" alt="">
      </div>
    </div>
  </div>
</section>`;

const css = `
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.content {
  background: url("https://img.ikstatic.cn/MTYwNTUxMzExNzY0NSMyOTEjanBn.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 110px 0;
}
.content .middle {
  width: 1140px;
  margin: 0 auto;
  display: flex;
}
.content .middle .left {
  width: 50%;
  padding: 50px;
}
.content .middle .left h2 {
  padding: 0;
  color: #020d0f;
  line-height: 70px;
  font-size: 70px;
}
.content .middle .left p {
  font-size: 17px;
  line-height: 28px;
  color: #000;
  padding: 35px 0px;
}
.content .middle .left a {
  font-size: 16px;
  border: #000 solid 1px;
  background-color: #000;
  color: #fff;
  padding: 9px 0px;
  max-width: 171px;
  width: 100%;
  display: inline-block;
  text-align: center;
  border-radius: 30px;
  transition: all .3s ease-in-out;
  cursor: pointer;
}
.content .middle .left a:hover {
  background-color: #0ed1f0;
  border: #0ed1f0 solid 1px;
  color: #fff;
}
.content .middle .right {
  width: 50%;
}
.content .middle .right img {
  width: 100%;
}
</style>
`

const script = ``


export default { html, css, script };
