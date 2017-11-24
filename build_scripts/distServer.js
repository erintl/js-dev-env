import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Web server test endpoint.
app.get('/users', function(req, res) {
  // Hard coding as an example.
  res.json([
    {"id": 1, "firstName": "Chuck", "lastName": "Norris", "email": "cnorris@gmail.com"},
    {"id": 2, "firstName": "Bruce", "lastName": "Willis", "email": "bwillis@gmail.com"},
    {"id": 3, "firstName": "Jack", "lastName": "Morris", "email": "jmorris@gmail.com"}
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  }
  else {
    open('http://localhost:' + port);
  }
});
