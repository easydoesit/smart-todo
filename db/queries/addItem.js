const db = require('../connection');

const addItem = (userID, item) => {
  console.log('Item = ' + item + ' User ID = ' + userID);
//write query to add item to database
  const query = `INSERT INTO items (user_id, item_name) VALUES ($1, $2)`;

  const values = [userID, item];

  return db.query(query, values)
    .then(res => {
      return res;
    })
    .catch(err => {
      console.error(err);
      return err;
    });
};

module.exports = { addItem };
