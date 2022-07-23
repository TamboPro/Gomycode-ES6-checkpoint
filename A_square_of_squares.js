/*
Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.
*/

const isSqrt = (n) => {
    if(n < 0)
       return false;
    else if(n == Math.sqrt(n)*Math.sqrt(n))
       return true;
    else
       return false; 
}

console.log(isSqrt(-1));
console.log(isSqrt(0));
console.log(isSqrt(3));
console.log(isSqrt(4));
console.log(isSqrt(25));
console.log(isSqrt(26));