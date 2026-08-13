# Web Addresses

### IP Address
An IP address is a number used to identify a specific device on the Internet Protocol (IP) network.
192.168.1.1 is a 32-bit IPv4 address. 2001:0db8:0000:0000:0000:8a2e:0370:7334 is a 128-bit IPv6 address.
We typically refer to IPv4 addresses currently. Each of the four sections in Ipv4 can be between 0-255 (32bit).


### DNS
DNS (Domain Name System) maps IP addresses to human-readable domain names. The mapping process of taking a name to an IP address is called DNS lookup.
Each time we send an HTTP request to a server on a Domain, we need to resolve the DNS (to get an IP address), then use that IP address to make the request.

### Domain, Top-level Domain & Subdomain
.com, .org, .net are examples of top-level domains.
The domain **name** is often the name of the brand or company.
The subdomain prefixes the domain name, which can enable a domain to route traffic to separate servers and/or resources.

Eg. "developer.mozilla.org"
top-level domain: .org
domain name: mozilla
subdomain: developer

### URL API
JavaScript has a built-in URL API. The constructor takes a **url** as the parameter. Usefully, you can extract the **hostname** or **pathname** from the URL object.
```
const url = new URL("http://www.example.com/inventory/items");
console.log(url.hostname);
```