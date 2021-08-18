import { DisplayElement, Observer, Subject } from "./types";

export class CurrentConditionsDisplay implements Observer, DisplayElement {
  private temperature: number = 0;
  private humidity: number = 0;
  private weatherData: Subject;

  constructor(weatherData: Subject) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  display() {
    console.log(
      `Current Conditions: ${this.temperature} F degrees and ${this.humidity}% humidity`
    );
  }

  update(temp: number, humidity: number, pressure: number) {
    this.temperature = temp;
    this.humidity = humidity;
    this.display();
  }
}

export class ForecastDisplay implements Observer, DisplayElement {
  private lastPressure: number = 0;
  private currentPressure: number = 0;
  private weatherData: Subject;

  constructor(weatherData: Subject) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  display() {
    console.log("Forecast: ");
    if (this.currentPressure > this.lastPressure) {
      console.log("Improving weather on the way!");
    } else if (this.currentPressure == this.lastPressure) {
      console.log("More of the same");
    } else if (this.currentPressure < this.lastPressure) {
      console.log("Watch out for cooler, rainy weather");
    }
  }

  update(temp: number, humidity: number, pressure: number) {
    this.lastPressure = this.currentPressure;
    this.currentPressure = pressure;
    this.display();
  }
}

export class StatisticsDisplay implements Observer, DisplayElement {
  private maxTemp: number = 0;
  private minTemp: number = 200;
  private tempSum: number = 0;
  private numReadings: number = 0;
  private weatherData: Subject;

  constructor(weatherData: Subject) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  display() {
    console.log(
      `Avg/Max/Min temperature = ${this.tempSum / this.numReadings} / ${
        this.maxTemp
      } / ${this.minTemp}`
    );
  }

  update(temp: number, humidity: number, pressure: number) {
    this.tempSum += temp;
    this.numReadings++;

    if (temp > this.maxTemp) {
      this.maxTemp = temp;
    } else if (temp < this.minTemp) {
      this.minTemp = temp;
    }

    this.display();
  }
}
