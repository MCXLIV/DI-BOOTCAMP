
// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.

const answer = prompt("Enter several words separated by commas");

const words = answer.split(",");


const lengthOfLongestWord = getLengthOfLongestWord();

displayRows()

function displayRows(){
    const delimiterRow = createDelimiterRow();
    console.log(delimiterRow);
    for(const word of words){
        displayWord(word);
    }
    console.log(delimiterRow);
}

function displayWord(word){
    const numberOfSpaceToAdd = lengthOfLongestWord - word.length + 1;
    const emptySpaces = " " .repeat(numberOfSpaceToAdd);
    console.log("* " + word + emptySpaces + "*" );
}



function getLengthOfLongestWord(){
  let lengthOfLongestWord = 0;
  for(const word of words){
    const wordLength = word.length;
    if (wordLength > lengthOfLongestWord){
        lengthOfLongestWord = wordLength;
    }
  }       
    return lengthOfLongestWord; 
}
function createDelimiterRow(){
    const NUMBER_OF_STARS_ON_SIDE = 4
    const numberStarsOnFirstRow  = lengthOfLongestWord + 
    NUMBER_OF_STARS_ON_SIDE;

    let row = "";
    for(let i = 0; i < numberStarsOnFirstRow; i++){
        row = row + "*";
    }
    return "*" .repeat(numberStarsOnFirstRow);
}
    