import { ADD_POST, FETCH_POSTS } from './actionTypes';

const initialState = {
    posts: []
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }
        }
        case FETCH_POSTS: {
            return {
                ...state,
                posts: action.payload
            }
        }
        default:
            return state;
    }
};

export default reducer;