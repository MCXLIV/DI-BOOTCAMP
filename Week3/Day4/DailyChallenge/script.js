//Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.
//For example, “The movie is not that bad, I like it”.
const sentence = (`Game of Thrones is a good series, but it should not have ended the way it did. The last episode was bad.`);
//Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring “not” (from the sentence variable).
const wordNot = sentence.search('good');
//Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring “bad” (from the sentence variable).
const wordBad = sentence.search('bad');
console.log(wordNot);
console.log(wordBad);
//If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.  
if(wordNot < wordBad){
    const sentence2 = sentence.slice (0, 18,)
    const sentence3 = sentence.slice(20, 25);
    console.log(`${sentence2}${sentence3}`);
} else {
    console.log (sentence);
}
