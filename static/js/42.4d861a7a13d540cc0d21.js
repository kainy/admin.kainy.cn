webpackJsonp([42],{FS2D:function(n,e,t){var i=t("Z7kv");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t("rjj0")("5aac7248",i,!0)},Z7kv:function(n,e,t){(n.exports=t("FZ+f")(!1)).push([n.i,"\n.social-signup-container[data-v-77e3040d] {\n  margin: 20px 0;\n}\n.social-signup-container .sign-btn[data-v-77e3040d] {\n    display: inline-block;\n    cursor: pointer;\n}\n.social-signup-container .icon[data-v-77e3040d] {\n    color: #fff;\n    font-size: 30px;\n    margin-top: 6px;\n}\n.social-signup-container .wx-svg-container[data-v-77e3040d],\n  .social-signup-container .qq-svg-container[data-v-77e3040d] {\n    display: inline-block;\n    width: 40px;\n    height: 40px;\n    line-height: 40px;\n    text-align: center;\n    padding-top: 1px;\n    border-radius: 4px;\n    margin-bottom: 20px;\n    margin-right: 5px;\n}\n.social-signup-container .wx-svg-container[data-v-77e3040d] {\n    background-color: #8dc349;\n}\n.social-signup-container .qq-svg-container[data-v-77e3040d] {\n    background-color: #6BA2D6;\n    margin-left: 50px;\n}\n",""])},dZXH:function(n,e,t){"use strict";function i(n,e,t,i){var o=void 0!==window.screenLeft?window.screenLeft:screen.left,c=void 0!==window.screenTop?window.screenTop:screen.top,a=(window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width)/2-t/2+o,s=(window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height)/2-i/2+c,r=window.open(n,e,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width="+t+", height="+i+", top="+s+", left="+a);window.focus&&r.focus()}Object.defineProperty(e,"__esModule",{value:!0});var o={name:"social-signin",methods:{wechatHandleClick:function(n){this.$store.commit("SET_AUTH_TYPE",n);i("https://open.weixin.qq.com/connect/qrconnect?appid=xxxxx&redirect_uri="+encodeURIComponent("xxx/redirect?redirect="+window.location.origin+"/authredirect")+"&response_type=code&scope=snsapi_login#wechat_redirect",n,540,540)},tencentHandleClick:function(n){this.$store.commit("SET_AUTH_TYPE",n);i("https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=xxxxx&redirect_uri="+encodeURIComponent("xxx/redirect?redirect="+window.location.origin+"/authredirect"),n,540,540)}}},c={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"social-signup-container"},[t("div",{staticClass:"sign-btn",on:{click:function(e){n.wechatHandleClick("wechat")}}},[t("span",{staticClass:"wx-svg-container"},[t("svg-icon",{staticClass:"icon",attrs:{"icon-class":"wechat"}})],1),n._v(" 微信\n  ")]),n._v(" "),t("div",{staticClass:"sign-btn",on:{click:function(e){n.tencentHandleClick("tencent")}}},[t("span",{staticClass:"qq-svg-container"},[t("svg-icon",{staticClass:"icon",attrs:{"icon-class":"qq"}})],1),n._v(" QQ\n  ")])])},staticRenderFns:[]};var a=t("VU/8")(o,c,!1,function(n){t("FS2D")},"data-v-77e3040d",null);e.default=a.exports}});