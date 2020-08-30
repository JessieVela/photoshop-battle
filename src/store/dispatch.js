const initialState = {
    posts: []
}

export const postsDispatch = (state = initialState, action) => {
    switch(action.type){
        case 'SET_POSTS':
            return { ...state, posts: action.payload}
        default:
            return state;
    }
}