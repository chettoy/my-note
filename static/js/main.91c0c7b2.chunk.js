(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,n){e.exports=n(59)},59:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),a=n(16),r=n.n(a),u=n(23),c=n(3),s=n(4),l=n(7),m=n(6),d=n(8),h=n(1),p=n(29),f=n.n(p),v=(n(51),n(13)),g=n(20),b=n(30),y=n.n(b);function w(){var e=Object(g.a)(["\n  ",'\n\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  @media screen and (max-width:240px){body{font-size:12px;}}\n  @media screen and (min-width:241px) and (max-width:320px){body{font-size:16px;}}\n  @media screen and (min-width:321px) and (max-width:480px){body{font-size:24px;}}\n  @media screen and (min-width:481px) and (max-width:720px){body{font-size:32px;}}\n  @media screen and (min-width:721px) and (max-width:1080px){body{font-size:48px;}}\n  @media screen and (min-width:1081px) and (max-width:1440px){body{font-size:64px;}}\n\n  a:link{text-decoration:none;}\n  a:visited{text-decoration:none;}\n  a:hover{text-decoration:none;}\n  a:active{text-decoration:none;}\n\n  code {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",\n      monospace;\n  }\n']);return w=function(){return e},e}var M=Object(h.createGlobalStyle)(w(),y.a),_=h.default.div.withConfig({displayName:"Loading__LoadingView",componentId:"sc-19rrd9m-0"})(["color:black;font-size:2rem;"]),O=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(_,null,i.a.createElement("span",null,"Loading..."))}}]),t}(i.a.Component),x=n(17),T=n(2),k=n.n(T),E=n(18),D=n.n(E),C=n(19);function S(){var e=Object(g.a)(["\n  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.5);\n"]);return S=function(){return e},e}var L=Object(h.css)(S()),j=h.default.div.withConfig({displayName:"Toolbar__ToolbarView",componentId:"sc-1odss5p-0"})(["",";background-color:#2196f3;width:100%;height:3.125rem;position:fixed;top:0;z-index:104;"],L),X=h.default.span.withConfig({displayName:"Toolbar__Title",componentId:"sc-1odss5p-1"})(["color:white;font-size:1.25rem;line-height:3.125rem;float:left;a{color:white;}"]),N=h.default.span.withConfig({displayName:"Toolbar__IconFather",componentId:"sc-1odss5p-2"})(["display:block;width:3.125rem;height:3.125rem;font-size:1.25rem;text-align:center;line-height:3.125rem;svg{fill:white;width:1.25rem;height:1.25rem;vertical-align:middle;}"]),F=Object(h.default)(N).withConfig({displayName:"Toolbar__MenuIcon",componentId:"sc-1odss5p-3"})(["float:left;"]),I=Object(h.default)(N).withConfig({displayName:"Toolbar__SearchIcon",componentId:"sc-1odss5p-4"})(["float:right;"]),P=h.default.div.withConfig({displayName:"Toolbar__SearchView",componentId:"sc-1odss5p-5"})(["",";background:rgba(255,255,255,0.6);border-radius:0 0 0 1rem;font-size:1rem;text-align:center;height:3.125rem;width:100%;min-width:15rem;max-width:20rem;position:fixed;top:3.125rem;right:0;z-index:104;display:none;input{width:85%;height:1.875rem;margin:0.625rem 1rem;border:none;background:transparent;box-shadow:0 0.125rem grey;}input:focus{box-shadow:0 0.125rem #FF4081;outline:none;}"],L),z=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).handleMenuClick=function(){n.props.onMenuClick&&n.props.onMenuClick()},n.handleSearchClick=function(){n.setState({showSearch:!n.state.showSearch})},n.handleSearch=function(e){e.preventDefault();var t=e.target[0].value;n.props.onSearch&&n.props.onSearch(t)},n.state={menuIconHover:!1,showSearch:!1},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(j,null,i.a.createElement(F,{onClick:this.handleMenuClick,onMouseEnter:function(){return e.setState({menuIconHover:!0})},onMouseLeave:function(){return e.setState({menuIconHover:!1})},style:{backgroundColor:this.state.menuIconHover?"rgba(85,85,85,1)":"rgba(0,0,0,0)"}},i.a.createElement(D.a,{path:C.c})),i.a.createElement(X,null,i.a.createElement("a",{href:"."},"MyNote")),i.a.createElement(I,{onClick:this.handleSearchClick},i.a.createElement(D.a,{path:C.b})),i.a.createElement(P,{style:{display:this.state.showSearch?"block":"none"}},i.a.createElement("form",{action:"#",method:"get",onSubmit:this.handleSearch},i.a.createElement("input",{type:"search",name:"search",placeholder:"search...",autoFocus:this.state.showSearch,autoComplete:"off","x-webkit-speech":"true"}))))}}]),t}(i.a.Component),W=h.default.div.withConfig({displayName:"Menu__MenuContainer",componentId:"sc-17ffyxw-0"})(["background-color:rgba(255,255,255,0.87);font-size:1rem;height:100vh;min-width:10rem;position:fixed;top:0;left:0;box-sizing:border-box;@media screen and (min-width:550px){width:16rem;max-width:50%;}@media screen and (max-width:549px){width:70%;box-shadow:0.125rem 0 1rem rgba(0,0,0,0.5);}.menuDrawer{width:100%;height:12rem;max-height:30%;position:relative;text-align:center;background:linear-gradient(to left,#0066FF,#00FFBF,#B3FF19);}.menuDrawer span{position:absolute;right:0;bottom:0;margin:0.4rem;color:white;}ul{list-style-type:none;margin:0;padding:0.5rem 0;width:100%;}ul li{margin:0;padding:0.5rem;display:block;color:rgba(0,0,0,0.87);background:transparent;}ul li.active{color:#2196f3;background:#ddd;}.menuFooter{padding:0 0.5rem;line-height:1.2rem;position:absolute;bottom:5rem;}.copyright{color:rgba(0,0,0,0.87);white-space:nowrap;}"]),H=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(W,{ref:function(t){e.props.getDOM&&e.props.getDOM(t)}},i.a.createElement("div",{className:"menuDrawer"},i.a.createElement("span",null,"menu")),this.props.children,i.a.createElement("div",{className:"menuFooter"},i.a.createElement("span",{className:"copyright"},"\xa9 me")))}}]),t}(i.a.Component),B=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).getItemList=function(){var e=0;return i.a.Children.map(n.props.children,function(t){return i.a.cloneElement(t,{key:e,className:n.state.currentIndex===e?"active":"",onClick:function(e){n.handleItemClick(e),t.props.onClick&&t.props.onClick(e)},index:e++})})},n.handleItemClick=function(e){n.setState({currentIndex:parseInt(e.currentTarget.getAttribute("index"))})},n.state={currentIndex:0},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("ul",null,this.getItemList())}}]),t}(i.a.Component),A=H,R={menu:"DrawerView_menu",animating:"animating",touching:"touching"},q=h.default.div.withConfig({displayName:"Framework__DrawerView",componentId:"ks24ar-0"})([".",".animating{transition:all .25s ease;}.content.animating{transition:width .25s ease;}.touching{transition-duration:0s!important;}.","{z-index:116;transform:translate3d(0,0,0);}.content{width:100%;position:absolute;top:0;right:0;z-index:100;}"],R.menu,R.menu),V=h.default.div.withConfig({displayName:"Framework__SpaceView",componentId:"ks24ar-1"})(["background:rgba(10,10,10,0.5);width:100vw;height:100vh;position:fixed;top:0;right:0;z-index:115;display:none;"]),G=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).raf=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame).bind(window),n.menuDOM=null,n.spaceDOM=null,n.conDOM=null,n.bigScreen=!1,n.menuPosX=-316,n.menuTempOpen=!1,n._children=null,n._menuMoveMode="transform",n._menuMoving=!1,n.handleResize=function(){console.log("resize(".concat(document.documentElement.clientWidth,", ").concat(document.documentElement.clientHeight,")")),n.bigScreen=document.documentElement.clientWidth>550,n.menuWidth=n.menuDOM.getBoundingClientRect().width,n.moveBack()},n.prevTouchMenuPosX=null,n.menuTouchFromX=null,n.menuTouchMoveX=null,n.menuTouchPrevX=null,n.menuPrevLoopTime=null,n.menuDragSpeed=0,n.touchMoveLoop=function(){if(null!=n.menuTouchFromX)if(null!=n.menuTouchMoveX){var e=n.prevTouchMenuPosX+n.menuTouchMoveX-n.menuTouchFromX;e<-n.menuWidth&&(e=-n.menuWidth),e>0&&(e=0),n.stepTo(e);var t=Date.now();n.menuDragSpeed=(n.menuTouchMoveX-n.menuTouchPrevX)/(t-n.menuPrevLoopTime),n.menuTouchPrevX=n.menuTouchMoveX,n.menuPrevLoopTime=t,n.raf(n.touchMoveLoop)}else n.raf(n.touchMoveLoop)},n.handleTouchStart=function(e){var t=e.targetTouches[0];n.prevTouchMenuPosX=n.menuPosX,t.pageX<n.prevTouchMenuPosX+n.menuWidth+20&&t.pageY>50&&(n.menuTouchFromX=t.pageX,n.menuTouchPrevX=n.menuTouchFromX,n.menuDOM.classList.add(R.touching),n.spaceDOM.classList.add(R.touching),n.conDOM.classList.add(R.touching),n.bigScreen||(n.spaceDOM.style.display="block"),n.menuPrevLoopTime=Date.now(),n.raf(n.touchMoveLoop))},n.handleTouchMove=function(e){var t=e.targetTouches[0];if(null!=n.menuTouchFromX)return e.stopPropagation(),n.menuTouchMoveX=t.pageX,!1},n.handleTouchEnd=function(e){if(null!=n.menuTouchFromX){if(e.stopPropagation(),n.menuTouchFromX=null,n.menuTouchMoveX=null,n.menuTouchPrevX=null,n.prevTouchMenuX=null,n.menuDOM.classList.remove(R.touching),n.spaceDOM.classList.remove(R.touching),n.conDOM.classList.remove(R.touching),Math.abs(n.menuDragSpeed)>.5){var t=n.menuDragSpeed>0?0:-n.menuWidth,o=Math.abs((t-n.menuPosX)/n.menuDragSpeed);n.animateTo(t,o>100?o:100)}else n.moveBack();n.menuPrevLoopTime=null,n.menuDragSpeed=0}},n.handleMouseMove=function(e){0===e.pageX&&(0===n.menuPosX||n._menuMoving||(n.openMenu(),n.menuTempOpen=!0))},n.onMouseLeaveMenu=function(e){n.menuTempOpen&&(n.closeMenu(),n.menuTempOpen=!1)},n.stepTo=function(e){n.menuPosX=e,"transform"===n._menuMoveMode?n.menuDOM.style.transform="translate3d(".concat(e,"px,0,0)"):n.menuDOM.style.left=e+"px",n.spaceDOM.style.opacity="".concat(e/n.menuWidth+1),n.bigScreen&&(n.conDOM.style.width=document.body.offsetWidth-(e+n.menuWidth)+1+"px")},n.animateTo=function(e,t,o){var i=250,a=null;"number"===typeof t&&(i=t),"function"===typeof t&&(a=t),"function"===typeof o&&(a=o),n._menuMoving=!0,k()(n.spaceDOM,"stop",!0),n.menuDOM.classList.add(R.animating),n.conDOM.classList.add(R.animating),n.menuDOM.style.transitionDuration=i+"ms",n.conDOM.style.transitionDuration=i+"ms";var r=function(e){n.stepTo(n.menuPosX),n.menuDOM.classList.remove(R.animating),n.conDOM.classList.remove(R.animating),n.menuDOM.style.transitionDuration="",n.conDOM.style.transitionDuration="",n._menuMoving=!1,a&&a(e)},u=n.menuPosX,c=e-u;k()(n.spaceDOM,{opacity:"".concat(e/n.menuWidth+1)},{duration:i,begin:function(){"transform"===n._menuMoveMode?n.menuDOM.style.transform="translate3d(".concat(e,"px,0,0)"):n.menuDOM.style.left=e+"px",n.bigScreen&&(n.conDOM.style.width=document.body.offsetWidth-(e+n.menuWidth)+1+"px")},progress:function(e,t,o){n.menuPosX=u+c*t,n.menuTouchFromX&&(k()(n.spaceDOM,"stop",!0),r(!1))},complete:function(){n.menuPosX=e,k()(n.spaceDOM,"stop",!0),r(!0)}})},n.slideTo=function(e,t){if(n._menuMoving=!0,n.menuTouchFromX)return n._menuMoving=!1,void(t&&t(!1));var o=n.menuWidth/60*4;if(n.menuPosX<e-o)n.stepTo(n.menuPosX+o);else{if(!(n.menuPosX>e+o))return n.stepTo(e),n._menuMoving=!1,void(t&&t(!0));n.stepTo(n.menuPosX-o)}n.raf(n.slideTo.bind(Object(x.a)(Object(x.a)(n)),e,t))},n.moveBack=function(){n.animateTo(n.menuPosX>1*-n.menuWidth/2?0:-n.menuWidth)},n.isMenuOpen=function(){return 0===n.menuPosX},n.openMenu=function(e){n.bigScreen||(n.spaceDOM.style.display="block",n.spaceDOM.style.opacity=0),n.animateTo(0,e)},n.closeMenu=function(e){n.animateTo(-n.menuWidth,function(t){t&&(n.spaceDOM.style.display="none"),e&&e(t)})},n.toggleMenu=function(){n.isMenuOpen()?n.closeMenu():n.openMenu()},n._children=i.a.Children.map(n.props.children,function(e){return e.type===z?i.a.cloneElement(e,{onMenuClick:n.toggleMenu}):e.type===A?i.a.cloneElement(e,{getDOM:function(e){return n.menuDOM=e}}):"content"===e.props.className?i.a.cloneElement(e,{ref:function(e){return n.conDOM=e}}):e}),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(q,null,this._children,i.a.createElement(V,{ref:function(t){return e.spaceDOM=t},onTouchStart:function(){return e.closeMenu()}}))}},{key:"componentDidMount",value:function(){"transform"===this._menuMoveMode?this.menuDOM.style.transform="translate3d(".concat(this.menuPosX,"px,0,0)"):this.menuDOM.style.left=this.menuPosX+"px",this.menuDOM.classList.add(R.menu),window.addEventListener("resize",this.handleResize),document.body.addEventListener("touchstart",this.handleTouchStart),document.body.addEventListener("touchmove",this.handleTouchMove),document.body.addEventListener("touchend",this.handleTouchEnd),document.body.addEventListener("mousemove",this.handleMouseMove),this.menuDOM.addEventListener("mouseleave",this.onMouseLeaveMenu),setTimeout(this.handleResize,20)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize),document.body.removeEventListener("touchstart",this.handleTouchStart),document.body.removeEventListener("touchmove",this.handleTouchMove),document.body.removeTouchListener("touchend",this.handleTouchEnd),document.body.removeEventListener("mousemove",this.handleMouseMove),this.menuDOM.addEventListener("mouseleave",this.onMouseLeaveMenu)}}]),t}(i.a.Component),U=n(35),J=h.default.div.withConfig({displayName:"FloatActionButton__FabWrapper",componentId:"sc-36u9r3-0"})(["z-index:103;transform:translate3d(0,0,0);.fabView{background:#FF4081;width:3.5rem;height:3.5rem;text-align:center;line-height:3.5rem;border-radius:50%;filter:drop-shadow(0.1rem 0.1rem 0.2rem rgba(112,112,112,0.7));}.fabView .iconWrapper{width:100%;height:100%;display:flex;align-items:center;}.iconWrapper svg{width:1.5rem;height:1.5rem;fill:white;display:block;margin:0 auto;transition:transform 1s;}.fabMenu{position:absolute;}.fabMenu div{position:absolute;background:#66ccff;width:2.5rem;height:2.5rem;text-align:center;line-height:2.5rem;border-radius:50%;filter:drop-shadow(0.1rem 0.1rem 0.1rem rgba(0,0,0,0.5));display:none;}"]),Y=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).menuDOM=null,n.fabChild=null,n.onClickHandler=function(){var e=!n.state.isOpen,t=500/n.fabChild.length;n.setState({isOpen:e}),n.fabChild.forEach(function(n,o){k()(n,"stop",!0),k()(n,e?"fadeIn":"fadeOut",{duration:300,delay:t*o})})},n.state={isOpen:!1},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(J,{className:"fab"},i.a.createElement("div",{className:"fabView",onClick:this.onClickHandler},i.a.createElement("div",{className:"iconWrapper"},i.a.createElement(D.a,{path:C.a,rotate:this.state.isOpen?360:315}))),i.a.createElement("div",{className:"fabMenu",ref:function(t){return e.menuDOM=t}},this.props.children))}},{key:"componentDidMount",value:function(){var e=this.menuDOM.parentNode,t=Object(U.a)(this.menuDOM.childNodes);this.fabChild=t,this.menuDOM.style.left="auto",this.menuDOM.style.top="auto",t.forEach(function(e,t){e.style.left="auto",e.style.top="auto"});var n=e.getBoundingClientRect();t[0].style.display="block";var o=t[0].getBoundingClientRect();t[0].style.display="none",this.menuDOM.style.left=n.left+e.offsetWidth/2-(o.left+o.width/2)+"px",this.menuDOM.style.top=n.top+e.offsetHeight/2-(o.top+o.height/2)+n.height+"px";var i=90/(t.length-1);t.forEach(function(e,t){e.style.left=-Math.cos(i*t*Math.PI/180)*n.width*1.2+"px",e.style.top=-Math.sin(i*t*Math.PI/180)*n.width*1.2+"px"})}}]),t}(i.a.Component),$=h.default.div.withConfig({displayName:"MusicPlayer__MusicView",componentId:"i0rlf3-0"})(["width:100%;.status{font-family:'Source Sans Pro','Courier New','Courier',monospace;}"]),K=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement($,null,i.a.createElement("span",{className:"status"},"###"))}}]),t}(i.a.Component),Q=function(){function e(){Object(c.a)(this,e),this.__during=1500,this.__timer=null,this.__parent=document.body,this.__view=e.getDefaultView(),this._touchstart=null,this._touchmove=null,this._touchend=null}return Object(s.a)(e,[{key:"setDuring",value:function(e){return this.__during=e,this}},{key:"setParent",value:function(e){return e&&(this.__parent=e),this}},{key:"setText",value:function(e){return this.__view.childNodes[0].textContent=e,this}},{key:"setTimer",value:function(e){var t=this;this.__during>0&&(e||(e=this.__during),this.__timer=setTimeout(function(){t.dismiss()},e))}},{key:"clearTimer",value:function(){this.__timer&&(clearTimeout(this.__timer),this.__timer=null)}},{key:"dismiss",value:function(t,n){var o,i=this;if(this.clearTimer(),!1!==t){for(var a in e.affectedFAB){var r=e.affectedFAB[a],u=r.view;"auto"!==r.bottom?k()(u,{bottom:r.bottom},"fast"):"auto"!==r.top&&k()(u,{top:r.top},"fast"),e.affectedFAB.splice(a,1)}!0!==t&&(o=t)}n&&(o=n);var c=document.querySelector("#SnackBar");if(c){var s=function(){c.removeEventListener("touchstart",i._touchstart),c.removeEventListener("touchmove",i._touchmove),c.removeEventListener("touchend",i._touchend),i._touchstart=null,i._touchmove=null,i._touchend=null,c.parentNode.removeChild(c),o&&o()};"none"!==getComputedStyle(c).display&&c.getBoundingClientRect().left<document.documentElement.clientWidth?k()(c,{bottom:-c.offsetHeight+"px"},"fast",s):s()}}},{key:"show",value:function(){var t=this;if(null===document.querySelector("#SnackBar")){this.__parent.appendChild(this.__view);var n,o,i,a=document.querySelector("#SnackBar");document.documentElement.clientWidth>800&&(a.style.width="400px",a.style.margin="20px"),a.addEventListener("touchstart",this._touchstart=function(e){return t.clearTimer(),n=parseInt(getComputedStyle(a).left),o=e.targetTouches[0].pageX,!1}),a.addEventListener("touchmove",this._touchmove=function(e){return(i=e.targetTouches[0].pageX)>o&&(a.style.left=n+i-o+"px"),!1}),a.addEventListener("touchend",this._touchend=function(e){return parseInt(getComputedStyle(a).left)>document.documentElement.clientWidth/3?k()(a,{left:document.documentElement.clientWidth+"px"},function(){t.dismiss()}):(k()(a,{left:0},"ease"),null===t.__timer&&t.setTimer(1500)),!1}),!(document.documentElement.clientWidth>800)&&"ontouchstart"in window||(a.onclick=function(){t.clearTimer(),k()(a,{opacity:0},function(){return t.dismiss()})});var r=document.querySelectorAll(".fab");Array.prototype.forEach.call(r,function(t,n){if("fixed"===getComputedStyle(t).position&&document.documentElement.clientHeight-t.getBoundingClientRect().top-t.offsetHeight<a.offsetHeight&&t.getBoundingClientRect().left<a.getBoundingClientRect().left+a.offsetWidth){var o={};o.view=t,o.top=getComputedStyle(t).top,o.bottom=getComputedStyle(t).bottom,"auto"!==o.bottom?k()(t,{bottom:parseInt(o.bottom)+a.offsetHeight+"px"}):"auto"!==o.top?k()(t,{top:parseInt(o.top)-a.offsetHeight+"px"}):k()(t,{bottom:a.offsetHeight+"px"});var i=!1;for(var r in e.affectedFAB)e.affectedFAB[r].view===o.view&&(i=!0);i||e.affectedFAB.push(o)}}),k()(a,{bottom:0}),this.setTimer()}else this.dismiss(!1,function(){t.show()})}}],[{key:"getDefaultView",value:function(){var e=document.implementation.createHTMLDocument();return e.body.innerHTML='<div id="SnackBar" style="width:100%;height:3rem;position:fixed;left:0px;bottom:-3rem;z-index:999;background:rgba(244,67,102,0.9);color:white;font-size:1rem;"><span style="line-height:3rem;margin-left:1.25rem;"></span></div>',e.body.children[0]}},{key:"make",value:function(t,n,o){return(new e).setParent(t).setText(n).setDuring(o)}}]),e}();Q.affectedFAB=[],Q.LENGTH_SHORT=1500,Q.LENGTH_LONG=3e3,Q.LENGTH_IMMEDIATE=-1;var Z=Q,ee=function(){function e(){Object(c.a)(this,e),this.__context=this,this.__during=1500,this.__parent=document.body,this.__view=e.getDefaultView()}return Object(s.a)(e,[{key:"setContext",value:function(e){return this.__context=e,this}},{key:"setText",value:function(e){return this.__view.textContent=e,this}},{key:"setDuring",value:function(e){return this.__during=e,this}},{key:"show",value:function(){e._queue.push(this),e._handle()}}],[{key:"getDefaultView",value:function(){var e=document.implementation.createHTMLDocument();return e.body.innerHTML='<div id="Toast" style="opacity:0;position:fixed;bottom:3rem;z-index:999;background:rgba(244,67,102,0.9);color:white;font-size:1rem;"></div>',e.body.children[0]}},{key:"_handle",value:function(){if(!e._timer&&!(e._queue.length<1)){var t=e._queue[0];t.__parent.appendChild(t.__view),k()(document.querySelector("#Toast"),{opacity:1}),e._timer=setTimeout(function(){var t=document.querySelector("#Toast");t&&k()(t,{opacity:0},function(){t.parentNode.removeChild(t),e._timer=null,e._queue.splice(0,1),e._handle()})},t.__during)}}},{key:"makeText",value:function(t,n,o){return(new e).setContext(t).setText(n).setDuring(o)}}]),e}();ee._timer=null,ee._queue=[],ee.LENGTH_SHORT=1500,ee.LENGTH_LONG=3e3;var te=ee,ne=h.default.div.withConfig({displayName:"App__AppWrapper",componentId:"sc-1yog8wc-0"})([".content{background-color:#282c34;min-height:100vh;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:calc(10px + 2vmin);color:white;}.content .fab{position:fixed;right:1rem;bottom:1rem;font-size:1rem;}.App-link{color:#61dafb;}&.x *{background:#000!important;color:#0f0!important;border:1px solid red!important;}"]),oe="ReactSnap"===navigator.userAgent,ie=function(e){function t(e){var n;Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).view=null,n.sessionStorageSupported=!1,n.handleSearch=function(e){n.toast("search "+e)};try{n.sessionStorageSupported="sessionStorage"in window&&null!==window.sessionStorage}catch(o){}return n.state={xUI:!1},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(ne,{className:this.state.xUI?"x":""},i.a.createElement(f.a,null,i.a.createElement("meta",{name:"google",content:"notranslate"}),i.a.createElement("title",null,"mynote")),i.a.createElement(M,null),i.a.createElement(G,{ref:function(t){return e.view=t}},i.a.createElement(z,{onSearch:this.handleSearch}),i.a.createElement(H,null,i.a.createElement(K,null),i.a.createElement(B,null,i.a.createElement("li",{onClick:function(){return e.props.history.push("/")}},"item1"),i.a.createElement("li",{onClick:function(){Z.make(null,"test",-1).show(),e.view.closeMenu()}},"item2"),i.a.createElement("li",{onClick:function(){return e.setState({xUI:!e.state.xUI})}},"item3"),i.a.createElement("li",{onClick:function(){return e.view.closeMenu()}},"close"))),i.a.createElement("div",{className:"content"},i.a.createElement(v.a,{exact:!0,path:"/",component:ae}),i.a.createElement(v.a,{path:"/test",component:re}),i.a.createElement(Y,null,i.a.createElement("div",{onClick:function(){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:te.LENGTH_SHORT;te.makeText(null,e,t).show()}("test")}},"1"),i.a.createElement("div",{onClick:function(){return e.props.history.push("/test")}},"2"),i.a.createElement("div",null,"3")))))}},{key:"componentDidMount",value:function(){var e=this;oe||(!function(){var e=document.createElement("script");e.src="/my-note/eruda.min.js",document.body.appendChild(e),e.onload=function(){window.eruda.init()}}(),this.sessionStorageSupported&&void 0!==sessionStorage.show_welcome||setTimeout(function(){e.sessionStorageSupported&&(sessionStorage.show_welcome=!0),Z.make(e.view.conDOM,"Welcome",Z.LENGTH_LONG).show()},1500))}}]),t}(i.a.Component);function ae(){return oe?i.a.createElement(O,null):i.a.createElement("p",null,"nothing")}function re(){return i.a.createElement("p",null,"test page")}var ue=Object(v.d)(ie);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ce=i.a.createElement(u.a,null,i.a.createElement(ue,null)),se=document.getElementById("root");se.hasChildNodes()?r.a.hydrate(ce,se):r.a.render(ce,se),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,1,2]]]);
//# sourceMappingURL=main.91c0c7b2.chunk.js.map