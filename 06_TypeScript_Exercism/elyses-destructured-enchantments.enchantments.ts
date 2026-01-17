type Card = number;


export function getFirstCard(deck: Card[]): Card {
  let [num] = deck;
  return num;
}


export function getSecondCard(deck: Card[]): Card {
  let [num, num2] = deck;
  return num2;
}


export function swapTwoCards(deck: [Card, Card]): [Card, Card] {
  let [num, num2] = deck;
  return [num2, num];
}


export function shiftThreeCardsAround(deck: [Card, Card, Card]): [Card, Card, Card] {
  let [num, num2, num3] = deck;
  return [num2, num3, num];
}


export function pickNamedPile(piles: { chosen: Card[]; disregarded: Card[] }): Card[] {
  const { chosen } = piles;
  return chosen;
}


export function swapNamedPile(piles: { chosen: Card[]; disregarded: Card[] }): { chosen: Card[]; disregarded: Card[] } {
  const { chosen, disregarded } = piles;
  return { chosen: disregarded, disregarded: chosen };
}