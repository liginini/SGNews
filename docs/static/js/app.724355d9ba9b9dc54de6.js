webpackJsonp([0],{"5OHe":function(e,t){},CAKe:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("MVMM"),s=a("wSez"),i=(a("5OHe"),{render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"demo",attrs:{id:"sg-news-cat"}},[a("ul",{style:{maxHeight:e.sgListMaxHeight}},[e._l(e.catItems,function(t,n){return a("li",{key:t.enName+"_"+n},[a("a",{staticClass:"sg-cat-item"},[e._v(e._s(t.name))])])}),e._v(" "),a("li",{on:{click:e.sgSpreadBtnClick}},[a("a",{staticClass:"sg-cat-item"},[a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"},domProps:{innerHTML:e._s(e.sgSpreadIcon)}})])])],2)])},staticRenderFns:[]});var r=a("vSla")({name:"SGNewsCat",data:function(){return{sgListMaxHeight:"8rem",catItems:[{name:"本地",enName:"locale"},{name:"娱乐",enName:"yule"},{name:"体育",enName:"sports"},{name:"财经",enName:"economy"},{name:"汽车",enName:"cars"},{name:"军事",enName:"military"},{name:"科技",enName:"science"},{name:"手机",enName:"phone"},{name:"数码",enName:"digit"},{name:"时尚",enName:"fashion"},{name:"游戏",enName:"games"},{name:"教育",enName:"education"},{name:"艺术",enName:"art"},{name:"直播",enName:"live"},{name:"段子",enName:"duanzi"},{name:"视频",enName:"video"},{name:"图片",enName:"pictures"},{name:"手机",enName:"phone"},{name:"数码",enName:"digit"},{name:"时尚",enName:"fashion"},{name:"游戏",enName:"games"},{name:"教育",enName:"education"},{name:"艺术",enName:"art"}],sgSpreadIcon:'<use xlink:href="#icon-fold"></use>'}},methods:{sgSpreadBtnClick:function(){"3.6rem"===this.sgListMaxHeight?(this.sgListMaxHeight="8rem",this.sgSpreadIcon='<use xlink:href="#icon-fold"></use>'):(this.sgListMaxHeight="3.6rem",this.sgSpreadIcon='<use xlink:href="#icon-unfold"></use>')}}},i,!1,function(e){a("num1")},"data-v-429270bf",null).exports,m={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"sg-today-new"}},[n("div",{staticClass:"sg-new-left"},[n("h5",{staticClass:"sg-title"},[e._v("新闻标题标题标题新闻标题标题标题新闻标题标题标题233")]),e._v(" "),n("div",{staticClass:"sg-sub-titles"},[n("span",{staticClass:"sg-author"},[e._v("央视新闻")]),e._v(" "),n("span",{staticClass:"sg-post-time"},[e._v("2小时前")]),e._v(" "),n("span",{staticClass:"sg-comments"},[e._v("253评论")])])]),e._v(" "),n("div",{staticClass:"sg-new-right"},[n("img",{attrs:{src:a("Xvno"),alt:"新闻图片"}})])])}]};var o={name:"SGTodayNews",components:{SGTodayNew:a("vSla")({name:"SGTodayNew"},m,!1,function(e){a("eTpf")},"data-v-5eb4772a",null).exports}},c={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"sg-today-news"}},[t("h4",[this._v("今日要闻")]),this._v(" "),t("SGTodayNew"),this._v(" "),t("SGTodayNew")],1)},staticRenderFns:[]};var l={name:"App",components:{SGNewsCat:r,SGTodayNews:a("vSla")(o,c,!1,function(e){a("kjc/")},"data-v-4a032f97",null).exports},data:function(){return{sgNavSelected:"1"}}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("mt-header",{staticClass:"sg-header",attrs:{fixed:"",title:"SG新闻"}},[a("mt-button",{attrs:{slot:"left"},slot:"left"},[a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-user"}})])]),e._v(" "),a("mt-button",{staticClass:"sg-button",attrs:{slot:"right"},slot:"right"},[a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-email"}})]),e._v(" "),a("span",[e._v("邮箱")]),e._v(" "),a("span",[a("svg",{staticClass:"icon sg-small-icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-unfold"}})])])])],1),e._v(" "),a("mt-navbar",{model:{value:e.sgNavSelected,callback:function(t){e.sgNavSelected=t},expression:"sgNavSelected"}},[a("mt-tab-item",{attrs:{id:"1"}},[e._v("要闻")]),e._v(" "),a("mt-tab-item",{attrs:{id:"2"}},[e._v("话题")]),e._v(" "),a("mt-tab-item",{attrs:{id:"3"}},[e._v("推荐")])],1),e._v(" "),a("mt-tab-container",{model:{value:e.sgNavSelected,callback:function(t){e.sgNavSelected=t},expression:"sgNavSelected"}},[a("mt-tab-container-item",{attrs:{id:"1"}},[a("SGNewsCat"),e._v(" "),a("SGTodayNews")],1),e._v(" "),a("mt-tab-container-item",{attrs:{id:"2"}},[a("p",[e._v("哈哈哈哈2222")])]),e._v(" "),a("mt-tab-container-item",{attrs:{id:"3"}},[a("p",[e._v("哈哈哈哈33333")])])],1)],1)},staticRenderFns:[]};var u=a("vSla")(l,d,!1,function(e){a("CAKe")},null,null).exports;n.default.config.productionTip=!1,n.default.component(s.Header.name,s.Header),n.default.component(s.Button.name,s.Button),n.default.component(s.Navbar.name,s.Navbar),n.default.component(s.TabItem.name,s.TabItem),n.default.component(s.TabContainer.name,s.TabContainer),n.default.component(s.TabContainerItem.name,s.TabContainerItem),new n.default({el:"#app",components:{App:u},template:"<App/>"})},Xvno:function(e,t,a){e.exports=a.p+"static/img/news_pic.75fc6fd.jpg"},eTpf:function(e,t){},"kjc/":function(e,t){},num1:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.724355d9ba9b9dc54de6.js.map