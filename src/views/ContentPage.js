import React from 'react';
import { matchPath, useLocation, useNavigate, useParams } from 'react-router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components/macro';
import Velocity from 'velocity-animate';
import PageCard from './PageCard';
import ConLoader from './ContentPage/ConLoader';
import ConList from './ContentPage/ConList';
import ConDetail from './ContentPage/ConDetail';

import 'katex/contrib/copy-tex/copy-tex.js';
import 'katex/contrib/copy-tex/copy-tex.css';
import 'katex/contrib/mhchem/mhchem.js';

const ConContainer = styled(PageCard)`
  background: transparent;
  box-shadow: none;
  margin: 0;
  padding: 0;
  width: auto;
  height: auto;
  @media screen and (max-width:549px) {
    padding: 0 0.375rem;
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
    this.matchCurrentLocation = ({ pathname }) => {
      if (matchPath(this.routes.detail.path, pathname)) {
        return this.routes.detail.name;
      } else if (matchPath(this.routes.list.path, pathname)) {
        return this.routes.list.name;
      } else {
        return '';
      }
    };
    this.currentView = this.matchCurrentLocation(props.location);
    this.currentLocation = props.location;
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
    this.recoverScroll();
  }

  componentWillUnmount() {
    window.history.scrollRestoration = this._scrollRestoration;
  }

  onLocationChanged = (location) => {
    this.currentView = this.matchCurrentLocation(location);
    this.currentLocation = location;
    if (this.currentView === this.routes.detail.name) {
      Velocity(this.getWrapperDOM(), 'scroll');
    } else if (this.currentView === this.routes.list.name) {
      this.recoverScroll();
    } else {
      Velocity(this.getWrapperDOM(), 'scroll', { duration: 500 });
    }
  }

  render() {
    const nodeRef = React.createRef();

    let renderLocation = this.props.location;
    let renderView = this.matchCurrentLocation(renderLocation);

    // when routing to other page
    if (renderLocation !== this.currentLocation && renderView === '') {
      // keep renderLocation unchanged
      renderLocation = this.currentLocation;
      renderView = this.matchCurrentLocation(renderLocation);
      // save scroll state
      this.saveScroll();
    }

    const renderPathname = renderLocation.pathname;

    return (
      <div ref={this.viewRef}>
        <LocationListener listenFunc={this.onLocationChanged} />
        <TransitionGroup component={null}>
          <CSSTransition key={renderPathname} nodeRef={nodeRef} classNames='router' timeout={500}>
            <ConContainer ref={nodeRef}>

              {this.routes.list.name === renderView &&
                <ConList {...this.props}
                  conLoader={this.loader}
                  onClickItem={() => this.saveScroll()} />}
              {this.routes.detail.name === renderView &&
                <ConDetail {...this.props}
                  conLoader={this.loader}
                  conId={matchPath(this.routes.detail.path, renderPathname).params.id} />}

            </ConContainer>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

function LocationListener(props) {
  const location = useLocation();

  React.useEffect(() => {
    props.listenFunc(location);
  }, [location, props]);

  return null;
};

function withRouter(Child) {
  return (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return <Child {...props} navigate={navigate} location={location} params={params} />;
  }
}

export default withRouter(ContentPage);