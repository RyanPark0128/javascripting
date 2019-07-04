const request = require('request');
const fetchBreedDescription = function(breedName, callback) {
    request("https://api.thecatapi.com/v1/breeds/search?q=" + breedName, (error, response, body) => {
    return JSON.parse(body);
    }); 
};

module.exports = { fetchBreedDescription };