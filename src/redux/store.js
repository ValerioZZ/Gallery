import thunk from 'redux-thunk';

import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import createBrowserHistory from 'history/createBrowserHistory';

import getReducers from './reducers';
import sagas from './sagas';

export const history = createBrowserHistory();

const initialState = {};
const enhancers = [];

const sagaMiddleware = createSagaMiddleware();

const middleware = [thunk, sagaMiddleware, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  const { devToolsExtension } = window;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(getReducers(history), initialState, composedEnhancers);

sagaMiddleware.run(sagas);

export default store;
