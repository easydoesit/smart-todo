/*
 * All routes for items are defined here
 * Since this file is loaded in server.js into /items,
 *   these routes are mounted onto /items
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const { render } = require('ejs');
const express = require('express');
const router  = express.Router();
const updateItemQuery = require('../db/queries/updateItem');
const deleteItemQuery = require('../db/queries/deleteItem');

const { categoryPicker } = require('../apis/categoryPicker');

//Route for adding an item
router.post('/', (req, res) => {
  categoryPicker(req.body.item, 'Calgary', req.cookies["userid"])
    .then((data) => {
      const itemObject = {"item" : req.body.item, "category" : data.category, "itemID":data.itemID};
      res.send(itemObject);
    });
});

//Route for updating an item
router.post("/:id", (req, res) => {

  //make sql query that updates item to the user selected catagory
  updateItemQuery.updateItem(req.params.id, req.body.category)
    .then(users => {
      res.json({ users });
    })
    .then(() => {
      res.redirect('/');
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

//Route for deleting an item
router.post("/:id/delete", (req, res) => {

  //make sql query that deletes item from the database
  deleteItemQuery.deleteItem(req.params.id)
    .then(data => {
      res.send("item deleted");
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});


module.exports = router;
