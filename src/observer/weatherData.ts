import { Observer, Subject } from "./types";

export class WeatherData implements Subject {
  private observers: Observer[] = [];
  private temperature: number = 0;
  private humidity: number = 0;
  private pressure: number = 0;

  registerObserver(o: Observer) {
    this.observers.push(o);
  }

  notifyObservers() {
    this.observers.forEach((o) => {
      o.update(this.temperature, this.humidity, this.pressure);
    });
  }
  removeObserver(o: Observer) {
    const idx = this.observers.findIndex((item) => item === o);
    if (~idx) {
      this.observers = this.observers.splice(idx, 1);
    }
  }

  setMeasurements(temperature: number, humidity: number, pressure: number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.notifyObservers();
  }

  public measurementsChanged() {
    this.notifyObservers();
  }
}
