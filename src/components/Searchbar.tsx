import React from "react"
import { BsSearch } from "react-icons/bs"
import { useWeatherStore } from "../store"
import { useWeatherQuery } from "../hooks/useWeather"

export function Searchbar() {
    const zip = useWeatherStore((s) => s.zip)
    const setZip = useWeatherStore((s) => s.setZip)

    const { refetch } = useWeatherQuery(zip) // use query hook just for refetch

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!zip) return
        refetch()      // trigger API call
    }

    return (
        <header className="w-full border-gray-200">
            <form
                role="search"
                aria-label="Search by zip code"
                className="mx-auto flex w-full items-center"
                onSubmit={handleSubmit}
            >
                <label htmlFor="zipcode" className="sr-only">Search by zip code</label>
                <div className="relative w-full">
                    <input
                        id="zipcode"
                        name="zipcode"
                        type="search"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        placeholder="Zip code"
                        aria-describedby="zipcode-hint"
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                        className="w-full rounded-full border border-gray-100 shadow-2xl bg-white px-4 py-2.5 text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-800 sm:text-lg"
                    />
                    <button
                        type="submit"
                        aria-label="Submit zip code search"
                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-white bg-purple-900 hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-purple-900"
                    >
                        <BsSearch className="h-4 w-4" aria-hidden="true" />
                    </button>
                </div>
                <span id="zipcode-hint" className="sr-only">
                    Enter a 5 digit United States zip code
                </span>
            </form>
        </header>
    )
}
