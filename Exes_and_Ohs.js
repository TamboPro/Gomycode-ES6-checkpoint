/*
  Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

    Examples input/output:

    XO("ooxx") => true
    XO("xooxx") => false
    XO("ooxXm") => true
    XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
    XO("zzoo") => false
*/


const XO = (a) => { 
       let sum = 0;
       for(let i = 0; i < a.length; i++){
           if(a[i] == 'o' || a[i] == 'O' ){
              sum += 1;
           }else if(a[i] === 'x' || a[i] === 'X' ){
              sum -= 1;
           }
        }        
        return (sum === 0) ? true : false;
    }


console.log(XO("ooxx"));
console.log(XO("xooxx"));
console.log(XO("ooxXm"));
console.log(XO("zpzpzpp"));
console.log(XO("zzoo"));
