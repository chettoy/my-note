import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import TestPage from './TestPage';
import ContentPage from './ContentPage';
import Dashboard from './Dashboard/Dashboard';

const getKey = location => {
  const path = location.pathname;
  if (path === '/' || path.startsWith('/id/')) {
    return 'con';
  }
  return path;
}

class CardRouter extends React.Component {
  render() {
    const nodeRef = React.createRef();
    return (
      <Route
        render={({ location }) => (
          <TransitionGroup className='CardWrapper'>
            <CSSTransition key={getKey(location)} nodeRef={nodeRef} classNames='router' timeout={500}>
              <div ref={nodeRef}>
                <Switch location={location}>
                  <Route exact path='/' render={ContentPage} />
                  <Route path='/id/' render={ContentPage} />
                  <Route exact path='/dash' render={Dashboard} />
                  <Route exact path='/test' render={TestPage} />
                  <Route exact path='/404' render={() => <div>Not Found</div>} />
                  <Redirect from='*' to='/' />
                </Switch>
              </div>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    );
  }
}

export default CardRouter;