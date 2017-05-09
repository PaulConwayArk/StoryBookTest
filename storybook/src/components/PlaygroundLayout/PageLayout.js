import React , { Component, PropTypes  } from 'react';
import Highcharts from '../Highcharts';
import BootstrapTableView from '../Bootstrap_Table';
import ComponentContainer from './ComponentContainer';
import { connect } from 'react-redux';

const propTypes = {
  headerFixed: PropTypes.bool,
  footerFixed: PropTypes.bool,
  navFixed: PropTypes.bool,
  menuTop: PropTypes.bool,
  cssTheme: PropTypes.string
};

const defaultProps = {
  headerFixed: false,
  footerFixed: false,
  navFixed: false,
  menuTop: false,
  cssTheme: 'k4view'
};

class PageLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {hideMenu: false};
    this.hideMenu = this.hideMenu.bind(this);
    this.menuTopHideMenu = this.hideMenu.bind(this);
  }

  hideMenu(){
    this.setState({ hideMenu: !this.state.hideMenu });
  }

  menuTopHideMenu(){
    this.setState({ hideMenu: false });
  }

  render() {
    const {
      headerFixed,
      footerFixed,
      navFixed,
      menuTop,
      cssTheme
    } = this.props;

    return (
      <div className={`
        ${menuTop? 'menu-on-top ': ''}
        ${headerFixed? 'headerFixed' : ''}
        ${navFixed? 'navFixed' : ''}
        ${footerFixed? 'footerFixed' : ''}
        ${this.state.hideMenu? 'minified' : ''}
        ${cssTheme} `}>

        <div className={`col-lg-12 header`}></div>
        <div className={`col-lg-12 main noPadding`}>
          <aside id='left-panel'>
            <nav>
              <ul>
                <li><a><i className='fa fa-lg fa-address-book'/><span className='listItemText'>Address Book</span></a></li>
                <li><a><i className='fa fa-lg fa-cloud-upload'/><span className='listItemText'>Cloud Upload</span></a></li>
                <li><a><i className='fa fa-lg fa-envelope'/><span className='listItemText'>Email</span></a></li>
                <li><a><i className='fa fa-lg fa-wifi'/><span className='listItemText'>Wifi Settings</span></a></li>
              </ul>
            </nav>
            <span className='minifyme' onClick={this.hideMenu}><i className='fa fa-arrow-circle-left'/></span>
          </aside>
          <div id='container'>
            <ComponentContainer
              componentFunc={
                <Highcharts
                  data={this.props.ChartBuilder}
                />
              }
              dropdownDisplay={true}
            />

            <ComponentContainer
              componentFunc={
                <BootstrapTableView
                  dataVal = {10}
                />
              }
            />

            <ComponentContainer
              componentFunc={
                <Highcharts
                  data={this.props.ChartBuilder2}
                />
              }
              checboxDisplay={true}
            />

          </div>
        </div>
        <div className={`col-lg-12 footer`}></div>
      </div>
    )
  }
}

PageLayout.propTypes = propTypes;
PageLayout.defaultProps = defaultProps;

function mapStateToProps({ ModalState }) {
  return {
    ChartBuilder: ModalState.ChartBuilder,
    ChartBuilder2: ModalState.ChartBuilder2,
  };
}


export default connect(mapStateToProps)(PageLayout);
