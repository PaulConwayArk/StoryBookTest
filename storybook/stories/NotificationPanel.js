import React from 'react';
import NotificationPanel from '../src/components/NotificationPanel';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { rootReducer } from '../src/reducers/index';

const initalState = {
  routing: null,
  NotificationsState: {
    notifications: [],
    activeNotifications: [{type: 'success', value : "Hello"},{type: 'success', value : "123"}]
  }
}

const store = createStore( rootReducer, initalState, applyMiddleware(thunkMiddleware));

storiesOf('Redux React Notification ', module)
.addDecorator((getStory) => (
  <Provider store={store}>
    { getStory() }
  </Provider>
))
.add('Notifications', () => <NotificationPanel />)