import React from 'react'
import styles from './Menu.module.css'

class Menu extends React.Component {
  raf = (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame).bind(window);
  menuDOM = null;
  spaceDOM = null;
  bigScreen = false;
  menuPosX = -316; //same as value in style
  stepHook = null;

  constructor(props) {
    super(props);
    this.state = {currentIndex: 0};
    if (this.props.handle) {
      this.props.handle(this);
    }
  }

  componentDidMount() {
    this.menuDOM = this.refs.leftMenu;
    this.spaceDOM = this.refs.rightSpace;
    window.addEventListener('resize', this.handleResize);
    document.body.addEventListener('touchstart', this.handleTouchStart);
    document.body.addEventListener('touchmove', this.handleTouchMove);
    document.body.addEventListener('touchend', this.handleTouchEnd);
    setTimeout(this.handleResize, 20);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    document.body.removeEventListener('touchstart', this.handleTouchStart);
    document.body.removeEventListener('touchmove', this.handleTouchMove);
    document.body.removeTouchListener('touchend', this.handleTouchEnd);
  }

  getItemList = () => {
    const categoryArr = ['item1', 'item2', 'item3', 'item4'];
    let itemList = [];
    for(let i=0; i<categoryArr.length; i++) {
      itemList.push(<li key={i} className={this.state.currentIndex === i? styles.active: ''} index={i} onClick={this.handleItemClick}>{categoryArr[i]}</li>);
    }
    return itemList;
  }

  handleItemClick = (event) => {
    this.setState({
      currentIndex: parseInt(event.currentTarget.getAttribute('index'))
    });
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

  handleTouchStart = (event) => {
    const touch = event.targetTouches[0];
    this.prevTouchMenuPosX = this.menuPosX;
    if (touch.pageX < this.prevTouchMenuPosX + this.menuWidth + 20 && touch.pageY > 50) {
      this.menuTouchFromX = touch.pageX;
      this.menuDOM.classList.add(styles.touching);
      if (!this.bigScreen) {
        this.spaceDOM.style.display = 'block';
      }
      this.raf(this.touchMoveLoop);
    }
  }

  handleTouchMove = (event) => {
    const touch = event.targetTouches[0];
    if (this.menuTouchFromX != null) {
      event.stopPropagation();
      this.menuTouchMoveX = touch.pageX;
      return false;
    }
  }

  handleTouchEnd = (event) => {
    if (this.menuTouchFromX != null) {
      event.stopPropagation();
      this.menuTouchFromX = null;
      this.menuTouchMoveX = null;
      this.prevTouchMenuX = null;
      if (this.menuDOM.classList) {
        this.menuDOM.classList.remove(styles.touching);
      }else{
        this.menuDOM.className = this.menuDOM.className.replace(new RegExp('(^|\\b)' + styles.touching.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }
      this.moveBack();
    }
  }

  /**
   * arg1: posX from -this.menuWidth to 0
   */
  stepTo = (posX) => {
    this.menuPosX = posX;
    //this.menuDOM.style.left = posX + 'px';
    this.menuDOM.style.transform = `translate3d(${posX}px,0,0)`;
    this.spaceDOM.style.opacity = `${posX / this.menuWidth + 1}`;
    if (this.stepHook) this.stepHook(posX);
  }

  setStepHook(f) {
    this.stepHook = f;
  }

  slideTo = (posX, callback) => {
    if (this.menuTouchFromX) return;  //stop sliding when touching
    const step = this.menuWidth / 60 * 4;
    if (this.menuPosX < posX - step) {
      this.stepTo(this.menuPosX + step);
      this.raf(this.slideTo.bind(this, posX, callback));
    }else if (this.menuPosX > posX + step) {
      this.stepTo(this.menuPosX - step);
      this.raf(this.slideTo.bind(this, posX, callback));
    }else{
      this.stepTo(posX);
      if (callback) callback();
    }
  }

  moveBack = () => {
    this.slideTo(this.menuPosX > -this.menuWidth * 2/3 ? 0: -this.menuWidth);
  }

  isOpen = () => {
    return this.menuPosX === 0;
  }

  openMenu = (callback) => {
    if (!this.bigScreen) {
      this.spaceDOM.style.display = 'block';
    }
    this.slideTo(0, callback);
  }

  closeMenu = (callback) => {
    this.slideTo(-this.menuWidth, () => {
      this.spaceDOM.style.display = 'none';
      if (callback) callback();
    });
  }

  render() {
    return (
      <div>
        <div className={styles.menu} ref="leftMenu" style={{transform: 'translate3d(-316px,0,0)'}}>
          <div className={styles.menuDrawer}>
            <span>menu</span>
          </div>
          <ul>{this.getItemList()}</ul>
          <div className={styles.menuFooter}>
            <span className={styles.copyright}>&copy; me</span>
          </div>
        </div>
        <div className={styles.space} ref="rightSpace" onTouchStart={() => this.closeMenu()}></div>
      </div>
    )
  }
}

export default Menu;