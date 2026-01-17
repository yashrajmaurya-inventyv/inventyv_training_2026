type GrocerQuery = { variety: string; quantity: number };
type FruitPickerSuccessCallback = () => void;
type FruitPickerErrorCallback = () => void;

function notify(opts: { message: string }): void {
}

function order(query: GrocerQuery, onSuccess: FruitPickerSuccessCallback, onError: FruitPickerErrorCallback): void {
}


export function onSuccess(): void {
  return notify({ message: 'SUCCESS' });
}


export function onError(): void {
  return notify({ message: 'ERROR' });
}


export function orderFromGrocer(query: GrocerQuery, onSuccessCallback: FruitPickerSuccessCallback, onErrorCallback: FruitPickerErrorCallback): void {
  return order(query, onSuccessCallback, onErrorCallback);
}


export function postOrder(variety: string, quantity: number): void {
  return order({ variety, quantity }, onSuccess, onError);
}