import { React, useState } from "react";
import { WeatherStyled } from "./weather.styled";
import { switchRegion } from "../../constants/switchRegion";

const Weather = () => {
  const [temp, setTemp] = useState();
  const [icon, setIcon] = useState();
  const [city, setCity] = useState();
  const [region, setRegion] = useState();

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      console.log(lat)
      console.log(lon)

    fetch(
      `https://api.weatherapi.com/v1/current.json?key=8eb8f003f8984fbe9a3172745220802&q=Carangola&aqi=no`
    )
      .then((answer) => answer.json())
      .then((data) => {
        console.log(data)
        let temp = data.current.temp_c.toFixed() + "°";
        let icon = data.current.condition.icon;

        setTemp(temp);
        setIcon(icon);

        let city = data.location.name;
        let region = data.location.region;

        setCity(city);
        setRegion(region);
      });
    })
  }

  return (
    <WeatherStyled>
      <p>
        {city} - {switchRegion(region)}
      </p>
      <div>
        <img src={icon} alt="Weather icon" />
        <h1>{temp}</h1>
      </div>
    </WeatherStyled>
  );
};

export default Weather;
