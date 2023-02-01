const db = require('../connection');

const toEat = () => {
  const query = `SELECT * FROM items WHERE category_id = (SELECT id FROM categories WHERE category_name = $1);`;

  const values = ['Restaurants & Cafes'];

  return db.query(query, values)
    .then(res => {
      return res.rows;
    })
    .catch(err => {
      console.error(err);
      return err;
    });
};

module.exports = { toEat };
