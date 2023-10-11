function Expense(props) {
  //processing the date's properties because it as a 'new Date' object
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div id="expense">
      <div id="expense_info">
        <div id="expense_date">
          <h5>{month}</h5>
          <h6>{year}</h6>
          <h2>{day}</h2>
        </div>
        <h3 id="expense_title">{props.title}</h3>
      </div>
      <h3 id="expense_amount">$ {props.amount}</h3>
    </div>
  );
}

export default Expense;
