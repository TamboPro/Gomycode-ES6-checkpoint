/*
  Description:

        We want to generate a function that computes the series starting from 0 and ending until the given number.

        Example:
        Input:

        > 6
        Output:

        0+1+2+3+4+5+6 = 21

        Input:

        > -15
        Output:

        -15<0

        Input:

        > 0
        Output:

        0=0
*/

const result = count => { 

    var acc = [];

    for(let i = 0; i <= count; i++){
          acc.push(i);
    }
    
    return (count < 0) ? `${count}<0` : (count === 0) ? "0=0" : acc.join("+") + ` = ${acc.reduce((previousValue, currentValue) => previousValue + currentValue, 0).toString()}`;
}

console.log(result(6));
console.log(result(-15));
console.log(result(0));
