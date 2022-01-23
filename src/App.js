import React from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { useLocation, useNavigate, useParams } from 'react-router';
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
import EnglishMessages from './lang/compiled/en.json';
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


class NProgressManager {
  constructor() {
    this.loadSet = new Set();
  }

  getNProgress() {
    const nprogress = window.NProgress; // imported in index.html
    if (!nprogress) {
      console.log('NProgress not found');
      return undefined;
    }
    return nprogress;
  }

  newToLoad(item) {
    if (this.loadSet.has(item)) return;
    this.loadSet.add(item);

    const progress = this.getNProgress();
    if (progress === undefined) return;
    if (!progress.isStarted()) {
      progress.start();
    }
  }

  loaded(item) {
    if (!this.loadSet.has(item)) return;
    this.loadSet.delete(item);
    const progress = this.getNProgress();
    if (progress === undefined) return;
    if (this.loadSet.size > 0) {
      progress.inc();
    } else {
      progress.done();
    }
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.drawerView = null;
    this.themeList = [Light, Dark];
    this.progress = new NProgressManager();
    this.progress.newToLoad('app');
    this.progress.newToLoad('background');
    this.state = {
      isLoading: true,
      isViewMode: false,
      currentLocale: 'en',
      currentTheme: 0,
      localeMessages: { en: EnglishMessages },
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
      goTo: path => {
        this.goTo(path);
      },
      toggleViewMode: (isEnable, callback) => {
        if (isEnable === true || isEnable === false) {
          this.setState({ isViewMode: isEnable }, callback);
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

  changeLocale() {
    if (this.state.currentLocale === 'en') {
      const messages = this.state.localeMessages;
      if (!messages['zh']) {
        this.progress.newToLoad('lang-zh');
        import('./lang/compiled/zh.json').then(mod => {
          this.progress.loaded('lang-zh');
          messages['zh'] = mod.default;
          this.setState({ currentLocale: 'zh', localeMessages: messages });
        });
      } else {
        this.setState({ currentLocale: 'zh' });
      }
    } else {
      this.setState({ currentLocale: 'en' });
    }
  }

  changeTheme() {
    if (this.state.currentTheme < this.themeList.length - 1) {
      this.setState({ currentTheme: this.state.currentTheme + 1 });
    } else {
      this.setState({ currentTheme: 0 });
    }
  }



  goTo(path) {
    if (path === this.props.location.pathname) return;
    if (path === '/') {
      this.props.navigate(-1);
    } else {
      this.props.navigate(path);
    }
  }

  render() {
    return (
      <IntlProvider
        locale={this.state.currentLocale}
        defaultLocale="en"
        messages={this.state.localeMessages[this.state.currentLocale]}>
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

                <li onClick={() => this.goTo('/')}>
                  <FormattedMessage id="app.menu-item.1"
                    defaultMessage="home"
                    description="menu item1" />
                </li>

                <li onClick={() => {
                  SnackBar.make(null, 'test', -1)
                    .setOnShowed(this.drawerView.closeMenu)
                    .show();
                  setTimeout(this.drawerView.closeMenu, 2000);
                }}>
                  <FormattedMessage id="app.menu-item.2"
                    defaultMessage="item2"
                    description="menu item2" />
                </li>

                <li onClick={() => {
                  if (document.body.classList.contains("x")) {
                    document.body.classList.remove("x");
                  } else {
                    document.body.classList.add("x");
                  }
                }}>
                  <FormattedMessage id="app.menu-item.3"
                    defaultMessage="item3"
                    description="menu item3" />
                </li>

                <li onClick={() => this.changeTheme()}>
                  <FormattedMessage id="app.menu-item.theme"
                    defaultMessage="theme"
                    description="menu item theme" />
                </li>

                <li onClick={() => this.changeLocale()}>
                  <FormattedMessage id="app.menu-item.locale"
                    defaultMessage="locale"
                    description="menu item locale" />
                </li>

                {ClientUtils.isClient &&
                  <li onClick={() => ClientUtils.exit()}>
                    <FormattedMessage id="app.menu-item.exit"
                      defaultMessage="exit"
                      description="menu item exit" />
                  </li>
                }

                <li onClick={() => this.drawerView.closeMenu()}>
                  <FormattedMessage id="app.menu-item.close"
                    defaultMessage="close"
                    description="menu item close" />
                </li>

              </MenuList>
            </Menu>

            <main className='content'>
              <FloatActionButton>
                <div onClick={() => toast('test')}>1</div>
                <div onClick={() => this.goTo('/test')}>2</div>
                <div onClick={() => this.setState({ isViewMode: !this.state.isViewMode })}>3</div>
              </FloatActionButton>
              {this.state.isViewMode || <Banner />}
              {this.state.isLoading || <CardRouter />}
            </main>

          </DrawerView>
        </ThemeProvider>
      </IntlProvider>
    );
  }

  componentDidMount() {
    this.setState({ isLoading: false });
    this.progress.loaded('app');

    //check if background image loaded
    (() => {
      const matchBgUrl = this.getTheme().AppBackground.match(/url\((['"])(.+)\1\)/);
      if (!matchBgUrl) return true;
      const url = matchBgUrl[2];
      const img = new Image();
      img.src = url;
      if (img.complete) return true;
      img.onload = () => {
        this.progress.loaded('background');
      }
      return false;
    })() && this.progress.loaded('background');

    //delete the pre-rendered style
    ((styleTag = document.querySelectorAll('style[data-styled]')) => {
      if (styleTag.length === 2 && styleTag[0].innerHTML && !styleTag[1].innerHTML)
        styleTag[0].parentNode.removeChild(styleTag[0]);
    })();

    //set language
    const lang = (navigator.language || navigator.browserLanguage).toLowerCase();
    if (lang.indexOf('zh') >= 0 && this.state.currentLocale === 'en') {
      this.changeLocale();
    }

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

function withRouter(Child) {
  return (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return <Child {...props} navigate={navigate} location={location} params={params} />;
  }
}

export default withRouter(App);