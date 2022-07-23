/*
    You get an array of numbers, return the sum of all of the positives ones.

    Example [1,-4,7,12] => 1 + 7 + 12 = 20

    Note: if there is nothing to sum, the sum is default to 0.
*/

const initialValue = 0;
const result = (a) => {
   const array = a.filter(value => value > 0);
   //console.log(array);
   return array.reduce((previousValue, currentValue) =>  previousValue + currentValue, initialValue);
}

console.log(result([1,-4, 7,12]));