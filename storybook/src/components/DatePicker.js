import React, { PropTypes } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

const propTypes = {
  monthsShown: PropTypes.number,
  showMonthDropdown: PropTypes.bool,
  showYearDropdown: PropTypes.bool,
  showWeekNumbers: PropTypes.bool,
  filterDate: PropTypes.bool,
  includeDatesDays: PropTypes.number,
  minDate: PropTypes.number,
  maxDate: PropTypes.number,
};

const defaultProps = {
  monthsShown: 1,
  showMonthDropdown: false,
  monthsShown: false,
  showWeekNumbers: false,
  filterDate: false,
  minDate: null,
  maxDate: null
};

class DatePickerView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  isWeekday(date) {
    const day = date.day()
    return day !== 0 && day !== 6
  }

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
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        monthsShown={monthsShown}
        showWeekNumbers={showWeekNumbers}
        showMonthDropdown={showMonthDropdown}
        showYearDropdown={showYearDropdown}
        filterDate={filterDate? this.isWeekday :  null}
        minDate={minDate != null ? moment().subtract(minDate, "days") : minDate}
        maxDate={maxDate != null ? moment().add(maxDate, "days") : maxDate}
      />
    )
  }
}

DatePickerView.propTypes = propTypes;
DatePickerView.defaultProps = defaultProps;
export default DatePickerView;
