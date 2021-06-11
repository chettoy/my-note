import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

function loadLocaleData(locale) {
  switch (locale) {
    case 'zh':
      return import('./lang/zh.json')
    default:
      return import('./lang/en.json')
  }
}

async function bootstrapApplication(locale) {
  const messages = await loadLocaleData(locale);
  const app = (
    <React.StrictMode>
      <Router>
        <App locale={locale} messages={messages} />
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
}

bootstrapApplication();