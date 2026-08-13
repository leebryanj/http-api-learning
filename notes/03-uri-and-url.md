# URIs and URLs

### URIs
URI (Uniform Resource Identifier) identify resources on the web. URIs are a superset of URLs (meaning URLs are a type of URLs).

### Parts of a URL
A URL is made up of multiple parts, some are required and others are optional.
```
https://user:password@www.example.com:8080/path/to/page?search=hello&sort=asc#section-2
```
| Part | Required? | Example |
|---|---|---|
| Scheme/Protocol | Required | `https://` |
| User | Optional | `user` |
| Password | Optional | `password` |
| `@` | Only if user/password are present | `@` |
| Domain (host) name | Required | `www.example.com` |
| Port | Optional | `:8080` |
| Path | Optional | `/path/to/page` |
| Query string | Optional | `?search=hello&sort=asc` |
| Hash | Optional | `#section-2` |

- User and Password are often used to access information on infrastructure databases and are rarely used when browsing the web.
- A host is required for a typical HTTP/HTTPS URL. The hostname contains subdomain(optional), domain name, and a top-level domain.
- Port is optional but default values are used when not specified (http: 80, https: 443).
- Search (query parameters) starts with a "?" followed by a set of key value pairs (more on this later...). 
- \# usually links to a certain section of the page.

Other URL protocols exist, such as http, https, ftp, mailto. So you could see a URL starting with `mailto:`.

### Ports
Ports are specific endpoints, managed by the OS, to separate different software running on a computer connected to the network with an IP address. 
There are default ports for specific protocols when no port is specified. Common default examples are HTTP 80, HTTPS 443, IMAP 143, etc.

### URL Path
The URL pathname is a location that is similar to the file path of the resource on the server. Although this is true for simpler websites, modern web servers are often much more complex.

### Query Parameters
Query parameters usually changes something small in the request, such as a filter option. They are key-value pairs after the `?`, with `key=value`, with each additional query parameter separated by `&`.
The server can do anything with the query parameter, but it is usually used for sorting, tracking, filtering, etc.