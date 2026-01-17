export function getItem(cards: number[], position: number): number {
  return cards[position];
}


export function setItem(cards: number[], position: number, replacementCard: number): number[] {
   cards[position] = replacementCard;
  return cards;
}


export function insertItemAtTop(cards: number[], newCard: number): number[] {
   cards[cards.length] = newCard;
  return cards;
}


export function removeItem(cards: number[], position: number): number[] {
   cards.splice(position,1);
  return cards;
}


export function removeItemFromTop(cards: number[]): number[] {
  cards.pop();
  return cards;
}


export function insertItemAtBottom(cards: number[], newCard: number): number[] {
   cards.unshift(newCard);
  return cards;
}


export function removeItemAtBottom(cards: number[]): number[] {
   cards.shift();
  return cards;
}


export function checkSizeOfStack(cards: number[], stackSize: number): boolean {
  return cards.length === stackSize;
}