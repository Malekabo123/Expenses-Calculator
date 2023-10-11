import Expense from "./Expense";
import React from "react";

function ExpenseList(props) {
  let expensesContent = <h2>No expenses found.</h2>;

  if (props.filteredItems.length > 0) {
    expensesContent = props.filteredItems.map((expense) => (
      <Expense
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return <>{expensesContent}</>;
}

export default ExpenseList;
