import React , { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import SettingsModal from './SettingsModal';

const propTypes = {
  componentFunc: PropTypes.func,
}

const defaultProps = {
  componentFunc: null
}

class portalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {isFullscreen: false};
    this.fullScreen = this.fullScreen.bind(this);
  }

  fullScreen(){
    this.setState({ isFullscreen: !this.state.isFullscreen });
  }

  render() {
    const {
      componentFunc
    } = this.props;

    return(
      <div className={`component ${this.state.isFullscreen? 'fullscreen-mode':''}`}>
        <div className='componentHeader'>
          <span onClick={this.fullScreen} className='pull-right settingsModal'><i className='fa fa-arrows-alt'/></span>
          <span className='pull-right settingsModal'><SettingsModal /></span>
        </div>
        <div className='componentContent'>
          {componentFunc}
        </div>
      </div>
    )
  }
}

portalComponent.propTypes = propTypes;
portalComponent.defaultProps = defaultProps;

export default portalComponent;
