// api is provided by yelp
const sdk = require('api')('@yelp-developers/v1.0#2hsur2ylbank95o');
require('dotenv').config();

const apiKey = process.env.YELP_API;

// fetch Yelp takes in parameters of city and name and returns all the data from the api request
const fetchYelp = function(city, name) {
  // make url friendly strings
  const nameURLFriendly = name.replace(' ', '%20');
  const cityURLFriendly = city.replace(' ', '%20');

  // yelp authorization header
  sdk.auth('Bearer ' + apiKey);

  // yelp request {data} is the full object of what is returned. Console.log(data) to see the nested objects.
  return sdk.v3_business_search({location: cityURLFriendly, term: nameURLFriendly, sort_by: 'best_match', limit: '10'})
    .then(({ data }) => {

      return data;
    })
    .catch(err => console.error(err));
};


module.exports = { fetchYelp };

