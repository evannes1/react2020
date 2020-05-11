import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {

    // De-structure out error and touched from the meta property
    renderError({ error, touched }) {
        if (touched&&error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    // use this shortened syntax; it takes all the form properties and
    //  adds them to the properties of the input element; so we reference
    //  the correct props by formProps.input.
    //  Make renderInput an arrow function so that it can know the context of 
    //  the "this" operator when calling renderError.
    renderInput=(formProps) => {
        const className=`field ${formProps.meta.error&&formProps.meta.touched? 'error':''}`;
        return (
            <div className={className}>
                <label>{formProps.label}</label>
                <input {...formProps.input} autoComplete="off" />
                {this.renderError(formProps.meta)}
            </div>
        );
    }

    // Redux Form will call preventDefault for us.
    //  This is a callback function so must use the arrow notation in order to bind the context.
    //  Stream Form should attempt to call a callback passed down in props from a parent component.
    onSubmit=(formValues) => {
        //console.log(formValues);
        this.props.onSubmit(formValues);

    }

    // Need to give the Field component an actual component to display
    render() {

        // Redux form will check the initialValues property that might have been set in the
        //  parent component.  If it finds the property, it will look for the "title" and
        //  "description" keys and use the initial values assigned to those keys for the form.
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter title:" />
                <Field name="description" component={this.renderInput} label="Enter description:" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const localValidate=(formValues) => {
    const errors={};
    if (!formValues.title) {
        // No title entered; add to errors object
        errors.title="Please enter a title"
    }
    if (!formValues.description) {
        // No description entered; add to errors object
        errors.description="Please enter a description"
    }
    return errors;

}

// redux form returns a function; that function is then called with StreamForm;
//  wire up the validate function here.  So now StreamForm is wrapped inside a
//  Redux form helper.
export default reduxForm({
    form: 'streamForm',
    validate: localValidate
})(StreamForm);

// StreamForm does not need to call an action creator; it is going to be used by a parent
//  component that will call the action creator.  So we have removed the connect function call.
