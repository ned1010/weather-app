import { createSlice } from "@reduxjs/toolkit";
import { getWeatherData, getForecastData } from "./action";

const initialState = {
  data: null,
  forecastData: null,
  loading: false,
  error: null,
};
const weatherSlice = createSlice({
  name: "weather",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWeatherData.pending, (state) => {
        (state.loading = true), (state.error = null);
      })

      .addCase(getWeatherData.fulfilled, (state, action) => {
        (state.loading = false), (state.data = action.payload);
      })

      .addCase(getWeatherData.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error.message);
      })
      // .addCase(getForecastData.loading, (state) => {
      //   (state.loading = true), (state.error = null);
      // })
      .addCase(getForecastData.fulfilled, (state, action) => {
        (state.loading = false), (state.forecastData = action.payload);
      });
    // .addCase(getForecastData.rejected, (state, action) => {
    //   (state.loading = false), (state.error = action.error.message);
    // });
  },
});

export default weatherSlice;
