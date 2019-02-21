import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router'
import './App.css'
import Toolbar from './components/Toolbar'
import Menu from './components/Menu'

class App extends Component {
  menu = null;
  content = null;

  menuHandler = (instance) => {
    this.menu = instance;
  }

  componentDidMount() {
    this.content = this.refs.content;
    this.menu.setStepHook((posX) => {
      this.content.style.width = document.body.offsetWidth - (posX + this.menu.menuWidth) + 1 + 'px';
    });
  }

  handleMenuSwitch = () => {
    if (this.menu.isOpen()) {
      this.menu.closeMenu();
    }else{
      this.menu.openMenu();
    }
  }
  
  render() {
    return (
      <div className="App">
        <Toolbar onMenuClick={this.handleMenuSwitch} />
        <Menu handle={this.menuHandler} />
        <div className="content" ref="content">{this.props.children || 'nothing'}</div>
      </div>
    );
  }
}

export default App;
