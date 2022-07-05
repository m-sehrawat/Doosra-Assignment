import { getItem } from "../../../utils/localStorage";
import { ADD_RIDER_DATA_SUCCESS } from "./actionTypes";


const initState = {
    rider: getItem('rider') || {},
    coordinates: getItem('coordinates') || {}
};

export const riderReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case ADD_RIDER_DATA_SUCCESS:
            return {
                ...state,
                rider: payload.rider,
                coordinates: payload.coordinates
            };
        default:
            return state;
    }
};