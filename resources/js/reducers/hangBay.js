import * as Types from "../constants/ActionTypes";

var initialState = {
    list: [],
    status: "idle",
    error: null
};

const myReducer = (state = initialState, action) => {
    if (action.type === Types.LOADING_HANG_BAY_LIST) {
        state = {
            list: [],
            status: "loading",
            error: null
        };
    } else if (action.type === Types.SET_HANG_BAY_LIST) {
        state = {
            list: [...new Set([...action.payload, "VN", "VJ", "Jets", "BB"])],
            status: "done",
            error: ""
        };
    } else if (action.type === Types.ERROR_HANG_BAY_LIST) {
        state = {
            list: [],
            status: "idle",
            error: action.payload
        };
    }
    return state;
};

export default myReducer;
