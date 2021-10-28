import { useSelector } from "react-redux";
import ExpenseCard from "./ExpenseCard";
import "./expense-list.css";

const ExpenseList = () => {
  const { expenseList } = useSelector((state) => state.expenses);
  //console.log(expenseList[0]);
  return (
    <div className="expense-list-container">
      {expenseList.map((item, i) => {
        return <ExpenseCard item={item} key={item.id} />;
      })}
    </div>
  );
};

export default ExpenseList;
