const db = require('../connection');

const updateCategory = (itemID, categoryID) => {
  console.log('Item ID = ' + itemID + ' Category ID: ' + categoryID);

  const query = `UPDATE items SET category_id = $1 WHERE id = $2`;
  const values = [categoryID, itemID];

  return db.query(query, values)
    .then(res => {
      return res.rows;
    })
    .catch(err => {
      console.error(err);
      throw err;
    });
};

module.exports = { updateCategory };
