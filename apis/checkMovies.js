const { fetchMovieDB } = require('./fetchMovieDB');

//checkMovies takes one  item" and checks for an exact match. If exact it returns true.

const checkMovies = function(item) {

  return fetchMovieDB(item).then((data) => {
    let returnVar = item;
    for (let i in data.results) {
      console.log(data.results[i].original_title);
      if (data.results[i].original_title === item) {
        console.log("The Movie name exists: ", item);
        returnVar = true;
        return returnVar;
      }
    }
    console.log("The Movie name doesn't exist!");
    return returnVar;
  });
};

module.exports = {checkMovies};
