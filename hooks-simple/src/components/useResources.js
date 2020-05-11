import { useState, useEffect } from 'react';
import axios from 'axios';

// create useResources as a single function for code re-use.
const useResources=(resource) => {
    const [resources, setResources]=useState([]);

    //  Resource in props passed down from App.js.
    const fetchResource=async (resource) => {
        console.log("IN fetchResource...");
        const resp=await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        setResources(resp.data);
    }
    // invoke useEffect. Pass in a function to it.  Every time the component is rendered, the
    //  inner function will be invoked.  But if the resource did not change in between clicks,
    //  (eg click on "posts" twice), the fetch is not called again.
    // Pass in no array for the 2nd argument, the inner function is called over and over again.
    // Pass in the empty array for the 2nd argument, the inner function is only called once,
    //     just like componentDidMount().
    // IF array value changes, the inner function will be called.

    useEffect(() => {
        fetchResource(resource);
    }, [resource]);

    return resources;
};

export default useResources;

