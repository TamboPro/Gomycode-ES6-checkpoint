/*
    Your task is to create a function that does four basic mathematical operations.

    The function should take three arguments - operation(string/char), value1(number), value2(number).
    The function should return result of numbers after applying the chosen operation.

    Examples(Operator, value1, value2) --> output
    ('+', 4, 7) --> 11
    ('-', 15, 18) --> -3
    ('*', 5, 5) --> 25
    ('/', 49, 7) --> 7
*/

const result = (a, b, c) => {

    switch(a){
        case "+" : return b+c; break;
        case "-" : return b-c; break;
        case "*" : return b*c; break;
        case "/" : return b/c; break;
        default  : break;
    }
}

function basicOp(o, a, b) {
    return eval(a+o+b);
}

    console.log(basicOp('+', 4, 7));
    console.log(basicOp('-', 15, 18));
    console.log(basicOp('*', 5, 5));
    console.log(basicOp('/', 49, 7));

/*
    console.log(result('+', 4, 7));
    console.log(result('-', 15, 18));
    console.log(result('*', 5, 5));
    console.log(result('/', 49, 7));
*/