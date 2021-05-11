import { createStore, applyMiddleware, compose} from "redux";
import reducer from "./reducer";
import mySaga from "./sagas";
import {logger} from 'redux-logger';
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware, logger)));
    sagaMiddleware.run(mySaga);

    return store;
}
