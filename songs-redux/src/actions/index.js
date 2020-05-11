// Action Creator -- create a song action
export const selectSong=(song) => {
    // Return an action
    console.log("In actions.selectSong");
    return {
        type: 'SONG_SELECTED',
        payload: song
    };

};

// named export

