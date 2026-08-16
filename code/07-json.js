/**
 * JSON Structure: Examples of valid JSON (in string format), with an object {} and array [] at the top level
 */

const jsonObject = `{
    "username": "Movie Superfan",
    "joined": 2022,
    "movies": [
        {
            "name": "Jurassic Park",
            "year": 1993
        },
        {
            "name": "Inception",
            "year": 2010
        }
    ]
}`

const jsonArray = `[
    {
            "name": "Jurassic Park",
            "year": 1993
        },
        {
            "name": "Inception",
            "year": 2010
        }
]`

console.log(jsonObject);
console.log(jsonArray);

/**
 * Response .json() method: THe same example, with better understanding
 */

const reponse = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
const data = await reponse.json();
console.log(data.name);

/**
 * JSON.stringify() and JSON.parse(): Example of stringifying and parsing
 */

// Notice JavaScript object does not require double quotes for property names
const movieObject = {
    username: "Movie Superfan",
    joined: 2022,
    movies: [
        {
            "name": "Jurassic Park",
            "year": 1993
        },
        {
            "name": "Inception",
            "year": 2010
        }
    ]
}
const stringMovieObject = JSON.stringify(movieObject);
console.log("string:", stringMovieObject);
const objectMovieObject = JSON.parse(stringMovieObject);
console.log("object:", objectMovieObject);