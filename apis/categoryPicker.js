const { checkRestaurants } = require('./checkRestaurants');
const { checkMovies } = require('./checkMovies');
const { checkGoogleBooks } = require('./checkGoogleBooks');
const { addItem } = require('../db/queries/addItem');

const categoryPicker = function(item, city, userID) {
  console.log(item, city);
  let category = 'product';

  // check Restaurant here returns either "product" or "restaurant"
  // every then() is either passing the category or the API data
  // if the api is required.
  return checkRestaurants(city, item)
    .then(data => {

      if (data === true) {
        category = 'restaurant';
      }

      return category;

    })
    .then((data) => {

      if (data !== 'restaurant') {
        // checkMovies here returns api data
        return checkMovies(item);
      } else {
        return category; // returns current category
      }

    })
    .then((data) => {

      // if checkMovies returned false
      if (data !== true) {
        return category; // returns last category name
      } else {
        category = 'movie'; // changes name to movie
        //addItem(userID, item, category);
      }

      return category;

    })
    .then((data) => {

      // if category is still product then check if it's a book
      if (data !== 'movie' && data !== 'restaurant') {
        return checkGoogleBooks(item, 40);
      } else {
        return category;
      }

    })
    .then((data) => {

      //if the checkGoogleBooks returned false
      if (data !== true) {
        return category; // returns last category name
      } else {
        category = 'book';
      }

      return category;

    })
    .then((data) => {

      return addItem(userID, item, data)  // pushes userID, item, and Category to Database.
      .then((itemID) => {
        let itemObject = {"category":data, "itemID":itemID};

        return itemObject; //returns the category and itemID
      })

    });
};


//categoryPicker("Dyson Vacuum", 'Calgary', 1).then(data => console.log(data));

module.exports = { categoryPicker };

