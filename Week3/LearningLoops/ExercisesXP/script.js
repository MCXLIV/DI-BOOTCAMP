//Exercise 1
const people = ["Greg", "Mary", "Devon", "James"];
 //Part I
    //Write code to remove “Greg” from the people array.
    people.shift();
    console.log(people);
    //Write code to replace “James” to “Jason”.
    people[2]= "Jason";
    console.log(people);
    //Write code to add your name to the end of the people array.
    people[3]= "Markus";
    console.log(people);
    //Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
    console.log(people.indexOf("Mary"));
    //Write code to make a copy of the people array using the slice method.
        //The copy should NOT include “Mary” or your name.
        //Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
        //Hint: Check out the documentation for the slice method
        console.log(people.slice(0, 3));
    //Write code that gives the index of “Foo”. Why does it return -1 ?
    console.log(people.indexOf("Foo"));// "Foo" does not a string in the arry and thus JS returns -1 (false).
    //Create a variable called last which value is the last element of the array.
     //Hint: What is the relationship between the index of the last element in the array and the length of the array?
    const last = people[people.length-1];
    console.log(last);
       
 //Part II
    //Using a loop, iterate through the people array and console.log each person.
    for (let i = 0; i < people.length; i++) {
        console.log(people[i]);
      } 
    //Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
        //Hint: take a look at the break statement in the lesson.
        for (let i = 0; i < people.length; i++) {
            console.log(people[i]);
            if(people[i]==='Devon'){
                break;
            }
        }
     //Exercise 2
    //Create an array called colors where the value is a list of your five favorite colors.
    const colors  =['red', 'gray', 'black', 'blue', 'orange']
    //Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
    for (let i = 0; i < colors.length; i++) {
        console.log(`My #${i+1} Choice is ${colors[i]}`);
      }
    //Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
        //Hint : create an array of suffixes to do the Bonus
        const suffixes =['st', 'nd', 'rd', 'th', 'th']
        for (let i = 0; i < colors.length; i++) {
            console.log(`My ${i+1}${suffixes[i]} Choice is ${colors[i]}`);
        }

        //Exercise 3
    //Prompt the user for a number.
   
       
  
    //While the number is smaller than 10 continue asking the user for a new number.
        //Tip : Which while loop is more relevant for this situation?
        let number = null;      
        while(number != 10){
            const answer = prompt('Enter Number')
             number = Number(answer)
        }
        //Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
     
        


    

        //Exercise 4
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

    //Console.log the number of floors in the building.
    console.log(`There are ${building.numberOfFloors} number of floors in the building`);
    //Console.log how many apartments are on the floors 1 and 3.
    console.log(`There are ${building.numberOfAptByFloor.firstFloor} apartments on floor 1 and ${building.numberOfAptByFloor.thirdFloor} apartments on floor 3`);
    //Console.log the name of the second tenant and the number of rooms he has in his apartment.
    console.log(`The second tenant is ${building.nameOfTenants[1]}. He has ${building.numberOfRoomsAndRent.dan[0]} rooms in his apartment`);
    //Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
    let sum = ~~building.numberOfRoomsAndRent.sarah[1] + ~~building.numberOfRoomsAndRent.david[1];
    if(sum > ~~building.numberOfRoomsAndRent.dan[1]){
        building.numberOfRoomsAndRent.dan[1] = 1200
    }
    console.log(building.numberOfRoomsAndRent.dan[1])


    //Exercise 5
    //Create an object called family with a few key value pairs.
    const family = {
    brotherName: 'Michael',
    brotherAge: 36,
    brotherLocation: 'Ohio'
    }
    //Using a for in loop, console.log the keys of the object.
   

    for(const key in family){
    console.log(key);
     //Using a for in loop, console.log the values of the object.
    console.log(family[key]);
    }
    //Using a for in loop, console.log the values of the object.


    //Exercise 6
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }
    //Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
let statement = ''
for (const key in details){
    statement = `${statement} ${key} ${details[key]}`;
}
    console.log(statement);

    //Exercise 7
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
    //A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
        //Hint: a string is an array of letters
 
    let inital = '';
    for(const societyName of names.sort()){
        console.log(societyName);
        inital = inital + societyName[0];
    }
   //Console.log the name of their secret society. The output should be “ABJKPS”  
   console.log(inital);
