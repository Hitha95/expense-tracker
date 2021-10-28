import { ADD_EXPENSE, DELETE_EXPENSE } from "../action-types/expenses";

const initialList = () => {
  const list = localStorage.getItem("expense-list");
  let expenses = [];
  if (list) {
    expenses = JSON.parse(list);
  }
  return expenses;
};

const initialState = {
  expenseList: initialList(),
};

export const expenseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_EXPENSE: {
      localStorage.setItem(
        "expense-list",
        JSON.stringify([...state.expenseList, payload])
      );
      return { ...state, expenseList: [payload, ...state.expenseList] };
    }
    case DELETE_EXPENSE: {
      let updatedList = state.expenseList.filter((prod) => {
        if (prod.id !== payload) {
          return prod;
        }
      });
      localStorage.setItem("expense-list", JSON.stringify(updatedList));
      return {
        ...state,
        expenseList: updatedList,
      };
    }
    default:
      return state;
  }
};
