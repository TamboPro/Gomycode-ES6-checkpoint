/*
  Task:
    Your task is to write a function which returns the sum of following series upto nth term(parameter).

    Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
    Rules:
    You need to round the answer to 2 decimal places and return it as String.

    If the given value is 0 then it should return 0.00

    You will only be given Natural Numbers as arguments.

    Examples:(Input --> Output)
    1 --> 1 --> "1.00"
    2 --> 1 + 1/4 --> "1.25"
    5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
*/

const result = a => {
    var array = [1.00];
    var acc = 3;
    if(a === 0)
       return "0.00";
    else {
        for(let i = 1; i < a; i++)
        {   
            let val = 1 / (i + acc);
            array.push(val);
            acc = acc + 2;      
        }
        return array.reduce((previousValue, currentValue) => previousValue + currentValue, 0).toPrecision(3);
    }
}

console.log(result(0));
console.log(result(1));
console.log(result(2));
console.log(result(3));
console.log(result(4));
console.log(result(5));
console.log(result(6));
console.log(result(7));
console.log(result(8));
console.log(result(9));
console.log(result(10));
console.log(result(11));
console.log(result(12));
console.log(result(13));
console.log(result(14));
console.log(result(15));
console.log(result(16));
console.log(result(17));
console.log(result(18));
console.log(result(19));
console.log(result(20));
console.log(result(21));
console.log(result(22));
console.log(result(23));
console.log(result(24));
console.log(result(25));
