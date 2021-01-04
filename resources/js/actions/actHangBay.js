import * as Types from "../constants/ActionTypes";

export const fetchHangBayList = () => {
    return dispatch => {
        dispatch(loadingHangBayList());
        axios
            .get(`/api/dat-ve/hang-bay`)
            .then(response => {
                if (response.data.success) {
                    console.log("🚀 ~ fetchHangBayList");
                    dispatch(setHangBayList(response.data.data));
                    return true;
                }
            })
            .catch(error => console.log(error))
            .then(isSuccess => !isSuccess && dispatch(errorHangBayList()));
    };
};

export const errorHangBayList = (error = "") => ({
    type: Types.ERROR_HANG_BAY_LIST,
    payload: error
});

export const loadingHangBayList = () => ({ type: Types.LOADING_HANG_BAY_LIST });

export const setHangBayList = list => ({
    type: Types.SET_HANG_BAY_LIST,
    payload: list
});
