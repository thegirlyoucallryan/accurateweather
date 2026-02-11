import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useWeatherStore } from "../store";

interface Location {
  city: string;
  region: string;
  country: string;
}

interface ForecastDay {
  date: string;
  label: string;
  maxTempF: number;
  minTempF: number;
  maxTempC: number;
  minTempC: number;
  icon: number;
  condition: string;
}

interface CurrentWeather {
  tempF: number;
  tempC: number;
  condition: string;
  icon: number;
}

interface WeatherResponse {
  location: {
    name: string;
    region: string;
    country: string;
  };
  current: {
    temp_f: number;
    temp_c: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
  };
  forecast: {
    forecastday: Array<{
      date: string;
      day: {
        maxtemp_f: number;
        mintemp_f: number;
        maxtemp_c: number;
        mintemp_c: number;
        condition: {
          text: string;
          icon: string;
          code: number;
        };
      };
    }>;
  };
}

export const useWeatherQuery = (zip: string) => {
  const setLocation = useWeatherStore((s) => s.setLocation);
  const setCurrent = useWeatherStore((s) => s.setCurrentWeather);
  const setForecast = useWeatherStore((s) => s.setForecast);

  return useQuery<WeatherResponse, Error>({
    queryKey: ["weather", zip],
    queryFn: async () => {
      if (!zip) throw new Error("No zip code provided");

      const apiKey = import.meta.env.VITE_WEATHERAPI_KEY;
      const res = await axios.get<WeatherResponse>(
        "https://api.weatherapi.com/v1/forecast.json",
        { params: { key: apiKey, q: zip, days: 5 } },
      );

      // Map forecast
      const forecast: ForecastDay[] = res.data.forecast.forecastday.map(
        (day) => ({
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
        }),
      );

      // Location
      const location: Location = {
        city: res.data.location.name,
        region: res.data.location.region,
        country: res.data.location.country,
      };

      // Current
      const currentWeather: CurrentWeather = {
        tempF: Math.round(res.data.current.temp_f),
        tempC: Math.round(res.data.current.temp_c),
        condition: res.data.current.condition.text,
        icon: res.data.current.condition.code,
      };

      // Update store
      setLocation(location);
      setCurrent(currentWeather);
      setForecast(location.city, location.region, forecast);

      return res.data;
    },
    enabled: !!zip,
  });
};
