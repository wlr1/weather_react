import { createSlice } from "@reduxjs/toolkit";
import { WeatherState } from "./types.ts";
import { fetchWeatherData } from "./asyncActions.ts";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: null,
    loading: false,
    error: null,
  } as WeatherState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.error.message || null;
      });
  },
});

export default weatherSlice.reducer;
