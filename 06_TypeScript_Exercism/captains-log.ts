export function randomShipRegistryNumber(): string {
  let rand = Math.floor(Math.random() * (9999 - 1000)) + 1000;
  return `NCC-${rand}`;
}


export function randomStardate(): number {
  return Math.floor(Math.random() * (42000 - 41000)) + 41000;
}


export function randomPlanetClass(): string {
  let arr = ['D', 'H', 'J', 'K', 'L', 'M', 'N', 'R', 'T', 'Y'];
  let ind = Math.floor(Math.random() * arr.length);
  return arr[ind];
}