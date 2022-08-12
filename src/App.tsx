import React from 'react';
import { IntlProvider } from 'react-intl';
import { useLocation, useNavigate, useParams } from 'react-router';
import styled, { ThemeProvider } from 'styled-components/macro';
import IAppContext from './IAppContext';
import ClientUtils from './common/ClientUtils';
import MessageHandler from './common/MessageHandler';
import Toast from './common/SuperToast';
import NProgressManager from './common/NProgressManager';
import WallpaperView from './views/WallpaperView';
import WebAppView from './views/WebAppView';
import EnglishMessages from './lang/compiled/en.json';
import Dark from './themes/Dark';
import Light from './themes/Light';
import './App.scss';


const toast = (text: string, during = Toast.LENGTH_SHORT) => {
  Toast.makeText(null, text, during).show();
};

const BackgroundCanvas = styled.canvas.attrs({ className: 'bg' })`
  background: ${(props: any) => props.theme.AppBackground};
`;

BackgroundCanvas.defaultProps = { theme: { AppBackground: '#e0e0e0' } };

enum AppLocale { en = 'en', zh = 'zh' }

interface IState {
  isWallpaperMode: boolean,
  currentLocale: AppLocale,
  currentTheme: number,
  localeMessages: any,
}

class App extends React.Component<any, IState> implements IAppContext {

  themeList = [Light, Dark];
  progress = new NProgressManager();

  constructor(props: any) {
    super(props);
    this.progress.newToLoad('app');
    this.progress.newToLoad('background');
    this.state = {
      isWallpaperMode: false,
      currentLocale: AppLocale.en,
      currentTheme: 0,
      localeMessages: { en: EnglishMessages },
    };
    MessageHandler.init({
      context: this,
      log: (tag: string, msg: string) => {
        const text = `[${tag}] ${msg}`;
        console.log(text);
        Toast.makeText(this, text, Toast.LENGTH_LONG).show();
      },
    });
  }


  handleSearch = (str: string) => {
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
    if (this.state.currentLocale === AppLocale.en) {
      const messages = this.state.localeMessages;
      if (!messages[AppLocale.zh]) {
        this.progress.newToLoad('lang-zh');
        import('./lang/compiled/zh.json').then(mod => {
          this.progress.loaded('lang-zh');
          messages[AppLocale.zh] = mod.default;
          this.setState({ currentLocale: AppLocale.zh, localeMessages: messages });
        });
      } else {
        this.setState({ currentLocale: AppLocale.zh });
      }
    } else {
      this.setState({ currentLocale: AppLocale.en });
    }
  }


  changeTheme() {
    if (this.state.currentTheme < this.themeList.length - 1) {
      this.setState({ currentTheme: this.state.currentTheme + 1 });
    } else {
      this.setState({ currentTheme: 0 });
    }
  }


  goTo(path: string) {
    if (path === this.props.location.pathname) return;
    if (path === '/') {
      this.props.navigate(-1);
    } else {
      this.props.navigate(path);
    }
  }


  toggleWallpaperMode = () => {
    if (!this.state.isWallpaperMode) {
      if (!document.fullscreenElement) {
        document.body.requestFullscreen().then(() => {
          console.log('enter fullscreen mode');
        }).catch(e => {
          console.error(e);
        });
      }
    } else {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    }
    this.setState({ isWallpaperMode: !this.state.isWallpaperMode });
  }


  render() {
    return (
      <IntlProvider
        locale={this.state.currentLocale}
        defaultLocale="en"
        messages={this.state.localeMessages[this.state.currentLocale]}>
        <ThemeProvider theme={this.getTheme()}>
          <BackgroundCanvas />
          {
            this.state.isWallpaperMode ?
              <WallpaperView appContext={this} />
              :
              <WebAppView
                appContext={this}
                handleSearch={this.handleSearch} />
          }
        </ThemeProvider>
      </IntlProvider>
    );
  }


  componentDidMount() {
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
        styleTag[0].parentNode?.removeChild(styleTag[0]);
    })();

    //set language
    const lang = navigator.language.toLowerCase();
    if (lang.indexOf('zh') >= 0 && this.state.currentLocale === AppLocale.en) {
      this.changeLocale();
    }
  }
}


function withRouter(Child: any) {
  return (props: any) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return <Child {...props} navigate={navigate} location={location} params={params} />;
  }
}

export default withRouter(App);
