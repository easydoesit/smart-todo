const { fetchGoogleBooks } = require('./fetchGoogleBooks');

//checkGoogleBooks takes one "item" and checks for an exact match. If exact it returns true.

const checkGoogleBooks = function(item, num) {

  return fetchGoogleBooks(item, num).then((data) => {
    for (let i in data) {
      if (data[i].volumeInfo.title === item) {
        console.log("The book item exists: ", item);
        return true;
      }
    }
    console.log("The Book item doesn't exist!");
    return item;
  });
};

//checkGoogleBooks('When We Were Orphans',40);

module.exports = {checkGoogleBooks};
