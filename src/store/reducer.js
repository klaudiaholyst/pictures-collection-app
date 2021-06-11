import { ADD_PHOTO, FETCH_PHOTOS } from './actionTypes';

const initialState = {
    photos: []
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PHOTO: {
            return {
                ...state,
                photos: [...state.photos, action.payload]
            }
        }
        case FETCH_PHOTOS: {
            return {
                ...state,
                photos: action.payload
            }
        }
        default:
            return state;
    }
};

export default reducer;