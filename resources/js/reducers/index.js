import { combineReducers } from "redux";

import menuActive from "./menuActive";
import pageTitle from "./pageTitle";
import authUser from "./authUser";

export const myReducer = combineReducers({
    menuActive,
    pageTitle,
    authUser,
});
