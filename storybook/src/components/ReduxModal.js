import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button, closeButton } from 'react-bootstrap';
import { ModalActions } from '../../actions';

class ModalView extends Component {
  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.actions.CloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Test Reduc Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            This is a test
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.actions.CloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

function mapStateToProps({ ModalState }) {
  return {
    ...ModalState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      CloseModal: () => dispatch(ModalActions.CloseModalAction)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalView);
