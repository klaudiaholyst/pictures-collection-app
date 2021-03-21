import { ADD_POST, FETCH_POSTS } from './actionTypes';

import axiosInstance from '../axios-posts';

export const addPost = content => ({
    type: ADD_POST,
    payload: content
});

export const fetchPosts = () => async dispatch => {
    const response = await axiosInstance.get('/posts.json')
        .then(res => Object.values(res.data))
        .catch(error => console.log(error));

    dispatch({
        type: FETCH_POSTS,
        payload: response
    })
};