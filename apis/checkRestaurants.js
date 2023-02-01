const { fetchYelp } = require("./fetchyelp");

// checks restaurants based on the users "city" and the exact "name" of the restaurant.
// TODO - Would like to feed it any API call so it doesn't have to be specifically yelp but I don't know how.

const checkRestaurants = function(city, name) {

  return fetchYelp(city, name)
    .then(data => {
      for (let i in data.businesses) {
        console.log('Data = ' + data.businesses[i].name);
        if (data.businesses[i].name === name) {
          console.log("The name exists: ", name);
          return true;
        }
      }
      return false;
    });
};

module.exports = { checkRestaurants };


