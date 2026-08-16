# JSON

JSON (JavaScript Object Notation) is text-based format for representing structured data based on JavaScript's object syntax. The structured data is in a string representation, and is useful for sending that data in network-based/web applications.

JSON can be used independently from JavaScript, and can even be stored .json file. While all valid JSON are valid JavaScript object literals, the opposite is not true. Not all valid JavaScript object literals are valid JSON.

Both JSON and XML are often used for HTTP bodies and configuration files.

### JSON Structure
JSON is a string that has a format which resembles JavaScript object literals.
```
{
    "username": "Movie Superfan",
    "joined": 2022,
    "movies": [
        {
            "name": "Jurassic Park",
            "year": 1993
        },
        {
            "name": "Inception",
            "year": 2010
        }
    ]
}
```
- Each property must be in the format `"key": value`. key must be a string literal in double quotes.
- JSON can only contain serializable data: \
For primitives, JSON can contain string literals, number literals, true, false, and null. Primitives cannot contain undefined, NaN, or Infinity. \
For non-primitives, JSON can contain object literals and arrays. Non-primitives cannot contain functions or any other object types, such as Date, Set, and Map.
- Strings must be in double quotes.
- Numbers must be in decimal format.
- Objects and arrays cannot have trailing commas.
- JSON cannot contain comments.

At the top level, JSON can have an object `{}` or an array `[]` as its top-level value. JSON can also have a string, number, boolean, or `null` as its top-level value.

### Response .json() method
`.json()` is a method of the `Response` interface. It takes a `Response` stream and returns a promise which resolves the stream's. body text into JSON. The result is not actual JSON, but instead parses it into a JavaScript object.

The JavaScript object is what we work with after getting a response from the fetch API and calling .json().

###  JSON.stringify() and JSON.parse()
The `JSON.stringify()` static method takes JavaScript (object/value) and converts it into a JSON string. This is useful when we want to serialize a JavaScript object and send a JSON string to our server/DB.

The `JSON.parse()` is also a static method that does the opposite of `JSON.stringify()`. It takes a (JSON) string, and returns the JavaScript object represented by the string.

### XML (Extensible Markup Language)
XML is a markup language similar to HTML. However, tags are created instead of using tags that are already definted, like in HTML.

Similar to JSON, it can be used to store structured information. In XML, tags `<tag>data</data>` are used instead of keys `"key": value` in JSON.

XML:
```
<movie>
    <name>Jurassic Park</name>
    <year>1993</year>
</movie>
```
JSON:
```
{
    "name": "Jurassic Park",
    "year": 1993
}
```