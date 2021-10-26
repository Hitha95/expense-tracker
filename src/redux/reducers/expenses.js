import { ADD_EXPENSE, DELETE_EXPENSE } from "../action-types/expenses";

const initialState = {
  expenseList: [],
};

export const expenseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_EXPENSE: {
      return { ...state, expenseList: [...state.expenseList, payload] };
    }
    case DELETE_EXPENSE: {
    }
    default:
      return state;
  }
};
