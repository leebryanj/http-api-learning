/**
 * JavaScript Headers Interface: Let's try getting the "content-type" value from a response using the Fetch API
 */
const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
const contentType = response.headers.get("content-type");
console.log(contentType);