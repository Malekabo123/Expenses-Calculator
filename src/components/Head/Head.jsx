import Form from "./Form";
import { useState } from "react";

function Head(props) {
  const [flag, setFlag] = useState(false);

  //switch between add expense button and the form
  const change = (e) => {
    if (e.target.id === "headBut") {
      setFlag(true);
    } else {
      setFlag(false);
    }
  };

  return (
    <div id="headDiv">
      {!flag && (
        <button id="headBut" onClick={change}>
          Add New Expense
        </button>
      )}
      {flag && <Form onSaveData={props.onSaveData} change={change} />}
    </div>
  );
}

export default Head;
