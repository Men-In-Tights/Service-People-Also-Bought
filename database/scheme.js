const faker = require('faker');

let nameList = [];
let stockList = [];
let amountList = [];
let priceList = [];
let stocks = (index, stockName, price) => (`CREATE (stockIdx${index}:Stock {name:'${stockName}', price:${price}})`);
let users = (index, name) => (`CREATE (userIdx${index}:Person {name:'${name}'})`);
let purchases = (userIdx, amount, stockIdx) => (` (${userIdx})-[:BOUGHT {amount:[${amount}]}]->(${stockIdx}),`);

let queryStrArr = [];
let purchaseStrArr = ['CREATE '];

const seed = () => {
    console.log('seeding');
    for(let i=0; i<500000; i++){
        // nameList.push(faker.lorem.word());
        stockList.push(faker.lorem.word());
        amountList.push(faker.random.number({min: 10, max: 100}));
        priceList.push(faker.random.number({min: 50, max: 200}));
    }
    
    for(let j=0; j<stockList.length; j++){
        queryStrArr.push(stocks(j, stockList[j], priceList[j]));
    }
    // for(let n=0; n<nameList.length; n++){
    //     queryStrArr.push(users(n, nameList[n]));
    // }
    // for(let m=0; m<nameList.length; m++){
    //     let userIdx = Math.floor(Math.random() * (1000000 - 0)) + 0;
    //     let stockIdx = Math.floor(Math.random() * (1000000 - 0)) + 0;
    //     purchaseStrArr.push(purchases(`userIdx${userIdx}`, amountList[m], `stockIdx${stockIdx}`));
    // }
    // queryStrArr.concat(purchaseStrArr).join('\n').slice(0, -1);
}

seed();
console.log(stockList.length);
module.exports = queryStrArr;

