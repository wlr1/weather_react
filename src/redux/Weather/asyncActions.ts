import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { WeatherState } from "./types";

const API_KEY = "8ea7db44830996a61c77628c632d84dc";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeatherData = createAsyncThunk(
  "weather/fetchData",
  async (city: string): Promise<WeatherState> => {
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          q: city,
          appid: API_KEY,
          units: "metric",
        },
      });
      return response.data;
    } catch (err) {
      throw new Error("Failed to fetch weather data");
    }
  }
);
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
