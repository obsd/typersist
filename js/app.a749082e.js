(function(t){function e(e){for(var s,o,a=e[0],c=e[1],u=e[2],l=0,d=[];l<a.length;l++)o=a[l],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);h&&h(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],s=!0,o=1;o<r.length;o++){var a=r[o];0!==n[a]&&(s=!1)}s&&(i.splice(e--,1),t=c(c.s=r[0]))}return t}var s={},o={app:0},n={app:0},i=[];function a(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"40676c4d"}[t]+".js"}function c(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r={about:1};o[t]?e.push(o[t]):0!==o[t]&&r[t]&&e.push(o[t]=new Promise((function(e,r){for(var s="css/"+({about:"about"}[t]||t)+"."+{about:"33676cc3"}[t]+".css",n=c.p+s,i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var u=i[a],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===s||l===n))return e()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){u=d[a],l=u.getAttribute("data-href");if(l===s||l===n)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var s=e&&e.target&&e.target.src||n,i=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=s,delete o[t],h.parentNode.removeChild(h),r(i)},h.href=n;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){o[t]=0})));var s=n[t];if(0!==s)if(s)e.push(s[2]);else{var i=new Promise((function(e,r){s=n[t]=[e,r]}));e.push(s[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=a(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(h);var r=n[t];if(0!==r){if(r){var s=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+s+": "+o+")",d.name="ChunkLoadError",d.type=s,d.request=o,r[1](d)}n[t]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=s,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(r,s,function(e){return t[e]}.bind(null,s));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var h=l;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("cd49")},"3e75":function(t,e,r){},"5c0b":function(t,e,r){"use strict";r("9c0c")},"792a":function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return n})),r.d(e,"c",(function(){return i}));r("7db0"),r("d3b7"),r("498a");var s=r("a842");function o(t,e){var r=t.find((function(t){return t.letter==e}));r?r.error+=1:t.push(new s["c"](e))}function n(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";console.log(t);var n=t.find((function(t){return t.letter==e}));n?(n.errors+=1,o(n.wrongLetters,r)):t.push(new s["b"](e,r))}function i(t,e){t=t.trim();var r=t.length;return!(r>e.length)&&t==e.substring(0,r)}},"7f17":function(t,e,r){"use strict";r("3e75")},"9c0c":function(t,e,r){},a842:function(t,e,r){"use strict";r.d(e,"f",(function(){return a})),r.d(e,"g",(function(){return s})),r.d(e,"b",(function(){return c})),r.d(e,"c",(function(){return u})),r.d(e,"e",(function(){return l})),r.d(e,"a",(function(){return d})),r.d(e,"d",(function(){return h}));var s,o=r("bee2"),n=r("d4ec"),i=(r("13d5"),r("d3b7"),r("792a")),a=Object(o["a"])((function t(e,r,s){Object(n["a"])(this,t),this.text=e,this.status=r,this.isActive=s||!1}));(function(t){t[t["void"]=0]="void",t[t["success"]=1]="success",t[t["error"]=2]="error"})(s||(s={}));var c=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";Object(n["a"])(this,t),this.errors=0,this.wrongLetters=[],this.letter=e,this.errors+=1,this.wrongLetters?this.wrongLetters=[new u(r)]:Object(i["b"])(this.wrongLetters,r)}return Object(o["a"])(t,null,[{key:"getMostMistakes",value:function(t){var e=t.wrongLetters.reduce((function(t,e){return t.error>e.error?t:e})),r={letter:t.letter,errors:t.errors,wrongLetters:[e]};return r}}]),t}(),u=Object(o["a"])((function t(e){Object(n["a"])(this,t),this.error=0,this.letter=e,this.error+=1})),l="7 World Trade Center (7 WTC) refers to two buildings that have existed at the same location within the World Trade Center site in Lower Manhattan, New York City. The original structure, part of the original World Trade Center, was completed in 1987 and was destroyed in the September 11 attacks in 2001. The current structure opened in May 2006. Both buildings were developed by Larry Silverstein, who holds a ground lease for the site from the Port Authority of New York and New Jersey. The original 7 World Trade Center was 47 stories tall, clad in red masonry, and occupied a trapezoidal footprint. An elevated walkway connected the building to the World Trade Center plaza. The building was situated above a Consolidated Edison power substation, which imposed unique structural design constraints. When the building opened in 1987, Silverstein had difficulties attracting tenants. Salomon Brothers signed a long-term lease in 1988 and became the main tenant of 7 WTC. On September 11, 2001, the structure was damaged by debris when the nearby North Tower of the World Trade Center collapsed. The debris also ignited fires, which continued to burn throughout the ",d=" ",h=!1},cd49:function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},n=[],i=(r("5c0b"),r("2877")),a={},c=Object(i["a"])(a,o,n,!1,null,null,null),u=c.exports,l=r("9483");Object(l["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});r("d3b7"),r("3ca3"),r("ddb0");var d=r("8c4f");s["a"].use(d["a"]);var h=[{path:"/",name:"container",component:function(){return r.e("about").then(r.bind(null,"4cf2"))}}],f=new d["a"]({mode:"history",base:"/",routes:h}),g=f,m=r("ecee"),p=r("c074"),v=r("ad3d"),w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"typing",class:{rtl:t.RTL}},[r("div",[r("div",{staticClass:"list-container"},[r("div",{ref:"wordList",staticClass:"word-list",style:t.wordListStyles},t._l(t.wordList,(function(e,s){return r("div",{key:s,ref:"words",refInFor:!0,class:{active:e.isActive,word:!0,error:2===e.status,success:1==e.status&&!e.isActive}},[t._v(" "+t._s(e.text)+" ")])})),0)]),r("div",{staticClass:"controls"},[r("div",{staticClass:"liniar"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],ref:"typeInput",staticClass:"type-input",attrs:{placeholder:"..."},domProps:{value:t.message},on:{input:[function(e){e.target.composing||(t.message=e.target.value)},function(e){return t.typing()}]}}),r("div",{staticClass:"timer-container"},[r("div",{staticClass:"timer"},[t._v(t._s(t.totalTime))])]),r("div",{staticClass:"timer"}),r("button",{staticClass:"square-button",on:{click:function(e){return t.restart()}}},[r("font-awesome-icon",{attrs:{icon:"redo-alt"}})],1),r("button",{staticClass:"square-button",on:{click:function(e){return t.caseSensitiveToggle()}}},[r("font-awesome-icon",{attrs:{icon:"font"}})],1),r("button",{staticClass:"square-button",on:{click:function(e){return t.SpecialCharsToggle()}}},[r("font-awesome-icon",{attrs:{icon:"exclamation"}})],1)])]),r("div",{staticClass:"custome-text",class:{show:1==t.customOpen}},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.customText,expression:"customText"}],staticClass:"list-container",attrs:{placeholder:"Add custom text to type"},domProps:{value:t.customText},on:{input:function(e){e.target.composing||(t.customText=e.target.value)}}}),r("br"),r("button",{staticClass:"save-button",on:{click:function(e){return t.saveCustomText()}}},[r("font-awesome-icon",{attrs:{icon:"save"}})],1)]),r("button",{staticClass:"toggle-custom",on:{click:function(e){return t.toggleCustom()}}},[t._v(" Insert your own text "),r("br"),t.customOpen?r("font-awesome-icon",{attrs:{rotation:"180",icon:"chevron-down"}}):r("font-awesome-icon",{attrs:{icon:"chevron-down"}})],1),r("div",{staticClass:"tree-boards"},[r("div",{staticClass:"analytics"},[r("h2",[t._v("Most mastaken letters")]),r("button",{staticClass:"square-button",on:{click:function(e){return t.restartErrorDict()}}},[r("font-awesome-icon",{attrs:{icon:"redo-alt"}})],1),t._l(t.errorsList,(function(e){return r("div",{key:e.letter,staticClass:"errors-view"},[r("span",[t._v(t._s(e.letter))]),t._v(" "),r("span",[t._v(t._s(e.errors))]),r("span",[t._v("("+t._s(e.wrongLetters[0].letter)+")")])])}))],2),r("div"),r("div",{staticClass:"score-board"},[r("h2",[t._v("Current rate")]),r("div",{staticClass:"timer"},[t._v(t._s(this.successWordsText.length/4)+" WPM")]),r("h2",[t._v("Score board")]),t._l(t.scores,(function(e){return r("div",{key:e,staticClass:"timer"},[t._v(" "+t._s(e)+" WPM ")])}))],2)])])])},b=[],y=r("d4ec"),T=r("bee2"),C=r("262e"),O=r("2caf"),k=(r("26e9"),r("498a"),r("ac1f"),r("1276"),r("8a79"),r("e9c4"),r("4795"),r("d81d"),r("4e82"),r("9ab4")),x=r("60a3"),_=r("a842"),S=r("792a"),L=function(t){Object(C["a"])(r,t);var e=Object(O["a"])(r);function r(){var t;return Object(y["a"])(this,r),t=e.call(this),t.message="",t.allText="",t.wordCount=0,t.lineHeight=40,t.wordListStyles={top:"0px"},t.tmpTop=0,t.currentTop=0,t.runOnlyOnce=!0,t.errorsDict=[],t.errorsList=[],t.letterInWord=0,t.currentWord="",t.successWords=0,t.successWordsText="",t.errrorWords=0,t.totalTime=60,t.running=!1,t.firstError=!0,t.tempMessage="",t.customText="",t.customOpen=!1,t}return Object(T["a"])(r,[{key:"created",value:function(){this.errorsDict.length||(this.errorsDict=JSON.parse(localStorage.getItem("errorsAnalysis")||"[]"));var t=JSON.parse(localStorage.getItem("scoreHistory")||"[]");this.scores=t.reverse(),this.wordRef=this.$refs.words}},{key:"mounted",value:function(){var t=this.$refs.typeInput;t.focus(),this.wordRef=this.$refs.words}},{key:"saveCustomText",value:function(){this.customText=this.customText.trim();var t=this.customText.split(" ");console.log("w",t),t.length>120?localStorage.setItem("customText",this.customText):alert("You need to insert at least 120 words and you have entered ".concat(t.length))}},{key:"typing",value:function(){var t=this;this.startTimer(),this.letterInWord=this.message.length-1,this.currentWord=this.wordList[this.wordCount].text,this.message.trim().length?(Object(S["c"])(this.message,this.currentWord)?(this.wordList[this.wordCount].status=_["g"]["void"],this.firstError=!0):(this.wordList[this.wordCount].status=_["g"].error,this.handelError()),this.tempMessage.length>this.message.length?this.tempMessage=this.message:(this.tempMessage=this.message,this.message.endsWith(" ")&&this._moveToNextWord(this.currentWord),this.$nextTick((function(){var e=t.wordRef[t.wordCount].getBoundingClientRect().top;t.runOnlyOnce&&(t.runOnlyOnce=!1,t.tmpTop=e),t.tmpTop!=e&&(t.currentTop+=t.tmpTop-e,t.wordListStyles.top=t.currentTop+"px")})))):this.message=""}},{key:"_moveToNextWord",value:function(t){this.message.trim()==t?(this.wordList[this.wordCount].status=_["g"].success,this.successWords+=1,this.successWordsText+=this.message):(this.wordList[this.wordCount].status=_["g"].error,this.errrorWords+=1,this.handelError()),this.allText+=this.message,this.message="",this.wordList[this.wordCount].isActive=!1,this.wordCount++,this.wordList.length>this.wordCount?this.wordList[this.wordCount].isActive=!0:console.log("good game"),this.firstError=!0}},{key:"handelError",value:function(){this.firstError&&(Object(S["a"])(this.errorsDict,this.currentWord[this.letterInWord]||"",this.message[this.letterInWord]),localStorage.setItem("errorsAnalysis",JSON.stringify(this.errorsDict)),this.firstError=!1)}},{key:"startTimer",value:function(){var t=this;this.running||(this.timer=setInterval((function(){return t.countdown()}),1e3)),this.running=!0}},{key:"countdown",value:function(){this.totalTime--,0==this.totalTime&&this.gameOver()}},{key:"gameOver",value:function(){this.errorsList=this.errorsDict.map((function(t){return _["b"].getMostMistakes(t)})),this.errorsList.sort((function(t,e){return e.errors-t.errors})),this.running=!1,console.log("good game",this.successWords,this.errrorWords),this._clearTimer();var t=this.successWordsText.length/4;alert(t),this.scores.push(String(t));var e=JSON.parse(localStorage.getItem("scoreHistory")||"[]");e.push(t),localStorage.setItem("scoreHistory",JSON.stringify(e))}},{key:"toggleCustom",value:function(){this.customOpen=!this.customOpen}},{key:"restartErrorDict",value:function(){this.errorsList=[],this.errorsDict=[],localStorage.setItem("errorsAnalysis",JSON.stringify(this.errorsDict))}},{key:"restart",value:function(){this.$emit("restart"),this._clearVaribeles()}},{key:"caseSensitiveToggle",value:function(){this.$emit("caseSensitiveToggle")}},{key:"SpecialCharsToggle",value:function(){this.$emit("SpecialCharsToggle")}},{key:"_clearVaribeles",value:function(){this.successWords=0,this.errrorWords=0,this.wordCount=0,this.running=!1,this.message="",this.allText="",this.tmpTop=0,this.currentTop=0,this.wordListStyles.top="0px",this._clearTimer(),this.running=!0}},{key:"_clearTimer",value:function(){this.totalTime=60,clearInterval(this.timer)}}]),r}(x["c"]);k["a"]([Object(x["b"])()],L.prototype,"wordList",void 0),L=k["a"]([x["a"]],L);var W=L,j=W,E=(r("7f17"),Object(i["a"])(j,w,b,!1,null,"5829bb9a",null)),N=E.exports;m["c"].add(p["d"],p["e"],p["a"],p["c"],p["b"]),s["a"].component("font-awesome-icon",v["a"]),s["a"].component("Typing",N),s["a"].config.productionTip=!1,new s["a"]({router:g,render:function(t){return t(u)}}).$mount("#app")}});
//# sourceMappingURL=app.a749082e.js.map