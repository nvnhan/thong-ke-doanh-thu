import * as Types from "../constants/ActionTypes";

var initialState = {
    list: [],
    status: "idle",
    error: null
};

const myReducer = (state = initialState, action) => {
    if (action.type === Types.LOADING_PHI_HANH_LY_LIST) {
        state = {
            list: [],
            status: "loading",
            error: null
        };
    } else if (action.type === Types.SET_PHI_HANH_LY_LIST) {
        state = {
            list: action.payload,
            status: "done",
            error: ""
        };
    } else if (action.type === Types.ERROR_PHI_HANH_LY_LIST) {
        state = {
            list: [],
            status: "idle",
            error: action.payload
        };
    }
    return state;
};

export default myReducer;
