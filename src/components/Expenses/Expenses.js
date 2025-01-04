import React, { useState } from "react";
import "./styles/Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ item }) => {
  const [filterYear, setFilterYear] = useState("2024");

  const setFilterHandler = (enteredYear) => {
    setFilterYear(enteredYear);
    console.log(enteredYear);
  };

  const filteredExpenses = item.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filterYear} onSetYear={setFilterHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
