const db = require('../connection');

const login = (email, password) => {
  const query = 'SELECT id FROM users WHERE email = $1 AND password = $2;';

  return db.query(query, [email, password])
    .then(res => {
      console.log('Userid = ' + res.rows[0]);
      return res.rows[0];
    })
    .catch(err => {
      console.error(err);
      return err;
    });
};

module.exports = { login };
