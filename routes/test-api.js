/*
 * All routes for items are defined here
 * Since this file is loaded in server.js into /items,
 *   these routes are mounted onto /items
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const { render } = require('ejs');
const express = require('express');
const router = express.Router();
const getItemsQuery = require('../db/queries/items');

//Route for getting items
router.get('/', (req, res) => {

  //make sql query that gets item and catagory
  getItemsQuery.getItems()
    .then(test => {
      res.json({ test });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
