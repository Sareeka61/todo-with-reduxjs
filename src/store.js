import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk"; // Note the named import
import { composeWithDevTools } from "redux-devtools-extension";
import taskReducer from "./reducers/taskReducer";

const store = createStore(
  taskReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
