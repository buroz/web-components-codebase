import { createStore, combineReducers } from "redux";

import { reducer as AuthReducer } from "./auth";

const rootReducer = combineReducers({
  auth: AuthReducer
});

export const store = createStore(
  rootReducer,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
