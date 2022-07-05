import { getItem } from "../../../utils/localStorage";
import { ADD_RIDER_DATA_SUCCESS, LOGOUT_RIDER } from "./actionTypes";


const initState = {
    rider: getItem('rider') || {},
};

export const riderReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case ADD_RIDER_DATA_SUCCESS:
            return {
                ...state,
                rider: payload
            };
        case LOGOUT_RIDER:
            return {
                ...state,
                rider: {}
            };
        default:
            return state;
    }
};