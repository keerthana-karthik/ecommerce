import * as actionTypes from './actionTypes';
export const addSelectedItem = ( item ) => {
    return {
        type: actionTypes.ADD_SELECTED_ITEM,
        selectedDress: item
    };
};
export const updateSelectedItem = ( item ) => {
    return {
        type: actionTypes.UPDATE_SELECTED_ITEM,
        selectedDress: item
    };
};
export const setSelectedItems = ( items ) => {
    return {
        type: actionTypes.SET_SELECTED_ITEMS,
        selectedDresses: items
    };
};