"use strict";(self.webpackChunkmy_note=self.webpackChunkmy_note||[]).push([[675],{675:function(t,e,n){n.r(e);var s,i=n(5671),a=n(3144),o=n(136),r=n(8347),u=n(168),l=n(5751),c=n(2791),d=n(8072),p=n(6270),g=n(184),y=l.ZP.div(s||(s=(0,u.Z)(["\n  width: 100%;\n  padding: 0.5rem;\n  box-sizing: border-box;\n  font-family: 'Source Sans Pro', 'Courier New', 'Courier', monospace;\n"]))),h=function(t){(0,o.Z)(n,t);var e=(0,r.Z)(n);function n(t){var s;if((0,i.Z)(this,n),(s=e.call(this,t)).audio=new Audio,s.status=null,s.textSpace=10,s.playlist=[],s.playingIndex=0,s.waittingForPlay=!1,s.recoveryProgressHandled=!1,s._DEBUG=!1,s.playerEvents={error:function(){s.status.textContent="bgm: error "+s.audio.error.code},canplay:function(){s.waittingForPlay&&s.callPlay()},play:function(){s.waittingForPlay=!1,s.status.textContent="bgm: play"},playing:function(){s.status.textContent="#",s.recoveryProgressHandled||s.recoveryProgress();var t=setInterval((function(){"#"===s.status.textContent.substr(0,1)?(s.status.textContent=s.getProgressText(),s.saveProgressInfo()):clearInterval(t)}),300)},progress:function(){!s.isAnimating()&&s.audio.readyState<4&&s.showAnimating()},pause:function(){s.status.textContent="bgm: pause"},waiting:function(){s.isAnimating()||s.showAnimating()},ended:function(){s.status.textContent="bgm: ended",s.saveProgressInfo(),s.playNext()}},s.getTextSpace=function(){var t=document.createElement("span");t.style.visibility="hidden",s.status.parentNode.appendChild(t);var e=getComputedStyle(s.status.parentNode);for(t.textContent="#";s.status.parentNode.offsetWidth-(parseFloat(e.paddingLeft)+parseFloat(e.paddingRight))>t.getBoundingClientRect().width;t.textContent+="#");s.textSpace=t.textContent.length-1,s.status.parentNode.removeChild(t)},s.handleClick=function(){s.audio.paused||0===s.audio.currentTime?(window.sessionStorage&&(sessionStorage.music_paused=null),s.audio.src?s.callPlay():s.playByIndex(0)):(window.sessionStorage&&(sessionStorage.music_paused="paused"),s.audio.pause())},s._DEBUG){var a=function(t){s.playerEvents["_"+t]=s.playerEvents[t],s.playerEvents[t]=function(){console.log("bgm: event[".concat(t,"]")),s.playerEvents["_"+t]()}};for(var o in s.playerEvents)a(o)}return s}return(0,a.Z)(n,[{key:"loadPlaylist",value:function(){var t=this;return new Promise((function(e,n){fetch("/my-note/playlist.json").then((function(t){return t.json()})).then((function(n){var s=n.result.tracks;for(var i in s)t.playlist.push(s[i].id);e(n)}),(function(t){p.Z.log(t),n(t)}))}))}},{key:"playByIndex",value:function(t){if(t>=this.playlist.length||t<0)p.Z.log("Playlist[".concat(t,"] not exists. "));else{this.playingIndex=t;var e="https://music.163.com/song/media/outer/url?id="+this.playlist[t]+".mp3";this.audio.src=e,window.sessionStorage&&(sessionStorage.music_playingIndex=t),this.waittingForPlay=!0}}},{key:"playNext",value:function(){var t=parseInt(this.playingIndex)+1;t<this.playlist.length?this.playByIndex(t):this.playByIndex(0)}},{key:"saveProgressInfo",value:function(){window.sessionStorage&&(this.audio.ended?sessionStorage.music_currentTime=0:sessionStorage.music_currentTime=this.audio.currentTime)}},{key:"recoveryProgress",value:function(){this.recoveryProgressHandled=!0,window.sessionStorage&&(sessionStorage.music_currentTime&&(this.audio.currentTime=sessionStorage.music_currentTime),"paused"===sessionStorage.music_paused&&this.audio.pause())}},{key:"getProgressText",value:function(){var t,e=this.textSpace,n=Math.round(this.audio.currentTime/this.audio.duration*e);for(t="#";t.length<n;t+="#");for(;t.length<e;t+="=");return t}},{key:"isAnimating",value:function(){return">"===this.status.textContent.substr(0,1)}},{key:"showAnimating",value:function(){var t=this;this.status.textContent=">";var e=setInterval((function(){t.isAnimating()?(t.status.textContent.length>=t.textSpace&&(t.status.textContent=""),t.status.textContent+=">"):clearInterval(e)}),200)}},{key:"callPlay",value:function(){var t=this.audio.play();void 0!==t&&t.then((function(t){p.Z.log("bgm","play started")})).catch((function(t){"NotAllowedError"!==t.name&&p.Z.log("bgm","play interruped: "+t)}))}},{key:"render",value:function(){var t=this;return(0,g.jsx)(y,{children:(0,g.jsx)("span",{className:"status",ref:function(e){return t.status=e},onClick:this.handleClick,children:"music.."})})}},{key:"componentDidMount",value:function(){var t=this;for(var e in this.getTextSpace(),window.addEventListener("resize",this.getTextSpace),this.playerEvents)this.audio.addEventListener(e,this.playerEvents[e]);this.loadPlaylist().then((function(){console.log("bgm","playlist loaded"),console.log(t.playlist),window.sessionStorage&&sessionStorage.music_playingIndex?t.playByIndex(sessionStorage.music_playingIndex):d.Z.autoplay&&t.playByIndex(0)}))}},{key:"componentWillUnmount",value:function(){for(var t in window.removeEventListener("resize",this.getTextSpace),this.playerEvents)this.audio.removeEventListener(t,this.playerEvents[t])}}]),n}(c.Component);e.default=h}}]);
//# sourceMappingURL=675.728ac996.chunk.js.map