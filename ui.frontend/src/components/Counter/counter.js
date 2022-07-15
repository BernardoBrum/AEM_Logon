import React from "react";
import { CounterStyled } from "./counter.styled";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(600);

  setTimeout(() => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }, 1000)

  if (counter === 0) {
    console.log("Login Page")
  } 

  return (
    <CounterStyled>
      <h1>{counter}</h1>
      <span>seconds</span>
    </CounterStyled>
  );
};

export default Counter;
