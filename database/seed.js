const neo4j = require('neo4j-driver').v1;
const driver = neo4j.driver("bolt://127.0.0.1:7687", neo4j.auth.basic("neo4j", "javier"));
const session = driver.session();
const queryStrArr = require('./scheme.js');

// let findAlsoQuery = 
// `MATCH (person:Person)-[:BOUGHT]->(:Stock {name: "Google inc."}),
// (person)-[:BOUGHT]->(alsoBought)
// RETURN alsoBought.name AS Recommended, count(*) AS AlsoBought ORDER BY AlsoBought DESC`
// MATCH (n) DETACH DELETE n
// session.close()

Promise.all(
  queryStrArr.map(i => session.run(i))
)
.then((result) => {
  // console.log(result.records);
  console.log('neo4j browser on 7474');
  session.close();
})
.catch(function (error) {
  console.log(error);
});