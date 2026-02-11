import React from "react"
import { useWeatherStore } from "../store"
import { stateAbbreviations } from "../utils/StateAbbreviations"
import { iconMap } from "../utils/WeatherIconMap"
import { useWeatherQuery } from "../hooks/useWeather"

export const InformationPanel: React.FC = () => {
    const zip = useWeatherStore((s) => s.zip)
    const unit = useWeatherStore((s) => s.unit)

    const { data, isLoading, error } = useWeatherQuery(zip)

    if (isLoading) return (
        <div className="flex flex-col items-center gap-6 mt-10">
            <div className="h-16 w-16 border-4 border-purple-200 border-t-purple-800 rounded-full animate-spin" />
            <div className="text-purple-800 text-xl font-semibold">Fetching weather...</div>
        </div>
    )

    if (error) return (
        <div className="text-red-500 text-lg text-center mt-10">
            Failed to fetch weather. Please try again.
        </div>
    )

    if (!data || data.forecast.length === 0) return (
        <div className="text-center mt-10">
            <div className="text-purple-800 text-5xl">Very Accurate Weather App</div>
            <p className="mt-8 text-xl text-gray-500">
                Search above by zip code. Feel free to change your unit preferences below.
            </p>
        </div>
    )

    const { current, forecast, location } = data

    return (
        <div className="bg-white rounded-xl p-4 w-full h-full flex flex-col justify-center place-self-center mt-5">
            {location && (
                <div className="uppercase font-bold sm:text-sm md:text-base">
                    {location.city}, {stateAbbreviations[location.region] || location.region}
                </div>
            )}

            {current && (
                <div className="w-full flex justify-between items-center mt-4">
                    <div className="flex items-center gap-4">
                        <div className="text-xl flex flex-row">
                            <div className="font-bold lg:text-8xl md:text-7xl sm:text-5xl text-purple-900">
                                {unit === 'F' ? current.tempF : current.tempC}°
                            </div>
                            <div className="text-purple-900 lg:text-5xl sm:text-2xl font-bold mt-2">{unit}</div>
                        </div>
                    </div>
                    {current.icon && React.createElement(iconMap[current.icon] || iconMap[1000], { className: "w-40 h-40 text-purple-900" })}
                </div>
            )}

            <div className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-6">
                {forecast.map((f) => (
                    <div key={f.date} className="bg-gray-100 rounded p-2 flex flex-col items-center">
                        {f.icon && React.createElement(iconMap[f.icon] || iconMap[1000], { className: "w-18 h-18 text-purple-900" })}
                        <div className="lg:text-3xl md:text-2xl sm:text-xl font-bold mt-1 flex flex-row items-center">
                            {unit === 'F' ? f.maxTempF : f.maxTempC}° <p className="text-xs ml-1">{unit}</p>
                        </div>
                        <div className="font-semibold text-gray-500 uppercase">{f.label}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
