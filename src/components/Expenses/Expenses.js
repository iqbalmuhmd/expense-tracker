import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./styles/Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = ({ item }) => {
  const [filterYear, setFilterYear] = useState("2024");

  const setFilterHandler = (enteredYear) => {
    setFilterYear(enteredYear);
    console.log(enteredYear);
  };

  const filterExpense = item.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filterYear} onSetYear={setFilterHandler} />
      {filterExpense.map((expense) => (
        <ExpenseItem
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
};

export default Expenses;
