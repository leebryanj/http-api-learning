/**
 * try...catch statement: An example try...catch
 */
const data1 = `{
    "name": "Pikachu",
    "number": 25
}`;
const data2 = "data";

async function parseData(data) {
    try {
        const jsonData = JSON.parse(data);
        console.log(jsonData);
    } catch (error) {
        console.log("Something went wrong! Data may not be in JSON format");
    }
}

parseData(data1);
parseData(data2);