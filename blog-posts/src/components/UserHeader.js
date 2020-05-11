import React from 'react';
import { connect } from 'react-redux';


class UserHeader extends React.Component {

    render() {

        const user=this.props.user;    //--> this property, "user", set in the mapStateToProps method
        if (!user) {
            return null;
        }

        return <div className="header">{user.name}</div>;
    }

}

// ownProps is a reference to the props object inside the React component
const mapStateToProps=(state, ownProps) => {

    // We need to look for a particular ID in the because the fetchUser action will
    //  be called for each user ID from the post list; so eventually we end up with a
    //  list of user IDs in the Redux store.  When we render, we are only interested
    //  in one particular ID.
    //
    // Here the "users" state object was defined in reducers/index.js in the 
    //  combineReducers call; the 'theUserId' prop was set in PortList.js
    const user=state.users.find(user => user.id===ownProps.theUserId);
    //here user id from PostList component
    return { user: user };
}

export default connect(mapStateToProps)(UserHeader);