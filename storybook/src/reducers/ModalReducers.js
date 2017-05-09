import { combineReducers } from 'redux';
import { adjust, assoc, remove, merge } from 'ramda';
import Select from 'react-select';
import { CloseModal, CloseModalKeepState, OpenModal, DropdownSelectedItem, DateSelected, CheckboxSelected, AddCheckboxSelected, RemoveCheckboxSelected, BuildHighchart, BuildHighchart2 } from '../actions/const';
import moment from 'moment';

const ModalInitialState = { showModal: false };

const ComponentSettingsstate ={
  selectedItems:[
    { value: 'CCT_CNOR', label: 'CCT_CNOR' },
    { value: 'CCT_SUD', label: 'CCT_SUD' },
    { value: 'CCT_SARD', label: 'CCT_SARD' },
    { value: 'CCT_SICI', label: 'CCT_SICI' },
    { value: 'CCT_NORD', label: 'CCT_NORD' },
    { value: 'CCT_CSUD', label: 'CCT_CSUD' },
  ],
  selectedItem: 'CCT_CNOR',
  datepickerDate: moment(),
  checkboxItems:['CCT_CNOR', 'CCT_SUD', 'CCT_SARD', 'CCT_SICI', 'CCT_NORD', 'CCT_CSUD'],
  selectedCheckboxes:[]
};

const chartData = {
  name: 'Test',
  chart: {
    type: 'area'
  },
  title: {
    text:'DropDown Example',
  },
  plotOptions: {
        area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
                lineWidth: 1,
                lineColor: '#666666'
            }
        }
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
  }
}

const chartData2 = {
  name: 'Test',
  chart: {
    type: 'area'
  },
  title: {
    text:'Checkbox Example',
  },
  plotOptions: {
        area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
                lineWidth: 1,
                lineColor: '#666666'
            }
        }
    },
  series: [{
    name: 'Test',
    data: [0,4,6,3,9,5,16,7,14,19,10,11,11,4,1,-2,-4,7,5,9,4,15,19,23]
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
  }
}

function ModalReducer(state = ModalInitialState, action) {
  switch (action.type) {
    case CloseModal:
      return ModalInitialState;
    case CloseModalKeepState:
      return {...state, showModal: false };
    case OpenModal:
      return {...state, showModal: true };
    default:
      return state;
  }
}

function DropdownSelectedItemReducer(state = ComponentSettingsstate, action) {
  switch (action.type){
    case ComponentSettingsstate:
      return ComponentSettingsstate;
    case DropdownSelectedItem:
      return {...state, selectedItem: action.value };
    default:
      return state;
  }
  debugger;
}

function DateSelectedReducer(state = ComponentSettingsstate, action) {
  switch (action.type){
    case ComponentSettingsstate:
      return ComponentSettingsstate;
    case DateSelected:
      return {...state, datepickerDate: action.date };
    default:
      return state;
  }
}

function CheckboxSelectedReducer(state = ComponentSettingsstate, action) {
  switch (action.type){
    case CloseModal:
      return ComponentSettingsstate;
    case AddCheckboxSelected:
      return {...state, selectedCheckboxes:[...state.selectedCheckboxes, action.value]  };
    case RemoveCheckboxSelected:
      return {...state, selectedCheckboxes:
        [
          ...state.selectedCheckboxes.slice(0, state.selectedCheckboxes.indexOf(action.value)),
          ...state.selectedCheckboxes.slice(state.selectedCheckboxes.indexOf(action.value) + 1)
        ]};
    default:
      return state;
  }
}

function chartBuilderReducer(state = chartData, action){
  switch (action.type){
    case CloseModal:
      return chartData;
    case BuildHighchart:
      return {...state, series: action.obj };
    default:
      return state;
  }
}

function chartBuilder2Reducer(state = chartData2, action){
  switch (action.type){
    case CloseModal:
      return chartData;
    case BuildHighchart2:
      return {...state, series: action.obj };
    default:
      return state;
  }
}


export const ModalReducers = combineReducers({
  Modal: ModalReducer,
  DropdownSettings: DropdownSelectedItemReducer,
  DateSettings: DateSelectedReducer,
  ChecboxSettings: CheckboxSelectedReducer,
  ChartBuilder: chartBuilderReducer,
  ChartBuilder2: chartBuilder2Reducer
});
