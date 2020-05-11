// Create a context object and then export it.  We only want to connect this component
//  to App, Field and Button components.
import React from 'react';

//Create the context object with a default language of English.
// We can pass anything into the context object.
const Context=React.createContext('english');

// Named export; to import use {LanguageStore}
export class LanguageStore extends React.Component {

    state={ language: 'english' };

    onLanguageChange=(language) => {
        this.setState({ language: language });
    }

    render() {
        return (
            <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
                {this.props.children}
            </Context.Provider>
        );
    };
}

export default Context;
