import React from "react";
import "../css/CalculatorBody.css"
import Numbers from "../components/Numbers";
import Operators from "../components/Operators";

function CalculatorBody(props) {
  return (
    <div className="calculator__body">
      <Numbers {...props} />
      <Operators {...props} />
    </div>
  );
}

export default CalculatorBody;
