/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(timer) {
  if(timer===0)  return 'Lasagna is done.'
  if(timer>0)  return 'Not done, please wait.'
  if(isNaN(timer))  return 'You forgot to set the timer.'
}

export function preparationTime(layers, avgTime=2) {
  return layers.length * avgTime;
}

export function quantities(layers) {
  let countOfNoodles = 0, countOfSauce = 0;
  for(let i=0; i<layers.length; i++){
    if(layers[i] === 'noodles')  countOfNoodles++;
    if(layers[i] === 'sauce')  countOfSauce++;
  }
  return {
    'noodles': countOfNoodles*50,
    'sauce': countOfSauce*0.2,
  }
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length-1]);
  console.log(myList);
}

export function scaleRecipe(recipe, portion) {
  console.log(recipe, portion);
  let obj = {};
  let conversionFactor = portion / 2;
 for(let i in recipe){
   obj[i] = recipe[i]*conversionFactor;
 }
  return obj;
}