/*
   Simple, remove the spaces from the string, then return the resultant string.
*/

const result = a => [...a].filter(t => t !== " ").join("");

console.log(result("Simple, remove the spaces from the string, then return the resultant string."));