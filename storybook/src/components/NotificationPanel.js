import React, { Component } from 'react';
import { connect } from 'react-redux';
import { take } from 'ramda';
import { RemoveNotificationAction, HideNotificationAction, ClearNotificationsAction, PushNotificationAction } from '../actions';

class NotificationPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  render() {
    return (
      <div>
        <button type="button" onClick={this.props.actions.PushNotificationAction.bind(this)} className={`btn pull-left`}>Send Request</button>
        <button type="button" onClick={_ => this.setState({ open: !this.state.open })} className={` navbar-brand fa fa-bell-o btn pull-right notification-button bellButton ${this.state.open ? 'btn-danger' : 'navbar-inverse'}`} title={`${this.state.open ? 'nascondi' : 'mostra'}`}><div className="badge">{this.props.alerts.filter(x => !x.hide).length || null}</div></button>
        <div className={`navbar-inverse notification-bar ${this.state.open ? '' : 'hide'}`} style={{ right: '0px', bottom: '0px', top: '50px', width: '250px', position: 'fixed', zIndex: 10 }}>
          <div>
            <h4>Notifications<a className="pull-right clearButton" onClick={_ => this.props.actions.clearNotifications()}>Clear</a></h4>
          </div>
          {
            this.props.alerts.map(({ type, value, hide }, i) =>
              (<div className={`alert alert-${type} alert-dismissible ${hide ? 'hide' : ''}`} role="alert" key={i}>
                <button type="button" className="close" aria-label="Close" onMouseDown={_ => this.props.actions.removeNotification(i)}><span aria-hidden="true">&times;</span></button>
                {value}
              </div>)
            )
          }
        </div>
        <div className={`${!this.state.open ? '' : 'hide'}`} style={{ right: '10px', top: '60px', position: 'fixed', zIndex: 10 }}>
          {
            this.props.active.map(({ type, value, hide }, i) =>
              (<div className={`alert alert-${type} alert-dismissible ${hide ? 'hide' : ''}`} role="alert" key={i}>
                <button type="button" className="close" aria-label="Close" onMouseDown={_ => this.props.actions.hideNotification(i)}><span aria-hidden="true">&times;</span></button>
                {value}
              </div>)
            )
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps({ NotificationsState }) {
  return { alerts: NotificationsState.notifications, active: take(1, NotificationsState.activeNotifications) };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      PushNotificationAction: () => dispatch(PushNotificationAction({ type: 'success', value: 'We got here' })),
      hideNotification: _ => dispatch(HideNotificationAction()),
      removeNotification: i => dispatch(RemoveNotificationAction(i)),
      clearNotifications: _ => dispatch(ClearNotificationsAction())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationPanel);
