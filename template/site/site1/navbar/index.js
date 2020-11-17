const html = `<section class="nike-navbar">
    <div class="logo">Logo</div>
    <ul class="nav-list">
      <li><a>&#x7537;&#x5B50;</a></li>
      <li><a>&#x5973;&#x5B50;</a></li>
      <li><a>&#x513F;&#x7AE5;</a></li>
      <li><a>&#x4E13;&#x5C5E;&#x5B9A;&#x5236;</a></li>
      <li><a>&#x6D41;&#x884C;&#x6F6E;&#x54C1;</a></li>
    </ul>
    <div class="search"><input></div>
  </section>`

const css = `<style type="text/css">
.nike-navbar {
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 0 12px;
  box-sizing: border-box;
}

.nike-navbar .logo {
  width: 60px;
  height: 48px;
  flex-shrink: 0;
  text-align: center;
  line-height: 48px;
}

.nike-navbar .nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.nike-navbar .nav-list > li {
  cursor: pointer;
}

.nike-navbar .nav-list > li:hover {
  box-shadow: inset 0 -2px 0 0 #111;
}

.nike-navbar .nav-list > li > a {
  display: inline-block;
  padding: 8px 20px;
}

.nike-navbar .search {
}
.nike-navbar .search > input {
  width: 200px;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 3px;
  transition: all 0.3s ease;
  z-index: 3;
  box-shadow: inset 0 1px 0 0 #ccc, inset -1px 0 0 0 #ccc, inset 0 -1px 0 0 #ccc,
    inset 1px 0 0 0 #ccc;
  padding: 0 12px;
}

.nike-navbar .search > input:focus {
  width: 246px;
  box-shadow: inset 0 1px 0 0 #111, inset -1px 0 0 0 #111, inset 0 -1px 0 0 #111,
    inset 1px 0 0 0 #111;
}

</style>`


export default { html, css };
