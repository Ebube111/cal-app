import React, { useEffect } from "react";
import "../css/Operators.css";

function Operators({ addOperator, compute, clear }) {
  useEffect(() => {
    document.addEventListener("keydown", handleKeyEvent, false);

    return () => {
      document.removeEventListener("keydown", handleKeyEvent, false);
    };
  });

  const handleKeyEvent = (e) => {
    if (["*", "/", "-", "+"].includes(e.key)) {
      addOperator(e.key);
    }

    if (e.key === "Enter") {
      compute();
    }

    if (e.key === "Backspace") {
      clear();
    }
  };
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
