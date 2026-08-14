/**
 * Synchronous & Asynchronous Code: Let's write some synchronous code
 */

// Synchronous code example
console.log("first");
console.log("second");
console.log("third");

// Classic setTimeout async example
console.log("still first");
setTimeout(() => console.log("third, because I take longer"), 500);
console.log("actually second")

/**
 * JavaScript Promise: Let's create and use a simple Promise
 */

// Promise example
const isResolved = Math.random() < 0.5; // 50/50 coin flip
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (isResolved) {
            resolve("myPromise is resolved");
        } else {
            reject("myPromise is rejected");
        }
    }, 500);
});
myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error));

/**
 * JavaScript Async using Await: Let's use the await operator with Promises
 */
// The above Promise example using await await
try {
    const result = await myPromise;
    console.log(result);
} catch (error) {
    console.log(error);
}

// Use async function and await to fetch something from PokeAPI
async function getPikachu() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    const data = await response.json()
    return data;
    /*
    the above is equivalent to:
    return response.json();
    */
    // We don't need to await response.json() because returning a Promise from an async function causes the outer Promise (the function's) to adopt that Promise's eventual result. This is if you don't use the result in the function and simply passing the result.
    // This means the `async` function automatically wraps its return value in a Promise.
    // If you need the resolved value inside the (this) function, use `await`. If you're simply returning the Promise, you can return the Promise directly, and let who calls getPikachu() to await it (like below).
}
const pikachu = await getPikachu();
console.log(pikachu.name);