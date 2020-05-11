import { useState, useEffect } from 'react';

export default () => {
    // useState returns an array with a current state and a setter function to change the state
    const [lat, setLat]=useState(null);
    const [errorMessage, setErrorMessage]=useState('');

    // Call useEffect; only want to call this once so pass in an empty array as the 2nd
    //  parameter
    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            position => setLat(position.coords.latitude),
            error => setErrorMessage(error.message)
        );
    }, []);

    // Return an array
    return [lat, errorMessage];
}