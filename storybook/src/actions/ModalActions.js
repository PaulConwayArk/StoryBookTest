import { CloseModal, OpenModal, DropdownSelectedItem, DateSelected, CheckboxSelected } from './const';

export const CloseModalAction = () => ({ type: CloseModal });
export const OpenModalAction = () => ({ type: OpenModal });
export const DropdownSelectedItemAction = value => ({ type: DropdownSelectedItem, value });
export const CheckboxSelectedAction = () => ({ type: CheckboxSelected });
export const DatePickerAction = date => ({ type: DateSelected, date });
