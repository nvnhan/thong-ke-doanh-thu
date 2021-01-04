import * as Types from "../constants/ActionTypes";

export const fetchThuePhiList = () => {
    return dispatch => {
        dispatch(loadingThuePhiList());
        axios
            .get(`/api/thue-phi/get-thue-phi`)
            .then(response => {
                if (response.data.success) {
                    console.log("🚀 ~ fetchThuePhiList");
                    dispatch(setThuePhiList(response.data.data));
                    return true;
                }
            })
            .catch(error => console.log(error))
            .then(isSuccess => !isSuccess && dispatch(errorThuePhiList()));
    };
};

export const errorThuePhiList = (error = "") => ({
    type: Types.ERROR_THUE_PHI_LIST,
    payload: error
});

export const loadingThuePhiList = () => ({ type: Types.LOADING_THUE_PHI_LIST });

export const setThuePhiList = list => ({
    type: Types.SET_THUE_PHI_LIST,
    payload: list
});
