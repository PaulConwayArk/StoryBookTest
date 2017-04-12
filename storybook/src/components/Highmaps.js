import React , { Component } from 'react';
import ReactHighMaps from 'react-highcharts/ReactHighmaps';
import maps from '../../static/maps/europe';

var config = {
  chart: {
    spacingBottom: 20
  },
  title: {
    text: 'Europe time zones'
  },

  legend: {
    enabled: true
  },

  plotOptions: {
    map: {
      allAreas: false,
      joinBy: ['iso-a2', 'code'],
      dataLabels: {
        enabled: true,
        color: 'white',
        style: {
          fontWeight: 'bold'
        }
      },
      mapData: maps,
      tooltip: {
        headerFormat: '',
        pointFormat: '{point.name}: <b>{series.name}</b>'
      }

    }
  },

  series: [{
    name: 'UTC',
    data: ['IE', 'IS', 'GB', 'PT'].map(function (code) {
      return { code: code };
    })
  }, {
    name: 'UTC + 1',
    data: ['NO', 'SE', 'DK', 'DE', 'NL', 'BE', 'LU', 'ES', 'FR', 'PL', 'CZ', 'AT', 'CH', 'LI', 'SK', 'HU', 'SI', 'IT', 'SM', 'HR', 'BA', 'YF', 'ME', 'AL', 'MK'].map(function (code) {
      return { code: code };
    })
  }]
};



class HighMapsView extends Component {
  render() {
    return <ReactHighMaps config={config} ref="chart"></ReactHighMaps>;
  }
}

export default HighMapsView;
