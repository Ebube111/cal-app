import React, { useState } from "react";
import "./App.css";
import Screen from "./components/Screen";
import CalculatorBody from "./containers/CalculatorBody";

const App = () => {
  const [input, showInput] = useState("");
  const [pendingValue, setPendingValue] = useState(0);
  const [pendingOperation, setPendingOperation] = useState("");
  const [valString, setValString] = useState("");
  const [total, setTotal] = useState(0);

  const addNumber = (number) => {
    showInput(input + number);
    setValString(valString + number);

  };

  const addOperator = (operator) => {
    if (valString !== "") {
      if (pendingOperation !== "") {
        let newTotalValue = 0;
        switch (pendingOperation) {
          case "+":
            newTotalValue = pendingValue + parseInt(valString);
            setTotal(newTotalValue);
            break;
          case "-":
            newTotalValue = pendingValue - parseInt(valString);
            setTotal(newTotalValue);
            break;
          case "/":
            newTotalValue = pendingValue / parseInt(valString);
            setTotal(newTotalValue);
            break;
          case "*":
            newTotalValue = pendingValue * parseInt(valString);
            setTotal(newTotalValue);
            break;

          default:
            break;
        }

        setPendingValue(newTotalValue);
        setPendingOperation(operator);
        setValString("");
        showInput(input + operator);


      } else {
        setPendingValue(parseInt(valString));
        setPendingOperation(operator);
        setTotal(parseInt(valString));
        setValString("");
        showInput(input + operator);
      }
    }
  };

  const clear = () => {
    showInput("");
    setPendingOperation("");
    setPendingValue(0);
    setValString("");
  };

  const compute = () => {
    if (pendingOperation !== "" && valString !== "") {
      switch (pendingOperation) {
        case "+":
          totalOperation(total + parseInt(valString));
          break;

        case "-":
          totalOperation(total - parseInt(valString));
          break;

        case "/":
          totalOperation(total / parseInt(valString));
          break;

        case "*":
          totalOperation(total * parseInt(valString));
          break;

        default:
          break;
      }
    } else {
      showInput(total.toString());
    }
  };

  function totalOperation(totalValue) {
    setPendingOperation("");
    setPendingValue(totalValue);
    showInput(totalValue.toString());
    setValString(totalValue.toString());
  }

  return (
    <div className="container">
      <div className="cal-container">
        <h1 style={{ textAlign: "center" }}>Calculator</h1>
        <div className="cal-container__form">
          <Screen result={input} />
          <CalculatorBody
            addNumber={addNumber}
            addOperator={addOperator}
            clear={clear}
            compute={compute}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
