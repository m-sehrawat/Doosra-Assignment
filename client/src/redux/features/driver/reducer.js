import { getItem } from "../../../utils/localStorage";
import { ADD_DRIVER_DATA_SUCCESS } from "./actionTypes";


const initState = {
    driver: getItem('driver') || [],
};

export const driverReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case ADD_DRIVER_DATA_SUCCESS:
            return {
                ...state,
                driver: [...state.driver, payload]
            };
        default:
            return state;
    }
};