(this["webpackJsonpmy-note"]=this["webpackJsonpmy-note"]||[]).push([[0],{101:function(e,t,n){},102:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(27),r=n.n(i),c=n(35),u=n(1),l=n(2),s=n(4),h=n(3),m=n(28),d=n(5),f=n(8),p=n(61),v=n.n(p),g=n(17),_=window.mClientUtils,b=function e(){Object(u.a)(this,e)};b.exit=function(){return _&&_.exit("\u2713")},b.toggleMenu=function(e){return _&&_.toggleOptionsMenu("\u2713",e)},b.getStatusBarHeight=function(){return _?_.getStatusBarHeight("\u2713")/window.devicePixelRatio:0},b.isClient="ReactDebug"===navigator.userAgent&&_;var w=b,y=n(33),C=function(){function e(){Object(u.a)(this,e)}return Object(l.a)(e,null,[{key:"className2s",value:function(e){return"."+e.split(" ")[0]}}]),e}();C.isSnap="ReactSnap"===navigator.userAgent;var M=C,T=C.className2s,O=n(6),k=n.n(O),E=function(){function e(){Object(u.a)(this,e),this.__during=1500,this.__timer=null,this.__parent=document.body,this.__view=e.getDefaultView(),this._touchstart=null,this._touchmove=null,this._touchend=null,this._onshowed=null,this._ondismiss=null}return Object(l.a)(e,[{key:"setDuring",value:function(e){return this.__during=e,this}},{key:"setOnShowed",value:function(e){return this._onshowed=e,this}},{key:"setOnDismiss",value:function(e){return this._ondismiss=e,this}},{key:"setParent",value:function(e){return e&&(this.__parent=e),this}},{key:"setText",value:function(e){return this.__view.childNodes[0].textContent=e,this}},{key:"setTimer",value:function(e){var t=this;this.__during>0&&(e||(e=this.__during),this.__timer=setTimeout((function(){t.dismiss()}),e))}},{key:"clearTimer",value:function(){this.__timer&&(clearTimeout(this.__timer),this.__timer=null)}},{key:"dismiss",value:function(t,n){var o,a=this;if(this.clearTimer(),!1!==t){for(var i in e.affectedFAB){var r=e.affectedFAB[i],c=r.view;"auto"!==r.bottom?k()(c,{bottom:r.bottom},"fast"):"auto"!==r.top&&k()(c,{top:r.top},"fast"),e.affectedFAB.splice(i,1)}!0!==t&&(o=t)}n&&(o=n);var u=document.querySelector("#SnackBar");if(u){var l=function(){u.removeEventListener("touchstart",a._touchstart),u.removeEventListener("touchmove",a._touchmove),u.removeEventListener("touchend",a._touchend),a._touchstart=null,a._touchmove=null,a._touchend=null,u.parentNode.removeChild(u),a._ondismiss&&a._ondismiss(),o&&o()};"none"!==getComputedStyle(u).display&&u.getBoundingClientRect().left<document.documentElement.clientWidth?k()(u,{bottom:-u.offsetHeight+"px"},"fast",l):l()}}},{key:"show",value:function(){var t=this;if(null===document.querySelector("#SnackBar")){this.__parent.appendChild(this.__view);var n,o,a,i=document.querySelector("#SnackBar");document.documentElement.clientWidth>800&&(i.style.width="400px",i.style.margin="20px"),i.addEventListener("touchstart",this._touchstart=function(e){return t.clearTimer(),n=parseInt(getComputedStyle(i).left),o=e.targetTouches[0].pageX,!1}),i.addEventListener("touchmove",this._touchmove=function(e){return(a=e.targetTouches[0].pageX)>o&&(i.style.left=n+a-o+"px"),!1}),i.addEventListener("touchend",this._touchend=function(e){return parseInt(getComputedStyle(i).left)>document.documentElement.clientWidth/3?k()(i,{left:document.documentElement.clientWidth+"px"},(function(){t.dismiss()})):(k()(i,{left:0},"ease"),null===t.__timer&&t.setTimer(1500)),!1}),!(document.documentElement.clientWidth>800)&&"ontouchstart"in window||(i.onclick=function(){t.clearTimer(),k()(i,{opacity:0},(function(){return t.dismiss()}))});var r=document.querySelectorAll(".fab");Array.prototype.forEach.call(r,(function(t,n){if("fixed"===getComputedStyle(t).position&&document.documentElement.clientHeight-t.getBoundingClientRect().top-t.offsetHeight<i.offsetHeight&&t.getBoundingClientRect().left<i.getBoundingClientRect().left+i.offsetWidth){var o={};o.view=t,o.top=getComputedStyle(t).top,o.bottom=getComputedStyle(t).bottom,"auto"!==o.bottom?k()(t,{bottom:parseInt(o.bottom)+i.offsetHeight+"px"}):"auto"!==o.top?k()(t,{top:parseInt(o.top)-i.offsetHeight+"px"}):k()(t,{bottom:i.offsetHeight+"px"});var a=!1;for(var r in e.affectedFAB)e.affectedFAB[r].view===o.view&&(a=!0);a||e.affectedFAB.push(o)}})),"function"===typeof this._onshowed?k()(i,{bottom:0},this._onshowed):k()(i,{bottom:0}),this.setTimer()}else this.dismiss(!1,(function(){t.show()}))}}],[{key:"getDefaultView",value:function(){var e=document.implementation.createHTMLDocument();return e.body.innerHTML='<div id="SnackBar" style="width:100%;height:3rem;position:fixed;left:0px;bottom:-3rem;z-index:200;background:rgba(244,67,102,0.9);color:white;font-size:1rem;"><span style="line-height:3rem;margin-left:1.25rem;"></span></div>',e.body.children[0]}},{key:"make",value:function(t,n,o){return(new e).setParent(t).setText(n).setDuring(o)}}]),e}();E.affectedFAB=[],E.LENGTH_SHORT=1500,E.LENGTH_LONG=3e3,E.LENGTH_IMMEDIATE=-1;var S=E,x=function(){function e(){Object(u.a)(this,e),this._context=null,this._duration=1500,this._view=e.getDefaultView(),this._deadtime=0,this._domPtr=null}return Object(l.a)(e,[{key:"setContext",value:function(e){return this._context=e,this}},{key:"setText",value:function(e){return this._view.textContent=e,this}},{key:"setDuration",value:function(e){return this._duration=e,this}},{key:"show",value:function(){document.querySelector("#SuperToast")||document.body.appendChild(e.getContainerView());var t=document.querySelector("#SuperToast");if(t.children[0]?t.insertBefore(this._view,t.children[0]):t.appendChild(this._view),this._deadtime=Date.now()+this._duration,this._domPtr=t.children[0],e._queue.push(this),k()(this._domPtr,{opacity:1}),e._timer){if(!(this._deadtime<e._nextHandleTime))return;clearTimeout(e._timer)}e._timer=setTimeout(e._handle,this._duration),e._nextHandleTime=this._deadtime}}],[{key:"getContainerView",value:function(){var e=document.implementation.createHTMLDocument();return e.body.innerHTML='<div id="SuperToast" style="position:fixed;bottom:3rem;z-index:200;"></div>',e.body.children[0]}},{key:"getDefaultView",value:function(){var e=document.implementation.createHTMLDocument();return e.body.innerHTML='<div style="opacity:0;background:rgba(244,67,102,0.9);color:white;font-size:1rem;"></div>',e.body.children[0]}},{key:"_handle",value:function(){for(var t=Date.now(),n=0,o=0;o<e._queue.length;o++){var a=e._queue[o]._deadtime;t>=a?function(){var t=e._queue[o]._domPtr;k()(t,{opacity:0},(function(){var e=document.querySelector("#SuperToast");e.removeChild(t),null===e.children[0]&&e.parentNode.removeChild(e)})),e._queue.splice(o,1),o--}():(a<n||!n)&&(n=a)}0!==n?(e._timer=setTimeout(e._handle,n-t),e._nextHandleTime=n):(e._timer=null,e._nextHandleTime=0)}},{key:"makeText",value:function(t,n,o){return(new e).setContext(t).setText(n).setDuration(o)}}]),e}();x._timer=null,x._queue=[],x._nextHandleTime=0,x.LENGTH_SHORT=1500,x.LENGTH_LONG=3e3;var L=x,j=n(62),D=n.n(j),F=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:D.a.LoadingView},a.a.createElement("span",null),a.a.createElement("span",null),a.a.createElement("span",null),a.a.createElement("span",null,"loading..."),a.a.createElement("span",null),a.a.createElement("span",null),a.a.createElement("span",null))}}]),t}(a.a.Component),I=n(29),H=n.n(I),N=n(31),B=n(15),A=n.n(B),P=f.b.div.attrs({className:A.a.ToolbarView}).withConfig({displayName:"Toolbar__ToolbarView",componentId:"sc-1odss5p-0"})(["background-color:transparent;top:","px;",",","{svg{fill:",";}}","{a{color:",";}}","{top:calc(","px + 3.125rem);background:rgba(255,255,255,0.6);input{box-shadow:0 0.125rem grey;}input:focus{box-shadow:0 0.125rem #FF4081;}}"],(function(e){return e.statusBarHeight}),T(A.a.MenuIcon),T(A.a.SearchIcon),(function(e){return e.theme.ToolbarIconColor}),T(A.a.Title),(function(e){return e.theme.TitleColor}),T(A.a.SearchView),(function(e){return e.statusBarHeight})),X=f.b.div.withConfig({displayName:"Toolbar__StatusBar",componentId:"sc-1odss5p-1"})(["background:",";display:",";height:","px;width:100%;position:fixed;top:0;"],(function(e){return e.theme.StatusBarColor}),(function(e){return e.statusBarHeight?"block":"none"}),(function(e){return e.statusBarHeight}));X.defaultProps={theme:{StatusBarColor:"black"}},P.defaultProps={theme:{ToolbarIconColor:"white",TitleColor:"white"}};var R=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(h.a)(t).call(this,e))).canvas=null,n.handleMenuClick=function(){n.props.onMenuClick&&n.props.onMenuClick()},n.handleSearchClick=function(){n.state.atTop?y.a.log("(\uff61>\ufe4f<\uff61)","\u770b\u4e0d\u89c1\u6211\u770b\u4e0d\u89c1\u6211~"):n.setState({showSearch:!n.state.showSearch})},n.handleSearch=function(e){e.preventDefault();var t=e.target[0].value;n.props.onSearch&&n.props.onSearch(t)},n.handleResize=function(){n.canvas.resize()},n.handleScroll=function(){var e=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;n.state.atTop&&e>10?n.setState({atTop:!1}):e<10&&!n.state.atTop&&n.setState({atTop:!0})},n.state={menuIconHover:!1,atTop:!0,showSearch:!1},n.canvas=new W,n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(P,{statusBarHeight:this.props.statusBarHeight},a.a.createElement(X,{statusBarHeight:this.props.statusBarHeight}),a.a.createElement("span",{className:A.a.MenuIcon,onClick:this.handleMenuClick,onMouseEnter:function(){return e.setState({menuIconHover:!0})},onMouseLeave:function(){return e.setState({menuIconHover:!1})},style:{backgroundColor:this.state.menuIconHover?"rgba(85,85,85,1)":"rgba(0,0,0,0)"}},a.a.createElement(H.a,{path:N.c})),a.a.createElement("span",{className:A.a.Title},a.a.createElement("a",{href:"."},"MyNote")),a.a.createElement("span",{className:A.a.SearchIcon,onClick:this.handleSearchClick,style:{opacity:this.state.atTop?0:1}},a.a.createElement(H.a,{path:N.b})),a.a.createElement("div",{className:A.a.SearchView,style:{display:this.state.showSearch?"block":"none"}},a.a.createElement("form",{action:"#",method:"get",onSubmit:this.handleSearch},a.a.createElement("input",{type:"search",name:"search",placeholder:"search...",autoFocus:this.state.showSearch,autoComplete:"off","x-webkit-speech":"true"}))),a.a.createElement("canvas",{ref:function(t){return e.canvas.is(t)}}))}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResize),window.addEventListener("scroll",this.handleScroll),this.canvas.init(),setTimeout(this.handleResize,20)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize),window.removeEventListener("scroll",this.handleScroll)}}]),t}(a.a.Component),W=function e(){var t=this;Object(u.a)(this,e),this.canvas=null,this.ctx=null,this.width=null,this.height=null,this.loop=null,this.headerHeight=0,this.prevScroll=0,this.drawLoopLock=0,this.raf=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame).bind(window),this.is=function(e){t.canvas=e},this.init=function(){t.ctx=t.canvas.getContext("2d")},this.resize=function(){if(t.headerHeight=document.documentElement.clientHeight,t.canvas){var e=t.canvas.getBoundingClientRect();t.width=e.width,t.height=e.height,t.canvas.width=t.width,t.canvas.height=t.height,t.draw(),0===t.drawLoopLock&&(t.raf(t.drawLoop),t.drawLoopLock=1)}},this.draw=function(){if(document.body.classList.contains("x"))t.ctx.fillStyle="#000";else{var e=t.scrollTop(),n=1;t.headerHeight&&(n=(n=e/t.headerHeight).toFixed(2))>1&&(n=1),t.ctx.fillStyle="rgba(69, 157, 245, ".concat(n,")")}t.ctx.clearRect(0,0,t.width,t.height),t.ctx.fillRect(0,0,t.width,t.height)},this.drawLoop=function(){var e=t.scrollTop();t.prevScroll!==e&&(t.draw(),t.prevScroll=e),t.raf(t.drawLoop)},this.animate=function(){var e=0;t.loop=setInterval((function(){t.ctx.fillStyle="rgba(".concat(5*e,", ").concat(5*e,", 255, 1.0)"),t.ctx.fillRect(0,0,t.width,t.height),40===++e&&(clearInterval(t.loop),t.draw())}),30)},this.scrollTop=function(){return document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop}},V=R,z=n(16),q=n.n(z),G=f.b.div.attrs({className:q.a.MrMenu}).withConfig({displayName:"Menu__MrMenu",componentId:"sc-17ffyxw-0"})(["background:",";"," span{color:",";}ul li{color:",";}ul li.active{color:",";background:",";}","{a:link{color:rgba(0,0,0,0.54);}a:visited{color:rgba(0,0,0,0.54);}a:hover{color:#0a0;}a:active{color:#0a0;}}","{color:",";}"],(function(e){return e.theme.MenuBackground}),T(q.a.menuHeader),(function(e){return e.theme.MenuHeaderTextColor}),(function(e){return e.theme.MenuTextColor}),(function(e){return e.theme.ItemActiveTextColor}),(function(e){return e.theme.ItemActiveColor}),T(q.a.menuFooter),T(q.a.copyright),(function(e){return e.theme.MenuTextColor}));G.defaultProps={theme:{MenuBackground:"rgba(255,255,255,0.87)",MenuHeaderTextColor:"white",MenuTextColor:"rgba(0,0,0,0.87)",ItemActiveTextColor:"#2196f3",ItemActiveColor:"#ddd"}};var J=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(G,{ref:function(t){e.props.getDOM&&e.props.getDOM(t)}},a.a.createElement("div",{className:q.a.menuHeader},a.a.createElement("span",null,"menu")),a.a.createElement("div",{className:q.a.MenuContainer},this.props.children),a.a.createElement("div",{className:q.a.menuFooter},a.a.createElement("span",{className:q.a.copyright},"\xa9 me")))}}]),t}(a.a.Component),U=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(h.a)(t).call(this,e))).getItemList=function(){var e=0;return a.a.Children.map(n.props.children,(function(t){return t?a.a.cloneElement(t,{key:e,className:n.state.currentIndex===e?"active":"",onClick:function(e){n.handleItemClick(e),t.props.onClick&&t.props.onClick(e)},index:e++}):null}))},n.handleItemClick=function(e){n.setState({currentIndex:parseInt(e.currentTarget.getAttribute("index"))})},n.state={currentIndex:0},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("ul",null,this.getItemList())}}]),t}(a.a.Component),Y=J,Q=n(12),K=n.n(Q),Z=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("canvas",{className:K.a.mask,ref:function(e){return t.container=e}})}},{key:"componentDidMount",value:function(){t.ctx=t.container.getContext("2d")}}],[{key:"onResize",value:function(e,n){t.container.width=e,t.container.height=n}},{key:"onMotionStart",value:function(e){}},{key:"onMotionMove",value:function(){}},{key:"onMotionEnd",value:function(){}}]),t}(a.a.Component),$=function(e){function t(){var e,n;Object(u.a)(this,t);for(var o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).raf=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame).bind(window),n.menuDOM=null,n.spaceDOM=null,n.conDOM=null,n.bigScreen=!1,n.menuPosX=-316,n.menuTempOpen=!1,n._menuMoveMode="transform",n._menuMoving=!1,n.getChildren=function(e){return a.a.Children.map(n.props.children,(function(e){return e.type===V?a.a.cloneElement(e,{onMenuClick:n.toggleMenu}):e.type===Y?a.a.cloneElement(e,{getDOM:function(e){return n.menuDOM=e}}):"content"===e.props.className?a.a.cloneElement(e,{ref:function(e){return n.conDOM=e}}):e}))},n.handleResize=function(){var e=document.documentElement.clientWidth,t=document.documentElement.clientHeight;Z.onResize(e,t),console.log("resize(".concat(e,", ").concat(t,")")),n.bigScreen=e>550,n.menuWidth=n.menuDOM.getBoundingClientRect().width,n.moveBack()},n.prevTouchMenuPosX=null,n.menuTouchFromX=null,n.menuTouchMoveX=null,n.menuTouchPrevX=null,n.menuPrevLoopTime=null,n.menuDragSpeed=0,n.touchMoveLoop=function(){if(null!=n.menuTouchFromX)if(null!=n.menuTouchMoveX){var e=n.prevTouchMenuPosX+n.menuTouchMoveX-n.menuTouchFromX;e<-n.menuWidth&&(e=-n.menuWidth),e>0&&(e=0),n.stepTo(e);var t=Date.now();n.menuDragSpeed=(n.menuTouchMoveX-n.menuTouchPrevX)/(t-n.menuPrevLoopTime),n.menuTouchPrevX=n.menuTouchMoveX,n.menuPrevLoopTime=t,n.raf(n.touchMoveLoop)}else n.raf(n.touchMoveLoop)},n.handleTouchStart=function(e){Z.onMotionStart(e);var t=e.targetTouches[0];n.prevTouchMenuPosX=n.menuPosX,t.pageX<n.prevTouchMenuPosX+n.menuWidth+20&&t.pageY>50&&(n.menuTouchFromX=t.pageX,n.menuTouchPrevX=n.menuTouchFromX,n.menuDOM.classList.add(K.a.touching),n.spaceDOM.classList.add(K.a.touching),n.conDOM.classList.add(K.a.touching),n.beforeOpenMenu(),n.menuPrevLoopTime=Date.now(),n.raf(n.touchMoveLoop))},n.handleTouchMove=function(e){Z.onMotionMove(e);var t=e.targetTouches[0];if(null!=n.menuTouchFromX)return n.menuTouchMoveX=t.pageX,!1},n.handleTouchEnd=function(e){if(Z.onMotionEnd(e),null!=n.menuTouchFromX){if(n.menuTouchFromX=null,n.menuTouchMoveX=null,n.menuTouchPrevX=null,n.prevTouchMenuX=null,n.menuDOM.classList.remove(K.a.touching),n.spaceDOM.classList.remove(K.a.touching),n.conDOM.classList.remove(K.a.touching),Math.abs(n.menuDragSpeed)>.5){var t=n.menuDragSpeed>0?0:-n.menuWidth,o=Math.abs((t-n.menuPosX)/n.menuDragSpeed);n.animateTo(t,o>50?o:50,(function(e){t===-n.menuWidth&&e&&n.afterCloseMenu()}))}else n.moveBack();n.menuPrevLoopTime=null,n.menuDragSpeed=0}},n.handleMouseMove=function(e){0===e.pageX&&(0===n.menuPosX||n._menuMoving||(n.openMenu(),n.menuTempOpen=!0))},n.onMouseLeaveMenu=function(e){n.menuTempOpen&&(n.closeMenu(),n.menuTempOpen=!1)},n.stepTo=function(e){n.menuPosX=e,"transform"===n._menuMoveMode?n.menuDOM.style.transform="translate3d(".concat(e,"px,0,0)"):n.menuDOM.style.left=e+"px",n.spaceDOM.style.opacity="".concat(e/n.menuWidth+1),n.bigScreen&&(n.conDOM.style.width=document.body.offsetWidth-(e+n.menuWidth)+1+"px")},n.animateTo=function(e,t,o){var a=520,i=null;"number"===typeof t&&(a=t),"function"===typeof t&&(i=t),"function"===typeof o&&(i=o);var r=function(e){n._menuMoving=!1,i&&i(e)},c=n.menuPosX,u=e-c;n._menuMoving=!0,k()(n.spaceDOM,"stop",!0),k()(n.spaceDOM,{tween:[0,1]},{duration:a,easing:"easeInOutQuad",begin:function(){n.bigScreen?n.conDOM.style.width=document.body.offsetWidth-(e+n.menuWidth)+1+"px":n.conDOM.style.width="100%"},progress:function(e,t,o,a,i){if(null!==i){var l=c+u*(1-i);n.stepTo(l),n.menuTouchFromX&&(k()(n.spaceDOM,"stop",!0),r(!1))}},complete:function(){r(!0)}})},n.moveBack=function(e){n.menuPosX>1*-n.menuWidth/2?n.openMenu(e):n.closeMenu(e)},n.isMenuOpen=function(){return 0===n.menuPosX},n.beforeOpenMenu=function(){n.bigScreen||(n.spaceDOM.style.display="block",document.body.style.overflow="hidden")},n.afterCloseMenu=function(){n.spaceDOM.style.display="none",document.body.style.overflow="unset"},n.openMenu=function(e){n.beforeOpenMenu(),n.animateTo(0,e)},n.closeMenu=function(e){n.animateTo(-n.menuWidth,(function(t){t&&n.afterCloseMenu(),e&&e(t)}))},n.toggleMenu=function(){n.isMenuOpen()?n.closeMenu():n.openMenu()},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:K.a.DrawerView},a.a.createElement(Z,null),this.getChildren(),a.a.createElement("div",{className:K.a.SpaceView,ref:function(t){return e.spaceDOM=t},onTouchStart:function(){return e.closeMenu()}}))}},{key:"componentDidMount",value:function(){"transform"===this._menuMoveMode?this.menuDOM.style.transform="translate3d(".concat(this.menuPosX,"px,0,0)"):this.menuDOM.style.left=this.menuPosX+"px",this.menuDOM.classList.add(K.a.menu),this.conDOM.classList.add(K.a.content),window.addEventListener("resize",this.handleResize),document.body.addEventListener("touchstart",this.handleTouchStart),document.body.addEventListener("touchmove",this.handleTouchMove),document.body.addEventListener("touchend",this.handleTouchEnd),document.body.addEventListener("mousemove",this.handleMouseMove),this.menuDOM.addEventListener("mouseleave",this.onMouseLeaveMenu),setTimeout(this.handleResize,20)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize),document.body.removeEventListener("touchstart",this.handleTouchStart),document.body.removeEventListener("touchmove",this.handleTouchMove),document.body.removeEventListener("touchend",this.handleTouchEnd),document.body.removeEventListener("mousemove",this.handleMouseMove),this.menuDOM.addEventListener("mouseleave",this.onMouseLeaveMenu)}}]),t}(a.a.Component),ee=n(32),te=n(18),ne=n.n(te),oe=f.b.div.attrs({className:ne.a.FabWrapper}).withConfig({displayName:"FloatActionButton__FabWrapper",componentId:"sc-36u9r3-0"})(["","{background:",";}"," svg{fill:",";}"," div{background:",";}"],T(ne.a.fabView),(function(e){return e.theme.FabColor}),T(ne.a.iconWrapper),(function(e){return e.theme.FabIconColor}),T(ne.a.fabMenu),(function(e){return e.theme.FabMenuColor}));oe.defaultProps={theme:{FabColor:"#FF4081",FabIconColor:"white",FabMenuColor:"#66ccff"}};var ae=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(h.a)(t).call(this,e))).menuDOM=null,n.fabChild=null,n.onClickHandler=function(){var e=!n.state.isOpen,t=500/n.fabChild.length;n.setState({isOpen:e}),n.fabChild.forEach((function(n,o){k()(n,"stop",!0),k()(n,e?"fadeIn":"fadeOut",{duration:300,delay:t*o})}))},n.state={isOpen:!1},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(oe,{className:"fab"},a.a.createElement("div",{className:ne.a.fabView,onClick:this.onClickHandler},a.a.createElement("div",{className:ne.a.iconWrapper},a.a.createElement(H.a,{path:N.a,rotate:this.state.isOpen?360:315}))),a.a.createElement("div",{className:ne.a.fabMenu,ref:function(t){return e.menuDOM=t}},this.props.children))}},{key:"componentDidMount",value:function(){var e=this.menuDOM.parentNode,t=Object(ee.a)(this.menuDOM.childNodes);this.fabChild=t,this.menuDOM.style.left="auto",this.menuDOM.style.top="auto",t.forEach((function(e,t){e.style.left="auto",e.style.top="auto"}));var n=e.getBoundingClientRect();t[0].style.display="block";var o=t[0].getBoundingClientRect();t[0].style.display="none",this.menuDOM.style.left=n.left+e.offsetWidth/2-(o.left+o.width/2)+"px",this.menuDOM.style.top=n.top+e.offsetHeight/2-(o.top+o.height/2)+n.height+"px";var a=90/(t.length-1);t.forEach((function(e,t){e.style.left=-Math.cos(a*t*Math.PI/180)*n.width*1.2+"px",e.style.top=-Math.sin(a*t*Math.PI/180)*n.width*1.2+"px"}))}}]),t}(a.a.Component),ie=n(37),re=n.n(ie),ce=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={loaded:!1},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("header",{className:re.a.BannerView},a.a.createElement("span",{className:re.a.con},a.a.createElement("span",null,"..."),a.a.createElement("br",null),a.a.createElement("i",null,"under construction")),a.a.createElement("span",{className:re.a.bottom},this.state.loaded||a.a.createElement(F,null)))}},{key:"componentDidMount",value:function(){M.isSnap||this.setState({loaded:!0})}}]),t}(a.a.Component),ue=n(105),le=n(104),se=f.b.div.withConfig({displayName:"CardView__Card",componentId:"p8qik2-0"})(["background:",";color:",";box-shadow:0 0.2rem 0.2rem rgba(0,0,0,0.54);padding:0.625rem 1rem;margin:1rem auto;box-sizing:border-box;"],(function(e){return e.theme.CardColor}),(function(e){return e.theme.TextColor}));se.defaultProps={theme:{CardColor:"white",TextColor:"black"}};var he=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(se,this.props)}}]),t}(a.a.Component),me=Object(f.b)(he).withConfig({displayName:"Card__CardFather",componentId:"sc-7gf40a-0"})(["position:absolute;top:calc(","px + 3.125rem);min-height:50vh;width:40rem;max-width:100%;@media screen and (min-width:100rem){width:50rem;}"],w.getStatusBarHeight()),de=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(me,this.props)}}]),t}(a.a.Component);function fe(){return a.a.createElement(de,null,a.a.createElement("p",null,"test page"))}var pe=n(67),ve=n(65),ge=n.n(ve),_e=n(42),be=n.n(_e),we=n(43),ye=n.n(we),Ce=f.b.div.withConfig({displayName:"ContentPage__ConView",componentId:"ra0fv2-0"})(["margin-top:3.125rem;padding:1rem 0;h1{font-size:1.5em;}a.con-preview{color:#2196f3;font-size:1.5em;}blockquote{margin:0;padding:0.3rem 0.5rem;border-left:0.25rem solid #0c0;background:#f5f2f0;}"]),Me=Object(f.b)(he).withConfig({displayName:"ContentPage__ConCard",componentId:"ra0fv2-1"})(["width:40rem;max-width:100%;@media screen and (min-width:100rem){width:50rem;}overflow:auto;iframe,video,img{max-width:100%;height:auto;}"]),Te=function(){function e(t,n){Object(u.a)(this,e),this.__id=null,this.__content=null,this.__html=null,this.__title=null,n?this.__initFromCon(t,n):this.__parseFromJSON(t)}return Object(l.a)(e,[{key:"__initFromCon",value:function(e,t){this.__id=e,this.__content=t;var n=/^(-{3,})\n((\w+): ([\S\s]*?)\n)+\1\n\n/.exec(t);if(null!=n&&n.length>1){for(var o,a=n[0].split("\n"),i=/^(\w+): (['"]?)([\S\s]*)\2$/,r=new Map,c=1;c<a.length-3;c++)(o=i.exec(a[c]))&&o.length>3&&r.set(o[1],o[3]);r.has("title")&&(this.__title=r.get("title")),this.__html=ye()(t.substr(n[0].length))}else{this.__html=ye()(t);var u=/<h1[\s\S]*>([\s\S]*)<\/h1>/.exec(this.__html);null!=u&&u.length>1&&(this.__title=u[1])}}},{key:"__parseFromJSON",value:function(e){if("string"===typeof e&&(e=JSON.parse(e)),!("id"in e&&"con"in e&&"html"in e))throw console.log(e),new Error("invalid ConData json");this.__id=e.id,this.__content=e.con,this.__html=e.html,e.title&&(this.__title=e.title)}},{key:"getState",value:function(){return{id:this.__id,con:this.__content,html:this.__html,title:this.__title}}},{key:"toString",value:function(){return JSON.stringify(this.getState())}},{key:"getHtml",value:function(){return this.__html}},{key:"getId",value:function(){return this.__id}},{key:"getSource",value:function(){return this.__content}},{key:"getTitle",value:function(){return this.__title}}],[{key:"parse",value:function(t){return new e(t)}}]),e}(),Oe=function(){function e(){Object(u.a)(this,e),this.conDataCache=new Map,this.path=window.location.pathname}return Object(l.a)(e,[{key:"loadContent",value:function(e,t){var n=this,o="_id_".concat(e);if(this.conDataCache.has(o)){var a=this.conDataCache.get(o);if(null!==a)return void(t&&t(200,a,!0))}ge.a.get("".concat(this.path,"content/").concat(e,".md")).then((function(a){var i=new Te(e,a.data);n.conDataCache.set(o,i),t&&t(a.status,i,!1)})).catch((function(n){404!==n.response.status&&console.log("load con[id=".concat(e,"]: ").concat(n)),t&&t(n.response.status,null,!1)}))}},{key:"_loadItems",value:function(e){var t=this;return new Promise((function(n,o){var a=0;t.loadContent("header",(function(i){200===i&&function i(){t.loadContent(a,(function(t,r,c){200===t?(e(t,r,c),++a>10?o("over 10 content"):i()):404===t||0===t?n():o(t)}))}()}))}))}},{key:"reqUpdate",value:function(e){var t=this;this._loadItems((function(n,o,a){a||e(o,Object(ee.a)(t.conDataCache.values()))})).then((function(){console.log("content loaded"),t.saveCache()})).catch((function(e){console.log("content load error: "+e)}))}},{key:"reqCache",value:function(e){e(Object(ee.a)(this.conDataCache.values()))}},{key:"saveCache",value:function(){if(window.sessionStorage){var e=[],t=!0,n=!1,o=void 0;try{for(var a,i=this.conDataCache[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){var r=Object(pe.a)(a.value,2)[1];e.push(r.getState())}}catch(c){n=!0,o=c}finally{try{t||null==i.return||i.return()}finally{if(n)throw o}}sessionStorage.setItem("con_cache",JSON.stringify(e))}}},{key:"loadCache",value:function(){var e=this;if(window.sessionStorage){var t=sessionStorage.getItem("con_cache");if(t)JSON.parse(t).forEach((function(t,n){var o=new Te(t),a="_id_".concat(o.getId());e.conDataCache.has(a)||e.conDataCache.set(a,o)}))}}}]),e}(),ke=function(e){function t(){var e,n;Object(u.a)(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).onPreviewClick=function(e){e.preventDefault()},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.data,t=e.getTitle();if(t){var n=be.a.sanitize(e.getHtml(),{ALLOWED_TAGS:[],KEEP_CONTENT:!0});return n.substr(0,t.length)===t&&(n=n.substr(t.length,n.length)),n.length>100&&(n="".concat(n.substr(0,100),"...")),a.a.createElement(Me,this.props,a.a.createElement("a",{className:"con-preview","data-id":e.getId(),href:"".concat(window.location.pathname,"?id=").concat(e.getId()),onClick:this.onPreviewClick},t),a.a.createElement("p",{className:"con-preview"},n))}var o=be.a.sanitize(e.getHtml());return a.a.createElement(Me,Object.assign({},this.props,{dangerouslySetInnerHTML:{__html:o}}))}}]),t}(a.a.Component),Ee=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={conList:[]},n.loader=new Oe,n.viewRef=a.a.createRef(),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.loader.loadCache(),this.loader.reqCache((function(t){e.setState({conList:t})})),this.loader.reqUpdate((function(t,n){e.setState({conList:n})}))}},{key:"render",value:function(){return a.a.createElement(Ce,{ref:this.viewRef},this.state.conList.map((function(e,t){return a.a.createElement(ke,{key:e.getId(),data:e})})))}}]),t}(a.a.Component),Se=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(g.a,{render:function(e){var t=e.location;return a.a.createElement(ue.a,{className:"CardWrapper"},a.a.createElement(le.a,{key:t.pathname,classNames:"router",timeout:500},a.a.createElement(g.c,{location:t},a.a.createElement(g.a,{exact:!0,path:"/",component:Ee}),a.a.createElement(g.a,{exact:!0,path:"/test",component:fe}),a.a.createElement(g.a,{render:function(){return a.a.createElement("div",null,"Not Found")}}))))}})}}]),t}(a.a.Component),xe={AppBackground:"#282c34",CardColor:"rgba(32,33,36,0.92)",TextColor:"rgba(255,255,255,0.87)",FabColor:"#ff4081",FabIconColor:"white",FabMenuColor:"#66ccff",MenuBackground:"rgba(255,255,255,0.87)",MenuHeaderTextColor:"white",MenuTextColor:"rgba(0,0,0,0.87)",ItemActiveTextColor:"#2196f3",ItemActiveColor:"#ddd",StatusBarColor:"#2196f3",ToolbarIconColor:"white",TitleColor:"white"},Le={AppBackground:"#e0e0e0",CardColor:"rgba(255,255,255,0.92)",TextColor:"rgba(0,0,0,0.87)",FabColor:"#ff4081",FabIconColor:"white",FabMenuColor:"#66ccff",MenuBackground:"rgba(255,255,255,0.87)",MenuHeaderTextColor:"white",MenuTextColor:"rgba(0,0,0,0.87)",ItemActiveTextColor:"#2196f3",ItemActiveColor:"#ddd",StatusBarColor:"#2196f3",ToolbarIconColor:"white",TitleColor:"white"},je=(n(101),a.a.lazy((function(){return n.e(3).then(n.bind(null,106))}))),De=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:L.LENGTH_SHORT;L.makeText(null,e,t).show()},Fe=f.b.canvas.attrs({className:"bg"}).withConfig({displayName:"App__BackgroundCanvas",componentId:"sc-1yog8wc-0"})(["background:",";"],(function(e){return e.theme.AppBackground}));Fe.defaultProps={theme:{AppBackground:"#e0e0e0"}};var Ie=function(e){function t(e){var n;Object(u.a)(this,t),(n=Object(s.a)(this,Object(h.a)(t).call(this,e))).view=null,n.sessionStorageSupported=!1,n.themeList=[Le,xe],n.handleSearch=function(e){De("search "+e)},n.goTo=function(e){e!==n.props.location.pathname&&("/"===e?n.props.history.goBack():n.props.history.push(e))};try{n.sessionStorageSupported="sessionStorage"in window&&null!==window.sessionStorage}catch(o){}return n.state={isLoading:!0,currentTheme:0},y.a.init({context:Object(m.a)(n),log:function(e,t){var o="[".concat(e,"] ").concat(t);console.log(o),L.makeText(Object(m.a)(n),o,L.LENGTH_LONG).show()}}),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(a.a.Fragment,null,a.a.createElement(v.a,null,a.a.createElement("meta",{name:"google",content:"notranslate"}),a.a.createElement("title",null,"mynote")),a.a.createElement(f.a,{theme:this.themeList[this.state.currentTheme]},a.a.createElement($,{ref:function(t){return e.view=t}},a.a.createElement(Fe,null),a.a.createElement(V,{statusBarHeight:w.getStatusBarHeight(),onSearch:this.handleSearch}),a.a.createElement(J,null,a.a.createElement(a.a.Suspense,{fallback:a.a.createElement(F,null)},this.state.isLoading?null:a.a.createElement(je,null)),a.a.createElement(U,null,a.a.createElement("li",{onClick:function(){return e.goTo("/")}},"item1"),a.a.createElement("li",{onClick:function(){S.make(null,"test",-1).setOnShowed((function(){return e.view.closeMenu()})).show()}},"item2"),a.a.createElement("li",{onClick:function(){document.body.classList.contains("x")?document.body.classList.remove("x"):document.body.classList.add("x")}},"item3"),a.a.createElement("li",{onClick:function(){e.state.currentTheme<e.themeList.length-1?e.setState({currentTheme:e.state.currentTheme+1}):e.setState({currentTheme:0})}},"item4"),w.isClient&&a.a.createElement("li",{onClick:function(){return w.exit()}},"Exit"),a.a.createElement("li",{onClick:function(){return e.view.closeMenu()}},"close"))),a.a.createElement("main",{className:"content"},a.a.createElement(ae,null,a.a.createElement("div",{onClick:function(){return De("test")}},"1"),a.a.createElement("div",{onClick:function(){return e.goTo("/test")}},"2"),a.a.createElement("div",null,"3")),a.a.createElement(ce,null),this.state.isLoading||a.a.createElement(Se,null)))))}},{key:"componentDidMount",value:function(){var e=this;M.isSnap||(this.setState({isLoading:!1}),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.querySelectorAll("style[data-styled]");2===e.length&&e[0].innerHTML&&!e[1].innerHTML&&e[0].parentNode.removeChild(e[0])}(),this.sessionStorageSupported&&void 0!==sessionStorage.show_welcome||setTimeout((function(){e.sessionStorageSupported&&(sessionStorage.show_welcome=!0),S.make(e.view.conDOM,"Welcome",S.LENGTH_LONG).show()}),1500))}}]),t}(a.a.Component),He=Object(g.f)(Ie);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ne=a.a.createElement(c.a,null,a.a.createElement(He,null)),Be=document.getElementById("root");Be.hasChildNodes()?r.a.hydrate(Ne,Be):r.a.render(Ne,Be),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},12:function(e,t,n){e.exports={DrawerView:"Framework_DrawerView__2JpzE",menu:"Framework_menu__3jjbn",animating:"Framework_animating__3ZPuv",content:"Framework_content__1LDfu",touching:"Framework_touching__2bvBT",SpaceView:"Framework_SpaceView__3dTD-",mask:"Framework_mask__1c7Bi"}},15:function(e,t,n){e.exports={toolbarShadow:"Toolbar_toolbarShadow__1_Sld",ToolbarView:"Toolbar_ToolbarView__1S3YH Toolbar_toolbarShadow__1_Sld",Title:"Toolbar_Title__2gZFt",IconFather:"Toolbar_IconFather__1DCrv",MenuIcon:"Toolbar_MenuIcon__3e613 Toolbar_IconFather__1DCrv",SearchIcon:"Toolbar_SearchIcon__o2Nk3 Toolbar_IconFather__1DCrv",SearchView:"Toolbar_SearchView__36OB8 Toolbar_toolbarShadow__1_Sld"}},16:function(e,t,n){e.exports={MrMenu:"Menu_MrMenu__2xDpK",MenuContainer:"Menu_MenuContainer__2OsOu",menuHeader:"Menu_menuHeader__1E8mV",menuFooter:"Menu_menuFooter__3F0rz",copyright:"Menu_copyright__1CD6t"}},18:function(e,t,n){e.exports={FabWrapper:"FloatActionButton_FabWrapper__1EGQW",fabView:"FloatActionButton_fabView__zG0ei",iconWrapper:"FloatActionButton_iconWrapper__2r1Q4",fabMenu:"FloatActionButton_fabMenu__2AcsH"}},33:function(e,t,n){"use strict";var o=n(1),a=n(2),i=function(){function e(){Object(o.a)(this,e)}return Object(a.a)(e,null,[{key:"init",value:function(t){e.proxy=t,e.inited=!0}},{key:"log",value:function(t,n){e.proxy.log(t,n)}}]),e}();t.a=i},37:function(e,t,n){e.exports={BannerView:"Banner_BannerView__3l_3J",con:"Banner_con__3-4Vi",bottom:"Banner_bottom__3dyyR"}},62:function(e,t,n){e.exports={LoadingView:"Loading_LoadingView__1eCfI",delayFadeIn:"Loading_delayFadeIn__3xTOi",shine:"Loading_shine__3ouF6",dotAnim:"Loading_dotAnim__31Ynl"}},70:function(e,t,n){e.exports=n(102)}},[[70,1,2]]]);
//# sourceMappingURL=main.b7ced921.chunk.js.map