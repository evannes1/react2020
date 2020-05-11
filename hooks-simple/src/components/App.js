import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

// Functional component that makes use of the React 'hooks' system to get access to
//  the components available to class-based components.  For example, here we are
//  using the 'useState' hook to access the state object.
const App=() => {

    // Array de-structuring:
    //  The useState method returns an array with 2 elements inside it.
    //  So the array destructure will take the first element of the array and assign it
    //  to the variable "resource"; the 2nd element will be assigned to "setResource".
    //  The second element is a setter function to update the state value.
    // In a class-based component, the state is an object in the form of:
    //  {key1: value1, key2: value2} etc.
    //  In the hook useState, we just use individual values by calling the useState method.
    //  Update state => re-render ResourceList
    const [resource, setResource]=useState('posts');

    return (
        <div>
            <UserList />
            <div>
                <button onClick={() => setResource('posts')}>Posts</button>
                <button onClick={() => setResource('todos')}>ToDos</button>
            </div>
            <ResourceList resource={resource} />
        </div>
    );

}

export default App;