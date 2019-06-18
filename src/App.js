import React from 'react';
import Helmet from 'react-helmet';
import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components/macro';
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
import MusicPlayer from './components/MusicPlayer';
import CardView from './components/CardView';
import Banner from './components/Banner';
import './App.scss';

const statusBarHeight = ClientUtils.getStatusBarHeight();

const toast = (text, during=Toast.LENGTH_SHORT) => {
  Toast.makeText(null, text, during).show();
};

const Page = styled(CardView)`
  position: absolute;
  top: calc(${statusBarHeight}px + 3.125rem);
  min-height: 50vh;
  width: 40rem;
  max-width: 100%;
  @media screen and (min-width: 100rem) {
    width: 50rem;
  }
`;

function TestPage() {
  return (
    <Page>
      <p>test page</p>
    </Page>
  );
}

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    }else{
      return (
        <Page>
          <p>nothing</p>
        </Page>
      );
    }
  }

  componentDidMount() {
    if (MyCommon.isSnap) return;
    this.setState({isLoading: false});
  }
}

class App extends React.Component {
  view = null;
  sessionStorageSupported = false;

  constructor(props) {
    super(props);
    try {
      this.sessionStorageSupported = ('sessionStorage' in window && window['sessionStorage'] !== null);
    } catch(e) {}
    this.state = {xUI: false};
    MessageHandler.init({
      context: this,
      log: (tag, msg) => {
        const text = `[${tag}] ${msg}`;
        console.log(text);
        Toast.makeText(this, text, Toast.LENGTH_LONG).show();
      }
    });
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
      <div className={'AppWrapper' + (this.state.xUI ? ' x' : '')}>
        <Helmet>
          <meta name='google' content='notranslate' />
          <title>mynote</title>
        </Helmet>
        <Framework ref={instance => this.view = instance}>
          <Toolbar statusBarHeight={statusBarHeight} onSearch={this.handleSearch} />
          <Menu>
            <MusicPlayer />
            <MenuList>
              <li onClick={() => this.goTo('/')}>item1</li>
              <li onClick={() => {SnackBar.make(null, 'test', -1).show(); this.view.closeMenu()}}>item2</li>
              <li onClick={() => this.setState({xUI: !this.state.xUI})}>item3</li>
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
            <Route
              render={({ location }) => (
                <TransitionGroup className='CardWrapper'>
                  <CSSTransition key={location.pathname} classNames='router' timeout={500}>
                    <Switch location={location}>
                      <Route exact path='/' component={IndexPage} />
                      <Route exact path='/test' component={TestPage} />
                      <Route render={() => <div>Not Found</div>} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              )}
            />
          </main>
        </Framework>
      </div>
    );
  }

  componentDidMount() {
    if (MyCommon.isSnap) return;

    //delete the pre-rendered style
    ((styleTag = document.querySelectorAll('style[data-styled]')) => {
      if (styleTag.length === 2 && styleTag[0].innerHTML && !styleTag[1].innerHTML)
        styleTag[0].parentNode.removeChild(styleTag[0]);
    })();

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