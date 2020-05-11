import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {

    componentDidMount() {
        // call the action creator fetchPosts(); set up by the connect method
        this.props.fetchPostsAndUsers();
    }

    renderList() {

        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader theUserId={post.userId} />
                    </div>
                </div>
            );
        });
    }

    render() {
        return <div className="ui relaxed divided list">{this.renderList()}</div>;
    }

}

// Take "posts" from state object and place it on the React props object;
//  The "posts" in the state object was defined in the reducers/index.js file
const mapStateToProps=(state) => {
    return { posts: state.posts };
}

// pass to the Redux connect function the mapStateToProps function and then a javascript object with 
// the action creator in this case, fetchPosts; Assign a reference to fetchPosts a property 
// called fetchPosts; (see actions/index.js for fetchPosts definition)
// the connect method invokes fetchPosts and sends the action created to the dispatcher;
// the dispatcher sends it to the middleware components which then go to the reducers 
// which then processes the action

// the 2nd parameter maps the fetchPosts to the props object; React binds the action to 
//  the dispatcher for us.
export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);