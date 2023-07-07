import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = import.meta.env.VITE_API_KEY;
// const API_KEY = "176297b0e219f3cee814ae799a78f816"
const baseURL = "https://api.openweathermap.org/data/2.5/";
const units = "metric";

//get today's today weather data
export const getWeatherData = createAsyncThunk(
  "/getWeatherData",
  async (city) => {
    const url = `${baseURL}/weather?q=${city}&appid=${API_KEY}&units=${units}`;
    const weatherData = await axios.get(url);
    return weatherData.data;
  }
);

//get all the forecase for 10 days
export const getForecastData = createAsyncThunk("/getForecast", async (city) => {
  const forecastURL = `${baseURL}/forecast?q=${city}&appid=${API_KEY}&units=${units}`;
  const forecastData = await axios.get(forecastURL);
  return forecastData.data;
});
