import { useSelector } from "react-redux";


export const BookRide = () => {

    const driver = useSelector((state) => state.driverReducer.driver);
    console.log('driver:', driver);

    

    return (
        <>
            <div>
                <h1 style={{ textAlign: 'center' }}>Book a Ride</h1>

                <div>

                </div>
            </div>

        </>
    );
};