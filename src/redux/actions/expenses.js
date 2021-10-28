import { ADD_EXPENSE, DELETE_EXPENSE } from "../action-types/expenses";

export const addExpense = (data) => {
  console.log("actions", data);
  return {
    type: ADD_EXPENSE,
    payload: data,
  };
};

export const deleteExpense = (id) => {
  return {
    type: DELETE_EXPENSE,
    payload: id,
  };
};
