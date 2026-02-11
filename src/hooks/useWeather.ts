// src/hooks/useWeather.ts
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface WeatherResponse {
  current: {
    tempF: number;
    tempC: number;
    condition: string;
    icon: number;
  };
  forecast: Array<{
    date: string;
    label: string;
    maxTempF: number;
    minTempF: number;
    maxTempC: number;
    minTempC: number;
    icon: number;
    condition: string;
  }>;
  location: {
    city: string;
    region: string;
    country: string;
  };
}

export const useWeatherQuery = (zip: string) => {
  return useQuery<WeatherResponse, Error>({
    queryKey: ["weather", zip],
    enabled: false,
    queryFn: async () => {
      const apiKey = import.meta.env.VITE_WEATHERAPI_KEY;
      const response = await axios.get(
        "https://api.weatherapi.com/v1/forecast.json",
        {
          params: { key: apiKey, q: zip, days: 5 },
        },
      );

      const data = response.data;

      const forecast = data.forecast.forecastday.map((day: any) => ({
        date: day.date,
        label: new Date(day.date).toLocaleDateString("en-US", {
          weekday: "short",
        }),
        maxTempF: Math.round(day.day.maxtemp_f),
        minTempF: Math.round(day.day.mintemp_f),
        maxTempC: Math.round(day.day.maxtemp_c),
        minTempC: Math.round(day.day.mintemp_c),
        icon: day.day.condition.code,
        condition: day.day.condition.text,
      }));

      const currentWeather = {
        tempF: Math.round(data.current.temp_f),
        tempC: Math.round(data.current.temp_c),
        condition: data.current.condition.text,
        icon: data.current.condition.code,
      };

      const location = {
        city: data.location.name,
        region: data.location.region,
        country: data.location.country,
      };

      return { current: currentWeather, forecast, location };
    },
  });
};
