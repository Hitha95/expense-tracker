import { useSelector } from "react-redux";
import ExpenseCard from "./ExpenseCard";
import "./expense-list.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ExpenseList = () => {
  const { expenseList } = useSelector((state) => state.expenses);
  const notify = () => toast.error("Expense Deleted!");
  return (
    <div className="expense-list-container">
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        className="toast"
      />
      {expenseList.map((item, i) => {
        return <ExpenseCard item={item} key={item.id} notifyDelete={notify} />;
      })}
    </div>
  );
};

export default ExpenseList;
