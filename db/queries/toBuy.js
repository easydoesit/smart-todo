const db = require('../connection');

const toBuy = () => {
  const query = `SELECT * FROM items WHERE category_id = (SELECT id FROM categories WHERE category_name = $1);`;

  const values = ['Products'];

  return db.query(query, values)
    .then(res => {
      return res.rows;
    })
    .catch(err => {
      console.error(err);
      return err;
    });
};

module.exports = { toBuy };
