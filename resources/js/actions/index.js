import * as types from '../constants/ActionTypes'
import * as menus from '../constants/SideMenus'

export const changeMenu = (menu = menus.HOME) => {
    return {
        type : types.CHANGE_MENU_ACTIVE,
        menu
    }
}

export const changeTitle = (title = "THỐNG KÊ DOANH THU") => {
    return {
        type : types.CHANGE_PAGE_TITLE,
        title
    }
}