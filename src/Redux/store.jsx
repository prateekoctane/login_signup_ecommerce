import { legacy_createStore,applyMiddleware } from "redux";
import { reducer } from "./authentication/reducer";
import thunk from "redux-thunk";

export const store = legacy_createStore(reducer, applyMiddleware(thunk))

// console.log(store.getState(),"from store")