import * as types from "../constants/ActionTypes";

var initialState = "Trang chủ";

const myReducer = (state = initialState, action) => {
    if (action.type === types.CHANGE_PAGE_TITLE) {
        state = action.title;
        document.title = action.title + ' | Thống kê doanh thu';
    }
    return state;
};

export default myReducer;
