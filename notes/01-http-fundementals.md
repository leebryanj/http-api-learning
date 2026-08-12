# HTTP Fundementals

### HTTP
HTTP is a client-server protocol that sends individual messages back and forth to communicate. 
Clients send **requests** and servers send **responses**. A (browser) request always comes first.

### URL
The URL (Uniform Resource Locator) is the address that locates the resource we want to find on the internet. The 'http' scheme in the prefix of our URL indicates we are using the http protocol.

### (HTTP) Client and Server
The **Client** is the front end (usually the browser).

The **Server** is the back end, serving the document requested by the front end.

### Fetch API
We can use JavaScript's Fetch API, implemented by browsers, to make HTTP requests.
It has one required parameter — the URL (path) to the resource we wish to make a request to.
It returns a Promise, which will resolve to the Response object from the request.
```
const url = "http://example.com/customers.json"
const response = await fetch(url);
```
fetch also takes other parameters — more on that later...

### The Web Server
Web servers serve the content (document) requested by the client. From our perspective, it is a single (logical) machine that we request data from. In reality, there can be multiple servers or other software providing the requested data. They are the back end, always listening for our requests.


