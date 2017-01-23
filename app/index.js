import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import App from './components/App';
import DevTools from './containers/DevTools';

// TODO manage production/dev changes when adding the production webpack config.
const store = configureStore();
render(
  <AppContainer>
    <Provider store={store} >
      <div>
        <App />
        <DevTools />
      </div>
    </Provider>
  </AppContainer>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(
      <AppContainer>
        <Provider store={store} >
          <div>
            <App />
            <DevTools />
          </div>
        </Provider>
      </AppContainer>,
      document.getElementById('root'),
    );
  });
}
