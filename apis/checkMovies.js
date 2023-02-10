const { fetchMovieDB } = require('./fetchMovieDB');
const { capitalize } = require('./apiHelpers');
//checkMovies takes one  item" and checks for an exact match. If exact it returns true.

const checkMovies = function(item) {
  item = capitalize(item);

  return fetchMovieDB(item).then((data) => {
    for (let i in data.results) {
      let capMovie = capitalize(data.results[i].original_title);
      if (capMovie === item) {

        return true;
      }
    }

    return item;

  });

};

module.exports = {checkMovies};
