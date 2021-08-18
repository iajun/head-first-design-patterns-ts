export interface Observer {
  update: (temp: number, humidity: number, pressure: number) => void;
}

export interface Subject {
  registerObserver: (o: Observer) => void;
  notifyObservers: () => void;
  removeObserver: (o: Observer) => void;
}

export interface DisplayElement {
  display: () => void;
}
