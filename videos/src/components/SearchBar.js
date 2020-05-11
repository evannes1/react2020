import React from 'react';

class SearchBar extends React.Component {

    state={ term: '' };

    onInputChange=(event) => {
        this.setState({ term: event.target.value });
    };

    onLocalFormSubmit=(event) => {
        event.preventDefault();
        //need to call callback from parent; use props from parent, property onFormSubmit
        this.props.onFormSubmit(this.state.term);
    }


    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onLocalFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" onChange={this.onInputChange}
                            value={this.state.term} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;