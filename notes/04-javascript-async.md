# Asynchronous JavaScript

### Synchronous & Asynchronous Code
Synchronous code runs in the order that it is written, and since it runs sequentially, each step would need to wait for the previous step to finish before continuing.

Asynchronous code allows code that appears later to run, while previous lines of code (that take longer to finish) are still running.

Synchronous code is easier to read and understand. However, we use asynchronous code when a process takes a longer amount of time and we don't want our application to freeze while the process takes place. A good example is an HTTP request. It takes time to reach the server and to have the server provide a response. In this case, we should handle those network requests asynchronously.

### JavaScript Promises
JavaScript Promises return one of 2 possible states – either fulfilled or rejected. It can also be in the initial pending state.

When a Promise is created, there are `resolve` and `reject` parmeters that we can use to specify what happens when the promise resolves or rejects.

When handling, or using, the created Promise, we use `.then()` to handle the resolve, and `.catch()` to handle the reject. One of them runs depending on if the Promise is resolved or rejected.

### JavaScript Async using Await
The `await` operator is used to wait for a Promise to reach its fulfillment (resolve or reject). If used in a function, the function must be an async function.
Instead of using `.then()`, we just `await` the promise. `await` can also be used at the top level of a module.
```
myPromise.then((data) => {
    console.log(data);
})
```
```
const data = await myPromise;
console.log(data);
```

Similar to using `await` instead of `.then()`, we can use an `async function` instead of `new Promise()`. An async function automatically returns a Promise. The promise resolves with whatever value the function returns. Inside the function, `await` can be used to wait for a Promise to settle before continuing.

Using async makes code easier to read and also makes the code look more synchronous.

Before `Promises` and `await`, callbacks were used to handle asynchronous functionality. A callback function is a function passed to another function as an argument. That callback function is then invoked by the outer function to complete a task. Promises have more of the callback syntax using `.then()`, while `async`/`await` does not have this callback nature.