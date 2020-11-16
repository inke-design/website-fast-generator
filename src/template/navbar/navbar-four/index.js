const html = `
<section class="navbar-four">
<div class="navbar-four">
  <div class="middle">
    <div class="logo">
      <img
        src="https://demosc.chinaz.net/Files/DownLoad/moban/202011/moban5026/images/logo.png"
        alt="#"
      />
    </div>
    <div class="nav-list">
      <ul class="nav-ul">
        <li class="adv14">
          <a href="javascript:;" class="adv15 advN1">HOME</a>
        </li>
        <span>&nbsp;</span>
        <li class="adv14">
          <a href="javascript:;" class="adv24 advN1">ABOUT</a>
        </li>
        <span>&nbsp;</span>
        <li class="adv14">
          <a href="javascript:;" class="adv24 advN1">CONCERTS</a>
        </li>
        <span>&nbsp;</span>
        <li class="adv14">
          <a href="javascript:;" class="adv24 advN1">GALLERY</a>
        </li>
        <span>&nbsp;</span>
        <li class="adv14">
          <a href="javascript:;" class="adv24 advN1">CONTACT</a>
        </li>
        <span>&nbsp;</span>
        <li class="adv14">
          <a href="javascript:;" class="adv24 advN1">LOGIN</a>
        </li>
        <span>&nbsp;</span>
      </ul>
    </div>
  </div>
</div>
</section>`;

const css = `
<style>
.navbar-four{
  width: 100%;
  padding: 15px 0;
  background: #2f374a;
}
.navbar-four .middle{
  width: 940px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar-four .middle .logo{
  width: 144px;
}
.navbar-four .middle .logo img{
  width: 100%;
}
.nav-list .nav-ul{
  display: flex;
  list-style: none;
  margin: 0;
}
.nav-list .nav-ul li img {
  width: 29px;
  height: 29px;
}
.nav-list .nav-ul li a {
  padding: 11px 20px;
  text-align: center;
  line-height: 20px;
  font-size: 16px;
  display: block;
  font-weight: 500;
  color: #fff;
  text-transform: uppercase;
  transition: all 0.3s ease-in;
  text-decoration: none;
}

.nav-list .nav-ul li a:hover {
  color: #fff;
  background: #0ed1f0;
  border-radius: 17px;
  transition: all 0.3s ease-in;
}
</style>
`

const script = `
<script>
    </script>`


export default { html, css, script };
