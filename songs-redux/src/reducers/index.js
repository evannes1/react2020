import { combineReducers } from 'redux';
//named export

// Need 2 reducers

// Return a list of songs; static
const songsReducer=() => {
    return [
        { title: 'No Scrubs', durarion: '4:05' },
        { title: 'Macarena', duration: '2:30' },
        { title: 'All Star', duration: '3:15' },
        { title: 'I Want It That Way', duration: '1:45' }
    ];

};

// Select a specific song; note the action parameter passed in.
//  The selectedSong argument is the state that this reducer is responsible for.
const selectedSongReducer=(selectedSong=null, action) => {
    if (action.type==='SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

// The keys defined here wind up as keys on the global application state.  Each piece of state
//  is assigned one reducer; the state is changed by an action passed to the reducer.  The
//  reducer may choose not to act on the action passed in. Needs to pass back new state object
//  (from the payload) so that React knows that there was a change in state.
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});