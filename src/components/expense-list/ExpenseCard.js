import "./expense-card.css";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../../redux/actions/expenses";

const ExpenseCard = ({ item, notifyDelete }) => {
  // const time = item.createdAt;
  console.log(item.id);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    /*const confirm = window.confirm(`are u sure ? ${id}`);
    if (confirm) dispatch(deleteExpense(id));
    else alert(`${item.id}`); */
    dispatch(deleteExpense(id));
    notifyDelete();
  };
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={item.category.icon.default} alt={item.title} />
      </div>
      <div className="card-title">
        <label>{item.title}</label>
        <label>{item.title}</label>
        {/* <label>{time}</label> */}
      </div>
      <div className="card-right">
        <div
          className="btn-delete"
          onClick={() => {
            handleDelete(item.id);
          }}
        >
          <i class="fi fi-rr-trash"></i>
        </div>
        <div className="card-amount">₹{item.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseCard;
