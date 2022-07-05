import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutRiderfromDatabaseRequest } from "../redux/features/rider/actions";

export const Navbar = () => {

    const rider = useSelector(state => state.riderReducer.rider);
    const dispatch = useDispatch();

    const logoutRequest = () => {
        dispatch(logoutRiderfromDatabaseRequest());
    };

    return (
        <>
            <div>
                <div className="navbar">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/bookRide'}>Book a Ride</Link>
                    <Link to={'/auth/rider'}>Rider</Link>
                    <Link to={'/auth/driver'}>Driver</Link>
                    {rider.firstName && (
                        <div>
                            <p style={{ margin: '0px' }}>{rider.firstName}</p>
                            <button onClick={logoutRequest}>Remove Rider</button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};