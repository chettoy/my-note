import React from 'react';
import { useLocation } from 'react-router';
import { Route, Routes } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import TestPage from './TestPage';
import RedirectPage from './RedirectPage';
import ContentPage from './ContentPage';
import SettingsPage from './SettingsPage';
import Dashboard from './Dashboard/Dashboard';

const getKey = pathname => {
  if (pathname === '/' || pathname.startsWith('/id/')) {
    return 'con';
  }
  return pathname;
}

function CardRouter() {
  const nodeRef = React.createRef();
  const renderLocation = useLocation();
  const key = getKey(renderLocation.pathname);

  return (
    <TransitionGroup className='CardWrapper'>
      <CSSTransition key={key} nodeRef={nodeRef} classNames='router' timeout={500}>
        <div ref={nodeRef}>
          <Routes location={renderLocation}>
            <Route path='/' element={<ContentPage />} />
            <Route path='/id/:id' element={<ContentPage />} />
            <Route path='/dash' element={<Dashboard />} />
            <Route path='/settings' element={<SettingsPage />} />
            <Route path='/test' element={<TestPage />} />
            <Route path='/404' element={<div>Not Found</div>} />
            <Route path='*' element={<RedirectPage to='/' />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default React.memo(CardRouter);