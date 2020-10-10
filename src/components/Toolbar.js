import React from 'react';
import styled from 'styled-components/macro';
import Icon from '@mdi/react';
import {mdiMenu, mdiMagnify} from '@mdi/js';
import { c2s } from '../common/MyCommon';
import MessageHandler from '../common/MessageHandler';
import styles from './Toolbar.module.scss';

const ToolbarView = styled.div.attrs({
  className: styles.ToolbarView
})`
  background-color: transparent;//#2196f3;
  top: ${props => props.statusBarHeight}px;
  
  ${c2s(styles.MenuIcon)},
  ${c2s(styles.SearchIcon)} {
    color: ${props => props.theme.ToolbarIconColor};
  }
  
  ${c2s(styles.Title)} {
    a { color: ${props => props.theme.TitleColor}; }
  }
  
  ${c2s(styles.SearchView)} {
    top: calc(${props => props.statusBarHeight}px + 3.125rem);
    background: rgba(255,255,255,0.6);
    input {
      box-shadow: 0 0.125rem grey;
    }
    input:focus {
      box-shadow: 0 0.125rem #FF4081;
    }
  }
`;

const StatusBar = styled.div`
  background: ${props => props.theme.StatusBarColor};
  display: ${props => props.statusBarHeight? 'block': 'none'};
  height: ${props => props.statusBarHeight}px;
  width: 100%;
  position: fixed;
  top: 0;
`;

StatusBar.defaultProps = {
  theme: {StatusBarColor: "black"}
};

ToolbarView.defaultProps = {
  theme: {
    ToolbarIconColor: "white",
    TitleColor: "white"
  }
};

class Toolbar extends React.Component {
  canvas = null;

  constructor(props) {
    super(props);
    this.state = {
      menuIconHover: false,
      atTop: true,
      showSearch: false
    };
    this.canvas = new ToolbarCanvas();
  }

  handleMenuClick = () => {
    if (this.props.onMenuClick) {
      this.props.onMenuClick();
    }
  }

  handleSearchClick = () => {
    if (this.state.atTop) {
      MessageHandler.log("(｡>﹏<｡)", "看不见我看不见我~");
    }
    this.setState({showSearch: !this.state.showSearch});
  }

  handleSearch = e => {
    e.preventDefault();
    const text = e.target[0].value;
    if (this.props.onSearch) {
      this.props.onSearch(text);
    }
  }

  render() {
    return (
      <ToolbarView statusBarHeight={this.props.statusBarHeight}>
        <StatusBar statusBarHeight={this.props.statusBarHeight} />
        <span className={styles.MenuIcon}
          onClick={this.handleMenuClick}
          onMouseEnter={() => this.setState({menuIconHover: true})}
          onMouseLeave={() => this.setState({menuIconHover: false})}
          style={{backgroundColor: this.state.menuIconHover? 'rgba(85,85,85,1)': 'rgba(0,0,0,0)'}}>
            <Icon path={mdiMenu} />
        </span>
        <span className={styles.Title}><a href=".">MyNote</a></span>
        <span className={styles.SearchIcon}
          onClick={this.handleSearchClick}
          style={{opacity: this.state.atTop? 0: 1}}>
          <Icon path={mdiMagnify} />
        </span>
        <div className={styles.SearchView}
          style={{display: this.state.showSearch? 'block': 'none'}}>
          <form action="#" method="get" onSubmit={this.handleSearch}>
            <input type="search" name="search" placeholder="search..." autoFocus={this.state.showSearch} autoComplete="off" x-webkit-speech="true"/>
          </form>
        </div>
        <canvas ref={c => this.canvas.is(c)}></canvas>
      </ToolbarView>
    );
  }
    
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("scroll", this.handleScroll);
    this.canvas.init();
    setTimeout(this.handleResize, 20);
  }
  
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("scroll", this.handleScroll);
  }
  
  handleResize = () => {
    this.canvas.resize();
  }
  
  handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    if (this.state.atTop && scrollTop > 10) {
      this.setState({atTop: false});
    }else if (scrollTop < 10 && !this.state.atTop) {
      this.setState({atTop: true});
    }
  }
}

class ToolbarCanvas
{
  canvas = null;
  ctx = null;
  width = null;
  height = null;
  loop = null;
  
  headerHeight = 0;
  prevScroll = 0;
  drawLoopLock = 0;
  staticTime = 0;
  
  raf = (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame).bind(window);
  
  is = canvas => {
    this.canvas = canvas;
  }
  
  init = () => {
    this.ctx = this.canvas.getContext("2d");
  }
  
  resize = () => {
    this.headerHeight = document.documentElement.clientHeight;
    if (!this.canvas) return;
    const rect = this.canvas.getBoundingClientRect();
    this.width = rect.width;
    this.height = rect.height;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.draw();
    if (this.drawLoopLock === 0) {
      this.raf(this.drawLoop);
      this.drawLoopLock = 1;
    }
  }
  
  fill = (color) => {
    this.ctx.fillStyle = color;
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.fillRect(0, 0, this.width, this.height);
  }
  
  draw = () => {
    if (document.body.classList.contains("x")) {
      this.fill('#000');
    }else{
      const scrollTop = this.scrollTop();
      let a = 1.0;
      if (this.headerHeight) {
        a = scrollTop / this.headerHeight;
        a = a.toFixed(2);
        if (a > 1.0) a = 1.0;
      }
      this.fill(`rgba(69, 157, 245, ${a})`);
    }
  }
  
  drawLoop = () => {
    const scroll = this.scrollTop();
    if (this.prevScroll === scroll) {
      this.staticTime++;
      if (this.staticTime === 100) {
        this.fill('transparent');
      }
    }else{
      this.staticTime = 0;
      this.draw();
      this.prevScroll = scroll;
    }
    this.raf(this.drawLoop);
  }
  
  animate = () => {
    let frame = 0;
    this.loop = setInterval(() => {
      this.ctx.fillStyle = `rgba(${frame * 5}, ${frame * 5}, 255, 1.0)`;
      this.ctx.fillRect(0, 0, this.width, this.height);
      frame++;
      if (frame === 40) {
        clearInterval(this.loop);
        this.draw();
      }
    }, 30);
  }
  
  scrollTop = () => {
    return document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
  }
}

export default Toolbar;