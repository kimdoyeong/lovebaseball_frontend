import { createStore, compose, applyMiddleware } from "redux";
import createSaga from "redux-saga";

import reducer, { RootSaga } from "./reducer";

const saga = createSaga();
const composeEnhancers: any =
  (typeof window !== "undefined" &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(saga)));

saga.run(RootSaga);
export default store;
