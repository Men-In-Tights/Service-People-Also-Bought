const neo4j = require('neo4j-driver').v1;
const driver = neo4j.driver("bolt://127.0.0.1:11001", neo4j.auth.basic("neo4j", "javier"));
const session = driver.session();
const purchaseStrArr = require('./scheme.js');

let targetStock = '';

const alsoBoughtQuery = `
MATCH (s:STOCK) where s.id = '${targetStock}'
MATCH (user:USER)-[:BOUGHT]->(s),
(user)-[:BOUGHT]->(alsoBought)
RETURN alsoBought.name AS Recommended, count(*) AS AlsoBought ORDER BY AlsoBought DESC`;

// Promise.all(
//   purchaseStrArr.map(i => session.run(i))
// )

session.run(alsoBoughtQuery)
.then((result) => {
  console.log('alsoBought');
  session.close();
})
.catch(function (error) {
  console.log(error);
});