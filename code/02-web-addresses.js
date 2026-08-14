/**
 * IP Adress: Let's try to find the IP address from the API
 */
// type=A returns IPv4. type=AAAA would return the IPv6 address
const response = await fetch("https://cloudflare-dns.com/dns-query?name=pokeapi.co&type=A", {
    headers: {
        Accept: "application/dns-json",
    },
});

const data = await response.json();
console.log(data); // prints the whole response object

// PokeAPI may have more than one IP address. Print each one
let ipAddresses = [];
for (let i = 0; i < data.Answer.length; i++) {
    ipAddresses.push(data.Answer[i].data);
}
for (let i = 0; i < ipAddresses.length; i++) {
    console.log(ipAddresses[i]);
}

/**
 * URL API: Let's find the hostname from a given URL
 */
const url = new URL("http://www.example.com/inventory/items");
console.log(url.hostname);
console.log(url.pathname);