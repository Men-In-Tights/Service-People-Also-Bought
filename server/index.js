const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const Stocks = require('../database/Stocks.js');

const app = express();
const PORT = 3006;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static(__dirname + '/../client/dist'));

app.get('/api/alsoBought/:id', (req, res) => {
  Stocks.findRandom().limit(12).exec({ id: req.params.id }, (error, results) => {
    if (error) {
      res.status(500).send(error);
    }
    console.log(results);
    res.status(200).send(results);
  });
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
