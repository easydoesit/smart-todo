const { fetchGoogleBooks } = require('./fetchGoogleBooks');
const { capitalize } = require('./apiHelpers');
//checkGoogleBooks takes one "item" and checks for an exact match. If exact it returns true.

const checkGoogleBooks = function(item, num) {
  item = capitalize(item);

  return fetchGoogleBooks(item, num).then((data) => {
    for (let i in data) {
      let bookCap = capitalize(data[i].volumeInfo.title);
      console.log(bookCap);
      if (bookCap === item) {

        return true;
      }
    }

    return item;

  });
};



module.exports = {checkGoogleBooks};
