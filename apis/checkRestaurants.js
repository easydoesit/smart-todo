const { fetchYelp } = require("./fetchyelp");

// checks restaurants based on the users "city" and the exact "item" of the restaurant.
// TODO - Would like to feed it any API call so it doesn't have to be specifically yelp but I don't know how.

const checkRestaurants = function(city, item) {

  return fetchYelp(city, item)
    .then(data => {
      for (let i in data.businesses) {
        if (data.businesses[i].item === item) {
          console.log("The restaurant exists: ", item);
          return true;
        }
      }
      console.log("The restuarant doesn't exist!");
      return item;
    });
};


module.exports = { checkRestaurants };


