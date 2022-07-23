/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

const result = (a) => {
    const words = a.split(" ");
    console.log(words);
    return words.sort((a, b) => (a.length > b.length) ? 1 : (a.length < b.length) ? -1 : 0).slice(0, 1).join();
}

console.log(result("String will never be empty and you do not need to account for different data types."));