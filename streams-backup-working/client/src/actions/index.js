import streams from '../apis/streams';
import history from '../history';

import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM
} from './types';

export const signIn=(userId) => {

    // this action creator sends a "SIGN_IN" action object to the reducer
    //  the reducer will then update its store, saving that the user is signed in
    //  eg (signedIn = true); also include the userId
    return {
        type: SIGN_IN,
        payload: userId
    };
};


export const signOut=() => {

    // this action creator sends a "SIGN_OUT" action object to the reducer
    //  the reducer will then update its store, saving that the user is signed out
    // eg (signedIn =false)
    return {
        type: SIGN_OUT
    };
};

// Create a new stream with the formValues (user input of title and description).
//  The getState function allows us to reach into the Redux store.
export const createStream=(formValues) => {
    return async (dispatch, getState) => {
        const { userId }=getState().auth;
        // post all the values from the form as well as the user ID from the auth property.
        const response=await streams.post('/streams', { ...formValues, userId });
        dispatch({
            type: CREATE_STREAM,
            payload: response.data
        });
        // Navigate back to the list streams page
        history.push('/');
    };

};

// Fetch all streams from out API server
export const fetchStreams=() => {
    return async (dispatch) => {
        const response=await streams.get('/streams');
        dispatch({
            type: FETCH_STREAMS,
            payload: response.data
        });
    };
};

// Fetch a single stream
export const fetchStream=(id) => {
    return async (dispatch) => {
        const response=await streams.get(`/streams/${id}`);
        dispatch({
            type: FETCH_STREAM,
            payload: response.data
        });
    };
};

// Edit a stream
export const editStream=(id, formValues) => {
    return async (dispatch) => {
        const response=await streams.patch(`/streams/${id}`, formValues);
        dispatch({
            type: EDIT_STREAM,
            payload: response.data
        });
        // Navigate back to the list streams page
        history.push('/');
    };
};

// Delete a stream
export const deleteStream=(id) => {
    return async (dispatch) => {
        await streams.delete(`/streams/${id}`);
        dispatch({
            type: DELETE_STREAM,
            payload: id
        });
        // Navigate back to the list streams page
        history.push('/');
    };
};

