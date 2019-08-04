import { createStore, compose, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import { IApplicationState } from '../reducers/index.interface';

const enhancers = [];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(thunk),
  ...enhancers
);

const persistedState: any = {
  auth: { authenticated: localStorage.getItem('token') }
};

const store: Store<IApplicationState> = createStore(
  reducers,
  persistedState,
  composedEnhancers
);

export default store;
