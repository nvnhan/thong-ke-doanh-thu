import * as Types from "../constants/ActionTypes";

export const fetchHangHoaList = () => {
    return dispatch => {
        dispatch(loadingHangHoaList());
        axios
            .get(`/api/hang-hoa/get-hang-hoa`)
            .then(response => {
                if (response.data.success) {
                    console.log("🚀 ~ fetchHangHoaList");
                    dispatch(setHangHoaList(response.data.data));
                    return true;
                }
            })
            .catch(error => console.log(error))
            .then(isSuccess => !isSuccess && dispatch(errorHangHoaList()));
    };
};

export const errorHangHoaList = (error = "") => ({
    type: Types.ERROR_HANG_HOA_LIST,
    payload: error
});

export const loadingHangHoaList = () => ({
    type: Types.LOADING_HANG_HOA_LIST
});

export const setHangHoaList = list => ({
    type: Types.SET_HANG_HOA_LIST,
    payload: list
});
