// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const http = require('http');
// const app = express();
//
// // API file for interacting with MongoDB
// const api = require('./server/routes/api');
//
// // Parsers
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false}));
//
// // Angular DIST output folder
// app.use(express.static(path.join(__dirname, 'dist')));
//
// // API location
// app.use('/api', api);
//
// // Send all other requests to the Angular app
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });
//
// /**
//  * Get and set port from environment and store in Express.
//  */
// const port = process.env.PORT || '3000';
// app.set('port', port);
//
// /**
//  * Create HTTP server.
//  */
// const server = http.createServer(app);
//
// /**
//  * Listen on provided port, on all network interfaces.
//  */
// server.listen(port, () => console.log(`API running on localhost:${port}`));

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

// API file for interacting with MongoDB
const api = require('./server/routes/api');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// API location
app.use('/api', api);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));
