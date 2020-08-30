import {createStore, combineReducers} from 'redux';
import { postsDispatch } from './dispatch';

const reducer = combineReducers({
    posts: postsDispatch
});

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());