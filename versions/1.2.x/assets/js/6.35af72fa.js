(window.webpackJsonp=window.webpackJsonp||[]).push([[6,8],{390:function(t,e,s){"use strict";s.d(e,"f",(function(){return l})),s.d(e,"c",(function(){return c})),s.d(e,"d",(function(){return u})),s.d(e,"e",(function(){return h})),s.d(e,"a",(function(){return d})),s.d(e,"b",(function(){return g}));s(400);var i=s(108);const n=/#.*$/,a=/\.(md|html)$/,o=/\/$/,r=/^[a-z]+:/i;let l=[];function c(t){return r.test(t)}function u(t){return/^mailto:/.test(t)}function h(t){return/^tel:/.test(t)}function d(t){if(c(t))return t;const e=t.match(n),s=e?e[0]:"",i=function(t){return decodeURI(t).replace(n,"").replace(a,"")}(t);return o.test(i)?t:i+".html"+s}const g=()=>new Promise((t,e)=>{i.a.get("https://api.github.com/repos/huaweicloud/Sermant-website/git/trees/develop").then(s=>{const n=s.data.tree.find(t=>"versions.json"===t.path);i.a.get(n.url).then(e=>{l=JSON.parse(window.atob(e.data.content)).versions,t(l)}).catch(t=>{console.error(t),e()})}).catch(t=>{console.error(t),e()})})},391:function(t,e,s){},392:function(t,e,s){},393:function(t,e,s){},394:function(t,e,s){"use strict";var i=s(390),n={name:"NavLink",props:{item:{required:!0}},computed:{link(){return Object(i.a)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t=>this.link):"/"===this.link},isNonHttpURI(){return Object(i.d)(this.link)||Object(i.e)(this.link)},isBlankTarget(){return"_black"===this.target},isInternal(){return!Object(i.c)(this.link)&&!this.isBlankTarget},target(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(i.c)(this.link)?"_blank":""},rel(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction(){this.$emit("focusout")}}},a=s(26),o=Object(a.a)(n,(function(){var t=this,e=t._self._c;return t.isInternal&&!t.item.isOutLink?e("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?e("OutboundLink"):t._e()],1)}),[],!1,null,null,null);e.a=o.exports},395:function(t,e,s){"use strict";var i=s(406),n=s(394),a=s(390),o={name:"NavLinks",data:()=>({versionDropdown:null}),components:{NavLink:n.a,DropdownLink:i.a},computed:{userNav(){return this.$themeLocaleConfig.nav||this.themeConfig.nav||[]},nav(){const{locales:t}=this.$site;if(t&&Object.keys(t).length>1){const e=this.$page.path,s=this.$router.options.routes,i=this.$site.themeConfig.locales||{},n={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(t).map(n=>{const a=t[n],o=i[n]&&i[n].label||a.lang;let r;return a.lang===this.$lang?r=e:(r=e.replace(this.$localeConfig.path,n),s.some(t=>t.path===r)||(r=n)),{text:o,link:r}})};return[...this.userNav,n]}return this.userNav},userLinks(){return(this.nav||[]).map(t=>Object.assign(this.resolveNavLinkItem(t),{items:(t.items||[]).map(this.resolveNavLinkItem)}))},repoLink(){const{repo:t}=this.$site.themeConfig;return t?/^https?:/.test(t)?t:"https://github.com/"+t:null},repoLabel(){if(!this.repoLink)return;if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;const t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["Github","Gitlab","Bitbucket"];for(let s=0;s<e.length;s++){const i=e[s];if(new RegExp(i,"i").test(t))return i}return"Source"}},watch:{$route(){this.setVersions()}},mounted(){this.setVersions()},methods:{resolveNavLinkItem:t=>Object.assign(t,{type:t.items&&t.items.length?"links":"link"}),async setVersions(){if(0===a.f.length){if(!await Object(a.b)())return}const t=window.location.pathname;let e="Versions";let s=t.indexOf("/versions");if(-1===s)e="latest";else{const i=s+"/versions".length+1,n=t.indexOf("/",i);let o=t.substring(i,n);a.f.some(t=>t===o)&&(e=o)}const i=["latest",...a.f].filter(t=>t!==e);this.versionDropdown={text:e,ariaLabel:"Select version",items:i.map(t=>{let e=t;const s=window.location.pathname,i=s.indexOf("/versions/"),n=i>=0?i+10:0,a=s.indexOf("/",n);return{text:e,link:("latest"===t?"":"/versions/"+t)+s.substring(a),isOutLink:!0}})}}}},r=(s(396),s(26)),l=Object(r.a)(o,(function(){var t=this,e=t._self._c;return t.userLinks.length||t.repoLink?e("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return e("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?e("DropdownLink",{attrs:{item:t}}):e("NavLink",{attrs:{item:t}})],1)})),t._v(" "),e("div",{staticClass:"nav-item"},[t.versionDropdown?e("DropdownLink",{attrs:{item:t.versionDropdown}}):t._e()],1),t._v(" "),t.repoLink?e("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),e("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null);e.a=l.exports},396:function(t,e,s){"use strict";s(391)},397:function(t,e,s){"use strict";s(392)},398:function(t,e,s){"use strict";var i=s(402),n=s(404),a=s(407),o=s(395);function r(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var l={name:"Navbar",components:{SidebarButton:a.a,NavLinks:o.a,SearchBox:n.a,AlgoliaSearchBox:i.a},data:()=>({linksWrapMaxWidth:null}),computed:{algolia(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted(){const t=parseInt(r(this.$el,"paddingLeft"))+parseInt(r(this.$el,"paddingRight")),e=()=>{document.documentElement.clientWidth<719?this.linksWrapMaxWidth=null:this.linksWrapMaxWidth=this.$el.offsetWidth-t-(this.$refs.siteName&&this.$refs.siteName.offsetWidth||0)};e(),window.addEventListener("resize",e,!1)}},c=(s(397),s(26)),u=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"navbar"},[e("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),e("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?e("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e()]),t._v(" "),e("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?e("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?e("SearchBox"):t._e(),t._v(" "),e("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null);e.a=u.exports},399:function(t,e,s){"use strict";s(393)},401:function(t,e,s){"use strict";s.r(e);var i=s(398),n=s(405),a={name:"Base",components:{Navbar:i.a,Sidebar:n.a},data:()=>({sidebarIsOpen:!1}),computed:{},mounted(){const t=document.getElementById("navbar"),e=document.getElementById("sidebar");window.addEventListener("click",s=>{s.clientX>e.clientWidth&&s.clientY>t.clientHeight&&this.toggleSidebar(!1)})},methods:{toggleSidebar(t){this.sidebarIsOpen="boolean"==typeof t?t:!this.sidebarIsOpen},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,s=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(s)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},o=(s(399),s(26)),r=Object(o.a)(a,(function(){var t=this._self._c;return t("div",{class:{base:!0,"sidebar-open":this.sidebarIsOpen},on:{touchstart:this.onTouchStart,touchend:this.onTouchEnd}},[t("Navbar",{attrs:{id:"navbar"},on:{"toggle-sidebar":this.toggleSidebar}}),this._v(" "),t("Sidebar",{attrs:{items:[],id:"sidebar"}}),this._v(" "),this._t("content")],2)}),[],!1,null,"7ddf006a",null);e.default=r.exports},426:function(t,e,s){},447:function(t,e,s){"use strict";s(426)},456:function(t,e,s){"use strict";s.r(e);var i={name:"HomePage",components:{Base:s(401).default},data:()=>({githubStars:0,move:!1}),created(){this.getGithubStars()},mounted(){this.move=!0},computed:{quickStart(){return this.$frontmatter.quickStart},blogs(){return this.$frontmatter.blogs}},methods:{goToDocument(){-1!==this.$router.currentRoute.path.indexOf("/zh/")?this.$router.push("/zh/document/"):this.$router.push("/en/document/")},goToBlogs(){-1!==this.$router.currentRoute.path.indexOf("/zh/")?this.$router.push("/zh/blog/"):this.$router.push("/en/blog/")},goToGithub(){window.open("https://github.com/huaweicloud/Sermant")},getGithubStars(){this.$axios.get("https://api.github.com/repos/huaweicloud/sermant").then(t=>{this.githubStars=t.data.stargazers_count||0}).catch(t=>{console.log(t)})}}},n=(s(447),s(26)),a=Object(n.a)(i,(function(){var t=this,e=t._self._c;return e("Base",{scopedSlots:t._u([{key:"content",fn:function(){return[e("div",{staticClass:"home-page"},[e("div",{staticClass:"content-box"},[e("div",{class:{"logo-box":!0,move:t.move}},[e("img",{attrs:{src:t.$withBase("/img/sermant-logo.png"),alt:"Sermant",width:"500px",height:"100px"}})]),t._v(" "),e("div",{staticClass:"content"},[e("p",[t._v(t._s(t.$description))])]),t._v(" "),e("div",{staticClass:"button-box"},[e("el-button",{staticStyle:{width:"140px"},attrs:{type:"danger",icon:"el-icon-reading",round:""},on:{click:t.goToDocument}},[t._v("\n            "+t._s(t.quickStart)+"\n          ")]),t._v(" "),e("el-button",{staticStyle:{width:"140px"},attrs:{type:"blogs",icon:"el-icon-document",round:""},on:{click:t.goToBlogs}},[t._v("\n            "+t._s(t.blogs)+"\n          ")]),t._v(" "),e("div",{staticClass:"github-box",on:{click:t.goToGithub}},[e("div",{staticClass:"img-box"},[e("svg",{staticClass:"icon",attrs:{t:"1664449732894",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2540",width:"200",height:"200"}},[e("path",{attrs:{d:"M512 73.142857q119.428571 0 220.285714 58.857143T892 291.714286 950.857143 512q0 143.428571-83.714286 258T650.857143 928.571429q-15.428571 2.857143-22.857143-4t-7.428571-17.142858q0-1.714286 0.285714-43.714285t0.285714-76.857143q0-55.428571-29.714286-81.142857 32.571429-3.428571 58.571429-10.285715t53.714286-22.285714 46.285714-38 30.285714-60T792 489.142857q0-68-45.142857-117.714286 21.142857-52-4.571429-116.571428-16-5.142857-46.285714 6.285714t-52.571429 25.142857l-21.714285 13.714286q-53.142857-14.857143-109.714286-14.857143t-109.714286 14.857143q-9.142857-6.285714-24.285714-15.428571T330.285714 262.571429 281.714286 254.857143q-25.714286 64.571429-4.571429 116.571428-45.142857 49.714286-45.142857 117.714286 0 48.571429 11.714286 85.714286t30 60 46 38.285714 53.714285 22.285714 58.571429 10.285715q-22.285714 20.571429-28 58.857143-12 5.714286-25.714286 8.571428t-32.571428 2.857143-37.428572-12.285714T276.571429 728q-10.857143-18.285714-27.714286-29.714286t-28.285714-13.714285l-11.428572-1.714286q-12 0-16.571428 2.571428t-2.857143 6.571429 5.142857 8 7.428571 6.857143l4 2.857143q12.571429 5.714286 24.857143 21.714285t18 29.142858l5.714286 13.142857q7.428571 21.714286 25.142857 35.142857t38.285714 17.142857 39.714286 4 31.714286-2l13.142857-2.285714q0 21.714286 0.285714 50.571428t0.285714 31.142857q0 10.285714-7.428571 17.142858t-22.857143 4q-132.571429-44-216.285714-158.571429T73.142857 512q0-119.428571 58.857143-220.285714T291.714286 132 512 73.142857zM239.428571 703.428571q1.714286-4-4-6.857142-5.714286-1.714286-7.428571 1.142857-1.714286 4 4 6.857143 5.142857 3.428571 7.428571-1.142858z m17.714286 19.428572q4-2.857143-1.142857-9.142857-5.714286-5.142857-9.142857-1.714286-4 2.857143 1.142857 9.142857 5.714286 5.714286 9.142857 1.714286z m17.142857 25.714286q5.142857-4 0-10.857143-4.571429-7.428571-9.714285-3.428572-5.142857 2.857143 0 10.285715t9.714285 4z m24 24q4.571429-4.571429-2.285714-10.857143-6.857143-6.857143-11.428571-1.714286-5.142857 4.571429 2.285714 10.857143 6.857143 6.857143 11.428571 1.714286z m32.571429 14.285714q1.714286-6.285714-7.428572-9.142857-8.571429-2.285714-10.857142 4t7.428571 8.571428q8.571429 3.428571 10.857143-3.428571z m36 2.857143q0-7.428571-9.714286-6.285715-9.142857 0-9.142857 6.285715 0 7.428571 9.714286 6.285714 9.142857 0 9.142857-6.285714z m33.142857-5.714286q-1.142857-6.285714-10.285714-5.142857-9.142857 1.714286-8 8.571428t10.285714 4.571429 8-8z","p-id":"2541"}})])]),t._v(" "),e("div",{staticClass:"star-label"},[t._v("Stars")]),t._v(" "),e("div",{staticClass:"star"},[t._v(t._s(t.githubStars))])])],1),t._v(" "),e("div",{staticClass:"feature-box"},[e("Content",{attrs:{"slot-key":"feature1"}}),t._v(" "),e("Content",{attrs:{"slot-key":"feature2"}}),t._v(" "),e("Content",{attrs:{"slot-key":"feature3"}})],1),t._v(" "),e("div",{staticClass:"video-box"},[e("Content",{attrs:{"slot-key":"video"}})],1)]),t._v(" "),e("div",{staticClass:"footer"},[e("div",{staticStyle:{background:"#eeeeee"}},[e("div",{staticClass:"contact-box"},[e("Content",{attrs:{"slot-key":"Vision"}}),t._v(" "),e("Content",{attrs:{"slot-key":"Disclaimer"}}),t._v(" "),e("div",[e("Content",{attrs:{"slot-key":"Contact"}}),t._v(" "),e("div",{staticClass:"wechat-QR-box"},[e("img",{attrs:{src:t.$withBase("/img/contact-wechat.jpg"),alt:"Contact",width:"120px",height:"120px"}})])],1)],1)]),t._v(" "),e("Content",{staticClass:"content-footer",attrs:{"slot-key":"footer"}})],1)])]},proxy:!0}])})}),[],!1,null,"1d71013f",null);e.default=a.exports}}]);