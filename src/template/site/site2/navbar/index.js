const html = `<div class="header site2-header">
    <div class="wrap">
      <div class="logo"><a href="http://zly_20201117_10.demo.qfpffmp.cn/"><img src="https://img.ikstatic.cn/MTU5MjIwNzI4ODY5NyM5MDEjcG5n.png"></a></div>
      <div class="menu">
        <ul>
          <li class="on"><a href="http://zly_20201117_10.demo.qfpffmp.cn/">&#x7F51;&#x7AD9;&#x9996;&#x9875;</a></li>

          <li><a href="http://zly_20201117_10.demo.qfpffmp.cn/a/guanyuwomen/gongsijianjie/">&#x5173;&#x4E8E;&#x6211;&#x4EEC;</a></li>

          <li><a href="http://zly_20201117_10.demo.qfpffmp.cn/a/xiliefenlei/">&#x7CFB;&#x5217;&#x5206;&#x7C7B;</a></li>

          <li><a href="http://zly_20201117_10.demo.qfpffmp.cn/a/mendianfenbu/">&#x95E8;&#x5E97;&#x5206;&#x5E03;</a></li>

          <li><a href="http://zly_20201117_10.demo.qfpffmp.cn/a/xinwendongtai/">&#x65B0;&#x95FB;&#x52A8;&#x6001;</a></li>

          <li><a href="http://zly_20201117_10.demo.qfpffmp.cn/a/lianxiwomen/">&#x8054;&#x7CFB;&#x6211;&#x4EEC;</a></li>

        </ul>
      </div>
      <div class="menu_wrap"></div>
      <div class="tel"><span>020-88888888</span></div>
      <div class="clear"></div>
    </div>
  </div>`

