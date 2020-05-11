import React from 'react';
import LanguageContext from '../contexts/LanguageContext';


class Field extends React.Component {

    //  Link up the component to the content object; Note that you must name the variable
    //    'contextType'.  The "static" keyword adds a property to the class.
    static contextType=LanguageContext;

    render() {

        const text=this.context.language==='english'? 'Name':'Nombre';
        return (
            <div className="ui field">
                <label>{text}</label>
                <input />
            </div>
        );
    };
}

export default Field;