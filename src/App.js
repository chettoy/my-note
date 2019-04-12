import React from 'react'
import { Router, Route, Link } from 'react-router-dom'
import { createHashHistory } from "history";
import Framework from './components/Framework'
import Toolbar from './components/Toolbar'
import { Menu, MenuList } from './components/Menu'
import FloatActionButton from './components/FloatActionButton'
import MusicPlayer from './components/MusicPlayer'
import SnackBar from './common/SnackBar'
import Toast from './common/Toast'
import './App.css'

class App extends React.Component {
  view = null;
  history = null;
  sessionStorageSupported = false;

  toast = (text, during=Toast.LENGTH_SHORT) => {
    Toast.makeText(this, text, during).show();
  }

  constructor(props) {
    super(props);
    this.history = createHashHistory();
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
        SnackBar.make(this.view.conDOM, "Welcome", SnackBar.LENGTH_LONG).show();
      }, 1500);
    }
  }

  handleSearch = s => {
    this.toast('search ' + s);
  }

  render() {
    return (
      <Router history={this.history}>
        <Framework xUI={this.state.xUI} ref={instance => this.view = instance}>
          <Toolbar onSearch={this.handleSearch} />
          <Menu>
            <MusicPlayer />
            <MenuList>
              <li onClick={() => this.history.push("/")}>item1</li>
              <li onClick={() => {SnackBar.make(null, 'test', -1).show(); this.view.closeMenu()}}>item2</li>
              <li onClick={() => this.setState({xUI: !this.state.xUI})}>item3</li>
              <li onClick={() => this.view.closeMenu()}>close</li>
            </MenuList>
          </Menu>
          <div className="content">
            <Route exact path="/" component={IndexPage} />
            <Route path="/test" component={TestPage} />
            <FloatActionButton>
              <div onClick={() => this.toast("test")}>1</div>
              <div onClick={() => this.history.push("/test")}>2</div>
              <div>3</div>
            </FloatActionButton>
          </div>
        </Framework>
      </Router>
    );
  }
}

function IndexPage() {
  return (
    <p>nothing</p>
  );
}

function TestPage() {
  return <p>test page</p>;
}

export default App;
