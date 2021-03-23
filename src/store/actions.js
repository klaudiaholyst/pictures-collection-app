import { ADD_POST, FETCH_POSTS } from './actionTypes';

import axios from 'axios';

export const addPost = content => ({
    type: ADD_POST,
    payload: content
});

export const fetchPosts = () => async dispatch => {
    const response = await axios.create({ baseURL: 'data.json' }).get().then(res => res.data);

    dispatch({
        type: FETCH_POSTS,
        payload: response
    })
};