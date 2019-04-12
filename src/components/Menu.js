import React from 'react'
import styles from './Menu.module.css'

export class Menu extends React.Component {
  render() {
    return (
      <div className={styles.menu} ref={element => { if (this.props.getDOM) this.props.getDOM(element)}}>
        <div className={styles.menuDrawer}>
          <span>menu</span>
        </div>
        {this.props.children}
        <div className={styles.menuFooter}>
          <span className={styles.copyright}>&copy; me</span>
        </div>
      </div>
    )
  }
}

export class MenuList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentIndex: 0};
  }

  getItemList = () => {
    let i = 0;
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        key: i,
        className: this.state.currentIndex === i ? styles.active : '',
        onClick: event => {
          this.handleItemClick(event);
          if (child.props.onClick) child.props.onClick(event);
        },
        index: i++
      });
    });
  }

  handleItemClick = event => {
    this.setState({
      currentIndex: parseInt(event.currentTarget.getAttribute('index'))
    });
  }

  render() {
    return <ul>{this.getItemList()}</ul>;
  }
}

export default Menu;