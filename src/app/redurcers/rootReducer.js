import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import eventReducer from "../../features/event/eventReducer";

const rootReducer = combineReducers({
  events: eventReducer,
  form: FormReducer
});

export default rootReducer;
