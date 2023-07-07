import React from "react";

function Forecast({ date, icon, description, min, max }) {
  return (
    <div className="forecast">
      <h5>{date}</h5>
      <img src={icon} alt="weather-icon" />
      <h6>{description}</h6>
      <h6>
        {Math.round(min)} &deg; / {Math.round(max)} &deg;
      </h6>
    </div>
  );
}

export default Forecast;
