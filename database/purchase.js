const neo4j = require('neo4j-driver').v1;
const driver = neo4j.driver("bolt://52.201.217.200:7687", neo4j.auth.basic("neo4j", "i-0e67c2b6c53c1b470"));
const session = driver.session();

const query = (stockId, userId, amount) => (`
MATCH (s:STOCKS) where s.stockId = ${stockId}
MATCH (u:USERS) where u.userId = ${userId}
CREATE (u)-[:BOUGHT {amount:[${amount}]}]->(s)`);

let queryStrArr = [];
let num = 1000;
const purchaseMaker = () => {
  for(let i=0; i<num; i++){
    queryStrArr.push(query(
      Math.floor(Math.random() * (50 - 0 + 1)) + 0, 
      Math.floor(Math.random() * (50 - 0 + 1)) + 0,
      Math.floor(Math.random() * (500 - 10 + 1)) + 10
    ))
  }
}

purchaseMaker();

if(!queryStrArr.length){
  console.log('queryStrArr is empty');
}else{
  let now = Date.now();
  console.log('creating...');
  Promise.all(
    queryStrArr.map(i => session.run(i))
  )
  .then((result) => {
    console.log('made ', num, ' purchases ', Date.now() - now, 'ms');
    session.close();
  })
  .catch(function (error) {
      console.log(error);
      session.close();
  });
}