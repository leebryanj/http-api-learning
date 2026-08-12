/** 
 * 1. Let's get some Pokemon from the PokeAPI
 */

const reponse = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=25');
const data = await reponse.json();
console.log(data);