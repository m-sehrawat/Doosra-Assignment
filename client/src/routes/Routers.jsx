import { Route, Routes } from "react-router-dom";
import { DriverAuth } from "../pages/DriverAuth";
import { Home } from "../pages/Home";
import { Navbar } from "../pages/Navbar";
import { RiderAuth } from "../pages/RiderAuth";
import { AuthRoute } from "./AuthRoute";


export const Routers = () => {

    return (
        <>
            <Navbar />
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/auth/rider'} element={<AuthRoute><RiderAuth /></AuthRoute>} />
                <Route path={'/auth/driver'} element={<DriverAuth />} />
            </Routes>
        </>
    );
};