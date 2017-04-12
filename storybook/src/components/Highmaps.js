import React , { Component } from 'react';
import ReactHighMaps from 'react-highcharts/ReactHighmaps';
import maps from '../../static/maps/world';

var data = [
    ['eu', 0],
    ['oc', 1],
    ['af', 2],
    ['as', 3],
    ['na', 4],
    ['sa', 5]
];

var config = {
    chart: {
        map: 'custom/world-continents'
    },

    title: {
        text: 'Highmaps basic demo'
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

    colorAxis: {
        min: 0
    },

    series: [{
        data: data,
        name: 'Random data',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
};


class HighMapsView extends Component {
  render() {
    return <ReactHighMaps config={config} ref="chart"></ReactHighMaps>;
  }
}

export default HighMapsView;
