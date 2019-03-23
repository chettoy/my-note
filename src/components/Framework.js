import React from 'react'
import Velocity from 'velocity-animate'
import Toolbar from './Toolbar'
import Menu from './Menu'
import styles from './Framework.module.css'

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

  componentWillMount() {
    this._children = React.Children.map(this.props.children, child => {
      if (child.type === Toolbar) {
        return React.cloneElement(child, {
          onMenuClick: this.toggleMenu
        });
      }
      if (child.type === Menu) {
        return React.cloneElement(child, {
          getDOM: dom => this.menuDOM = dom,
          onMouseLeave: this.onMouseLeaveMenu
        });
      }
      if (child.props.className === 'content') {
        return React.cloneElement(child, {
          className: child.props.className ? (child.props.className + ' ' + styles.content) : styles.content,
          ref: dom => this.conDOM = dom
        });
      }
      return child;
    });
  }

  render() {
    return (
      <div className={this.props.xUI ? styles.x : ""}>
        {this._children}
        <div className={styles.space} ref={dom => this.spaceDOM = dom} onTouchStart={() => this.closeMenu()}></div>
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

    window.addEventListener('resize', this.handleResize);
    document.body.addEventListener('touchstart', this.handleTouchStart);
    document.body.addEventListener('touchmove', this.handleTouchMove);
    document.body.addEventListener('touchend', this.handleTouchEnd);
    document.body.addEventListener('mousemove', this.handleMouseMove);

    setTimeout(this.handleResize, 20);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    document.body.removeEventListener('touchstart', this.handleTouchStart);
    document.body.removeEventListener('touchmove', this.handleTouchMove);
    document.body.removeTouchListener('touchend', this.handleTouchEnd);
    document.body.removeEventListener('mousemove', this.handleMouseMove);
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

  touchMoveLoop = () => {
    if (this.menuTouchFromX == null) return;
    if (this.menuTouchMoveX == null) {
      this.raf(this.touchMoveLoop);
      return;
    }
    let targetPosX = this.prevTouchMenuPosX + this.menuTouchMoveX - this.menuTouchFromX;
    if (targetPosX < -this.menuWidth) targetPosX = -this.menuWidth;
    if (targetPosX > 0) targetPosX = 0;
    this.stepTo(targetPosX);
    this.raf(this.touchMoveLoop);
  }

  handleTouchStart = event => {
    const touch = event.targetTouches[0];
    this.prevTouchMenuPosX = this.menuPosX;
    if (touch.pageX < this.prevTouchMenuPosX + this.menuWidth + 20 && touch.pageY > 50) {
      this.menuTouchFromX = touch.pageX;
      this.menuDOM.classList.add(styles.touching);
      this.spaceDOM.classList.add(styles.touching);
      this.conDOM.classList.add(styles.touching);
      if (!this.bigScreen) {
        this.spaceDOM.style.display = 'block';
      }
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
      this.prevTouchMenuX = null;
      this.menuDOM.classList.remove(styles.touching);
      this.spaceDOM.classList.remove(styles.touching);
      this.conDOM.classList.remove(styles.touching);
      this.moveBack();
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

  animateTo = (posX, callback) => {
    this._menuMoving = true;
    Velocity(this.spaceDOM, "stop", true);
    this.menuDOM.classList.add(styles.animating);
    this.conDOM.classList.add(styles.animating);
    const _complete = isReach => {
      this.stepTo(this.menuPosX);
      this.menuDOM.classList.remove(styles.animating);
      this.conDOM.classList.remove(styles.animating);
      this._menuMoving = false;
      if (callback) callback(isReach);
    }
    const prevPosX = this.menuPosX;
    const distance = posX - prevPosX;
    Velocity(this.spaceDOM, {
      opacity: `${posX / this.menuWidth + 1}`
    }, {
      duration: 400,
      begin: () => {
        //console.log("begin");
        if (this._menuMoveMode === 'transform') {
          this.menuDOM.style.transform = `translate3d(${posX}px,0,0)`;
        }else{
          this.menuDOM.style.left = posX + 'px';
        }
        if (this.bigScreen) {
          this.conDOM.style.width = document.body.offsetWidth - (posX + this.menuWidth) + 1 + 'px';
        }
      },
      progress: (spaceDOM, perc, remaining) => {
        //console.log(perc);
        this.menuPosX = prevPosX + distance * perc;
        if (this.menuTouchFromX) {
          Velocity(this.spaceDOM, "stop", true);
          _complete(false);
        }
      }, 
      complete: () => {
        //console.log("complete");
        this.menuPosX = posX;
        Velocity(this.spaceDOM, "stop", true);
        _complete(true);
      }
    });
  }


  /*
   * slide menu to posX
   * repleaced by animateTo
   */
  slideTo = (posX, callback) => {
    this._menuMoving = true;
    if (this.menuTouchFromX) {
      this._menuMoving = false;
      if (callback) callback(false);
      return;  //stop sliding when touchstart
    }
    const step = this.menuWidth / 60 * 4;
    if (this.menuPosX < posX - step) {
      this.stepTo(this.menuPosX + step);
    }else if (this.menuPosX > posX + step) {
      this.stepTo(this.menuPosX - step);
    }else{
      this.stepTo(posX);
      this._menuMoving = false;
      if (callback) callback(true);
      return;
    }
    this.raf(this.slideTo.bind(this, posX, callback));
  }

  moveBack = () => {
    this.animateTo(this.menuPosX > -this.menuWidth * 2/3 ? 0: -this.menuWidth);
  }

  isMenuOpen = () => {
    return this.menuPosX === 0;
  }

  openMenu = callback => {
    if (!this.bigScreen) {
      this.spaceDOM.style.display = 'block';
      this.spaceDOM.style.opacity = 0;
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