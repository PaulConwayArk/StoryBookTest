import { DOM, Observable } from 'rx-dom';
import { prop, merge, forEachObjIndexed, of, compose, pathOr } from 'ramda';
import { ClearNotifications, RemoveNotification, HideNotification, PopNotification, PushNotification, ClearImportWorkflowsUploadFile } from './const';

function makeAuthenticatedRequest() {
  return 'Success we got there!!'
}

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


export const ClearImportWorkflowsUploadFileAction = () => ({ type: ClearImportWorkflowsUploadFile });

export const SendFormAction = dispatch => {

}

  // export const SendFormAction = form => (dispatch) => makeAuthenticatedRequest()
  // .map(SuccessNotificationAction)
  // .doOnNext(dispatch)
  // .subscribe(compose(dispatch, ClearImportWorkflowsUploadFileAction), compose(dispatch, DangerNotificationAction, _ => 'Upload Failed'));
