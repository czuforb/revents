import { createStore } from "redux";
import rootReducer from "../redurcers/rootReducer";

import { composeWithDevTools } from "redux-devtools-extension";

export const configureStore = () => {
  const store = createStore(rootReducer, composeWithDevTools());

  return store;
};
