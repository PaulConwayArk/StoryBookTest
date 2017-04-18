import React , { Component, PropTypes } from 'react';
import ReactHighMaps from 'react-highcharts/ReactHighmaps';
import worldMap from '../../static/maps/world';
import europeMap from '../../static/maps/europe';
import irelandMap from '../../static/maps/ireland';
import italyMap from '../../static/maps/italy';

const propTypes = {
  country: PropTypes.string
};

const defaultProps = {
  country: 'europe'
};

class HighMapsView extends Component {
  selectMap(map) {
    if (map == 'europe')
    return europeMap;

    if (map == 'world')
    return worldMap;

    if (map == 'ireland')
    return irelandMap;

    if (map == 'italy')
    return italyMap;
  }

  render() {
    const {
      country
    } = this.props;

    // return <ReactHighMaps config={italyMap} ref="chart"></ReactHighMaps>;
    return <ReactHighMaps config={this.selectMap(country)} ref="chart"></ReactHighMaps>;
  }
}

HighMapsView.propTypes = propTypes;
HighMapsView.defaultProps = defaultProps;

export default HighMapsView;
