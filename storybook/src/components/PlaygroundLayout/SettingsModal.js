import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button, closeButton } from 'react-bootstrap';
import { ModalActions } from '../../actions';
import Dropdown from '../ReduxDropDowns';
import DatePicker from '../ReduxDatePicker';

class ModalView extends Component {
  render() {
    return (
      <div>
        <span onClick={this.props.actions.OpenModal}><i className='fa fa-cog'/></span>
        <Modal show={this.props.Modal.showModal} onHide={this.props.actions.CloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Test Redux Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <DatePicker />
            <Dropdown />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.actions.CloseModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps({ ModalState }) {
  return {
    Modal: ModalState.Modal
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      CloseModal: () => dispatch(ModalActions.CloseModalAction()),
      OpenModal: () => dispatch(ModalActions.OpenModalAction())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalView);
