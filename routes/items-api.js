/*
 * All routes for items are defined here
 * Since this file is loaded in server.js into /items,
 *   these routes are mounted onto /items
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const { render } = require('ejs');
const express = require('express');
const router = express.Router();
const addItemQuery = require('../db/queries/addItem');
const updateItemQuery = require('../db/queries/updateItem');
const deleteItemQuery = require('../db/queries/deleteItem');

//Route for adding an item
router.post('/:id', (req, res) => {
  const userID = req.params.id;
  const itemName = req.body.item;
  //search apis for item catagory
  console.log(`Adding the item with ID: ${userID} to items: ${itemName}`);
  console.log(req.body.item);

  //make sql query that adds item and catagory
  addItemQuery.addItem(userID, itemName)
    .then(addedItem => {
      res.json({ success: true, data: addedItem });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

//Route for updating an item
router.post("/:id", (req, res) => {
  const itemID = req.params.id;
  const categoryName = req.body.catagory;

  console.log(`Updating item with ID: ${itemID} to category: ${categoryName}`);

  //make sql query that updates item to the user selected catagory
  updateItemQuery.updateItem(itemID, categoryName)
    .then(updatedItem => {
      res.json({ status: 'Success', data: updatedItem });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: err.message });
    });
});

//Route for deleting an item
router.post("/:id/delete", (req, res) => {
  const itemID = req.params.id;

  console.log(`Deleting item with ID: ${itemID}`);

  //make sql query that deletes item with using item id
  deleteItemQuery.deleteItem(itemID)
    .then(deletedItem => {
      res.json({ status: 'Success', data: deletedItem });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: err.message });
    });
});


module.exports = router;
