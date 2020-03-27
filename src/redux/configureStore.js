import { createStore, combineReducers, applyMiddleware } from "redux";
import { routerReducer } from "react-router-redux";
import thunk from "redux-thunk";
import user from "./modules/user";

const reducer = combineReducers({
  user,
  routing: routerReducer,
});

let store;

store = createStore(reducer, applyMiddleware(thunk));

export default store;