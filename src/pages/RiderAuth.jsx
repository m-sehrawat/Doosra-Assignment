import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addRiderToDatabaseRequest } from "../redux/features/rider/actions";


export const RiderAuth = () => {

    const initState = {
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        role: 'rider',
    }

    const [form, setForm] = useState(initState);
    const [coordinates, setCoordinates] = useState({ x: "", y: "" });
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleInputChange = ({ target: { value, name } }) => {
        setForm({ ...form, [name]: value })
    };

    const handleCoordinateChange = ({ target: { value, name } }) => {
        setCoordinates({ ...coordinates, [name]: value })
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const payload = { ...form, coordinates };
        dispatch(addRiderToDatabaseRequest(payload));
        navigate('/');
    };

    return (
        <>
            <div className="centerInput">
                <h3>Register as a Rider</h3>

                <form onSubmit={handleFormSubmit} className="form">
                    <input onChange={handleInputChange} name="firstName" type="text" placeholder="First Name" />
                    <input onChange={handleInputChange} name="lastName" type="text" placeholder="Last Name" />
                    <input onChange={handleInputChange} name="email" type="email" placeholder="Email" />
                    <input onChange={handleInputChange} name="mobile" type="number" placeholder="Mobile" />
                    <p>Location (type your location coordinates)</p>
                    <input onChange={handleCoordinateChange} name="x" type="number" placeholder="Coordinate X" />
                    <input onChange={handleCoordinateChange} name="y" type="number" placeholder="Coordinate Y" />
                    <input type="submit" value={'Signup'} />
                </form>
            </div>
        </>
    );
};