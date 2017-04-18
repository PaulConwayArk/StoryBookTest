import React , { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ReactHighcharts from 'react-highcharts';
import defaultTheme from '../../static/highchartsTheme/default.js';
import darkBlue from '../../static/highchartsTheme/dark-blue.js';
import darkGreen from '../../static/highchartsTheme/dark-green.js';
import darkUnica from '../../static/highchartsTheme/dark-unica.js';
import grey from '../../static/highchartsTheme/grey.js';
import sandSignika from '../../static/highchartsTheme/sand-signika.js';

const propTypes = {
  highchartsTheme: PropTypes.string
};

const defaultProps = {
  highchartsTheme: defaultTheme
};

class HighchartsView extends Component {
  selectTheme(tc) {
    if (tc == 'default')
    return defaultTheme;

    if (tc == 'darkBlue')
    return darkBlue;

    if (tc == 'darkGreen')
    return darkGreen;

    if (tc == 'darkUnica')
    return darkUnica;

    if (tc == 'grey')
    return grey;

    if (tc == 'gridLight')
    return gridLight;

    if (tc == 'grid')
    return grid;

    if (tc == 'sandSignika')
    return sandSignika;
  }

  render() {
    const {
      highchartsTheme
    } = this.props;

    const config = {
      title: {
        text: highchartsTheme
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
      }]
    };

    ReactHighcharts.Highcharts.setOptions(this.selectTheme(highchartsTheme));
    return <ReactHighcharts config={config} ></ReactHighcharts>;
  }
}

HighchartsView.propTypes = propTypes;
HighchartsView.defaultProps = defaultProps;

export default HighchartsView;
