import { createStore, applyMiddleware, compose} from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducer";
import { fetchStandingsSaga } from "./reducer";
const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
    sagaMiddleware.run(fetchStandingsSaga);
    return store;
}
