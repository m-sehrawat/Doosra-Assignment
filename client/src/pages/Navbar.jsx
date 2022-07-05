import { Link } from "react-router-dom";

export const Navbar = () => {

    return (
        <>
            <div>
                <div>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/auth/rider'}>Rider</Link>
                    <Link to={'/auth/driver'}>Driver</Link>
                </div>
            </div>
        </>
    );
};