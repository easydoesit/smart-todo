const db = require('../connection');

const toWatch = () => {
  //query toWatch catagory
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { toWatch };
