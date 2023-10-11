import { useState } from "react";

function Form(props) {
  //set state to handle change when a form input is updated
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleTitleChange = (event) => {
    setEnteredTitle(event.target.value);
    setIsValid(true);
  };
  const handleAmountChange = (event) => {
    setEnteredAmount(event.target.value);
    setIsValid(true);
  };
  const handleDateChange = (event) => {
    setEnteredDate(event.target.value);
    setIsValid(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //creating a new object from the entered data to store it and show it
    const output = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    if (enteredTitle && enteredAmount && enteredDate) {
      props.onSaveData(output);
      props.change(event);
    } else {
      setIsValid(false);
    }

    //clear the form after submission
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputContainer">
        <label>Title</label>
        <input
          className={`${enteredTitle === "" && !isValid ? "invalid" : ""}`}
          value={enteredTitle}
          onChange={handleTitleChange}
          type="text"
        />
      </div>

      <div className="inputContainer">
        <label>Amount</label>
        <input
          className={`${enteredAmount === "" && !isValid ? "invalid" : ""}`}
          value={enteredAmount}
          onChange={handleAmountChange}
          type="number"
          min="0.01"
          step="0.01"
        />
      </div>

      <div className="inputContainer">
        <label>Date</label>
        <input
          className={`${enteredDate === "" && !isValid ? "invalid" : ""}`}
          value={enteredDate}
          onChange={handleDateChange}
          type="date"
          min="2019-01-01"
          max="2022-12-31"
        />
      </div>

      <button id="cancel" type="button" onClick={props.change}>
        Cancel
      </button>

      <button id="add" type="submit">
        Add Expense
      </button>
    </form>
  );
}

export default Form;
