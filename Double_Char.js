/*
   Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

    Examples (Input -> Output):
    * "String"      -> "SSttrriinngg"
    * "Hello World" -> "HHeelllloo  WWoorrlldd"
    * "1234!_ "     -> "11223344!!__  "
*/

const result = a => [...a].map(s => `${s}${s}`).join("");

console.log(result("String"));
console.log(result("Hello World"));
console.log(result("1234!_ "));
