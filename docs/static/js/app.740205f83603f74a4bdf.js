webpackJsonp([1],{"5OHe":function(e,t){},"77Po":function(e,t){},AnK0:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("MVMM"),s=a("wSez"),i=(a("5OHe"),{render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"demo",attrs:{id:"sg-news-cat"}},[a("ul",{style:{maxHeight:e.sgListMaxHeight}},[e._l(e.catItems,function(t,n){return a("li",{key:t.enName+"_"+n},[a("a",{staticClass:"sg-cat-item"},[e._v(e._s(t.name))])])}),e._v(" "),a("li",{on:{click:e.sgSpreadBtnClick}},[a("a",{staticClass:"sg-cat-item"},[a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"},domProps:{innerHTML:e._s(e.sgSpreadIcon)}})])])],2)])},staticRenderFns:[]});var m=a("vSla")({name:"SGNewsCat",data:function(){return{sgListMaxHeight:"3.6rem",catItems:[{name:"本地",enName:"locale"},{name:"娱乐",enName:"yule"},{name:"体育",enName:"sports"},{name:"财经",enName:"economy"},{name:"汽车",enName:"cars"},{name:"军事",enName:"military"},{name:"科技",enName:"science"},{name:"手机",enName:"phone"},{name:"数码",enName:"digit"},{name:"时尚",enName:"fashion"},{name:"游戏",enName:"games"},{name:"教育",enName:"education"},{name:"艺术",enName:"art"},{name:"直播",enName:"live"},{name:"段子",enName:"duanzi"},{name:"视频",enName:"video"},{name:"图片",enName:"pictures"},{name:"手机",enName:"phone"},{name:"数码",enName:"digit"},{name:"时尚",enName:"fashion"},{name:"游戏",enName:"games"},{name:"教育",enName:"education"},{name:"艺术",enName:"art"}],sgSpreadIcon:'<use xlink:href="#icon-unfold"></use>'}},methods:{sgSpreadBtnClick:function(){"3.6rem"===this.sgListMaxHeight?(this.sgListMaxHeight="8rem",this.sgSpreadIcon='<use xlink:href="#icon-fold"></use>'):(this.sgListMaxHeight="3.6rem",this.sgSpreadIcon='<use xlink:href="#icon-unfold"></use>')}}},i,!1,function(e){a("vwij")},"data-v-0eb32e4a",null).exports,o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"sg-today-new"}},[a("div",{staticClass:"sg-new-left"},[a("h5",{staticClass:"sg-title"},[e._v(e._s(e.sgPropNewItem.title))]),e._v(" "),a("div",{staticClass:"sg-sub-titles"},[a("span",{staticClass:"sg-author"},[e._v(e._s(e.sgPropNewItem.author))]),e._v(" "),a("span",{staticClass:"sg-post-time"},[e._v(e._s(e.sgPropNewItem.post_time))]),e._v(" "),a("span",{staticClass:"sg-comments"},[e._v(e._s(e.sgPropNewItem.comments)+"跟帖")])])]),e._v(" "),a("div",{staticClass:"sg-new-right"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.sgPropNewItem.pic,expression:"sgPropNewItem.pic"}],attrs:{alt:e.sgPropNewItem.title}})])])},staticRenderFns:[]};var c={name:"SGTodayNews",components:{SGTodayNew:a("vSla")({name:"SGTodayNew",props:["sgPropNewItem"],data:function(){return{}},computed:{},mounted:function(){}},o,!1,function(e){a("AnK0")},"data-v-61c58906",null).exports},data:function(){return{picURL:"/static/img/news_pic.jpg",sgNews:[{title:"燃！各军集结：使命不怠 百炼成军",pic:"./static/img/news_pic.jpg",author:"央视网",post_time:"2小时前",comments:235},{title:"燃！各军集结：使命不怠 百炼成军",pic:"./static/img/news_pic.jpg",author:"央视网",post_time:"2小时前",comments:235},{title:"燃！各军集结：使命不怠 百炼成军",pic:"./static/img/news_pic.jpg",author:"央视网",post_time:"2小时前",comments:235},{title:"燃！各军集结：使命不怠 百炼成军",pic:"./static/img/news_pic.jpg",author:"央视网",post_time:"2小时前",comments:235},{title:"燃！各军集结：使命不怠 百炼成军",pic:"./static/img/news_pic.jpg",author:"央视网",post_time:"2小时前",comments:235},{title:"燃！各军集结：使命不怠 百炼成军",pic:"./static/img/news_pic.jpg",author:"央视网",post_time:"2小时前",comments:235},{title:"燃！各军集结：使命不怠 百炼成军",pic:"./static/img/news_pic.jpg",author:"央视网",post_time:"2小时前",comments:235},{title:"燃！各军集结：使命不怠 百炼成军",pic:"./static/img/news_pic.jpg",author:"央视网",post_time:"2小时前",comments:235}]}}},r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"sg-today-news"}},[t("h4",[this._v("今日要闻")]),this._v(" "),this._l(this.sgNews,function(e,a){return t("SGTodayNew",{key:e+a,attrs:{sgPropNewItem:e}})})],2)},staticRenderFns:[]};var l={name:"App",components:{SGNewsCat:m,SGTodayNews:a("vSla")(c,r,!1,function(e){a("77Po")},"data-v-6ddf2c77",null).exports},data:function(){return{sgNavSelected:"1"}}},p={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("mt-header",{staticClass:"sg-header",attrs:{fixed:"",title:"SG新闻"}},[a("mt-button",{attrs:{slot:"left"},slot:"left"},[a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-user"}})])]),e._v(" "),a("mt-button",{staticClass:"sg-button",attrs:{slot:"right"},slot:"right"},[a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-email"}})]),e._v(" "),a("span",[e._v("邮箱")]),e._v(" "),a("span",[a("svg",{staticClass:"icon sg-small-icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-unfold"}})])])])],1),e._v(" "),a("mt-navbar",{model:{value:e.sgNavSelected,callback:function(t){e.sgNavSelected=t},expression:"sgNavSelected"}},[a("mt-tab-item",{attrs:{id:"1"}},[e._v("要闻")]),e._v(" "),a("mt-tab-item",{attrs:{id:"2"}},[e._v("话题")]),e._v(" "),a("mt-tab-item",{attrs:{id:"3"}},[e._v("推荐")])],1),e._v(" "),a("mt-tab-container",{model:{value:e.sgNavSelected,callback:function(t){e.sgNavSelected=t},expression:"sgNavSelected"}},[a("mt-tab-container-item",{attrs:{id:"1"}},[a("SGNewsCat"),e._v(" "),a("SGTodayNews")],1),e._v(" "),a("mt-tab-container-item",{attrs:{id:"2"}},[a("p",[e._v("哈哈哈哈2222")])]),e._v(" "),a("mt-tab-container-item",{attrs:{id:"3"}},[a("p",[e._v("哈哈哈哈33333")])])],1)],1)},staticRenderFns:[]};var d=a("vSla")(l,p,!1,function(e){a("OA0j")},null,null).exports;n.default.config.productionTip=!1,n.default.component(s.Header.name,s.Header),n.default.component(s.Button.name,s.Button),n.default.component(s.Navbar.name,s.Navbar),n.default.component(s.TabItem.name,s.TabItem),n.default.component(s.TabContainer.name,s.TabContainer),n.default.component(s.TabContainerItem.name,s.TabContainerItem),n.default.use(s.Lazyload),new n.default({el:"#app",components:{App:d},template:"<App/>"})},OA0j:function(e,t){},vwij:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.740205f83603f74a4bdf.js.map