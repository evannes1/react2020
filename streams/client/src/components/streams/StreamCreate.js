import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {

    //  This is a callback function so must use the arrow notation in order to bind the context.
    onSubmit=(formValues) => {
        //console.log(formValues);
        this.props.createStream(formValues);
    }

    render() {
        // Use the StreamForm component here
        return (
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(null, { createStream })(StreamCreate);