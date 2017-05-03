import React , { Component, PropTypes  } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Datepicker from '../DatePicker';
import {Checkbox} from '../FormUtils';

class ModalView extends Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false};
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div>
        <span onClick={this.open}><i className='fa fa-cog'/></span>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Component Settings</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <span><h3>Select Date: </h3> <Datepicker monthsShown={1}/></span>
            <div style={{'marginTop': '15px'}}>
              <Checkbox value="Checkbox 1" />
              <Checkbox value="Checkbox 2" />
              <Checkbox value="Checkbox 3" />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" onClick={this.close}>Submit</Button>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default ModalView;
