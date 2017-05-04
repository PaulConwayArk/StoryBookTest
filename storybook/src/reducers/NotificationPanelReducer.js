import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { adjust, assoc, remove } from 'ramda';
import { ClearNotifications, RemoveNotification, HideNotification, PushNotification, PopNotification, ClearPopUpNotifications } from '../actions/const';

function NotificationReducer(state = [], action) {
  switch (action.type) {
    case ClearNotifications:
      return [];
    case RemoveNotification:
      return remove(action.index, 1, state);
    case PushNotification:
      return [action.notification, ...state];
    default:
      return state;
  }
}

function ActiveNotificationReducer(state = [], action) {
  switch (action.type) {
    case HideNotification:
      return adjust(assoc('hide', true), 0, state);
    case ClearPopUpNotifications:
      return [];
    case PushNotification:
      return [action.notification, ...state];
    case PopNotification:
      return state.slice(0, -1);
    default:
      return state;
  }
}

export const NotificationsStateReducer = combineReducers({
  notifications: NotificationReducer,
  activeNotifications: ActiveNotificationReducer
});
