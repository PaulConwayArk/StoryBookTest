
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { rootReducer } from '../reducers';

const initalState = {
  routing: null,
  NotificationsState: {
    notifications: 0,
    activeNotifications: 0
  }
}

const store = createStore( rootReducer, initalState, applyMiddleware(thunkMiddleware));

if(module.hot) {
  module.hot.accept('../reducers/', () => {
    const nextRootReducer = require('../reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
