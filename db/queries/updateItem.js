const db = require('../connection');

const updateItem = (itemID, category) => {
  console.log('Item ID = ' + itemID + ' Category: ' + category);

  const query = `UPDATE items SET category_id = (SELECT id FROM categories WHERE category_name = $1) WHERE id = $2`;
  const values = [category, itemID];

  return db.query(query, values)
    .then(res => {
      console.log(res.rows);
      return res.rows;
    })
    .catch(err => {
      console.error(err);
      throw err;
    });
};

module.exports = { updateItem };
