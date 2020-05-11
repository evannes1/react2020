import React from 'react';
import { connect } from 'react-redux';

const SongDetail=({ selSong }) => {

    if (!selSong) {
        return <div>Please select a song</div>
    }
    console.log("IN SongDetail:", selSong);

    return (
        <div>
            <h3>Details for:</h3>
            <p>Title: {selSong.title}
                Duration: {selSong.duration}
            </p>
        </div>
    );
};

const mapStateToProps=(state) => {
    console.log("IN SongDetail.mapStateToProps with state:");
    console.log(state);
    return { selSong: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail);