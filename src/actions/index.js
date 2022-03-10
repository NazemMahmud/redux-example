import axios from "../axios";
import _ from 'lodash';

export const getPosts = () => async dispatch => {
    const response = await axios.get('/posts');
    dispatch({
        type: 'GET_POSTS',
        payload: response.data
    });
}

export const getUser = id => async dispatch => {
    const response = await axios.get(`/users/${id}`);

    dispatch({type: 'GET_USER', payload: response.data});
};

export const getPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(getPosts());

    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    userIds.forEach(id => dispatch(getUser(id)));
};


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