# Accurate Weather App

A simple, slightly responsive React + Vite weather app that allows users to:

- Search by U.S. ZIP code
- View current weather (temperature and condition)
- See a 5-day forecast
- Toggle between Fahrenheit and Celsius

---

## How to run

1. Clone the repository:

```bash
git clone https://github.com/thegirlyoucallryan/accurateweather.git
cd accurateweather
```

2. npm install

3. add .env with free key from https://www.weatherapi.com/  
   Prefix with -- VITE_WEATHERAPI_KEY

4. npm run dev

## My Notes.

- I used Vite, tailwindCSS and React Query (axios) for some basic error handling and loading states.
- Though I had originally checked what the api returned and found some images they were not very clear looking onscreen so I mapped them to hopefully matching Icons.
- Please note the design is like a 3 x 3 box on my screen. hard for me to see so I got as close as I could.
- I also mapped the region to the state abbreviation. I noticed in Design it was abbreviated.
- on the first call to the api it gives both Farenheit and Celcius, I chose to store them both to make for quick conversion on the client side and not make more calls.
- I used a quick zustand store for this. Also could have been in redux, its just less boilerplate code for this simple task.
- Query is stored under hooks. I'd probably differentiate queries from hooks in the file structure so its clear.
- Also probably would have made a card component for the 5 day forcast map but I am running out of time.
- I set the query enabled key to false to connect the search button and make for less network calls.
