const db = require('../connection');

const updateDetails = (itemID, categoryID, priority) => {
  console.log(`Item ID = ${itemID} Category ID: ${categoryID} Priority: ${priority}`);

  const query = `UPDATE items SET priority = $1, category_id = $2 WHERE id = $3`;
  const values = [priority, categoryID, itemID];

  return db.query(query, values)
    .then(res => {
      return res.rows;
    })
    .catch(err => {
      console.error(err);
      throw err;
    });
};

module.exports = { updateDetails };
