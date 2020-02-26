import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import TestPage from './TestPage';
import ContentPage from './ContentPage';

function Test() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <CSSTransition
      in={show}
      timeout={500}
      classNames='router'
      unmountOnExit>
      <TestPage />
    </CSSTransition>
  );
}

class CardRouter extends React.Component {
  render() {
    return (
      <div className='CardWrapper'>
        <Switch>
          <Route path='/test' exact component={Test} />
          <Route path='/404' exact render={() => <div>Not Found</div>} />
          <Route path='/' render={ContentPage} />
        </Switch>
      </div>
    );
  }
}

export default CardRouter;