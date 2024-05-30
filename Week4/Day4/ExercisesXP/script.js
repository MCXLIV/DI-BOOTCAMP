//Exercise I
// Using Javascript:
console.log(document.getElementById('container'));
// Retrieve the div and console.log it
const container = document.querySelector('div');
console.log(container);


// Change the name “Pete” to “Richard”.
document.querySelector('.list').children[1].innerText = 'Richard';


// Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)
document.body.children[2].children[1].remove();


// Change each first name of the two <ul>'s to your name. (Hint : use a loop)
const uls = document.querySelectorAll('ul');
for (let ul of uls) {
    ul.firstElementChild.innerText = 'Markus';
}

// Bonus - Using Javascript:
// Add a class called student_list to both of the <ul>'s.
const student_list = document.querySelectorAll('ul');
// Add the classes university and attendance to the first <ul>.

//Exercise II
// Using Javascript:
// Add a “light blue” background color and some padding to the <div>.
document.querySelector('div').style.backgroundColor = 'lightblue';
// Do not display the <li> that contains the text node “John”. (the first <li> of the <ul>)
document.querySelector('.list').firstElementChild.style.display = 'none';
// Add a border to the <li> that contains the text node “Pete”. (the second <li> of the <ul>)
document.querySelector('.list').children[1].style.border = '1px solid black';
// Change the font size of the whole body.
document.body.style.fontSize = '20px'; 

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

//Exercise III
    // Add the code above, to your HTML file

    // Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

    // We are going to add a new <li> to the <ul>.
    // First, create a new <li> tag (use the createElement method).
    // Create a new text node with “Logout” as its specified text.
    // Append the text node to the newly created list node (<li>).
    // Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.

    // Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).

    //Exercise IV
//     In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).

// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.

