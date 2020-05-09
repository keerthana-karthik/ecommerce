import * as Actions from "../actions/actionTypes";
import { updateStateObject } from "../helper";
const initialState = {
    selectedDresses: [],
    totalQuantity: 0,
    totalPrice: 0
}
const addSelectedItem = (state, action) => {
    let newTotalPrice = 0;
    let newTotalQuantity = 0;
    let newSelectedDresses = [];
    let priceForQuantity = parseInt(action.selectedDress.price);
    let newSelectedItem = {...action.selectedDress, "selectedQuantity": 1, "priceForQuantity": priceForQuantity};
    newSelectedDresses = [...state.selectedDresses];
    newSelectedDresses.push(newSelectedItem);
    newTotalPrice = parseInt(state.totalPrice) + priceForQuantity;
    newTotalQuantity = parseInt(state.totalQuantity) + 1;
    const updatedState = {
        selectedDresses: newSelectedDresses,
        totalQuantity: newTotalQuantity,
        totalPrice: newTotalPrice
    }
    return updateStateObject( state, updatedState );
}
const updateSelectedItem = (state, action) => {
    let newTotalPrice = 0;
    let newTotalQuantity = 0;
    let newSelectedItem = {};
    let newSelectedDresses = [];
    let newPriceForQuantity = 0;
    let oldPriceForQuantity = 0;
    let newSelectedQuantity = 0;
    let oldSelectedQuantity = 0;

    newSelectedDresses = [...state.selectedDresses];
    for ( let index in newSelectedDresses ) {
        if(newSelectedDresses[index].id === action.selectedDress.selectedId) {
            oldSelectedQuantity = newSelectedDresses[index].selectedQuantity;
            newSelectedQuantity = parseInt(action.selectedDress.selectedQuantity);
            oldPriceForQuantity = newSelectedDresses[index].priceForQuantity;
            newPriceForQuantity = newSelectedDresses[index].price * newSelectedQuantity;
            if(newSelectedQuantity < 1) {
                newSelectedDresses.splice(index, 1);
            }else {
                newSelectedItem = {...newSelectedDresses[index], "selectedQuantity": action.selectedDress.selectedQuantity, "priceForQuantity": newPriceForQuantity};
                newSelectedDresses[index] = newSelectedItem;
            }
            newTotalQuantity = state.totalQuantity + newSelectedQuantity - oldSelectedQuantity;
            newTotalPrice = state.totalPrice + newPriceForQuantity - oldPriceForQuantity;
        }
    }
    const updatedState = {
        selectedDresses: newSelectedDresses,
        totalQuantity: newTotalQuantity,
        totalPrice: newTotalPrice
    }
    return updateStateObject( state, updatedState );
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
        case Actions.ADD_SELECTED_ITEM:
            return addSelectedItem(state, action);
        case Actions.UPDATE_SELECTED_ITEM:
            return updateSelectedItem(state, action);
        default: 
            return state;
    }
}

export default reducer;