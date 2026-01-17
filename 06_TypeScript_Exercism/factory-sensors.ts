export class ArgumentError extends Error {
  constructor() {
    super('The null value appeared.');
    this.name = 'ArgumentError';
  }
}

export class OverheatingError extends Error {
  temperature: number;
  constructor(temperature: number) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
    this.name = 'OverheatingError';
  }
}


export function checkHumidityLevel(humidityPercentage: number): void {
  if (humidityPercentage > 70) {
    throw new OverheatingError(humidityPercentage);
  }
}


export function reportOverheating(temperature: number | null): void {
  if (temperature === null) throw new ArgumentError();
  if (temperature > 500) throw new OverheatingError(temperature);
}


export function monitorTheMachine(actions: {
  check: () => void;
  alertDeadSensor: () => void;
  alertOverheating: () => void;
  shutdown: () => void;
}): void {
  try {
    actions.check();
  } catch (error: any) {
    if (error instanceof ArgumentError) {
      actions.alertDeadSensor();
    } else if (error instanceof OverheatingError) {
      if (error.temperature > 600) {
        actions.shutdown();
      } else {
        actions.alertOverheating();
      }
    } else {
      throw error;
    }
  }
}