import React from 'react';
import styled from 'styled-components/macro';
import { c2s } from '../common/MyCommon';
import styles from './Menu.module.scss';

const MrMenu = styled.div.attrs({
  className: styles.MrMenu
})`
  background: ${props => props.theme.MenuBackground};
  
  ${c2s(styles.menuHeader)} span {
    color: ${props => props.theme.MenuHeaderTextColor};
  }
  
  ul li {
    color: ${props => props.theme.MenuTextColor};
  }
  
  ul li.active {
    color: ${props => props.theme.ItemActiveTextColor};
    background: ${props => props.theme.ItemActiveColor};
  }
  
  ${c2s(styles.menuFooter)} {
    a:link{color:rgba(0,0,0,0.54);}
    a:visited{color:rgba(0,0,0,0.54);}
    a:hover{color:#0a0;}
    a:active{color:#0a0;}
  }
  
  ${c2s(styles.copyright)} {
    color: ${props => props.theme.MenuTextColor};
  }
`;

MrMenu.defaultProps = {
  theme: {
    MenuBackground: "rgba(255,255,255,0.87)",
    MenuHeaderTextColor: "white",
    MenuTextColor: "rgba(0,0,0,0.87)",
    ItemActiveTextColor: "#2196f3",
    ItemActiveColor: "#ddd"
  }
};

export class Menu extends React.Component {
  render() {
    return (
      <MrMenu
        ref={element => {
          if (this.props.getDOM)
            this.props.getDOM(element);
        }}>
        <div className={styles.menuHeader}>
          <span>menu</span>
        </div>
        <div className={styles.MenuContainer}>
          {this.props.children}
          <div className={styles.menuFooter}>
            <span className={styles.copyright}>&copy; me</span>
          </div>
        </div>
      </MrMenu>
    )
  }
}

export class MenuList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: 0 };
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