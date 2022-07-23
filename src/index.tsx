import React from 'react';
//import ReactDOM from 'react-dom';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const app = (
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

const rootElement = document.getElementById('root');
if (rootElement && rootElement.hasChildNodes()) {
  // React 17
  // ReactDOM.hydrate(app, rootElement);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const root = hydrateRoot(rootElement, app);

} else {
  // React 17
  // ReactDOM.render(app, rootElement);
  
  const root = createRoot(rootElement!);
  root.render(app);

  //use concurrent mode
  //ReactDOM.unstable_createRoot(rootElement).render(app);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
