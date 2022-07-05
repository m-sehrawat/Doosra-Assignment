import { removeItem, setItem } from "../../../utils/localStorage";
import { ADD_RIDER_DATA_SUCCESS, LOGOUT_RIDER } from "./actionTypes";


export const addRiderDataSuccess = (payload) => {
    return { type: ADD_RIDER_DATA_SUCCESS, payload };
};

export const logoutRider = () => {
    return { type: LOGOUT_RIDER };
};

export const addRiderToDatabaseRequest = (data) => (dispatch) => {
    dispatch(addRiderDataSuccess(data));
    setItem('rider', data);
    alert('Rider is regisered');
};

export const logoutRiderfromDatabaseRequest = () => (dispatch) => {
    dispatch(logoutRider());
    removeItem('rider');
    alert('Rider is logged out');
};

