import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {

    //  Link up the component to the content object; Note that you must name the variable
    //    'contextType'.  The "static" keyword adds a property to the class.  Use this method
    //   when we only have 1 context object.  IF we have more than one context, we need to use
    //   the Consumer method.
    //static contextType=LanguageContext;

    // When using the Consumer attached to the LanguageContext (provided by React), we
    //  don't need to link the context type with the static variable.
    // The Consumer component is passed a function that will return a snippet of JSX to render.
    renderSubmit(language) {
        return language==='english'? 'Submit':'Envie';
    }

    renderButton(color) {

        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {({ language }) => this.renderSubmit(language)}
                </LanguageContext.Consumer>
            </button>
        );
    }


    render() {
        // const text=this.context==='english'? 'Submit':'Envie';
        return (
            <ColorContext.Consumer>
                {(color) => this.renderButton(color)}
            </ColorContext.Consumer>
        );
    };

}

export default Button;