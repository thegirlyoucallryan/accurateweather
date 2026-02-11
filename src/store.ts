import { create } from "zustand";

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

export interface WeatherState {
  zip: string;
  unit: "F" | "C";
  city: string;
  region: string;
  forecast: ForecastDay[];
  current: {
    tempF: number;
    tempC: number;
    condition: string;
    icon: number;
  } | null;
  location: { city: string; region: string; country: string } | null;
  setZip: (zip: string) => void;
  setUnit: (unit: "F" | "C") => void;
  setForecast: (city: string, region: string, forecast: ForecastDay[]) => void;
  setCurrentWeather: (current: WeatherState["current"]) => void;
  setLocation: (location: WeatherState["location"]) => void;
}
export const useWeatherStore = create<WeatherState>((set) => ({
  zip: "",
  unit: "F",
  city: "",
  region: "",
  forecast: [],
  current: null,
  location: null,
  setZip: (zip) => set({ zip }),
  setUnit: (unit) => set({ unit }),
  setForecast: (city, region, forecast) => set({ city, region, forecast }),
  setCurrentWeather: (current: WeatherState["current"]) => set({ current }),
  setLocation: (location) => set({ location }),
}));
