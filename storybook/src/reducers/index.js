import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { NotificationsStateReducer } from './NotificationPanelReducer';
import { ModalReducers } from './ModalReducers';

const reducers = {
  routing: routerReducer,
  NotificationsState: NotificationsStateReducer,
  ModalState: ModalReducers
};

export const rootReducer = combineReducers(reducers);
