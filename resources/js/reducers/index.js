import { combineReducers } from "redux";

import menuActive from './menuActive';
import pageTitle from './pageTitle';

export const myReducer = combineReducers({
    menuActive, pageTitle
});