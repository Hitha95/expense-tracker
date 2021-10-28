import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./add-expense-form.css";
import { categories } from "../../data/categoriesList";
import { addExpense } from "../../redux/actions/expenses";
import { v4 as uuidv4 } from "uuid";
import SuccessModal from "./SuccessModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState();
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAmount = (e) => {
    let amt = parseFloat(e.target.value);
    if (isNaN(amt)) {
      setAmount("");
      return;
    }
    setAmount(amt);
  };
  const handleCategory = (category) => {
    setCategory(category);
    setCategoryOpen(false);
  };
  const handleBlur = () => {
    setCategoryOpen(false);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const handleSubmit = () => {
    if (title === "" || amount === "" || !category) {
      const notify = () => toast.error("please enter all details");
      notify();
      return;
    }
    const data = {
      id: uuidv4(),
      title,
      amount,
      category,
      createdAt: new Date(),
    };
    dispatch(addExpense(data));
    setModalIsOpen(true);
    setTitle("");
    setAmount("");
    setCategory();
  };
  return (
    <div className="expense-form-container">
      <SuccessModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      <div className="form-item">
        <label>Title</label>
        <input
          placeholder="Give a name to your expenditure"
          value={title}
          onChange={(e) => handleTitle(e)}
        />
      </div>
      <div className="form-item">
        <label>Amount ₹</label>
        <input
          placeholder="Enter Amount"
          className="amount-input"
          onChange={(e) => handleAmount(e)}
          value={amount}
        />
      </div>
      <div className="category-container-parent form-item" onBlur={handleBlur}>
        <div className="category">
          <div
            className="category-dropdown"
            onClick={() => setCategoryOpen(!categoryOpen)}
          >
            <label>{category ? category.title : "Category"}</label>
            <i class="fi-rr-angle-down"></i>
          </div>
          {categoryOpen && (
            <div className="category-container">
              {categories.map((category) => (
                <div
                  className="category-item"
                  key={category.id}
                  onClick={() => handleCategory(category)}
                >
                  <label>{category.title}</label>
                  <img src={category.icon.default} alt={category.title} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="btn-add-form btn">
        <div onClick={handleSubmit}>
          <label>Add</label>
          <i class="fi-rr-paper-plane flex-center"></i>
        </div>
      </div>
    </div>
  );
};

export default AddExpenseForm;
