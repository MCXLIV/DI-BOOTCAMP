//Exercise 1
// Using a DOM property, retrieve the h1 and console.log it.
const h1 = firstElement('h1')
const h2 = firstElement('h2')
const h3 = firstElement('h3')
const secondParagraph = getSecondParagraph()

removeP()
addButton()
// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
h2?.addEventListener('click', changeBackground)
h3?.addEventListener('click', hideH3)
// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
h1?.addEventListener('mouseover', fontSizeToRandom)

// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
secondParagraph.addEventListener('mouseover', makeSecondParagraphFadeOut)

function makeSecondParagraphFadeOut(){
secondParagraph.classList.add('fadeout')
}
function getSecondParagraph(){
return document.querySelectorAll('p')[1]
}

function getRandomNumber(){
return Math.floor(Math.random() * 100 + 1)
}
function fontSizeToRandom(){
const randomNumber = getRandomNumber()
h1.style.fontSize = randomNumber + 'px'
}

function firstElement(selector) {
    return document.querySelector(selector);
}
function boldenParagraphs() {
    const paragraphs = document.querySelectorAll("p");
    for (const paragraph of paragraphs) {
console.log(paragraph);
paragraph.classList.add("bold");
    }
}

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
function addButton(){
const button =  document.createElement('button')
button.textContent='Everything is Bold When Clicked'
button?.addEventListener('click', boldenParagraphs)
const article = firstElement('article')
article.appendChild(button)
}

function firstH1(){
    return document.querySelector("article > h1")
}

// Using DOM methods, remove the last paragraph in the <article> tag.
function removeP(){
    const article = document.querySelector("article")
    article?.lastElementChild.remove()
}

function changeBackground(){
h2?.classList.add("red");
}

function firstH2(){
    return document.querySelector("article > h2")
}
// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

function hideH3(){
h3?.classList.add('hide');
}
function firstH3(){
return document.querySelector("article > h3")
}


//Exeercise 2
// Retrieve the form and console.log it.
// When the user submits the form (ie. submit event listener)
// Retrieve the inputs by their id and console.log them.
// Retrieve the inputs by their name attribute and console.log them.

// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
// The output should be :
    // <ul class="usersAnswer">
    //     <li>first name of the user</li>
    //     <li>last name of the user</li>
    // </ul>


const form = document.querySelector('form');

function formInputs(e){
e.preventDefault();
const firstName =document.querySelector('[name = fname]').value; 
const lastName=document.querySelector('[name = lname]').value;
const ul = document.querySelector('.usersAnswer')
const firstLi = document.createElement('li');
const secondLi = document.createElement('li');
if(firstName ==='' || lastName ==='')return alert('please fill in all fields')

ul.interHtml ='';

firstLi.innerText = firstName;
secondLi.innerText = lastName;
ul.append(firstLi, secondLi);   
}



form.addEventListener('submit', formInputs);
