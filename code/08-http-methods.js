/**
 * Get (Request) Method: fetch() API example
 */

// We have already been using the fetch() api, providing only 1 parameter, usually in the format of a URL.
/*
There is an optional 2nd parameter which takes an object. The object contains options to configure the request. If we don't provide this parameter, it defaults to the GET method.
*/
/*
Paraters for the object to configure the request include:
method: HTTP method
headers: header details
mode: security related
body: body of the HTTP request
*/
// Example using 2nd parameter with GET request (usually left out/optional)
// "Accept" in the header tells the server to send the response in JSON format.
const pikachuResponse = await fetch("https://pokeapi.co/api/v2/pokemon/25", {
    method: "GET",
    headers: {
        "Accept": "application/json"
    }
});
// Handle HTTP error responses
if (!pikachuResponse.ok) {
    throw new Error(`HTTP error: ${pikachuResponse.status}`);
}
const pikachuData = await pikachuResponse.json();
console.log(pikachuData);
/* Content-Type was not necessary because we are doing a GET request. Content-Type describes the format of a request body, and GET requests typically don't have one.
*/

/**
 * POST (Request) Method: A simple POST request example
 */

// JSON.stringify() converts the JavaScript Object into a JSON string so it can be sent as the HTTP request body
const postResponse = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "Hello World",
        body: "A simple POST request"
    })
});
const postData = await postResponse.json();
console.log(postData);

/**
 * PUT (Request) Method: A simple PUT request example
 */

// Notice compared to POST, with PUT we do /posts/1. We are specifying to replace/update resouce 1 with this data
const putResponse = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "Updated title",
        body: "Updated content"
    })
});
const putData = await putResponse.json();
console.log(putData);

/**
 * DELETE (Request) Method: A simple DELETE request example
 */

// There is no body or Content-Type header since we're just asking the server to delete a specific resource
const deleteResponse = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE"
});
console.log("DELETE status:", deleteResponse.status);
console.log("DELETE ok:", deleteResponse.ok);


/**
 * HTTP Reponse Status Codes: Let's see the status code of our earlier request
 */

// Use the .status property on the Reponse object
const pikachuResponseCode = pikachuResponse.status;
console.log("FETCH response code:", pikachuResponseCode);