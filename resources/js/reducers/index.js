import { combineReducers } from "redux";

import menuActive from "./menuActive";
import pageTitle from "./pageTitle";
import authUser from "./authUser";
import sanBay from "./sanBay";

export const myReducer = combineReducers({
    menuActive,
    pageTitle,
    authUser,
    sanBay
});
