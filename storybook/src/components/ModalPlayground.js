import React , { Component, PropTypes  } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Datepicker from './DatePicker'


const propTypes = {
  modalSize: PropTypes.string,
  modalSizeClassName: PropTypes.string
};

const defaultProps = {
  modalSize : null,
  modalSizeClassName: ''
};

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
    const {
      modalSize,
      modalSizeClassName
    } = this.props;

    return (
      <div>
        <Button
          bsStyle='primary'
          onClick={this.open}
        >
          Open        </Button>

        <Modal className= {modalSizeClassName} bsSize={modalSize} show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <Datepicker monthsShown={1}/>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
        </Modal>

      </div>
    )
  }
}

ModalView.propTypes = propTypes;
ModalView.defaultProps = defaultProps;

export default ModalView;
