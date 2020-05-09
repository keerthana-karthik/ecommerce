import * as Actions from "../actions/actionTypes";
import { updateStateObject } from "../helper";
const initialState = {
    selectedDresses: [],
    totalPrice: 0
}
const addSelectedItem = (state, action) => {
    let newTotalPrice = 0;
    let newSelectedDresses = [];
    let priceForQuantity = action.selectedDress.price;
    let newSelectedItem = {...action.selectedDress, "quantity": 1, "priceForQuantity": priceForQuantity};
    newSelectedDresses = [...state.selectedDresses];
    newSelectedDresses.push(newSelectedItem);
    newTotalPrice = state.totalPrice + action.selectedDress.price;
    const updatedState = {
        selectedDresses: newSelectedDresses,
        totalPrice: newTotalPrice
    }
    return updateStateObject( state, updatedState );
}
const updateSelectedItem = (state, action) => {
    let newTotalPrice = 0;
    let newSelectedItem = {};
    let newSelectedDresses = [];
    let newPriceForQuantity = 0;
    let oldPriceForQuantity = 0;

    newSelectedDresses = [...state.selectedDresses];
    for ( let index in newSelectedDresses ) {
        if(newSelectedDresses[index].id === action.selectedDress.selectedId) {
            oldPriceForQuantity = newSelectedDresses[index].priceForQuantity;
            newPriceForQuantity = newSelectedDresses[index].price * parseInt(action.selectedDress.selectedQuantity);
            newTotalPrice = newSelectedDresses[index].totalPrice + newPriceForQuantity - oldPriceForQuantity;
            newSelectedItem = {...newSelectedDresses[index], "quantity": action.selectedDress.selectedQuantity, "priceForQuantity": newPriceForQuantity};
        }
    }
    const updatedState = {
        selectedDresses: newSelectedDresses,
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