import * as Types from "../constants/ActionTypes";

var initialState = {
    collapsed: false,
    toggled: false
};

const myReducer = (state = initialState, action) => {
    if (action.type === Types.TOGGLE_COLLAPSE_SIDEBAR) {
        state.collapsed = action.payload;
    } else if (action.type === Types.TOGGLE_SIDEBAR) {
        state.toggled = action.payload;
    }
    return state;
};

export default myReducer;
