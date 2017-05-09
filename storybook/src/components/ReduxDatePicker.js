import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { ModalActions } from '../actions';

class DatePickerView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.props.actions.ChangeDatePicker(date)
  }

  isWeekday(date) {
    const day = date.day()
    return day !== 0 && day !== 6
  }

  render() {
    return (
      <DatePicker
        selected={this.props.DatePickerSettings.datepickerDate}
        onChange={this.handleChange}
        monthsShown={1}
      />
    )
  }
}


function mapStateToProps({ ModalState }) {
  return {
    DatePickerSettings: ModalState.DateSettings
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      ChangeDatePicker: date => dispatch(ModalActions.DatePickerAction(date))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DatePickerView);
