const db = require('../connection');

const addItem = (item, category) => {
  console.log('Item = ' + item + ' Category: ' + category);
  //create add item query
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { addItem };
