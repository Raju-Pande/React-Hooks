import "./App.css";
import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";

export default function App() {
  // Create state for the expenses here
  const [expenses, setExpenses] = useState([]);

  // Function to add a new expense
  // const addExpenseHandler = (expense) => {
  //   setExpenses((prevExpenses) => [...prevExpenses, expense]);
  // };

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm onAddExpense={addExpenseHandler} />
        <div className="expenseContainer">
          <ExpenseInfo expenses={expenses} />
          <ExpenseList expenses={expenses} />
        </div>
      </div>
    </>
  );
}
