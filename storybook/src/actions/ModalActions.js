import { CloseModal, CloseModalKeepState, OpenModal, DropdownSelectedItem, DateSelected, CheckboxSelected, AddCheckboxSelected, RemoveCheckboxSelected, BuildHighchart, BuildHighchart2 } from './const';

export const CloseModalAction = () => ({ type: CloseModal });
export const CloseModalKeepStateAction = () => ({ type: CloseModalKeepState });
export const OpenModalAction = () => ({ type: OpenModal });
export const DropdownSelectedItemAction = value => ({ type: DropdownSelectedItem, value });
export const CheckboxSelectedAction = () => ({ type: CheckboxSelected });
export const AddCheckboxSelectedAction = value => ({ type: AddCheckboxSelected, value });
export const RemoveCheckboxSelectedAction = value => ({ type: RemoveCheckboxSelected, value });
export const DatePickerAction = date => ({ type: DateSelected, date });
export const BuildHighchartAction = obj => ({ type: BuildHighchart, obj });
export const BuildHighchartAction2 = obj => ({ type: BuildHighchart2, obj });
