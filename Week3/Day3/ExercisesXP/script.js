//Exercise 1
//Using prompt() and alert(), ask a user for their age.
let number = prompt(`What is your age?`);
//IF they say they are below 18, respond with: "Sorry, you are too young to drive this car. Powering off
if(number < 18){
    alert(`Sorry, you are too young to drive this car. Powering off`);
}
//IF they say they are 18, respond with: "Congratulations on your first year of driving. Enjoy the ride!
else if (number == 18){
    alert(`Congratulations on your first year of driving. Enjoy the ride!`);
}
//IF they say they are over 18, respond with: "Powering On. Enjoy the ride!"
else{
    alert(`Powering On. Enjoy the ride!`);
}
//Exercise 2
//let a = 2 + 2;
//switch (a) {
    //case 3:
    // alert( 'Too small' );
     //break;
    //case 4:
    // alert( 'Exactly!' );
    // break;
    // case 5:
    // alert( 'Too large' );
    // break;
    //default:
    // alert( "I don't know such values" );
    //switch (a) {
    // case 3:
    // alert( 'Too small' );
    // break;
    //  case 4:
    // alert( 'Exactly!' );
    // break;
    //  case 5:
    //  alert( 'Too large' );
    //  break;
    //  default:
    //  alert( "I don't know such values" );
    // }
    //prediction: 'Exactly!'
    //let a = 2 + 2;
//switch (a) {
 // case 3:
   // alert( 'Too small' );
  //  break;
 // case 4:
 //   alert( 'Exactly!' );
   // break;
 // case 5:
  //  alert( 'Too large' );
  //  break;
 // default:
 //   alert( "I don't know such values" );
//}
    //actual:'Exactly!'

Exercise 3    
//let a = 2 + 2;
switch (a) {
case 4:
alert('Right!');
break;
case 3: // (*) grouped two cases
 case 5:
 alert('Wrong!');
alert("Why don't you take a math class?");
 break;
default:
alert('The result is strange. Really.');

//prediction: 'Right!

let a = 2 + 2;

switch (a) {
  case 4:
    alert('Right!');
    break;
  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}
//actual: let is not defined