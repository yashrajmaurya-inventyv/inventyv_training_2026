type Pizza = string;
type Extra = string;
interface PizzaOrder { pizza: Pizza; extras: Extra[] }


export function pizzaPrice(pizza: Pizza | Extra, ...options: Extra[]): number {
  const PRICES: Record<string, number> = {
    'Margherita': 7,
    'Caprese': 9,
    'Formaggio': 10,
    'ExtraSauce': 1,
    'ExtraToppings': 2
  };
  if (options.length === 0) {
    return PRICES[pizza as string] || 0;
  }
  const [firstOption, ...remainingOptions] = options;

  return PRICES[pizza as string] + pizzaPrice(firstOption, ...remainingOptions);
}


export function orderPrice(pizzaOrders: PizzaOrder[]): number {
  let totalOrderPrice = 0;

  for (const order of pizzaOrders) {
    totalOrderPrice += pizzaPrice(order.pizza, ...order.extras);
  }

  return totalOrderPrice;
}