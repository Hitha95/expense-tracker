import { useSelector } from "react-redux";
import ExpenseCard from "./ExpenseCard";
import "./expense-list.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ExpenseList = () => {
  const { expenseList, str } = useSelector((state) => state.expenses);
  const notify = () => toast.error("Expense Deleted!");
  const filteredList = expenseList.filter((item) => {
    return item.title.toLowerCase().includes(str.toLowerCase());
  });

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
      {filteredList.length > 0 ? (
        filteredList.map((item, i) => {
          return (
            <ExpenseCard item={item} key={item.id} notifyDelete={notify} />
          );
        })
      ) : (
        <div className="img-empty-list">
          <label>Its empty in here!</label>
          <img
            src={require("../../data/images/empty.png").default}
            alt="Its empty in here!"
          />
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
