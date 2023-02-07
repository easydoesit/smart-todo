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
const loginRoutes = require('./routes/login-api');


// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/api/users', userApiRoutes);
app.use('/api/widgets', widgetApiRoutes);
app.use('/users', usersRoutes);
app.use('/items', addApiRoutes);
app.use('/login', loginRoutes);

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
      //console.log(data);
      const templateItems = {
        items: data
      };
      //console.log(templateItems);
      res.render('index', templateItems);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });

});

const { login } = require('./db/queries/login');

const updatePriorityQuery = require('./db/queries/updatePriority');

app.post('/update-priorities', (req, res) => {
  let priorities = req.body.priorities;
  Promise.all(
    priorities.map(({ itemID, priority }) => {
      return updatePriorityQuery.updatePriority(itemID, priority);
    })
  )
    .then(() => {
      console.log('Priorities updated');
      res.send('Priorities updated');
    })
    .catch(err => {
      console.error(err);
      res.status(500).send(err.message);
    });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
