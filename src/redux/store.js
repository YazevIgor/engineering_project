import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import sceneReducer from "./scene-reducer";
import thunkMiddleWare from "redux-thunk"

import { reducer as formReducer} from 'redux-form'

let reducers = combineReducers( {
    scene: sceneReducer,
    form: formReducer})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleWare)));

export default store;

window.store = store;