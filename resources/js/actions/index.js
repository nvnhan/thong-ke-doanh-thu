import * as Types from "../constants/ActionTypes";
import * as menus from "../constants/SideMenus";

export const changeMenu = (menu = menus.HOME) => {
    return {
        type: Types.CHANGE_MENU_ACTIVE,
        menu
    };
};

export const changeTitle = title => {
    return {
        type: Types.CHANGE_PAGE_TITLE,
        title
    };
};

export const logout = () => {
    return { type: Types.LOGOUT };
};

export const setAuth = auth => {
    return { type: Types.SET_AUTH, auth };
};

export const collapseSidebar = collapsed => {
    return { type: Types.TOGGLE_COLLAPSE_SIDEBAR, payload: collapsed };
};

export const toggleSidebar = toggled => {
    return { type: Types.TOGGLE_SIDEBAR, payload: toggled };
};
