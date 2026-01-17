const PREPARATION_MINUTES_PER_LAYER = 2;
export const EXPECTED_MINUTES_IN_OVEN = 40;


export function remainingMinutesInOven(actualMinutesInOven: number): number {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}


export function preparationTimeInMinutes(numberOfLayers: number): number {
  return PREPARATION_MINUTES_PER_LAYER * numberOfLayers;
}


export function totalTimeInMinutes(numberOfLayers: number, actualMinutesInOven: number): number {
  return PREPARATION_MINUTES_PER_LAYER * numberOfLayers + actualMinutesInOven;
}