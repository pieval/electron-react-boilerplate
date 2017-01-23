import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './redux/reducer';
import App from './components/App';

const store = createStore(reducers);

render(
  <AppContainer>
    <Provider store={store} >
      <App />
    </Provider>
  </AppContainer>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(
      <AppContainer>
        <Provider store={store} >
          <App />
        </Provider>
      </AppContainer>,
      document.getElementById('root'),
    );
  });
}
