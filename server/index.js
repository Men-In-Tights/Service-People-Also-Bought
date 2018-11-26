const express = require('express');
const bodyParser = require('body-parser');
const neo4j = require('neo4j-driver').v1;
const driver = neo4j.driver("bolt://127.0.0.1:11001", neo4j.auth.basic("neo4j", "javier"));
const session = driver.session();
const path = require('path');

const app = express();
const PORT = 3006;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static(__dirname + '/../client/dist'));

let targetStock = '';

const alsoBoughtQuery = (stock) => (`
MATCH (s:STOCK) where s.id = 'stockIdx${stock}'
MATCH (user:USER)-[:BOUGHT]->(s),
(user)-[:BOUGHT]->(alsoBought)
RETURN alsoBought.name AS Recommended,
alsoBought.price AS price, count(*) AS AlsoBought ORDER BY AlsoBought DESC`);



app.get('/api/alsoBought/:id', (req, res) => {
  targetStock = req.params.id;
  session.run(alsoBoughtQuery(targetStock))
    .then(result => {
      console.log(result.records);
      res.status(200).send(result.records);
    })
    .catch(err => {
      console.log(err);
    })
  // Stocks.findRandom().limit(12).exec({ id: req.params.id }, (error, results) => {
  //   if (error) {
  //     res.status(500).send(error);
  //   }
  //   console.log(results);
  //   res.status(200).send(results);
  // });
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});