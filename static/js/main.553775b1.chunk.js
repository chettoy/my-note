(this["webpackJsonpmy-note"]=this["webpackJsonpmy-note"]||[]).push([[0],{11:function(e,t,n){e.exports={toolbarShadow:"Toolbar_toolbarShadow__1_Sld",ToolbarView:"Toolbar_ToolbarView__1S3YH Toolbar_toolbarShadow__1_Sld",Title:"Toolbar_Title__2gZFt",IconFather:"Toolbar_IconFather__1DCrv",MenuIcon:"Toolbar_MenuIcon__3e613 Toolbar_IconFather__1DCrv",SearchIcon:"Toolbar_SearchIcon__o2Nk3 Toolbar_IconFather__1DCrv",SearchView:"Toolbar_SearchView__36OB8 Toolbar_toolbarShadow__1_Sld"}},12:function(e,t,n){e.exports={MrMenu:"Menu_MrMenu__2xDpK",MenuContainer:"Menu_MenuContainer__2OsOu",menuHeader:"Menu_menuHeader__1E8mV",menuFooter:"Menu_menuFooter__3F0rz",copyright:"Menu_copyright__1CD6t"}},13:function(e,t,n){e.exports={FabWrapper:"FloatActionButton_FabWrapper__1EGQW",fabView:"FloatActionButton_fabView__zG0ei",iconWrapper:"FloatActionButton_iconWrapper__2r1Q4",fabMenu:"FloatActionButton_fabMenu__2AcsH"}},27:function(e,t,n){"use strict";class o{static init(e){o.proxy=e,o.inited=!0}static log(e,t){o.proxy.log(e,t)}}t.a=o},30:function(e,t,n){e.exports={BannerView:"Banner_BannerView__3l_3J",con:"Banner_con__3-4Vi",bottom:"Banner_bottom__3dyyR"}},47:function(e,t,n){"use strict";t.a={autoplay:!1,loadLive2d:!0}},51:function(e,t,n){e.exports={LoadingView:"Loading_LoadingView__1eCfI",delayFadeIn:"Loading_delayFadeIn__3xTOi",shine:"Loading_shine__3ouF6",dotAnim:"Loading_dotAnim__31Ynl"}},60:function(e,t,n){e.exports=n(88)},87:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var o=n(0),s=n.n(o),i=n(15),a=n.n(i),r=n(14),l=n(4),h=n(48),c=n(2);const u=window.mClientUtils;class d{}d.exit=()=>u&&u.exit("\u2713"),d.toggleMenu=e=>u&&u.toggleOptionsMenu("\u2713",e),d.getStatusBarHeight=()=>u?u.getStatusBarHeight("\u2713")/window.devicePixelRatio:0,d.isClient="ReactDebug"===navigator.userAgent&&u;var m=d,p=n(27);class g{static className2s(e){return"."+e.split(" ")[0]}}g.isSnap="ReactSnap"===navigator.userAgent;var _=g;const w=g.className2s;var v=n(3),f=n.n(v);class b{constructor(){this.__during=1500,this.__timer=null,this.__parent=document.body,this.__view=b.getDefaultView(),this._touchstart=null,this._touchmove=null,this._touchend=null,this._onshowed=null,this._ondismiss=null}static getDefaultView(){let e=document.implementation.createHTMLDocument();return e.body.innerHTML='<div id="SnackBar" style="width:100%;height:3rem;position:fixed;left:0px;bottom:-3rem;z-index:200;background:rgba(244,67,102,0.9);color:white;font-size:1rem;"><span style="line-height:3rem;margin-left:1.25rem;"></span></div>',e.body.children[0]}setDuring(e){return this.__during=e,this}setOnShowed(e){return this._onshowed=e,this}setOnDismiss(e){return this._ondismiss=e,this}setParent(e){return e&&(this.__parent=e),this}setText(e){return this.__view.childNodes[0].textContent=e,this}setTimer(e){this.__during>0&&(e||(e=this.__during),this.__timer=setTimeout(()=>{this.dismiss()},e))}clearTimer(){this.__timer&&(clearTimeout(this.__timer),this.__timer=null)}dismiss(e,t){let n;if(this.clearTimer(),!1!==e){for(let e=0;e<b.affectedFAB.length;e++){const t=b.affectedFAB[e],n=t.view;"auto"!==t.bottom?f()(n,{bottom:t.bottom},"fast"):"auto"!==t.top&&f()(n,{top:t.top},"fast"),b.affectedFAB.splice(e,1),e--}!0!==e&&(n=e)}t&&(n=t);const o=document.querySelector("#SnackBar");if(o){const e=()=>{o.removeEventListener("touchstart",this._touchstart),o.removeEventListener("touchmove",this._touchmove),o.removeEventListener("touchend",this._touchend),this._touchstart=null,this._touchmove=null,this._touchend=null,o.parentNode.removeChild(o),this._ondismiss&&this._ondismiss(),n&&n()};"none"!==getComputedStyle(o).display&&o.getBoundingClientRect().left<document.documentElement.clientWidth?f()(o,{bottom:-o.offsetHeight+"px"},"fast",e):e()}}show(){if(null!==document.querySelector("#SnackBar"))return void this.dismiss(!1,()=>{this.show()});this.__parent.appendChild(this.__view);const e=document.querySelector("#SnackBar");let t,n,o;document.documentElement.clientWidth>800&&(e.style.width="400px",e.style.margin="20px"),e.addEventListener("touchstart",this._touchstart=o=>(this.clearTimer(),t=parseInt(getComputedStyle(e).left),n=o.targetTouches[0].pageX,!1)),e.addEventListener("touchmove",this._touchmove=s=>(o=s.targetTouches[0].pageX,o>n&&(e.style.left=t+o-n+"px"),!1)),e.addEventListener("touchend",this._touchend=t=>(parseInt(getComputedStyle(e).left)>document.documentElement.clientWidth/3?f()(e,{left:document.documentElement.clientWidth+"px"},()=>{this.dismiss()}):(f()(e,{left:0},"ease"),null===this.__timer&&this.setTimer(1500)),!1)),(document.documentElement.clientWidth>800||!("ontouchstart"in window))&&(e.onclick=()=>{this.clearTimer(),f()(e,{opacity:0},()=>this.dismiss())});const s=document.querySelectorAll(".fab");Array.prototype.forEach.call(s,(function(t,n){if("fixed"===getComputedStyle(t).position&&document.documentElement.clientHeight-t.getBoundingClientRect().top-t.offsetHeight<e.offsetHeight&&t.getBoundingClientRect().left<e.getBoundingClientRect().left+e.offsetWidth){const n={};n.view=t,n.top=getComputedStyle(t).top,n.bottom=getComputedStyle(t).bottom,"auto"!==n.bottom?f()(t,{bottom:parseInt(n.bottom)+e.offsetHeight+"px"}):"auto"!==n.top?f()(t,{top:parseInt(n.top)-e.offsetHeight+"px"}):f()(t,{bottom:e.offsetHeight+"px"});let o=!1;for(const e in b.affectedFAB)b.affectedFAB[e].view===n.view&&(o=!0);o||b.affectedFAB.push(n)}})),"function"===typeof this._onshowed?f()(e,{bottom:0},()=>{setTimeout(this._onshowed,0)}):f()(e,{bottom:0}),this.setTimer()}static make(e,t,n){return(new b).setParent(e).setText(t).setDuring(n)}}b.affectedFAB=[],b.LENGTH_SHORT=1500,b.LENGTH_LONG=3e3,b.LENGTH_IMMEDIATE=-1;var M=b;class T{constructor(){this._context=null,this._duration=1500,this._view=T.getDefaultView(),this._deadtime=0,this._domPtr=null}static getContainerView(){let e=document.implementation.createHTMLDocument();return e.body.innerHTML='<div id="SuperToast" style="position:fixed;bottom:3rem;z-index:200;"></div>',e.body.children[0]}static getDefaultView(){let e=document.implementation.createHTMLDocument();return e.body.innerHTML='<div style="opacity:0;background:rgba(244,67,102,0.9);color:white;font-size:1rem;"></div>',e.body.children[0]}static _handle(){const e=Date.now();let t=0;for(let n=0;n<T._queue.length;n++){const o=T._queue[n]._deadtime;if(e>=o){const e=T._queue[n]._domPtr;f()(e,{opacity:0},()=>{const t=document.querySelector("#SuperToast");t.removeChild(e),null===t.children[0]&&t.parentNode.removeChild(t)}),T._queue.splice(n,1),n--}else(o<t||!t)&&(t=o)}0!==t?(T._timer=setTimeout(T._handle,t-e),T._nextHandleTime=t):(T._timer=null,T._nextHandleTime=0)}setContext(e){return this._context=e,this}setText(e){return this._view.textContent=e,this}setDuration(e){return this._duration=e,this}show(){document.querySelector("#SuperToast")||document.body.appendChild(T.getContainerView());const e=document.querySelector("#SuperToast");if(e.children[0]?e.insertBefore(this._view,e.children[0]):e.appendChild(this._view),this._deadtime=Date.now()+this._duration,this._domPtr=e.children[0],T._queue.push(this),f()(this._domPtr,{opacity:1}),T._timer){if(!(this._deadtime<T._nextHandleTime))return;clearTimeout(T._timer)}T._timer=setTimeout(T._handle,this._duration),T._nextHandleTime=this._deadtime}static makeText(e,t,n){return(new T).setContext(e).setText(t).setDuration(n)}}T._timer=null,T._queue=[],T._nextHandleTime=0,T.LENGTH_SHORT=1500,T.LENGTH_LONG=3e3;var C=T,E=n(51),S=n.n(E);class y extends s.a.Component{render(){return s.a.createElement("div",{className:S.a.LoadingView},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null,"loading..."),s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null))}}var x=y,k=n(22),L=n.n(k),D=n(24),O=n(11),F=n.n(O);const I=l.b.div.attrs({className:F.a.ToolbarView}).withConfig({displayName:"Toolbar__ToolbarView",componentId:"sc-1odss5p-0"})(["background-color:transparent;top:","px;",",","{color:",";}","{a{color:",";}}","{top:calc(","px + 3.125rem);background:rgba(255,255,255,0.6);input{box-shadow:0 0.125rem grey;}input:focus{box-shadow:0 0.125rem #FF4081;}}"],e=>e.statusBarHeight,w(F.a.MenuIcon),w(F.a.SearchIcon),e=>e.theme.ToolbarIconColor,w(F.a.Title),e=>e.theme.TitleColor,w(F.a.SearchView),e=>e.statusBarHeight),N=l.b.div.withConfig({displayName:"Toolbar__StatusBar",componentId:"sc-1odss5p-1"})(["background:",";display:",";height:","px;width:100%;position:fixed;top:0;"],e=>e.theme.StatusBarColor,e=>e.statusBarHeight?"block":"none",e=>e.statusBarHeight);N.defaultProps={theme:{StatusBarColor:"black"}},I.defaultProps={theme:{ToolbarIconColor:"white",TitleColor:"white"}};class H extends s.a.Component{constructor(e){super(e),this.canvas=null,this.handleMenuClick=()=>{this.props.onMenuClick&&this.props.onMenuClick()},this.handleSearchClick=()=>{this.state.atTop?p.a.log("(\uff61>\ufe4f<\uff61)","\u770b\u4e0d\u89c1\u6211\u770b\u4e0d\u89c1\u6211~"):this.setState({showSearch:!this.state.showSearch})},this.handleSearch=e=>{e.preventDefault();const t=e.target[0].value;this.props.onSearch&&this.props.onSearch(t)},this.handleResize=()=>{this.canvas.resize()},this.handleScroll=()=>{const e=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;this.state.atTop&&e>10?this.setState({atTop:!1}):e<10&&!this.state.atTop&&this.setState({atTop:!0})},this.state={menuIconHover:!1,atTop:!0,showSearch:!1},this.canvas=new B}render(){return s.a.createElement(I,{statusBarHeight:this.props.statusBarHeight},s.a.createElement(N,{statusBarHeight:this.props.statusBarHeight}),s.a.createElement("span",{className:F.a.MenuIcon,onClick:this.handleMenuClick,onMouseEnter:()=>this.setState({menuIconHover:!0}),onMouseLeave:()=>this.setState({menuIconHover:!1}),style:{backgroundColor:this.state.menuIconHover?"rgba(85,85,85,1)":"rgba(0,0,0,0)"}},s.a.createElement(L.a,{path:D.c})),s.a.createElement("span",{className:F.a.Title},s.a.createElement("a",{href:"."},"MyNote")),s.a.createElement("span",{className:F.a.SearchIcon,onClick:this.handleSearchClick,style:{opacity:this.state.atTop?0:1}},s.a.createElement(L.a,{path:D.b})),s.a.createElement("div",{className:F.a.SearchView,style:{display:this.state.showSearch?"block":"none"}},s.a.createElement("form",{action:"#",method:"get",onSubmit:this.handleSearch},s.a.createElement("input",{type:"search",name:"search",placeholder:"search...",autoFocus:this.state.showSearch,autoComplete:"off","x-webkit-speech":"true"}))),s.a.createElement("canvas",{ref:e=>this.canvas.is(e)}))}componentDidMount(){window.addEventListener("resize",this.handleResize),window.addEventListener("scroll",this.handleScroll),this.canvas.init(),setTimeout(this.handleResize,20)}componentWillUnmount(){window.removeEventListener("resize",this.handleResize),window.removeEventListener("scroll",this.handleScroll)}}class B{constructor(){this.canvas=null,this.ctx=null,this.width=null,this.height=null,this.loop=null,this.headerHeight=0,this.prevScroll=0,this.drawLoopLock=0,this.raf=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame).bind(window),this.is=e=>{this.canvas=e},this.init=()=>{this.ctx=this.canvas.getContext("2d")},this.resize=()=>{if(this.headerHeight=document.documentElement.clientHeight,!this.canvas)return;const e=this.canvas.getBoundingClientRect();this.width=e.width,this.height=e.height,this.canvas.width=this.width,this.canvas.height=this.height,this.draw(),0===this.drawLoopLock&&(this.raf(this.drawLoop),this.drawLoopLock=1)},this.draw=()=>{if(document.body.classList.contains("x"))this.ctx.fillStyle="#000";else{const e=this.scrollTop();let t=1;this.headerHeight&&(t=e/this.headerHeight,t=t.toFixed(2),t>1&&(t=1)),this.ctx.fillStyle="rgba(69, 157, 245, ".concat(t,")")}this.ctx.clearRect(0,0,this.width,this.height),this.ctx.fillRect(0,0,this.width,this.height)},this.drawLoop=()=>{const e=this.scrollTop();this.prevScroll!==e&&(this.draw(),this.prevScroll=e),this.raf(this.drawLoop)},this.animate=()=>{let e=0;this.loop=setInterval(()=>{this.ctx.fillStyle="rgba(".concat(5*e,", ").concat(5*e,", 255, 1.0)"),this.ctx.fillRect(0,0,this.width,this.height),e++,40===e&&(clearInterval(this.loop),this.draw())},30)},this.scrollTop=()=>document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop}}var P=H,A=n(12),R=n.n(A);const W=l.b.div.attrs({className:R.a.MrMenu}).withConfig({displayName:"Menu__MrMenu",componentId:"sc-17ffyxw-0"})(["background:",";"," span{color:",";}ul li{color:",";}ul li.active{color:",";background:",";}","{a:link{color:rgba(0,0,0,0.54);}a:visited{color:rgba(0,0,0,0.54);}a:hover{color:#0a0;}a:active{color:#0a0;}}","{color:",";}"],e=>e.theme.MenuBackground,w(R.a.menuHeader),e=>e.theme.MenuHeaderTextColor,e=>e.theme.MenuTextColor,e=>e.theme.ItemActiveTextColor,e=>e.theme.ItemActiveColor,w(R.a.menuFooter),w(R.a.copyright),e=>e.theme.MenuTextColor);W.defaultProps={theme:{MenuBackground:"rgba(255,255,255,0.87)",MenuHeaderTextColor:"white",MenuTextColor:"rgba(0,0,0,0.87)",ItemActiveTextColor:"#2196f3",ItemActiveColor:"#ddd"}};class X extends s.a.Component{render(){return s.a.createElement(W,{ref:e=>{this.props.getDOM&&this.props.getDOM(e)}},s.a.createElement("div",{className:R.a.menuHeader},s.a.createElement("span",null,"menu")),s.a.createElement("div",{className:R.a.MenuContainer},this.props.children),s.a.createElement("div",{className:R.a.menuFooter},s.a.createElement("span",{className:R.a.copyright},"\xa9 me")))}}class V extends s.a.Component{constructor(e){super(e),this.getItemList=()=>{let e=0;return s.a.Children.map(this.props.children,t=>t?s.a.cloneElement(t,{key:e,className:this.state.currentIndex===e?"active":"",onClick:e=>{this.handleItemClick(e),t.props.onClick&&t.props.onClick(e)},index:e++}):null)},this.handleItemClick=e=>{this.setState({currentIndex:parseInt(e.currentTarget.getAttribute("index"))})},this.state={currentIndex:0}}render(){return s.a.createElement("ul",null,this.getItemList())}}var z=X,q=n(9),j=n.n(q);class G extends s.a.Component{render(){return s.a.createElement("canvas",{className:j.a.mask,ref:e=>G.container=e})}componentDidMount(){G.ctx=G.container.getContext("2d")}static onResize(e,t){G.container.width=e,G.container.height=t}static onMotionStart(e){}static onMotionMove(){}static onMotionEnd(){}}class U extends s.a.Component{constructor(...e){super(...e),this.raf=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame).bind(window),this.menuDOM=null,this.spaceDOM=null,this.conDOM=null,this.bigScreen=!1,this.menuPosX=-316,this.menuTempOpen=!1,this._menuMoveMode="transform",this._menuMoving=!1,this.getChildren=e=>s.a.Children.map(this.props.children,e=>e.type===P?s.a.cloneElement(e,{onMenuClick:this.toggleMenu}):e.type===z?s.a.cloneElement(e,{getDOM:e=>this.menuDOM=e}):"content"===e.props.className?s.a.cloneElement(e,{ref:e=>this.conDOM=e}):e),this.handleResize=e=>{const t=document.documentElement.clientWidth,n=document.documentElement.clientHeight;G.onResize(t,n),console.log("resize(".concat(t,", ").concat(n,")")),this.bigScreen=t>550,this.menuWidth=this.menuDOM.getBoundingClientRect().width,e?this.moveBack():this.stepTo(-this.menuWidth)},this.prevTouchMenuPosX=null,this.menuTouchFromX=null,this.menuTouchMoveX=null,this.menuTouchPrevX=null,this.menuPrevLoopTime=null,this.menuDragSpeed=0,this.touchMoveLoop=()=>{if(null==this.menuTouchFromX)return;if(null==this.menuTouchMoveX)return void this.raf(this.touchMoveLoop);let e=this.prevTouchMenuPosX+this.menuTouchMoveX-this.menuTouchFromX;e<-this.menuWidth&&(e=-this.menuWidth),e>0&&(e=0),this.stepTo(e);const t=Date.now();this.menuDragSpeed=(this.menuTouchMoveX-this.menuTouchPrevX)/(t-this.menuPrevLoopTime),this.menuTouchPrevX=this.menuTouchMoveX,this.menuPrevLoopTime=t,this.raf(this.touchMoveLoop)},this.handleTouchStart=e=>{G.onMotionStart(e);const t=e.targetTouches[0];this.prevTouchMenuPosX=this.menuPosX,t.pageX<this.prevTouchMenuPosX+this.menuWidth+20&&t.pageY>50&&(this.menuTouchFromX=t.pageX,this.menuTouchPrevX=this.menuTouchFromX,this.menuDOM.classList.add(j.a.touching),this.spaceDOM.classList.add(j.a.touching),this.conDOM.classList.add(j.a.touching),this.beforeOpenMenu(),this.menuPrevLoopTime=Date.now(),this.raf(this.touchMoveLoop))},this.handleTouchMove=e=>{G.onMotionMove(e);const t=e.targetTouches[0];if(null!=this.menuTouchFromX)return this.menuTouchMoveX=t.pageX,!1},this.handleTouchEnd=e=>{if(G.onMotionEnd(e),null!=this.menuTouchFromX){if(this.menuTouchFromX=null,this.menuTouchMoveX=null,this.menuTouchPrevX=null,this.prevTouchMenuX=null,this.menuDOM.classList.remove(j.a.touching),this.spaceDOM.classList.remove(j.a.touching),this.conDOM.classList.remove(j.a.touching),Math.abs(this.menuDragSpeed)>.5){const e=this.menuDragSpeed>0?0:-this.menuWidth,t=Math.abs((e-this.menuPosX)/this.menuDragSpeed);this.animateTo(e,t>50?t:50,t=>{e===-this.menuWidth&&t&&this.afterCloseMenu()})}else this.moveBack();this.menuPrevLoopTime=null,this.menuDragSpeed=0}},this.handleMouseMove=e=>{0===e.pageX&&(0===this.menuPosX||this._menuMoving||(this.openMenu(),this.menuTempOpen=!0))},this.onMouseLeaveMenu=e=>{this.menuTempOpen&&"close"!==this._menuMoving&&(this.closeMenu(),this.menuTempOpen=!1)},this.stepTo=e=>{this.menuPosX=e,"transform"===this._menuMoveMode?this.menuDOM.style.transform="translate3d(".concat(e,"px,0,0)"):this.menuDOM.style.left=e+"px",this.spaceDOM.style.opacity="".concat(e/this.menuWidth+1),this.bigScreen&&(this.conDOM.style.width=document.body.offsetWidth-(e+this.menuWidth)+1+"px")},this.animateTo=(e,t,n)=>{let o=520,s=null;"number"===typeof t&&(o=t),"function"===typeof t&&(s=t),"function"===typeof n&&(s=n);const i=e=>{this._menuMoving=null,s&&s(e)};let a;a="open"===e?0:"close"===e?-this.menuWidth:e;const r=this.menuPosX,l=a-r;this._menuMoving=e,f()(this.spaceDOM,"stop",!0),f()(this.spaceDOM,{tween:[0,1]},{duration:o,easing:"easeInOutQuad",begin:()=>{this.bigScreen?this.conDOM.style.width=document.body.offsetWidth-(a+this.menuWidth)+1+"px":this.conDOM.style.width="100%"},progress:(e,t,n,o,s)=>{if(null===s)return;const a=r+l*(1-s);this.stepTo(a),this.menuTouchFromX&&(f()(this.spaceDOM,"stop",!0),i(!1))},complete:()=>{i(!0)}})},this.moveBack=e=>{this.menuPosX>1*-this.menuWidth/2?this.openMenu(e):this.closeMenu(e)},this.isMenuOpen=()=>0===this.menuPosX,this.beforeOpenMenu=()=>{this.bigScreen||(this.spaceDOM.style.display="block",document.body.style.overflow="hidden")},this.afterCloseMenu=()=>{this.spaceDOM.style.display="none",document.body.style.overflow="unset"},this.openMenu=e=>{this.beforeOpenMenu(),this.animateTo("open",e)},this.closeMenu=e=>{this.animateTo("close",t=>{t&&this.afterCloseMenu(),e&&e(t)})},this.toggleMenu=()=>{this.isMenuOpen()?this.closeMenu():this.openMenu()}}render(){return s.a.createElement("div",{className:j.a.DrawerView},s.a.createElement(G,null),this.getChildren(),s.a.createElement("div",{className:j.a.SpaceView,ref:e=>this.spaceDOM=e,onTouchStart:()=>this.closeMenu()}))}componentDidMount(){"transform"===this._menuMoveMode?this.menuDOM.style.transform="translate3d(".concat(this.menuPosX,"px,0,0)"):this.menuDOM.style.left=this.menuPosX+"px",this.menuDOM.classList.add(j.a.menu),this.conDOM.classList.add(j.a.content),window.addEventListener("resize",this.handleResize),document.body.addEventListener("touchstart",this.handleTouchStart),document.body.addEventListener("touchmove",this.handleTouchMove),document.body.addEventListener("touchend",this.handleTouchEnd),document.body.addEventListener("mousemove",this.handleMouseMove),this.menuDOM.addEventListener("mouseleave",this.onMouseLeaveMenu),setTimeout(this.handleResize,20)}componentWillUnmount(){window.removeEventListener("resize",this.handleResize),document.body.removeEventListener("touchstart",this.handleTouchStart),document.body.removeEventListener("touchmove",this.handleTouchMove),document.body.removeEventListener("touchend",this.handleTouchEnd),document.body.removeEventListener("mousemove",this.handleMouseMove),this.menuDOM.addEventListener("mouseleave",this.onMouseLeaveMenu)}}var J=U,Y=n(13),$=n.n(Y);const Q=l.b.div.attrs({className:$.a.FabWrapper}).withConfig({displayName:"FloatActionButton__FabWrapper",componentId:"sc-36u9r3-0"})(["","{background:",";}"," svg{fill:",";}"," div{background:",";}"],w($.a.fabView),e=>e.theme.FabColor,w($.a.iconWrapper),e=>e.theme.FabIconColor,w($.a.fabMenu),e=>e.theme.FabMenuColor);Q.defaultProps={theme:{FabColor:"#FF4081",FabIconColor:"white",FabMenuColor:"#66ccff"}};class K extends s.a.Component{constructor(e){super(e),this.menuDOM=null,this.fabChild=null,this.onClickHandler=()=>{const e=!this.state.isOpen,t=500/this.fabChild.length;this.setState({isOpen:e}),this.fabChild.forEach((n,o)=>{f()(n,"stop",!0),f()(n,e?"fadeIn":"fadeOut",{duration:300,delay:t*o})})},this.state={isOpen:!1}}render(){return s.a.createElement(Q,{className:"fab"},s.a.createElement("div",{className:$.a.fabView,onClick:this.onClickHandler},s.a.createElement("div",{className:$.a.iconWrapper},s.a.createElement(L.a,{path:D.a,rotate:this.state.isOpen?360:315}))),s.a.createElement("div",{className:$.a.fabMenu,ref:e=>this.menuDOM=e},this.props.children))}componentDidMount(){const e=this.menuDOM.parentNode,t=[...this.menuDOM.childNodes];this.fabChild=t,this.menuDOM.style.left="auto",this.menuDOM.style.top="auto",t.forEach((e,t)=>{e.style.left="auto",e.style.top="auto"});const n=e.getBoundingClientRect();t[0].style.display="block";const o=t[0].getBoundingClientRect();t[0].style.display="none",this.menuDOM.style.left=n.left+e.offsetWidth/2-(o.left+o.width/2)+"px",this.menuDOM.style.top=n.top+e.offsetHeight/2-(o.top+o.height/2)+n.height+"px";const s=90/(t.length-1);t.forEach((e,t)=>{e.style.left=-Math.cos(s*t*Math.PI/180)*n.width*1.2+"px",e.style.top=-Math.sin(s*t*Math.PI/180)*n.width*1.2+"px"})}}var Z=K,ee=n(30),te=n.n(ee);class ne extends s.a.Component{constructor(e){super(e),this.state={loaded:!1}}render(){return s.a.createElement("header",{className:te.a.BannerView},s.a.createElement("span",{className:te.a.con},s.a.createElement("span",null,"..."),s.a.createElement("br",null),s.a.createElement("i",null,"under construction")),s.a.createElement("span",{className:te.a.bottom},this.state.loaded||s.a.createElement(x,null)))}componentDidMount(){_.isSnap||this.setState({loaded:!0})}}var oe=ne;class se{}se.proxy=null,se.load=()=>{return(e="/my-note/live2d-widget/live2d.min.js",t="js",new Promise((n,o)=>{let s;"css"===t?(s=document.createElement("link"),s.rel="stylesheet",s.href=e):"js"===t&&(s=document.createElement("script"),s.src=e),s&&(s.async=!1,s.onload=()=>n(e),s.onerror=()=>o(e),document.head.appendChild(s))})).then(()=>n.e(3).then(n.bind(null,96))).then(({initWidget:e})=>e({waifuPath:"/my-note/live2d-widget/waifu-tips.json",apiPath:"https://live2d.fghrsh.net/api/"})).then(e=>{se.proxy=e});var e,t},se.showMessage=e=>{se.proxy.showMessage(e,5e3,8)};var ie=se,ae=n(91),re=n(90);const le=l.b.div.withConfig({displayName:"CardView",componentId:"p8qik2-0"})(["background:",";color:",";box-shadow:0 0.2rem 0.2rem rgba(0,0,0,0.54);padding:0.625rem 1rem;margin:1rem auto;box-sizing:border-box;"],e=>e.theme.CardColor,e=>e.theme.TextColor);le.defaultProps={theme:{CardColor:"white",TextColor:"black"}};var he=le;var ce=Object(l.b)(he).withConfig({displayName:"Card",componentId:"sc-7gf40a-0"})(["position:absolute;top:calc(","px + 3.125rem);left:50%;transform:translate(-50%,0);min-height:50vh;width:40rem;max-width:100%;@media screen and (min-width:100rem){width:50rem;}"],m.getStatusBarHeight());function ue(){return s.a.createElement(ce,null,s.a.createElement("p",null,"test page"))}var de=n(57),me=n(55),pe=n(56),ge=n.n(pe),_e=n(32),we=n.n(_e),ve=n(19),fe=n.n(ve);class be{constructor(e,t){this.__id=null,this.__content=null,this.__html=null,this.__title=null,t?this.__initFromCon(e,t):this.__parseFromJSON(e)}__initFromCon(e,t){this.__id=e,this.__content=t;const n=/^(-{3,})\n((\w+): ([\S\s]*?)\n)+\1\n\n/.exec(t);if(null!=n&&n.length>1){const e=n[0].split("\n"),o=/^(\w+): (['"]?)([\S\s]*)\2$/,s=new Map;let i;for(let t=1;t<e.length-3;t++)i=o.exec(e[t]),i&&i.length>3&&s.set(i[1],i[3]);s.has("title")&&(this.__title=s.get("title")),this.__html=this.__process(t.substr(n[0].length))}else{this.__html=this.__process(t);const e=/<h1[\s\S]*>([\s\S]*)<\/h1>/.exec(this.__html);null!=e&&e.length>1&&(this.__title=e[1])}}__parseFromJSON(e){if("string"===typeof e&&(e=JSON.parse(e)),!("id"in e&&"con"in e&&"html"in e))throw console.log(e),new Error("invalid ConData json");this.__id=e.id,this.__content=e.con,this.__html=e.html,e.title&&(this.__title=e.title)}__process(e){const t=new we.a.Tokenizer,n=t.codespan;return t.codespan=function(e){const t=e.match(/(\$+)([^\$\n]+?)\1/);return t?{type:"html",raw:t[0],text:fe.a.renderToString(t[2].trim(),{displayMode:"$$"===t[1],throwOnError:!1})}:n.apply(this,arguments)},we()(e,{tokenizer:t})}getState(){return{id:this.__id,con:this.__content,html:this.__html,title:this.__title}}toString(){return JSON.stringify(this.getState())}getHtml(){return this.__html}getId(){return this.__id}getSource(){return this.__content}getTitle(){return this.__title}static parse(e){return new be(e)}}var Me=be;var Te=class{constructor(){this.conDataCache=null,this.path="https://cdn.jsdelivr.net/gh/chettoy/my-note@gh-pages/content"}loadContent(e,t){const n="_id_".concat(e);if(this._checkCache(),this.conDataCache.has(n)){const e=this.conDataCache.get(n);if(null!==e)return void(t&&t(200,e,!0))}ge.a.get("".concat(this.path,"/").concat(e,".md")).then(o=>{const s=new Me(e,o.data);this.conDataCache.set(n,s),t&&t(o.status,s,!1)}).catch(n=>{if(!n.response)throw n;404!==n.response.status&&console.log("load con[id=".concat(e,"]: ").concat(n)),t&&t(n.response.status,null,!1)})}_loadItems(e){return new Promise((t,n)=>{let o=0;const s=()=>{this.loadContent(o,(i,a,r)=>{200===i?(e(i,a,r),o++,o>10?n("over 10 content"):s()):404===i||0===i?t():n(i)})};this.loadContent("header",e=>{200===e&&s()})})}reqUpdate(e){return new Promise((t,n)=>{this._loadItems((t,n,o)=>{o||e(n,[...this.conDataCache.values()])}).then(()=>{console.log("content loaded"),this._saveCache(),t()}).catch(e=>{console.log("content load error: "+e),n(e)})})}reqCache(e){this._checkCache(),e([...this.conDataCache.values()])}_saveCache(){if(null===this.conDataCache)return;if(!window.sessionStorage)return;const e=[];var t,n=Object(me.a)(this.conDataCache);try{for(n.s();!(t=n.n()).done;){const n=Object(de.a)(t.value,2)[1];e.push(n.getState())}}catch(o){n.e(o)}finally{n.f()}sessionStorage.setItem("con_cache",JSON.stringify(e))}_checkCache(){if(null!==this.conDataCache)return;if(this.conDataCache=new Map,!window.sessionStorage)return;const e=sessionStorage.getItem("con_cache");e&&JSON.parse(e).forEach((e,t)=>{const n=new Me(e),o="_id_".concat(n.getId());this.conDataCache.has(o)||this.conDataCache.set(o,n)})}},Ce=n(25),Ee=n.n(Ce);var Se=Object(l.b)(he).withConfig({displayName:"ConCard",componentId:"sc-1r8qd8h-0"})(["width:40rem;max-width:100%;@media screen and (min-width:100rem){width:50rem;}"]);class ye extends s.a.Component{render(){const e=this.props.data,t=e.getTitle();if(t){let n=Ee.a.sanitize(e.getHtml(),{ALLOWED_TAGS:[],KEEP_CONTENT:!0});return n.substr(0,t.length)===t&&(n=n.substr(t.length,n.length)),n.length>100&&(n="".concat(n.substr(0,100),"...")),s.a.createElement(Se,this.props,s.a.createElement(r.b,{className:"con-preview post-title-link",to:"".concat(this.props.match.url,"id/").concat(e.getId()),onClick:this.onPreviewClick},t),s.a.createElement("p",{className:"con-preview"},n))}{const t=Ee.a.sanitize(e.getHtml());return s.a.createElement(Se,Object.assign({},this.props,{dangerouslySetInnerHTML:{__html:t}}))}}}var xe=Object(c.g)(ye);class ke extends s.a.Component{constructor(e){super(e),this.mounted=!1,this.state={conList:[],loading:!0}}componentDidMount(){var e,t;this.mounted=!0,this.setState({loading:!1});const n=this.props.conLoader;n.reqCache(e=>{this.mounted&&this.setState({conList:e})});const o=null!==(e=null===(t=window.sessionStorage)||void 0===t?void 0:t.getItem("conListUpdateTime"))&&void 0!==e?e:0;console.log("lastUpdateTime: "+o),Math.abs(Date.now()-o)<12e4||(console.log("updating content..."),n.reqUpdate((e,t)=>{this.mounted&&this.setState({conList:t})}).then(()=>{window.sessionStorage&&sessionStorage.setItem("conListUpdateTime",Date.now())}))}componentWillUnmount(){this.mounted=!1}render(){return this.state.loading?s.a.createElement(x,null):this.state.conList.map((e,t)=>s.a.createElement(xe,{key:e.getId(),data:e}))}}var Le=ke;class De extends s.a.Component{constructor(e){super(e),this.mounted=!1,this.state={html:null}}componentDidMount(){this.mounted=!0;const e=this.props.conLoader;e.loadContent(this.props.match.params.id,(t,n,o)=>{200===t&&n?(this.mounted&&this.setState({html:Ee.a.sanitize(n.getHtml(),{ADD_TAGS:["semantics","annotation"]})}),o||e._saveCache()):this.mounted&&this.setState({html:"<p>Failed to load (".concat(t,")</p>")})})}componentWillUnmount(){this.mounted=!1}render(){return null===this.state.con?s.a.createElement(x,null):s.a.createElement(Se,{dangerouslySetInnerHTML:{__html:this.state.html}})}}var Oe=De;n(89),n(85),n(86);const Fe=Object(l.b)(ce).withConfig({displayName:"ContentPage__ConContainer",componentId:"ra0fv2-0"})(["background:transparent;box-shadow:none;margin:0;padding:0;width:auto;height:auto;font-size:1rem;line-height:1.5rem;@media screen and (max-width:549px){padding:0 0.375rem;}h1{font-size:1.5rem;}a.con-preview{color:#2196f3;font-size:1.5rem;}iframe,video,img{max-width:100%;height:auto;}blockquote{margin:0;padding:0.3rem 0.5rem;border-left:0.25rem solid #0c0;background:#f5f2f0;}pre{overflow:auto;}"]);class Ie extends s.a.Component{constructor(e){super(e),this.loader=new Te,this.viewRef=s.a.createRef(),this.routes={list:{name:"list",path:"/"},detail:{name:"detail",path:"/id/:id"}},this.currentView=(({pathname:e})=>Object(c.f)(e,{path:this.routes.detail.path})?this.routes.detail.name:Object(c.f)(e,{path:this.routes.list.path,exact:!0})?this.routes.list.name:"")(e.location)}getWrapperDOM(){return this.viewRef.current.parentNode}getTop(e){const t=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;return e.parentNode.getBoundingClientRect().top+t}saveScroll(){const e="conPageScroll_"+this.currentView,t=this.getWrapperDOM();window.sessionStorage[e]=-t.getBoundingClientRect().top}recoverScroll(){const e="conPageScroll_"+this.currentView;if(!(e in window.sessionStorage))return;const t=this.getWrapperDOM();f()(t,"scroll",{offset:window.sessionStorage[e]})}componentDidMount(){this._scrollRestoration=window.history.scrollRestoration,window.history.scrollRestoration="manual",this.unlistenHistory=this.props.history.listen((e,t)=>{Object(c.f)(e.pathname,{path:this.routes.detail.path})?(this.saveScroll(),this.currentView=this.routes.detail.name,f()(this.getWrapperDOM(),"scroll")):Object(c.f)(e.pathname,{path:this.routes.list.path,exact:!0})&&(this.currentView=this.routes.list.name,this.recoverScroll())}),this.recoverScroll()}componentWillUnmount(){this.saveScroll(),window.history.scrollRestoration=this._scrollRestoration,this.unlistenHistory()}render(){return s.a.createElement("div",{ref:this.viewRef},s.a.createElement(c.b,{render:({location:e,match:t})=>s.a.createElement(ae.a,null,s.a.createElement(re.a,{key:e.pathname,classNames:"router",timeout:500},s.a.createElement(Fe,null,s.a.createElement(c.d,{location:e},s.a.createElement(c.b,{path:this.routes.list.path,exact:!0,render:e=>s.a.createElement(Le,Object.assign({},e,{conLoader:this.loader}))}),s.a.createElement(c.b,{path:this.routes.detail.path,render:e=>s.a.createElement(Oe,Object.assign({},e,{conLoader:this.loader}))}),s.a.createElement(c.b,{render:()=>{console.log("ConPage: pathname=".concat(e.pathname,", match.url=").concat(t.url))}})))))}))}}var Ne=Object(c.g)(Ie);const He=e=>{const t=e.pathname;return"/"===t||t.startsWith("/id/")?"con":t};class Be extends s.a.Component{render(){return s.a.createElement(c.b,{render:({location:e})=>s.a.createElement(ae.a,{className:"CardWrapper"},s.a.createElement(re.a,{key:He(e),classNames:"router",timeout:500},s.a.createElement(c.d,{location:e},s.a.createElement(c.b,{exact:!0,path:"/",render:Ne}),s.a.createElement(c.b,{path:"/id/",render:Ne}),s.a.createElement(c.b,{exact:!0,path:"/test",render:ue}),s.a.createElement(c.b,{exact:!0,path:"/404",render:()=>s.a.createElement("div",null,"Not Found")}),s.a.createElement(c.a,{from:"*",to:"/"}))))})}}var Pe=Be;var Ae={AppBackground:"#282c34",CardColor:"rgba(32,33,36,0.92)",TextColor:"rgba(255,255,255,0.87)",FabColor:"#ff4081",FabIconColor:"white",FabMenuColor:"#66ccff",MenuBackground:"rgba(255,255,255,0.87)",MenuHeaderTextColor:"white",MenuTextColor:"rgba(0,0,0,0.87)",ItemActiveTextColor:"#2196f3",ItemActiveColor:"#ddd",StatusBarColor:"#2196f3",ToolbarIconColor:"white",TitleColor:"white"};var Re={AppBackground:"url('https://img.xjh.me/random_img.php?type=bg&ctype=nature&return=302')",CardColor:"rgba(255,255,255,0.92)",TextColor:"rgba(0,0,0,0.87)",FabColor:"#ff4081",FabIconColor:"white",FabMenuColor:"#66ccff",MenuBackground:"rgba(255,255,255,0.87)",MenuHeaderTextColor:"white",MenuTextColor:"rgba(0,0,0,0.87)",ItemActiveTextColor:"#2196f3",ItemActiveColor:"#ddd",StatusBarColor:"#2196f3",ToolbarIconColor:"black",TitleColor:"white"},We=n(47);n(87);const Xe=s.a.lazy(()=>n.e(4).then(n.bind(null,95))),Ve=(e,t=C.LENGTH_SHORT)=>{C.makeText(null,e,t).show()},ze=l.b.canvas.attrs({className:"bg"}).withConfig({displayName:"App__BackgroundCanvas",componentId:"sc-1yog8wc-0"})(["background:",";"],e=>e.theme.AppBackground);ze.defaultProps={theme:{AppBackground:"#e0e0e0"}};class qe extends s.a.Component{constructor(e){super(e),this.view=null,this.sessionStorageSupported=!1,this.themeList=[Re,Ae],this.loadSet=new Set(["app","bg"]),this.getTheme=()=>this.themeList[this.state.currentTheme],this.updateProgress=e=>{if(!this.loadSet.has(e))return;this.loadSet.delete(e);const t=window.NProgress;t?this.loadSet.size>0?t.inc():t.done():console.log("NProgress not found")},this.handleSearch=e=>{Ve("search "+e)},this.goTo=e=>{e!==this.props.location.pathname&&("/"===e?this.props.history.goBack():this.props.history.push(e))};try{this.sessionStorageSupported="sessionStorage"in window&&null!==window.sessionStorage}catch(t){}this.state={isLoading:!0,currentTheme:0},p.a.init({context:this,log:(e,t)=>{const n="[".concat(e,"] ").concat(t);console.log(n),C.makeText(this,n,C.LENGTH_LONG).show()}})}render(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(h.a,null,s.a.createElement("meta",{name:"google",content:"notranslate"}),s.a.createElement("title",null,"mynote")),s.a.createElement(l.a,{theme:this.getTheme()},s.a.createElement(J,{ref:e=>this.view=e},s.a.createElement(ze,null),s.a.createElement(P,{statusBarHeight:m.getStatusBarHeight(),onSearch:this.handleSearch}),s.a.createElement(X,null,s.a.createElement(s.a.Suspense,{fallback:s.a.createElement(x,null)},this.state.isLoading?null:s.a.createElement(Xe,null)),s.a.createElement(V,null,s.a.createElement("li",{onClick:()=>this.goTo("/")},"item1"),s.a.createElement("li",{onClick:()=>{M.make(null,"test",-1).setOnShowed(this.view.closeMenu).show(),setTimeout(this.view.closeMenu,2e3)}},"item2"),s.a.createElement("li",{onClick:()=>{document.body.classList.contains("x")?document.body.classList.remove("x"):document.body.classList.add("x")}},"item3"),s.a.createElement("li",{onClick:()=>{this.state.currentTheme<this.themeList.length-1?this.setState({currentTheme:this.state.currentTheme+1}):this.setState({currentTheme:0})}},"item4"),m.isClient&&s.a.createElement("li",{onClick:()=>m.exit()},"Exit"),s.a.createElement("li",{onClick:()=>this.view.closeMenu()},"close"))),s.a.createElement("main",{className:"content"},s.a.createElement(Z,null,s.a.createElement("div",{onClick:()=>Ve("test")},"1"),s.a.createElement("div",{onClick:()=>this.goTo("/test")},"2"),s.a.createElement("div",null,"3")),s.a.createElement(oe,null),this.state.isLoading||s.a.createElement(Pe,null)))))}componentDidMount(){_.isSnap||(this.setState({isLoading:!1}),this.updateProgress("app"),(()=>{const e=this.getTheme().AppBackground.match(/url\((['"])(.+)\1\)/);if(!e)return;const t=e[2],n=new Image;n.src=t,n.complete?this.updateProgress("bg"):n.onload=()=>{this.updateProgress("bg")}})(),((e=document.querySelectorAll("style[data-styled]"))=>{2===e.length&&e[0].innerHTML&&!e[1].innerHTML&&e[0].parentNode.removeChild(e[0])})(),We.a.loadLive2d&&ie.load(),this.sessionStorageSupported&&void 0!==sessionStorage.show_welcome||setTimeout(()=>{this.sessionStorageSupported&&(sessionStorage.show_welcome=!0),M.make(this.view.conDOM,"Welcome",M.LENGTH_LONG).show()},1500))}}var je=Object(c.g)(qe);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));const Ge=s.a.createElement(r.a,null,s.a.createElement(je,null)),Ue=document.getElementById("root");Ue.hasChildNodes()?a.a.hydrate(Ge,Ue):a.a.render(Ge,Ue),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})},9:function(e,t,n){e.exports={DrawerView:"Framework_DrawerView__2JpzE",menu:"Framework_menu__3jjbn",animating:"Framework_animating__3ZPuv",content:"Framework_content__1LDfu",touching:"Framework_touching__2bvBT",SpaceView:"Framework_SpaceView__3dTD-",mask:"Framework_mask__1c7Bi"}}},[[60,1,2]]]);
//# sourceMappingURL=main.553775b1.chunk.js.map