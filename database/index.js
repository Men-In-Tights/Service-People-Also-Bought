const mongoose = require('mongoose');

const mongoUri = 'mongodb://Ben:Benm1024@ds157223.mlab.com:57223/robinhoodfec';
// const mongoUri = 'mongodb://localhost/robinhoodfec';
const db = mongoose.connect(mongoUri);

module.exports = db;

// const neo4j = require('neo4j-driver').v1;
// const driver = neo4j.driver("bolt://127.0.0.1:11001", neo4j.auth.basic("neo4j", "javier"));
// const session = driver.session();