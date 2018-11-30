const neo4j = require('neo4j-driver').v1;
const driver = neo4j.driver("bolt://104.196.201.116:7687", neo4j.auth.basic("neo4j", "javier"));
const session = driver.session();
const purchaseStrArr = require('./scheme.js');

// let findAlsoQuery = 
// `MATCH (person:Person)-[:BOUGHT]->(:Stock {name: "Google inc."}),
// (person)-[:BOUGHT]->(alsoBought)
// RETURN alsoBought.name AS Recommended, count(*) AS AlsoBought ORDER BY AlsoBought DESC`
// MATCH (n) DETACH DELETE n
// session.close()


// session.run(`LOAD CSV WITH HEADERS FROM "file:///stockdatabase001.csv" AS stocks
// CREATE (n:STOCK { id:stocks.STOCKID, name:stocks.STOCKNAME, price:stocks.STOCKPRICE })`)
// .then((result) => {
//   console.log('pushed first 2m');
//   session.close();
// })
// .catch(function (error) {
//   console.log(error);
// });
// Promise.all(
//   queryStrArr.map(i => session.run(i))
// )
// .then((result) => {
//   // console.log(result.records);
//   console.log('neo4j browser on 7474');
//   session.close();
// })
// .catch(function (error) {
//   console.log(error);
// });

Promise.all(
  purchaseStrArr.map(i => session.run(i))
)
.then((result) => {
  console.log('pushed purchase list');
  session.close();
})
.catch(function (error) {
  console.log(error);
});

