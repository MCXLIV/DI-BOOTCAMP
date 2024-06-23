// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <planetDiv> using createElement. This planetDiv should have a class named "planet".
// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each planetDiv to the <section> in the HTML (presented below).
// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?
const planets = [
{name:'Mercury', moons: 0},
{name: 'Venus', moons: 0},
{name: 'Earth', moons: 1},
{name: 'Mars', moons: 0},
{name:'Jupiter', moons: 2},
{name: 'Saturn', moons: 3},
{name: 'Uranus', moons: 4},
 {name:'Neptune', moons: 0}
]
for (const planet of planets){
const planetDiv = document.createElement('Div');
planetDiv.classList.add('planet', planet.name.toLowerCase());

for(let i = 0; i < planet.moons; i++){
const moonDiv = document.createElement('Div')
moonDiv.classList.add('moon')
moonDiv.style.left= i * 10 + 'px'
planetDiv.appendChild(moonDiv)
}
const section = document.querySelector('.listPlanets');
section.appendChild(planetDiv);
}
