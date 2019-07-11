(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e3182ad0"],{"12b2":function(t,e,i){"use strict";var a=i("2b0e");e["a"]=a["a"].extend({name:"v-card-title",functional:!0,props:{primaryTitle:Boolean},render:function(t,e){var i=e.data,a=e.props,n=e.children;return i.staticClass=("v-card__title "+(i.staticClass||"")).trim(),a.primaryTitle&&(i.staticClass+=" v-card__title--primary"),t("div",i,n)}})},"23bf":function(t,e,i){"use strict";var a=i("80d2"),n=i("2b0e");e["a"]=n["a"].extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(a["b"])(this.height),i=Object(a["b"])(this.minHeight),n=Object(a["b"])(this.minWidth),r=Object(a["b"])(this.maxHeight),s=Object(a["b"])(this.maxWidth),o=Object(a["b"])(this.width);return e&&(t.height=e),i&&(t.minHeight=i),n&&(t.minWidth=n),r&&(t.maxHeight=r),s&&(t.maxWidth=s),o&&(t.width=o),t}}})},"253d":function(t,e,i){},2677:function(t,e,i){"use strict";var a=i("8654"),n=(i("7e63"),i("d9bd")),r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t},s={name:"v-textarea",extends:a["a"],props:{autoGrow:Boolean,noResize:Boolean,outline:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return r({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},a["a"].options.computed.classes.call(this,null))},dynamicHeight:function(){return this.autoGrow?this.inputHeight:"auto"},isEnclosed:function(){return this.textarea||a["a"].options.computed.isEnclosed.call(this)},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){!this.internalChange&&this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout(function(){t.autoGrow&&t.calculateInputHeight()},0),this.autoGrow&&this.noResize&&Object(n["b"])('"no-resize" is now implied when using "auto-grow", and can be removed',this)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height=0;var e=t.scrollHeight,i=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(i,e)+"px"}},genInput:function(){var t=a["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){a["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.internalChange=!0,this.$emit("keydown",t)}}},o=i("7cf7"),c=i("ab6d");i.d(e,"a",function(){return u});var u={functional:!0,$_wrapperFor:a["a"],props:{textarea:Boolean,multiLine:Boolean},render:function(t,e){var i=e.props,r=e.data,l=e.slots,h=e.parent;Object(c["a"])(r);var d=Object(o["a"])(l(),t);return i.textarea&&Object(n["d"])("<v-text-field textarea>","<v-textarea outline>",u,h),i.multiLine&&Object(n["d"])("<v-text-field multi-line>","<v-textarea>",u,h),i.textarea||i.multiLine?(r.attrs.outline=i.textarea,t(s,r,d)):t(a["a"],r,d)}}},"26e5":function(t,e,i){},"4bd4":function(t,e,i){"use strict";i("26e5");var a=i("94ab");e["a"]={name:"v-form",mixins:[Object(a["b"])("form")],inheritAttrs:!1,props:{value:Boolean,lazyValidation:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(){var t=Object.values(this.errorBag).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",function(i){e.$set(e.errorBag,t._uid,i)},{immediate:!0})},a={_uid:t._uid,valid:void 0,shouldValidate:void 0};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",function(n){n&&(e.errorBag.hasOwnProperty(t._uid)||(a.valid=i(t)))}):a.valid=i(t),a},validate:function(){var t=this.inputs.filter(function(t){return!t.validate(!0)}).length;return!t},reset:function(){for(var t=this,e=this.inputs.length;e--;)this.inputs[e].reset();this.lazyValidation&&setTimeout(function(){t.errorBag={}},0)},resetValidation:function(){for(var t=this,e=this.inputs.length;e--;)this.inputs[e].resetValidation();this.lazyValidation&&setTimeout(function(){t.errorBag={}},0)},register:function(t){var e=this.watchInput(t);this.inputs.push(t),this.watchers.push(e)},unregister:function(t){var e=this.inputs.find(function(e){return e._uid===t._uid});if(e){var i=this.watchers.find(function(t){return t._uid===e._uid});i.valid&&i.valid(),i.shouldValidate&&i.shouldValidate(),this.watchers=this.watchers.filter(function(t){return t._uid!==e._uid}),this.inputs=this.inputs.filter(function(t){return t._uid!==e._uid}),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object.assign({novalidate:!0},this.$attrs),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}}},"4c34":function(t,e,i){},"6d16":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticStyle:{"min-height":"0"},attrs:{fluid:"","grid-list-md":""}},[i("v-form",{ref:"addPlayer"},[i("v-card",[i("v-card-title",[i("h3",{staticClass:"headline mb-12"},[t._v("Legg til ny spiller")])]),i("v-card-text",{staticClass:"text-xs-center",staticStyle:{height:"100px"}},[i("v-text-field",{attrs:{label:"Name:"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),i("v-card-actions",[i("v-btn",{attrs:{block:""},on:{click:t.addPlayer}},[t._v("\n          Add player\n        ")])],1)],1)],1)],1)},n=[],r=i("a34a"),s=i.n(r),o=i("5600");function c(t,e,i,a,n,r,s){try{var o=t[r](s),c=o.value}catch(u){return void i(u)}o.done?e(c):Promise.resolve(c).then(a,n)}function u(t){return function(){var e=this,i=arguments;return new Promise(function(a,n){var r=t.apply(e,i);function s(t){c(r,a,n,s,o,"next",t)}function o(t){c(r,a,n,s,o,"throw",t)}s(void 0)})}}var l={name:"AddPlayer",data:function(){return{name:"",error:null}},methods:{addPlayer:function(){this.$store.dispatch("ADD_PLAYER",{league:this.$store.state.selectedLeague.id,name:this.name}),this.name=""}},created:function(){var t=u(s.a.mark(function t(){var e=this;return s.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!Object(o["b"])(this.$store.state.selectedLeague)){t.next=3;break}return t.next=3,this.$store.dispatch("GET_ALL_LEAGUES").then(function(){var t=e.$store.state.leagues.find(function(t){return t.name===e.$route.params.name});e.$store.dispatch("SELECT_LEAGUE",{selectedLeague:t})});case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},h=l,d=i("0c7c"),m=i("6544"),p=i.n(m),f=i("8336"),v=i("b0af"),g=i("99d9"),b=i("12b2"),y=i("a523"),S=i("4bd4"),_=i("2677"),w=Object(d["a"])(h,a,n,!1,null,"718db47f",null);e["default"]=w.exports;p()(w,{VBtn:f["a"],VCard:v["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:b["a"],VContainer:y["a"],VForm:S["a"],VTextField:_["a"]})},"7e63":function(t,e,i){},"99d9":function(t,e,i){"use strict";var a=i("80d2"),n=i("b0af"),r=(i("253d"),i("4c34"),i("23bf")),s=i("58df"),o=Object(s["a"])(r["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),c=o,u=i("d9bd"),l=c.extend({name:"v-img",props:{alt:String,contain:Boolean,src:{type:[String,Object],default:""},gradient:String,lazySrc:String,srcset:String,sizes:String,position:{type:String,default:"center center"},transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0}},computed:{computedAspectRatio:function(){return this.normalisedSrc.aspect},normalisedSrc:function(){return"string"===typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||this.calculatedAspectRatio)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect||this.calculatedAspectRatio)}},__cachedImage:function(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient("+this.gradient+")"),e&&t.push('url("'+e+'")');var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init()},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(){if(this.normalisedSrc.lazySrc){var t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){Object(u["a"])("Image load failed\n\nsrc: "+this.normalisedSrc.src,this),this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch(function(e){Object(u["c"])("Failed to decode image, trying to render anyway\n\nsrc: "+t.normalisedSrc.src+(e.message?"\nOriginal error: "+e.message:""),t)}).then(t.onLoad):t.onLoad()},e.onerror=this.onError,e.src=this.normalisedSrc.src,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,a=function a(){var n=t.naturalHeight,r=t.naturalWidth;n||r?e.calculatedAspectRatio=r/n:null!=i&&setTimeout(a,i)};a()},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{attrs:{name:this.transition}},t):t[0]}}},render:function(t){var e=c.options.render.call(this,t);return e.data.staticClass+=" v-image",e.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,e.data,e.children)}}),h=l.extend({name:"v-card-media",mounted:function(){Object(u["d"])("v-card-media",this.src?"v-img":"v-responsive",this)}}),d=i("12b2");i.d(e,"a",function(){return m}),i.d(e,"b",function(){return p});var m=Object(a["e"])("v-card__actions"),p=Object(a["e"])("v-card__text");n["a"],d["a"]},b0af:function(t,e,i){"use strict";i("4c94"),i("d0e7");var a=i("b64a"),n=i("2b0e");function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var s=n["a"].extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){return this.computedElevation?r({},"elevation-"+this.computedElevation,!0):{}}}}),o=i("23bf"),c=i("6a18"),u=i("58df"),l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t},h=Object(u["a"])(a["a"],s,o["a"],c["a"]).extend({name:"v-sheet",props:{tag:{type:String,default:"div"},tile:Boolean},computed:{classes:function(){return l({"v-sheet":!0,"v-sheet--tile":this.tile},this.themeClasses,this.elevationClasses)},styles:function(){return this.measurableStyles}},render:function(t){var e={class:this.classes,style:this.styles,on:this.$listeners};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}}),d=h,m=i("0d01"),p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t};e["a"]=Object(u["a"])(m["a"],d).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,raised:Boolean},computed:{classes:function(){return p({"v-card":!0,"v-card--flat":this.flat,"v-card--hover":this.hover},d.options.computed.classes.call(this))},styles:function(){var t=p({},d.options.computed.styles.call(this));return this.img&&(t.background='url("'+this.img+'") center center / cover no-repeat'),t}},render:function(t){var e=this.generateRouteLink(this.classes),i=e.tag,a=e.data;return a.style=this.styles,t(i,this.setBackgroundColor(this.color,a),this.$slots.default)}})},d0e7:function(t,e,i){}}]);
//# sourceMappingURL=chunk-e3182ad0.dfc989b7.js.map