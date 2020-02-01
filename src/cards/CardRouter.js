import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import TestPage from './TestPage';
import ContentPage from './ContentPage';

class CardRouter extends React.Component {
  render() {
    return (
      <Route
        render={({ location }) => (
          <TransitionGroup className='CardWrapper'>
            <CSSTransition key={location.pathname} classNames='router' timeout={500}>
              <Switch location={location}>
                <Route exact path='/' component={ContentPage} />
                <Route exact path='/test' component={TestPage} />
                <Route render={() => <div>Not Found</div>} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    );
  }
}

export default CardRouter;