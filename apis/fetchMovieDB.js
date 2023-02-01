const { MovieDb } = require('moviedb-promise');
require('dotenv').config();

const apiKey = process.env.MOVIEDB_API;
const moviedb = new MovieDb(apiKey);

const fetchMovieDB = function(movieName) {

  return moviedb
    .searchMovie({ query: movieName })
    .then((res) => {
      return res;
    })
    .catch(console.error);
};

module.exports = { fetchMovieDB };
