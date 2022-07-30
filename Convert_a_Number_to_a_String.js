/*
    We need a function that can transform a number (integer) into a string.

    What ways of achieving this do you know?

    Examples (input --> output):
    123  --> "123"
    999  --> "999"
    -100 --> "-100"
*/

const result = a => a.toString();

console.log(result(123));
console.log(result(999));
console.log(result(-100));