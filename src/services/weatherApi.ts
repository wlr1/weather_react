import axios from "axios";

const API_KEY = "8ea7db44830996a61c77628c632d84dc";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function fetchWeatherData(city: string) {
  const response = await axios.get(BASE_URL, {
    params: {
      q: city,
      appid: API_KEY,
      units: "metric",
    },
  });
  return response.data;
}
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
