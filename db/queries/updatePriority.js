const db = require('../connection');

const updatePriority = (itemID, priority) => {
  console.log('Item ID = ' + itemID + ' Priority: ' + priority);

  const query = `UPDATE items SET priority = $1 WHERE id = $2`;
  const values = [priority, itemID];

  return db.query(query, values)
    .then(res => {
      return res.rows;
    })
    .catch(err => {
      console.error(err);
      throw err;
    });
};

module.exports = { updatePriority };
