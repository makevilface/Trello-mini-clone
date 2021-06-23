import { createStore } from 'redux';
import { throttle } from 'lodash';
import generateInitialState from './generateInitialState';
import { setLocalStorage, getLocalStorage } from '../utils/localStorage';

import rootReducer from './reducers';

const stateFromLocalStorage = getLocalStorage('state');

const store = createStore(
  rootReducer,
  stateFromLocalStorage,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(
  throttle(() => {
    setLocalStorage('state', store.getState());
  }, 1000),
);

if (!store.getState().board.lists.length) {
  generateInitialState(store);
}

export default store;
