const faker = require('faker');

// const createCsvWriter = require('csv-writer').createObjectCsvWriter;
// const csvWriter = createCsvWriter({
//     path: './userdatabase006.csv',
//     header: [
//         {id: 'userId', title: 'USERID'},
//         {id: 'name', title: 'USERNAME'}
//     ]
// });

// let userRecord = [];
// for(let i=9000000; i<10000000; i++){
//     userRecord.push({userId: `userIdx${i}`,  name: faker.lorem.word()})
// }
 
// csvWriter.writeRecords(userRecord)       // returns a promise
//     .then(() => {
//         console.log('...Done');
//     });

// const createCsvWriter = require('csv-writer').createObjectCsvWriter;
// const csvWriter = createCsvWriter({
//     path: './stockdatabase001.csv',
//     header: [
//         {id: 'stockId', title: 'STOCKID'},
//         {id: 'name', title: 'STOCKNAME'},
//         {id: 'price', title: 'STOCKPRICE'},
//     ]
// });

// let stockRecord = [];
// for(let i=0; i<500000; i++){
//     stockRecord.push({stockId: `stockIdx${i}`,  name: faker.lorem.word(), price: faker.random.number({min: 50, max: 200})})
// }
    
// csvWriter.writeRecords(stockRecord)       // returns a promise
// .then(() => {
//     console.log('...Done');
// });

let purchaseStrArr = [];
const seed = () => {
    console.log('making purchase queries');
    for(let i=0; i<10; i++){
        let userIdx = Math.floor(Math.random() * (10 - 0)) + 0;
        let stockIdx = Math.floor(Math.random() * (10 - 0)) + 0;
        let amount = Math.floor(Math.random() * (1000 - 0)) + 0;
        purchaseStrArr.push(
            `MATCH (s:STOCK) where s.id = 'stockIdx${stockIdx}'
            MATCH (u:USER) where u.id = 'userIdx${userIdx}'
            CREATE (u)-[:BOUGHT {amount:[${amount}]}]->(s)`
        )
    }
}
seed();
module.exports = purchaseStrArr;