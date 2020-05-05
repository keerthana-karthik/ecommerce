import * as Actions from "../actions/actionTypes";
import { updateStateObject } from "../helper";
const initialState = {
    selectedDresses: []
}
const setSelectedItems = (state, action) => {
    return updateStateObject(state, {
        dresses : [...action.dresses]
    });
}
const orderManageReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.SET_SELECTED_ITEMS:
            return setSelectedItems(state, action);
    }
    return state;
}

export default orderManageReducer;