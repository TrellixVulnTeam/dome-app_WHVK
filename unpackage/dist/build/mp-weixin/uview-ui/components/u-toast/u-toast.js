(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-toast/u-toast"],{"2df8":function(t,i,n){},"620d":function(t,i,n){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"u-toast",props:{zIndex:{type:[Number,String],default:""}},data:function(){return{isShow:!1,timer:null,config:{params:{},title:"",type:"",duration:2e3,isTab:!1,url:"",icon:!0,position:"center",callback:null,back:!1},tmpConfig:{}}},computed:{iconName:function(){if(["error","warning","success","info"].indexOf(this.tmpConfig.type)>=0&&this.tmpConfig.icon){var t=this.$u.type2icon(this.tmpConfig.type);return t}},uZIndex:function(){return this.isShow?this.zIndex?this.zIndex:this.$u.zIndex.toast:"999999"}},methods:{show:function(t){var i=this;this.tmpConfig=this.$u.deepMerge(this.config,t),this.timer&&(clearTimeout(this.timer),this.timer=null),this.isShow=!0,this.timer=setTimeout((function(){i.isShow=!1,clearTimeout(i.timer),i.timer=null,"function"===typeof i.tmpConfig.callback&&i.tmpConfig.callback(),i.timeEnd()}),this.tmpConfig.duration)},hide:function(){this.isShow=!1,this.timer&&(clearTimeout(this.timer),this.timer=null)},timeEnd:function(){if(this.tmpConfig.url){if("/"!=this.tmpConfig.url[0]&&(this.tmpConfig.url="/"+this.tmpConfig.url),Object.keys(this.tmpConfig.params).length){var i="";/.*\/.*\?.*=.*/.test(this.tmpConfig.url)?(i=this.$u.queryParams(this.tmpConfig.params,!1),this.tmpConfig.url=this.tmpConfig.url+"&"+i):(i=this.$u.queryParams(this.tmpConfig.params),this.tmpConfig.url+=i)}this.tmpConfig.isTab?t.switchTab({url:this.tmpConfig.url}):t.navigateTo({url:this.tmpConfig.url})}else this.tmpConfig.back&&this.$u.route({type:"back"})}}};i.default=n}).call(this,n("543d")["default"])},"7ae6":function(t,i,n){"use strict";n.r(i);var e=n("98a5"),u=n("8fff");for(var o in u)"default"!==o&&function(t){n.d(i,t,(function(){return u[t]}))}(o);n("8423");var r,s=n("f0c5"),f=Object(s["a"])(u["default"],e["b"],e["c"],!1,null,"253bd8f9",null,!1,e["a"],r);i["default"]=f.exports},8423:function(t,i,n){"use strict";var e=n("2df8"),u=n.n(e);u.a},"8fff":function(t,i,n){"use strict";n.r(i);var e=n("620d"),u=n.n(e);for(var o in e)"default"!==o&&function(t){n.d(i,t,(function(){return e[t]}))}(o);i["default"]=u.a},"98a5":function(t,i,n){"use strict";n.d(i,"b",(function(){return u})),n.d(i,"c",(function(){return o})),n.d(i,"a",(function(){return e}));var e={uIcon:function(){return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null,"1a49"))}},u=function(){var t=this,i=t.$createElement;t._self._c},o=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-toast/u-toast-create-component',
    {
        'uview-ui/components/u-toast/u-toast-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("7ae6"))
        })
    },
    [['uview-ui/components/u-toast/u-toast-create-component']]
]);