import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export const AuthRoute = ({ children }) => {

    const rider = useSelector(state => state.riderReducer.rider);

    return rider.firstName ? <Navigate to={'/'} /> : children;
};


