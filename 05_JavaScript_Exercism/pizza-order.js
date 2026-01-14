/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...options) {
   const PRICES = {
    'Margherita': 7,
    'Caprese': 9,
    'Formaggio': 10,
    'ExtraSauce': 1,
    'ExtraToppings': 2
  };

  // Base Case: If there are no options left, just return the price of the pizza/topping
  if (options.length === 0) {
    return PRICES[pizza] || 0;
  }

  // Recursive Step:
  // Calculate price of the current item (pizza or first option) 
  // and add the result of the function called with the remaining options.
  const [firstOption, ...remainingOptions] = options;
  
  return PRICES[pizza] + pizzaPrice(firstOption, ...remainingOptions);
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let totalOrderPrice = 0;

  for (const order of pizzaOrders) {
    // We pass the pizza name and spread the extras array into pizzaPrice
    totalOrderPrice += pizzaPrice(order.pizza, ...order.extras);
  }

  return totalOrderPrice;
}
