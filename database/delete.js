const neo4j = require('neo4j-driver').v1;
const driver = neo4j.driver("bolt://104.196.201.116:7473", neo4j.auth.basic("neo4j", "javier"));
const session = driver.session();

// session.run('MATCH (n:STOCKS) detach delete n')
// .then(res => {
//     console.log('deleted 10m stocks');
//     console.log(res);
//     session.close();
// })
// .catch(err => {
//     console.log(err);
//     session.close()
// })

session.close(()=> {console.log('closing..')})