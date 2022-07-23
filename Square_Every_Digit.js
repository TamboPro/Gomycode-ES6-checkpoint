/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/

const result = (a) => {
    const array = [...a.toString()];
    const res = array.map(item => item*item);
    return res.join("");
}

console.log(result(9119));