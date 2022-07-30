/*
    It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/


const result = a => {
   let text = [...a];
   return text.length > 2 ? text.slice(1, text.length - 1).join("") : "";
}

console.log(result("straightforward"));