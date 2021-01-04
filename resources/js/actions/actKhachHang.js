import * as Types from "../constants/ActionTypes";

export const fetchKhachHangList = () => {
    return dispatch => {
        dispatch(loadingKhachHangList());
        axios
            .get(`/api/khach-hang/get-khach-hang`)
            .then(response => {
                if (response.data.success) {
                    console.log("🚀 ~ fetchKhachHangList ");
                    dispatch(setKhachHangList(response.data.data));
                    return true;
                }
            })
            .catch(error => console.log(error))
            .then(isSuccess => !isSuccess && dispatch(errorKhachHangList()));
    };
};

export const errorKhachHangList = (error = "") => ({
    type: Types.ERROR_KHACH_HANG_LIST,
    payload: error
});

export const loadingKhachHangList = () => ({
    type: Types.LOADING_KHACH_HANG_LIST
});

export const setKhachHangList = list => ({
    type: Types.SET_KHACH_HANG_LIST,
    payload: list
});
