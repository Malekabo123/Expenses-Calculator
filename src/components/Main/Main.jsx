import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";

function Main(props) {
  const filteredItems = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === props.selected;
  });

  return (
    <div id="main">
      <ExpensesFilter
        selected={props.selected}
        handleFilter={props.handleFilter}
      />

      <ExpensesChart expenses={filteredItems} />

      <ExpenseList filteredItems={filteredItems} expenses={props.expenses} />
    </div>
  );
}

export default Main;
