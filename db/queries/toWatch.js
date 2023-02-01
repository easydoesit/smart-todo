const db = require('../connection');

const toWatch = () => {
  const query = `SELECT * FROM items WHERE category_id = (SELECT id FROM categories WHERE category_name = $1);`;
  console.log("Get to watch query");

  const values = ['Film & Series'];

  return db.query(query, values)
    .then(res => {
      return res.rows;
    })
    .catch(err => {
      console.error(err);
      return err;
    });
};

module.exports = { toWatch };
