export function seeingDouble(deck: number[]): number[] {
  return deck.map((item) => item * 2);
}


export function threeOfEachThree(deck: number[]): number[] {
  return deck.reduce((acc: number[], card: number) => {
    if (card === 3) {
      acc.push(3, 3, 3);
    } else {
      acc.push(card);
    }
    return acc;
  }, []);
}


export function middleTwo(deck: number[]): number[] {
  return deck.slice(4, 6);
}



export function sandwichTrick(deck: number[]): number[] {
  let first = deck.shift(), last = deck.pop();
  let midInd = deck.length / 2;
  deck.splice(midInd, 0, last as number, first as number);
  return deck;
}


export function twoIsSpecial(deck: number[]): number[] {
  return deck.filter((i) => i === 2);
}


export function perfectlyOrdered(deck: number[]): number[] {
  return deck.sort((a, b) => a - b);
}


export function reorder(deck: number[]): number[] {
  return deck.reverse();
}