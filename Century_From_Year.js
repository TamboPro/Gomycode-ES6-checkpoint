/*
  Introduction
    The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

    Task
    Given a year, return the century it is in.

    Examples
    1705 --> 18
    1900 --> 19
    1601 --> 17
    2000 --> 20
*/

 const result = a =>  a % 100 === 0 ? a / 100 : parseInt(a / 100) + 1;
    

console.log(result(55));
console.log(result(1705));
console.log(result(1900));
console.log(result(1601));
console.log(result(2000));