import { useState } from "react";


export const DriverAuth = () => {

    const initState = {
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        role: 'driver',
        availability: 'on'
    }


    const [form, setForm] = useState(initState);
    const [coordinates, setCoordinates] = useState({ x: "", y: "" });

    const handleInputChange = ({ target: { value, name } }) => {
        setForm({ ...form, [name]: value })
    };

    const handleCoordinateChange = ({ target: { value, name } }) => {
        setCoordinates({ ...coordinates, [name]: value })
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const payload = { driver: form, coordinates };
        console.log(payload);
    };

    return (
        <>
            <div className="centerInput">
                <h3>Register as a Driver</h3>

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