webpackJsonp([3],{"162o":function(t,e,n){(function(t){var r=void 0!==t&&t||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;function o(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new o(i.call(setTimeout,r,arguments),clearTimeout)},e.setInterval=function(){return new o(i.call(setInterval,r,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(r,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n("mypn"),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(e,n("DuR2"))},"7mVf":function(t,e){},"9bBU":function(t,e,n){n("mClu");var r=n("FeBl").Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},C4MV:function(t,e,n){t.exports={default:n("9bBU"),__esModule:!0}},CjFT:function(t,e){},QVdy:function(t,e){},RWDa:function(t,e){},Rr8R:function(t,e){},Zrlr:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},"i9/G":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Xxa5"),i=n.n(r),o=n("exGp"),s=n.n(o),a=n("//Fk"),c=n.n(a),u=n("Dd8w"),l=n.n(u),f=n("v60g"),d=n("Zrlr"),h=n.n(d),m=n("wxAW"),g=n.n(m),p=function(){function t(e){var n=e.id,r=e.mid,i=e.singer,o=e.name,s=e.album,a=e.duration,c=e.image,u=e.url,l=e.lyric;h()(this,t),this.id=n,this.mid=r,this.singer=i,this.name=o,this.album=s,this.duration=a,this.image=c,this.url=u,this.lyric=l||"暂无歌词"}return g()(t,[{key:"getLyric",value:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){var t=this;return this.lyric?c.a.resolve(this.lyric):new c.a(function(e,n){getLyric(t.mid).then(function(r){r.retcode===ERR_OK?(t.lyric=Base64.decode(r.lyric),e(t.lyric)):n("no lyric")})})})}]),t}();var _=n("NYxO"),y=n("xrTZ"),v={data:function(){return{songList:[],count:10,countAll:0,loading:!1,currentIndex:0,lyric:"",mid:"",firstLoad:6}},created:function(){this._getSongList()},mounted:function(){},methods:l()({getLyric:function(t){var e=this;return new c.a(function(n,r){t?Object(f.b)(t).then(function(t){0===t.retcode?(e.lyric=y.Base64.decode(t.lyric),n(e.lyric)):r("no lyric")}):Object(f.b)(e.mid).then(function(t){0===t.retcode?(e.lyric=y.Base64.decode(t.lyric),n(e.lyric)):r("no lyric")})})},selectItem:function(t,e){var n=this;return s()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n.setIndex(e),n.setPlayingState(!1);case 2:case"end":return t.stop()}},t,n)}))()},loadAll:function(t,e){var n=this;return s()(i.a.mark(function r(){var o,s,a;return i.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return n.mid=t.mid,r.next=3,Object(f.e)(t.mid);case 3:return o=r.sent,s="http://dl.stream.qqmusic.qq.com/"+o,r.next=7,n.getLyric(t.mid);case 7:a=r.sent,n.setPlayUrl({index:e,url:s,lyric:a});case 9:case"end":return r.stop()}},r,n)}))()},load:function(){var t=this;this.loading=!0,setTimeout(function(){t.count+=2,t.songList.push({name:"无限加载模拟数据"}),t.loading=!1},1e3)},_getSongList:function(){var t=this;this.disc.dissid?Object(f.d)(this.disc.dissid).then(function(e){return new c.a(function(n){0===e.code&&(t.songList=t._normalizeSongs(e.cdlist[0].songlist),t.countAll=t.songList.length,t.$refs.song.$el.style.height=window.innerHeight-120+"px",t.setPlayList(t.songList)),n(t.songList)})}).then(function(e){e.forEach(function(e,n){t.loadAll(e,n)})}):this.$router.push("/music")},_normalizeSongs:function(t){var e=[];return t.forEach(function(t){t.songid&&t.albummid&&e.push(function(t){return new p({id:t.songid,mid:t.songmid,singer:(e=t.singer,n=[],e?(e.forEach(function(t){n.push(t.name)}),n.join("/")):""),name:t.songname,album:t.albumname,duration:t.interval,image:"https://y.gtimg.cn/music/photo_new/T002R300x300M000"+t.albummid+".jpg?max_age=2592000",url:"http://ws.stream.qqmusic.qq.com/"+t.songid+".m4a?fromtag=46"});var e,n}(t))}),e},getName:function(t){return this.songList[t].singer[0].name},format:function(t){return((t|=0)/60|0)+":"+this._pad(t%60)},_pad:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=t.toString().length;n<e;)t="0"+t,n++;return t}},Object(_.d)({setPlayList:"music/SET_PLAYLIST",setIndex:"music/SET_CURRENT_INDEX",setPlayUrl:"music/SET_PLAYLIST_URL",setPlayingState:"music/SET_PLAYING_STATE"})),computed:l()({},Object(_.c)({disc:"music/isDisc",currentLyric:"music/currentLyric"}),{title:function(){return this.disc.dissname},noMore:function(){return this.count>=this.countAll+2},disabled:function(){return this.loading||this.noMore}})},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-card",{ref:"song",staticClass:"box-card",attrs:{shadow:"never"}},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("h3",[t._v(t._s(t.title))]),t._v(" "),n("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[t._v("操作按钮")])],1),t._v(" "),n("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.load,expression:"load"}],staticClass:"list",attrs:{"infinite-scroll-disabled":"disabled"}},[n("el-divider"),t._v(" "),t._l(t.songList,function(e,r){return n("li",{key:r,staticClass:"text item",on:{click:function(n){return t.selectItem(e,r)}}},[t._v("\n        "+t._s(r+1+":"+e.name)+" -----\n        "+t._s(e.singer)+"-----\n        "+t._s(t.format(e.duration))+"\n      ")])}),t._v(" "),t.loading?n("p",[t._v("加载中...")]):t._e(),t._v(" "),t.noMore?n("p",[t._v("没有更多了")]):t._e()],2)]),t._v(" "),n("hr")],1)},staticRenderFns:[]};var C=n("VU/8")(v,b,!1,function(t){n("CjFT")},null,null).exports;var T=document.createElement("div").style,x=function(){var t={webkit:"webkitTransform",Moz:"MozTransform",O:"OTransform",ms:"msTransform",standard:"transform"};for(var e in t)if(void 0!==T[t[e]])return e;return!1}();var A,S=(A="transform",!1!==x&&("standard"===x?A:x+A.charAt(0).toUpperCase()+A.substr(1))),E={props:{percent:{type:Number,default:0}},created:function(){this.touch={}},methods:{progressTouchStart:function(t){this.touch.initiated=!0,this.touch.startX=t.touches[0].pageX,this.touch.left=this.$refs.progress.clientWidth},progressTouchMove:function(t){if(this.touch.initiated){var e=t.touches[0].pageX-this.touch.startX,n=Math.min(this.$refs.progressBar.clientWidth-16,Math.max(0,this.touch.left+e));this._offset(n)}},progressTouchEnd:function(){this.touch.initiated=!1,this._triggerPercent()},progressClick:function(t){var e=this.$refs.progressBar.getBoundingClientRect(),n=t.pageX-e.left;this._offset(n),this._triggerPercent()},_triggerPercent:function(){var t=this.$refs.progressBar.clientWidth-16,e=this.$refs.progress.clientWidth/t;this.$emit("percentChange",e)},_offset:function(t){this.$refs.progress.style.width=t+"px",this.$refs.progressBtn.style[S]="translate3d("+t+"px,0,0)"}},watch:{percent:function(t){if(t>=0&&!this.touch.initiated){var e=t*(this.$refs.progressBar.clientWidth-16);this._offset(e)}}}},L={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"progressBar",staticClass:"progress-bar",on:{click:t.progressClick}},[n("div",{staticClass:"bar-inner"},[n("div",{ref:"progress",staticClass:"progress"}),t._v(" "),n("div",{ref:"progressBtn",staticClass:"progress-btn-wrapper",on:{touchstart:function(e){return e.preventDefault(),t.progressTouchStart(e)},touchmove:function(e){return e.preventDefault(),t.progressTouchMove(e)},touchend:t.progressTouchEnd}},[n("div",{staticClass:"progress-btn"})])])])},staticRenderFns:[]};var w={data:function(){return{list:{},songReady:!1,currentTime:0,currentLyric:null,currentLineNum:0,currentShow:"cd",playingLyric:""}},components:{ProgressBar:n("VU/8")(E,L,!1,function(t){n("7mVf")},null,null).exports},methods:l()({onProgressBarChange:function(t){var e=this.currentSong.duration*t;this.$refs.audio.currentTime=e,this.playing||this.togglePlaying()},togglePlaying:function(){this.setPlayingState(!this.playing),this.songReady=!1},next:function(){if(this.songReady&&1!==this.playlist.length){var t=this.currentIndex+1;t===this.playlist.length&&(t=0),this.setCurrentIndex(t),this.playing||this.togglePlaying(),this.songReady=!1}},prev:function(){if(this.songReady&&1!==this.playlist.length){var t=this.currentIndex-1;-1===t&&(t=this.playlist.length-1),this.setCurrentIndex(t),this.playing||this.togglePlaying(),this.songReady=!1}},ready:function(){this.songReady=!0},error:function(){this.songReady=!0},updateTime:function(t){this.currentTime=t.target.currentTime},format:function(t){return((t|=0)/60|0)+":"+this._pad(t%60)},_pad:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=t.toString().length;n<e;)t="0"+t,n++;return t}},Object(_.d)({setPlayingState:"music/SET_PLAYING_STATE",setCurrentIndex:"music/SET_CURRENT_INDEX"})),computed:l()({},Object(_.c)({currentSong:"music/currentSong",playing:"music/playing",currentIndex:"music/isCurrentIndex",playlist:"music/isPlayList"}),{playIcon:function(){return this.playing?"el-icon-video-pause":"el-icon-video-play"},percent:function(){return this.currentTime/this.currentSong.duration}}),watch:{playing:function(t){var e=this.$refs.audio;this.$nextTick(function(){t?e.play():e.pause()})}}},I={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"player"},[n("h3",{staticClass:"header"},[t._v(t._s(t.currentSong.name)+"---"+t._s(t.currentSong.singer))]),t._v(" "),n("hr"),t._v(" "),n("p",{staticClass:"album"},[t._v(t._s(t.currentSong.album))]),t._v(" "),n("div",{staticClass:"img-container"},[n("img",{attrs:{src:t.currentSong.image,alt:""}})]),t._v(" "),n("p",{staticClass:"lyric"}),t._v(" "),n("div",{staticClass:"controler"},[n("el-row",[n("el-button",{attrs:{type:"primary",icon:"el-icon-d-arrow-left",size:"medium",circle:""},on:{click:t.prev}}),t._v(" "),n("el-button",{class:t.playIcon,attrs:{type:"primary",circle:""},on:{click:function(e){return e.stopPropagation(),t.togglePlaying(e)}}}),t._v(" "),n("el-button",{attrs:{type:"primary",icon:"el-icon-d-arrow-right",circle:""},on:{click:t.next}})],1),t._v(" "),n("span",{staticClass:"time time-l"},[t._v(t._s(t.format(t.currentTime)))]),t._v(" "),n("span",{staticClass:"time time-r"},[t._v(t._s(t.format(t.currentSong.duration)))]),t._v(" "),n("progress-bar",{attrs:{percent:t.percent},on:{percentChange:t.onProgressBarChange}})],1),t._v(" "),n("audio",{ref:"audio",attrs:{src:t.currentSong.url},on:{play:t.ready,error:t.error,timeupdate:t.updateTime}})])},staticRenderFns:[]};var R=n("VU/8")(w,I,!1,function(t){n("Rr8R")},null,null).exports,B=/\[(\d{2,}):(\d{2})(?:\.(\d{2,3}))?]/g,P=0,k={title:"ti",artist:"ar",album:"al",offset:"offset",by:"by"};function D(){}var M=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:D;h()(this,t),this.lrc=e,this.tags={},this.lines=[],this.handler=n,this.state=P,this.curLine=0,this._init()}return g()(t,[{key:"_init",value:function(){this._initTag(),this._initLines()}},{key:"_initTag",value:function(){for(var t in k){var e=this.lrc.match(new RegExp("\\["+k[t]+":([^\\]]*)]","i"));this.tags[t]=e&&e[1]||""}}},{key:"_initLines",value:function(){for(var t=this.lrc.split("\n"),e=parseInt(this.tags.offset)||0,n=0;n<t.length;n++){var r=t[n],i=B.exec(r);if(i){var o=r.replace(B,"").trim();o&&this.lines.push({time:60*i[1]*1e3+1e3*i[2]+10*(i[3]||0)+e,txt:o})}}this.lines.sort(function(t,e){return t.time-e.time})}},{key:"_findCurNum",value:function(t){for(var e=0;e<this.lines.length;e++)if(t<=this.lines[e].time)return e;return this.lines.length-1}},{key:"_callHandler",value:function(t){t<0||this.handler({txt:this.lines[t].txt,lineNum:t})}},{key:"_playRest",value:function(){var t=this,e=this.lines[this.curNum].time-(+new Date-this.startStamp);this.timer=setTimeout(function(){t._callHandler(t.curNum++),t.curNum<t.lines.length&&1===t.state&&t._playRest()},e)}},{key:"play",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments[1];this.lines.length&&(this.state=1,this.curNum=this._findCurNum(t),this.startStamp=+new Date-t,e||this._callHandler(this.curNum-1),this.curNum<this.lines.length&&(clearTimeout(this.timer),this._playRest()))}},{key:"togglePlay",value:function(){var t=+new Date;1===this.state?(this.stop(),this.pauseStamp=t):(this.state=1,this.play((this.pauseStamp||t)-(this.startStamp||t),!0),this.pauseStamp=0)}},{key:"stop",value:function(){this.state=P,clearTimeout(this.timer)}},{key:"seek",value:function(t){this.play(t)}}]),t}(),N=n("162o"),F={props:["currentTime","songid"],data:function(){return{currentLyric:null,currentLineNum:0,currentShow:"cd",playingLyric:"",lines:[]}},components:{},methods:{getLyric:function(){this.currentLyric=new M(this.lyric,this.handleLyric),this.lines=this.currentLyric.lines,this.playing&&this.currentLyric.play()},handleLyric:function(t){var e=t.lineNum,n=t.txt;this.currentLineNum=e,this.playingLyric=n}},computed:l()({},Object(_.c)({lyric:"music/currentLyric",currentIndex:"music/isCurrentIndex",playing:"music/playing"})),watch:{currentIndex:function(t){var e=this;t&&this.currentLyric&&0!==this.lyric.length?(this.currentLyric.stop(),this.getLyric(),this.currentLineNum=0):Object(N.setTimeout)(function(){e.getLyric()},2e3)},playing:function(t){this.playing,this.currentLyric.togglePlay()}},created:function(){this.getLyric()}},j={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"lyric"}},t._l(t.lines,function(e,r){return n("div",{key:r,ref:"lyricLine",refInFor:!0,staticClass:"text"},[n("p",{staticClass:"lyric-item",class:{current:t.currentLineNum===r}},[t._v(t._s(e.txt?e.txt:"数据加载中"))])])}),0)},staticRenderFns:[]};var O={name:"PlayerAll",data:function(){return{}},methods:{},components:{SongList:C,Player:R,Lyric:n("VU/8")(F,j,!1,function(t){n("RWDa")},"data-v-78066641",null).exports}},U={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"headers"},[e("div",{staticClass:"left"},[e("song-list")],1),this._v(" "),e("div",{staticClass:"main"},[e("player")],1),this._v(" "),e("div",{staticClass:"right"},[e("lyric")],1)])},staticRenderFns:[]};var $=n("VU/8")(O,U,!1,function(t){n("QVdy")},null,null);e.default=$.exports},mClu:function(t,e,n){var r=n("kM2E");r(r.S+r.F*!n("+E39"),"Object",{defineProperty:n("evD5").f})},mypn:function(t,e,n){(function(t,e){!function(t,n){"use strict";if(!t.setImmediate){var r,i,o,s,a,c=1,u={},l=!1,f=t.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(t);d=d&&d.setTimeout?d:t,"[object process]"==={}.toString.call(t.process)?r=function(t){e.nextTick(function(){m(t)})}:!function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?t.MessageChannel?((o=new MessageChannel).port1.onmessage=function(t){m(t.data)},r=function(t){o.port2.postMessage(t)}):f&&"onreadystatechange"in f.createElement("script")?(i=f.documentElement,r=function(t){var e=f.createElement("script");e.onreadystatechange=function(){m(t),e.onreadystatechange=null,i.removeChild(e),e=null},i.appendChild(e)}):r=function(t){setTimeout(m,0,t)}:(s="setImmediate$"+Math.random()+"$",a=function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(s)&&m(+e.data.slice(s.length))},t.addEventListener?t.addEventListener("message",a,!1):t.attachEvent("onmessage",a),r=function(e){t.postMessage(s+e,"*")}),d.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var i={callback:t,args:e};return u[c]=i,r(c),c++},d.clearImmediate=h}function h(t){delete u[t]}function m(t){if(l)setTimeout(m,0,t);else{var e=u[t];if(e){l=!0;try{!function(t){var e=t.callback,r=t.args;switch(r.length){case 0:e();break;case 1:e(r[0]);break;case 2:e(r[0],r[1]);break;case 3:e(r[0],r[1],r[2]);break;default:e.apply(n,r)}}(e)}finally{h(t),l=!1}}}}}("undefined"==typeof self?void 0===t?this:t:self)}).call(e,n("DuR2"),n("W2nU"))},wxAW:function(t,e,n){"use strict";e.__esModule=!0;var r,i=n("C4MV"),o=(r=i)&&r.__esModule?r:{default:r};e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},xrTZ:function(module,exports,__webpack_require__){(function(global){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!function(t,e){module.exports=e(t)}("undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==global?global:this,function(global){"use strict";global=global||{};var _Base64=global.Base64,version="2.5.1",buffer;if(void 0!==module&&module.exports)try{buffer=eval("require('buffer').Buffer")}catch(t){buffer=void 0}var b64chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",b64tab=function(t){for(var e={},n=0,r=t.length;n<r;n++)e[t.charAt(n)]=n;return e}(b64chars),fromCharCode=String.fromCharCode,cb_utob=function(t){if(t.length<2)return(e=t.charCodeAt(0))<128?t:e<2048?fromCharCode(192|e>>>6)+fromCharCode(128|63&e):fromCharCode(224|e>>>12&15)+fromCharCode(128|e>>>6&63)+fromCharCode(128|63&e);var e=65536+1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320);return fromCharCode(240|e>>>18&7)+fromCharCode(128|e>>>12&63)+fromCharCode(128|e>>>6&63)+fromCharCode(128|63&e)},re_utob=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,utob=function(t){return t.replace(re_utob,cb_utob)},cb_encode=function(t){var e=[0,2,1][t.length%3],n=t.charCodeAt(0)<<16|(t.length>1?t.charCodeAt(1):0)<<8|(t.length>2?t.charCodeAt(2):0);return[b64chars.charAt(n>>>18),b64chars.charAt(n>>>12&63),e>=2?"=":b64chars.charAt(n>>>6&63),e>=1?"=":b64chars.charAt(63&n)].join("")},btoa=global.btoa?function(t){return global.btoa(t)}:function(t){return t.replace(/[\s\S]{1,3}/g,cb_encode)},_encode=buffer?buffer.from&&Uint8Array&&buffer.from!==Uint8Array.from?function(t){return(t.constructor===buffer.constructor?t:buffer.from(t)).toString("base64")}:function(t){return(t.constructor===buffer.constructor?t:new buffer(t)).toString("base64")}:function(t){return btoa(utob(t))},encode=function(t,e){return e?_encode(String(t)).replace(/[+\/]/g,function(t){return"+"==t?"-":"_"}).replace(/=/g,""):_encode(String(t))},encodeURI=function(t){return encode(t,!0)},re_btou=new RegExp(["[À-ß][-¿]","[à-ï][-¿]{2}","[ð-÷][-¿]{3}"].join("|"),"g"),cb_btou=function(t){switch(t.length){case 4:var e=((7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3))-65536;return fromCharCode(55296+(e>>>10))+fromCharCode(56320+(1023&e));case 3:return fromCharCode((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return fromCharCode((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},btou=function(t){return t.replace(re_btou,cb_btou)},cb_decode=function(t){var e=t.length,n=e%4,r=(e>0?b64tab[t.charAt(0)]<<18:0)|(e>1?b64tab[t.charAt(1)]<<12:0)|(e>2?b64tab[t.charAt(2)]<<6:0)|(e>3?b64tab[t.charAt(3)]:0),i=[fromCharCode(r>>>16),fromCharCode(r>>>8&255),fromCharCode(255&r)];return i.length-=[0,0,2,1][n],i.join("")},_atob=global.atob?function(t){return global.atob(t)}:function(t){return t.replace(/\S{1,4}/g,cb_decode)},atob=function(t){return _atob(String(t).replace(/[^A-Za-z0-9\+\/]/g,""))},_decode=buffer?buffer.from&&Uint8Array&&buffer.from!==Uint8Array.from?function(t){return(t.constructor===buffer.constructor?t:buffer.from(t,"base64")).toString()}:function(t){return(t.constructor===buffer.constructor?t:new buffer(t,"base64")).toString()}:function(t){return btou(_atob(t))},decode=function(t){return _decode(String(t).replace(/[-_]/g,function(t){return"-"==t?"+":"/"}).replace(/[^A-Za-z0-9\+\/]/g,""))},noConflict=function(){var t=global.Base64;return global.Base64=_Base64,t};if(global.Base64={VERSION:version,atob:atob,btoa:btoa,fromBase64:decode,toBase64:encode,utob:utob,encode:encode,encodeURI:encodeURI,btou:btou,decode:decode,noConflict:noConflict,__buffer__:buffer},"function"==typeof Object.defineProperty){var noEnum=function(t){return{value:t,enumerable:!1,writable:!0,configurable:!0}};global.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",noEnum(function(){return decode(this)})),Object.defineProperty(String.prototype,"toBase64",noEnum(function(t){return encode(this,t)})),Object.defineProperty(String.prototype,"toBase64URI",noEnum(function(){return encode(this,!0)}))}}return global.Meteor&&(Base64=global.Base64),void 0!==module&&module.exports?module.exports.Base64=global.Base64:(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_RESULT__=function(){return global.Base64}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)),{Base64:global.Base64}})}).call(exports,__webpack_require__("DuR2"))}});