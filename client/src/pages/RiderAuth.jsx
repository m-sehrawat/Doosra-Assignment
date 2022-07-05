import { useState } from "react";


export const RiderAuth = () => {

    const initState = {
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        role: 'rider',
    }

    const [form, setForm] = useState(initState);

    const handleInputChange = ({ target: { value, name } }) => {
        setForm({ ...form, [name]: value })
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    }

    return (
        <>
            <div className="centerInput">
                <h3>Register as a Rider</h3>

                <form onSubmit={handleFormSubmit} className="form">
                    <input onChange={handleInputChange} name="firstName" type="text" placeholder="First Name" />
                    <input onChange={handleInputChange} name="lastName" type="text" placeholder="Last Name" />
                    <input onChange={handleInputChange} name="email" type="email" placeholder="Email" />
                    <input onChange={handleInputChange} name="mobile" type="number" placeholder="Mobile" />
                    <input type="submit" value={'Signup'} />
                </form>
            </div>
        </>
    );
};