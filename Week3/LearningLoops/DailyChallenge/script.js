//Write a JavaScript program that recreates the pattern below.
//Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
//Do this Daily Challenge by yourself, without looking at the answers on the internet.
for (let i = 0; i < 7; i++) {
    console.log(new Array(i + 1).join('*'));
}
const maxNumber = 7
for(let i =0; i< maxNumber; i++){
    const star = i +1   
    let rowOfStars = ''
    for(let s = 0; s < star; s++)
    rowOfStars = rowOfStars + '*'
    console.log(rowOfStars);
     
}