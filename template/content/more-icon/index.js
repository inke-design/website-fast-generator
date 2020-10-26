const html = `
<section class="services section">
<div class="container">
  <div class="title-section">
    <span>Sevices</span>
    <h2>Choose our<br />creative services</h2>
  </div>
  <div class="row first-row">
    <div class="col-md-4">
      <div class="entry aos-init aos-animate" data-aos="zoom-in">
        <img
          src="https://img.ikstatic.cn/MTYwMDM5ODYwNTAzNiM3NjMjcG5n.png"
          class="fab fa-wordpress"
        />
        <h5>WordPress</h5>
        <p>
          Lorem ipsum dolor sit consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper
        </p>
      </div>
    </div>
    <div class="col-md-4">
      <div class="entry aos-init aos-animate" data-aos="zoom-in" data-aos-duration="1500">
        <img
          src="https://img.ikstatic.cn/MTYwMDM5ODYwNTAzNiM3NjMjcG5n.png"
          class="fab fa-wordpress"
        />
        <h5>Magento</h5>
        <p>
          Lorem ipsum dolor sit consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper
        </p>
      </div>
    </div>
    <div class="col-md-4">
      <div class="entry aos-init aos-animate" data-aos="zoom-in" data-aos-duration="1500">
        <img
          src="https://img.ikstatic.cn/MTYwMDM5ODYwNTAzNiM3NjMjcG5n.png"
          class="fab fa-wordpress"
        />
        <h5>Drupal</h5>
        <p>
          Lorem ipsum dolor sit consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper
        </p>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-4">
      <div class="entry aos-init aos-animate" data-aos="zoom-in" data-aos-duration="2000">
        <img
          src="https://img.ikstatic.cn/MTYwMDM5ODYwNTAzNiM3NjMjcG5n.png"
          class="fab fa-wordpress"
        />
        <h5>Marketing</h5>
        <p>
          Lorem ipsum dolor sit consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper
        </p>
      </div>
    </div>
    <div class="col-md-4">
      <div class="entry aos-init aos-animate" data-aos="zoom-in" data-aos-duration="2500">
        <img
          src="https://img.ikstatic.cn/MTYwMDM5ODYwNTAzNiM3NjMjcG5n.png"
          class="fab fa-wordpress"
        />
        <h5>Mobile</h5>
        <p>
          Lorem ipsum dolor sit consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper
        </p>
      </div>
    </div>
    <div class="col-md-4">
      <div class="entry aos-init aos-animate" data-aos="zoom-in" data-aos-duration="3000">
        <img
          src="https://img.ikstatic.cn/MTYwMDM5ODYwNTAzNiM3NjMjcG5n.png"
          class="fab fa-wordpress"
        />
        <h5>Graphic</h5>
        <p>
          Lorem ipsum dolor sit consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper
        </p>
      </div>
    </div>
  </div>
</div>
</section>`;

const css = `
<style>
.services {
  background-image: url(https://img.ikstatic.cn/MTYwMzYzNjIwNzQ2MCMgODYjcG5n.png);
  background-position: top left;
  background-repeat: no-repeat;
  background-size: cover;
}
.section {
  padding: 55px 0 75px 0;
}
.title-section {
  text-align: center;
  padding-bottom: 40px;
}
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
[data-aos^='zoom'][data-aos^='zoom'].aos-animate {
  opacity: 1;
  transform: translateZ(0) scale(1);
}
[data-aos][data-aos][data-aos-duration='1500'],
body[data-aos-duration='1500'] [data-aos] {
  transition-duration: 1.5s;
}
[data-aos][data-aos][data-aos-easing='ease'],
body[data-aos-easing='ease'] [data-aos] {
  transition-timing-function: ease;
}
.services .entry {
  margin: 0px 20px 0px 20px;
  padding: 20px 20px 2px 20px;
  border-radius: 10px;
  text-align: center;
}
.services .entry:hover {
  background-color: #ffffff;
  box-shadow: 0px 1px 45px 0px #dddddd;
}
.services .first-row {
  padding-bottom: 40px;
}
</style>
`

const script = ``


export default { html, css, script };
