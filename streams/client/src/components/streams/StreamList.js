import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';   //--> action creator name fetchStreams

class StreamList extends React.Component {

    componentDidMount() {
        this.props.fetchStreams();    //--> call the fetchStreams action creator
    }

    renderAdminButtons(stream) {
        if (stream.userId===this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
                        Edit
                    </Link>
                    <Link to={`/streams/delete/${stream.id}`} className="ui button negative">
                        Delete
                    </Link>
                </div>
            );
        };
    }

    // Render the list of stream to the screen; the "streams" property was set in the
    //   mapStateToProps function.
    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    {this.renderAdminButtons(stream)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <Link to={`/streams/${stream.id}`} className="header">
                            {stream.title}
                        </Link>
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            );
        });

    };

    renderCreateButton() {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to="/streams/new" className="ui button primary">
                        Create Stream
                    </Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
                {this.renderCreateButton()}
            </div>
        );
    }

};

const mapStateToProps=(state) => {
    //NB: the "streams" property in the state object was set in the combineReducer in
    //  reducers/index.js
    //  Object.values returns an array of values from the streams map.
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
}

// connect the fetchStreams function to the properties
export default connect(mapStateToProps, { fetchStreams })(StreamList);