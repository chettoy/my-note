import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import TestPage from './TestPage';
import ContentPage from './ContentPage';

const getKey = location => {
  const path = location.pathname;
  if (path === '/' || path.startsWith('/id/')) {
    return 'con';
  }
  return path;
}

class CardRouter extends React.Component {
  render() {
    return (
      <Route
        render={({ location }) => (
          <TransitionGroup className='CardWrapper'>
            <CSSTransition key={getKey(location)} classNames='router' timeout={500}>
              <Switch location={location}>
                <Route exact path='/' render={ContentPage} />
                <Route path='/id/' render={ContentPage} />
                <Route exact path='/test' render={TestPage} />
                <Route exact path='/404' render={() => <div>Not Found</div>} />
                <Redirect from='*' to='/' />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    );
  }
}

export default CardRouter;