const { fetchMovieDB } = require('./fetchMovieDB');
const { capitalize } = require('./apiHelpers');
//checkMovies takes one  item" and checks for an exact match. If exact it returns true.

const checkMovies = function(item) {
  item = capitalize(item);

  return fetchMovieDB(item).then((data) => {
    for (let i in data.results) {
      let capMovie = capitalize(data.results[i].original_title);
      if (capMovie === item) {
        //console.log("The Movie name exists: ", item);
        return true;
      }
    }

    //console.log("The Movie name doesn't exist!");

    return item;

  });

};

module.exports = {checkMovies};
