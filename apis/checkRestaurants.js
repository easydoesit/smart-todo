const { fetchYelp } = require("./fetchyelp");
const { capitalize } = require('./apiHelpers');

// checks restaurants based on the users "city" and the exact "name" of the restaurant.
// TODO - Would like to feed it any API call so it doesn't have to be specifically yelp but I don't know how.

const checkRestaurants = function(city, name) {
  name = capitalize(name);

  return fetchYelp(city, name)
    .then(data => {
      for (let i in data.businesses) {
        let capRest = capitalize(data.businesses[i].name);
        if (capRest === name) {
          //console.log("The restaurant exists: ", name);
          return true;
        }
      }
      //console.log("The restuarant doesn't exist!");
      return name;
    });
};


module.exports = { checkRestaurants };


