import React from 'react';
import { matchPath, withRouter } from 'react-router';
import { Redirect, Route, Switch } from 'react-router-dom';
import styled from 'styled-components/macro';
import Velocity from 'velocity-animate';
import Card from './Card';
import ConLoader from './ContentPage/ConLoader';
import ConList from './ContentPage/ConList';
import ConDetail from './ContentPage/ConDetail';

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
      list: props.match.url,
      detail: props.match.url + 'id/:id'
    };
    this.currentView = (() => {
      const { pathname } = props.location;
      if (matchPath(pathname, {path: this.routes.detail})) {
        return 'detail';
      }else if (matchPath(pathname, {path: this.routes.list, exact: true})) {
        return 'list';
      }else{
        return '';
      }
    })();
  }

  getTop() {
    const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    return this.viewRef.current.parentNode.getBoundingClientRect().top + scrollTop;
  }

  saveScroll() {
    const key = 'conPageScroll_' + this.currentView;
    const cardWrapper = this.viewRef.current.parentNode;
    window.sessionStorage[key] = - cardWrapper.getBoundingClientRect().top;
  }
  
  recoverScroll() {
    const key = 'conPageScroll_' + this.currentView;
    if (!(key in window.sessionStorage)) return;
    const cardWrapper = this.viewRef.current.parentNode;
    Velocity(cardWrapper, 'scroll', {offset: window.sessionStorage[key]});
  }

  componentDidMount() {
    this._scrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    this.unlistenHistory = this.props.history.listen((location, action) => {
      if (matchPath(location.pathname, {path: this.routes.detail})) {
        this.saveScroll();
        this.currentView = 'detail';
        Velocity(this.viewRef.current.parentNode, 'scroll');
      }else if (matchPath(location.pathname, {path: this.routes.list, exact: true})) {
        this.currentView = 'list';
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
      <ConContainer ref={this.viewRef}>
        <Switch>
          <Route
            path={this.routes.list} exact
            render={(props) => <ConList {...props} conLoader={this.loader} />} />
          <Route
            path={this.routes.detail}
            render={(props) => <ConDetail {...props} conLoader={this.loader} />} />
          <Redirect from='*' to='/' />
        </Switch>
      </ConContainer>
    );
  }
}

export default withRouter(ContentPage);