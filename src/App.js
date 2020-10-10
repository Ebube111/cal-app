import React, { useState } from "react";
import "./App.css";
import Screen from "./components/Screen";
import CalculatorBody from "./containers/CalculatorBody";
import Integer from "./components/Integers";


const App = () => {
  const [result, setResult] = useState(0);
  const onClick = (button) => {
      setResult(parseInt(button))      
  }

  return (
    <div className="container">
      <div className="cal-container">
        <h1 style={{textAlign: "center"}}>Calculator</h1>
        <div className="cal-container__form">
          <Screen />
          <CalculatorBody />
          {/* <p>{result}</p>
          <Integer onClick={onClick}/> */}
        </div>
      </div>
      </div>
  );
};

export default App;
