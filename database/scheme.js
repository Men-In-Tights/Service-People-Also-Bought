const faker = require('faker');

let nameList = [];
let stockList = [];
let amountList = [];
let priceList = [];
let stocks = (stockName, price) => (`CREATE (${stockName}:Stock {name:'${stockName}', price:${price}})`);
let users = (name) => (`CREATE (${name}:Person {name:'${name}'})`);
let purchases = (name, amount, stockName) => (` (${name})-[:BOUGHT {amount:[${amount}]}]->(${stockName}),`);

let queryStrArr = [];
let purchaseStrArr = ['CREATE '];

const seed = () => {
    for(let i=0; i<10; i++){
        nameList.push(faker.lorem.word());
        stockList.push(faker.lorem.word());
        amountList.push(faker.random.number({min: 10, max: 100}));
        priceList.push(faker.random.number({min: 50, max: 200}));
    }

    for(let j=0; j<stockList.length; j++){
        queryStrArr.push(stocks(stockList[j], priceList[j]));
    }
    for(let n=0; n<nameList.length; n++){
        queryStrArr.push(users(nameList[n]));
    }
    for(let m=0; m<nameList.length; m++){
        purchaseStrArr.push(purchases(nameList[m], amountList[m], stockList[m]));
    }
    return queryStrArr.concat(purchaseStrArr).join('\n').slice(0, -1);
}

module.exports = seed;

