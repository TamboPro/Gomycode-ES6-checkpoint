/*
    Trolls are attacking your comment section!

    A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

    Your task is to write a function that takes a string and return a new string with all vowels removed.

    For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

    Note: for this kata y isn't considered a vowel.
*/


const result = (a) => {

    let text = [...a];
        text = text.filter(t => t !== 'a' && t !== 'e' && t !== 'i' && t !== 'o' && t !== 'u' && t !== 'y' && t !== 'O');    
    return text.join("");
}

console.log(result("This website is for losers LOL!"));