import { setItem } from "../../../utils/localStorage";
import { ADD_RIDER_DATA_SUCCESS } from "./actionTypes";


export const addRiderDataSuccess = (payload) => {
    return { type: ADD_RIDER_DATA_SUCCESS, payload };
};

export const addRiderToDatabaseRequest = (data) => (dispatch) => {
    dispatch(addRiderDataSuccess(data));
    setItem('rider', data.rider);
    setItem('coordinates', data.coordinates);
    alert('Rider is regisered');
}