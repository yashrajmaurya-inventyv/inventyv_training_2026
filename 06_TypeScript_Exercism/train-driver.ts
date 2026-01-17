export function getListOfWagons(...args: number[]): number[] {
  return args;
}


export function fixListOfWagons(ids: Iterable<number>): number[] {
  const [first, second, ...everything] = ids as unknown as number[];
  everything.push(first);
  everything.push(second);
  return everything;
}


export function correctListOfWagons(ids: Iterable<number>, missingWagons: Iterable<number>): number[] {
  const [first, ...remainingIds] = ids as unknown as number[];
  return [first, ...(missingWagons as unknown as number[]), ...remainingIds];
}


export function extendRouteInformation(information: Record<string, string>, additional: Record<string, string>): Record<string, string> {
  return { ...information, ...additional };
}


export function separateTimeOfArrival(information: Record<string, string>): [string, Record<string, string>] {
  const { timeOfArrival, ...info } = information;
  return [timeOfArrival as string, info as Record<string, string>];
}