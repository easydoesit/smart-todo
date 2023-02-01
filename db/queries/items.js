const db = require('../connection');

const getItems = () => {

  console.log("Get all items query");

  //query all active items
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getItems };
