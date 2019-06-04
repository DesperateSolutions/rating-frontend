(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2702e598"],{"23bf":function(t,e,a){"use strict";var n=a("80d2"),i=a("2b0e");e["a"]=i["a"].extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(n["b"])(this.height),a=Object(n["b"])(this.minHeight),i=Object(n["b"])(this.minWidth),s=Object(n["b"])(this.maxHeight),r=Object(n["b"])(this.maxWidth),o=Object(n["b"])(this.width);return e&&(t.height=e),a&&(t.minHeight=a),i&&(t.minWidth=i),s&&(t.maxHeight=s),r&&(t.maxWidth=r),o&&(t.width=o),t}}})},"757c":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticStyle:{"min-height":"0"},attrs:{fluid:"","grid-list-md":""}},[a("v-app",{attrs:{id:"inspire"}},[a("v-card",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.players,"hide-actions":"",pagination:t.pagination},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.name))]),a("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.games.length))]),a("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.rating))])]}}])})],1)],1)],1)},i=[],s=a("a34a"),r=a.n(s),o=a("2f62"),c=a("5600");function l(t,e,a,n,i,s,r){try{var o=t[s](r),c=o.value}catch(l){return void a(l)}o.done?e(c):Promise.resolve(c).then(n,i)}function u(t){return function(){var e=this,a=arguments;return new Promise(function(n,i){var s=t.apply(e,a);function r(t){l(s,n,i,r,o,"next",t)}function o(t){l(s,n,i,r,o,"throw",t)}r(void 0)})}}var h={name:"Ranking",computed:Object(o["c"])(["players"]),data:function(){return{pagination:{sortBy:"rating",descending:!0,rowsPerPage:-1},headers:[{text:"Player",align:"left",sortable:!1,value:"name"},{text:"# of Games",sortable:!1,value:"games"},{text:"Rating",value:"rating"}]}},created:function(){var t=u(r.a.mark(function t(){var e=this;return r.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!Object(c["b"])(this.$store.state.selectedLeague)){t.next=5;break}return t.next=3,this.$store.dispatch("GET_ALL_LEAGUES").then(function(){var t=e.$store.state.leagues.find(function(t){return t.name===e.$route.params.name});e.$store.dispatch("GET_ALL_PLAYERS",{league:t.id}),e.$store.dispatch("SELECT_LEAGUE",{selectedLeague:t})});case 3:t.next=6;break;case 5:this.$store.dispatch("GET_ALL_PLAYERS",{league:this.$store.state.selectedLeague.id});case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},d=h,f=a("0c7c"),m=a("6544"),p=a.n(m),v=a("7496"),g=a("b0af"),b=a("a523"),x=a("8fea"),y=Object(f["a"])(d,n,i,!1,null,"54b42ab8",null);e["default"]=y.exports;p()(y,{VApp:v["a"],VCard:g["a"],VContainer:b["a"],VDataTable:x["a"]})},b0af:function(t,e,a){"use strict";a("4c94"),a("d0e7");var n=a("b64a"),i=a("2b0e");function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var r=i["a"].extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){return this.computedElevation?s({},"elevation-"+this.computedElevation,!0):{}}}}),o=a("23bf"),c=a("6a18"),l=a("58df"),u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},h=Object(l["a"])(n["a"],r,o["a"],c["a"]).extend({name:"v-sheet",props:{tag:{type:String,default:"div"},tile:Boolean},computed:{classes:function(){return u({"v-sheet":!0,"v-sheet--tile":this.tile},this.themeClasses,this.elevationClasses)},styles:function(){return this.measurableStyles}},render:function(t){var e={class:this.classes,style:this.styles,on:this.$listeners};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}}),d=h,f=a("0d01"),m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t};e["a"]=Object(l["a"])(f["a"],d).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,raised:Boolean},computed:{classes:function(){return m({"v-card":!0,"v-card--flat":this.flat,"v-card--hover":this.hover},d.options.computed.classes.call(this))},styles:function(){var t=m({},d.options.computed.styles.call(this));return this.img&&(t.background='url("'+this.img+'") center center / cover no-repeat'),t}},render:function(t){var e=this.generateRouteLink(this.classes),a=e.tag,n=e.data;return n.style=this.styles,t(a,this.setBackgroundColor(this.color,n),this.$slots.default)}})},d0e7:function(t,e,a){}}]);
//# sourceMappingURL=chunk-2702e598.6b27f12f.js.map