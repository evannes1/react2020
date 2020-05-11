import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';
import _ from 'lodash';

class StreamEdit extends React.Component {

    componentDidMount() {
        // Make sure we fetch the stream to be edited.
        // props.match.params.id from React Router
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit=(formValues) => {
        // Call the action creator to submit the edit
        this.props.editStream(this.props.match.params.id, formValues);
    }

    render() {

        if (!this.props.stream) {
            return <div>Loading</div>;
        };

        // the initial values property is a redux form property that allows the 
        //  child form to accept some initial values to display.  The stream property
        //  has a title and description property that the StreamForm uses.
        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm initialValues={_.pick(this.props.stream, 'title', 'description')}
                    onSubmit={this.onSubmit} />
            </div>
        );

    };

}

// Two arguments: the state from the redux store and the props object available to the 
//   component.
const mapStateToProps=(state, ownProps) => {
    // console.log(ownProps);
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);