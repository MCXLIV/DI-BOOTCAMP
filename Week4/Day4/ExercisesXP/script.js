//Exercise I
// Using Javascript:
// Retrieve the div and console.log it
// Change the name “Pete” to “Richard”.
// Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)
// Change each first name of the two <ul>'s to your name. (Hint : use a loop)

const container = document.getElementById('container');
document.querySelector('.list').children[1].textContent = 'Richard';
const lists = document.querySelectorAll('.list');
    lists.forEach(list =>list.firstElementChild.textContent = 'Markus')
lists[1].children[1].remove();
for (let i = 1; i<=2; i++){document.body.children[i].children[0].textContent = 'Markus'
}
    console.log(document.body)


    // Bonus - Using Javascript:

    for(let i = 1; i<=3; i++){document.body.children[i].classList.add('student_list')}
    // Add the classes university and attendance to the first <ul>.
    for(let i = 1; i<=3; i++){document.body.children[1].classList.add('university', 'attendance')}

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
// Add the code above, to your HTML file // added
// Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
const navbar = document.getElementById("navBar");
navbar.setAttribute('id', 'socialNetworkNavigation');
console.log(navbar);
// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
const li = document.createElement('li');
// Create a new text node with “Logout” as its specified text.
const text = document.createTextNode('Logout');
// Append the text node to the newly created list node (<li>).
li.appendChild(text);
console.log(li);   
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
const ul = navbar.firstElementChild.appendChild(li);


// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).
const firstLi = navbar.firstElementChild.firstElementChild.textContent;
console.log(firstLi);
const lastLi = navbar.firstElementChild.lastElementChild.textContent;
console.log(lastLi);

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
    const allBooks = []


const book1 ={
    title: 'All the Light We Cannot See',
    Author: 'Anthony Doerr',
    image: 'https://picsum.photos/200',
    alreadyRead: false
}
const book2 ={
    title: 'Power of the Dog',
    Author: 'Don Winslow',
    image: 'https://picsum.photos/200',
    alreadyRead: false
}           
allBooks.push(book1, book2);
console.log('allBooks', allBooks);
let htmlStrings = '';
for(const book of allBooks){
console.log(book)
const rowString = `
<tr class '${book.alreadyRead ? 'is-read' : ''}>
<td>${book.title} written by ${book. Author}</td>
<td>
<img src= '${book.image}'</>
</td>
<td>Already read: ${book.alreadyRead}</td>
</tr>
` 
htmlStrings = htmlStrings + rowString;


}


const  table = document.createElement('table')
table.interHtml = `
<thead>
<tr>
<th col span = '3'>My Book List</th>
</tr>
</thead>
<tbody>
${htmlStrings}
</tbody>`

const bookListDiv= document.querySelector('.list-books');
console.log('bookListDiv', bookListDiv);   
bookListDiv.appendChild(table);



