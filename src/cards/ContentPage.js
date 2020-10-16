import React from 'react';
import { matchPath, withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components/macro';
import Velocity from 'velocity-animate';
import Card from './Card';
import ConLoader from './ContentPage/ConLoader';
import ConList from './ContentPage/ConList';
import ConDetail from './ContentPage/ConDetail';

import 'katex/contrib/copy-tex/copy-tex.js';
import 'katex/contrib/copy-tex/copy-tex.css';
import 'katex/contrib/mhchem/mhchem.js';

const ConContainer = styled(Card)`
  background: transparent;
  box-shadow: none;
  margin: 0;
  padding: 0;
  width: auto;
  height: auto;
  font-size: 1rem;
  line-height: 1.5rem;
  @media screen and (max-width:549px) {
    padding: 0 0.375rem;
  }
  h1 {
    font-size: 1.5rem;
  }
  a.con-preview {
    color: #2196f3;
    font-size: 1.5rem;
  }
  iframe, video, img {
    max-width: 100%;
    height: auto;
  }
  blockquote {
    margin: 0;
    padding: 0.3rem 0.5rem;
    border-left: 0.25rem solid #0c0;
    background: #f5f2f0;
  }
  pre {
    overflow: auto;
  }
`;

class ContentPage extends React.Component {
  constructor(props) {
    super(props);
    this.loader = new ConLoader();
    this.viewRef = React.createRef();
    this.routes = {
      list: { name: 'list', path: '/' },
      detail: { name: 'detail', path: '/id/:id' }
    };
    this.currentView = (({ pathname }) => {
      if (matchPath(pathname, { path: this.routes.detail.path })) {
        return this.routes.detail.name;
      } else if (matchPath(pathname, { path: this.routes.list.path, exact: true })) {
        return this.routes.list.name;
      } else {
        return '';
      }
    })(props.location);
  }

  getWrapperDOM() {
    return this.viewRef.current.parentNode;
  }

  getTop(dom) {
    const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    return dom.parentNode.getBoundingClientRect().top + scrollTop;
  }

  saveScroll() {
    const key = 'conPageScroll_' + this.currentView;
    const cardWrapper = this.getWrapperDOM();
    window.sessionStorage[key] = - cardWrapper.getBoundingClientRect().top;
  }

  recoverScroll() {
    const key = 'conPageScroll_' + this.currentView;
    if (!(key in window.sessionStorage)) return;
    const cardWrapper = this.getWrapperDOM();
    Velocity(cardWrapper, 'scroll', { offset: window.sessionStorage[key] });
  }

  componentDidMount() {
    this._scrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    this.unlistenHistory = this.props.history.listen((location, action) => {
      if (matchPath(location.pathname, { path: this.routes.detail.path })) {
        this.saveScroll();
        this.currentView = this.routes.detail.name;
        Velocity(this.getWrapperDOM(), 'scroll');
      } else if (matchPath(location.pathname, { path: this.routes.list.path, exact: true })) {
        this.currentView = this.routes.list.name;
        this.recoverScroll();
      }
    });
    this.recoverScroll();
  }

  componentWillUnmount() {
    this.saveScroll();
    window.history.scrollRestoration = this._scrollRestoration;
    this.unlistenHistory();
  }

  render() {
    return (
      <div ref={this.viewRef}>
        <Route
          render={({ location, match }) => (
            <TransitionGroup>
              <CSSTransition key={location.pathname} classNames='router' timeout={500}>
                <ConContainer>
                  <Switch location={location}>
                    <Route
                      path={this.routes.list.path} exact
                      render={(props) => <ConList {...props} conLoader={this.loader} />} />
                    <Route
                      path={this.routes.detail.path}
                      render={(props) => <ConDetail {...props} conLoader={this.loader} />} />
                    <Route
                      render={() => {
                        console.log(`ConPage: pathname=${location.pathname}, match.url=${match.url}`);
                      }} />
                  </Switch>
                </ConContainer>
              </CSSTransition>
            </TransitionGroup>
          )} />
      </div>
    );
  }
}

export default withRouter(ContentPage);