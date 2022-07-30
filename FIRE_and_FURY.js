/*
   The President's phone is broken
        He is not very happy.

        The only letters still working are uppercase E, F, I, R, U, Y.

        An angry tweet is sent to the department responsible for presidential phone maintenance.

        Kata Task
        Decipher the tweet by looking for words with known meanings.

        FIRE = "You are fired!"
        FURY = "I am furious."
        If no known words are found, or unexpected letters are encountered, then it must be a "Fake tweet."

        Notes
        The tweet reads left-to-right.
        Any letters not spelling words FIRE or FURY are just ignored
        If multiple of the same words are found in a row then plural rules apply -
        FIRE x 1 = "You are fired!"
        FIRE x 2 = "You and you are fired!"
        FIRE x 3 = "You and you and you are fired!"
        etc...
        FURY x 1 = "I am furious."
        FURY x 2 = "I am really furious."
        FURY x 3 = "I am really really furious."
        etc...
        Examples
        ex1. FURYYYFIREYYFIRE = "I am furious. You and you are fired!"
        ex2. FIREYYFURYYFURYYFURRYFIRE = "You are fired! I am really furious. You are fired!"
        ex3. FYRYFIRUFIRUFURE = "Fake tweet."

*/

const fireAndFury = (a) => {

     var keyWordsFIRE = (a.match(/FIRE/g) || []).length;
     var keyWordsFURY = (a.match(/FURY/g) || []).length;

     var repeatTextFIRE = "and you";
     var repeatTextFURY = "really";

     var text1 = "You are fired!";
     var text2 = "I am furious.";

     let tweetFINAL = "";
     
     let textFIRE = [];
     let textFURY = "";
     
       if(['E', 'F', 'I', 'R', 'U', 'Y'].includes([...a])){
          console.log("true");
       }
       else
          console.log("false");
     
            

}


fireAndFury("YYFIREYYFIREYYFIRE");






























/*
function fireAndFury(tweet) {
    // Your code here

    // allowed letters
    var correct = "FIREUY";

    // if input tweet contains letters outside of what are correct letters, return fake tweet
    var tweetLetters = tweet.split("");

      for(const element of tweetLetters)
        if (element !== correct) {
            return "Fake tweet.";
        }
    

    // final string - use SB for efficiency (multiple appends)
    var finalTweet = new StringBuilder();

    // to remember last word matched (for back to back comparisons)
    var lastMatch = "";

    // meanings
    var fireTweet = new StringBuilder("You are fired!");
    var furyTweet = new StringBuilder("I am furious.");

    // to keep track of current index in string
    var currentStringIndex = 0;

    // loop until there are 4 letters left to extract in string
    while (currentStringIndex <= tweet.length() - 4) {
        // starting at current index in string, find the next occurrence of "F"
        let currentPos = tweet.indexOf("F", currentStringIndex);
        
        // if "F" is not found, increment current string index by 1
        if (currentPos == -1) {
            ++currentStringIndex;
        } 
        
        else {
            // if F is found - extract the next 3 letters and compare if the word is FURY or FIRE
            var extracted = tweet.substring(currentPos, currentPos + 4);
            
            if (extracted === "FIRE") {
                // increment by currentPos and 3 
                currentStringIndex = (currentPos + 3);
                
                if (lastMatch !== "FIRE") {
                    
                    // if last match was also FIRE, need to replace "YOU ARE FIRED"
                    // with "YOU AND YOU ARE FIRED - find index of "YOU" from the last
                    // so as to not replace first or earlier occurrences of "YOU ARE FIRED"
                    var youPos = finalTweet.lastIndexOf("You");
                    var toAppend = " and you";
                    // insert " and you" from the found pos + 2 chars
                    finalTweet.insert(youPos + 3, toAppend.toCharArray());
                } else {
                    // if last match was not FIRE, just append with a space
                    finalTweet.append(fireTweet).append(" ");
                }
                // set last match to FIRE
                lastMatch = "FIRE";
            } else if (extracted.equals("FURY")) {
                // same logic as FIRE
                currentStringIndex = (currentPos + 3);
                if (lastMatch.equals("FURY")) {
                    var amPos = finalTweet.lastIndexOf("am");
                    var toAppend = " really";
                    finalTweet.insert(amPos + 2, toAppend.toCharArray());
                } else {
                    finalTweet.append(furyTweet).append(" ");
                }
                lastMatch = "FURY";
            } else {
                currentStringIndex += 3;
            }
        }
    }
    if (finalTweet.length() > 0) {
        // remove trailing whitespace from returned string
        return finalTweet.toString().trim();
    }
    return "Fake tweet.";
}

// Initializes a new instance of the StringBuilder class
// and appends the given value if supplied
function StringBuilder(value)
{
    this.strings = new Array("");
    this.append(value);
}

// Appends the given value to the end of this instance.
StringBuilder.prototype.append = function (value)
{
    if (value)
    {
        this.strings.push(value);
    }
}

StringBuilder.prototype.insert = function (position, value)
{
    if (position)
    {
        this.strings.splice(position, 0, value);
    }
}


// Clears the string buffer
StringBuilder.prototype.clear = function ()
{
    this.strings.length = 1;
}

// Converts this instance to a String.
StringBuilder.prototype.toString = function ()
{
    return this.strings.join("");
}

fireAndFury({"AAFIREBBFURYCC", "FIRE",  "FURY"});
*/