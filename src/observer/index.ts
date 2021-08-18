import {
  CurrentConditionsDisplay,
  ForecastDisplay,
  StatisticsDisplay,
} from "./display";
import { WeatherData } from "./weatherData";

const weatherData = new WeatherData(),
  currentDisplay = new CurrentConditionsDisplay(weatherData),
  forecastDisplay = new ForecastDisplay(weatherData),
  statisticsDisplay = new StatisticsDisplay(weatherData);

weatherData.setMeasurements(80, 65, 30.4);
weatherData.setMeasurements(82, 70, 29.2);
weatherData.setMeasurements(78, 90, 29.2);
