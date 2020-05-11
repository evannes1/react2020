import React from 'react';
import ReactDOM from 'react-dom';


// This will be a portal. We need the divs below to be rendered directly onto the
//   main body element.  We have created a div called modal in the main index.html
//   page; this div is a sibling of the root div.  So this is where the modal display
//   will be rendered (2nd parameter to createPortal()).
const Modal=(props) => {
    return ReactDOM.createPortal(
        <div onClick={props.onDismiss}
            className="ui dimmer modals visible active">
            <div onClick={(e) => e.stopPropagation()}
                className="ui standard modal visible active">
                <div className="header">{props.title}</div>
                <div className="content">
                    {props.content}
                </div>
                <div className="actions">
                    {props.actions}
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    );

};

export default Modal;