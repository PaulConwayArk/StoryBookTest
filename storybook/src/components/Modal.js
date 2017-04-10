import React , { Component, PropTypes  } from 'react';
import { Modal, Button } from 'react-bootstrap';

const propTypes = {
  btnText: PropTypes.string.isRequired,
  btnStyle: PropTypes.string,
  btnSize: PropTypes.string,
};

const defaultProps = {
  btnText: 'Click Me!',
  btnStyle: 'primary',
  btnSize : null
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
      btnSize
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
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
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
