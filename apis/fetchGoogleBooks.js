const request = require('request-promise-native');
require('dotenv').config();
const apiKey = process.env.GOOGLEBOOKS_API;

//fetchGoogleBooks takes in an item "name" and numResults(as integer) returns all the volumes that match partial "name"

const fetchGoogleBooks = function(name, numResults) {
  return request(`https://www.googleapis.com/books/v1/volumes?q=${name}&maxResults=${numResults}&key=${apiKey}`)
    .then((data) => {

      const response = JSON.parse(data);

      return response.items;

    });
};

module.exports = {fetchGoogleBooks};
