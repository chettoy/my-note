import React from 'react';
import { withRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components/macro';
import ClientUtils from './common/ClientUtils';
import MessageHandler from './common/MessageHandler';
import SnackBar from './common/SnackBar';
import Toast from './common/SuperToast';
import Loading from './components/Loading';
import DrawerView from './components/DrawerView';
import Toolbar from './components/Toolbar';
import { Menu, MenuList } from './components/Menu';
import FloatActionButton from './components/FloatActionButton';
import Banner from './components/Banner';
import Live2dWidget from './components/live2d-widget';
import CardRouter from './cards/CardRouter';
import Dark from './themes/Dark';
import Light from './themes/Light';
import Config from './Config';
import './App.scss';

const MusicPlayer = React.lazy(() => import('./components/MusicPlayer'));

const toast = (text, during = Toast.LENGTH_SHORT) => {
  Toast.makeText(null, text, during).show();
};

const BackgroundCanvas = styled.canvas.attrs({ className: 'bg' })`
  background: ${props => props.theme.AppBackground};
`;
BackgroundCanvas.defaultProps = { theme: { AppBackground: '#e0e0e0' } };


class App extends React.Component {
  drawerView = null;
  themeList = [Light, Dark];
  loadSet = new Set(['app', 'bg']);

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isViewMode: false,
      currentTheme: 0
    };
    MessageHandler.init({
      context: this,
      log: (tag, msg) => {
        const text = `[${tag}] ${msg}`;
        console.log(text);
        Toast.makeText(this, text, Toast.LENGTH_LONG).show();
      },
      changeTheme: () => {
        this.changeTheme();
      },
      toggleViewMode: (isEnable, callback) => {
        if (isEnable === true || isEnable === false) {
          this.setState({isViewMode: isEnable}, callback);
        }
      }
    });
  }

  handleSearch = str => {
    const r = /#([\w\-.]+)=(.+)/.exec(str);
    if (r != null && r.length > 2) {
      const key = r[1];
      const value = r[2];
      switch (key) {
        case 'href':
          if (!ClientUtils.open(value))
            window.location.href = value;
          break;
        case 'id':
          this.goTo('/id/' + value);
          break;
        default:
          break;
      }
    }
    toast('search ' + str);
  }

  getTheme() {
    return this.themeList[this.state.currentTheme];
  }

  changeTheme() {
    if (this.state.currentTheme < this.themeList.length - 1) {
      this.setState({ currentTheme: this.state.currentTheme + 1 });
    } else {
      this.setState({ currentTheme: 0 });
    }
  }

  updateProgress(item) {
    if (!this.loadSet.has(item)) return;
    this.loadSet.delete(item);
    const progress = window.NProgress; // imported in index.html
    if (!progress) {
      console.log('NProgress not found');
      return;
    }
    if (this.loadSet.size > 0) {
      progress.inc();
    } else {
      progress.done();
    }
  }

  goTo(path) {
    if (path === this.props.location.pathname) return;
    if (path === '/') {
      this.props.history.goBack();
    } else {
      this.props.history.push(path);
    }
  }

  render() {
    return (
      <ThemeProvider theme={this.getTheme()}>
        <DrawerView ref={instance => this.drawerView = instance}>
          <BackgroundCanvas />
          <Toolbar
            statusBarHeight={ClientUtils.getStatusBarHeight()}
            toolbarAttach={this.state.isViewMode}
            onSearch={this.handleSearch} />
          <Menu>
            <React.Suspense fallback={<Loading />}>
              {this.state.isLoading ? null : <MusicPlayer />}
            </React.Suspense>
            <MenuList>
              <li onClick={() => this.goTo('/')}>item1</li>
              <li onClick={() => {
                SnackBar.make(null, 'test', -1)
                  .setOnShowed(this.drawerView.closeMenu)
                  .show();
                setTimeout(this.drawerView.closeMenu, 2000);
              }}>item2</li>
              <li onClick={() => {
                if (document.body.classList.contains("x")) {
                  document.body.classList.remove("x");
                } else {
                  document.body.classList.add("x");
                }
              }}>item3</li>
              <li onClick={() => this.changeTheme()}>item4</li>
              {ClientUtils.isClient && <li onClick={() => ClientUtils.exit()}>Exit</li>}
              <li onClick={() => this.drawerView.closeMenu()}>close</li>
            </MenuList>
          </Menu>
          <main className='content'>
            <FloatActionButton>
              <div onClick={() => toast('test')}>1</div>
              <div onClick={() => this.goTo('/test')}>2</div>
              <div>3</div>
            </FloatActionButton>
            {this.state.isViewMode || <Banner />}
            {this.state.isLoading || <CardRouter />}
          </main>
        </DrawerView>
      </ThemeProvider>
    );
  }

  componentDidMount() {
    this.setState({ isLoading: false });
    this.updateProgress('app');

    //check background image load state
    (() => {
      const bgMatch = this.getTheme().AppBackground.match(/url\((['"])(.+)\1\)/);
      if (!bgMatch) return;
      const url = bgMatch[2];
      const img = new Image();
      img.src = url;
      if (img.complete) {
        this.updateProgress('bg');
      } else {
        img.onload = () => {
          this.updateProgress('bg');
        }
      }
    })();

    //delete the pre-rendered style
    ((styleTag = document.querySelectorAll('style[data-styled]')) => {
      if (styleTag.length === 2 && styleTag[0].innerHTML && !styleTag[1].innerHTML)
        styleTag[0].parentNode.removeChild(styleTag[0]);
    })();

    const showWelcome = () => {
      const sessionStorageSupported = ('sessionStorage' in window && window['sessionStorage'] !== null);
      if ((!sessionStorageSupported) || sessionStorage.show_welcome === undefined) {
        setTimeout(() => {
          if (sessionStorageSupported) {
            sessionStorage.show_welcome = true;
          }
          SnackBar.make(this.drawerView.conDOM, "Welcome", SnackBar.LENGTH_LONG).show();
        }, 1500);
      }
    };

    if (Config.loadLive2d) {
      Live2dWidget.load().then(() => {
        setTimeout(showWelcome, 1000);
      });
    } else {
      showWelcome();
    }
  }
}

export default withRouter(App);