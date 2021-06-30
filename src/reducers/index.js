import { combineReducers } from "redux";
import {createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import reposReducer from './reposReducers'


const rootReducer = combineReducers({
    reposReducer
})


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;