const { fetchMovieDB } = require('./fetchMovieDB');

//checkMovies takes one "movieName" and checks for an exact match. If exact it returns true.

const checkMovies = function(movieName) {

  return fetchMovieDB(movieName).then((data) => {
    for (let i in data.results) {
      console.log('Data = ' + data.results[i].original_title);
      if (data.results[i].original_title === movieName) {
        console.log("The name exists: ", movieName);
        return true;
      }
    }
    return false;
  });
};

module.exports = {checkMovies};
