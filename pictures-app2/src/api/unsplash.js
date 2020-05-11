import axios from 'axios';

//api key: _wpmFLJZtluRlMaawvk8XtaEG8MoT8Bd7IYq-FI4wxc

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID _wpmFLJZtluRlMaawvk8XtaEG8MoT8Bd7IYq-FI4wxc'
    }
});
