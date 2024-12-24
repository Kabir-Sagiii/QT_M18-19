import { legacy_createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import nameReducer from "../reducers/nameReducer";
var mystore = legacy_createStore(nameReducer, applyMiddleware(logger));

export default mystore;
