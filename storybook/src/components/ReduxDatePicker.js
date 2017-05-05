import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class DatePickerView extends React.Component {
  render() {
    const {
      monthsShown,
      showMonthDropdown,
      showYearDropdown,
      filterDate,
      includeDatesDays,
      minDate,
      maxDate,
      showWeekNumbers
    } = this.props;

    return (
      <DatePicker monthsShown={1} />
    )
  }
}

function mapStateToProps({ ModalState }) {
  return {
    Dropdown: ModalState.DropdownSettings.dropdown
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
