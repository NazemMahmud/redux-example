import axios from "../axios";

export const getPosts = () => async dispatch => {
    const response = await axios.get('/posts');
    dispatch({
        type: 'GET_POSTS',
        payload: response
    });
}


/**
 * full form of above function

 export const getPosts = () => {
     return async (dispatch, getState) => {
        const response = await axios.get('/posts');
        dispatch({
            type: 'GET_POSTS',
            payload: response
        });
    }
 };
 */