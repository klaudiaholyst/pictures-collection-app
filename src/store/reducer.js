import { ADD_POST } from './actionTypes';

const initialState = {
    posts: [{
        id: "001",
        name: "Road by the sea",
        url: "https://cdn.pixabay.com/photo/2021/01/10/12/00/road-5904909_1280.jpg",
        date: "26.01.2021",
        place: "XYZ",
        tags: "#zachódsłońca #krajobraz"
    },
    {
        id: "002",
        name: "Road by the sea",
        url: "https://cdn.pixabay.com/photo/2021/01/10/12/00/road-5904909_1280.jpg",
        date: "27.01.2021",
        place: "ZYX",
        tags: "#zachódsłońca"
    }
    ]
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }
        }
        default:
            return state;
    }
};

export default reducer;