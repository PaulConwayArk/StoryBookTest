import { combineReducers } from 'redux';
import { adjust, assoc, remove, merge } from 'ramda';
import {  CloseModal, OpenModal  } from '../actions/const';

const ModalInitialState = { showModal: false };

function ModalReducerFunc(state = ModalInitialState, action) {
  switch (action.type) {
    case CloseModal:
      return ModalInitialState;
    case OpenModal:
      return {...state, showModal: true }//merge(state, {showModal: true});
      case 'test':
        return [...state, 1];
    default:
      return state;
  }
}

export const ModalReducers = combineReducers({
  Modal: ModalReducerFunc
});
