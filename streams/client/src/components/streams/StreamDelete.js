import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';

// React fragments -- don't result in any html getting generated so won't throw off
//  styling.  Supplies the enclosing tag required by javascript but doesn't generate
//  HTML to be rendered in the DOM.

class StreamDelete extends React.Component {

    componentDidMount() {
        console.log(this.props);
        // url with ID on the end gets placed into the props object by the framework
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions() {
        const id=this.props.match.params.id;
        return (
            <React.Fragment>
                <button onClick={() => this.props.deleteStream(id)}
                    className="ui button negative">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        );
    }

    renderContent() {
        if (!this.props.stream) {
            return 'Are you sure you want to delete this stream?'
        }
        return `Delete this stream?:  ${this.props.stream.title}`
    }

    render() {
        return (

            <Modal title="Delete Stream"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />

        );
    };

}

// Two arguments: the state from the redux store and the props object available to the 
//   component.  The ownProps parameter is a reference to the React component props object
const mapStateToProps=(state, ownProps) => {
    // console.log(ownProps);
    // state.streams refers to the collection of stream in our redux store;
    //  we use the ID of the stream we want to delete as an index into the store.
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);