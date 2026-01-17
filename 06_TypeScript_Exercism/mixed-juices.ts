export function timeToMixJuice(name: string): number {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5;
    case 'Energizer':
      return 1.5;
    case 'Green Garden':
      return 1.5;
    case 'Tropical Island':
      return 3;
    case 'All or Nothing':
      return 5;
    default:
      return 2.5;
  }
}


export function limesToCut(wedgesNeeded: number, limes: string[]): number {
  if (wedgesNeeded === 0) return 0;
  let countOfWedges = 0;
  for (let i = 0; i < limes.length; i++) {
    switch (limes[i]) {
      case 'small':
        countOfWedges += 6;
        break;
      case 'medium':
        countOfWedges += 8;
        break;
      case 'large':
        countOfWedges += 10;
        break;
    }
    if (countOfWedges >= wedgesNeeded) {
      return i + 1;
    }
  }
  return limes.length;
}


export function remainingOrders(timeLeft: number, orders: string[]): string[] {
  for (let i = 0; i < orders.length; i++) {
    console.log(orders[i]);
    let timeToMix = timeToMixJuice(orders[i]);
    if (timeLeft > 0) {
      orders.splice(i, 1);
      i -= 1;
    }
    timeLeft -= timeToMix;
    if (timeLeft <= 0) {
      break;
    }
  }
  return orders;
}