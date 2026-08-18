# URL Paths

### URL Paths
URL paths come right after the authority (domain, domain:port).
`http://example.com:8080<path>`
Old URL paths mapped directly to the filesystem, which exposed the server's architecture. Modern URL paths are usually logical routes that represent resources, rather than files or folders. THis makes URLs cleaner and lets the server control how requests are handled.

### RESTful APIs
REST (Representational State Transfer) is a convention that refers to software architectural design constraints. They help RESTful servers create efficient, reliable, scalable, predictable web APIs.

HTTP APIs are sometimes also reffered to as REST APIs, even though they may not necessarily follow all REST contraints. In general, REST APIs can be used interchangeably with HTTP APIs, as REST is how HTTP should be used following best practices.

1. **Uniform Interface**: How clients interact with resources consistently.\
• Resources are identified by URLs/URIs. Path is used to designate the resource being interacted with. \
• Standard HTTP methods are used consistently (`GET`, `POST`, `PUT`, `DELETE`, etc.). \
• Resources are represented informats such as JSON.
2. **Client-Server Separation**: The client and server have separate responsibilities. \
• Client handles the UI and requests. \
• Server handles data and business logic. \
• They can evolve independently and use different languages and technologies.
3. **Stateless**: Each reqest contains everything the server needs to process it. \
• Every request contains all the information needed to process it. \
• The server doesn't need to remember previous requests, or client session state. \
• This makes APIs easier to scale. Client and server don't need to track each other.
4. **Cacheable**: Responses indicate whether they can be cached. \
• Caching can reduce repeated requests. \
• This can improve performance and reduce server load.
5. **Layered System**: The client doesn't necessarily communicate firectly with the final server. \
• Client -> API Gateway -> Load Balancer -> Server \
• Each layer can perform a specific job without the client needing to know about it.

### Query Parameters
The query of a URL is an optional section that comes after the path. The data it contains is non-hierarchical to identify a resource. `?query`

They are written as key value pairs after the `?` as `key=value`. Each key value pair is separated with a `&` if more than one pair is present.

Example: `http://www.example.com:8080/path/to/file.html?key1=value1&key2=value2` \
Query parameters are often used in GET requests to ask for data in a certain format.