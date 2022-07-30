/*
    Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

    Your task is to write a function maskify, which changes all but the last four characters into '#'.

    Examples
    "4556364607935616" --> "############5616"
        "64607935616" -->      "#######5616"
                "1" -->                "1"
                    "" -->                 ""

    // "What was the name of your first pet?"

    "Skippy" --> "##ippy"

    "Nananananananananananananananana Batman!"
    -->
    "####################################man!"
*/

const result = (a) => {
    let text = [...a];
   if(a.length > 1){
        for(let i = 0; i < a.length - 4; i++)
         text[i] = "#";
     return text.join("");
   }
  
     return text.join("");
}


console.log(result("4556364607935616"));
console.log(result("64607935616"));
console.log(result("1"));
console.log(result(""));
console.log(result("Skippy"));
console.log(result("Nananananananananananananananana Batman!"));