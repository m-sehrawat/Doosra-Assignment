import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export const PrivateRoute = ({ children }) => {

    const rider = useSelector(state => state.riderReducer.rider);

    return rider.firstName ? children : <Navigate to={'/'} />;
};