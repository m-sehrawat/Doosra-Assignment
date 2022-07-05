import { getItem, setItem } from "../../../utils/localStorage";
import { ADD_DRIVER_DATA_SUCCESS, GET_DRIVER_DATA_SUCCESS } from "./actionTypes";


export const addDriverdataSuccess = (payload) => {
    return { type: ADD_DRIVER_DATA_SUCCESS, payload };
};

export const getDriverdataSuccess = (payload) => {
    return { type: GET_DRIVER_DATA_SUCCESS, payload };
};

export const addDriverToDatabaseRequest = (data) => (dispatch) => {
    dispatch(addDriverdataSuccess(data));
    const payload = getItem('driver') || [];
    payload.push(data);
    setItem('driver', payload);
    alert('driver is regisered');
};