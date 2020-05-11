import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form';
import streamsReducer from './streamsReducer';

//NB: the "form" key is required by redux-form; the formReducer is supplied by redux-form
export default combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamsReducer
});