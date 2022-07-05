import { useState } from "react";
import { useSelector } from "react-redux";
import { getNearestDriver } from "../utils/getNearestDriver";


export const BookRide = () => {

    const driver = useSelector((state) => state.driverReducer.driver);
    console.log('driver:', driver);

    const rider = useSelector((state) => state.riderReducer.rider);
    const { firstName, lastName, coordinates } = rider;




    const [threshold, setThreshold] = useState(5);

    const handleGetMyDriver = () => {
        const myDriver = getNearestDriver(driver, coordinates, threshold);
        console.log('myDriver:', myDriver)
    }


    return (
        <>
            <div>
                <h1 style={{ textAlign: 'center' }}>Book a Ride</h1>

                <div className="border home">
                    <h3>Rider Details</h3>
                    <p>{firstName} {lastName} || Coordinates : ({coordinates.x}, {coordinates.y})</p>
                </div>

                <div className="border home">
                    <h3>List of Drivers available</h3>
                    {driver.map(({ firstName, lastName, coordinates, availability }, index) => (
                        <p key={index}>{firstName} {lastName} || Availability: {availability} || Coordinates: ({coordinates.x}, {coordinates.y})</p>
                    ))}
                </div>

                <div className="home">
                    <input
                        type="number"
                        onChange={(e) => { setThreshold(e.target.value) }}
                        style={{ maxWidth: '600px', width: '400px' }}
                        placeholder="Type your threshold distacnce, 5 is default"
                    />
                    <button onClick={handleGetMyDriver}>Search Nearest Driver</button>
                </div>

                <div className="border home">
                    <h3>Nearest Driver Details</h3>
                </div>

            </div>

        </>
    );
};