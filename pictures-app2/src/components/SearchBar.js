import React from 'react';

class SearchBar extends React.Component {

    state={ term: '' };

    onFormSubmit=(event) => {

        event.preventDefault();  //prevent form from submitting itself on enter
        //console.log(this.state.term);

        // call the function bound to the onSubmit property passed down in 
        //  the props
        this.props.onSubmit(this.state.term);
    }


    render() {

        // parentheses on event handler
        //uncontrolled form element
        //controlled element: information to be stored in react component, vs the HTML element/DOM
        //  we use the state object in React to determine what is in the component.  Don't have
        //  look into the DOM.
        return (
            <div className="ui segment">

                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;