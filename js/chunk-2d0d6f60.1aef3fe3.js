(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d6f60"],{"757c":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:""}},[a("v-app",{attrs:{id:"inspire"}},[a("v-card",[a("v-data-table",{staticClass:"elevation-24",attrs:{headers:e.headers,items:e.players,"hide-default-footer":"","sort-by":e.sortBy,"sort-desc":e.descending,"items-per-page":e.rowsPerPage}})],1)],1)],1)},s=[],n=(a("7db0"),a("b0c0"),a("d3b7"),a("96cf"),a("2f62")),i=a("5600"),c={name:"Ranking",data:function(){return{sortBy:"rating",descending:!0,rowsPerPage:-1,headers:[{text:"Player",align:"left",sortable:!1,value:"name"},{text:"# of Games",sortable:!1,value:"games.length"},{text:"Rating",value:"rating"}]}},computed:Object(n["d"])(["players"]),created:function(){var e=this;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:if(!Object(i["b"])(this.$store.state.selectedLeague)){t.next=5;break}return t.next=3,regeneratorRuntime.awrap(this.$store.dispatch("GET_ALL_LEAGUES").then((function(){var t=e.$store.state.leagues.find((function(t){return t.name===e.$route.params.name}));e.$store.dispatch("GET_ALL_PLAYERS",{league:t.id}),e.$store.dispatch("SELECT_LEAGUE",{selectedLeague:t})})));case 3:t.next=6;break;case 5:this.$store.dispatch("GET_ALL_PLAYERS",{league:this.$store.state.selectedLeague.id});case 6:case"end":return t.stop()}}),null,this)}},d=c,o=a("2877"),u=a("6544"),l=a.n(u),p=a("7496"),f=a("b0af"),h=a("a523"),g=a("8fea"),b=Object(o["a"])(d,r,s,!1,null,"36b0734d",null);t["default"]=b.exports;l()(b,{VApp:p["a"],VCard:f["a"],VContainer:h["a"],VDataTable:g["a"]})}}]);
//# sourceMappingURL=chunk-2d0d6f60.1aef3fe3.js.map