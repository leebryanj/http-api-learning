/**
 * Query Parameters: A simple GET fetch request using query parameters
 */
// Query params here are: ?limit=25&offset=25
// limit=25 means return 25 Pokémon
// offset=25 means start at Pokémon #26
// This means we are request Pokémon 26-50
// keys are limit and offset. values are 25 and 25
const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=25&offset=25");
const data = await response.json();
console.log(data);