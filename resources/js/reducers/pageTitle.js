import * as types from "../constants/ActionTypes";
import * as menus from "../constants/SideMenus";

var initialState = "Thống kê doanh thu";

const myReducer = (state = initialState, action) => {
    if (action.type === types.CHANGE_PAGE_TITLE) {
        state = action.title;
        document.title = action.title;
    }
    return state;
};

export default myReducer;
