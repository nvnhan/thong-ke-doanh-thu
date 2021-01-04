import * as Types from "../constants/ActionTypes";

export const fetchPhiHanhLyList = () => {
    return dispatch => {
        dispatch(loadingPhiHanhLyList());
        axios
            .get(`/api/phi-hanh-ly/get-phi-hanh-ly`)
            .then(response => {
                if (response.data.success) {
                    console.log("🚀 ~ fetchPhiHanhLyList");
                    dispatch(setPhiHanhLyList(response.data.data));
                    return true;
                }
            })
            .catch(error => console.log(error))
            .then(isSuccess => !isSuccess && dispatch(errorPhiHanhLyList()));
    };
};

export const errorPhiHanhLyList = (error = "") => ({
    type: Types.ERROR_PHI_HANH_LY_LIST,
    payload: error
});

export const loadingPhiHanhLyList = () => ({
    type: Types.LOADING_PHI_HANH_LY_LIST
});

export const setPhiHanhLyList = list => ({
    type: Types.SET_PHI_HANH_LY_LIST,
    payload: list
});
