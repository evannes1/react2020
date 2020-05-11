// Reducer to handle the action of the FETCH_USER; the state will eventually be updated to
//  hold all the users "fetched", based on the user IDs in the list of blog posts.  This is
//  why the state object is an array.
// 

export default (state=[], action) => {

    switch (action.type) {
        case 'FETCH_USER':
            return [...state, action.payload];
        default:
            return state;
    }
};