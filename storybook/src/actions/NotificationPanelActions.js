import { DOM, Observable } from 'rx-dom';
import { of } from 'ramda';
import { RemoveNotification, HideNotification, ClearNotifications, PopNotification, PushNotification, ClearPopUpNotifications } from './const';

export const PushNotificationAction  = notification => dispatch =>
  Observable.of({ type: PushNotification, notification })
    .doOnNext(dispatch)
    .delay(240000)
    .map(_ => ({ type: PopNotification }))
    .doOnNext(dispatch)
    .subscribe();

export const NotificationAction = notification => dispatch =>
  of(notification)
    .map(x => ({ type: x.type, value: x.value }))
    .map(PushNotificationAction)
    .map(dispatch)

export const HideNotificationAction = _ => ({ type: HideNotification });
export const RemoveNotificationAction = index => ({ type: RemoveNotification, index });
export const ClearNotificationsAction = _ => ({ type: ClearNotifications });
export const ClearPopUpNotificationsAction = _ => ({ type: ClearPopUpNotifications });
