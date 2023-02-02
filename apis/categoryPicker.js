const { checkRestaurants } = require('./checkRestaurants');
const { checkMovies } = require('./checkMovies');
const { checkGoogleBooks } = require('./checkGoogleBooks');

const categoryPicker = function(item, city) {
  console.log(item, city);
  let category = 'product';

  return checkRestaurants(city, item)
    .then(data => {
      console.log("checkRest data: ", data);
      if (data === true) {
        category = 'restaurant';
      }
      console.log("category at rest:", category);
      return category;
    })
    .then((data) => {
      if (data !== 'restaurant') {
        return checkMovies(item);
      } else {
        return category;
      }
    })
    .then((data) => {
      if (data !== true) {
        return category;
      } else {
        category = 'movie';
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
        return category;
      } else {
        category = 'book';
      }
      console.log("category at book:", category);
      return category;
    });
};

module.exports = {categoryPicker};

//categoryPicker('Dyson Vacuum', 'Calgary').then(data => console.log(data));
