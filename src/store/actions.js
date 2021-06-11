import { ADD_PHOTO, FETCH_PHOTOS } from './actionTypes';

import axiosInstance from '../axios-photos';

export const addPhoto = content => ({
    type: ADD_PHOTO,
    payload: content
});

export const fetchPhotos = () => async dispatch => {
    const response = await axiosInstance.get('/posts.json')
        .then(res => Object.values(res.data))
        .catch(error => console.log(error));

    dispatch({
        type: FETCH_PHOTOS,
        payload: response
    })
};