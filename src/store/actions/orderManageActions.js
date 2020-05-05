import * as actionTypes from './actionTypes';

export const setSelectedItems = ( items ) => {
    return {
        type: actionTypes.SET_SELECTED_ITEMS,
        dresses: items
    };
};