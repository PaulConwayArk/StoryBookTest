import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { NotificationsStateReducer } from './NotificationPanelReducer';

const reducers = {
  routing: routerReducer,
  NotificationsState: NotificationsStateReducer
};

export const rootReducer = combineReducers(reducers);
