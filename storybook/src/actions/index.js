import { DOM, Observable } from 'rx-dom';
import { of } from 'ramda';
import {  RemoveNotification, HideNotification, ClearNotifications,  PopNotification, PushNotification } from './const';

export const PushNotificationAction = notification => dispatch =>
  Observable.of({ type: PushNotification, notification })
    .doOnNext(dispatch)
    .delay(8000)
    .map(_ => ({ type: PopNotification }))
    .doOnNext(dispatch)
    .subscribe();

export const SuccessNotificationAction = notification => dispatch =>
  of(notification)
    .map(x => ({ type: 'success', value: x }))
    .map(PushNotificationAction)
    .map(dispatch);

export const DangerNotificationAction = notification => dispatch =>
  of(notification)
    .map(x => ({ type: 'danger', value: x }))
    .map(PushNotificationAction)
    .map(dispatch);

export const HideNotificationAction = _ => ({ type: HideNotification });
export const RemoveNotificationAction = index => ({ type: RemoveNotification, index });
export const ClearNotificationsAction = _ => ({ type: ClearNotifications });
