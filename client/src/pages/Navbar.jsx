import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Navbar = () => {

    const rider = useSelector(state => state.riderReducer.rider);

    return (
        <>
            <div>
                <div className="navbar">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/auth/rider'}>Rider</Link>
                    <Link to={'/auth/driver'}>Driver</Link>
                    {rider.firstName && <p style={{ margin: '0px' }}>{rider.firstName}</p>}
                </div>
            </div>
        </>
    );
};