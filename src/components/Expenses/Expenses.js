import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./styles/Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = ({ item }) => {
  const [filterYear, setFilterYear] = useState("2020");

  const setFilterHandler = (enteredYear) => {
    setFilterYear(enteredYear)
    console.log(enteredYear);
    
  }

  return (
    <Card className="expenses">
      <ExpenseItem
        title={item[0].title}
        date={item[0].date}
        amount={item[0].amount}
      />
      <ExpenseItem
        title={item[1].title}
        date={item[1].date}
        amount={item[1].amount}
      />
      <ExpenseItem
        title={item[2].title}
        date={item[2].date}
        amount={item[2].amount}
      />
      <ExpenseItem
        title={item[3].title}
        date={item[3].date}
        amount={item[3].amount}
      />
      <ExpenseFilter selected={filterYear} onSetYear={setFilterHandler} />
    </Card>
  );
};

export default Expenses;
