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
