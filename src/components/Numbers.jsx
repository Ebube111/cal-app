import React, { useEffect } from "react";
import "../css/Numbers.css";

function Numbers({ addNumber, dot }) {
  useEffect(() => {
    document.addEventListener("keydown", handleKeyEvent, false);

    return () => {
      document.removeEventListener("keydown", handleKeyEvent, false);
    };
  });

  const handleKeyEvent = (e) => {
    if (["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(e.key)) {
      addNumber(e.key);
    }
  };

  return (
    <div className="numbers__container">
      <button name="1" onClick={addNumber.bind(this, 1)}>
        1
      </button>
      <button name="2" onClick={addNumber.bind(this, 2)}>
        2
      </button>
      <button name="3" onClick={addNumber.bind(this, 3)}>
        3
      </button>
      <button name="4" onClick={addNumber.bind(this, 4)}>
        4
      </button>
      <button name="5" onClick={addNumber.bind(this, 5)}>
        5
      </button>
      <button name="6" onClick={addNumber.bind(this, 6)}>
        6
      </button>
      <button name="7" onClick={addNumber.bind(this, 7)}>
        7
      </button>
      <button name="8" onClick={addNumber.bind(this, 8)}>
        8
      </button>
      <button name="9" onClick={addNumber.bind(this, 9)}>
        9
      </button>
      <button name="0" onClick={addNumber.bind(this, 0)}>
        0
      </button>
    </div>
  );
}

export default Numbers;
