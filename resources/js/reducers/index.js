import { combineReducers } from "redux";
import authUser from "./authUser";
import hangBay from "./hangBay";
import hangHoa from "./hangHoa";
import khachHang from "./khachHang";
import menuActive from "./menuActive";
import pageTitle from "./pageTitle";
import phiHanhLy from "./phiHanhLy";
import sanBay from "./sanBay";
import taiKhoan from "./taiKhoan";
import thuePhi from "./thuePhi";

export const myReducer = combineReducers({
    menuActive,
    pageTitle,
    authUser,
    sanBay,
    hangBay,
    khachHang,
    phiHanhLy,
    taiKhoan,
    thuePhi,
    hangHoa
});
