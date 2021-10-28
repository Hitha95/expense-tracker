import React from "react";
import AddExpenseForm from "../../components/add-expense-form/AddExpenseForm";
import Topfold from "../../components/topfold/Topfold";
import "./add-expense.css";

const AddExpense = () => {
  return (
    <>
      <Topfold />
      <AddExpenseForm />
    </>
  );
};

export default AddExpense;
