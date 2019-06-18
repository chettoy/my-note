import React from 'react';
import Velocity from 'velocity-animate';
import Toolbar from './Toolbar';
import Menu from './Menu';
import styles from './Framework.module.scss';

class Framework extends React.Component {
  raf = (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame).bind(window);
  menuDOM = null;
  spaceDOM = null;
  conDOM = null;
  bigScreen = false;
  menuPosX = -316;
  menuTempOpen = false;
  _children = null;
  _menuMoveMode = true ? 'transform':'left';
  _menuMoving = false;

  constructor(props) {
    super(props);
    this._children = React.Children.map(this.props.children, child => {
      if (child.type === Toolbar) {
        return React.cloneElement(child, {
          onMenuClick: this.toggleMenu
        });
      }
      if (child.type === Menu) {
        return React.cloneElement(child, {
          getDOM: dom => this.menuDOM = dom
        });
      }
      if (child.props.className === 'content') {
        return React.cloneElement(child, {
          ref: dom => this.conDOM = dom
        });
      }
      return child;
    });
  }

  render() {
    return (
      <div className={styles.DrawerView}>
        {this._children}
        <div className={styles.SpaceView} ref={dom => this.spaceDOM = dom} onTouchStart={() => this.closeMenu()}></div>
      </div>
    )
  }

  componentDidMount() {
    if (this._menuMoveMode === 'transform') {
      this.menuDOM.style.transform = `translate3d(${this.menuPosX}px,0,0)`;
    }else{
      this.menuDOM.style.left = this.menuPosX + 'px';
    }
    this.menuDOM.classList.add(styles.menu);
    this.conDOM.classList.add(styles.content);

    window.addEventListener('resize', this.handleResize);
    document.body.addEventListener('touchstart', this.handleTouchStart);
    document.body.addEventListener('touchmove', this.handleTouchMove);
    document.body.addEventListener('touchend', this.handleTouchEnd);
    document.body.addEventListener('mousemove', this.handleMouseMove);
    this.menuDOM.addEventListener('mouseleave', this.onMouseLeaveMenu);

    setTimeout(this.handleResize, 20);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    document.body.removeEventListener('touchstart', this.handleTouchStart);
    document.body.removeEventListener('touchmove', this.handleTouchMove);
    document.body.removeEventListener('touchend', this.handleTouchEnd);
    document.body.removeEventListener('mousemove', this.handleMouseMove);
    this.menuDOM.addEventListener('mouseleave', this.onMouseLeaveMenu);
  }
  
  handleResize = () => {
    console.log(`resize(${document.documentElement.clientWidth}, ${document.documentElement.clientHeight})`);
    this.bigScreen = document.documentElement.clientWidth > 550;
    this.menuWidth = this.menuDOM.getBoundingClientRect().width;
    this.moveBack();
  }

  prevTouchMenuPosX = null;
  menuTouchFromX = null;
  menuTouchMoveX = null;
  menuTouchPrevX = null;
  menuPrevLoopTime = null;
  menuDragSpeed = 0;

  touchMoveLoop = () => {
    //move Menu
    if (this.menuTouchFromX == null) return;
    if (this.menuTouchMoveX == null) {
      this.raf(this.touchMoveLoop);
      return;
    }
    let targetPosX = this.prevTouchMenuPosX + this.menuTouchMoveX - this.menuTouchFromX;
    if (targetPosX < -this.menuWidth) targetPosX = -this.menuWidth;
    if (targetPosX > 0) targetPosX = 0;
    this.stepTo(targetPosX);
    
    //calc speed
    const now = Date.now();
    this.menuDragSpeed = (this.menuTouchMoveX - this.menuTouchPrevX) / (now - this.menuPrevLoopTime);
    this.menuTouchPrevX = this.menuTouchMoveX;
    this.menuPrevLoopTime = now;
    this.raf(this.touchMoveLoop);
  }

  handleTouchStart = event => {
    const touch = event.targetTouches[0];
    this.prevTouchMenuPosX = this.menuPosX;
    if (touch.pageX < this.prevTouchMenuPosX + this.menuWidth + 20 && touch.pageY > 50) {
      this.menuTouchFromX = touch.pageX;
      this.menuTouchPrevX = this.menuTouchFromX;
      this.menuDOM.classList.add(styles.touching);
      this.spaceDOM.classList.add(styles.touching);
      this.conDOM.classList.add(styles.touching);
      if (!this.bigScreen) {
        this.spaceDOM.style.display = 'block';
      }
      this.menuPrevLoopTime = Date.now();
      this.raf(this.touchMoveLoop);
    }
  }

  handleTouchMove = event => {
    const touch = event.targetTouches[0];
    if (this.menuTouchFromX != null) {
      event.stopPropagation();
      this.menuTouchMoveX = touch.pageX;
      return false;
    }
  }

