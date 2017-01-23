import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';
import reducer from './modules/reducer';
import DevTools from '../containers/DevTools';

// TODO manage production/dev changes when adding the production webpack config.
export default function configureStore(initialState) {
  const middleware = [thunk];
  // if (process.env.NODE_ENV === 'development') {
  const enhancer = compose(
      applyMiddleware(...middleware),
      DevTools.instrument(),
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
    );
  // } else {
  //   enhancer = compose(
  //     applyMiddleware(...middleware),
  //   );
  // }
  const store = createStore(reducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('./modules/reducer', () =>
      store.replaceReducer(require('./modules/reducer').default), /* eslint global-require:0 */
    );
  }
  return store;
}
