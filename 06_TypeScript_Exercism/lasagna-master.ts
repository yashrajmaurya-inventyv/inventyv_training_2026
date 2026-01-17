export function cookingStatus(timer: number): string | undefined {
  if (timer === 0) return 'Lasagna is done.';
  if (timer > 0) return 'Not done, please wait.';
  if (isNaN(timer)) return 'You forgot to set the timer.';
}

export function preparationTime(layers: string[], avgTime = 2): number {
  return layers.length * avgTime;
}

export function quantities(layers: string[]): { noodles: number; sauce: number } {
  let countOfNoodles = 0, countOfSauce = 0;
  for (let i = 0; i < layers.length; i++) {
    if (layers[i] === 'noodles') countOfNoodles++;
    if (layers[i] === 'sauce') countOfSauce++;
  }
  return {
    noodles: countOfNoodles * 50,
    sauce: countOfSauce * 0.2,
  };
}

export function addSecretIngredient(friendsList: string[], myList: string[]): void {
  myList.push(friendsList[friendsList.length - 1]);
  console.log(myList);
}

export function scaleRecipe(recipe: Record<string, number>, portion: number): Record<string, number> {
  console.log(recipe, portion);
  let obj: Record<string, number> = {};
  let conversionFactor = portion / 2;
  for (let i in recipe) {
    obj[i] = recipe[i] * conversionFactor;
  }
  return obj;
}