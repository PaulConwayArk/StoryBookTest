import React , { Component, PropTypes  } from 'react';
import { connect } from 'react-redux';
import { ModalActions } from '../actions';
import { contains } from 'ramda';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(val) {
    if(contains(val.target.value, this.props.checkbox.selectedCheckboxes )){
      this.props.actions.RemoveCheckboxSelectedItem(val.target.value)
    }
    else{
      this.props.actions.AddCheckboxSelectedItem(val.target.value)
    }
  }

  render() {
    return (
      <div className='checkboxStyle'>
        {
          this.props.checkbox.checkboxItems.map((value , i) =>
          (
            <label key={value} className={`checkbox checkbox-inline`}>
              <input
                type= 'checkbox'
                value={value}
                onChange={this.handleToggle}
                checked={contains( value, this.props.checkbox.selectedCheckboxes)}/>{value}
              </label>)
            )
          }
        </div>
      )
    }
  }

  function mapStateToProps({ ModalState }) {
    return {
      checkbox: ModalState.ChecboxSettings
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      actions: {
        AddCheckboxSelectedItem: value => dispatch(ModalActions.AddCheckboxSelectedAction(value)),
        RemoveCheckboxSelectedItem: value => dispatch(ModalActions.RemoveCheckboxSelectedAction(value))
      }
    };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Checkbox);
