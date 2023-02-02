const { fetchMovieDB } = require('./fetchMovieDB');

//checkMovies takes one  item" and checks for an exact match. If exact it returns true.

const checkMovies = function(item) {

  return fetchMovieDB(item).then((data) => {
    for (let i in data.results) {
      console.log(data.results[i].original_title);
      if (data.results[i].original_title === item) {
        console.log("The Movie name exists: ", item);
        return true;
      }
    }
    console.log("The Movie name doesn't exist!");
    return item;
  });
};

module.exports = {checkMovies};
