# HTTP Methods

As a refresher, HTTP is a client-server protocol that serves as the foundation for data exchange on the web. Clients send requests and servers send responses, and these messages are exchanged as individual messages.

### GET (Request) Method
The GET HTTP method gets a representation of a specified resource. It is safe to send a GET request multiple times as it does not change the state of the server. It requests data from the server and should not contain an HTTP body.

### POST (Request) Method
The POST method sends data to the server. The data's type is specified by the `Content-Type` in the header. The body in the request contains the data payload to be sent to the server. POST requests are not idempotent, meaning it is not safe to send POST requests multiple times, as each request could have different additional effects.

### PUT (Request) Method
The PUT method can create a new resource, or replace the representation of the target resource with the request body content. It is essentially updating the resource and creates a new resource if one does not exist already.

The main different between POST and PUT is that PUT is idempotent — calling PUT multiple times is the same as calling it once. Whereas calling POST multiple times can create additional side effects, such as creating a resource multiple times.

HTTP PATCH partially applies modifications to a resource. PATCH requests are not always idempotent and can have side effects, since it only partially updates a resource without completely replacing it. PUT reuqests completely replaces the target resource. PATCH is not as common as PUT, and it will be more common to see PUT requests.

### DELETE (Request) Method
The DELETE method deletes a specified resource on the server. DELETE should not contain a body as it is used only to delete data.

### CRUD
Acronym for Create, Read, Update, Delete. Describes most actions we can perform on a database (persistent storage).
Each action has an equivalent HTTP method (by convention):
Create - POST
Read - GET
Update - PUT
Delete - DELETE

### HTTP Reponse Status Codes
HTTP reponse status codes allows the observation of whether an HTTP request went through successfully. The status code comes back from the server's response. If something went wrong during our request (from the client), that would produce an error.

Status codes are grouped in the following categories:
- Informational reponses - `100` - `199`, rare
- Successful responses - `200` - `299`
- Redirection messages - `300` - `399`, often not visible as browser or HTTP client does redirect
- Client error responses - `400` - `499`, server telling client there is an issue (authentication, formatting, etc.)
- Server errors - `500` - `599`, visible when there is an error on the server

Most common status codes include:
- 200 OK. Everything works.
- 201 Created. New resource was created, typically by a POST/PUT.
- 301 Moved Permanently. The URL of requested resource has been permanently changed. Reponse will include new URL.
- 400 Bad Request. The server cannot or won't process the request, indicating the client side made an error (syntax error, etc.)
- 403 Forbidden. Client is unauthorized and does not have access rights. Indentity of client is known to server.
- 404 Not Found. Requested resource cannot be found on server. For browsers, this means URL is not recongnized. For APIs, it means the endpoint exists but the resource does not.
- 500 Internal Server Error. There is a server-side error.


