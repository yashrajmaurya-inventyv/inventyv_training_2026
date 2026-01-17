export function twoSum(array1: number[], array2: number[]): number {
  let num1 = array1.join('');
  let num2 = array2.join('');
  return Number(num1) + Number(num2);
}


export function luckyNumber(value: number): boolean {
  let str = value.toString();
  console.log(str);
  let i = 0, j = str.length - 1;
  while (i <= j) {
    if (str[i] === str[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
}


export function errorMessage(input: string | null | undefined): string {
  console.log(input);
  if (input === "" || !input) return 'Required field';
  if (isNaN(Number(input)) || Number(input) <= 0) return 'Must be a number besides 0';
  if (Number(input) > 0) return '';
  return '';
}