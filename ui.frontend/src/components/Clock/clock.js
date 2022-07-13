import { React, useState, useEffect } from "react";
import { ClockStyled } from "./clock.styled";
import { switchMonth } from "../../constants/switchMonth";
import { switchDay } from "../../constants/switchDay";

const Clock = () => {
  const [clockState, setClockState] = useState();
  const [dateState, setDateState] = useState();

  useEffect(() => {
    setInterval(() => {
      let date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let day = date.getDate();
      let week = date.getDay();
      let month = date.getMonth();
      let year = date.getFullYear();

      setClockState(
        `${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}`
      );
      setDateState(
        `${switchDay[week]}, ${day} de ${switchMonth[month]} de ${year}`
      );
    }, 100);
  });

  return (
    <ClockStyled>
      <h1>{clockState}</h1>
      <p>{dateState}</p>
    </ClockStyled>
  );
};

export default Clock;
