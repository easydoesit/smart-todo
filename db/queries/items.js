const db = require('../connection');

const getItems = () => {
  console.log("Get all items query");

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
