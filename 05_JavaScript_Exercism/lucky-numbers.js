// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let num1 = array1.join('');
  let num2 = array2.join('');
  return Number(num1)+Number(num2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let str = value.toString();
  console.log(str);
  let i=0,j=str.length-1;
  while(i<=j){
    if(str[i] === str[j]){
      i++;
      j--;
    }else{
    return false;}
  }
  return true;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  console.log(input);
  if(input === "" || !input)  return 'Required field';
  if(isNaN(Number(input)) || Number(input)<=0)  return 'Must be a number besides 0';
  if(Number(input)>0)  return '';
}
