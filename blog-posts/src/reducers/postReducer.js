// Good practice is to NOT mutate the state argument

// IF state changes, we need to return a new state object based on Redux code; if the same
//  state value is returned (even if you change it), Redux will not detect a change and so the
//  the UI pieces will not be re-rendered.

// Here the new state returned will contain the list of blog posts from the previous call to an API.
export default (state=[], action) => {

    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;

    }

};