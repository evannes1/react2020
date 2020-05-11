import _ from 'lodash';
// This is an action creator; will be responsible for making API call; get data 
import jsonPlaceholder from '../apis/jsonplaceholder';

// THE following function declarations work the same; the first uses more JS6 short-hand..
//  a function that returns another function
// fetchPostsAndUsers invoked from PostList.js, componentDidMount();
export const fetchPostsAndUsers=() => async (dispatch, getState) => {

    await dispatch(fetchPosts());
    const userIds=_.uniq(_.map(getState().posts, 'userId'));
    console.log("user ids: "+userIds);
    userIds.forEach(id => dispatch(fetchUser(id)));

};

// export const fetchPostsAndUsers=() => {
//     return async (dispatch) => {
//         console.log("Will fetch posts");
//         await dispatch(fetchPosts());
//         console.log("Fetched posts");

//     };
// };
// Asynchronous action creator
// return a function when using Redux Thunk
// result of this component ==> dispatch ==> Redux Thunk => if object comes in, it is passed to
//  the reducers; if function comes in, Redux-Thunk invokes the action function with the 
//  Redux dispatch function and the Redux getState function (gets data inside the Redux store)
//  Using Redux-thunk, we can manually call dispatch with an action; so the function we write here,
//   (calling the external API), gets the required data from the API and then we manually invoke
// the dispatch function with the data returned from the API call.  So the result of this action 
//  is a plain javascript object so it goes back through Thunk to the reducers where it can be
//  processed.

// This syntax means we have a function that returns an inner function,
//function() {
// return function() {

//  }
//}
export const fetchPosts=() => {

    // Redux-thunk will call this function, passing in the redux dispatch and getState;
    //  because this function is invoked in the middleware, we can do an async call
    return async (dispatch, getState) => {
        const response=await jsonPlaceholder.get('/posts');

        // call dispatch with a new action of type FETCH_POSTS and a payload of response
        //  NB -- just dispatch the response.data as this is all we care about
        dispatch({ type: 'FETCH_POSTS', payload: response.data });
    };
};

// New action creator to get 1 user at a time; this is called from the UserHeader component, 
//  componentDidMount.
export const fetchUser=id => {
    return async (dispatch, getState) => {
        const response=await jsonPlaceholder.get(`/users/${id}`);   //use template string

        // call dispatch
        dispatch({ type: 'FETCH_USER', payload: response.data });
    };
};


// New action creator to get 1 user at a time; this is called from the UserHeader component,
//  componentDidMount.
//export const fetchUser=id => {
//     return (dispatch, getState) => {
//         _fetchUser(id, dispatch);
//     }
// };

// // Private method
// const _fetchUser=_.memoize(async (id, dispatch) => {
//     const response=await jsonPlaceholder.get(`/users/${id}`);   //use template string

//     // call dispatch
//     dispatch({ type: 'FETCH_USER', payload: response.data });
// });


