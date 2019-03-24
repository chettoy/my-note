import React from 'react'
//import { Router, Route, Link } from 'react-router'
import Framework from './components/Framework'
import Toolbar from './components/Toolbar'
import Menu from './components/Menu'
import FloatActionButton from './components/FloatActionButton'
import SnackBar from './common/SnackBar'
import Toast from './common/Toast'
import './App.css'

class App extends React.Component {
  framework = null;
  sessionStorageSupported = false;

  toast = (text, during=Toast.LENGTH_SHORT) => {
    Toast.makeText(this, text, during).show();
  }

  constructor(props) {
    super(props);
    try {
      this.sessionStorageSupported = ('sessionStorage' in window && window['sessionStorage'] !== null);
    } catch(e) {}
    this.state = {
      xUI: false
    };
  }

  componentDidMount() {
    if ((!this.sessionStorageSupported) || sessionStorage.show_welcome === undefined) {
      setTimeout(() => {
        if (this.sessionStorageSupported) {
          sessionStorage.show_welcome = true;
        }
        SnackBar.make(this.framework.conDOM, "Welcome", SnackBar.LENGTH_LONG).show();
      }, 1500);
    }
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
          <li onClick={() => {SnackBar.make(null, 'test', -1).show(); this.framework.closeMenu()}}>item2</li>
          <li onClick={() => this.setState({xUI: !this.state.xUI})}>item3</li>
          <li onClick={() => this.framework.closeMenu()}>close</li>
        </Menu>
        <div className="content">
          {this.props.children || 'nothing'}
          <FloatActionButton>
            <div onClick={() => this.toast("test")}>1</div>
            <div>2</div>
            <div>3</div>
          </FloatActionButton>
        </div>
      </Framework>
    );
  }
}

export default App;
