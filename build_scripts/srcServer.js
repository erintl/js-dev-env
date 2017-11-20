import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath:config.output.publicPath
}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
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
