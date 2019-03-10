import React, { Component } from 'react'
//import { Router, Route, Link } from 'react-router'
import Framework from './components/Framework'
import Toolbar from './components/Toolbar'
import Menu from './components/Menu'
import SnackBar from './common/SnackBar'
import Toast from './common/Toast'
import './App.css'

class App extends Component {
  framework = null;
  toast = (text, during=Toast.LENGTH_SHORT) => {
    Toast.makeText(this, text, during).show();
  };

  constructor(props) {
    super(props);
    this.state = {
      xUI: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      SnackBar.make(document.body, 'Welcome!!', SnackBar.LENGTH_SHORT).show();
    }, 1000);
  }

  handleSearch = s => {
    this.toast('search ' + s);
  }

  render() {
    return (
      <Framework xUI={this.state.xUI} ref={instance => this.framework = instance}>
        <Toolbar onSearch={this.handleSearch} />
        <Menu>
          <li>item1</li>
          <li onClick={() => SnackBar.make(null, 'test', -1).show()}>item2</li>
          <li onClick={() => this.setState({xUI: !this.state.xUI})}>item3</li>
          <li onClick={() => this.framework.closeMenu()}>close</li>
        </Menu>
        <div className="content">
          {this.props.children || 'nothing'}
        </div>
      </Framework>
    );
  }
}

export default App;
