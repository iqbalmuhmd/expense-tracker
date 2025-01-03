import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./styles/ExpenseList.css";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  return (
    <div>
      <ul className="expenses-list">
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
