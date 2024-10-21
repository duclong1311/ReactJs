import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import { thunk } from "redux-thunk"; 
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga/userSaga";

const store = createStore(rootReducer, applyMiddleware(thunk));

const sagaMiddleware = createSagaMiddleware();

//const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

//sagaMiddleware.run(rootSaga);

export default store;