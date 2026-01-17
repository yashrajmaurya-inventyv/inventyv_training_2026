export function needsLicense(kind: string): boolean {
  if (kind === 'car' || kind === 'truck') return true;
  return false;
}


export function chooseVehicle(option1: string, option2: string): string {
  if (option1 <= option2) {
    return option1 + " is clearly the better choice.";
  } else {
    return option2 + " is clearly the better choice.";
  }
}


export function calculateResellPrice(originalPrice: number, age: number): number {
  if (age < 3) {
    return originalPrice * 0.8;
  } else if (age > 10) {
    return originalPrice * 0.5;
  } else {
    return originalPrice * 0.7;
  }
}