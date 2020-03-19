import { createStore } from "redux";
import rootReducer from "../redurcers/rootReducer";
export const configureStore = () => {
  const store = createStore(rootReducer);

  return store;
};
