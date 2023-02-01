const db = require('../connection');

const addItem = (item, category) => {
  console.log('Item = ' + item + ' Category: ' + category);

  const query = `
  INSERT INTO items (category_id, user_id, item_name, due_date, priority)
  SELECT categories.id, users.id, $1, $2, $3
  FROM categories
  JOIN users ON users.email = $4
  WHERE categories.category_name = $5;
`;

  const values = [item.item_name, item.due_date, item.priority, item.email, category.category_name];

  return db.query(query, values)
    .then(res => {
      return res;
    })
    .catch(err => {
      console.error(err);
      return err;
    });
};

module.exports = { addItem };
