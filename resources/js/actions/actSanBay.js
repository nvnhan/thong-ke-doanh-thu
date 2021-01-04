import * as Types from "../constants/ActionTypes";

export const fetchSanBayList = () => {
    return dispatch => {
        dispatch(loadingSanBayList());
        axios
            .get(`/api/san-bay`)
            .then(response => {
                if (response.data.success) {
                    console.log("🚀 ~ fetchSanBayList");
                    dispatch(setSanBayList(response.data.data));
                    return true;
                }
            })
            .catch(error => console.log(error))
            .then(isSuccess => !isSuccess && dispatch(errorSanBayList()));
    };
};

export const errorSanBayList = (error = "") => ({
    type: Types.ERROR_SAN_BAY_LIST,
    payload: error
});

export const loadingSanBayList = () => ({ type: Types.LOADING_SAN_BAY_LIST });

export const setSanBayList = list => ({
    type: Types.SET_SAN_BAY_LIST,
    payload: list
});
