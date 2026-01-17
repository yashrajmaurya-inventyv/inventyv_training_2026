//


export function totalBirdCount(birdsPerDay: number[]): number {
  let sum = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    sum += birdsPerDay[i];
  }
  return sum;
}


export function birdsInWeek(birdsPerDay: number[], week: number): number {
  let sum = 0;
  let start = (week - 1) * 7;
  for (let i = start; i < start + 7; i++) {
    sum += birdsPerDay[i];
  }
  return sum;
}


export function fixBirdCountLog(birdsPerDay: number[]): number[] {
  for (let i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i] += 1;
  }
  return birdsPerDay;
}