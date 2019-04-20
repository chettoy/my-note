import React from 'react';
import styled from 'styled-components/macro';

const MenuContainer = styled.div`
  background-color: rgba(255,255,255,0.87);
  font-size: 1rem;
  height: 100vh;
  min-width: 10rem;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  
  @media screen and (min-width:550px) {
    width: 16rem;
    max-width: 50%;
  }
  
  @media screen and (max-width:549px) {
    width: 70%;
    box-shadow: 0.125rem 0 1rem rgba(0,0,0,0.5);
  }
  
  .menuDrawer {
    width: 100%;
    height: 12rem;
    max-height: 30%;
    position: relative;
    text-align: center;
    background: linear-gradient(to left, #0066FF, #00FFBF, #B3FF19);
  }
  
  .menuDrawer span {
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 0.4rem;
    color: white;
  }
  
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0.5rem 0;
    width: 100%;
  }
  
  ul li {
    margin: 0;
    padding: 0.5rem;
    display: block;
    color: rgba(0,0,0,0.87);
    background: transparent;
  }
  
  ul li.active {
    color: #2196f3;
    background: #ddd;
  }
  
  .menuFooter {
    padding: 0 0.5rem;
    line-height: 1.2rem;
    position: absolute;
    bottom: 5rem;
  }
  
  .copyright {
    color: rgba(0,0,0,0.87);
    white-space: nowrap;
  }
`;

export class Menu extends React.Component {
  render() {
    return (
      <MenuContainer ref={element => { if (this.props.getDOM) this.props.getDOM(element)}}>
        <div className='menuDrawer'>
          <span>menu</span>
        </div>
        {this.props.children}
        <div className='menuFooter'>
          <span className='copyright'>&copy; me</span>
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