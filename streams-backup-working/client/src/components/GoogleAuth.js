import React from 'react';
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions';  //action creators

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '217182382253-lcsvkjuogj4pe0hpeqaog71d8bavi1vl.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {        //callback; executes after the GAPI init
                this.auth=window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);   //--> wait for change
            });
        });
    };

    // This function is called any time the authentication status changes.  
    onAuthChange=(isSignedIn) => {
        if (isSignedIn) {
            // call the action creator for signIn, pass in the current user ID
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();  // call the action creator for signOut
        }
    };

    onSignInClick=() => {
        // call Google api sign in
        this.auth.signIn();
    };

    onSignOutClick=() => {
        // call Google api sign out
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.props.isSignedIn===null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon" />
                  Sign Out
                </button>
            );

        } else {
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon" />
                  Sign In with Google
                </button>
            );
        }
    };

    render() {
        return <div>{this.renderAuthButton()}</div>;

    }
}

const mapStateToProps=(state) => {
    return { isSignedIn: state.auth.isSignedIn };
    //--> "auth" state property set in reducers/index.js, in the combineReducers call
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);