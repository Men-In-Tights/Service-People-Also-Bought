const neo4j = require('neo4j-driver').v1;
const driver = neo4j.driver("bolt://52.201.217.200:7687", neo4j.auth.basic("neo4j", "i-0e67c2b6c53c1b470"));
const session = driver.session();
const purchaseStrArr = require('./scheme.js');

let targetStock = '';

const alsoBoughtQuery = `
MATCH (s:STOCKS) where s.stockId = ${targetStock}
MATCH (user:USERS)-[:BOUGHT]->(s),
(user)-[:BOUGHT]->(alsoBought)
RETURN alsoBought AS Recommended, count(*) AS AlsoBought ORDER BY AlsoBought DESC LIMIT 12`;

// Promise.all(
//   purchaseStrArr.map(i => session.run(i))
// )

session.run(alsoBoughtQuery)
.then((result) => {
  console.log('alsoBought: ', result);
  session.close();
})
.catch(function (error) {
  console.log(error);
});