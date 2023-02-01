const db = require('../connection');

const deleteItem = (itemID) => {
  console.log('Delete Item ID = ' + itemID);
  //create delete item query
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { deleteItem };