const css = `<style type="text/css">
body {
  font-family: "Microsoft YaHei", "Open Sans", sans-serif;
  font-size: 14px;
  color: #333;
}
.site2-header {
 
}
.site2-header a {
  text-decoration: none;
}
input,
select,
textarea {
  font-family: 微软雅黑, "Open Sans", sans-serif;
  font-size: 1em;
}
.wrap {
  width: 96%;
  margin: 0 auto;
  max-width: 1200px;
  position: relative;
}

img,
a {
  border: 0;
}
ul,
li {
  list-style: none;
}
* {
  margin: 0;
  padding: 0;
}
.flt {
  float: left;
}
.frt {
  float: right;
}
.clear {
  clear: both;
}
.clear:after,
.clear:before {
  content: "";
  clear: both;
  display: table;
}
img {
  max-width: 100%;
}
.img {
  overflow: hidden;
  position: relative;
}
.img:before {
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid rgba(255, 255, 255, 0);
  z-index: 100;
}
.img:hover:before {
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  border: 1px solid rgba(255, 255, 255, 0.5);
}
.img:hover img {
  transform: scale(1.1) rotate(3deg);
  -o-transform: scale(1.1) rotate(3deg);
  -webkit-transform: scale(1.1) rotate(3deg);
  -moz-transform: scale(1.1) rotate(3deg);
  -ms-transform: scale(1.1) rotate(3deg);
}
.img a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 101;
}

h3 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
}
*,
*:after,
*:before {
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
}

.modal,
.fp_modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}
.fp_modal {
  display: table;
}
.modal {
  transition: all 0s;
  -o-transition: all 0s;
  -webkit-transition: all 0s;
  -moz-transition: all 0s;
  -ms-transition: all 0s;
  background: rgba(0, 0, 0, 0.7);
}
.fp_modal .cell {
  display: table-cell;
  vertical-align: middle;
}
.modal_cont {
  max-width: 990px;
  margin: 0 auto;
  width: 90%;
  background: #fff;
  position: relative;
}
.modal_cont .close {
  position: absolute;
  top: 34px;
  right: 20px;
  width: 33px;
  height: 33px;
  background: url(../images/close.png) no-repeat center center #ccc;
  border-radius: 100%;
  cursor: pointer;
}
.modal_cont .box {
  padding: 45px;
}
/*----------header----------*/
.site2-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 79px;
  z-index: 999;
  background: #fff;
  line-height: 79px;
  box-shadow: 0 0 20px rgba(229, 229, 229, 0.8);
}
.site2-header.on {
  position: initial;
}
.site2-header .wrap {
  width: auto;
  padding: 0 250px;
  max-width: initial;
}
.logo {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 225px;
  text-align: center;
}
.logo img {
  width: auto;
  height: 50%;
  vertical-align: middle;
}
.menu {
  text-align: center;
}
.menu ul li {
  display: inline-block;
  width: 100px;
  text-align: center;
  font-size: 14px;
  margin: 0 13px;
}
.menu {
  width: 90%;
  max-width: 950px;
  margin: 0 auto;
}
.menu ul li a {
  display: block;
  color: #666;
  position: relative;
}
.menu ul li a:before {
  content: "";
  display: block;
  position: absolute;
  width: 0;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 0;
  height: 4px;
  background: #8cb25e;
}
.menu ul li.on a:before,
.menu ul li a:hover:before {
  width: 100%;
}
.menu ul li.on a,
.menu ul li a:hover {
  color: #8cb25e;
}
.tel {
  position: absolute;
  top: 50%;
  right: 0;
  line-height: 24px;
  margin-top: -12px;
  padding: 0 26px;
  background: url(../images/icon1.png) no-repeat left center;
}
.tel span {
  color: #8cb25e;
  font-size: 16px;
  padding: 0 12px;
  border-left: 1px solid #e7e3e2;
}
.banner .item {
  position: relative;
  font-family: Arial;
}
.banner .item .text {
  left: 0;
  width: 100%;
  text-align: center;
  color: #fff;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  -o-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  font-size: 24px;
}
.banner .text h2 {
  font-size: 2em;
  margin-bottom: 1em;
}

.owl-theme .owl-dots .owl-dot span {
  width: 16px;
  height: 16px;
  margin: 0 15px;
  opacity: 0.6;
}
.owl-theme .owl-dots {
  margin-bottom: 30px;
}
.owl-theme .owl-dots .owl-dot.active span,
.owl-theme .owl-dots .owl-dot:hover span {
  background: #8cb25e;
  opacity: 1;
}

.banner .img1 {
  overflow: hidden;
}
.index_owl {
  margin-top: 79px;
}
/*----------mainer----------*/
.mainer {
}
.page {
  padding-top: 80px;
}
.page_tit {
  text-align: center;
  margin-bottom: 50px;
}
.page_tit h3 {
  font-size: 26px;
  font-weight: normal;
}
.page_tit h3 span {
  display: inline-block;
  padding: 0 14px;
  background: url(../images/icon2.png) repeat-x left center;
}
.page_tit h3 span em {
  font-style: normal;
  display: inline-block;
  padding: 0 23px;
  background: #fff;
}
.page_tit label {
  display: block;
  margin: 0 auto;
  margin-top: 20px;
  width: 78px;
  height: 5px;
  background: #222;
}
.page_tit p {
  color: #8cb25e;
  margin-top: 20px;
  text-transform: uppercase;
}

.owl {
  position: relative;
}
.owl_cur {
  position: absolute;
  top: 50%;
  margin-top: -20px;
  height: 0;
  left: 2%;
  right: 2%;
  z-index: 10;
}
.owl_cur span {
  cursor: pointer;
  display: block;
  width: 46px;
  height: 46px;
  border-radius: 100%;
  background: url(../images/cur1.png) no-repeat center center;
}
.owl_cur span.prev {
  float: left;
}
.owl_cur span.next {
  float: right;
  background: url(../images/cur2.png) no-repeat center center;
}
.owl_cur span.prev:hover {
  background: url(../images/cur1-1.png) no-repeat center center;
}
.owl_cur span.next:hover {
  background: url(../images/cur2-2.png) no-repeat center center;
}

.page.page1,
.page.page1 .page_tit h3 span em {
  background: #f7f5f6;
}
.explosive {
  padding-bottom: 190px;
}
.explosive_list {
}
.explosive_list h4 {
  font-size: 18px;
  color: #999;
  font-weight: normal;
  margin-bottom: 20px;
}
.explosive_list .img {
  overflow: hidden;
}
.explosive_list .img img {
  display: block;
  width: 100%;
}
.explosive_list .web {
}
.explosive_list .web .text {
  padding: 30px 19px 20px;
  border-bottom: 1px solid #e7e3e2;
}
.explosive_list .web .text h3 {
  font-size: 18px;
  font-weight: normal;
}
.explosive_list .web .text p {
  color: #999;
  margin-top: 15px;
}
.explosive_list .web .more {
  line-height: 50px;
  padding: 0 19px;
}
.explosive_list .web .more label {
  font-size: 13px;
  color: #999;
  display: inline-block;
  padding-right: 16px;
  background: url(../images/icon3.png) no-repeat right center;
}
.explosive_list:hover .web {
  background: #8cb25e;
}
.explosive_list:hover .web .text {
  border-color: #9ebc78;
}
.explosive_list:hover .web .text h3 {
  color: #fff;
}
.explosive_list:hover .web .text p {
  color: #cce5ad;
}
.explosive_list:hover .web .more label {
  color: #fff;
  background: url(../images/icon3-1.png) no-repeat right center;
}
.explosive_owl .owl_cur {
  top: initial;
  bottom: -60px;
  margin-top: 0;
  text-align: center;
}
.explosive_owl .owl_cur span {
  display: inline-block;
  width: 52px;
  height: 52px;
  margin: 0 20px;
}
.explosive_owl .owl_cur span.prev {
  background: #fff url(../images/curl.png) no-repeat center center;
  border-radius: 0;
  float: none;
}
.explosive_owl .owl_cur span.next {
  background: #fff url(../images/curr.png) no-repeat center center;
  border-radius: 0;
  float: none;
}
.explosive_owl .owl_cur span.prev:hover {
  background: #8cb25e url(../images/curl-1.png) no-repeat center center;
}
.explosive_owl .owl_cur span.next:hover {
  background: #8cb25e url(../images/curr-1.png) no-repeat center center;
}

.warehouse {
}
.warehouse .left {
  float: left;
  width: 272px;
}
.warehouse .left .tit {
}
.warehouse .left .tit span {
  font-size: 20px;
  color: #222;
  display: inline-block;
  padding-left: 40px;
  background: url(../images/icon4.png) no-repeat left center;
}
.warehouse .left .list {
  position: relative;
}
.warehouse .left .list ul li {
  margin-top: 45px;
  font-size: 16px;
  padding-left: 40px;
  position: relative;
}
.warehouse .left .list ul li a {
  color: #999;
}
.warehouse .left .list ul li a i {
  display: block;
  width: 12px;
  height: 12px;
  background: url(../images/icon5.png) no-repeat center center;
  position: absolute;
  left: 0;
  top: 2px;
  z-index: 10;
}
.warehouse .left .list .line {
  position: absolute;
  width: 2px;
  top: 3px;
  left: 5px;
  background: #eff0ee;
  bottom: 3px;
  z-index: 9;
}
.warehouse .left .list .more {
  margin-top: 80px;
}
.more a {
  display: inline-block;
  width: 150px;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background: #8cb25e;
  color: #fff;
  position: relative;
  z-index: 10;
}
.warehouse .left .list ul li.on a,
.warehouse .left .list ul li a:hover {
  color: #8cb25e;
}
.warehouse .left .list ul li.on a i,
.warehouse .left .list ul li a:hover i {
  background: url(../images/icon5-1.png) no-repeat center center;
}
.warehouse .right {
  overflow: hidden;
}
.warehouse .right .list {
  margin-top: -17px;
}
.warehouse .right .list ul {
  margin: 0 -1%;
}
.warehouse .right .list ul li {
  float: left;
  width: 31.333%;
  margin: 17px 1% 0;
}
.warehouse .right .list ul li a {
  display: block;
  border: 1px solid #e7e3e2;
}
.warehouse .right .list ul li .img {
  overflow: hidden;
  background: #f7f5f6;
}
.warehouse .right .list ul li .img img {
  display: block;
  width: 100%;
}
.warehouse .right .list ul li .web {
  line-height: 56px;
  position: relative;
}
.warehouse .right .list ul li .web p {
  text-align: center;
  font-size: 16px;
  padding: 0 20px;
}
.warehouse .right .list ul li .web p label {
  position: absolute;
  right: 9px;
  top: 0;
  font-size: 13px;
  display: block;
  padding-right: 17px;
  background: url(../images/icon3-1.png) no-repeat right center;
  color: #fff;
  opacity: 0;
}
.warehouse .right .list ul li a:hover {
  border-color: #8cb25e;
}
.warehouse .right .list ul li a:hover .web {
  background: #8cb25e;
}
.warehouse .right .list ul li a:hover .web p {
  color: #fff;
  text-align: left;
}
.warehouse .right .list ul li a:hover .web p label {
  opacity: 1;
}

.special_offer_items .item .img {
  overflow: hidden;
}
.special_offer_items .item .img img {
  display: block;
  width: 100%;
}
.special_offer_owl .owl_cur {
  left: 0;
  right: 0;
  margin-top: -26px;
}
.special_offer_owl .owl_cur span {
  width: 52px;
  height: 52px;
  border-radius: 0;
}
.special_offer_owl .owl_cur span.prev {
  background: rgba(0, 0, 0, 0.7) url(../images/curl-1.png) no-repeat center
    center;
}
.special_offer_owl .owl_cur span.next {
  background: rgba(0, 0, 0, 0.7) url(../images/curr-1.png) no-repeat center
    center;
}
.special_offer_owl .owl_cur span.prev:hover {
  background: #8cb25e url(../images/curl-1.png) no-repeat center center;
}
.special_offer_owl .owl_cur span.next:hover {
  background: #8cb25e url(../images/curr-1.png) no-repeat center center;
}

.page.page2 {
  padding: 50px 0;
  background: url(../images/bg1.jpg) no-repeat center center;
  background-size: cover;
  /* margin-top: 80px; */
}
.index_about {
  max-width: 1200px;
  margin: 0 auto;
  border: 10px solid #fff;
  background: rgba(247, 245, 246, 0.95);
  padding: 70px 80px;
}
.index_about .page_tit h3 em {
  background: #f6f4f4;
}
.index_about .list {
  background: #fff;
  padding: 35px 0;
}
.index_about .list ul li {
  float: left;
  width: 25%;
  text-align: center;
  border-left: 1px solid #e7e3e2;
  margin-left: -1px;
}
.index_about .list ul li:first-child {
  border-left: none;
}
.index_about .list ul li h3 {
  font-size: 36px;
}
.index_about .list ul li h3 em {
  font-style: normal;
  color: #999;
  font-size: 12px;
  vertical-align: top;
  margin-left: 8px;
}
.index_about .list ul li p {
  color: #999;
  margin-top: 20px;
}
.index_about .web {
  text-align: center;
  padding: 0 145px;
  margin-top: 50px;
}
.index_about .web p {
  line-height: 32px;
  color: #666;
}
.index_about .web .more {
  margin-top: 30px;
}

.index_news {
}
.index_news .left {
  float: left;
  width: 535px;
  margin-right: 65px;
}
.index_news .tit {
  margin-bottom: 20px;
}
.index_news .tit h3 {
  font-size: 16px;
  font-weight: normal;
  color: #8cb25e;
}
.index_news .left .img {
  overflow: hidden;
}
.index_news .left .img img {
  display: block;
  width: 100%;
}
.index_news .left .web {
  margin-top: 24px;
}
.index_news .left .web h4 {
  font-weight: normal;
  font-size: 18px;
}
.index_news .left .web h4 span {
  float: right;
  font-size: 14px;
  color: #999;
}
.index_news .left .web p {
  line-height: 26px;
  color: #999;
  margin-top: 20px;
}

.index_news .right {
  overflow: hidden;
}
.index_news .right .list {
}
.index_news .right .list ul li {
  border-top: 1px solid #e7e3e2;
  padding: 30px 0;
}
.index_news .right .list ul li .img {
  float: left;
  width: 156px;
  height: 117px;
  overflow: hidden;
  margin-right: 20px;
}
.index_news .right .list ul li .img img {
  display: block;
  width: 100%;
}
.index_news .right .list ul li .web {
  overflow: hidden;
}
.index_news .right .list ul li .web span {
  display: block;
  width: 22px;
  height: 22px;
  line-height: 22px;
  text-align: center;
  color: #fff;
  float: left;
  margin-right: 16px;
}
.index_news .right .list ul li .web .wd_w {
}
.index_news .right .list ul li .web .wd_w span {
  background: #8cb25e;
}
.index_news .right .list ul li .web .wd_w h4 {
  overflow: hidden;
  line-height: 22px;
  font-size: 18px;
  font-weight: normal;
}
.index_news .right .list ul li .web .wd_w h4 a {
  color: #333;
}
.index_news .right .list ul li .web .wd_d {
  margin-top: 30px;
}
.index_news .right .list ul li .web .wd_d span {
  background: #fe9322;
}
.index_news .right .list ul li .web .wd_d p {
  line-height: 26px;
  overflow: hidden;
}
.index_news .right .list ul li .web .wd_d p a {
  color: #999;
}
.index_news .more {
  border-top: 1px solid #e7e3e2;
  text-align: center;
  padding-top: 50px;
}

.page_banner {
  padding: 223px 0 143px;
  background: url(../images/bg2.jpg) no-repeat center center;
  background-size: cover;
}
.page_banner .web {
  width: 96%;
  max-width: 616px;
  margin: 0 auto;
  background: rgba(247, 245, 246, 0.95);
  border: 10px solid #fff;
  text-align: center;
  padding: 40px 0;
}
.page_banner .web h2 {
  font-size: 36px;
  font-weight: normal;
  color: #222;
}
.page_banner .web label {
  display: block;
  width: 30px;
  height: 4px;
  background: #8cb25e;
  margin: 20px auto;
}
.page_banner .web p {
  font-size: 16px;
  color: #8cb25e;
}

.crumbs {
  background: #f7f5f6;
}
.crumbs ul li {
  float: left;
  width: 25%;
  line-height: 50px;
  text-align: center;
}
.crumbs ul li a {
  display: block;
  color: #666;
}
.crumbs ul li.on a,
.crumbs ul li a:hover {
  background: #8cb25e;
  color: #fff;
}

.page_about {
}
.page_about .img_list {
}
.page_about .img_list .img1 {
  width: 48.5%;
}
.page_about .img_list .img1 img {
  display: block;
  width: 100%;
}
.page_about .web {
}
.page_about .web .list {
  border-top: 1px solid #e7e3e2;
  padding: 45px 0;
}
.page_about .web .list:first-child {
  border-top: none;
}
.page_about .web .list h4 {
  font-size: 22px;
  font-weight: normal;
  color: #000;
  margin-bottom: 30px;
}
.page_about .web .list p {
  line-height: 32px;
}

.page_course {
}
.page_course .list {
}
.page_course .list ul li {
}
.page_course .list ul li span {
  display: block;
  float: left;
  margin-top: 20px;
  width: 115px;
  line-height: 32px;
  font-size: 22px;
  color: #999;
  position: relative;
}
.page_course .list ul li span em {
  display: block;
  width: 37px;
  height: 15px;
  background: #fff url(../images/icon6.png) no-repeat center center;
  position: absolute;
  right: -34px;
  top: 50%;
  margin-top: -7px;
}
.page_course .list ul li .web {
  overflow: hidden;
  padding: 20px 0 60px 93px;
  border-left: 1px solid #8cb25e;
}
.page_course .list ul li .web p {
  line-height: 32px;
  color: #666;
}

.join_tab {
}
.join_tab table {
  width: 100%;
  text-align: center;
}
.join_tab table th {
  line-height: 50px;
  background: #8cb25e;
  font-weight: normal;
  font-size: 16px;
  color: #fff;
}
.join_tab table td {
  border-bottom: 1px dashed #e7e3e2;
  line-height: 66px;
  color: #666;
}
.join_tab table td a {
  color: #8cb25e;
}

.modal,
.fp_modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}
.modal {
  transition: all 0s;
  -o-transition: all 0s;
  -webkit-transition: all 0s;
  -moz-transition: all 0s;
  -ms-transition: all 0s;
  background: rgba(0, 0, 0, 0.7);
}
.fp_modal {
  display: table;
}
.fp_modal .cell {
  display: table-cell;
  vertical-align: middle;
}
.modal_cont {
  max-width: 1144px;
  margin: 0 auto;
  width: 90%;
  background: #fff;
  position: relative;
}
.modal_cont .close {
}
.modal_cont .tit {
  border-bottom: 1px solid #e5e5e5;
  padding: 25px 0;
  margin: 0 20px;
}
.modal_cont .tit h3 {
  font-size: 26px;
  font-weight: normal;
  color: #222;
}
.modal_cont .tit p {
  color: #999;
  margin-top: 15px;
}
.modal_cont .web {
  padding: 40px 0;
}
.modal_cont .web .text {
  padding: 0 20px;
  height: 380px;
  overflow-y: auto;
}
.modal_cont .web .text h4 {
  font-size: 16px;
  font-weight: normal;
  color: #222;
  margin-bottom: 8px;
}
.modal_cont .web .text h4 span {
  display: inline-block;
  padding-left: 11px;
  border-left: 4px solid #8cb25e;
}
.modal_cont .web .text p {
  color: #666;
  line-height: 32px;
}
.modal_cont .web .text .list {
  margin-top: 40px;
}
.modal_cont .web .text .list:first-child {
  margin-top: 0;
}

.page_honor {
}
.page_honor .list {
}
.page_honor .list ul {
  margin: -10px;
}
.page_honor .list ul li {
  float: left;
  width: 25%;
}
.page_honor .list ul li a {
  display: block;
  margin: 10px;
}
.page_honor .list ul li .img {
  overflow: hidden;
  border: 1px solid #e1e1e1;
}
.page_honor .list ul li .img img {
  display: block;
  width: 100%;
}
.page_honor .list ul li p {
  text-align: center;
  font-size: 18px;
  margin-top: 30px;
}

.page_contact {
}
.page_contact .map {
}
.page_contact .map img {
  display: block;
  width: 100%;
}
.page_contact .web {
  margin-top: 60px;
}
.page_contact .web .text {
  float: left;
  width: 410px;
}
.page_contact .web .text h4 {
  font-size: 16px;
  color: #666;
  margin-bottom: 30px;
}
.page_contact .web .text p {
  line-height: 32px;
  color: #666;
}
.page_contact .web .tab {
  overflow: hidden;
}
.page_contact .web .tab ul {
  margin: 0 -1%;
}
.page_contact .web .tab ul li {
  float: left;
  width: 31.333%;
  margin: 0 1% 30px;
}
.page_contact .web .tab ul li.last {
  width: 98%;
}
.page_contact .web .tab ul li span {
  color: #666;
}
.page_contact .web .tab ul li .div_inp {
  border-bottom: 1px solid #e4e4e4;
  margin-top: 1px;
}
.page_contact .web .tab ul li .div_inp input {
  width: 100%;
  border: none;
}
.page_contact .web .tab ul li .div_textarea {
  border-bottom: 1px solid #e4e4e4;
}
.page_contact .web .tab ul li .div_textarea textarea {
  width: 100%;
  border: none;
  resize: none;
  height: 60px;
}
.btn_tj {
  margin-top: 10px;
}
.btn_tj a {
  display: inline-block;
  width: 148px;
  height: 42px;
  line-height: 42px;
  border: 1px solid #e7e3e2;
  color: #666;
  text-align: center;
}

.page_store {
}
.page_store .list {
}
.page_store .list ul {
  margin: 0 -1.5%;
}
.page_store .list ul li {
  float: left;
  width: 47%;
  margin: 25px 1.5%;
}
.page_store .list ul li .img1 {
  overflow: hidden;
}
.page_store .list ul li .img1 img {
  display: block;
  width: 100%;
}
.page_store .list ul li .web {
  margin-top: 30px;
}
.page_store .list ul li .web h4 {
  padding-left: 40px;
  background: url(../images/icon7.jpg) no-repeat left center;
  font-weight: normal;
  font-size: 16px;
  margin-bottom: 15px;
}
.page_store .list ul li .web h4 a {
  color: #333;
}
.page_store .list ul li .web p {
  padding-left: 40px;
  line-height: 26px;
  color: #666;
}

.warehouse_details {
}
.advert {
  float: left;
  width: 296px;
  margin-right: 50px;
}
.advert ul li {
  margin-top: 20px;
}
.advert ul li:first-child {
  margin-top: 0;
}
.advert ul li a {
  display: block;
  border: 1px solid #e7e3e2;
}
.advert ul li .img {
  overflow: hidden;
  background: #f7f5f6;
}
.advert ul li .img img {
  display: block;
  width: 100%;
}
.advert ul li .web {
  line-height: 56px;
  position: relative;
}
.advert ul li .web p {
  text-align: center;
  font-size: 16px;
  padding: 0 20px;
}
.advert ul li .web p label {
  position: absolute;
  right: 9px;
  top: 0;
  font-size: 13px;
  display: block;
  padding-right: 17px;
  background: url(../images/icon3-1.png) no-repeat right center;
  color: #fff;
  opacity: 0;
}
.advert ul li a:hover {
  border-color: #8cb25e;
}
.advert ul li a:hover .web {
  background: #8cb25e;
}
.advert ul li a:hover .web p {
  color: #fff;
  text-align: left;
}
.advert ul li a:hover .web p label {
  opacity: 1;
}

.details_web {
  overflow: hidden;
  border: 1px solid #e7e3e2;
}
.details_web .tit {
  text-align: center;
  line-height: 90px;
  border-bottom: 1px solid #e7e3e2;
}
.details_web .tit h3 {
  font-weight: normal;
  font-size: 22px;
  color: #222;
}
.details_web .text {
  padding: 10px 32px 60px;
}
.details_web .text p {
  line-height: 32px;
  color: #666;
  margin-top: 30px;
  text-align: justify;
}
.details_web .text img {
  display: block;
  margin: 20px auto 0;
  max-width: 100%;
}

.page_news {
}
.news_nav {
  text-align: center;
}
.news_nav ul li {
  display: inline-block;
  margin: 0 20px;
}
.news_nav ul li a {
  display: inline-block;
  width: 136px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  border: 1px solid #e7e3e2;
  font-size: 16px;
  color: #999;
}
.news_nav ul li.on a,
.news_nav ul li a:hover {
  background: #8cb25e;
  border-color: #8cb25e;
  color: #fff;
}
.page_news .list {
  margin-top: 30px;
}
.page_news .list ul li {
  border-bottom: 1px solid #e7e3e2;
  padding: 30px 0;
}
.page_news .list ul li .img {
  float: left;
  width: 250px;
  overflow: hidden;
  margin-right: 48px;
}
.page_news .list ul li .img img {
  display: block;
  width: 100%;
}
.page_news .list ul li .web {
  overflow: hidden;
  padding-top: 24px;
}
.page_news .list ul li .web span {
  display: block;
  width: 22px;
  height: 22px;
  line-height: 22px;
  text-align: center;
  color: #fff;
  float: left;
  margin-right: 16px;
}
.page_news .list ul li .web .wd_w {
}
.page_news .list ul li .web .wd_w span {
  background: #8cb25e;
}
.page_news .list ul li .web .wd_w h4 {
  overflow: hidden;
  line-height: 22px;
  font-size: 18px;
  font-weight: normal;
}
.page_news .list ul li .web .wd_w h4 a {
  color: #333;
}
.page_news .list ul li .web .wd_d {
  margin-top: 20px;
}
.page_news .list ul li .web .wd_d span {
  background: #fe9322;
  margin-top: 5px;
}
.page_news .list ul li .web .wd_d .text {
  overflow: hidden;
}
.page_news .list ul li .web .wd_d p {
  line-height: 32px;
  overflow: hidden;
  height: 64px;
  overflow: hidden;
}
.page_news .list ul li .web .wd_d p a {
  color: #666;
}
.page_news .list ul li .web .wd_d .news_xq {
  margin-top: 20px;
}
.page_news .list ul li .web .wd_d .news_xq a {
  color: #999;
  display: inline-block;
  padding-right: 16px;
  background: url(../images/icon8.png) no-repeat right center;
}
.page_news .list ul li .web .wd_d .news_xq em {
  float: right;
  font-style: normal;
  color: #999;
}

.page_article {
}
.page_article .tit {
  border-bottom: 1px solid #e7e3e2;
  padding-bottom: 12px;
}
.page_article .tit h3 {
  text-align: center;
  font-weight: normal;
  font-size: 22px;
  color: #222;
}
.page_article .tit p {
  color: #999;
  margin-top: 22px;
}
.page_article .tit p span {
  float: right;
  color: #e7e3e2;
}
.page_article .tit p span a {
  color: #999;
  margin: 0 14px;
}
.page_article .web {
}
.page_article .web p {
  line-height: 32px;
  color: #666;
  margin-top: 30px;
  text-align: justify;
}
.page_article .web img {
  display: block;
  margin: 30px auto 0;
  max-width: 100%;
}

.full {
  position: fixed;
  top: 50%;
  right: 0;
  z-index: 1001;
}
.full li a {
  display: block;
  width: 52px;
  height: 52px;
  margin-bottom: 1px;
  position: relative;
  background: #8cb25e;
  z-index: 1;
}
.full li a:hover span,
.full li a:hover label {
  background-color: #8cb25e !important;
}
.full li:last-child a {
  border-bottom: 0;
}
.full li a span {
  display: block;
  width: 52px;
  height: 52px;
  position: relative;
  z-index: 100;
  background-position: center center;
  background-repeat: no-repeat;
}
.full li:nth-child(2) a,
.full li:nth-child(1) a {
  z-index: 2;
}
.full li a label {
  display: block;
  width: 100px;
  white-space: nowrap;
  padding: 0 20px;
  position: absolute;
  line-height: 52px;
  color: #fff;
  z-index: -1;
  background: #8cb25e;
  bottom: 0;
  left: 100%;
  box-sizing: inherit;
  max-width: 300%;
}
.full li a:hover label {
  left: -120px;
}
.full li a .lbl_img {
  padding: 10px;
  height: auto;
  line-height: normal;
}
.full li a span.span1 {
  background-image: url(../images/full1.png);
}
.full li a span.span2 {
  background-image: url(../images/full2.png);
}
.full li a span.span3 {
  background-image: url(../images/full3.png);
}
.full li a span.span4 {
  background-image: url(../images/full4.png);
}

/*----------footer----------*/
.footer {
  margin-top: 100px;
}
.foot_xx {
  background: #f7f5f6;
  padding: 40px 0;
}
.foot_xx .left {
  float: left;
}
.foot_xx .left .ft_logo {
  margin-top: 24px;
}
.foot_xx .left .ft_logo img {
}
.foot_xx .left .nav {
  margin-top: 85px;
}
.foot_xx .left .nav ul li {
  float: left;
  margin-right: 60px;
}
.foot_xx .left .nav ul li a {
  color: #666;
}
.foot_xx .right {
  float: right;
  width: 415px;
}
.foot_xx .right .ewm {
  height: 150px;
  width: 150px;
  float: left;
  overflow: hidden;
  margin-right: 25px;
}
.foot_xx .right .ewm img {
  display: block;
  width: 100%;
}
.foot_xx .right .web {
  overflow: hidden;
  padding: 10px 0;
}
.foot_xx .right .web p {
  line-height: 24px;
  color: #666;
}
.foot_xx .right .web p span {
  font-size: 22px;
}
.foot_xx .right .web .ft_tel {
  margin-top: 30px;
}

.ft_bq {
  text-align: center;
  line-height: 60px;
}
.ft_bq p {
  color: #666;
}
.ft_bq p a {
  color: #666;
}

.pagesize {
  text-align: center;
  margin-top: 60px;
}
.pagesize a {
  background: #f7f5f6;
  color: #666;
  display: inline-block;
  height: 34px;
  vertical-align: middle;
  line-height: 34px;
  width: 34px;
  margin: 5px;
}
.pagesize a.prev {
  background-image: url(../images/prev.png);
  background-position: center center;
  background-repeat: no-repeat;
}
.pagesize a.next {
  background-image: url(../images/next.png);
  background-position: center center;
  background-repeat: no-repeat;
}
.pagesize a:hover,
.pagesize a.on {
  background: #8cb25e;
  color: #fff;
}
.pagesize a.prev:hover {
  background-image: url(../images/prev-1.png);
  background-position: center center;
  background-repeat: no-repeat;
}
.pagesize a.next:hover {
  background-image: url(../images/next-1.png);
  background-position: center center;
  background-repeat: no-repeat;
}
/*----------custom----------*/
@media only screen and (max-width: 1600px) {
  .banner .item .text {
    font-size: 22px;
  }
}
@media only screen and (max-width: 1400px) {
  .menu ul li {
    width: 80px;
  }
  .menu {
    width: 100%;
  }
}
@media only screen and (max-width: 1200px) {
  .banner .item .text {
    font-size: 20px;
  }
  .banner img {
    width: 120%;
    margin-left: -10%;
    max-width: initial;
  }
  .page_tit {
    margin-bottom: 30px;
  }
  .site2-header .wrap {
    padding: 0 200px;
  }
  .logo {
    width: 200px;
  }
  .menu ul li {
    width: 70px;
  }
  .tel {
    padding-right: 0;
  }
  .page {
    padding-top: 40px;
  }
  .explosive {
    padding-bottom: 140px;
  }
  .explosive_owl .owl_cur {
    bottom: -40px;
  }
}
@media only screen and (max-width: 1024px) {
  .banner .item .text {
    font-size: 18px;
  }
  .banner img {
    width: 150%;
    margin-left: -25%;
  }
  .menu ul li {
    margin: 0 2px;
  }
}
@media only screen and (max-width: 1000px) {
  .index_owl {
    margin-top: 60px;
  }
  .tel {
    right: 60px;
  }
  .site2-header .wrap {
    padding: 0;
  }
  .menu {
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: #fff;
  }
  .menu ul li {
    float: none;
    display: block;
    border-bottom: 1px solid #ddd;
    padding: 0;
  }
  .menu ul li a {
    line-height: 45px;
    font-size: 18px;
  }
  .menu ul {
    padding-top: 60px;
  }
  .site2-header .logo {
    position: relative;
    z-index: 1001;
    line-height: 60px;
  }
  .menu_wrap {
    position: absolute;
    top: 10px;
    width: 40px;
    height: 40px;
    background: url(../images/menu.png) no-repeat center center #8cb25e;
    background-size: 25px auto;
    right: 15px;
    z-index: 1002;
  }
  .site2-header {
    height: 60px;
  }
  .h_menu .menu_wrap {
    background: url(../images/menu-1.png) no-repeat center center #8cb25e;
    background-size: 25px auto;
  }
  .h_menu .menu {
    left: 0;
  }
  .site2-header.on,
  .site2-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    line-height: 60px;
  }
  .index_about .web {
    padding: 0px;
  }
  .warehouse .left {
    width: 200px;
  }
  .menu ul li {
    width: auto;
    margin: 0 20px;
    text-align: left;
  }
  .menu ul li a:before {
    height: 2px;
  }
  .explosive_list .web .text {
    padding: 20px 15px;
  }
  .index_about {
    padding: 20px;
  }
  .index_news .left {
    width: 100%;
    float: none;
  }
  .foot_xx .left .nav {
    margin-top: 20px;
  }
  .foot_xx .right {
    float: none;
    margin-top: 20px;
  }
  .foot_xx .left {
    float: none;
  }
  .page_about .web .list {
    padding: 30px 0;
  }
  .footer {
    margin-top: 20px;
  }
  .foot_xx {
    padding: 20px 0;
  }
  .advert {
    width: 250px;
    margin-right: 20px;
  }
  .page_news .list ul li .web {
    padding-top: 10px;
  }
  .page_news .list ul li .web .wd_d {
    margin-top: 15px;
  }
  .page_news .list ul li .web .wd_d .news_xq {
    margin-top: 10px;
  }
  .foot_xx .left .nav ul li {
    margin-right: 40px;
  }
  .page_contact .web .text {
    float: none;
    margin-bottom: 20px;
  }
  .page_contact .web {
    margin-top: 20px;
  }
  .page_contact .web .text h4 {
    margin-bottom: 10px;
  }
  .ft_bq {
    line-height: 26px;
    padding: 10px;
  }
  .page_banner .web h2 {
    font-size: 30px;
  }
  .page_course .list ul li span {
    width: 75px;
  }
  .page_course .list ul li .web {
    padding-left: 50px;
  }
  .advert {
    width: 100%;
    float: none;
    margin-bottom: 20px;
  }
  .advert ul:after {
    content: "";
    display: block;
    clear: both;
  }
  .advert li {
    width: 33.333%;
    float: left;
    margin: 0;
  }
  .advert ul li {
    margin: 0;
  }
  .advert ul {
    margin: -5px;
  }
  .advert li a {
    display: block;
    margin: 5px;
  }
}

@media only screen and (max-width: 750px) {
  .full {
    display: none;
  }
  .page_news .list ul li .img {
    margin-right: 20px;
  }
  .page_news .list ul li .web .wd_d {
    margin-top: 5px;
    line-height: 20px;
  }
  .page_news .list ul li .web .wd_d > p {
    line-height: 26px;
    height: 104px;
  }
  .pagesize {
    margin-top: 20px;
  }
  .page_honor .list ul li {
    width: 50%;
  }
  .owl-theme .owl-dots .owl-dot span {
    width: 10px;
    height: 10px;
    margin: 0 5px;
  }
  .warehouse .right .list ul li {
    width: 48%;
  }
  .index_about .list ul li {
    width: 50%;
    margin-bottom: 10px;
  }
  .index_about .list {
    padding: 20px 0;
  }
  .warehouse .left {
    width: 100%;
    float: none;
    margin-bottom: 20px;
  }
  .warehouse .left .tit {
    line-height: 30px;
    padding-right: 20px;
    background: url(../images/next.png) no-repeat right center;
  }
  .warehouse .left .list {
    overflow: hidden;
    display: none;
  }
  .warehouse .left.on .list {
    display: block;
  }
  .page_banner {
    padding: 100px 0;
    margin-top: 60px;
  }
  .site2-header .logo {
    width: auto;
    text-align: left;
    margin-left: 15px;
  }
  .tel {
    padding-left: 20px;
  }
  .tel span {
    padding: 0 8px;
  }
  .warehouse .left .list ul li {
    margin-top: 20px;
  }
  .pagesize a {
    width: 26px;
    line-height: 26px;
    height: 26px;
    margin: 2px;
  }
  .foot_xx .left .nav ul li {
    line-height: 26px;
    margin-right: 10px;
  }
  .foot_xx .right .ewm {
    margin-right: 10px;
  }
  .page_banner .web h2 {
    font-size: 26px;
  }
  .page_contact .web .tab ul li {
    width: 100%;
    float: none;
    margin: 15px 0;
  }
  .page_contact .web .tab ul {
    margin: 0 auto;
  }
  .advert ul li .web p {
    padding: 0 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .details_web .text p {
    margin-top: 10px;
  }
  .details_web .text {
    padding: 10px;
  }
  .details_web .tit {
    line-height: 60px;
  }
  .page_news .list ul li .img {
    width: 150px;
  }
  .page_news .list ul li .web .wd_w h4 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .page_news .list ul li .web .wd_d p {
    height: auto;
  }
  .page_news .list ul li .web .wd_d > p {
    height: 52px;
  }
  .page_news .list ul li .web .wd_d .news_xq {
    margin-top: 0;
  }
  .page_news .list ul li .web {
    padding-top: 0;
  }
  .page_news .list ul li {
    padding: 20px 0;
  }
  .explosive_list .web .text {
    padding: 15px;
  }
  .explosive_owl .owl_cur span {
    width: 40px;
    height: 40px;
  }
  .page.page2 {
    margin-top: 40px;
  }
  .index_about .list ul li p {
    margin-top: 10px;
    line-height: 22px;
  }
  .index_about .web {
    margin-top: 20px;
  }
  .index_news .left .web p {
    margin-top: 10px;
  }
  .index_news .right {
    margin-top: 20px;
  }
  .index_news .right .list ul li .web .wd_d {
    margin-top: 10px;
  }
  .join_tab {
    overflow-x: auto;
  }
  .join_tab table th,
  .join_tab table td {
    white-space: nowrap;
    padding: 0 10px;
  }
  .page_banner .web {
    width: auto;
  }
  .foot_xx .right {
    width: auto;
  }
  .page_news .list ul li .web .text > p {
    height: 52px;
    line-height: 26px;
    margin-bottom: 5px;
  }
  .page_store .list ul li {
    width: 97%;
  }
}
@media only screen and (max-width: 380px) {
  .tel {
    display: none;
  }
}
.index_news .left .web h4 a {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.index_news .left .web h4 {
  position: relative;
  padding-right: 100px;
  line-height: 30px;
}
.index_news .left .web h4 span {
  float: none;
  position: absolute;
  top: 0;
  right: 0;
}
.page_contact .web .tab ul li .div_inp {
  line-height: 30px;
}

</style>`


export default { html, css };
