import React from "react";
import "../css/Operators.css";

function Operators() {
  return (
    <div className="operator__container">
      <button name="+">+</button>
      <button name="-">-</button>
      <button name="/">/</button>
      <button name="*">*</button>
      <button name="C">C</button>
      <button name="=">=</button>
    </div>
  );
}

export default Operators;
