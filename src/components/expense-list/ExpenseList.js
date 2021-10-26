import React from "react";
import ExpenseCard from "./ExpenseCard";

const ExpenseList = () => {
  const list = [{ name: "hello" }, { name: "hey" }];
  return (
    <div>
      {list.map((item, i) => {
        return <ExpenseCard item={item} key={i} />;
      })}
    </div>
  );
};

export default ExpenseList;
