import React from "react";
import NewExpenseForm from "./NewExpenseForm";
import './styles/NewExpense.css'

const NewExpense = () => {
  return (
    <div className="new-expense">
      <NewExpenseForm />
    </div>
  );
};

export default NewExpense;
