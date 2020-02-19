(this["webpackJsonpmy-note"]=this["webpackJsonpmy-note"]||[]).push([[3],{106:function(t,e,n){"use strict";n.r(e);var s=n(1),a=n(2),i=n(4),o=n(3),r=n(5),u=n(8),l=n(0),c=n.n(l),d={autoplay:!1},p=n(33),y=u.b.div.withConfig({displayName:"MusicPlayer__PlayerView",componentId:"i0rlf3-0"})(["width:100%;padding:0.5rem;box-sizing:border-box;font-family:'Source Sans Pro','Courier New','Courier',monospace;"]),g=function(t){function e(t){var n;if(Object(s.a)(this,e),(n=Object(i.a)(this,Object(o.a)(e).call(this,t))).audio=new Audio,n.status=null,n.textSpace=10,n.playlist=[],n.playingIndex=0,n.waittingForPlay=!1,n.recoveryProgressHandled=!1,n._DEBUG=!1,n.playerEvents={error:function(){n.status.textContent="bgm: error "+n.audio.error.code},canplay:function(){n.waittingForPlay&&n.callPlay()},play:function(){n.waittingForPlay=!1,n.status.textContent="bgm: play"},playing:function(){n.status.textContent="#",n.recoveryProgressHandled||n.recoveryProgress();var t=setInterval((function(){"#"===n.status.textContent.substr(0,1)?(n.status.textContent=n.getProgressText(),n.saveProgressInfo()):clearInterval(t)}),300)},progress:function(){!n.isAnimating()&&n.audio.readyState<4&&n.showAnimating()},pause:function(){n.status.textContent="bgm: pause"},waiting:function(){n.isAnimating()||n.showAnimating()},ended:function(){n.status.textContent="bgm: ended",n.saveProgressInfo(),n.playNext()}},n.getTextSpace=function(){var t=document.createElement("span");t.style.visibility="hidden",n.status.parentNode.appendChild(t);var e=getComputedStyle(n.status.parentNode);for(t.textContent="#";n.status.parentNode.offsetWidth-(parseFloat(e.paddingLeft)+parseFloat(e.paddingRight))>t.getBoundingClientRect().width;t.textContent+="#");n.textSpace=t.textContent.length-1,n.status.parentNode.removeChild(t)},n.handleClick=function(){n.audio.paused||0===n.audio.currentTime?(window.sessionStorage&&(sessionStorage.music_paused=null),n.audio.src?n.callPlay():n.playByIndex(0)):(window.sessionStorage&&(sessionStorage.music_paused="paused"),n.audio.pause())},n._DEBUG){var a=function(t){n.playerEvents["_"+t]=n.playerEvents[t],n.playerEvents[t]=function(){console.log("bgm: event[".concat(t,"]")),n.playerEvents["_"+t]()}};for(var r in n.playerEvents)a(r)}return n}return Object(r.a)(e,t),Object(a.a)(e,[{key:"loadPlaylist",value:function(){var t=this;return new Promise((function(e,n){fetch("/my-note/playlist.json").then((function(t){return t.json()})).then((function(n){var s=n.result.tracks;for(var a in s)t.playlist.push(s[a].id);e(n)}),(function(t){p.a.log(t),n(t)}))}))}},{key:"playByIndex",value:function(t){if(t>=this.playlist.length||t<0)p.a.log("Playlist[".concat(t,"] not exists. "));else{this.playingIndex=t;var e="https://music.163.com/song/media/outer/url?id="+this.playlist[t]+".mp3";this.audio.src=e,window.sessionStorage&&(sessionStorage.music_playingIndex=t),this.waittingForPlay=!0}}},{key:"playNext",value:function(){var t=parseInt(this.playingIndex)+1;t<this.playlist.length?this.playByIndex(t):this.playByIndex(0)}},{key:"saveProgressInfo",value:function(){window.sessionStorage&&(this.audio.ended?sessionStorage.music_currentTime=0:sessionStorage.music_currentTime=this.audio.currentTime)}},{key:"recoveryProgress",value:function(){this.recoveryProgressHandled=!0,window.sessionStorage&&(sessionStorage.music_currentTime&&(this.audio.currentTime=sessionStorage.music_currentTime),"paused"===sessionStorage.music_paused&&this.audio.pause())}},{key:"getProgressText",value:function(){var t,e=this.textSpace,n=Math.round(this.audio.currentTime/this.audio.duration*e);for(t="#";t.length<n;t+="#");for(;t.length<e;t+="=");return t}},{key:"isAnimating",value:function(){return">"===this.status.textContent.substr(0,1)}},{key:"showAnimating",value:function(){var t=this;this.status.textContent=">";var e=setInterval((function(){t.isAnimating()?(t.status.textContent.length>=t.textSpace&&(t.status.textContent=""),t.status.textContent+=">"):clearInterval(e)}),200)}},{key:"callPlay",value:function(){var t=this.audio.play();void 0!==t&&t.then((function(t){p.a.log("bgm","play started")})).catch((function(t){"NotAllowedError"!==t.name&&p.a.log("bgm","play interruped: "+t)}))}},{key:"render",value:function(){var t=this;return c.a.createElement(y,null,c.a.createElement("span",{className:"status",ref:function(e){return t.status=e},onClick:this.handleClick},"music.."))}},{key:"componentDidMount",value:function(){var t=this;for(var e in this.getTextSpace(),window.addEventListener("resize",this.getTextSpace),this.playerEvents)this.audio.addEventListener(e,this.playerEvents[e]);this.loadPlaylist().then((function(){console.log("bgm","playlist loaded"),console.log(t.playlist),window.sessionStorage&&sessionStorage.music_playingIndex?t.playByIndex(sessionStorage.music_playingIndex):d.autoplay&&t.playByIndex(0)}))}},{key:"componentWillUnmount",value:function(){for(var t in window.removeEventListener("resize",this.getTextSpace),this.playerEvents)this.audio.removeEventListener(t,this.playerEvents[t])}}]),e}(c.a.Component);e.default=g}}]);
//# sourceMappingURL=3.142be564.chunk.js.map