/*
 * All routes for items are defined here
 * Since this file is loaded in server.js into /items,
 *   these routes are mounted onto /items
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const { render } = require('ejs');
const express = require('express');
const router  = express.Router();
const addItemQuery = require('../db/queries/addItem');
const updateItemQuery = require('../db/queries/updateItem');
const deleteItemQuery = require('../db/queries/deleteItem');

//Route for adding an item
router.post('/', (req, res) => {

  //search apis for item catagory
  console.log(req.body.item);

  //make sql query that adds item and catagory
  addItemQuery.addItem(req.body.item, 'someCatagory')
    .then(users => {
      res.json({ users });
    })
    // .then(() => {
    //   res.redirect('/');
    // })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });

});

//Route for updating an item
router.post("/:id", (req, res) => {

  console.log('Item id = ' + req.params.id);

  //make sql query that updates item to the user selected catagory
  updateItemQuery.updateItem(req.params.id, req.body.catagory)
    .then(users => {
      res.json({ users });
    })
    // .then(() => {
    //   res.redirect('/');
    // })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });

});

//Route for deleting an item
router.post("/:id/delete", (req, res) => {

  console.log('Delete Item id = ' + req.params.id);

  //make sql query that deletes item from the database
  deleteItemQuery.deleteItem(req.params.id)
    .then(users => {
      res.json({ users });
    })
    // .then(() => {
    //   res.redirect('/');
    // })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });

});


module.exports = router;
