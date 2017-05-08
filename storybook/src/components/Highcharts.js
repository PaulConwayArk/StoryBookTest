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
  highchartsTheme: PropTypes.object,
  data: PropTypes.object
};

const defaultProps = {
  highchartsTheme: defaultTheme,
  data: {
    name: 'Test',
    chart: {
      type: 'area'
    },
    series: [{
      name: 'Test',
      data: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    }],
    lineWidth: 0.5,
    marker: {radius: 2.5},
    yAxis: {
      title: {
        text: '€/MWh'
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#808080'
      }]
    },
    xAxis: {
      title: {
        text: 'Hour'
      },
      tickmarkPlacement: 'on'
    },
  }
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
      highchartsTheme,
      data
    } = this.props;

    ReactHighcharts.Highcharts.setOptions(this.selectTheme(highchartsTheme));
    return (
      <div className='chart'>
        <ReactHighcharts config={data} ></ReactHighcharts>
      </div>
    );
  }
}

HighchartsView.propTypes = propTypes;
HighchartsView.defaultProps = defaultProps;

export default HighchartsView;