  handleTouchEnd = event => {
    if (this.menuTouchFromX != null) {
      event.stopPropagation();
      this.menuTouchFromX = null;
      this.menuTouchMoveX = null;
      this.menuTouchPrevX = null;
      this.prevTouchMenuX = null;
      this.menuDOM.classList.remove(styles.touching);
      this.spaceDOM.classList.remove(styles.touching);
      this.conDOM.classList.remove(styles.touching);
      //console.log("drag speed: " + this.menuDragSpeed);
      if (Math.abs(this.menuDragSpeed) > 0.5) {
        const targetPos = this.menuDragSpeed > 0? 0: -this.menuWidth;
        const duration = Math.abs((targetPos - this.menuPosX) / this.menuDragSpeed);
        this.animateTo(targetPos, duration > 50? duration: 50);
      }else{
        this.moveBack();
      }
      this.menuPrevLoopTime = null;
      this.menuDragSpeed = 0;
    }
  }
  
  handleMouseMove = event => {
    if (event.pageX === 0) {
      if (this.menuPosX !== 0 && !this._menuMoving) {
        this.openMenu();
        this.menuTempOpen = true;
      }
    }
  }
  
  onMouseLeaveMenu = event => {
    if (this.menuTempOpen) {
      this.closeMenu();
      this.menuTempOpen = false;
    }
  }

  /**
   * arg1: posX from -this.menuWidth to 0
   */
  stepTo = posX => {
    this.menuPosX = posX;
    if (this._menuMoveMode === 'transform') {
      this.menuDOM.style.transform = `translate3d(${posX}px,0,0)`;
    }else{
      this.menuDOM.style.left = posX + 'px';
    }
    this.spaceDOM.style.opacity = `${posX / this.menuWidth + 1}`;
    if (this.bigScreen) {
      this.conDOM.style.width = document.body.offsetWidth - (posX + this.menuWidth) + 1 + 'px';
    }
  }

  animateTo = (posX, arg2, arg3) => {
    let duration = 180;
    let callback = null;
    if (typeof(arg2) === "number") duration = arg2;
    if (typeof(arg2) === "function") callback = arg2;
    if (typeof(arg3) === "function") callback = arg3;
    this._menuMoving = true;
    Velocity(this.spaceDOM, "stop", true);
    //this.menuDOM.classList.add(styles.animating);
    //this.conDOM.classList.add(styles.animating);
    //this.menuDOM.style.transitionDuration = duration + "ms";
    //this.conDOM.style.transitionDuration = duration + "ms";
    //console.log("animate duration: " + duration + "ms");
    const _complete = isReach => {
      this.stepTo(this.menuPosX);
      //this.menuDOM.classList.remove(styles.animating);
      //this.conDOM.classList.remove(styles.animating);
      //this.menuDOM.style.transitionDuration = "";
      //this.conDOM.style.transitionDuration = "";
      this._menuMoving = false;
      if (callback) callback(isReach);
    }
    const prevPosX = this.menuPosX;
    const distance = posX - prevPosX;
    Velocity(this.spaceDOM, {
      opacity: `${posX / this.menuWidth + 1}`
    }, {
      duration,
      easing: 'swing',
      begin: () => {
        //console.log("animate begin");
        if (this._menuMoveMode === 'transform') {
          this.menuDOM.style.transform = `translate3d(${posX}px,0,0)`;
        }else{
          this.menuDOM.style.left = posX + 'px';
        }
        if (this.bigScreen) {
          this.conDOM.style.width = document.body.offsetWidth - (posX + this.menuWidth) + 1 + 'px';
        }else{
          this.conDOM.style.width = '100%';
        }
      },
      progress: (spaceDOM, perc, remaining) => {
        //console.log("animate " + perc);
        this.menuPosX = prevPosX + distance * perc;
        if (this.menuTouchFromX) {
          Velocity(this.spaceDOM, "stop", true);
          _complete(false);
        }
        if (this._menuMoveMode === 'transform') {
          this.menuDOM.style.transform = `translate3d(${this.menuPosX}px,0,0)`;
        }else{
          this.menuDOM.style.left = this.menuPosX + 'px';
        }
        if (this.bigScreen) {
          this.conDOM.style.width = document.body.offsetWidth - (this.menuPosX + this.menuWidth) + 1 + 'px';
        }
      }, 
      complete: () => {
        //console.log("animate complete");
        this.menuPosX = posX;
        Velocity(this.spaceDOM, "stop", true);
        _complete(true);
      }
    });
  }

  moveBack = (callback) => {
    if (this.menuPosX > -this.menuWidth * 1/2) {
      this.openMenu(callback);
    }else{
      this.closeMenu(callback);
    }
  }

  isMenuOpen = () => {
    return this.menuPosX === 0;
  }

  openMenu = callback => {
    if (!this.bigScreen) {
      this.spaceDOM.style.display = 'block';
    }
    this.animateTo(0, callback);
  }

  closeMenu = callback => {
    this.animateTo(-this.menuWidth, (isReach) => {
      if (isReach) this.spaceDOM.style.display = 'none';
      if (callback) callback(isReach);
    });
  }

  toggleMenu = () => {
    if (this.isMenuOpen()) {
      this.closeMenu();
    }else{
      this.openMenu();
    }
  }
}

export default Framework;