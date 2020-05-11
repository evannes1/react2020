import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {

    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary"
                            onClick={() => this.props.selectSong(song)}>
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render() {

        return <div className="ui divided list">{this.renderList()}</div>;
    }

}

// Take data from redux store to react props; any time state changes, this function is run
// with newly-created state object
const mapStateToProps=(state) => {
    return { songs: state.songs }

}

// function connect called with the mapStateToProps function and the action "selectSong" (from 
// actions/index.js)
// action must be sent to the Redux dispatch function in order to have the Redux store updated;
//  the dispatcher sends the action to the reducers; so pass the action creator to the 
// connect function; don't directly call action creator.  Action creator(s) are added to connect
//  via the second parameter to connect; pass in as javascript object; if we need to add more than
//  1 action creator, just add the function references to the javascript object as a comma-separated
//  list.  Example:
//   export default connect(mapStateToProps, {
//    selectSong: selectSong,
//    deleteSong: deleteSongFunction,
//    updateSound: updateSongFunction
//  })(SongList);

// What is happening here: call the connect function with the mapStateToProps method and an object 
//   providing the action creators (to bind the action creators to the dispatch mechanism) to 
//   generate a wrapper function.  Then immediately call the wrapper function with the SongList
//   component to create the final wrapper component.

// So for connect we have: connect(mapStateToProps, specific action creator selectSong)
// Can also do the following to bind a specific action creator to be dispatched
//function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ selectSong }, dispatch)
//}

//export default connect(
//  mapStateToProps,
//  mapDispatchToProps
//)(SongList)

// BUT the mapDispatchToProps function returns a javascript object.  Because this is so common, 
// connect supports an “object shorthand” form for the mapDispatchToProps argument: if you pass 
// an object full of action creators instead of a function,
// connect will automatically call bindActionCreators for you internally.  This is the recommended
//  method to use.  Each field in this object is assumed to be an action creator.

// Note that selectSong gets added to the props via connect.

export default connect(mapStateToProps, {
    selectSong: selectSong
})(SongList);