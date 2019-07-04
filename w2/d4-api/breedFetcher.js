const request = require('request');
const breedName = process.argv.splice(2)
request("https://api.thecatapi.com/v1/breeds/search?q=" + breedName, (error, response, body) => {
    if (body === "[]") {
        console.log("Breed not Found!")
    }
    if (error) { 
        return console.log('Failed to request detail: ' + error);
    }
    const data = JSON.parse(body)
}); 