import Axios from "axios"

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECIEVE_POSTS = 'RECIEVE_POSTS'

export function requestPosts() {
    return {
        posts: []
    }
}

function fetchPosts() {
    const response = []
    return dispatch => {
        dispatch(requestPosts())
        return axios.get("http://localhost:9000/posts")
        .then(response => {response = res.data.slice(2, res.data.length - 1);
    }
}