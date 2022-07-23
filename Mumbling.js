const accum = (a) => {
    let i = 0;
    let array = [...a];
    let text = "";
    array.forEach(a => {
        i++;
        for(let k = 0; k < i; k++){
            text += (k == 0) ? a.toUpperCase() : a;              
        }
        if(i != array.length)
           text += "-"
    });
    console.log(text);
}

accum("abcd");
accum("RqaEzty");
accum("cwAt");