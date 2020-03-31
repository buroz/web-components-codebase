import { createStore, combineReducers } from "redux";

import { authReducer } from "./reducers";

const rootReducer = combineReducers({
  auth: authReducer
});

export const store = createStore(
  rootReducer,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
