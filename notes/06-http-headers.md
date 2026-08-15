# HTTP Headers

HTTP headers let the client and server pass additional information to one another with a message in the request or response. HTTP headers are essentially metadata written as a case-insensitive name, followed by a colon, then the value.

There are standard headers, such as `content-type`, and custom headers defined by an application. Headers often contain information about authentication (HTTP Authorization header).

### JavaScript Headers Interface
The Headers Interface of the JavaScript Fetch API enables us to perform actions, such as retrieving, setting, adding, and removing, from request and response headers.

In code, we use `Request.headers` and the `Reponse.headers` to access the properties of the HTTP header.
Methods include `.get()`, `.has()`.