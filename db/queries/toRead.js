const db = require('../connection');

const toRead = () => {
  //query toRead catagory
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { toRead };
