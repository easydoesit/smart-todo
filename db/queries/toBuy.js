const db = require('../connection');

const toBuy = () => {
  //query toBuy catagory
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { toBuy };
