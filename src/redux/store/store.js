import { createStore, combineReducers, applyMiddleware } from "redux";
import { expenseReducer } from "../reducers/expenses";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  expenses: expenseReducer,
});

const initialState = {};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware())
);

export default store;
