import { useDispatch, useSelector } from "react-redux";
import { getForecastData, getWeatherData } from "../redux/action";
import { useEffect, useState } from "react";

import SearchBar from "./SearchBar";
import Forecast from "./Forecast";
import Loading from "./Loading";
import Error from "./Error";
import NotFound from "./NotFound";
import Footer from "./Footer";

function Weather() {
  //use dispatch the initial city, we use state
  const [city, setCity] = useState("");

  const dispatch = useDispatch();

  //searchCity function
  const searchCity = (city) => {
    dispatch(getWeatherData(city));
    dispatch(getForecastData(city));
  };

  useEffect(() => {
    //initial dispatch gets the weather in London
    dispatch(getWeatherData("London"));
    dispatch(getForecastData("London"));
  }, [dispatch]);

  const weatherData = useSelector((state) => state.weather);
  const { data, forecastData, loading, error } = weatherData;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    if (error.slice(-3) === "404") {
      return <NotFound />;
    }
    return <Error error={error} />;
  }

  if (!data || !forecastData) {
    return null;
  }
  // console.log(data);
  const { weather, main, dt, sys, name } = data; //destruting the data from the openweatherapi

  const { list } = forecastData;

  const sliceFunction = (array, start, end, steps) => {
    const slicedArray = [];

    for (let i = start; i < end; i += steps) {
      slicedArray.push(array[i]);
    }

    return slicedArray;
  };

  const shorten = sliceFunction(list, 0, 40, 8);
  // console.log("shorten", shorten)
  //convert
  const timestamp = dt * 1000; // Convert the timestamp to milliseconds
  const date = new Date(timestamp); // Create a Date object from the timestamp
  const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" }); // Get the day of the week

  //sunrise and sunset
  const newDate = new Date(sys.sunrise * 1000);
  const sunriseHour = newDate.getHours();
  const sunriseMinute = newDate.getMinutes().toString().padStart(2, "0");

  //sunset
  const newerDate = new Date(sys.sunset * 1000);
  const sunsetHour = newerDate.getHours();
  const sunsetMinutes = newerDate.getMinutes().toString().padStart(2, "0");

  //weather icon
  const weatherIcon = weather[0].icon;
  const src = `http://openweathermap.org/img/wn/${weatherIcon}.png`;

  return (
    <>
      <div className="weather">
        <SearchBar city={city} setCity={setCity} searchCity={searchCity} />
        <h1 className="city-name">
          {name}, {sys.country}
        </h1>
        <div className="icon">
          <img src={src} alt="weatherIcon" />
        </div>
        <h1 className="temp">
          {Math.round(main.temp)} &deg;{" "}
          <span style={{ verticalAlign: "sub", fontSize: "15px" }}>
            {weather[0].main}
          </span>
        </h1>
        <h6 className="max-min">
          {dayOfWeek} {Math.round(main.temp_min)}&deg;C /{" "}
          {Math.round(main.temp_max)} &deg;C
        </h6>
        <h6 className="sun-data">
          Sunrise: {sunriseHour}:{sunriseMinute} AM{" "}
          <span className="sunset"></span>Sunset: {sunsetHour % 12}:
          {sunsetMinutes} PM
        </h6>
      </div>

      <div>
        <h2 className="forecast-title">Forecast for the next 5 days </h2>
        {shorten.map((data, index) => {
          const forecastDate = new Date(data.dt * 1000);
          const date = forecastDate.toDateString();
          const icon = data.weather[0].icon;

          return (
            <Forecast
              key={index}
              date={date}
              icon={`http://openweathermap.org/img/wn/${icon}.png`}
              description={data.weather[0].main}
              min={data.main.temp_min}
              max={data.main.temp_max}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default Weather;
