import * as types from '../constants/ActionTypes'
import * as menus from '../constants/SideMenus'

var initialState = menus.HOME;

const myReducer = (state = initialState, action) => {
    if (action.type === types.CHANGE_MENU_ACTIVE) {
        state = action.menu;
        console.log("myReducer -> action.menu", action.menu)
        
    }
    return state;
}

export default myReducer;