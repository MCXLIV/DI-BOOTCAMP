//Exercise 1
    //Store your favorite food into a variable.
    //Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)
    //Console.log I eat <favorite food> at every <favorite meal
    const favoriteFood = 'French Toast';
    const favoriteMeal = 'breakfast';
    console.log(`I eat ${favoriteFood} at every ${favoriteMeal}`)      

//Exercise 2   
        //Part I
            // Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
            //Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.
            const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
            const myWatchedSeriesLength = myWatchedSeries.length;
            console.log(myWatchedSeries.length);    
            // Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched 
                // For example : black mirror, money heist, and the big bang theory
               myWatchedSeries.pop()
               myWatchedSeries.push("and the big bang theory");
               console.log(myWatchedSeries);
               const myWatchedSeriesSentence = `${myWatchedSeries[0]}, ${myWatchedSeries[1]}, ${myWatchedSeries[2]}`
               console.log(myWatchedSeriesSentence);
            //Console.log a sentence using both of the variables created above
                // For example : I watched 3 series : black mirror, money heist, and the big bang theory
                console.log(`I watched ${myWatchedSeries.length} series : ${myWatchedSeriesSentence}`)  
        //Part II   
            // Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
            myWatchedSeries[2]="friends";
            console.log(myWatchedSeries);
            //Add, at the end of the array, the name of another series you watched. 
            myWatchedSeries[3]="Game of Thrones";
            console.log(myWatchedSeries);
            //Delete the series “black mirror”.
            myWatchedSeries.shift();
            console.log(myWatchedSeries);
            //Console.log the third letter of the series “money heist”.
            const moneyHeist = myWatchedSeries[0];
            console.log(moneyHeist[2]);
            //Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.
            console.log(myWatchedSeries);

//Exercise 3
    //Store a celsius temperature into a variable.
    let celsius = 22;
    //Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
    let fahrenheit = celsius/5*9+32;
    //Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
    //Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32
    console.log(fahrenheit);

//Exercise 4
    //For each expression, predict what you think the output will be in a comment (//) without first running the command.
    // Of course, explain each prediction.
    //Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.
     
    //first expression  
    let c;
    let a = 34;
    let b = 21;
    // Prediction:55
    console.log(a+b)
    // Actual: 55
    //second expression 
    a = 2;
    // Prediction:23
    console.log(a+b) 
    // Actual:23
    //third expression
    //What is the value of c?
     // Prediction: Undefined
     // Actual: Undefined
    //fourth expression
    // Analyse the code below, what will be the outcome?
    console.log(3 + 4 + '5');
    // Prediction:75
    // Actual:75       

//Exercise 5
    //What is the output of each of the expressions below?
    
    typeof(15)
    // Prediction: number
    // Actual: number

    typeof(5.5)
    // Prediction: number
    // Actual:number

    typeof(NaN)
    // Prediction: Not a number
    // Actual: Number

    typeof("hello")
    // Prediction: string    
    // Actual: string

    typeof(true)
    // Prediction:boolean
    // Actual:boolean

    typeof(1 != 2)
    // Prediction:true
    // Actual:boolean

    "hamburger" + "s"
    // Prediction: "hamburger","s"
    // Actual:'hamburgers'

    "hamburgers" - "s"
    // Prediction:"hamburger"
    // Actual:Nan

    "1" + "3"
    // Prediction:13
    // Actual:'13'

    "1" - "3"
    // Prediction:"-2"
    // Actual:-2

    "johnny" + 5
    // Prediction:"johnny5"
    // Actual:"johnny5"

    "johnny" - 5
    // Prediction:"5johnny"
    // Actual:Nan

    99 * "hello"
    // Prediction:nan
    // Actual:nan

    1 != 1
    // Prediction:false
    // Actual:false

    1 == "1"
    // Prediction: true
    // Actual: true

    1 === "1"
    // Prediction:false
    // Actual:false

//Exercise 6
    5 + "34"
    // Prediction:534
    // Actual:'534'

    5 - "4"
    // Prediction:nan
    // Actual:1

    10 % 5
    // Prediction:0.5
    // Actual:0

    5 % 10
    // Prediction:5
    // Actual:5

    " " + " "
    // Prediction:" "
    // Actual:'  '

    " " + 0
    // Prediction:"0"
    // Actual:'0'

    true + true
    // Prediction:true
    // Actual:2

    true + false
    // Prediction:0
    // Actual:1

    false + true
    // Prediction:1
    // Actual:1

    false - true
    // Prediction:0
    // Actual:-1

    !true
    // Prediction:false
    // Actual:false

    3 - 4
    // Prediction:-1
    // Actual:-1

