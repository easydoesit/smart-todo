// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));
app.use(cookieParser());

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const userApiRoutes = require('./routes/users-api');
const widgetApiRoutes = require('./routes/widgets-api');
const usersRoutes = require('./routes/users');
const addApiRoutes = require('./routes/items-api');

// Test Routes for getting data from database and rendering it
const testRoutes = require('./routes/test');
const testApiRoutes = require('./routes/test-api');

const loginRoutes = require('./routes/login-api');
const moreRoutes = require('./routes/more');

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/api/users', userApiRoutes);
app.use('/api/widgets', widgetApiRoutes);
app.use('/users', usersRoutes);
app.use('/items', addApiRoutes);
app.use('/login', loginRoutes);
app.use('/more', moreRoutes);
app.use('/api/test', testApiRoutes);
app.use('/test', testRoutes);
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

const getItemsQuery = require('./db/queries/items');

app.get('/', (req, res) => {

  //make sql query that adds item and catagory
  getItemsQuery.getItems()
    // .then(items => {
    //   //res.json({ items });
    //   console.log(items);
    // })
    .then(data => {
      console.log(data);
      const templateItems = {
        items: data
      };
      res.render('index', templateItems);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });

});

const updatePriorityQuery = require('./db/queries/updatePriority');
const { login } = require('./db/queries/login');


app.post('/api/test', (req, res) => {
  // get the newPriorities from the request body
  const newPriorities = req.body.newPriorities;
  console.log(newPriorities);
  // update the priorities in the database
  Promise.all(newPriorities.map((priority, index) => {
    return updatePriorityQuery.updatePriority(index + 1, priority);
  }))
    .then(() => {
      // send a response back to the client
      res.send({ message: 'Priorities updated successfully' });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send({ message: 'Error updating priorities' });
    });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
