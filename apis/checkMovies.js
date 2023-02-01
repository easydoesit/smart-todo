const { fetchMovieDB } = require('./fetchMovieDB');

//checkMovies takes one "movieName" and checks for an exact match. If exact it returns true.

const checkMovies = function(movieName) {

  fetchMovieDB(movieName).then((data) => {
    for (let i in data.results) {
      if (data.results[i].original_title === movieName) {
        console.log("The name exists: ", movieName);
        return true;
      }
    }
  });
};

module.exports = {checkMovies};
