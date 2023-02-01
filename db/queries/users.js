const db = require('../connection');

const getUsers = () => {
  const query = 'SELECT * FROM users;';

  return db.query(query)
    .then(res => {
      return res.rows;
    })
    .catch(err => {
      console.error(err);
      return err;
    });
};

module.exports = { getUsers };
