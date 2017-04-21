import React, { Component } from 'react';
import { connect } from 'react-redux';
import { take } from 'ramda';
import { RemoveNotificationAction, HideNotificationAction, ClearNotificationsAction, SuccessNotificationAction, DangerNotificationAction } from '../actions';
import {  Button, Badge, Panel, ListGroup, ListGroupItem, Alert } from 'react-bootstrap';

class NotificationPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false};
    this.close = this.close.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  close() {
    this.setState({ open: false });
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  listGroupHandler(){
    return this.props.alerts.map(({ type, value, hide }, i) =>
    (
      <li key={i} className={`list-group-item list-group-item-${type}`} style={{'marginBottom':'5px'}}>
        {value}
        <Button
          className={`close`}
          onClick={_ => this.props.actions.removeNotification(i)}>
          &times;
        </Button>
      </li>))
    }

    notificationHandler(){
      return this.props.active.map(({ type, value, hide }, i) =>
      (
        <li key={i} className={`list-group-item list-group-item-${type} ${hide ? 'hide' : ''}`} style={{'marginBottom':'5px'}}>
          {value}
          <Button
            className="close"
            onClick={_ => this.props.actions.hideNotification(i)}>
            {i}
          </Button>
        </li>
      ))
    }

    render() {
      const title = (
        <div>
          <h4>Notifications
            <Button
              bsStyle = {'warning'}
              className = {`pull-right ${this.props.alerts.length > 0 ?  null : 'hide'}`}
              onClick = {this.props.actions.clearNotifications}>
              Clear
            </Button>
          </h4>
        </div>
      );

      return (
        <div>

          <Button
            bsStyle = {'primary'}
            className = {`pull-left`}
            onClick = {this.props.actions.PushNotificationAction.bind(this)}>
            Send Successful Request
          </Button>

          <Button
            bsStyle = {'danger'}
            className = {`pull-left`}
            onClick = {this.props.actions.PushNotificationActionFail.bind(this)}>
            Send Failed Request
          </Button>

          <Button
            bsStyle = {this.state.open ? 'danger' : ''}
            className = {'fa fa-bell-o btn pull-right notification-button'}
            onClick={this.handleToggle}>
            <Badge>{this.props.alerts.filter(x => !x.hide).length || null}</Badge>
          </Button>

          <Panel
            header = {title}
            className = {`pull-right ${this.state.open ?  '' : 'hide'}`}
            style = {{'marginTop': '30px', 'width': '250px'}}
            collapsible expanded={this.state.open}>
            <ul className="list-group">
              {this.props.alerts.length > 0 ? this.listGroupHandler() : <h5>No Notifications</h5>}
            </ul>
          </Panel>

          <Panel
            className = {'pull-right'}
            style = {{'marginTop': '60px', 'width': '250px', 'background': 'transparent', 'border': 'none', '-webkit-box-shadow':'0 0 0 rgba(0, 0, 0, 0)'}}
            collapsible expanded={true}>
            <ul className="list-group">
              {this.notificationHandler()}
            </ul>
          </Panel>
    </div>
  );
}
}

function mapStateToProps({ NotificationsState }) {
  return {
    alerts: NotificationsState.notifications,
    active: take(1, NotificationsState.activeNotifications) };
  }

  function mapDispatchToProps(dispatch) {
    return {
      actions: {
        PushNotificationActionFail: () => dispatch(SuccessNotificationAction('success' )),
        PushNotificationAction: () => dispatch(DangerNotificationAction('Failure')),
        hideNotification: _ => dispatch(HideNotificationAction()),
        removeNotification: i => dispatch(RemoveNotificationAction(i)),
        clearNotifications: _ => dispatch(ClearNotificationsAction())
      }
    };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(NotificationPanel);
