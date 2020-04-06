import { message } from "antd";
import * as types from "../constants/ActionTypes";

var initialState = {
    username: "",
    ho_ten: "",
    token: "",
};

const myReducer = (state = initialState, action) => {
    if (action.type === types.LOGOUT) {
        // Logout from server
        let token = localStorage.token;
        if (token !== undefined) {
            axios
                .get(`/api/logout`, {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                })
                .then((response) => {
                    if (response.data.success) {
                        message.info(response.data.message);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
            // Remove token from localStorage
            localStorage.removeItem("token");
            state = initialState;
        }
    } else if (action.type === types.SET_AUTH) {
        state = action.auth;
    }
    return state;
};

export default myReducer;
