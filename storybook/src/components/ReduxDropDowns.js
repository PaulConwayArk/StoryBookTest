import React , { Component, PropTypes  } from 'react';
import { connect } from 'react-redux';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { ModalActions } from '../actions';
import Select from 'react-select';

class DropdownView extends Component {
  constructor(props) {
    super(props);
  }

  getSelectedItem(val){
    this.props.actions.ChangeDropdownSelectedItem(val.value)
  }

  render() {
    return (
      <Select
        name="form-field-name"
        value={this.props.Dropdown.selectedItem}
        clearable= {false}
        searchable= {false}
        options={this.props.Dropdown.selectedItems}
        onChange={this.props.actions.ChangeDropdownSelectedItem}
      />
    )
  }
}

function mapStateToProps({ ModalState }) {
  return {
    Dropdown: ModalState.DropdownSettings
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      ChangeDropdownSelectedItem: value => dispatch(ModalActions.DropdownSelectedItemAction(value))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DropdownView);
