let pokeArray = [
    {name: 'bulbasaur', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'},
    {name: 'ivysaur', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'},
    {name: 'charmander', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'},
    {name: 'charizard', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'},
    {name: 'squirtle', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'},
  
];
let index = 0;
let secIndex = 1;

function secondIt() {
    targetElement.src = pokeArray[secIndex].image;
    secIndex++;
    if (secIndex >= pokeArray.length) {
    secIndex = 1; } 
}
function showIt() {
let button = document.getElementById ('javaFlow'); {
    button.addEventListener ('click', function (){; 
    console.log ('click');
    secondIt();
    targetElement.src = pokeArray[index].image;
    index++;
    if (index >= pokeArray.length) {
    index = 0; }





