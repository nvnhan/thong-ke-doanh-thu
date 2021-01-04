import * as Types from "../constants/ActionTypes";

export const fetchTaiKhoanList = () => {
    return dispatch => {
        dispatch(loadingTaiKhoanList());
        axios
            .get(`/api/tai-khoan/get-tai-khoan`)
            .then(response => {
                if (response.data.success) {
                    console.log("🚀 ~ fetchTaiKhoanList");
                    dispatch(setTaiKhoanList(response.data.data));
                    return true;
                }
            })
            .catch(error => console.log(error))
            .then(isSuccess => !isSuccess && dispatch(errorTaiKhoanList()));
    };
};

export const errorTaiKhoanList = (error = "") => ({
    type: Types.ERROR_TAI_KHOAN_LIST,
    payload: error
});

export const loadingTaiKhoanList = () => ({
    type: Types.LOADING_TAI_KHOAN_LIST
});

export const setTaiKhoanList = list => ({
    type: Types.SET_TAI_KHOAN_LIST,
    payload: list
});
