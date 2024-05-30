//Exercise 1
    //Part I : function with no parameters
        //Create a function called infoAboutMe() that takes no parameter.
        //The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
        //The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
         function infoAboutMe(){
            console.log(`My name is Markus. I'm 40. My hobbies are traveling and learning languages.`);
         }
        //Call the function.
        infoAboutMe();

    //Part II : function with three parameters
        //Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
        //The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
        function infoAboutPerson(personName, personAge, personFavoriteColor){
            console.log(`My name is ${personName}, I am ${personAge}, and my favorite color is ${personFavoriteColor}`);
        }
        //Call the function twice with the following arguments:
            //infoAboutPerson("David", 45, "blue")
            //infoAboutPerson("Josh", 12, "yellow")
        infoAboutPerson("David", 45, "blue");
        infoAboutPerson("Josh", 12, "yellow");

        
        

//Exercise 2
    //John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

    //Create a function named calculateTip() that takes no parameter.
     //Inside the function, use prompt to ask John for the subtotal of the bill.
    function calculateTip(){
        let subtotal = Number(prompt(`What is the subtotal of the bill, John?`));
        let tip
     //If the bill is less than $50, tip 20%.
    if (subtotal < 50) tip = 0.2
     //If the bill is between $50 and $200, tip 15%.
    if (subtotal > 50 && subtotal < 200) tip = 0.15
    //If the bill is more than $200, tip 10%.
   if (subtotal > 200) tip = 0.10;

    console.log("subtotal:", subtotal)
    console.log("tip:", tip)
    console.log("final bill:", subtotal + subtotal * tip);
    }

    //Console.log the tip subtotal and the final bill (bill + tip).
    //Call the function.
   calculateTip();
 
  
  
       
       


//Exercise 3
    //Create a function call isDivisible() that takes no parameter.
    //In the function, loop through numbers 0 to 500.
    //Bonus: Add a parameter divisor to the function.
    //isDivisible(divisor)
    
    
    function isDivisible(divisior){
        let sum = 0;
        for(let i = 0; i <= 500; i++){
            if(i % divisior === 0){ 
                if(i % divisior === 0) 
                //Console.log all the numbers divisible by 23.
                     //Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
        //391 414 437 460 483
                console.log(i);
                sum = sum + i;
            } 
        }
         //At the end, console.log the sum of all numbers that are divisible by 23.
        console.log('the sum of all numbers is:', sum);
          //Sum : 5313
    }

    isDivisible(23);
    //isDivisible(3) : Console.log all the numbers divisible by 3, and their sum
    isDivisible(3);
    //isDivisible(45) : Console.log all the numbers divisible by 45, and their sum
    isDivisible(45);






//Exercise 4
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

    //Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
    const shoppingList = ["banana", "orange", "apple"];
  
    //Create a function called myBill() that takes no parameters.
    function myBill(){
        let total = 0;
         for(let i = 0; i < shoppingList.length; i++){
            //The item must be in stock. (Hint : check out if .. in)
            //If the item is in stock find out the price in the prices object.
            if(stock[shoppingList[i]] >0) {
                console.log(`There are ${stock[shoppingList[i]]} ${shoppingList[i]} in stock at $${prices[shoppingList[i]]} each`)
                 //The function should return the total price of your shoppingList.
                total= total + prices[shoppingList[i]];
                console.log(`The total price of your shopping list is $${total}`);
                //Bonus: If the item is in stock, decrease the item’s stock by 1
                stock[shoppingList[i]] = stock[shoppingList[i]] - 1;
                console.log(`There are ${stock[shoppingList[i]]} ${shoppingList[i]} left in stock`);
            } else {
                 if(stock[shoppingList[i]] < 1)
                console.log(`Apologies, but we are out of ${shoppingList[i]}`) 
                
            }  
            }
     }
            //Call the myBill() function.
            myBill();


 

    

``

//Exercise 5

function changeEnough(itemPrice, subtotalOfChange){
            const sum = coins(subtotalOfChange)
            if (sum > itemPrice){ console.log('You have enough money')
                return true
            } else { console.log('You do not have enough money')
                return false
            }
         }

let QTY = [25, 20, 5, 0]
function coins(){
let sum = 0;
for(let i = 0; i < QTY.length; i++){
        let subtotal
        if(i === 0){subtotal = QTY[i] * 0.25}
        if(i === 1){subtotal = QTY[i]* 0.10}
        if(i === 2){subtotal = QTY[i]* 0.05}
        if(i === 3){subtotal = QTY[i]* 0.01}
    console.log(`We have ${QTY[i]} coins that have a value of $${subtotal}`)
    sum = sum + subtotal
    
}
console.log(sum)
}
//Need help with this one: I'm not sure how to call the function changeEnough() with the correct arguments and pretty sure I am not constructing the function correctly. Used Solution video for hints but preferred to try to solve it on my own.
changeEnough();


   
   

//Exercise 6
    // Let’s create functions that calculate your vacation’s costs:







// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.

    function hotelCost(){
        let answer;
         //It should ask the user for the number of nights they would like to stay in the hotel.
         while(!isOnlyNumbers(answer)) {
            answer = prompt('How many nights would you like to stay in the hotel?');
         }
        //If the user doesn’t answer or if the answer is not a number, ask again.
            const numberoOfNights = Number(answer);
            const costperNight = 140;
            const totalPrice = numberoOfNights * costperNight;
            
            return totalPrice;
        }
    function isOnlyNumbers(str){
        const regex = /^[0-9]+$/;
        return regex.test(str);
        }


//         Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$

        const price =planeRideCost();
        
        function planeRideCost(){
            let destination = ''
            while(destination == '' || includesNumbers(destination)){
                destination = prompt('Where would you like to go?');
            }
            console.log('destination:', destination);
            if(destination === 'London') return 183;
            if(destination === 'Paris') return 220;
            return 300;


        }

     
        function includesNumbers(str){
            const regex = new RegExp(/\d/);
            return regex.test(str);
        }

//         Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.

        rentalCarCost();
        function rentalCarCost(){
            let answer;
            while(!isOnlyNumbers(answer)){
                answer = prompt('How many days would you like to rent the car?');
            }
            const dailyPrice = 40;
            const numberOfDays = Number(answer);
            let discount = 0;
            if (numberOfDays > 10)discount = 0.05;
            const totalPrice = numberOfDays * dailyPrice * (1 - discount);
            return totalPrice;
        }


// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

// Call the function totalVacationCost()

// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.
        function totalVacationCost(){
            const hotel = hotelCost();
            const plane = planeRideCost();
            const car = rentalCarCost();

            console.log('hotelCost:', hotel);
            console.log('planeCost:', plane);
            console.log('carPrice:', car);
            console.log('Total:', hotel + plane + car);
    
        }
        totalVacationCost();
        

        //needed help with this one. followed along with solution video. Understood the forumula as explained.
