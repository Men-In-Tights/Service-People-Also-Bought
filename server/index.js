const nr = require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const neo4j = require('neo4j-driver').v1;
const driver = neo4j.driver("bolt://52.201.217.200:7687", neo4j.auth.basic("neo4j", "i-0e67c2b6c53c1b470"));
const session = driver.session();
const path = require('path');

const app = express();
const PORT = 3006;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/stocks/:id/alsobought', express.static(__dirname + '/../client/dist'));
app.get('/', (req, res) => {
  res.send('please use appropriate url like: stocks/"id"/alsoBought')
})

const alsoBoughtQuery = (stock) => (`
MATCH (s:STOCKS) where s.stockId = ${stock}
MATCH (user:USERS)-[:BOUGHT]->(s),
(user)-[:BOUGHT]->(alsoBought)
RETURN alsoBought AS Recommended, count(*) AS AlsoBought ORDER BY AlsoBought DESC LIMIT 12`);

app.get('/api/:id/alsoBought', (req, res) => {
  let targetStock = req.params.id;
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