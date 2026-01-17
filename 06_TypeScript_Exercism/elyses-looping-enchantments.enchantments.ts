export function cardTypeCheck(stack: number[], card: number): number {
  let count = 0;
  stack.forEach(cardCount);
  function cardCount(item: number) {
    if (item === card) count++;
  }
  return count;
}


export function determineOddEvenCards(stack: number[], type: boolean): number {
  let count = 0;
  for (let i of stack) {
    if (i % 2 === 0) {
      count++;
    }
  }
  if (type) return count;
  return stack.length - count;
}