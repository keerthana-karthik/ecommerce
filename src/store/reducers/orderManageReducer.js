import * as Actions from "../actions/actionTypes";
import { updateStateObject } from "../helper";
const initialState = {
    selectedDresses: []
}
const setSelectedItems = (state, action) => {
    return updateStateObject(state, {
        selectedDresses : [...action.dresses]
    });
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.SET_SELECTED_ITEMS:
            return setSelectedItems(state, action);
        default: return state;
    }
}

export default reducer;