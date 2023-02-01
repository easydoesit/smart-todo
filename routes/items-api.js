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

const checkRestaurants = require('../apis/checkRestaurants');
const checkMovies = require('../apis/checkMovies');

//Route for adding an item
router.post('/', (req, res) => {

  //search apis for item category
  //check Restaurants & Cafes first
  checkRestaurants.checkRestaurants('Newmarket',req.body.item)
    .then((result) => {
      console.log(result);
      //if result = true add to database as a Restaurants & Cafes
      if (result === true) {
         //make sql query that adds item and catagory
        addItemQuery.addItem(req.body.item, 'Restaurants & Cafes')
        .then(() => {
          res.redirect('/');
        })
        .catch(err => {
          res
            .status(500)
            .json({ error: err.message });
        });
      } else {

        //check Film & Series second
        checkMovies.checkMovies(req.body.item)
        .then((result) => {
          console.log(result);
          if (result === true) {
            //make sql query that adds item and catagory
            addItemQuery.addItem(req.body.item, 'Film & Series')
            .then(() => {
              res.redirect('/');
            })
            .catch(err => {
              res
                .status(500)
                .json({ error: err.message });
            });
          } else {

            //check Books third
          }
        })
      }
    });
  });

//Route for updating an item
router.post("/:id", (req, res) => {

  console.log('Item id = ' + req.params.id);

  //make sql query that updates item to the user selected catagory
  updateItemQuery.updateItem(req.params.id, req.body.category)
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
