//Exercise 1
    //Create 2 variables, x and y. Each of them should have a different numeric value.
    //Example :
    //let x = 5;
    //let y = 2
    //You should display: x is the biggest number
    let x = 5;
    let y = 4;
    //Write an if/else statement that checks which number is bigger.
    if (x > y){
        console.log ('Good Morning');
    } else { console.log ('Good Evening')
    }
//Exercise 2
    //Create a variable called newDog where it’s value is “Chihuahua”.
    let newDog = 'Chihuahua';
    //Check and display how many letters are in newDog. 
    console.log(newDog.length);
    //Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
    console.log(newDog.toUpperCase());
    console.log(newDog.toLowerCase());
    //Check if the variable newDog is equal to “Chihuahua”
        //if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
        //else, console.log ‘I dont care, I prefer cats’

        if (newDog === 'Chihuahua'){ console.log('I love Chihuahuas, its my favorite dog breed’');
        } else {
            console.log ('I dont care, I prefer cats');
        }
//Exercise 3
    //Prompt the user for a number and save it to a variable.
    let number = prompt('Enter Number');
    //Check whether the variable is even or odd.
    //If it is even, display: “x is an even number”. Where x is the actual number the user chose.
    if(number % 2 == 0) {
        console.log(`${number} is an even number`);
    } 
     //If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.
    else {
        console.log(`${number} is an odd number`);
    }
//Exercise 4   
 //Below is an array of users that are online in a group chat.
 const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
console.log(users);
  //Using the array above, console.log the number of users that are connected to the group chat based on the following rules:
        //If there is no users (the users array is empty), console.log “no one is online”.
        if (users.length === 0) 
        {
            console.log('no one is online')
        }
        //If there is 1 user, console.log “<name_user> is online”.
        else if (users.length === 1) 
	    {
            console.log(`${users[0]} is online`)
        }
         //If there are 2 users, console.log “<name_user1> and <name_user2> are online”.
         else if (users.length === 2) 
         {
            console.log(`${users[0]} and ${users[1]} are online`)

         }
         //If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.
       // For example, if there are 5 users, it should display:  name_user1, name_user2 and 3 more are online
       else if (users.length >= 2) 
         {
            console.log(`${users[0]} and ${users[1]} and 2 more are online`)

         }