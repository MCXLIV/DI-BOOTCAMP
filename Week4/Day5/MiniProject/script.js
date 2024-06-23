function playTheGame(){
    const isUserReady= confirm('Do you want to play?')
    if (!isUserReady){
        alert('No problem, Goodbye')
        return
    }
    const computerNumber = generateRandomNumber()
    console.log(computerNumber)
    let answer = prompt ('Enter a number')
    let numberofTries = 0
    while( Number(answer) != compareNumbers){
        numberofTries = numberofTries + 1
        if(numberofTries === 3){
            alert('Sorry you lost all your tries, the correct number was', computerNumber)
            return
        }       

        if(!isOnlyNumbers(answer)){
            alert('Sorry not a number, Goodbye ')
                return
            }

            if (!isBetweenZeroandTen( Number(answer))){
                alert('Sorry that was not a good number, goodbye')
                return
            }
            console.log( Number(answer), computerNumber)
            if( Number(answer) > computerNumber ){
                alert("Your number is larger than the computer's, guess again")
                
            }
            if( Number(answer) < computerNumber ){
                alert("Your number is smaller than the computer's, guess again")
               
            }
            answer = prompt ('Enter a number')
    }
  alert('Congrats, you found the number', computerNumber)

}
    function isOnlyNumbers(str){
        const regex = new RegExp(/^[0-9]*$/)
        return regex.test(str)
    }
    function isBetweenZeroandTen(number){
        return number >= 0 && number <=10
    }
    function generateRandomNumber(){
    return Math.floor(Math.random()*11)
    }

    function compareNumbers(userNumber, computerNumber){
        if(userNumber === compareNumbers){
            alert ('Winner')
            return
        }
        
    }