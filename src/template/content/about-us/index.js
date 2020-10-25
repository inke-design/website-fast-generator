const html = `
<section class="about-us section">
<div class="container">
  <div class="row align-items-center">
    <div class="col-md-6">
      <div class="entry">
        <img src="https://img.ikstatic.cn/MTYwMzYzNzI1MzcwOSMzODYjcG5n.png" alt="" />
      </div>
    </div>
    <div class="col-md-6">
      <div class="entry">
        <span>关于我们</span>
        <h2>我们是一个团队</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
          leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
          nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <button class="button">Read More</button>
      </div>
    </div>
  </div>
</div>
</section>`;

const css = `
<style>
.about-us {
  background-image: url(../images/bg-about-us.png);
  background-position: top right;
  background-repeat: no-repeat;
  background-size: contain;
}
.section {
  padding: 55px 0 75px 0;
}
.align-items-center {
  -ms-flex-align: center !important;
  align-items: center !important;
}
.about-us .entry img {
  padding-right: 40px;
  width: 100%;
  vertical-align: middle;
  border-style: none;
}
.about-us .entry span {
  color: #614caa;
  font-size: 16px;
  font-weight: 600;
}
.about-us .entry h2 {
  margin: 20px 0;
}
.about-us p {
  margin-top: 0;
  margin-bottom: 20px;
}
.about-us .button {
  background: #614caa;
  border: 0;
  color: #fff;
  padding: 6px 14px 6px 14px;
  border-radius: 5px;
  font-size: 15px;
  position: relative;
  padding: 8px 20px;
  transition: all 0.3s;
  margin-top: 20px;
}
[type='button']:not(:disabled),
[type='reset']:not(:disabled),
[type='submit']:not(:disabled),
button:not(:disabled) {
  cursor: pointer;
}
</style>
`

const script = ``


export default { html, css, script };
