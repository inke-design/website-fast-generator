const html = `
<section class="template-one-footer">
    <div><a href="">Copyright © 2020 精品印刷有限公司. All Rights Reserved</a></div>
    <div>本站内容、图片、视频为网站模板演示数据，如有涉及侵犯版权，请联系我们提供书面反馈，我们核实后会立即删除。</div>
  </section>`;

const css = `
<style>
      a:hover { text-decoration:none; }
      .template-one-footer {
        text-align: center;
        height: 80px;
        background-color: #333;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-around;
        color: #ffffff;
      }
      .template-one-footer a {
        color: #ffffff;
      }
    </style>
`

const script = `
<script>
       $('#template-navbar-one-navigation-box').on('click', 'div', function () {
    $(this).addClass('active').siblings().removeClass('active')
  })
    </script>`


export default { html, css, script };
