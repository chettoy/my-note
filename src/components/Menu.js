import React from 'react';
import styled from 'styled-components/macro';
import { c2s } from '../common/MyCommon';
import styles from './Menu.module.scss';

const MenuContainer = styled.div.attrs({
  className: styles.MenuContainer
})`
  background-color: rgba(255,255,255,0.87);
  
  ${c2s(styles.menuDrawer)} span {
    color: white;
  }
  
  ul li {
    color: rgba(0,0,0,0.87);
  }
  
  ul li.active {
    color: #2196f3;
    background: #ddd;
  }
  
  ${c2s(styles.menuFooter)} {
    a:link{color:rgba(0,0,0,0.54);}
    a:visited{color:rgba(0,0,0,0.54);}
    a:hover{color:#0a0;}
    a:active{color:#0a0;}
  }
  
  ${c2s(styles.copyright)} {
    color: rgba(0,0,0,0.87);
  }
`;

export class Menu extends React.Component {
  render() {
    return (
      <MenuContainer ref={element => { if (this.props.getDOM) this.props.getDOM(element)}}>
        <div className={styles.menuDrawer}>
          <span>menu</span>
        </div>
        {this.props.children}
        <div className={styles.menuFooter}>
          <span className={styles.copyright}>&copy; me</span>
        </div>
      </MenuContainer>
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
      if (!child) return null;
      return React.cloneElement(child, {
        key: i,
        className: this.state.currentIndex === i ? 'active' : '',
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