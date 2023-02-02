const { checkRestaurants } = require('./checkRestaurants');
const { checkMovies } = require('./checkMovies');
const { checkGoogleBooks } = require('./checkGoogleBooks');
const { addItem } = require('../db/queries/addItem');

const categoryPicker = function(item, city, userID) {
  console.log(item, city);
  let category = 'product';

  // check Restaurant here returns either "product" or "restaurant"
  return checkRestaurants(city, item)
    .then(data => {
      console.log("checkRest data: ", data);
      if (data === true) {
        category = 'restaurant';
        //addItem(userID, item, category);
      }
      console.log("category at rest:", category);
      return category;
    })
    .then((data) => {
      if (data !== 'restaurant') {
        return checkMovies(item);
      } else {
        return category; // returns restaurant
      }
    })
    .then((data) => {
      if (data !== true) {
        return category; // returns last category name
      } else {
        category = 'movie'; // changes name to movie
        //addItem(userID, item, category);
      }
      console.log("category at movie:", category);
      return category;
    })
    .then((data) => {
      console.log("beginning of books: ", data);
      if (data !== 'movie' && data !== 'restaurant') {
        return checkGoogleBooks(item, 40);
      } else {
        return category;
      }
    })
    .then((data) => {
      if (data !== true) {
        return category; // returns last category name
      } else {
        category = 'book';
        //addItem(userID, item, category);
      }
      console.log("category at book:", category);
      return category;
    })
    .then((data) => {
      addItem(userID, item, data);
      return data;
    });
};


//categoryPicker("Dyson Vacuum", 'Calgary', 1).then(data => console.log(data));

module.exports = { categoryPicker };

