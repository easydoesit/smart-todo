const db = require('../connection');

const toEat = () => {
  //query toEat catagory
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { toEat };
