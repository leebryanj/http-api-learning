/**
 * Let's use the JavaScript URL API to log each part of the URL
 */
const exampleURL = "https://user:password@www.example.com:8080/path/to/page?search=hello&sort=asc#section-2"

const exampleURLObject = new URL(exampleURL);
console.log(`Protocol: ${exampleURLObject.protocol}`);
console.log(`Username: ${exampleURLObject.username}`);
console.log(`Password: ${exampleURLObject.password}`);
console.log(`Domain (host) name: ${exampleURLObject.hostname}`);
console.log(`Port: ${exampleURLObject.port}`);
console.log(`Path: ${exampleURLObject.pathname}`);
console.log(`Search (query string): ${exampleURLObject.search}`);
console.log(`Hash: ${exampleURLObject.hash}`);

/**
 * Let's request the name of one specific Pokémon using the api/v2/pokemon path
 */

const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
const data = await response.json();
// Just get the name of the pokemon in data
console.log(data.name);
