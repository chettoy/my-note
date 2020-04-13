import React from 'react';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components/macro';
import ClientUtils from './common/ClientUtils';
import MessageHandler from './common/MessageHandler';
import MyCommon from './common/MyCommon';
import SnackBar from './common/SnackBar';
import Toast from './common/SuperToast';
import Loading from './components/Loading';
import Framework from './components/Framework';
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

const toast = (text, during=Toast.LENGTH_SHORT) => {
  Toast.makeText(null, text, during).show();
};

const BackgroundCanvas = styled.canvas.attrs({className: 'bg'})`
  background: ${props => props.theme.AppBackground};
`;
BackgroundCanvas.defaultProps = {theme: {AppBackground: '#e0e0e0'}};


class App extends React.Component {
  view = null;
  sessionStorageSupported = false;
  themeList = [Light, Dark];
  loadSet = new Set(['app', 'bg']);

  constructor(props) {
    super(props);
    try {
      this.sessionStorageSupported = ('sessionStorage' in window && window['sessionStorage'] !== null);
    } catch(e) {}
    this.state = {
      isLoading: true,
      currentTheme: 0
    };
    MessageHandler.init({
      context: this,
      log: (tag, msg) => {
        const text = `[${tag}] ${msg}`;
        console.log(text);
        Toast.makeText(this, text, Toast.LENGTH_LONG).show();
      }
    });
  }

  getTheme = () => this.themeList[this.state.currentTheme];

  updateProgress = item => {
    if (!this.loadSet.has(item)) return;
    this.loadSet.delete(item);
    const progress = window.NProgress; // imported in index.html
    if (!progress) {
      console.log('NProgress not found');
      return;
    }
    if (this.loadSet.size > 0) {
      progress.inc();
    }else{
      progress.done();
    }
  }

  handleSearch = s => {
    toast('search ' + s);
  }

  goTo = path => {
    if (path === this.props.location.pathname) return;
    if (path === '/') {
      this.props.history.goBack();
    }else{
      this.props.history.push(path);
    }
  }

  render() {
    return (
      <>
        <Helmet>
          <meta name='google' content='notranslate' />
          <title>mynote</title>
        </Helmet>
        <ThemeProvider theme={this.getTheme()}>
          <Framework ref={instance => this.view = instance}>
            <BackgroundCanvas />
            <Toolbar statusBarHeight={ClientUtils.getStatusBarHeight()} onSearch={this.handleSearch} />
            <Menu>
              <React.Suspense fallback={<Loading />}>
                {this.state.isLoading? null: <MusicPlayer />}
              </React.Suspense>
              <MenuList>
                <li onClick={() => this.goTo('/')}>item1</li>
                <li onClick={() => {
                  SnackBar.make(null, 'test', -1)
                    .setOnShowed(() => this.view.closeMenu())
                    .show();
                }}>item2</li>
                <li onClick={() => {
                  if (document.body.classList.contains("x")) {
                    document.body.classList.remove("x");
                  }else{
                    document.body.classList.add("x");
                  }
                }}>item3</li>
                <li onClick={() => {
                  if (this.state.currentTheme < this.themeList.length - 1) {
                    this.setState({currentTheme: this.state.currentTheme + 1});
                  }else{
                    this.setState({currentTheme: 0});
                  }
                }}>item4</li>
                {ClientUtils.isClient && <li onClick={() => ClientUtils.exit()}>Exit</li>}
                <li onClick={() => this.view.closeMenu()}>close</li>
              </MenuList>
            </Menu>
            <main className='content'>
              <FloatActionButton>
                <div onClick={() => toast('test')}>1</div>
                <div onClick={() => this.goTo('/test')}>2</div>
                <div>3</div>
              </FloatActionButton>
              <Banner />
              {this.state.isLoading || <CardRouter />}
            </main>
          </Framework>
        </ThemeProvider>
      </>
    );
  }

  componentDidMount() {
    if (MyCommon.isSnap) return;
    this.setState({isLoading: false});
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
      }else{
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

    //init live2d
    if (Config.loadLive2d) Live2dWidget.load();

    //show welcome
    if ((!this.sessionStorageSupported) || sessionStorage.show_welcome === undefined) {
      setTimeout(() => {
        if (this.sessionStorageSupported) {
          sessionStorage.show_welcome = true;
        }
        SnackBar.make(this.view.conDOM, "Welcome", SnackBar.LENGTH_LONG).show();
      }, 1500);
    }
  }
}

export default withRouter(App);