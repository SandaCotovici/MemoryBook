const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
const configProvider = require('./providers/config.provider');

// API file for interacting with MongoDB
const API = require('./routes/api');

// Load yaml configuration files
configProvider.loadConfigs();

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, '..', 'dist')));

// angular app is  in src folder, so it has to show static catalog to express
// app.use(express.static(path.join(__dirname, 'src')));

// API location
app.use('/api', API.ALBUM);

// Send all other requests to the Angular app

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));
