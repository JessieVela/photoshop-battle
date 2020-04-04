import fetchPosts from "./fetchPosts";
import fetchPostComment from "./fetchPostComments";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  fetchPosts,
  fetchPostComment,
});

export default allReducers;