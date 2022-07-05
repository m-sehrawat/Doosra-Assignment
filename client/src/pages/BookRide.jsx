import { useSelector } from "react-redux";


export const BookRide = () => {

    const driver = useSelector((state) => state.driverReducer.driver);
    console.log('driver:', driver);

    const rider = useSelector((state) => state.riderReducer.rider);
    const { firstName, lastName, coordinates } = rider;



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


            </div>

        </>
    );
};