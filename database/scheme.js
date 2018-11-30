const faker = require('faker');

// const createCsvWriter = require('csv-writer').createObjectCsvWriter;
// const csvWriter = createCsvWriter({
//     path: './userdatabase001.csv',
//     header: [
//         {id: 'userId', title: 'USERID'},
//         {id: 'name', title: 'USERNAME'}
//     ]
// });

// let userRecord = [];
// for(let i=0; i<2000000; i++){
//     userRecord.push({userId: i,  name: faker.lorem.word()})
// }
 
// csvWriter.writeRecords(userRecord)       // returns a promise
//     .then(() => {
//         console.log('...Done');
//     });

// const createCsvWriter = require('csv-writer').createObjectCsvWriter;
// const csvWriter = createCsvWriter({
//     path: './stockdatabase005.csv',
//     header: [
//         {id: 'stockId', title: 'STOCKID'},
//         {id: 'name', title: 'STOCKNAME'},
//         {id: 'price', title: 'STOCKPRICE'},
//         {id: 'recent', title: 'RECENTCHANGE'},
//         {id: 'changeamount', title: 'CHANGEAMOUNT'}
//     ]
// });

// let stockRecord = [];
// for(let i=8000000; i<10000001; i++){
//     stockRecord.push(
//         {
//             stockId: i,  
//             name: faker.lorem.word(), 
//             price: faker.random.number({min: 50, max: 2000}),
//             recent: faker.random.number({min: 1, max: 100}),
//             changeamount: faker.random.number({min: 10, max: 500})
//         })
// }

// csvWriter.writeRecords(stockRecord)       // returns a promise
// .then(() => {
//     console.log('...Done');
// });

const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: './purchaseTest.csv',
    header: [
        {id: 'stockId', title: 'STOCKID'},
        {id: 'userId', title: 'USERID'},
        {id: 'amount', title: 'AMOUNT'}
    ]
});

let stockRecord = [];
for(let i=0; i<10000; i++){
    stockRecord.push(
        {
            stockId: faker.random.number({min: 0, max: 10000000}),  
            userId: faker.random.number({min: 0, max: 1999999}),  
            amount: faker.random.number({min: 50, max: 2000})
        })
}

csvWriter.writeRecords(stockRecord)       // returns a promise
.then(() => {
    console.log('...Done');
});





    

// let purchaseStrArr = [];
// const seed = () => {
//     console.log('making purchase queries');
//     for(let i=0; i<10; i++){
//         let userIdx = Math.floor(Math.random() * (10 - 0)) + 0;
//         let stockIdx = Math.floor(Math.random() * (10 - 0)) + 0;
//         let amount = Math.floor(Math.random() * (1000 - 0)) + 0;
//         purchaseStrArr.push(
//             `MATCH (s:STOCK) where s.id = 'stockIdx${stockIdx}'
//             MATCH (u:USER) where u.id = 'userIdx${userIdx}'
//             CREATE (u)-[:BOUGHT {amount:[${amount}]}]->(s)`
//         )
//     }
// }
// seed();
// module.exports = purchaseStrArr;

// gcloud compute instances create robinhood-alsobought \
//    --scopes https://www.googleapis.com/auth/cloud-platform \
//    --image-project launcher-public --tags neo4j \
//    --image=neo4j-community-1-3-3-5