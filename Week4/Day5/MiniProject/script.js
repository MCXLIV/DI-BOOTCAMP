function playTheGame(){
    const isUserReady= confirm('Do you want to play?')
    if (!isUserReady){
        alert('No problem, Goodbye')
        return
    }
    const answer = prompt ('Enter a number')
    if(!isOnlyNumbers(Number(answer))){
    alert('Sorry not a number, Goodbye ')
        return
    }
    if (!isBetweenZeroandTen(answer)){
        alert('Sorry that was not a good number, goodbye')
        return
    }
    console.log('We are playing the Game')
}
function isOnlyNumbers(str){
    const regex = new RegExp(/^[0-9]*$/)
    return regex.test(str)
}
function isBetweenZeroandTen(number){
    return number >= 0 && number <=10
}