import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router'
import Framework from './components/Framework'
import Toolbar from './components/Toolbar'
import Menu from './components/Menu'
import SnackBar from './SnackBar'
import './App.css'

class App extends Component {
  framework = null;

  constructor (props) {
    super(props);
    this.framework = React.createRef();
  }

  componentDidMount() {
    this.framework = this.framework.current;
    setTimeout(() => {
      SnackBar.make(document.body, 'Welcome!!', SnackBar.LENGTH_SHORT).show();
    }, 1000);
  }

  handleSearch = s => {
    SnackBar.make(document.body, 'search ' + s, SnackBar.LENGTH_LONG).show();
  }

  render() {
    return (
      <Framework className="App" ref={this.framework}>
        <Toolbar onSearch={this.handleSearch} />
        <Menu>
          <li>Home</li>
          <li onClick={() => SnackBar.make(null, 'test', -1).show()}>Test</li>
          <li>About</li>
          <li onClick={() => this.framework.closeMenu()}>x</li>
        </Menu>
        <div className="content">
          {this.props.children || 'nothing'}
        </div>
      </Framework>
    );
  }
}

export default App;
