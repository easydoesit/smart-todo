const db = require('../connection');

const updateItem = (itemID, category) => {
  console.log('Item ID = ' + itemID + ' Category: ' + category);
  //create update item query
  const query = `UPDATE items SET category_id = (SELECT id FROM categories WHERE category_name = $1) WHERE id = $2;`;
  
  const values = [category.category_name, itemID];

  return db.query(query, values)
    .then(res => {
      return res;
    })
    .catch(err => {
      console.error(err);
      return err;
    });
};

module.exports = { updateItem };
