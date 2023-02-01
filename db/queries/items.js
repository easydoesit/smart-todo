const db = require('../connection');

const getItems = () => {
  //Get all active items
  const query = `SELECT * FROM items WHERE item_status = true;`;

  return db.query(query)
    .then(res => {
      return res.rows;
    })
    .catch(err => {
      console.error(err);
      return err;
    });
};

module.exports = { getItems };
