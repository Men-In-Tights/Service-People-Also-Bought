const mongoose = require('mongoose');

// const mongoUri = 'mongodb://Ben:Benm1024@ds157223.mlab.com:57223/robinhoodfec';
const mongoUri = 'mongodb://localhost/robinhoodfec';
const db = mongoose.connect(mongoUri);

module.exports = db;
