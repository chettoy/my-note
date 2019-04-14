import React from 'react';
import Helmet from 'react-helmet';
import { Route, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Framework from './components/Framework';
import Toolbar from './components/Toolbar';
import { Menu, MenuList } from './components/Menu';
import FloatActionButton from './components/FloatActionButton';
import MusicPlayer from './components/MusicPlayer';
import SnackBar from './common/SnackBar';
import Toast from './common/Toast';

const AppWrapper = styled.div`
  .content {
    background-color: #282c34;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
  .content .fab {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    font-size: 1rem;
  }
  .App-link {
    color: #61dafb;
  }
`;

const toast = (text, during=Toast.LENGTH_SHORT) => {
  Toast.makeText(null, text, during).show();
};

class App extends React.Component {
  view = null;
  sessionStorageSupported = false;

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
    if (navigator.userAgent === "ReactSnap") return;
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
      <AppWrapper>
        <Helmet title="mynote" />
        <Framework xUI={this.state.xUI} ref={instance => this.view = instance}>
          <Toolbar onSearch={this.handleSearch} />
          <Menu>
            <MusicPlayer />
            <MenuList>
              <li onClick={() => this.props.history.push("/")}>item1</li>
              <li onClick={() => {SnackBar.make(null, 'test', -1).show(); this.view.closeMenu()}}>item2</li>
              <li onClick={() => this.setState({xUI: !this.state.xUI})}>item3</li>
              <li onClick={() => this.view.closeMenu()}>close</li>
            </MenuList>
          </Menu>
          <div className="content">
            <Route exact path="/" component={IndexPage} />
            <Route path="/test" component={TestPage} />
            <FloatActionButton>
              <div onClick={() => toast("test")}>1</div>
              <div onClick={() => this.props.history.push("/test")}>2</div>
              <div>3</div>
            </FloatActionButton>
          </div>
        </Framework>
      </AppWrapper>
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

export default withRouter(App);
