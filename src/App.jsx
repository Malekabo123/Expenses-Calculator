import Head from "./components/Head/Head";
import "./App.css";
import Main from "./components/Main/Main";
import { useState } from "react";

function App() {
  //the data to be stored and exposed as a list
  const [expenseData, setExpenseData] = useState([
    {
      id: "1",
      date: new Date(2022, 2, 12),
      title: "New TV",
      amount: "77.2",
    },
    {
      id: "2",
      date: new Date(2021, 5, 2),
      title: "A Book",
      amount: "48.2",
    },
  ]);

  const [selectedFilter, setSelectedFilter] = useState("2022");

  const handleFilter = (newFilter) => {
    setSelectedFilter(newFilter);
  };

  const handleSave = (enteredData) => {
    //adding an id for every item of the expenses list to use it as a key property
    const newExpense = {
      ...enteredData,
      id: Math.random().toString(),
    };
    setExpenseData((prevExpense) => {
      return [newExpense, ...prevExpense];
    });
  };

  return (
    <>
      <Head onSaveData={handleSave} />
      <Main
        expenses={expenseData}
        handleFilter={handleFilter}
        selected={selectedFilter}
      />
    </>
  );
}

export default App;
