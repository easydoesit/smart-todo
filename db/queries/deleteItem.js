const db = require('../connection');

const deleteItem = (itemID) => {
  console.log('Delete Item ID = ' + itemID);

  const query = `UPDATE items
  SET item_status = false
  WHERE id = $1;`;

  const values = [itemID];

  return db.query(query, values)
    .then(res => {
      return res;
    })
    .catch(err => {
      console.error(err);
      return err;
    });
};

module.exports = { deleteItem };
