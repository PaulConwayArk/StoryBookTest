import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Modal, Button, closeButton } from 'react-bootstrap';
import { ModalActions } from '../../actions';
import Dropdown from '../ReduxDropDowns';
import DatePicker from '../ReduxDatePicker';
import CheckboxPicker from '../ReduxCheckbox';
import ChartData from '../../../static/components/componentInfo.json';
import ChartData2 from '../../../static/components/componentInfo2.json';
import { filter, where, contains, prop } from 'ramda';


const propTypes = {
  dropdownDisplay: PropTypes.bool,
  checboxDisplay: PropTypes.bool
};

const defaultProps = {
  dropdownDisplay: false,
  checboxDisplay: false
};


class ModalView extends Component {
  constructor(props) {
    super(props);
    this.buildChart = this.buildChart.bind(this)
  }

  areaChart(){
    const objectFilter = where({Zona: contains(this.props.Dropdown.selectedItem.value)});
    const filtered = filter(objectFilter)(ChartData.value);
    const data  = filtered.map(prop('Value'));
    const dateSeries = [{
      name: this.props.Dropdown.selectedItem.value,
      data: data
    }]
    this.props.actions.UpdateChart(dateSeries);
  }

  areaChart2(){
    const dateSeries = [];
    this.props.Checbox.selectedCheckboxes.map( (value, i) => {

      const objectFilter = where({Zona: contains(value)});
      const filtered = filter(objectFilter)(ChartData2.value);
      const data  = filtered.map(prop('Value'));
      dateSeries.push({
        name: value,
        data: data
      });
    });
    this.props.actions.UpdateChart2(dateSeries);
  }

  buildChart(){
    this.areaChart();
    this.areaChart2();
    this.props.actions.CloseModalKeepState();
  }

  render() {
    const {
      dropdownDisplay,
      checboxDisplay
    } = this.props;

    return (
      <div>
        <span onClick={this.props.actions.OpenModal}><i className='fa fa-cog'/></span>
        <Modal show={this.props.Modal.showModal} onHide={this.props.actions.CloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Test Redux Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <DatePicker />
            {/* <Dropdown />
            <CheckboxPicker /> */}
            {dropdownDisplay ? <Dropdown /> : null}
            {checboxDisplay ? <CheckboxPicker /> : null}
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle='primary' onClick={this.buildChart}>Apply</Button>
            <Button onClick={this.props.actions.CloseModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

ModalView.propTypes = propTypes;
ModalView.defaultProps = defaultProps;

function mapStateToProps({ ModalState }) {
  return {
    Modal: ModalState.Modal,
    Dropdown: ModalState.DropdownSettings,
    Checbox: ModalState.ChecboxSettings
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      CloseModal: () => dispatch(ModalActions.CloseModalAction()),
      CloseModalKeepState: () => dispatch(ModalActions.CloseModalKeepStateAction()),
      OpenModal: () => dispatch(ModalActions.OpenModalAction()),
      ChangeDatePicker: date => dispatch(ModalActions.DatePickerAction(date)),
      UpdateChart : data => dispatch(ModalActions.BuildHighchartAction(data)),
      UpdateChart2 : data => dispatch(ModalActions.BuildHighchartAction2(data))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalView);
