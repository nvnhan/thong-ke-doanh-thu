import * as types from "../constants/ActionTypes";

var initialState = {
    list: [],
    status: "idle",
    error: null
};

const myReducer = (state = initialState, action) => {
    if (action.type === types.LOADING_SAN_BAY_LIST) {
        state = {
            list: [],
            status: "loading",
            error: null
        };
    } else if (action.type === types.SET_SAN_BAY_LIST) {
        state = {
            list: action.payload,
            status: "done",
            error: ""
        };
    } else if (action.type === types.ERROR_SAN_BAY_LIST) {
        state = {
            list: [],
            status: "idle",
            error: action.payload
        };
    }
    return state;
};

export default myReducer;
