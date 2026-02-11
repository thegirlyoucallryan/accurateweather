import React from "react";
import { useWeatherStore } from "../store";

export const UnitToggle: React.FC = () => {
  const unit = useWeatherStore((s) => s.unit);
  const setUnit = useWeatherStore((s) => s.setUnit);

  const handleToggle = () => {
    setUnit(unit === "F" ? "C" : "F");
  };

  return (
    <div className="flex items-center gap-2 place-self-center mt-12">
      <span
        className={unit === "F" ? "font-bold text-purple-900" : "text-gray-500"}
      >
        °F
      </span>
      <button
        aria-label="Toggle temperature unit"
        onClick={handleToggle}
        className="relative w-12 h-6 bg-gray-300 rounded-full flex items-center cursor-pointer transition-colors"
      >
        <span
          className={`absolute left-0 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
            unit === "C" ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>
      <span
        className={unit === "C" ? "font-bold text-purple-900" : "text-gray-500"}
      >
        °C
      </span>
    </div>
  );
};
