import * as Actions from "./actions";
const initialState = {
    counter: 0,
    input: 0
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            };
        case Actions.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.value
            };
        case Actions.MULTIPLY:
            return {
                ...state,
                counter: state.counter * action.value
            };
        case Actions.RESET:
            return {
                ...state,
                counter: action.value
            };
    }
    return state;
}



export default reducer;