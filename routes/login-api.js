/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /login
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

const loginQuery = require('../db/queries/login');

router.post('/', (req, res) => {

  // validate username and password
  loginQuery.login(req.body.email, req.body.password)
    .then(result => {
      if (!result) {
        console.log("Login failed");

        // delete userID
        res.clearCookie('userid');
      } else {
        console.log("UserID = " + result.id);

        // set userID
        res.cookie('userid', result.id);
      }
      res.redirect('/');
    })
    .catch(err => {
      console.error(err);
      return err;
    });

});

module.exports = router;
