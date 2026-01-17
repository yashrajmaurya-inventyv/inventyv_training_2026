export function dayRate(ratePerHour: number): number {
  return 8 * ratePerHour;
}


export function daysInBudget(budget: number, ratePerHour: number): number {
  return Math.floor(budget / (ratePerHour * 8));
}


export function priceWithMonthlyDiscount(ratePerHour: number, numDays: number, discount: number): number {
  let dailyRate = ratePerHour * 8;
  let fullMonth = Math.floor(numDays / 22);
  let remDays = Math.floor(numDays % 22);
  let monthyCost = dailyRate * 22;
  let disCost = monthyCost * (1 - discount);
  let totalForMonth = disCost * fullMonth;
  let totalForRemDays = remDays * dailyRate;
  console.log(dailyRate, fullMonth, remDays, monthyCost, disCost, totalForMonth, totalForRemDays);
  return Math.ceil(totalForMonth + totalForRemDays);
}