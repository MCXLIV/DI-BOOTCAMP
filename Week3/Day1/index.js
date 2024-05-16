let fullName= 'Zendaya Coleman'
let firstName;
let lastName;
//lastName = fullName.slice(6);
//firstName = fullName.slice(0, 6);

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" "));
console.log(lastName);
console.log(firstName);

const string='I really enjoyed the movie with Zendaya';
const words= string.split(' ');
console.log(words);

console.log('To be or not to be'.indexOf('e'));


let longString = "This is a very long string which needs " +
                 "to wrap across multiple lines because " +
                 "otherwise, my code is unreadable.";
console.log(longString);

let userName = "Isla Rosa         ";

console.log(userName.length);

userName = userName.trim();
console.log(userName);
console.log(userName.length);
userName = userName.toUpperCase();
userName = userName.toLowerCase();
userName = userName.repeat(4);
let result = userName.includes("I");

if(result){
    console.log("User Name Cannot Contain Empty Space")
} else{
    console.log("Welcome")
};
let phoneNumber = "555-555-5555";
console.log(phoneNumber);
phoneNumber = phoneNumber.replaceAll("-","");
console.log(phoneNumber);
phoneNumber = phoneNumber.replaceAll("5", "9");
console.log(phoneNumber);
phoneNumber = phoneNumber.replace("9", "1");
console.log(phoneNumber);
phoneNumber = phoneNumber.replaceAll("",".");
console.log(phoneNumber);
phoneNumber = phoneNumber.replaceAll("9", "5");
phoneNumber = phoneNumber.replace("1", "5");
phoneNumber = "555-555-5555";
console.log(phoneNumber);
phoneNumber = phoneNumber.padStart(15, "#")
phoneNumber = phoneNumber.padEnd(20, "#");
console.log(phoneNumber);

//concat
let  day = 'Good Morning, '
let  evening = 'Good Evening, '
let  afternoon = 'Good afternoon, '
let  question = 'How are You?'
let greetingNight = evening + question;
console.log(day + "have you had breakfast?");
let middleName = prompt('What is your middle name?');
console.log ('Hello ' + middleName +"," +' ' +question);
let greetingAfternoon = afternoon.concat(question);
console.log(afternoon.concat(question));

let isBoss = confirm("Are you the boss?");
console.log(confirm);
let sampleArray = [
    [1, 2, 5],
    [7, 6, 10, 11, 12],
    [3]
]
console.log(sampleArray[1][4]);
let colors= ['red', 'blue', 'green', 'white']
console.log(colors);
colors.pop();
console.log(colors);
colors.push('yellow');
console.log(colors);
colors.join();
console.log(colors);
let alert = ("Hello");
console.log(alert);