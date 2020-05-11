import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {


    // Value property is special to the Provider component.  Provider component enables you
    //   to change the default value of the context.  It is provided by the framework
    //   when you create a context.
    //  Every time the Provider is rendered, it creates a new "pipe" of information down to
    //   its UserCreate component.
    render() {
        return (
            <div className="ui container">
                <LanguageStore>
                    <LanguageSelector />
                    <ColorContext.Provider value="red">
                        <UserCreate />
                    </ColorContext.Provider>
                </LanguageStore>
            </div>
        );
    }
}

export default App;