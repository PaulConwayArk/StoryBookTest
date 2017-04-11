import React , { Component, PropTypes  } from 'react';
import { Modal, Button } from 'react-bootstrap';

const propTypes = {
  btnText: PropTypes.string.isRequired,
  btnStyle: PropTypes.string,
  btnSize: PropTypes.string,
  modalSize: PropTypes.string,
  modalTitleText: PropTypes.string,
  modalBodyText: PropTypes.string,
};

const defaultProps = {
  btnText: 'Click Me!',
  btnStyle: 'primary',
  btnSize : null,
  modalSize : null,
  modalTitleText : null,
  modalBodyText : null
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
      btnText,
      btnStyle,
      btnSize,
      modalSize,
      modalTitleText,
      modalBodyText
    } = this.props;

    return (
      <div>
        <Button
          bsStyle= {btnStyle}
          bsSize= {btnSize}
          onClick={this.open}
        >
          {btnText}
        </Button>
        <Modal bsSize={modalSize} show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>{modalTitleText}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {modalBodyText}
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
