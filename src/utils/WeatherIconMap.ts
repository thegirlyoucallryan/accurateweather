import {
  WiDaySunny,
  WiSnow,
  WiDayCloudy,
  WiCloud,
  WiCloudy,
  WiFog,
  WiDayRain,
  WiSleet,
  WiDaySnow,
  WiDayShowers,
  WiDayThunderstorm,
  WiDaySprinkle,
  WiDayStormShowers,
} from "react-icons/wi";

export const iconMap: Record<number, React.ElementType> = {
  1000: WiDaySunny, // Clear
  1003: WiDayCloudy, // Partly cloudy
  1006: WiCloud, // Cloudy
  1009: WiCloudy, // Overcast
  1030: WiFog, // Mist
  1063: WiDayShowers, // Patchy rain possible
  1066: WiDaySnow, // Patchy snow possible
  1069: WiSleet, // Patchy sleet possible
  1072: WiDaySprinkle, // Patchy freezing drizzle possible
  1087: WiDayThunderstorm, // Thundery outbreaks possible
  1114: WiSnow, // Blowing snow
  1117: WiSnow, // Blizzard
  1135: WiFog, // Fog
  1147: WiFog, // Freezing fog
  1150: WiDaySprinkle, // Patchy light drizzle
  1153: WiDaySprinkle, // Light drizzle
  1168: WiSleet, // Freezing drizzle
  1171: WiSleet, // Heavy freezing drizzle
  1180: WiDayShowers, // Patchy light rain
  1183: WiDayShowers, // Light rain
  1186: WiDayRain, // Moderate rain at times
  1189: WiDayRain, // Moderate rain
  1192: WiDayRain, // Heavy rain at times
  1195: WiDayRain, // Heavy rain
  1198: WiSleet, // Light freezing rain
  1201: WiSleet, // Moderate or heavy freezing rain
  1204: WiSleet, // Light sleet
  1207: WiSleet, // Moderate or heavy sleet
  1210: WiDaySnow, // Patchy light snow
  1213: WiDaySnow, // Light snow
  1216: WiDaySnow, // Patchy moderate snow
  1219: WiDaySnow, // Moderate snow
  1222: WiDaySnow, // Patchy heavy snow
  1225: WiDaySnow, // Heavy snow
  1237: WiSleet, // Ice pellets
  1240: WiDayShowers, // Light rain shower
  1243: WiDayRain, // Moderate or heavy rain shower
  1246: WiDayRain, // Torrential rain shower
  1249: WiSleet, // Light sleet showers
  1252: WiSleet, // Moderate or heavy sleet showers
  1255: WiDaySnow, // Light snow showers
  1258: WiDaySnow, // Moderate or heavy snow showers
  1261: WiSleet, // Light showers of ice pellets
  1264: WiSleet, // Moderate or heavy showers of ice pellets
  1273: WiDayStormShowers, // Patchy light rain with thunder
  1276: WiDayThunderstorm, // Moderate or heavy rain with thunder
  1279: WiDayThunderstorm, // Patchy light snow with thunder
  1282: WiDayThunderstorm, // Moderate or heavy snow with thunder
};
