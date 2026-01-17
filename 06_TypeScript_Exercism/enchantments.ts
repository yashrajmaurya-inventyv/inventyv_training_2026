export function getCardPosition(stack: number[], card: number): number {
  for (let i = 0; i < stack.length; i++) {
    if (stack[i] === card) {
      return i;
    }
  }
  return -1;
}


export function doesStackIncludeCard(stack: number[], card: number): boolean {
  return stack.includes(card);
}


export function isEachCardEven(stack: number[]): boolean {
  return stack.every((i) => i % 2 === 0);
}


export function doesStackIncludeOddCard(stack: number[]): boolean {
  return stack.some((i) => i % 2 !== 0);
}


export function getFirstOddCard(stack: number[]): number | undefined {
  return stack.find((i) => i % 2 !== 0);
}


export function getFirstEvenCardPosition(stack: number[]): number {
  return stack.findIndex((i) => i % 2 === 0);
}