import React from "react";
import "../css/Operators.css";

function Operators({ addOperator, compute, clear }) {
  return (
    <div className="operator__container">
      <button name="+" onClick={addOperator.bind(this, "+")}>
        +
      </button>
      <button name="-" onClick={addOperator.bind(this, "-")}>
        -
      </button>
      <button name="/" onClick={addOperator.bind(this, "/")}>
        /
      </button>
      <button name="*" onClick={addOperator.bind(this, "*")}>
        *
      </button>
      <button name="C" onClick={clear}>
        C
      </button>
      <button name="=" onClick={compute}>
        =
      </button>
    </div>
  );
}

export default Operators;
