import _ from 'lodash';
import {
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM
} from '../actions/types';

export default (state={}, action) => {
    switch (action.type) {
        case FETCH_STREAM:
            // Return a new state object with all the existing objects;
            //  add a new name-value pair: stream ID:stream information from payload
            //  the [] braces mean we are dynamically creating a new key with the
            //  payload (stream) ID.
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_STREAM:
            return _.omit(action.payload);   //--> here the whole payload is just the ID
        case FETCH_STREAMS:
            // the ..._.mapKeys takes all the key-value pairs from mapKeys and adds it the state
            //  object
            return { ...state, ..._.mapKeys(action.payload, 'id') };

        default:
            return state;
    }
}