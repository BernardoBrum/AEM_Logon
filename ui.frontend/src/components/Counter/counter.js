import React from "react";
import { CounterStyled } from "./counter.styled";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Counter = () => {
  let [counter, setCounter] = useState(600);
  const history = useHistory();

  localStorage.getItem("Name");
  if (localStorage.Name === "reset") {
    counter = "Infinity";
  }
  
  setTimeout(() => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }, 1000);

  if (counter === 0) {
    history.push("content/reactapp/us/en/login.html?wcmmode=disabled");
    window.location.reload();
  }

  return (
    <CounterStyled>
      <h1>{counter}</h1>
      <span>seconds</span>
    </CounterStyled>
  );
};

export default Counter;
