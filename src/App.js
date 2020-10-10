import React, { useState } from "react";
import "./App.css";
import Integer from "./components/Integers";
import Result from './components/Result'


const App = () => {
  const [result, setResult] = useState(0);


  const calculate = () => {
       let checkResult = '';
       if(result.includes('--')) {
           checkResult = result.replace('--', "+")
       } else {
           checkResult = result
       }
       try {
           setResult({
               // eslint-disable-next-line
               result: (eval(checkResult) || "") + ""
           })
       }catch (e) {
           setResult({
               result: "error"
           })
       }
    }

  const reset = () => {
      setResult({
          result: 0
      })
  }

  const backspace = () => {
      setResult({
          result: result.slice(0, -1)
      })
  }
  const onClick = (button) => {
      setResult(parseInt(button))
       
  }

  return (
    <div className="container">
      <div className="cal-container">
        <h1 style={{textAlign: "center"}}>Calculator</h1>
        <div className="cal-container__form">
          {/* <Result result={result} /> */}
          <p>{result}</p>
          <Integer onClick={onClick}/>
        </div>
      </div>
    </div>
  );
};

export default App;
