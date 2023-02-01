const db = require('../connection');

const updateItem = (itemID, category) => {
  console.log('Item ID = ' + itemID + ' Category: ' + category);
  //create update item query
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { updateItem };
