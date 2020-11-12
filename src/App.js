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
            newTotalValue = pendingValue + parseFloat(valString);
            setTotal(newTotalValue);
            break;
          case "-":
            newTotalValue = pendingValue - parseFloat(valString);
            setTotal(newTotalValue);
            break;
          case "/":
            newTotalValue = pendingValue / parseFloat(valString);
            setTotal(newTotalValue);
            break;
          case "*":
            newTotalValue = pendingValue * parseFloat(valString);
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
        setPendingValue(parseFloat(valString));
        setPendingOperation(operator);
        setTotal(parseFloat(valString));
        setValString("");
        showInput(input + operator);
      }
    }
  };

  const clearLastCharacter  = ()=>{
    let lastCharacter = input.charAt(input.length-1)
    if (["*", "/", "-", "+"].includes(lastCharacter)) {
      setPendingOperation("");
      setPendingValue(pendingValue)
      setValString(pendingValue.toString())
    }else{
      setValString(valString.slice(0,valString.length-1))
      console.log(valString.slice(0,valString.length-1));
      setPendingValue(pendingValue)

    }
    showInput(input.slice(0,input.length-1));
  }

  const clear = () => {
    showInput("");
    setPendingOperation("");
    setPendingValue(0);
    setValString("");
    setTotal(0)
  };


  const compute = () => {
    if (pendingOperation !== "" && valString !== "") {
      switch (pendingOperation) {
        case "+":
          totalOperation(total + parseFloat(valString));
          setTotal(total + parseFloat(valString))
          break;

        case "-":
          totalOperation(total - parseFloat(valString));
          setTotal(total - parseFloat(valString))
          break;

        case "/":
          totalOperation(total / parseFloat(valString));
          setTotal(total /parseFloat(valString))
          break;

        case "*":
          totalOperation(total * parseFloat(valString));
          setTotal(total * parseFloat(valString))
          break;

        default:
          break;
      }
    } else {
      
      if(total !== 0){
        totalOperation(total);
        setTotal(total)
      }else{
        totalOperation(parseFloat(valString));
      }
      
    }
  };

  console.log(valString);

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
            clearLastCharacter = {clearLastCharacter}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
