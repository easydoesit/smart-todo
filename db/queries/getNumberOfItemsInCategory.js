const db = require('../connection');

const getNumberOfItemsInCategory = (category, userID) => {
  const query = `
    SELECT COUNT(*) + 1 as priority
    FROM items
    WHERE user_id = $1
    AND category_id = (SELECT id FROM categories WHERE category_name = $2)
    AND item_status = $3
  `;
  const values = [userID, category, 't'];
  return db.query(query, values)
    .then(res => {
      return res.rows[0].priority;
    })
    .catch(err => {
      console.error(err);
      return err;
    });
  console.log(res.rows[0].priority)
};


module.exports = { getNumberOfItemsInCategory };
