import React, { useState } from "react";
import "./styles/NewExpenseForm.css";

const NewExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const ExpenseData = {
      title,
      amount,
      date: new Date(date),
    };

    props.onSaveExpenseData(ExpenseData);

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            onChange={titleChangeHandler}
            value={title}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            onChange={amountChangeHandler}
            value={amount}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            onChange={dateChangeHandler}
            value={date}
            min="2012-01-01"
            max="2024-12-31"
          />
        </div>
        <div className="new-expense__action">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default NewExpenseForm;
