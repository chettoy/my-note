import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

  const app = (
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  );

  const rootElement = document.getElementById('root');
  if (rootElement.hasChildNodes()) {
    ReactDOM.hydrate(app, rootElement);
  } else {
    ReactDOM.render(app, rootElement);

    //use concurrent mode
    //ReactDOM.unstable_createRoot(rootElement).render(app);
  }

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: http://bit.ly/CRA-PWA
  serviceWorkerRegistration.register();
  