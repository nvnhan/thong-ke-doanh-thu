import * as types from "../constants/ActionTypes";
import * as menus from "../constants/SideMenus";

export const changeMenu = (menu = menus.HOME) => {
    return {
        type: types.CHANGE_MENU_ACTIVE,
        menu
    };
};

export const changeTitle = title => {
    return {
        type: types.CHANGE_PAGE_TITLE,
        title
    };
};

export const logout = () => {
    return { type: types.LOGOUT };
};

export const setAuth = auth => {
    return { type: types.SET_AUTH, auth };
};
////////////////////////////////////////////////////////////////
export const fetchSanBayList = () => {
    return dispatch => {
        // dispatch(loadingSanBayList());
        axios
            .get(`/api/san-bay`)
            .then(response => {
                if (response.data.success) {
                    dispatch(setSanBayList(response.data.data));
                    return true;
                }
            })
            .catch(error => console.log(error))
            .then(isSuccess => !isSuccess && dispatch(errorSanBayList()));
    };
};
export const errorSanBayList = (error = "") => ({
    type: types.ERROR_SAN_BAY_LIST,
    payload: error
});
export const loadingSanBayList = () => ({ type: types.LOADING_SAN_BAY_LIST });
export const setSanBayList = list => ({
    type: types.SET_SAN_BAY_LIST,
    payload: list
});
