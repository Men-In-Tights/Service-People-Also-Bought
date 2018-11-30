// const mongoose = require('mongoose');

// const mongoUri = 'mongodb://Ben:Benm1024@ds157223.mlab.com:57223/robinhoodfec';
// // const mongoUri = 'mongodb://localhost/robinhoodfec';
// const db = mongoose.connect(mongoUri);

// module.exports = db;

const neo4j = require('neo4j-driver').v1;
const driver = neo4j.driver("bolt://52.201.217.200:7687", neo4j.auth.basic("neo4j", "i-0e67c2b6c53c1b470"));
const session = driver.session();

let stockq = (x) => (`
USING PERIODIC COMMIT
LOAD CSV WITH HEADERS FROM "https://s3.amazonaws.com/robinhood-people-also-bought/stockdatabase00${x}.csv" AS stocks
CREATE (:STOCKS { 
stockId: toInteger(stocks.STOCKID), 
name:stocks.STOCKNAME,
price: toInteger(stocks.STOCKPRICE),
recent: toInteger(stocks.RECENTCHANGE),
changeamount: toInteger(stocks.CHANGEAMOUNT)
});`);

let stockqArr = [];

const stockqArrPusher = () => {
    console.log('making stock queries...');
    for(i=1; i<6; i++){
        stockqArr.push(stockq(i))
    }
}

stockqArrPusher();

let user = `
USING PERIODIC COMMIT
LOAD CSV WITH HEADERS FROM "https://s3.amazonaws.com/robinhood-people-also-bought/userdatabase001.csv" AS users
CREATE (:USERS { userId: toInteger(users.USERID), name:users.USERNAME});
`;


let purchaseq = (x) => (`USING PERIODIC COMMIT
LOAD CSV WITH HEADERS FROM "https://s3.amazonaws.com/robinhood-people-also-bought/purchase00${x}.csv" AS purchase
MATCH (user:USERS { userId: toInteger(purchase.USERID)}),
  (stock:STOCKS { stockId: toInteger(purchase.STOCKID)})
CREATE (user)-[:BOUGHT { amount: toInteger(purchase.AMOUNT) }]->(stock)`);

let purchaseArr = [];

const purchaseArrPusher = () => {
    console.log('making purchase queries...');
    for(i=1; i<6; i++){
        purchaseArr.push(stockq(i))
    }
}
purchaseArrPusher();

let kill = `MATCH (n) DETACH DELETE n`;

// Promise.all(stockqArr.map(i => session.run(i)))
session.run(`USING PERIODIC COMMIT
LOAD CSV WITH HEADERS FROM "https://s3.amazonaws.com/robinhood-people-also-bought/purchaseTest.csv" AS purchase
MATCH (user:USERS { userId: toInteger(purchase.USERID)}),
  (stock:STOCKS { stockId: toInteger(purchase.STOCKID)})
CREATE (user)-[:BOUGHT { amount: toInteger(purchase.AMOUNT) }]->(stock)`)
.then(res => {
    console.log('pushed 10k purchases');
    console.log(res);
    session.close();
})
.catch(err => {
    console.log(err)
    session.close();
});

// session.close(()=>{console.log('session closed')});

// MATCH (s:STOCK) where s.id = 'stockIdx0'
// MATCH (u:USER) where u.id = 'userIdx0'
// CREATE (u)-[:BOUGHT {amount:[300]}]->(s)

// gcloud compute instances create robinhood \
//    --scopes https://www.googleapis.com/auth/cloud-platform \
//    --image-project launcher-public --tags neo4j \
//    --image=neo4j-community-1-3-3-5
