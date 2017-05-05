import { combineReducers } from 'redux';
import { adjust, assoc, remove, merge } from 'ramda';
import Select from 'react-select';
import { CloseModal, OpenModal, DropdownSelectedItem, DateSelected } from '../actions/const';
import moment from 'moment';

const ModalInitialState = { showModal: false };

const ComponentSettingsstate ={
  dropdown:{
    // selectedItems:['CCT_CNOR', 'CCT_SUD', 'CCT_SARD', 'CCT_SICI', 'CCT_NORD', 'CCT_CSUD'],
    selectedItems:[
      { value: 'CCT_CNOR', label: 'CCT_CNOR' },
      { value: 'CCT_SUD', label: 'CCT_SUD' },
      { value: 'CCT_SARD', label: 'CCT_SARD' },
      { value: 'CCT_SICI', label: 'CCT_SICI' },
      { value: 'CCT_NORD', label: 'CCT_NORD' },
      { value: 'CCT_CSUD', label: 'CCT_CSUD' },
    ],
    selectedItem: 'CCT_CNOR',
    datepickerDate: moment()
  }
};

function ModalReducer(state = ModalInitialState, action) {
  switch (action.type) {
    case CloseModal:
      return ModalInitialState;
    case OpenModal:
      return {...state, showModal: true };
    default:
      return state;
  }
}

function DropdownSelectedItemReducer(state = ComponentSettingsstate, action) {
  switch (action.type){
    case DropdownSelectedItem:
      return {...state, selectedItem: action.value };
    default:
      return state;
  }
}

function DateSelectedReducer(state = ComponentSettingsstate, action) {
  switch (action.type){
    case DateSelected:
      return {...state, datepickerDate: action.date };
    default:
      return state;
  }
}

export const ModalReducers = combineReducers({
  Modal: ModalReducer,
  DropdownSettings: DropdownSelectedItemReducer
});
